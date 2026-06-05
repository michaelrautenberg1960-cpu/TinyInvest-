import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Steuern sparen als Unternehmer 2026: §7g IAB | TinyInvest",
  description:
    "Als Unternehmer oder GmbH-Inhaber Gewinne steuergünstig investieren – §7g IAB nutzen. Tiny House als Betriebsvermögen kaufen. Kein Aufwand, monatlicher Cashflow.",
  keywords:
    "steuern sparen unternehmer, kapitalanlage gmbh inhaber, §7g unternehmer, iab gewerbebetrieb, gmbh investition steuern, unternehmer kapitalanlage 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/unternehmer" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Steuern sparen als Unternehmer 2026: §7g IAB | TinyInvest",
    description:
      "Gewinne steuergünstig investieren – §7g IAB nutzen. Tiny House als Betriebsvermögen kaufen: kein Aufwand, monatlicher Cashflow, vollautomatisch verwaltet.",
    url: "https://tinyhouse.investments/wissen/unternehmer",
  },
};

const faqItems = [
  {
    question: "Kann ich als Einzelunternehmer den §7g IAB nutzen?",
    answer:
      "Ja. Einzelunternehmer mit Einkünften aus Gewerbebetrieb (§15 EStG) sind direkt §7g-berechtigt, sofern der Gewinn im Jahr der IAB-Bildung 200.000 € nicht übersteigt. Das Tiny House wird als bewegliches Wirtschaftsgut des Anlagevermögens angeschafft und ist damit klar §7g-qualifiziert.",
  },
  {
    question: "Gilt §7g auch für GmbH-Inhaber?",
    answer:
      "Ja — via §8 Abs. 1 KStG gelten die Vorschriften des EStG, einschließlich §7g, auch für GmbHs. Eine GmbH kann einen IAB für ein geplantes Tiny House als Betriebsvermögen bilden. Der Unterschied zur Privatperson: Die Steuerersparnis wirkt auf Körperschaftsteuer (15 %) + Gewerbesteuer (~15 %) = ~30 %, nicht auf den persönlichen Einkommensteuersatz von 42–45 %. Bei Ausschüttung der Gewinne an die Gesellschafter fällt zudem Abgeltungssteuer (25 %) an. Der persönliche IAB (wenn über Einzelunternehmen oder Nebeneinkünfte möglich) ist daher meist steuerlich effizienter. Steuerliche Beratung ist empfohlen.",
  },
  {
    question: "Wie hoch ist der Steuervorteil für Einzelunternehmer?",
    answer:
      "Bei einem Tiny House für 79.000 € beträgt der maximale IAB 39.500 € (50 %). Bei einem Grenzsteuersatz von 42 % ergibt das eine Steuerersparnis von ca. 16.590 € im Vorjahr. Im Kaufjahr kommen Sonder-AfA (40 % = 31.600 €) und degressive AfA (30 % = 23.700 €) hinzu. Der Gesamtvorteil in den ersten zwei Jahren kann 25.000–30.000 € übersteigen. Alle Angaben sind Richtwerte.",
  },
  {
    question: "Was bedeutet die Gewinngrenze von 200.000 € für den IAB?",
    answer:
      "Der IAB kann nur gebildet werden, wenn der Gewinn des Betriebs im Jahr der Bildung 200.000 € nicht übersteigt (§7g Abs. 1 Satz 2 EStG). Für viele Einzelunternehmer und kleine Gewerbebetriebe ist diese Grenze unkritisch. Wer darüber liegt, sollte mit dem Steuerberater alternative Gestaltungen prüfen.",
  },
  {
    question: "Muss ich das Tiny House selbst verwalten?",
    answer:
      "Nein. tiny Escapes übernimmt Buchungen, Gästebetreuung, Reinigung und Wartung vollständig. Sie erhalten monatlich 40 % der Nettomieteinnahmen. Kein Aufwand neben dem Unternehmen — das Tiny House läuft als vollautomatische Einkommensquelle.",
  },
];

