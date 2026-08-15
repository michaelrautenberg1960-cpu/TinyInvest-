import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildWelcomeHtml(vorname: string) {
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
              <p style="margin:0 0 16px;">Hallo ${vorname},</p>
              <p style="margin:0 0 16px;">vielen Dank für Ihr Interesse an TinyInvest!</p>
              <p style="margin:0 0 16px;">Damit Sie direkt alle wichtigen Details zur Hand haben, haben wir Ihnen unsere Erstinformation sowie ein Rechenbeispiel unserer Partnerbank, der EthikBank eG (ab 623 €/Monat bei 79.000 € Investition), als PDF an diese E-Mail angehängt.</p>
              <p style="margin:0 0 8px;">In der Erstinformation erfahren Sie auf einen Blick:</p>
              <ul style="margin:0 0 16px;padding-left:20px;">
                <li style="margin-bottom:6px;"><strong>Konzept:</strong> Wie das Direktinvestment durch den Kauf Ihres eigenen Assets in 3 Sätzen funktioniert</li>
                <li style="margin-bottom:6px;"><strong>Rendite &amp; Standorte:</strong> Welches Ertragspotenzial realistisch ist</li>
                <li>📸 <strong>So wird Ihr Haus aussehen:</strong> Werfen Sie gerne schon vorab einen Blick in unsere <a href="https://tinyhouse.investments/galerie" style="color:#222222;">Bildergalerie</a> und machen Sie sich ein Bild von der Ausstattung und dem Design.</li>
              </ul>
              <p style="margin:0 0 16px;">Da jeder Investor ganz unterschiedliche Voraussetzungen und Zielsetzungen mitbringt, gibt es bei uns keine Standardlösungen.</p>
              <p style="margin:0 0 16px;">Schreiben Sie mir einfach kurz zurück, was für Sie wichtig ist – oder wenn es schneller gehen soll, können wir auch gerne einen kurzen Telefontermin vereinbaren.</p>
              <p style="margin:0 0 4px;">Mit freundlichen Grüßen,</p>
              <p style="margin:0 0 16px;">Michael Rautenberg</p>
              <img src="https://tinyhouse.investments/logo8.png" alt="TinyInvest" width="120" style="display:block;width:120px;max-width:120px;height:auto;margin:0 0 12px;" />
              <p style="margin:0;font-size:13px;line-height:1.7;color:#444444;">
                Michael Rautenberg &middot; +49 151 68957104<br/>
                <a href="mailto:info@tinyhouse.investments" style="color:#444444;">info@tinyhouse.investments</a> &middot; <a href="https://tinyhouse.investments" style="color:#444444;">tinyhouse.investments</a><br/>
                Marie-Curie-Straße 1, 63457 Hanau
              </p>
              <p style="margin:16px 0 0;font-size:11px;line-height:1.6;color:#888888;">
                Rautenberg Professional Solutions GmbH &middot; Sitz der Gesellschaft: Hanau &middot; Handelsregister: Amtsgericht Hanau, HRB 99329 &middot; USt-IdNr.: DE324447673
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

export async function sendWelcomeEmail(vorname: string, email: string) {
  const erstinfoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/TinyInvest-Erstinformation.pdf")
  );
  const ethikbankBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf")
  );

  await resend.emails.send({
    from: "Michael Rautenberg <info@tinyhouse.investments>",
    to: email,
    subject: `Ihre Erstinformationen zu TinyInvest 🏡`,
    html: buildWelcomeHtml(vorname),
    attachments: [
      { filename: "TinyInvest-Erstinformation.pdf", content: erstinfoBuffer },
      { filename: "EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf", content: ethikbankBuffer },
    ],
  });
}
