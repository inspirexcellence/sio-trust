import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Fallback SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, inquiry, message } = body;

    const emailContent = {
      from: "SIO Website <contact@siotrust.org>", // Ensure this domain is verified in Resend
      to: "contact@siotrust.org",
      subject: `New Inquiry: ${inquiry} from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nInquiry: ${inquiry}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0a2540;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${inquiry}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 1. Try Resend first
    if (resend) {
      await resend.emails.send(emailContent);
      return NextResponse.json({ success: true, method: "resend" });
    }

    // 2. Try SMTP if configured
    if (process.env.SMTP_HOST) {
      await transporter.sendMail(emailContent);
      return NextResponse.json({ success: true, method: "smtp" });
    }

    // 3. If nothing configured, log and fail (or simulate success for testing if desired)
    console.warn("No email service configured (Resend or SMTP). Logged message:", body);
    return NextResponse.json({ 
      success: false, 
      message: "Email service not configured. Check your environment variables." 
    }, { status: 501 });

  } catch (error: any) {
    console.error("Email API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
