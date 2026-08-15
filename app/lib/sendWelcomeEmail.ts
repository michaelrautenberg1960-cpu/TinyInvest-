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
              <p style="margin:0 0 16px;">vielen Dank für Ihr Interesse an TinyInvest.</p>
              <p style="margin:0 0 16px;">Aktuell realisieren wir gemeinsam mit unseren lokalen Partnern unser Highlight-Projekt in Apulien (Süditalien) – den Escape 660 für 79.000 €. Die Region ist touristisch stark im Kommen und bietet aus unserer Sicht ein sehr attraktives Gesamtpaket.</p>
              <p style="margin:0 0 16px;">Gleichzeitig ist jeder Investor anders aufgestellt. Wenn Sie zum Beispiel eher Interesse an einem Standort in einer anderen Region hätten oder andere Vorstellungen mitbringen, finden wir da sicher eine passende Lösung.</p>
              <p style="margin:0 0 16px;">Schreiben Sie mir einfach kurz zurück, was für Sie wichtig ist – oder wenn es schneller gehen soll, können wir gerne einen Telefontermin vereinbaren.</p>
              <p style="margin:0 0 16px;">Im Anhang finden Sie bereits unsere TinyInvest-Erstinformation mit allen Eckdaten. Das Finanzierungsbeispiel unseres Partners, der EthikBank, können Sie sich hier ansehen: <a href="https://tinyhouse.investments/EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf" style="color:#222222;">tinyhouse.investments/EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf</a></p>
              <p style="margin:0 0 16px;">Weitere Eindrücke unserer Tiny Houses finden Sie in unserer Galerie: <a href="https://tinyhouse.investments/galerie" style="color:#222222;">tinyhouse.investments/galerie</a></p>
              <p style="margin:0 0 4px;">Mit freundlichen Grüßen</p>
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
    subject: `Vielen Dank für Ihr Interesse an TinyInvest, ${vorname}`,
    html: buildWelcomeHtml(vorname),
    attachments: [
      { filename: "TinyInvest-Erstinformation.pdf", content: erstinfoBuffer },
      { filename: "EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf", content: ethikbankBuffer },
    ],
  });
}
