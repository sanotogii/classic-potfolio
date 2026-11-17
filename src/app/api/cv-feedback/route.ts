import arcjet, { shield, tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";
import { appendFeedbackRow } from "@/lib/google-sheets";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    tokenBucket({ mode: "LIVE", refillRate: 6, interval: "1h", capacity: 12 }),
  ],
});

const ACTIONS = ["submitted", "skipped", "closed"] as const;
type Action = (typeof ACTIONS)[number];

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  // Arcjet is a cloud call; skip it during local testing so one IP does not
  // exhaust the bucket while iterating.
  if (process.env.NODE_ENV !== "development") {
    const decision = await aj.protect(request, { requested: 1 });

    if (decision.isDenied()) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const action = data.action;
  if (typeof action !== "string" || !ACTIONS.includes(action as Action)) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  let rating: number | null = null;
  if (action === "submitted") {
    const value = Number(data.rating);
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }
    rating = value;
  }

  const seconds = Number(data.timeOnPage);

  const payload = {
    timestamp: new Date().toISOString(),
    action,
    rating,
    comment: action === "submitted" ? text(data.comment, 500) : "",
    source: "cv-qr",
    path: text(data.path, 200),
    referrer: text(data.referrer, 500),
    timeOnPage: Number.isFinite(seconds)
      ? Math.max(0, Math.min(Math.round(seconds), 86400))
      : 0,
    language: text(data.language, 20),
    viewport: text(data.viewport, 20),
    userAgent: request.headers.get("user-agent") ?? "",
    country: request.headers.get("cf-ipcountry") ?? "",
  };

  const hasServiceAccount = Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
  );
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!hasServiceAccount && !webhook) {
    console.error("Google Sheets is not configured");
    return NextResponse.json(
      { error: "Feedback is not configured" },
      { status: 503 }
    );
  }

  try {
    if (hasServiceAccount) {
      await appendFeedbackRow([
        payload.timestamp,
        payload.action,
        payload.rating ?? "",
        payload.comment,
        payload.source,
        payload.path,
        payload.referrer,
        payload.timeOnPage,
        payload.language,
        payload.viewport,
        payload.userAgent,
        payload.country,
      ]);
    } else if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let result: { ok?: boolean; error?: string } | null = null;
      try {
        result = JSON.parse(raw);
      } catch {
        result = null;
      }

      if (!response.ok || result?.ok !== true) {
        const detail = result?.error || raw.slice(0, 300) || "empty response";
        throw new Error(
          `Sheets webhook failed (HTTP ${response.status}): ${detail}`
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CV feedback error:", error);
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 502 }
    );
  }
}
