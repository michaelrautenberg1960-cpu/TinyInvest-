import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Passive Einnahmen Immobilien: 5 Modelle 2026 | TinyInvest",
  description:
    "Welches Immobilien-Modell liefert wirklich passive Einnahmen? ETW, REITs, Ferienimmobilien, Crowdinvesting und Tiny House im direkten Vergleich 2026.",
  keywords:
    "passive einnahmen immobilien, passive einnahmen durch immobilien 2026, immobilien rendite vergleich, tiny house vs etw rendite, ferienimmobilie passive einnahmen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/passive-einnahmen-immobilien" },
  openGraph: {
    title: "Passive Einnahmen Immobilien: 5 Modelle im Vergleich 2026",
    description: "ETW, REITs, Ferienimmobilien, Crowdinvesting und Tiny House: Welches Modell liefert wirklich passive Rendite?",
    url: "https://tinyhouse.investments/wissen/passive-einnahmen-immobilien",
  },
};

const modelle = [
  {
    rang: "5",
    titel: "Crowdinvesting Immobilien",
    einstieg: "ab 500 €",
    rendite: "6–8 % p.a.",
    zeitaufwand: "~0 Std.",
    eigentuemer: "âŒ Nein",
    fazit: "Keine Eigentumsrechte, kein §7g, Plattformrisiko.",
  },
  {
    rang: "4",
    titel: "REIT / Immobilien-ETF",
    einstieg: "ab 50 €",
    rendite: "5–9 % p.a.",
    zeitaufwand: "~0 Std.",
    eigentuemer: "âŒ Nein",
    fazit: "Liquide und diversifiziert, aber keine Steueroptimierung.",
  },
  {
    rang: "3",
    titel: "Eigentumswohnung (ETW)",
    einstieg: "300.000–500.000 €",
    rendite: "3–5 % brutto",
    zeitaufwand: "20–50 Std./Jahr",
    eigentuemer: "âœ… Ja",
    fazit: "Bewährt, aber kapitalintensiv und hoher Aufwand.",
  },
  {
    rang: "2",
    titel: "Ferienimmobilie",
    einstieg: "200.000–400.000 €",
    rendite: "5–9 % brutto",
    zeitaufwand: "30–80 Std./Jahr",
    eigentuemer: "âœ… Ja",
    fazit: "Höhere Rendite als ETW, aber hoher Aufwand und Kapital.",
  },
  {
    rang: "1",
    titel: "Tiny House Investment",
    einstieg: "ab 65.000 €",
    rendite: "12–14 % IRR p.a.",
    zeitaufwand: "~0 Std.",
    eigentuemer: "âœ… Ja",
    fazit: "Niedrigster Einstieg, höchste Rendite, vollautomatischer Betrieb.",
    highlight: true,
  },
];

const faqItems = [
  {
    question: "Welche Immobilieninvestition liefert die höchsten passiven Einnahmen?",
    answer: "Unter Berücksichtigung von Zeitaufwand, Einstiegskapital und Steuereffekten schneidet das Tiny House Investment 2026 am besten ab: 12–14 % IRR, ~0 Std. Zeitaufwand und §7g macht bis zu 40 % des Kaufpreises im ersten Jahr steuerlich absetzbar. REITs sind liquider aber steuerlich nicht optimierbar.",
  },
  {
    question: "Sind REITs wirklich passiv?",
    answer: "Ja, REITs sind vollständig passiv und liquide. Der Nachteil: Du profitierst nicht von §7g EStG, hast kein physisches Eigentum und zahlst 25 % Kapitalertragsteuer. Für sehr kleine Beträge (<20.000 €) sind sie sinnvoll, danach wird ein direktes Asset steuerlich überlegen.",
  },
  {
    question: "Was ist mit Crowdinvesting-Plattformen für Immobilien?",
    answer: "Crowdinvesting (z.B. Exporo, Dagobertinvest) bietet Nachrangdarlehen an Immobilienprojekte – kein Eigentumsrecht, kein §7g, volles Plattformrisiko. Renditen von 6–8 % p.a. klingen attraktiv, sind aber vor Steuern und ohne Eigentumsschutz zu sehen. Als Beimischung für kleine Beträge okay.",
  },
];

