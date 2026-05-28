import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Rendite berechnen: Rechner & Formeln | TinyInvest",
  description:
    "Wie du die Rendite eines Tiny House Investments korrekt berechnest: IRR, NPV, Cashflow-Analyse mit konkreten Zahlen. Inkl. interaktivem Rendite-Rechner.",
  keywords:
    "tiny house rendite berechnen, tiny house rendite rechner, tiny house irr npv, tiny house cashflow berechnung, tiny house investment rendite",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-rendite-rechner" },
  openGraph: {
    title: "Tiny House Rendite berechnen: Formeln, Rechner & Beispiele",
    description: "IRR, NPV, Cashflow: So berechnest du die echte Rendite eines Tiny House Investments. Mit interaktivem Rechner.",
    url: "https://tinyhouse.investments/wissen/tiny-house-rendite-rechner",
  },
};

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen IRR und einfacher Rendite?",
    answer: "Die einfache Rendite (Mieteinnahmen / Kaufpreis) ignoriert den Zeitwert des Geldes und Steuereffekte. Der IRR (Internal Rate of Return) berücksichtigt alle Cashflows über die gesamte Haltedauer – inklusive Steuererstattungen im Jahr 1 und einem möglichen Verkaufserlös am Ende. Beim Tiny House Investment liegt die einfache Cash-Rendite bei ca. 10 % p.a., der IRR inkl. Steuereffekt bei 12–18 % p.a.",
  },
  {
    question: "Welche Belegungsquote wird beim Renditemodell angesetzt?",
    answer: "Das Basismodell rechnet mit 60 % Belegung (ca. 219 Nächte/Jahr) bei einem Durchschnittspreis von 100 €/Nacht. Das ergibt Bruttomieteinnahmen von 21.900 €/Jahr. Der Investor erhält 40 % davon = 8.760 € netto/Jahr (730 €/Monat). tiny Escapes verwendet diese Zahlen auf Basis historischer Belegungsdaten.",
  },
  {
    question: "Wie wirkt sich die Steuerersparnis auf die Rendite aus?",
    answer: "Die Steuererstattung im Jahr 1 (bis zu 34.000 € bei 80.000 € Kaufpreis und 42 % Steuersatz) wirkt wie eine sofortige Rendite von bis zu 42 % auf das eingesetzte Kapital. Dadurch steigt der IRR von ca. 10 % auf 14–18 % p.a. – je nach individueller Steuersituation.",
  },
  {
    question: "Was ist der NPV und warum ist er relevant?",
    answer: "Der NPV (Net Present Value / Kapitalwert) zeigt, wie viel ein Investment in heutigen Euro wert ist – abgezinst mit einem Kalkulationszinssatz (typischerweise 5–8 %). Ein positiver NPV bedeutet: Das Investment schlägt die Alternativanlage. Beim 80.000 € Tiny House mit 8 % Diskontierungssatz liegt der NPV bei ca. +12.000 bis +25.000 €.",
  },
  {
    question: "Wie berechne ich den Break-even meines Tiny House Investments?",
    answer: "Break-even = (Kaufpreis − Steuererstattung) / (Jährliche Nettomieteinnahmen). Bei 80.000 € Kaufpreis, 30.000 € Steuererstattung und 8.760 €/Jahr Nettomiete: (80.000 − 30.000) / 8.760 = ca. 5,7 Jahre. Das heißt: nach etwa 5–6 Jahren ist dein effektives Kapital wieder drin – und der Rest ist purer Gewinn.",
  },
  {
    question: "Rechnet der Renditerechner auch den Wiederverkaufswert ein?",
    answer: "Unser Rechner bietet zwei Modi: Cashflow-only (nur laufende Einnahmen) und Gesamt-IRR (inkl. geschätztem Restwert nach 8 Jahren). Da Tiny Houses bewegliche Wirtschaftsgüter sind, nimmt der Restwert nach starker Abschreibung ab – typischerweise 20–40 % des Kaufpreises nach 8 Jahren.",
  },
];

