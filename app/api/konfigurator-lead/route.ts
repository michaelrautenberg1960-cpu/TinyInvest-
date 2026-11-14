import { NextRequest, NextResponse } from "next/server";
import { parseLeadSource, insertLead, leadSourceHtml } from "@/app/lib/leadSource";
import { sendKonfiguratorOfferEmail, markWelcomeEmailSent } from "@/app/lib/sendWelcomeEmail";
import { EXTRAS, VARIANT_SHORT, calcOffer, type Variant } from "@/app/konfigurator/konfigurator-data";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Konfigurator: Lead beim PDF-Download speichern, intern melden und Angebot per Mail schicken
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const address = String(body.address ?? "").trim();
    const salesAgent = String(body.salesAgent ?? "").trim();
    const variant: Variant = body.variant === "offgrid" ? "offgrid" : "ongrid";
    const extraIds: string[] = Array.isArray(body.extraIds)
      ? body.extraIds.filter((id: unknown) => EXTRAS.some((e) => e.id === id))
      : [];

    if (!name || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Name oder E-Mail fehlt" }, { status: 400 });
    }

    const calc = calcOffer(variant, Number(body.units) || 1, extraIds);
    const modell = `Escape 660 ${VARIANT_SHORT[variant]}`;
    const extrasText = extraIds.length
      ? EXTRAS.filter((e) => extraIds.includes(e.id)).map((e) => e.label).join(", ")
      : "keine";

    const nachricht = [
      `🧮 Konfigurator-Angebot: ${calc.units} × ${modell}, Gesamt ${EUR(calc.totalNet)} netto`,
      `Extras: ${extrasText}`,
      address ? `📍 Adresse: ${address}` : null,
      salesAgent ? `🤝 Vertriebspartner: ${salesAgent}` : null,
    ].filter(Boolean).join("\n");

    const source = parseLeadSource(body.source);
    const { data: inserted, error: dbError } = await insertLead({
        vorname: name,
        nachname: null,
        email,
        telefon: null,
        interesse: "Konfigurator-Angebot (PDF)",
        budget: modell,
        investment_volumen: String(calc.units),
        nachricht,
        status: "neu",
      }, source);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
    }
    const leadId: string | undefined = inserted?.[0]?.id;

    // Interne Benachrichtigung (non-blocking)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: process.env.RESEND_TO!,
        subject: `🧮 Konfigurator-Angebot – ${name} – ${calc.units} × ${modell}`,
        html: `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#14532d;padding:28px 32px;">
            <p style="margin:0;font-size:11px;color:#86efac;letter-spacing:2px;text-transform:uppercase;font-weight:600;">TinyInvest Konfigurator</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff;">🧮 Angebot heruntergeladen</h1>
            <p style="margin:6px 0 0;font-size:14px;color:#bbf7d0;">${escapeHtml(name)} · ${calc.units} × ${modell}</p>
            ${leadSourceHtml(source, "#86efac")}
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;color:#111827;">
              <tr><td style="padding:8px 0;color:#6b7280;width:160px;">E-Mail</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#14532d;font-weight:700;">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Adresse</td><td style="padding:8px 0;">${escapeHtml(address) || "–"}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Vertriebspartner</td><td style="padding:8px 0;">${escapeHtml(salesAgent) || "–"}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Modell</td><td style="padding:8px 0;font-weight:700;">${modell}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Einheiten</td><td style="padding:8px 0;">${calc.units}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Extras</td><td style="padding:8px 0;">${escapeHtml(extrasText)}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;">Gesamt netto</td><td style="padding:8px 0;font-weight:700;">${EUR(calc.totalNet)}</td></tr>
            </table>
            <p style="margin:20px 0 0;font-size:13px;color:#374151;">Hohe Kaufabsicht: Der Kunde hat ein konkretes Angebot erstellt. Keine Telefonnummer angegeben – per Mail nachfassen.</p>
            <a href="https://tinyhouse.investments/admin" style="display:inline-block;margin-top:16px;background:#14532d;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 22px;border-radius:8px;">Admin Dashboard öffnen →</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      });
    } catch (emailErr) {
      console.error("Resend error (non-fatal):", emailErr);
    }

    // Angebot an den Kunden (solange Kundenmails pausiert sind, wird nichts verschickt)
    try {
      const sent = await sendKonfiguratorOfferEmail(name, email, variant, {
        units: calc.units,
        extraIds,
        address,
        salesAgent,
      });
      if (sent) await markWelcomeEmailSent(leadId);
    } catch (offerErr) {
      console.error("Konfigurator offer email error (non-fatal):", offerErr);
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err) {
    console.error("Konfigurator lead API error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
