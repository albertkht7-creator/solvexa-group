import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, company, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "- ";
    const safeCompany = company ? escapeHtml(company) : "- ";
    const safeMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: "SOLVEXA GROUP <onboarding@resend.dev>",
      to: "hello@solvexagroup.co",
      replyTo: email,
      subject: `Nowe zapytanie od ${String(name)}`,
      html: `
        <h2>Nowe zapytanie ze strony solvexagroup.com</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td><strong>Imię i nazwisko</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${safePhone}</td></tr>
          <tr><td><strong>Firma</strong></td><td>${safeCompany}</td></tr>
          <tr><td><strong>Wiadomość</strong></td><td style="white-space:pre-line">${safeMessage}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