const jahre = [1, 2, 3, 4, 5, 6, 7, 8];
const cashflowData = [
  { jahr: 1, mieteinnahmen: 8760, steuer: 30240, netto: 39000 },
  { jahr: 2, mieteinnahmen: 8760, steuer: 0, netto: 8760 },
  { jahr: 3, mieteinnahmen: 8760, steuer: 0, netto: 8760 },
  { jahr: 4, mieteinnahmen: 8760, steuer: 0, netto: 8760 },
  { jahr: 5, mieteinnahmen: 8760, steuer: 0, netto: 8760 },
];

export default function TinyHouseRenditeRechnerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House Rendite berechnen: Formeln, Rechner & Beispiele",
    "description": "Wie du die Rendite eines Tiny House Investments korrekt berechnest: IRR, NPV, Cashflow-Analyse mit konkreten Zahlen.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-rendite-rechner",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-renditeobjekt-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Rendite Rechner", "item": "https://tinyhouse.investments/wissen/tiny-house-rendite-rechner" },
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
      <Script id="article-schema-rendite-rechner" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-rendite-rechner" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-rendite-rechner" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Rendite Rechner</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rendite-Guide · IRR · NPV · Cashflow</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House Rendite berechnen: So geht's wirklich
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
            Wer nur die Mietrendite betrachtet, sieht die halbe Wahrheit. Wer IAB, Sonder-AfA und den Zeitwert des
            Geldes einrechnet, versteht, warum der IRR eines Tiny Houses die meisten klassischen Anlageformen schlägt.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-renditeobjekt-aussen.webp" alt="Tiny House Renditeobjekt Außenansicht" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["12–18 % IRR p.a.", "60 % Belegung", "730 €/Monat netto", "Break-even ~5,7 Jahre", "NPV positiv"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Die 3 Kennzahlen */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Die 3 Kennzahlen, die wirklich zählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  kz: "Cashflow-Rendite",
                  formel: "Jährliche Nettomieteinnahmen ÷ Kaufpreis",
                  wert: "~10 % p.a.",
                  color: "bg-gray-50 border-gray-100",
                  desc: "Die einfachste Kennzahl. Zeigt, wie viel Mieteinnahmen du jährlich relativ zum Kaufpreis erhältst. Ignoriert Steuereffekte und den Zeitwert des Geldes.",
                },
                {
                  kz: "IRR (inkl. Steuer)",
                  formel: "Interner Zinsfuß aller Cashflows inkl. Steuererstattung",
                  wert: "12–18 % p.a.",
                  color: "bg-green-50 border-green-100",
                  desc: "Die wichtigste Kennzahl. Berücksichtigt Steuererstattungen im Jahr 1, laufende Mieteinnahmen und einen möglichen Restwert. Hier ist der Tiny House Vorteil am deutlichsten.",
                },
                {
                  kz: "NPV (Kapitalwert)",
                  formel: "Summe aller diskontierten Cashflows − Kaufpreis",
                  wert: "+12.000–25.000 €",
                  color: "bg-gray-50 border-gray-100",
                  desc: "Zeigt den absoluten Mehrwert gegenüber einer Alternativanlage (z.B. Tagesgeld mit 4 %). Ein positiver NPV bedeutet: Das Tiny House schlägt die Alternative.",
                },
              ].map((kz) => (
                <div key={kz.kz} className={`border rounded-2xl p-5 ${kz.color}`}>
                  <p className="font-black text-gray-900 text-sm mb-1">{kz.kz}</p>
                  <p className="text-[10px] text-gray-400 font-mono mb-3">{kz.formel}</p>
                  <p className="text-2xl font-black text-green-700 mb-3">{kz.wert}</p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{kz.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Jahres Cashflow */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">5-Jahres-Cashflow: 80.000 € Investment · 42 % Steuersatz</h2>
            <div className="bg-gray-900 rounded-2xl p-8 text-white overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-[11px] text-gray-400 font-bold uppercase">Jahr</th>
                    <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Mieteinnahmen netto</th>
                    <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Steuererstattung</th>
                    <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Gesamt-Cashflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {cashflowData.map((row) => (
                    <tr key={row.jahr} className={row.jahr === 1 ? "text-green-400 font-bold" : "text-gray-300"}>
                      <td className="py-3">Jahr {row.jahr}{row.jahr === 1 ? " (Kaufjahr)" : ""}</td>
                      <td className="py-3 text-right">{row.mieteinnahmen.toLocaleString("de-DE")} €</td>
                      <td className="py-3 text-right">{row.steuer > 0 ? `${row.steuer.toLocaleString("de-DE")} €` : "—"}</td>
                      <td className="py-3 text-right">{row.netto.toLocaleString("de-DE")} €</td>
                    </tr>
                  ))}
                  <tr className="text-gray-400 text-[12px]">
                    <td className="py-2 pt-4" colSpan={3}>Jahre 6–8 (nur Mieteinnahmen)</td>
                    <td className="py-2 pt-4 text-right">je 8.760 €</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Gesamt-Cashflow 8J", value: "99.840 €" },
                  { label: "Steuererstattung J1", value: "30.240 €" },
                  { label: "IRR (inkl. Steuer)", value: "~15 % p.a." },
                  { label: "Break-even", value: "~5,7 Jahre" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-gray-400 text-[9px] mb-1 uppercase tracking-widest">{s.label}</p>
                    <p className="text-base font-black text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-3">Basis: 60 % Belegung · 100 €/Nacht · 40 % Investor-Anteil · 42 % Grenzsteuersatz. Keine Garantie zukünftiger Erträge.</p>
          </div>

          {/* Image Break */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-kueche.webp" alt="Tiny House Innenausstattung Küche" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* Break-even Berechnung */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Break-even selbst berechnen</h2>
            <div className="max-w-3xl">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Der Break-even zeigt, wann du dein eingesetztes Kapital vollständig zurückerhalten hast – inkl. Steuererstattungen. Die Formel:
              </p>
              <div className="bg-gray-900 text-green-400 font-mono rounded-2xl p-6 text-sm mb-6">
                <p>Break-even (Jahre) =</p>
                <p className="mt-2 pl-4">(Kaufpreis − Steuererstattung Jahr 1)</p>
                <p className="pl-4">÷ Jährliche Nettomieteinnahmen</p>
              </div>
              <div className="space-y-3">
                {[
                  { satz: "35 %", erstattung: "22.400 €", breakeven: "~6,6 Jahre", irr: "12 %" },
                  { satz: "42 %", erstattung: "30.240 €", breakeven: "~5,7 Jahre", irr: "15 %" },
                  { satz: "45 %", erstattung: "33.000 €", breakeven: "~5,3 Jahre", irr: "18 %" },
                ].map((row) => (
                  <div key={row.satz} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4 text-[13px]">
                    <span className="font-bold text-gray-700">{row.satz} Steuersatz</span>
                    <span className="text-gray-500">Erstattung: <strong className="text-gray-800">{row.erstattung}</strong></span>
                    <span className="text-gray-500">Break-even: <strong className="text-gray-800">{row.breakeven}</strong></span>
                    <span className="text-green-700 font-black">IRR ≈ {row.irr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Rechner */}
          <div className="bg-green-700 rounded-2xl p-8 text-white text-center mb-14">
            <h3 className="text-xl font-black mb-3">Deine persönliche Rendite berechnen</h3>
            <p className="text-green-100 text-sm mb-6 max-w-lg mx-auto">Unser interaktiver Rechner berechnet IRR, NPV und Break-even für deine individuelle Situation – Kaufpreis, Steuersatz und Belegungsquote anpassbar.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/rechner/rendite" className="bg-white text-green-800 hover:bg-green-50 font-bold px-8 py-3.5 rounded-full text-sm transition-all">Rendite-Rechner starten →</Link>
              <Link href="/rechner/iab" className="border border-white/30 text-white hover:border-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB-Rechner →</Link>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/tiny-house-als-rendite" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Ertragsmodell →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Rendite berechnen</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Individuelle Renditeanalyse anfragen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir erstellen dir eine vollständige Cashflow-Analyse für dein konkretes Investment – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Renditeanalyse anfragen →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
