import { BASE_OG } from "@/app/lib/og";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Datenschutzerklärung – TinyInvest",
  description: "Datenschutzerklärung der TinyInvest GmbH gemäß DSGVO.",
  alternates: {
    canonical: "https://tinyhouse.investments/datenschutz",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Datenschutzerklärung – TinyInvest",
    description: "Datenschutzerklärung der TinyInvest GmbH gemäß DSGVO.",
    url: "https://tinyhouse.investments/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main className="min-h-screen bg-gray-950 text-gray-100 pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors mb-8"
            >
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-4xl font-black text-white mt-4 mb-2">Datenschutzerklärung</h1>
            <p className="text-gray-400 text-sm">Stand: Oktober 2026 · Gemäß DSGVO, BDSG und TDDDG</p>
          </div>

          <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der DSGVO ist:
              </p>
              <p className="mt-3">
                Rautenberg Professional Solutions GmbH<br />
                Marie-Curie-Straße 1<br />
                63457 Hanau<br />
                Deutschland<br />
                Telefon: +49 151 68957104<br />
                E-Mail:{" "}
                <a href="mailto:info@tinyhouse.investments" className="text-green-400 hover:text-green-300 transition-colors">
                  info@tinyhouse.investments
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">2. Grundsätze der Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Angebote,
                zur Vertragserfüllung oder auf Basis einer rechtlichen Grundlage erforderlich ist. Wir erheben
                nur die Daten, die für den jeweiligen Zweck tatsächlich benötigt werden (Datensparsamkeit).
                Die Verarbeitung erfolgt transparent, zweckgebunden und sicher.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">3. Rechtsgrundlagen der Verarbeitung</h2>
              <p>Soweit wir personenbezogene Daten verarbeiten, erfolgt dies auf Basis folgender Rechtsgrundlagen:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung der betroffenen Person</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO – Erfüllung rechtlicher Verpflichtungen</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen des Verantwortlichen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">4. Datenerhebung beim Websitebesuch</h2>
              <p>
                Beim Aufruf unserer Website übermittelt Ihr Browser automatisch technische Daten an unseren Hosting-Server.
                Diese sogenannten Server-Log-Dateien enthalten:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li>IP-Adresse (anonymisiert gespeichert)</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>Aufgerufene URL</li>
                <li>Referrer-URL (Seite, von der Sie kamen)</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
                <li>Übertragene Datenmenge und HTTP-Statuscode</li>
              </ul>
              <p className="mt-3">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) zur
                Sicherstellung des sicheren Betriebs. Log-Dateien werden nach spätestens 7 Tagen automatisch gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">5. Hosting</h2>
              <p>
                Diese Website wird bei Netlify, Inc., San Francisco, gehostet.
                Netlify ist als Auftragsverarbeiter gemäß Art. 28 DSGVO tätig; ein Auftragsverarbeitungsvertrag (AVV) liegt vor.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sichere und schnelle Bereitstellung der Website). Hinweise
                zur Drittlandübermittlung finden Sie in Abschnitt 11.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">6. Kontaktformular, E-Mail-Kontakt und Investoren-Bereich</h2>
              <p>
                Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen
                übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) ausschließlich zur Bearbeitung
                Ihrer Anfrage. Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
              </p>
              <p className="mt-3">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigte Interessen). Daten aus reinen Kontaktanfragen werden nach abschließender Bearbeitung gelöscht,
                sofern keine gesetzlichen Aufbewahrungspflichten bestehen (in der Regel 6–10 Jahre gemäß HGB/AO).
              </p>
              <p className="mt-3">
                <strong className="text-white">Datenbank und Login (Supabase):</strong> Formularanfragen und Zugänge zum
                Investoren-Bereich speichern wir in einer Datenbank des Anbieters Supabase Inc. Supabase ist als
                Auftragsverarbeiter gemäß Art. 28 DSGVO tätig; ein AVV liegt vor. Nach einem Login im Investoren-Bereich
                wird ein Anmelde-Token im Local Storage Ihres Browsers gespeichert, der für die Anmeldung technisch
                erforderlich ist (§ 25 Abs. 2 Nr. 2 TDDDG).
              </p>
              <p className="mt-3">
                <strong className="text-white">E-Mail-Versand (Resend):</strong> Benachrichtigungen über eingegangene
                Anfragen und Bestätigungs-E-Mails an Sie versenden wir über den Dienst Resend (Plus Five Five, Inc.).
                Dabei werden Ihr Name, Ihre E-Mail-Adresse und der Inhalt der Nachricht verarbeitet. Resend ist als
                Auftragsverarbeiter gemäß Art. 28 DSGVO tätig; Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">7. Cookies und Einwilligungsverwaltung</h2>
              <p>
                Beim ersten Besuch fragen wir Sie über unser Einwilligungs-Banner, welchen Services Sie zustimmen. Die
                Services sind in Kategorien eingeteilt:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Essenziell</strong> – technisch notwendige Speicherungen (immer aktiv, keine Einwilligung erforderlich)</li>
                <li><strong className="text-gray-300">Statistik</strong> – Google Analytics (Abschnitt 8), nur mit Einwilligung</li>
                <li><strong className="text-gray-300">Funktional</strong> – Google Maps (Abschnitt 9) und YouTube (Abschnitt 10), nur mit Einwilligung</li>
              </ul>
              <p className="mt-3">
                Ihre Auswahl speichern wir im Local Storage Ihres Browsers („cookie-consent“), damit das Banner nicht bei
                jedem Seitenaufruf erneut erscheint. Diese Speicherung ist unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG)
                und dient dem Nachweis Ihrer Einwilligung (Art. 6 Abs. 1 lit. c i. V. m. Art. 7 Abs. 1 DSGVO).
              </p>
              <p className="mt-3">
                <strong className="text-white">Widerruf:</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung für die
                Zukunft ändern oder widerrufen, indem Sie unten auf der Seite „Cookie-Einstellungen“ öffnen. Wählen Sie
                „Statistik“ ab, werden bereits gesetzte Google-Analytics-Cookies gelöscht.
              </p>
              <p className="mt-3">
                Weitere Analyse-, Marketing- oder Tracking-Tools (z. B. Meta Pixel) setzen wir nicht ein.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">8. Google Analytics (Kategorie „Statistik“)</h2>
              <p>
                Wenn Sie der Kategorie „Statistik“ zustimmen, nutzen wir Google Analytics 4, einen Webanalysedienst der
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google Analytics erstellt
                Statistiken darüber, wie Besucher unsere Website nutzen (z. B. aufgerufene Seiten, Verweildauer, Herkunft des
                Besuchs, Gerät und Browser, abgeschickte Formulare). Dazu werden Cookies (<code>_ga</code>, <code>_ga_*</code>)
                mit einer Speicherdauer von bis zu 14 Monaten gesetzt. IP-Adressen werden von Google Analytics 4 nicht
                gespeichert. Google Signals und Werbefunktionen sind deaktiviert. Ohne Ihre Einwilligung wird Google
                Analytics nicht geladen.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Weitere
                Informationen:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">9. Google Maps (Kategorie „Funktional“)</h2>
              <p>
                Auf dem Marktplatz und in den Inseraten zeigen wir Standorte auf Karten von Google Maps (Google Ireland
                Limited, Anschrift s. o.). Die Karten werden erst geladen, wenn Sie der Kategorie „Funktional“ zugestimmt oder
                im Platzhalter „Einmal laden“ gewählt haben. Beim Laden werden u. a. Ihre IP-Adresse, die aufgerufene Seite
                und Browserdaten an Google übertragen; Google kann dabei Cookies oder ähnliche Speicherungen verwenden.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">10. YouTube (Kategorie „Funktional“)</h2>
              <p>
                Unser Erklärvideo binden wir im erweiterten Datenschutzmodus über youtube-nocookie.com ein (Google Ireland
                Limited, Anschrift s. o.). Das Vorschaubild liegt auf unserem eigenen Server. Eine Verbindung zu YouTube
                entsteht erst, wenn Sie das Video starten und der Kategorie „Funktional“ zugestimmt oder „Einmal laden“
                gewählt haben. Dabei werden u. a. Ihre IP-Adresse und Informationen zur Wiedergabe an YouTube übertragen;
                YouTube kann Speicherungen in Ihrem Browser vornehmen.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">11. Übermittlung in Drittländer</h2>
              <p>
                Einige der genannten Dienstleister haben ihren Sitz in den USA oder greifen von dort auf Daten zu (Netlify,
                Google, Resend, ggf. Supabase). Für die USA besteht mit dem EU-US Data Privacy Framework ein
                Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO); Google ist danach zertifiziert.
                Soweit ein Anbieter nicht zertifiziert ist, erfolgt die Übermittlung auf Grundlage der
                EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Eine Kopie der Garantien stellen wir Ihnen auf
                Anfrage zur Verfügung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">12. Weitergabe von Daten an Dritte</h2>
              <p>
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li>wenn Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
                <li>wenn dies zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO),</li>
                <li>wenn wir gesetzlich dazu verpflichtet sind (Art. 6 Abs. 1 lit. c DSGVO),</li>
                <li>an sorgfältig ausgewählte Auftragsverarbeiter im Rahmen eines AVV (Art. 28 DSGVO).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">13. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist
                oder gesetzliche Aufbewahrungspflichten (z. B. 6 Jahre nach HGB, 10 Jahre nach AO) bestehen.
                Nach Ablauf der Aufbewahrungsfrist werden die Daten routinemäßig gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">14. Ihre Rechte als betroffene Person</h2>
              <p>Sie haben gemäß DSGVO folgende Rechte gegenüber uns:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Auskunftsrecht</strong> (Art. 15 DSGVO) – Auskunft über Ihre gespeicherten Daten</li>
                <li><strong className="text-gray-300">Berichtigungsrecht</strong> (Art. 16 DSGVO) – Korrektur unrichtiger Daten</li>
                <li><strong className="text-gray-300">Recht auf Löschung</strong> (Art. 17 DSGVO) – &bdquo;Recht auf Vergessenwerden&rdquo;</li>
                <li><strong className="text-gray-300">Recht auf Einschränkung</strong> (Art. 18 DSGVO) – Einschränkung der Verarbeitung</li>
                <li><strong className="text-gray-300">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong className="text-gray-300">Widerspruchsrecht</strong> (Art. 21 DSGVO) – Widerspruch gegen die Verarbeitung</li>
                <li><strong className="text-gray-300">Recht auf Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@tinyhouse.investments" className="text-green-400 hover:text-green-300 transition-colors">
                  info@tinyhouse.investments
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">15. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren. Die zuständige Behörde für Hessen ist:
              </p>
              <p className="mt-3">
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
                Postfach 3163<br />
                65021 Wiesbaden<br />
                <a
                  href="https://www.datenschutz.hessen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  www.datenschutz.hessen.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">16. Datensicherheit</h2>
              <p>
                Unsere Website nutzt HTTPS-Verschlüsselung (TLS), um Ihre Daten bei der Übertragung zu schützen.
                Wir treffen technische und organisatorische Maßnahmen (TOMs) gemäß Art. 32 DSGVO, um die Sicherheit
                Ihrer Daten zu gewährleisten. Dazu gehören u. a. regelmäßige Sicherheitsüberprüfungen, Zugriffsbeschränkungen
                und verschlüsselte Datenspeicherung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">17. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der rechtlichen Anforderungen oder
                unserer Datenverarbeitung anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
                Das Datum der letzten Aktualisierung ist oben angegeben.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
