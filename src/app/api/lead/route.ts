type LeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  services: string;
  timeline: string;
  message: string;
  consent_marketing: boolean;
  consent_non_marketing: boolean;
  website?: string;
  page_url?: string;
};

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots learn nothing.
  if (str(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const lead: LeadPayload = {
    first_name: str(body.first_name, 100),
    last_name: str(body.last_name, 100),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    company_name: str(body.company_name, 200),
    services: str(body.services, 400),
    timeline: str(body.timeline, 100),
    message: str(body.message, 2000),
    consent_marketing: body.consent_marketing === true,
    consent_non_marketing: body.consent_non_marketing === true,
    page_url: str(body.page_url, 500),
  };

  const phoneDigits = lead.phone.replace(/\D/g, "");
  if (
    !lead.first_name ||
    !EMAIL_RE.test(lead.email) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    return Response.json(
      { ok: false, error: "Please check your name, email and phone number." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GHL_WEBHOOK_URL is not set; lead was not forwarded.");
    return Response.json(
      { ok: false, error: "Form is temporarily unavailable." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "AniyaNetworks landing page",
        submitted_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(`GHL webhook responded ${res.status}`);
      return Response.json(
        { ok: false, error: "We couldn't send your request. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("GHL webhook request failed", err);
    return Response.json(
      { ok: false, error: "We couldn't send your request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
