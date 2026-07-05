import { BASE_OG } from "@/app/lib/og";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impressum – TinyInvest",
  description: "Impressum der Rautenberg Professional Solutions GmbH gemäß § 5 TMG.",
  alternates: {
    canonical: "https://tinyhouse.investments/impressum",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Impressum – TinyInvest",
    description: "Impressum der Rautenberg Professional Solutions GmbH gemäß § 5 TMG.",
    url: "https://tinyhouse.investments/impressum",
  },
};

export default function ImpressumPage() {
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
            <h1 className="text-4xl font-black text-white mt-4 mb-2">Impressum</h1>
            <p className="text-gray-400 text-sm">Angaben gemäß § 5 TMG</p>
          </div>

          <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Anbieter</h2>
              <p>
                Rautenberg Professional Solutions GmbH<br />
                Marie-Curie-Straße 1<br />
                63457 Hanau<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Vertreten durch</h2>
              <p>Geschäftsführer: Shkelqim Jetishi</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Kontakt</h2>
              <p>
                Telefon: +49 151 68957104<br />
                E-Mail:{" "}
                <a
                  href="mailto:info@tinyhouse.investments"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  info@tinyhouse.investments
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Handelsregister</h2>
              <p>
                Registergericht: Amtsgericht Hanau<br />
                Registernummer: HRB 99329
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Steuernummer</h2>
              <p>
                Gemäß § 139a Abgabenordnung:<br />
                014 242 1096 2
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Shkelqim Jetishi<br />
                Marie-Curie-Straße 1<br />
                63457 Hanau
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">Bildnachweise / Fotoquellen</h2>
              <p className="mb-3">
                Die auf dieser Website verwendeten Bilder und Fotografien stammen aus folgenden Quellen:
              </p>
              <ul className="space-y-2 list-none">
                <li>
                  <span className="text-white font-medium">Außenaufnahmen der Tiny Houses</span><br />
                  © Rautenberg Professional Solutions GmbH / lokale Partner GmbH – Alle Rechte vorbehalten.<br />
                  Fotografie: Markus Diehl, Frankfurt am Main
                </li>
                <li className="pt-2">
                  <span className="text-white font-medium">Innenaufnahmen der Tiny Houses</span><br />
                  © Rautenberg Professional Solutions GmbH / lokale Partner GmbH – Alle Rechte vorbehalten.<br />
                  Fotografie: Markus Diehl, Frankfurt am Main
                </li>
                <li className="pt-2">
                  <span className="text-white font-medium">Titelbild / Open-Graph-Bild</span><br />
                  Erstellt mit Google Gemini (KI-generiertes Bild).<br />
                  © Rautenberg Professional Solutions GmbH – Alle Rechte vorbehalten.
                </li>
                <li className="pt-2">
                  <span className="text-white font-medium">Standortbilder (Schweden, Winterlandschaft, u.a.)</span><br />
                  © Rautenberg Professional Solutions GmbH / lokale Partner GmbH – Alle Rechte vorbehalten.
                </li>
                <li className="pt-2">
                  <span className="text-white font-medium">Logos und Markenzeichen</span><br />
                  © Rautenberg Professional Solutions GmbH – Alle Rechte vorbehalten. Verwendung nur mit ausdrücklicher schriftlicher Genehmigung.
                </li>
              </ul>
              <p className="mt-4">
                Sollten Sie der Meinung sein, dass auf dieser Website Inhalte Ihre Urheberrechte verletzen, bitten wir Sie,
                uns umgehend zu kontaktieren. Wir werden die betreffenden Inhalte unverzüglich prüfen und gegebenenfalls entfernen.und
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
