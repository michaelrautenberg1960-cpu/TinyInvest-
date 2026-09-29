import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";
import { sendWelcomeEmail, sendHostWelcomeEmail, markWelcomeEmailSent } from "@/app/lib/sendWelcomeEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      vorname,
      nachname,
      email,
      telefon,
      interesse,
      budget,
      location,
      investmentVolumen,
      kontaktZeit,
      iab,
      nachricht,
      hostRegion,
      hostFlaeche,
      hostEigentum,
      hostBebauung,
      hostVersorgung,
      hostAnzahl,
      schritt,
      leadId,
    } = body;

    // Schritt 2 übersprungen: Lead aus Schritt 1 bleibt unverändert, nur die Erstmail wird verschickt
    if (schritt === "Schritt 2 übersprungen") {
      if (!leadId) return NextResponse.json({ error: "Fehlende leadId" }, { status: 400 });

      const { data: lead, error: dbError } = await getAdminClient()
        .from("leads")
        .select("vorname, email, telefon, budget, status")
        .eq("id", leadId)
        .single();

      if (dbError || !lead) {
        console.error("Supabase error:", dbError);
        return NextResponse.json({ error: "Lead nicht gefunden" }, { status: 404 });
      }

      if (lead.status === "neu") {
        try {
          await sendWelcomeEmail(lead.vorname, lead.email, lead.telefon, lead.budget);
          await markWelcomeEmailSent(leadId);
        } catch (welcomeErr) {
          console.error("Welcome email error (non-fatal):", welcomeErr);
        }
      }

      return NextResponse.json({ success: true, leadId });
    }

    const isHost = interesse === "Host-Bewerbung (Standort / Grundstück)";

    const hostSummary = isHost
      ? `📍 Region: ${hostRegion || "–"} | 📐 Größe: ${hostFlaeche || "–"} | 📜 Eigentum: ${hostEigentum || "–"} | 🗺️ Bebauung: ${hostBebauung || "–"} | ⚡ Versorgung: ${hostVersorgung || "–"} | 🏠 Anzahl THs: ${hostAnzahl || "–"}`
      : null;

    // IAB (§ 7g): muss bis Ende des dritten Folgejahres durch eine Investition verbraucht werden
    const iabJahr = !isHost && typeof iab === "string" ? iab.match(/\d{4}/)?.[0] : undefined;
    const iabFrist = iabJahr ? Number(iabJahr) + 3 : null;
    const iabDringend = iabFrist !== null && iabFrist <= new Date().getFullYear();
    const iabSummary = !isHost && iab
      ? `🧾 IAB § 7g: ${iab}${iabFrist ? ` (Investitionsfrist 31.12.${iabFrist})` : ""}`
      : null;

    const finalNachricht = [nachricht, hostSummary, iabSummary].filter(Boolean).join("\n\n") || null;

    // 1. Save to Supabase — update the existing lead (Schritt 2) instead of creating a second row
    const leadFields = {
      vorname,
      nachname,
      email,
      telefon: telefon || null,
      interesse,
      budget: isHost ? null : budget,
      location: isHost ? null : (location || null),
      investment_volumen: isHost ? null : (investmentVolumen || null),
      kontakt_zeit: kontaktZeit || null,
      nachricht: finalNachricht,
      status: "neu",
    };

    let resultLeadId: string | undefined = leadId;

    if (leadId) {
      const { error: dbError } = await getAdminClient()
        .from("leads")
        .update(leadFields)
        .eq("id", leadId);

      if (dbError) {
        console.error("Supabase error:", dbError);
        return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
      }
    } else {
      const { data: inserted, error: dbError } = await getAdminClient()
        .from("leads")
        .insert([leadFields])
        .select("id");

      if (dbError) {
        console.error("Supabase error:", dbError);
        return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
      }
      resultLeadId = inserted?.[0]?.id;
    }

    // 2. Send email notification via Resend (non-blocking)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: process.env.RESEND_TO!,
        subject: `🏡 Neue TinyInvest Anfrage – ${vorname}`,
        html: `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:28px 32px;">
            <p style="margin:0;font-size:11px;color:#93c5fd;letter-spacing:2px;text-transform:uppercase;font-weight:600;">TinyInvest</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff;">🏡 Neue TinyInvest Anfrage</h1>
            <p style="margin:6px 0 0;font-size:14px;color:#bfdbfe;">${vorname} ${nachname || ""} · ${interesse}</p>
          </td>
        </tr>

        ${iabDringend ? `
        <!-- IAB-Frist -->
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0;font-size:14px;font-weight:700;color:#92400e;background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;padding:12px 16px;">
              ⚠️ IAB ${iabJahr}: Investitionsfrist endet 31.12.${iabFrist} – zuerst anrufen
            </p>
          </td>
        </tr>
        ` : ""}

        <!-- Kontaktdaten -->
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Kontaktdaten</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:160px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:700;">${vorname} ${nachname || ""}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">E-Mail</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;"><a href="mailto:${email}" style="color:#1e3a5f;font-weight:700;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Telefon</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${telefon || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#6b7280;font-weight:600;">Erreichbar</td>
                <td style="padding:10px 0;font-size:14px;color:#1e3a5f;font-weight:700;">${kontaktZeit || "–"}</td>
              </tr>
            </table>
          </td>
        </tr>

        ${budget && !isHost ? `
        <!-- Asset-Interesse -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Asset-Interesse</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:160px;">Modell</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:700;">${budget || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Zielmarkt</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${location || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Anzahl Häuser</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${investmentVolumen || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#6b7280;font-weight:600;">IAB § 7g</td>
                <td style="padding:10px 0;font-size:14px;color:#111827;">${iab ? `${iab}${iabFrist ? ` (Frist 31.12.${iabFrist})` : ""}` : "–"}</td>
              </tr>
            </table>
          </td>
        </tr>
        ` : ""}

        ${isHost ? `
        <!-- Host-Angaben -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Grundstück / Standort</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:160px;">Region</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${hostRegion || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Grundstücksgröße</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${hostFlaeche || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Eigentum</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${hostEigentum || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Bebauungsplan</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${hostBebauung || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Versorgung</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${hostVersorgung || "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#6b7280;font-weight:600;">Anzahl Tiny Houses</td>
                <td style="padding:10px 0;font-size:14px;color:#111827;">${hostAnzahl || "–"}</td>
              </tr>
            </table>
          </td>
        </tr>
        ` : ""}

        ${nachricht ? `
        <!-- Nachricht -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Nachricht</p>
            <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;background:#f9fafb;border-radius:10px;padding:14px 16px;">${nachricht}</p>
          </td>
        </tr>
        ` : ""}

        <!-- CTA -->
        <tr>
          <td style="padding:28px 32px 32px;">
            <div style="background:#eff6ff;border-radius:12px;padding:20px 24px;border:1px solid #bfdbfe;">
              <p style="margin:0 0 14px;font-size:13px;color:#1e3a5f;line-height:1.5;">
                ✅ Lead wurde automatisch in deinem Admin Dashboard gespeichert.
              </p>
              <a href="https://tinyhouse.investments/admin"
                style="display:inline-block;background:#1e3a5f;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 22px;border-radius:8px;">
                Admin Dashboard öffnen →
              </a>
            </div>
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

    // 3. Send welcome email to the lead themselves once the full form is submitted
    //    (Memorandum Schritt 2 or the Kontakt form, which sends no schritt)
    if (schritt !== "Schnell-Anfrage (Schritt 1)") {
      try {
        if (isHost) {
          await sendHostWelcomeEmail(vorname, email);
        } else {
          await sendWelcomeEmail(vorname, email, telefon, isHost ? null : budget);
        }
        await markWelcomeEmailSent(resultLeadId);
      } catch (welcomeErr) {
        console.error("Welcome email error (non-fatal):", welcomeErr);
      }
    }

    return NextResponse.json({ success: true, leadId: resultLeadId });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
