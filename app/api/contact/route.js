// Real contact endpoint (replaces the old dead /api/contact the static site called).
// Emails the shop via Resend when RESEND_API_KEY + CONTACT_TO_EMAIL are set.
// With no email configured it returns success:false so the client cleanly
// falls back to WhatsApp — the shop's primary channel — so the form always works.
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body || {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // $0 mode: no email provider wired → let the client use WhatsApp.
  if (!key || !to) {
    console.log('[contact] enquiry (email not configured):', { name, email, phone, subject });
    return Response.json({ success: false, message: 'Email not configured' }, { status: 200 });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Testi-Tech <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `[Testi-Tech] ${subject || 'New enquiry'} — ${name}`,
        text:
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\n` +
          `Subject: ${subject || 'General'}\n\n${message}`,
      }),
    });
    if (!r.ok) throw new Error(`Resend responded ${r.status}`);
    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    return Response.json({ success: false, message: 'Could not send' }, { status: 200 });
  }
}
