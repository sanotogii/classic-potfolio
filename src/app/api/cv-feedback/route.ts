import arcjet, { shield, tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";

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
  const decision = await aj.protect(request, { requested: 1 });

  if (decision.isDenied()) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
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
  if (!ACTIONS.includes(action as Action)) {
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

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Feedback is not configured" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json().catch(() => null)) as {
      ok?: boolean;
    } | null;

    if (!response.ok || result?.ok === false) {
      throw new Error(`Sheets webhook returned ${response.status}`);
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
