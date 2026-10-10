interface Env { RESEND_API_KEY?: string; RESEND_SEGMENT_ID?: string; NEWSLETTER_ENABLED?: string; }
const json = (data: Record<string, unknown>, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
// No emails or automation events are sent here. Keys are server-side bindings only.
export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const origin = new URL(request.url).origin;
  if (request.headers.get('Origin') !== origin) return json({ error: 'Please use the signup form on this site.' }, 403);
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json({ error: 'Invalid request.' }, 415);
  if (Number(request.headers.get('Content-Length') ?? 0) > 2048) return json({ error: 'Invalid request.' }, 413);
  let data: { email?: unknown; website?: unknown };
  try { const body = await request.text(); if (body.length > 2048) return json({ error: 'Invalid request.' }, 413); data = JSON.parse(body); } catch { return json({ error: 'Enter a valid email address.' }, 400); }
  if (data.website) return json({ ok: true });
  const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Enter a valid email address.' }, 400);
  if (env.NEWSLETTER_ENABLED !== 'true' || !env.RESEND_API_KEY || !env.RESEND_SEGMENT_ID) return json({ error: 'Signup is not open yet. Please try again later.' }, 503);
  const headers = { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' };
  try {
    const existing = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}`, { headers });
    if (existing.ok) {
      const contact = await existing.json() as { id: string; unsubscribed?: boolean };
      // Never override a prior opt-out. Return a generic response to avoid exposing contact status.
      if (contact.unsubscribed) return json({ ok: true });
      const result = await fetch(`https://api.resend.com/contacts/${contact.id}/segments/${encodeURIComponent(env.RESEND_SEGMENT_ID)}`, { method: 'POST', headers });
      if (!result.ok) return json({ error: 'Signup could not be saved. Please try again later.' }, 502);
    } else if (existing.status === 404) {
      const result = await fetch('https://api.resend.com/contacts', { method: 'POST', headers, body: JSON.stringify({ email, unsubscribed: false, segments: [{ id: env.RESEND_SEGMENT_ID }] }) });
      if (!result.ok) return json({ error: 'Signup could not be saved. Please try again later.' }, 502);
    } else return json({ error: 'Signup could not be saved. Please try again later.' }, 502);
    return json({ ok: true });
  } catch { return json({ error: 'Signup could not be saved. Please try again later.' }, 502); }
};
