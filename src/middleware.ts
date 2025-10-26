// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      characteristics: ["ip.src"],
      refillRate: 30,
      interval: "60s",
      capacity: 30,
    }),
  ],
});

export async function middleware(request: NextRequest) {
  const decision = await aj.protect(request, { requested: 1 });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      const isApiRoute = request.nextUrl.pathname.startsWith("/api");
      const acceptHeader = request.headers.get("accept");
      const isJsonRequest = acceptHeader?.includes("application/json");

      if (isApiRoute || isJsonRequest) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429 }
        );
      }

      return NextResponse.redirect(new URL("/rate-limit", request.url));
    }

    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
