import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { getAdminClient } from "@/app/lib/supabase";
import { buildOfferPdf } from "@/app/lib/offerPdfServer";
import type { Variant } from "@/app/konfigurator/konfigurator-data";

const resend = new Resend(process.env.RESEND_API_KEY);

// Anhänge der Erstmail. Das EthikBank-Finanzierungsbeispiel wieder aufnehmen,
// sobald die Bank ein neues Beispiel mit den aktuellen Preisen liefert:
// { filename: "EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf", file: "public/EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf" },
const WELCOME_ATTACHMENTS = [
  { filename: "TinyInvest-Erstinformation.pdf", file: "public/TinyInvest-Erstinformation.pdf" },
];

const OFFER_TEXT: Record<Variant, string> = {
  ongrid: "On-Grid, 74.700 € netto",
  offgrid: "Off-Grid, 83.400 € netto",
};

const P = 'style="margin:0 0 16px;"';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Gemeinsamer Rahmen: Anrede, Inhalt, Signatur und Impressum
function buildEmailHtml(vorname: string, bodyHtml: string) {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222222;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td style="padding:24px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;">
          <tr>
            <td style="font-size:14px;line-height:1.7;color:#222222;">
              <p ${P}>Hallo ${escapeHtml(vorname)},</p>
              ${bodyHtml}
              <p style="margin:0 0 4px;">Mit freundlichen Grüßen,</p>
              <p style="margin:0 0 16px;">Michael Rautenberg</p>
              <img src="https://tinyhouse.investments/logo8.png" alt="TinyInvest" width="120" style="display:block;width:120px;max-width:120px;height:auto;margin:0 0 12px;" />
              <p style="margin:0;font-size:13px;line-height:1.7;color:#444444;">
                Michael Rautenberg &middot; +49 151 68957104<br/>
                <a href="mailto:info@tinyhouse.investments" style="color:#444444;">info@tinyhouse.investments</a> &middot; <a href="https://tinyhouse.investments" style="color:#444444;">tinyhouse.investments</a><br/>
                Baslerstraße 3, 61325 Bad Homburg v.d.Höhe
              </p>
              <p style="margin:16px 0 0;font-size:11px;line-height:1.6;color:#888888;">
                Rautenberg Professional Solutions GmbH &middot; Sitz der Gesellschaft: Bad Homburg v.d.Höhe &middot; Handelsregister: Amtsgericht Bad Homburg v.d.Höhe, HRB 99329 &middot; USt-IdNr.: DE324447673
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function buildWelcomeHtml(vorname: string, hasPhone: boolean, variant: Variant = "ongrid", withOffer = true) {
  const naechsterSchritt = hasPhone
    ? "Ich rufe Sie innerhalb der nächsten 24 Stunden (werktags) kurz an, um Ihre Fragen zu klären. Wenn Ihnen ein bestimmter Zeitpunkt lieber ist, antworten Sie einfach auf diese Mail."
    : "Schreiben Sie mir einfach kurz zurück, was für Sie wichtig ist, oder, wenn es schneller gehen soll, gerne auch Ihre Nummer, dann sprechen wir kurz.";

  return buildEmailHtml(
    vorname,
    `
              <p ${P}>vielen Dank für Ihr Interesse an TinyInvest!</p>
              <p ${P}>${withOffer
                ? `Anbei finden Sie unsere Erstinformation sowie Ihr persönliches Angebot für das Escape 660 (${OFFER_TEXT[variant]}).`
                : "Anbei finden Sie unsere Erstinformation. Das Escape 660 gibt es ab 74.700 € netto (On-Grid)."}</p>
              <p style="margin:0 0 8px;">Kurz zusammengefasst:</p>
              <ul style="margin:0 0 16px;padding-left:20px;">
                <li style="margin-bottom:6px;"><strong>Das Haus:</strong> Komplettpreis inkl. Ausstattung, Transport zum Standort und Aufstellung vor Ort.</li>
                <li style="margin-bottom:6px;"><strong>On-Grid oder Off-Grid:</strong> On-Grid nutzt einen vorhandenen Netzanschluss, Off-Grid-Modelle sind flexibler in der Standortwahl.</li>
                <li>📸 <strong>So wird Ihr Haus aussehen:</strong> Werfen Sie gerne schon vorab einen Blick in unsere <a href="https://tinyhouse.investments/galerie" style="color:#222222;">Bildergalerie</a>.</li>
              </ul>
              <p ${P}>Eine Finanzierung über unsere Partnerbank, die EthikBank eG, ist ebenfalls möglich. Sprechen Sie mich gerne darauf an.</p>
              <p ${P}><strong>${naechsterSchritt}</strong></p>
    `
  );
}

export function buildHostWelcomeHtml(vorname: string) {
  return buildEmailHtml(
    vorname,
    `
              <p ${P}>vielen Dank für Ihre Standort-Bewerbung bei TinyInvest!</p>
              <p ${P}>Wir prüfen Ihre Angaben zum Grundstück und melden uns in Kürze bei Ihnen. Wenn Sie vorab Fotos, einen Lageplan oder weitere Informationen haben, antworten Sie gerne einfach auf diese Mail.</p>
    `
  );
}

// modell: Auswahl aus dem Formular (z. B. "Escape 660 Off-Grid") – ohne Angabe On-Grid
export async function sendWelcomeEmail(
  vorname: string,
  email: string,
  telefon?: string | null,
  modell?: string | null
) {
  const variant: Variant = modell?.includes("Off-Grid") ? "offgrid" : "ongrid";

  const attachments = WELCOME_ATTACHMENTS.map(({ filename, file }) => ({
    filename,
    content: fs.readFileSync(path.join(process.cwd(), file)),
  }));

  // Angebot mit dem eingetragenen Namen erzeugen; schlägt das fehl, geht die Mail ohne Angebot raus
  let withOffer = true;
  try {
    attachments.push(await buildOfferPdf(variant, vorname));
  } catch (offerErr) {
    withOffer = false;
    console.error("Angebots-PDF error (non-fatal):", offerErr);
  }

  await resend.emails.send({
    from: "Michael Rautenberg <info@tinyhouse.investments>",
    to: email,
    subject: "Ihre Unterlagen zu TinyInvest: Erstinformation & Angebot",
    html: buildWelcomeHtml(vorname, Boolean(telefon?.trim()), variant, withOffer),
    attachments,
  });
}

export async function sendHostWelcomeEmail(vorname: string, email: string) {
  await resend.emails.send({
    from: "Michael Rautenberg <info@tinyhouse.investments>",
    to: email,
    subject: "Ihre Standort-Bewerbung bei TinyInvest",
    html: buildHostWelcomeHtml(vorname),
  });
}

// Nach erfolgreichem Versand der Welcome-Mail den Lead auf "Email gesendet" setzen.
// Der status-Guard verhindert, dass ein manuell weitergesetzter Lead zurückfällt.
export async function markWelcomeEmailSent(leadId?: string) {
  if (!leadId) return;

  const { error } = await getAdminClient()
    .from("leads")
    .update({ status: "email_gesendet" })
    .eq("id", leadId)
    .eq("status", "neu");

  if (error) console.error("Status-Update (non-fatal):", error);
}
