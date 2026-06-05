import { BASE_OG } from "@/app/lib/og";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AGB – TinyInvest",
  description: "Allgemeine Geschäftsbedingungen der TinyInvest GmbH.",
  alternates: {
    canonical: "https://tinyhouse.investments/agb",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "AGB – TinyInvest",
    description: "Allgemeine Geschäftsbedingungen der TinyInvest GmbH.",
    url: "https://tinyhouse.investments/agb",
  },
};

export default function AGBPage() {
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
            <h1 className="text-4xl font-black text-white mt-4 mb-2">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-gray-400 text-sm">Stand: Mai 2026 · Rautenberg Professional Solutions GmbH</p>
          </div>

          <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend &bdquo;AGB&rdquo;) gelten für alle Verträge, die zwischen der
                Rautenberg Professional Solutions GmbH, Marie-Curie-Straße 1, 63457 Hanau (nachfolgend &bdquo;TinyInvest&rdquo;) und dem Kunden (nachfolgend
                &bdquo;Investor&rdquo;) über die Beteiligung an Tiny-House-Investitionsmodellen geschlossen werden. Abweichende
                Bedingungen des Investors werden nicht anerkannt, es sei denn, TinyInvest stimmt ihrer Geltung
                ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 2 Vertragsgegenstand</h2>
              <p>
                TinyInvest vermittelt und verwaltet Investitionen in mobile Tiny Houses. Der Investor erwirbt je nach
                gewähltem Modell das wirtschaftliche Eigentum an einem oder mehreren Tiny Houses oder eine
                wirtschaftliche Beteiligung daran. Die Tiny Houses werden über die Kooperationsplattform Tiny Escapes
                touristisch vermietet. Details zum jeweiligen Investitionsmodell (Kaufpreis, Laufzeit, Renditeprognose,
                Risikohinweise) sind dem individuellen Investitionsvertrag zu entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 3 Vertragsschluss</h2>
              <p>
                Das Angebot auf der Website von TinyInvest stellt keine rechtsverbindliche Offerte dar, sondern eine
                unverbindliche Einladung zur Abgabe eines Angebots (invitatio ad offerendum). Ein Vertrag kommt erst
                durch die schriftliche Auftragsbestätigung durch TinyInvest zustande. TinyInvest ist berechtigt, ein
                Angebot des Investors ohne Angabe von Gründen abzulehnen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 4 Investitionsmodelle und Preise</h2>
              <p>
                Die aktuell angebotenen Investitionsmodelle und deren Konditionen (Investitionssumme,
                Laufzeit, prognostizierte Rendite, Steuervorteile) sind auf der Website von TinyInvest
                veröffentlicht. Alle Preise und Renditeprojektionen verstehen sich als Prognosen auf
                Basis historischer Belegungsdaten und stellen keine Garantie zukünftiger Ergebnisse dar.
                Änderungen der Modelle und Preise bleiben vorbehalten; maßgeblich ist stets die zum
                Zeitpunkt des Vertragsschlusses gültige Fassung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 5 Zahlung</h2>
              <p>
                Der vereinbarte Investitionsbetrag ist nach Rechnungsstellung innerhalb von 14 Kalendertagen
                auf das angegebene Konto von TinyInvest zu überweisen, sofern im Einzelvertrag nichts
                anderes vereinbart ist. Bei Zahlungsverzug sind Verzugszinsen in Höhe von 5 Prozentpunkten
                über dem jeweiligen Basiszinssatz der Europäischen Zentralbank geschuldet. Das Recht,
                einen höheren Verzugsschaden geltend zu machen, bleibt vorbehalten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 6 Laufzeit und Kündigung</h2>
              <p>
                Die Mindestlaufzeit des Investitionsvertrages beträgt 36 Monate, sofern im Einzelvertrag keine
                andere Laufzeit vereinbart ist. Eine ordentliche Kündigung vor Ablauf der Mindestlaufzeit ist
                ausgeschlossen. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils 12 Monate,
                sofern er nicht mit einer Frist von 3 Monaten zum Ende der jeweiligen Laufzeit schriftlich
                gekündigt wird.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 7 Rendite und Ausschüttungen</h2>
              <p>
                TinyInvest strebt eine jährliche Nettorendite von 10–15 % p.a. an. Diese Zielrendite basiert auf
                prognostizierten Belegungsquoten von ca. 70 % und ist keine garantierte Rendite. Ausschüttungen
                erfolgen, soweit im Einzelvertrag vereinbart, quartalsweise oder jährlich. TinyInvest ist berechtigt,
                Ausschüttungen zur Instandhaltung oder notwendigen Reinvestition einzubehalten, sofern dies
                wirtschaftlich geboten ist.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 8 Steuerliche Hinweise</h2>
              <p>
                TinyInvest weist ausdrücklich darauf hin, dass steuerliche Vorteile (z. B. durch Sonderabschreibungen
                nach § 7g EStG) von den individuellen steuerlichen Verhältnissen des Investors abhängen. TinyInvest
                erbringt keine Steuerberatungsleistungen. Jeder Investor ist gehalten, die steuerlichen Auswirkungen
                einer Investition mit einem zugelassenen Steuerberater zu besprechen. Eine Haftung von TinyInvest
                für steuerliche Folgen ist ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 9 Risikohinweise</h2>
              <p>
                Investitionen in Sachwerte wie Tiny Houses sind mit wirtschaftlichen Risiken verbunden. Hierzu zählen
                insbesondere:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                <li>Schwankungen der Belegungsquoten und Mieteinnahmen</li>
                <li>Wertverluste des investierten Kapitals</li>
                <li>Änderungen der steuerlichen Gesetzgebung</li>
                <li>Liquiditätsrisiken bei vorzeitigem Kapitalabzug</li>
                <li>Ausfallrisiken der Kooperationspartner</li>
              </ul>
              <p className="mt-3">
                Der Investor bestätigt mit Vertragsschluss, die Risikohinweise vollständig gelesen und verstanden zu haben.
                Eine Beteiligung sollte nur mit Kapital erfolgen, dessen Verlust der Investor wirtschaftlich tragen kann.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 10 Haftungsbeschränkung</h2>
              <p>
                TinyInvest haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der
                Gesundheit sowie für vorsätzliche oder grob fahrlässige Pflichtverletzungen. Im Übrigen ist die
                Haftung auf den typischerweise vorhersehbaren Schaden begrenzt. Eine Haftung für entgangenen Gewinn,
                ausgebliebene Renditen oder mittelbare Schäden ist – soweit gesetzlich zulässig – ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 11 Widerrufsrecht</h2>
              <p>
                Verbrauchern im Sinne des § 13 BGB steht ein gesetzliches Widerrufsrecht gemäß §§ 312 ff. BGB zu.
                Die Widerrufsfrist beträgt 14 Tage ab Vertragsschluss. Der Widerruf ist in Textform (Brief,
                E-Mail) an TinyInvest zu richten. Bei widerrufenen Verträgen werden bereits geleistete Zahlungen
                vollständig zurückerstattet.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 12 Datenschutz</h2>
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
                <Link href="/datenschutz" className="text-green-400 hover:text-green-300 transition-colors">
                  Datenschutzerklärung
                </Link>
                , die Bestandteil dieser AGB ist.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 13 Änderungen der AGB</h2>
              <p>
                TinyInvest behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern. Änderungen werden dem
                Investor mindestens 4 Wochen vor Inkrafttreten schriftlich oder per E-Mail mitgeteilt. Widerspricht der
                Investor der Änderung nicht innerhalb von 2 Wochen nach Zugang der Mitteilung, gelten die geänderten AGB
                als angenommen. Auf dieses Recht wird in der Änderungsmitteilung ausdrücklich hingewiesen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 14 Anwendbares Recht und Gerichtsstand</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand
                für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist, soweit gesetzlich zulässig,
                Hanau. Für Verbraucher gilt der gesetzliche Gerichtsstand.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">§ 15 Salvatorische Klausel</h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so berührt dies
                die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung tritt die
                gesetzliche Regelung.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
