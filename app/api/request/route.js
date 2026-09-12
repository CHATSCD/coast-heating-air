export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX = { name: 120, phone: 40, service: 120, urgency: 40, notes: 1200 };

function clean(value, limit) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
}

/**
 * Receives request-service submissions from the site.
 *
 * Persists to Supabase's `service_requests` table when SUPABASE_URL plus
 * SUPABASE_SERVICE_ROLE_KEY / SUPABASE_ANON_KEY are configured. When they
 * aren't, the submission is logged server-side and the visitor still gets a
 * success confirmation — so the form is never a dead end.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot filled = bot. Pretend success, store nothing.
  if (clean(body.company, 50)) {
    return Response.json({ ok: true });
  }

  const record = {
    name: clean(body.name, MAX.name),
    phone: clean(body.phone, MAX.phone),
    service: clean(body.service, MAX.service),
    urgency: clean(body.urgency, MAX.urgency),
    notes: clean(body.notes, MAX.notes),
    source: "website",
  };

  if (record.name.length < 2) {
    return Response.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (record.phone.replace(/\D/g, "").length < 10) {
    return Response.json(
      { ok: false, error: "A valid phone number is required." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  const payload = { ...record, user_agent: clean(request.headers.get("user-agent"), 300) };

  if (supabaseUrl && supabaseKey) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/service_requests`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      if (!response.ok) {
        console.error(
          "[service-request] Supabase insert failed",
          response.status,
          await response.text().catch(() => "")
        );
      }
    } catch (error) {
      console.error("[service-request] Supabase insert error", error);
    }
  } else {
    console.warn(
      "[service-request] Supabase env vars not set — submission not persisted:",
      payload
    );
  }

  return Response.json({ ok: true });
}