export default function UnternehmerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Steuern sparen als Unternehmer 2026: §7g IAB | TinyInvest",
    description:
      "Als Unternehmer Gewinne steuergünstig investieren – §7g IAB nutzen. Tiny House als Kapitalanlage, vollautomatisch verwaltet.",
    url: "https://tinyhouse.investments/wissen/unternehmer",
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    author: {
      "@type": "Person",
      name: "Noah Stein",
      url: "https://www.linkedin.com/in/noah-stein-a5b486182/",
    },
    publisher: {
      "@type": "Organization",
      name: "TinyInvest",
      logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" },
    },
    image: {
      "@type": "ImageObject",
      url: "https://tinyhouse.investments/images/outside/tiny-house-escape-hero.webp",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Unternehmer", item: "https://tinyhouse.investments/wissen/unternehmer" },
    ],
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
      <Script id="article-schema-unternehmer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-unternehmer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-unternehmer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Unternehmer</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerstrategie · Unternehmer & Gewerbetreibende</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Steuern sparen als Unternehmer: §7g IAB + Tiny House — Gewinne steuergünstig investieren
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-22">22. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Einzelunternehmer und Gewerbetreibende mit hohen Jahresgewinnen zahlen bis zu 45 % Einkommensteuer plus Gewerbesteuer. Der §7g Investitionsabzugsbetrag erlaubt es, bis zu 39.500 € im Jahr vor dem Kauf steuerlich abzuziehen — und schafft gleichzeitig eine vollautomatische Einkommensquelle neben dem Betrieb.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["§7g IAB nutzbar", "Bis zu 39.500 € Steuervorteil", "Vollautomatisch", "Ab 79.000 €", "Kein Aufwand neben dem Betrieb"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/tiny-house-escape-hero.webp"
              alt="Tiny House als Kapitalanlage für Unternehmer – §7g IAB und Gewinne steuergünstig investieren"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Two profiles */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Zwei Profile — ein Modell</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Wer profitiert vom §7g-Modell?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-green-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-xl">🏭</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Einzelunternehmer / Personengesellschaft</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Einzelkaufleute, GbR- und OHG-Gesellschafter mit Einkünften aus Gewerbebetrieb (§15 EStG) sind direkt §7g-berechtigt. Gewinngrenze 200.000 € im Jahr der IAB-Bildung — für die meisten Betriebe unproblematisch.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["§7g IAB direkt nutzbar", "50 % Kaufpreis im Vorjahr", "Sonder-AfA 40 % on top", "Gewinngrenze max. 200.000 €"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-xl">🏢</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">GmbH-Inhaber privat</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Via §8 Abs. 1 KStG ist §7g auch für die GmbH direkt nutzbar — das Tiny House wird als Betriebsvermögen der GmbH gekauft. Die Steuerersparnis wirkt auf KSt + GewSt (~30 %), nicht auf den persönlichen ESt-Satz (42–45 %). Privatpersonen mit Gewerbebetrieb oder Nebeneinkünften nutzen den IAB daher oft effizienter. Steuerliche Beratung empfohlen.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["IAB über private Einkünfte", "Einzelunternehmen als Vehikel", "Steuerberater erforderlich", "GmbH-Ebene separat zu prüfen"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14 space-y-5">
            <p className="text-gray-700 text-base leading-relaxed">
              Unternehmer kennen das Dilemma: Gute Jahre bringen hohe Gewinne — und damit hohe Steuerlasten. Einkommensteuer bis 45 % plus Gewerbesteuer (ca. 14–18 %) drücken die Nettomarge erheblich. Gleichzeitig liegt Kapital oft im Betrieb gebunden oder unverzinst auf dem Geschäftskonto. Das §7g-Modell schafft hier einen doppelten Hebel: Steuerlast senken und gleichzeitig Privatvermögen aufbauen.
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">§7g: Steuervorteil und Vermögensaufbau gleichzeitig</h2>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-1">Rechenbeispiel: €79.000 Tiny House, Einzelunternehmer mit 42 % Grenzsteuersatz</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                IAB Vorjahr: 39.500 € → Steuerersparnis ~16.590 €. Kaufjahr Sonder-AfA (40 %): ~13.272 € gespart. Degressive AfA (30 %): ~9.954 € gespart. Gesamtvorteil Jahre 1+2: bis zu ~29.000 €. Plus monatlicher Cashflow ab Betriebsaufnahme — ohne eigenen Aufwand.
              </p>
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Warum das Tiny House §7g-qualifiziert ist</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              §7g gilt für <strong>bewegliche Wirtschaftsgüter des Anlagevermögens</strong>. Ein Tiny House auf einem Vlemmix-Trailer ist straßenzugelassen, trägt eine Fahrzeugidentifikationsnummer und ist klar als bewegliches Wirtschaftsgut klassifiziert — im Gegensatz zu Grundstücken oder fest eingebauten Gebäuden. Die betriebliche Nutzung (Kurzzeitvermietung über tiny Escapes) erfüllt die Voraussetzungen von §7g eindeutig.
            </p>
          </div>

          {/* Pain points */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum klassische Investments für Unternehmer nicht reichen</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "💸", title: "Hohe Gewinne = hohe Steuerlast", desc: "Einkommensteuer bis 45 % plus Gewerbesteuer. Ohne Gestaltung verbleiben netto oft weniger als 50 % des Gewinns — trotz guter Auftragslage." },
              { icon: "🏦", title: "Kapital steckt im Betrieb", desc: "Maschinen, Lager, Forderungen — Betriebskapital ist oft gebunden. Ein Tiny House baut Privatvermögen auf, ohne die betriebliche Liquidität zu belasten." },
              { icon: "🏗️", title: "Klassische Immobilien passen nicht", desc: "Eigentumswohnungen oder Mehrfamilienhäuser binden viel Kapital und erfordern aktives Management — neben einem laufenden Betrieb kaum darstellbar." },
              { icon: "⏱️", title: "Keine Zeit für aktives Investment", desc: "Kunden, Mitarbeiter, Lieferanten — ein Betrieb fordert volle Aufmerksamkeit. tiny Escapes übernimmt die gesamte Bewirtschaftung des Tiny Houses." },
            ].map((item) => (
              <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 steps */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So nutzen Unternehmer den §7g — 3 Schritte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { step: "1", title: "IAB bilden", desc: "Bis zu 50 % des geplanten Kaufpreises im Jahr VOR dem Kauf steuerlich abziehen. Steuererstattung vor der Lieferung des Hauses." },
              { step: "2", title: "Tiny House kaufen", desc: "Sonder-AfA 40 % + degressive AfA 30 % im Kaufjahr. Maximaler Abschreibungshebel in zwei aufeinanderfolgenden Steuerjahren." },
              { step: "3", title: "Cashflow kassieren", desc: "40 % der Nettomieteinnahmen monatlich. tiny Escapes verwaltet alles — kein Aufwand neben dem laufenden Betrieb." },
            ].map((item) => (
              <div key={item.step} className="border border-gray-100 rounded-2xl p-6 bg-white">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm mb-4">{item.step}</div>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid image */}
          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-aussenbereich-natur.webp"
              alt="Tiny House als Renditeobjekt für Unternehmer – vollautomatisch bewirtschaftet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* 3 Vorteile */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">3 Vorteile für Unternehmer</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { num: "01", title: "Steuervorteil im Vorjahr", desc: "IAB senkt die Steuerlast schon vor dem Kauf. Steuererstattung landet auf dem Konto, bevor das Tiny House geliefert wird." },
              { num: "02", title: "Privatvermögen aufbauen", desc: "Das Tiny House ist Privatvermögen — unabhängig vom Betrieb, nicht von Betriebsrisiken betroffen, monatlicher Cashflow ohne Aufwand." },
              { num: "03", title: "Sachwert mit Restwert", desc: "Kein Fondsanteil, kein Papierwert. Ein physisches Wirtschaftsgut mit Fahrzeugidentifikationsnummer — mobil, inflationsresistent, verkaufbar." },
            ].map((item) => (
              <div key={item.num} className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="font-data text-3xl font-black text-green-300 mb-3">{item.num}</p>
                <h3 className="font-black text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-green-100 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Vergleich — Kapitalanlage-Optionen für Unternehmer</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Festgeld</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Aktien-ETF</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Sofortige Steuerersparnis", "Keine", "Keine", "Bis zu 39.500 € im Vorjahr"],
                    ["Rendite p.a.", "~2–3 %", "~6–8 % (brutto)", "12–18 % IRR nach Steuer"],
                    ["Aufwand", "Keiner", "Monitoring nötig", "Keiner (vollverwaltet)"],
                    ["§7g IAB nutzbar", "❌ Nein", "❌ Nein", "✅ Ja (Einzelunternehmer)"],
                    ["Sachwert / Privatvermögen", "❌ Nein", "❌ Nein", "✅ Ja"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center text-gray-500">{a}</td>
                      <td className="p-4 text-center text-gray-500">{b}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">§7g IAB ist via §8 Abs. 1 KStG auch für GmbHs direkt anwendbar. Die Steuerersparnis wirkt auf Körperschaftsteuer + Gewerbesteuer (~30 %), nicht auf den persönlichen Einkommensteuersatz. Alle Rendite- und Steuerangaben sind Richtwerte. Die individuelle steuerliche Situation ist zwingend mit einem Steuerberater zu klären. Gewinngrenze 200.000 € beachten.</p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Guide →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Abschreibung erklärt →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierung →</Link>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Verfügbare Objekte →</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Häufige Fragen von Unternehmern</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Kostenlose Beratung für Unternehmer</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir zeigen Ihnen, wie §7g konkret auf Ihre Situation passt — inkl. Renditeberechnung und Steuerübersicht. Unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Beratung anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
