import arcjet, {
  detectBot,
  shield,
  tokenBucket,
  validateEmail,
} from "@arcjet/next";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 3,
      interval: "1m",
      capacity: 3,
    }),
    validateEmail({
      mode: "LIVE",
      block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),
  ],
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Arcjet protection
  const decision = await aj.protect(request, { email, requested: 1 });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in 15 minutes." },
        { status: 429 }
      );
    } else if (decision.reason.isBot()) {
      return NextResponse.json({ error: "Bot detected." }, { status: 403 });
    } else if (decision.reason.isEmail()) {
      return NextResponse.json(
        { error: "Invalid email address. Please use a valid email." },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ error: "Request blocked." }, { status: 403 });
    }
  }

  try {
    // Send email
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