export default function PassiveEinnahmenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Passive Einnahmen Immobilien: 5 Modelle im Vergleich 2026",
    "description": "Welches Immobilien-Modell liefert wirklich passive Einnahmen? ETW, REITs, Ferienimmobilien, Crowdinvesting und Tiny House im direkten Vergleich 2026.",
    "url": "https://tinyhouse.investments/wissen/passive-einnahmen-immobilien",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-nebel-natur.jpg" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Passive Einnahmen", "item": "https://tinyhouse.investments/wissen/passive-einnahmen-immobilien" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="faq-schema-passive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-passive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-passive-einnahmen-immobilien" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Passive Einnahmen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rendite-Vergleich · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Passive Einnahmen durch Immobilien: 5 Modelle im Vergleich 2026
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-15">15. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-8">
            Welches Immobilien-Investment liefert 2026 wirklich passive Einnahmen – mit minimalem
            Aufwand, maximalem Steuereffekt und echtem Eigentumsrecht? Der direkte Vergleich.
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-nebel-natur.jpg"
              alt="Tiny House in der Natur – passive Einnahmen durch Immobilien"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["ETW", "REIT", "Ferienimmobilie", "Crowdinvesting", "Tiny House"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Traum vom â€žGeldverdienen im Schlaf" ist im Immobilienbereich oft ein Trugschluss. Wer klassisch eine Eigentumswohnung vermietet, stellt schnell fest, dass Mietersuche, Instandhaltung und Eigentümerversammlungen alles andere als passiv sind. Im Jahr 2026 hat sich der Markt jedoch gewandelt: Neue Anlageformen und steuerliche Hebel wie der §&nbsp;7g EStG (Investitionsabzugsbetrag) rücken Modelle in den Fokus, die früher als Nischenprodukte galten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Doch welches Modell liefert den besten Mix aus Rendite, Sicherheit durch echtes Eigentum und minimalem Zeitaufwand? Ein tiefer Blick in den direkten Vergleich.
            </p>
          </div>

          {/* Section 1: REITs und Crowdinvesting */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">
              Die klassischen â€žPapier-Immobilien": REITs und Crowdinvesting
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Für Einsteiger mit geringem Kapital scheinen REITs (Real Estate Investment Trusts) und Crowdinvesting attraktiv.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              REITs punkten durch maximale Liquidität. Man kann bereits mit 50&nbsp;€ einsteigen und hat faktisch keinen Zeitaufwand. Doch der Preis für die Bequemlichkeit ist hoch: Man besitzt keine Steine, sondern nur ein Wertpapier. Steuerlich wird die Rendite (5–9&nbsp;%) durch die Kapitalertragsteuer geschmälert, und die massiven Abschreibungsmöglichkeiten des deutschen Steuerrechts gehen verloren.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Crowdinvesting bietet zwar Zinsen zwischen 6 und 8&nbsp;%, birgt aber das höchste Risiko. Da es sich meist um Nachrangdarlehen handelt, steht der Anleger im Falle einer Insolvenz des Bauträgers ganz hinten an. Zudem fehlt auch hier das echte Eigentumsrecht.
            </p>
          </div>

          {/* Image Break 1 */}
          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-aussenbereich-natur.webp"
              alt="Tiny House Außenansicht"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section 2: Bestandsimmobilie */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">
              Die Bestandsimmobilie: Bewährt, aber schwerfällig
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die klassische Eigentumswohnung (ETW) kämpft 2026 weiterhin mit hohen Kaufnebenkosten und einer Bruttorendite, die oft nur bei 3–5&nbsp;% liegt. Nach Abzug von Verwaltung, Instandhaltung und Steuern bleibt für den privaten Anleger meist nur ein kleiner Cashflow übrig. Der Zeitaufwand von bis zu 50 Stunden pro Jahr macht dieses Investment eher zu einem Nebenjob als zu einer passiven Einnahmequelle.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ferienimmobilien schneiden hier deutlich besser ab (5–9&nbsp;% Rendite), sind aber extrem abhängig von Standort und Saisonalität. Wer hier wirklich passiv agieren will, muss teure Agenturen beauftragen, was die Rendite wiederum drückt.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">
              Die 5 Modelle im direkten Vergleich
            </h2>
            <div className="space-y-3">
              {modelle.map((m) => (
                <div
                  key={m.titel}
                  className={`rounded-2xl border p-5 flex items-start gap-5 ${
                    m.highlight ? "border-green-200 bg-green-50" : "border-gray-100 bg-white"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-base shrink-0 ${
                    m.highlight ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {m.rang}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-black text-gray-900 text-sm">{m.titel}</h3>
                      {m.highlight && <span className="text-[10px] bg-green-600 text-white font-bold px-2 py-0.5 rounded-full">Platz 1</span>}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                      {[
                        { label: "Einstieg", value: m.einstieg },
                        { label: "Rendite", value: m.rendite },
                        { label: "Zeitaufwand", value: m.zeitaufwand },
                        { label: "Eigentum", value: m.eigentuemer },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/70 rounded-xl p-2 text-center">
                          <p className="text-[9px] text-gray-400 uppercase font-bold">{s.label}</p>
                          <p className="text-[11px] font-bold text-gray-800 mt-0.5">{s.value}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-[12px] leading-relaxed">{m.fazit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Break 2 */}
          <div className="relative rounded-2xl overflow-hidden mb-16" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-escape-sachwert.webp"
              alt="Tiny House Investment – Escape 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section 3: Der Gewinner */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">
              Der Gewinner 2026: Das Tiny House Investment
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Ãœberraschend, aber datenbasiert setzt sich das Tiny House Investment (oft als â€žTinyInvest" geführt) an die Spitze. Mit einem Einstieg ab ca. 65.000&nbsp;€ ist die Barriere deutlich niedriger als bei einer Wohnung.
            </p>

            <h3 className="text-lg font-black text-gray-900 mb-3">Warum die Rendite so hoch ist</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Mit einer projizierten Rendite von 12–14&nbsp;% IRR schlägt das Tiny House die klassischen Modelle um Längen. Dies liegt vor allem an der Kombination aus moderner Modulbauweise, hoher Nachfrage nach nachhaltigem Wohnraum und einem vollautomatisierten Betreibermodell. Der Anleger erwirbt echtes Eigentum (das Haus), während sich ein Management-Service um die Vermietung und Instandhaltung kümmert.
            </p>

            <h3 className="text-lg font-black text-gray-900 mb-3">Der steuerliche â€žCheat-Code": §&nbsp;7g EStG</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der entscheidende Vorteil ist jedoch steuerlicher Natur. Da Tiny Houses unter bestimmten Voraussetzungen als bewegliche Wirtschaftsgüter gelten, können Investoren den Investitionsabzugsbetrag (IAB) nutzen.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-8">
              <p className="text-green-800 text-sm leading-relaxed font-medium">
                Bis zu 50&nbsp;% der voraussichtlichen Anschaffungskosten können bereits <strong>vor dem Kauf</strong> gewinnmindernd geltend gemacht werden. Zusammen mit der Sonderabschreibung führt dies dazu, dass im Jahr der Anschaffung ein Großteil des Kapitals durch Steuerersparnisse refinanziert werden kann.
              </p>
            </div>
          </div>

          {/* Image Break 3 */}
          <div className="relative rounded-2xl overflow-hidden mb-16" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/inside/tiny-house-innen-eigentumsuebergabe.webp"
              alt="Innenansicht Tiny House"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section 4: Fazit */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">
              Fazit: Strategie für 2026
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer lediglich kleine Beträge diversifizieren will, bleibt bei REITs. Wer jedoch ernsthaft Vermögen aufbauen und dabei die Steuerlast massiv senken möchte, findet im Tiny House Investment das effizienteste Werkzeug. Es vereint die Sicherheit von Sachwerten mit der Rendite eines agilen Geschäftsmodells – und das bei einem Zeitaufwand, der gegen Null geht.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              In ein Tiny House investieren →
            </Link>
            <Link href="/rechner/rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Rendite berechnen →
            </Link>
            <Link href="/wissen/direktinvestment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Direktinvestment erklärt →
            </Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              §7g AfA-Guide →
            </Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              ← Wissens-Hub
            </Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Passive Einnahmen durch Immobilien</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Das Modell mit dem besten Passiv-Einkommen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Paket anfordern: Renditemodell, §7g-Analyse und Standort-Ãœbersicht.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">ðŸ” Unterlagen anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
