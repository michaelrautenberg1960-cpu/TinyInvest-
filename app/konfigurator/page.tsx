import type { Metadata } from "next";
import { BASE_OG } from "@/app/lib/og";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import KonfiguratorApp from "./KonfiguratorApp";
import {
  DELIVERY_TERM,
  LOCATION_NOTE,
  PAYMENT_TERMS,
  WARRANTY_TERMS,
  calcOffer,
} from "./konfigurator-data";

const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

const ON_GRID = calcOffer("ongrid", 1);
const OFF_GRID = calcOffer("offgrid", 1);

const FAQ = [
  {
    question: "Was kostet ein Tiny House im Konfigurator?",
    answer: `Das Escape 660 kostet als Komplettpaket ${EUR(ON_GRID.unitNet)} netto (On-Grid) bzw. ${EUR(OFF_GRID.unitNet)} netto (Off-Grid) je Einheit, zzgl. 19 % MwSt. Der Preis enthält Haus, Ausstattung, Transport zum Standort und die Aufstellung vor Ort.`,
  },
  {
    question: "Gibt es einen Mengenrabatt?",
    answer: "Nein. Der Einzelpreis gilt unabhängig von der Stückzahl, auch bei größeren Abnahmemengen.",
  },
  {
    question: "Was ist der Unterschied zwischen On-Grid und Off-Grid?",
    answer: `On-Grid nutzt einen vorhandenen Stromanschluss am Standort. Off-Grid hat eine Solaranlage an Bord. ${LOCATION_NOTE}`,
  },
  {
    question: "Wie lange dauert die Lieferung?",
    answer: `${DELIVERY_TERM} ab Auftragsbestätigung. Das Haus wird zum Standort transportiert und dort aufgestellt und angeschlossen.`,
  },
  {
    question: "Wie wird bezahlt?",
    answer: `${PAYMENT_TERMS.join(", ")}.`,
  },
  {
    question: "Ist das PDF-Angebot verbindlich?",
    answer: "Nein. Das Angebot aus dem Konfigurator ist freibleibend und unverbindlich. Ein Vertrag kommt erst mit unserer schriftlichen Auftragsbestätigung zustande.",
  },
];

const offer = (name: string, price: number) => ({
  "@type": "Offer",
  name,
  price,
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
  url: "https://tinyhouse.investments/konfigurator",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: "EUR",
    valueAddedTaxIncluded: false,
  },
});

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tiny House Escape 660 – Komplettpaket",
    description:
      "Tiny House Escape 660 als Komplettpaket inkl. Ausstattung, Transport zum Standort und Aufstellung. Wahlweise On-Grid oder Off-Grid.",
    image: "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp",
    brand: { "@type": "Brand", name: "TinyInvest" },
    offers: [offer("Escape 660 On-Grid", ON_GRID.unitNet), offer("Escape 660 Off-Grid", OFF_GRID.unitNet)],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Konfigurator", item: "https://tinyhouse.investments/konfigurator" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Tiny House Konfigurator: Preis & Angebot als PDF | TinyInvest",
  description:
    "Escape 660 als Komplettpaket ab 74.700 € netto je Einheit – schlüsselfertig bis zum Aufstellungsort. On-Grid oder Off-Grid, Stückzahl frei wählbar, PDF-Angebot sofort.",
  keywords:
    "tiny house konfigurator, tiny house komplettpaket, tiny house preis berechnen, tiny house angebot, tiny house kaufen preis 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/konfigurator",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Tiny House Konfigurator: Preis & Angebot als PDF | TinyInvest",
    description:
      "Komplettpaket ab 74.700 € netto je Einheit, schlüsselfertig bis zum Aufstellungsort. PDF-Angebot in 3 Minuten.",
    url: "https://tinyhouse.investments/konfigurator",
  },
};

