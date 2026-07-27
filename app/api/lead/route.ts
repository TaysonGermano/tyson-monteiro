import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please enter your name and email." },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || "taysongermano@gmail.com";

  if (!apiKey || !from) {
    console.error("Resend is not configured: missing RESEND_API_KEY or CONTACT_FROM.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New lead from the site popup</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p>They opted in via the lead-capture popup and want to hear from you.</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New lead: ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not submit. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending lead email:", err);
    return NextResponse.json(
      { error: "Could not submit. Please try again." },
      { status: 500 },
    );
  }
}
