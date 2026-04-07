import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

function escapeHtml(s) {
	return s.replace(/[&<>"']/g, (c) =>
		({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
	);
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === "/api/contact" && request.method === "POST") {
			return handleContact(request, env);
		}

		// Everything else is handled by the static assets binding
		return env.ASSETS.fetch(request);
	},
};

async function handleContact(request, env) {
	const origin = request.headers.get("Origin") || "";
	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": origin,
	};

	try {
		const body = await request.json();
		const { name, email, message, website } = body;

		// Honeypot
		if (website && website.trim() !== "") {
			return new Response(JSON.stringify({ ok: true }), { headers });
		}

		// Validation
		const errors = {};
		if (!name || name.trim().length < 1) errors.name = ["Name is required"];
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = ["Email is not in a valid format"];
		if (!message || message.trim().length < 10) errors.message = ["Message must be at least 10 characters"];

		if (Object.keys(errors).length > 0) {
			return new Response(JSON.stringify({ ok: false, errors }), { status: 400, headers });
		}

		const msg = createMimeMessage();
		msg.setSender({ name: "benwille.dev Contact", addr: "webmaster@benwille.dev" });
		msg.setRecipient("ben.wille@gmail.com");
		msg.setSubject(`New message from ${name}`);
		msg.addMessage({
			contentType: "text/html",
			data: `
				<h2>New contact form submission</h2>
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Message:</strong></p>
				<pre style="white-space:pre-wrap;font:inherit">${escapeHtml(message)}</pre>
			`,
		});

		// mimetext's setHeader doesn't support Reply-To, so inject it into the raw MIME
		const raw = msg.asRaw().replace("Subject:", `Reply-To: ${email}\r\nSubject:`);

		const emailMessage = new EmailMessage(
			"webmaster@benwille.dev",
			"ben.wille@gmail.com",
			raw,
		);

		await env.SEND_EMAIL.send(emailMessage);

		return new Response(JSON.stringify({ ok: true }), { headers });
	} catch (err) {
		console.error("Contact form error:", err);
		return new Response(
			JSON.stringify({ ok: false, error: "Failed to send message" }),
			{ status: 500, headers },
		);
	}
}
