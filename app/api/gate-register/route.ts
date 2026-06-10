import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, listing_id } = await req.json();
    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    const admin = getAdminClient();

    await admin.from("leads").insert([{
      vorname:   name,
      nachname:  null,
      email,
      telefon:   phone,
      interesse: `Projekt-Detail Freischaltung${listing_id ? ` #${listing_id}` : ""}`,
      budget:    null,
      status:    "neu",
    }]);

    // Fetch listing title for the email
    let listingTitle = "–";
    if (listing_id) {
      const { data } = await admin.from("listings").select("title").eq("id", listing_id).single();
      if (data?.title) listingTitle = data.title;
    }

    // Send email notification (non-blocking)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to:   process.env.RESEND_TO!,
        subject: `🔓 Marktplatz-Freischaltung – ${name}${listing_id ? ` – Projekt #${listing_id}` : ""}`,
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
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff;">🔓 Marktplatz-Freischaltung</h1>
            <p style="margin:6px 0 0;font-size:14px;color:#bfdbfe;">${name}${listing_id ? ` · Projekt #${listing_id}: ${listingTitle}` : ""}</p>
          </td>
        </tr>

        <!-- Kontaktdaten -->
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Kontaktdaten</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:160px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:700;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">E-Mail</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;"><a href="mailto:${email}" style="color:#1e3a5f;font-weight:700;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#6b7280;font-weight:600;">Telefon</td>
                <td style="padding:10px 0;font-size:14px;color:#111827;">${phone}</td>
              </tr>
            </table>
          </td>
        </tr>

        ${listing_id ? `
        <!-- Freigeschaltetes Projekt -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Freigeschaltetes Projekt</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:160px;">Listing ID</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:700;">#${listing_id}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;">Projekt</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">${listingTitle}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#6b7280;font-weight:600;">Link</td>
                <td style="padding:10px 0;font-size:14px;"><a href="https://tinyhouse.investments/marktplatz/${listing_id}" style="color:#1e3a5f;font-weight:700;text-decoration:none;">marktplatz/${listing_id} →</a></td>
              </tr>
            </table>
          </td>
        </tr>
        ` : ""}

        <!-- Freigeschaltete Inhalte -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Freigeschaltete Inhalte</p>
            <p style="margin:0;font-size:14px;color:#374151;line-height:1.8;background:#f9fafb;border-radius:10px;padding:14px 16px;">
              📍 Adresse &amp; Karte<br>
              🛋 Ausstattung &amp; Extras<br>
              🏢 Betreiber-Profil<br>
              📄 Unterlagen &amp; Exposé
            </p>
          </td>
        </tr>

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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