export default function KonfiguratorPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <Navbar variant="sub" />
      {pageSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-600">Konfigurator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Tiny House Konfigurator
          </h1>
          <p className="text-gray-500 text-base max-w-2xl">
            Wir verkaufen ausschließlich Komplettpakete – alles von der Produktion über die
            Lieferung bis zur Vermietungsbereitschaft am Aufstellungsort. Wählen Sie Variante und
            Stückzahl, am Ende erhalten Sie ein Preisangebot als PDF.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { icon: "📦", text: "Komplettpaket bis zum Aufstellungsort" },
              { icon: "🔢", text: "Stückzahl frei wählbar" },
              { icon: "📄", text: "PDF-Angebot sofort per Download" },
              { icon: "✅", text: "Lieferzeit ab 60 Tage" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configurator */}
      <KonfiguratorApp />

      {/* Ratgeber-Text unter der App: erklärt Preis, Varianten und Ablauf (wichtig für Google) */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Tiny House konfigurieren: Preis, Ausstattung und Ablauf
          </h2>
          <p className="mb-4">
            Mit dem Tiny House Konfigurator stellen Sie in drei Schritten Ihr Komplettpaket zusammen und
            erhalten sofort ein Angebot als PDF. Es gibt keine versteckten Positionen: Der Preis je Einheit
            umfasst das fertig ausgestattete Haus, den Transport ab Werk zum Standort, die Innenausstattung
            und die Aufstellung inklusive Wasser- und Abwasseranschluss.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">Was kostet ein Tiny House als Komplettpaket?</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-4 py-2.5 font-semibold">Escape 660</th>
                  <th className="text-right px-4 py-2.5 font-semibold">netto</th>
                  <th className="text-right px-4 py-2.5 font-semibold">MwSt. (19 %)</th>
                  <th className="text-right px-4 py-2.5 font-semibold">brutto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "On-Grid (Netzanschluss)", c: ON_GRID },
                  { label: "Off-Grid (Solarbetrieb)", c: OFF_GRID },
                ].map(({ label, c }) => (
                  <tr key={label} className="border-t border-gray-100">
                    <td className="px-4 py-2.5 font-medium text-gray-800">{label}</td>
                    <td className="px-4 py-2.5 text-right font-bold text-green-700">{EUR(c.unitNet)}</td>
                    <td className="px-4 py-2.5 text-right">{EUR(c.unitVat)}</td>
                    <td className="px-4 py-2.5 text-right">{EUR(c.unitGross)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            Die Preise gelten je Einheit und unabhängig von der Stückzahl. Ausgestattet ist jedes Haus unter
            anderem mit Klimaanlage (GREE 9000BTU), Holzofen, Dusche, Kassettentoilette, kompletter Küche,
            Bett, Schlafsofa sowie Bettwäsche und Geschirr. Die vollständige Ausstattungsliste sehen Sie im
            Konfigurator nach der Wahl der Variante.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">On-Grid oder Off-Grid?</h3>
          <p className="mb-4">
            <strong>On-Grid</strong> ist die günstigere Variante für Standorte mit vorhandenem Stromanschluss,
            etwa Ferienparks oder Campingplätze. <strong>Off-Grid</strong> bringt eine eigene Solaranlage mit.{" "}
            {LOCATION_NOTE}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">Ablauf nach dem Angebot</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Sie erstellen im Konfigurator Ihr Angebot und erhalten es als PDF.</li>
            <li>Wir klären Standort, Stückzahl und Liefertermin mit Ihnen.</li>
            <li>Zahlung: {PAYMENT_TERMS.join(", ")}.</li>
            <li>{DELIVERY_TERM}. Das Haus wird geliefert, aufgestellt und angeschlossen.</li>
          </ol>
          <p className="mb-4">
            Garantie: {WARRANTY_TERMS.map((w) => `${w.item} ${w.duration}`).join(", ")}.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">Tiny House als Investment nutzen</h3>
          <p className="mb-4">
            Viele Käufer vermieten ihr Tiny House als Ferienunterkunft. Wie sich Mieteinnahmen und Auszahlung
            zusammensetzen, zeigt der{" "}
            <Link href="/rechner/rendite" className="text-green-700 font-semibold underline underline-offset-2">Rendite-Rechner</Link>.
            Welche steuerlichen Regeln für bewegliche Wirtschaftsgüter allgemein gelten, erklärt unser Ratgeber{" "}
            <Link href="/tiny-house-als-kapitalanlage" className="text-green-700 font-semibold underline underline-offset-2">Tiny House als Kapitalanlage</Link>.
            Ob diese Regeln in Ihrem Fall greifen, klären Sie mit Ihrem Steuerberater.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-5">Häufige Fragen zum Tiny House Konfigurator</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {FAQ.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
                  {f.question}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
