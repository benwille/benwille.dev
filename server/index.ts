import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import nodemailer from "nodemailer";

const app = express();

// tighten in prod: cors({ origin: "https://yourdomain.com" })
app.use(cors({ origin: true }));
app.use(express.json({ limit: "200kb" }));

const limiter = rateLimit({ windowMs: 60_000, max: 10 });
app.use("/api/contact", limiter);

const schema = z.object({
	name: z.string().trim().min(1, 'Name is required'),
	email: z.string().trim().email('Email is not in a valid format'),
	message: z
		.string()
		.trim()
		.min(10, 'Message must be at least 10 characters'),
	website: z.string().optional(),
});

const CONTACT_TO = mustEnv("CONTACT_TO");
const CONTACT_FROM = process.env.CONTACT_FROM || "Contact <no-reply@yourdomain.com>";

const transporter = nodemailer.createTransport({
  host: mustEnv("SMTP_HOST"),
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: String(process.env.SMTP_SECURE ?? "true") === "true",
  auth: {
    user: mustEnv("SMTP_USER"),
    pass: mustEnv("SMTP_PASS")
  }
});

// app.post("/api/contact", (req, res) => {
//   const parsed = schema.safeParse(req.body);
//   if (!parsed.success) {
//     return res.status(400).json({
//       ok: false,
//       errors: parsed.error.flatten().fieldErrors, 
//     });
//   }

app.post("/api/contact", async (req, res) => {
  try {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      errors: parsed.error.flatten().fieldErrors, 
    });
  }
    const { name, email, message, website } = parsed.data;

    // Honeypot: if bots fill it, silently ignore
    if (website && website.trim() !== "") return res.status(204).end();

    const subject = `New message from ${name}`;
    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font:inherit">${escapeHtml(message)}</pre>
    `;

    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      replyTo: email,
      subject,
      html
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`Contact API listening on http://localhost:${port}`));

function mustEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}
