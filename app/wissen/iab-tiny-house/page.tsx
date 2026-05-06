import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "IAB Tiny House 2026: Investitionsabzugsbetrag beantragen & 30.000 € sparen | TinyInvest",
  description:
    "IAB Tiny House 2026: So nutzt du den Investitionsabzugsbetrag nach §7g für dein Tiny House und sparst bis zu 30.000 € Steuern – vor dem Kauf. Voraussetzungen, Fristen und Rechenbeispiel.",
  keywords:
    "IAB tiny house, iab tiny house 2026, investitionsabzugsbetrag tiny house, IAB beantragen anleitung, IAB erfahrungen, tiny house steuer vorziehen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/iab-tiny-house" },
  openGraph: {
    title: "IAB Tiny House 2026: Investitionsabzugsbetrag beantragen & 30.000 € sparen",
    description:
      "IAB Tiny House 2026: Investitionsabzugsbetrag beantragen, 30.000 € sparen, Fristen einhalten – Schritt-für-Schritt erklärt.",
    url: "https://tinyhouse.investments/wissen/iab-tiny-house",
  },
};

const faqItems = [
  {
    question: "Wer darf den IAB für ein Tiny House bilden?",
    answer: "Jeder, der das Tiny House im Rahmen einer betrieblichen oder Vermietungseinkunftsart nutzt. Das schließt Selbstständige, Unternehmer, Freiberufler und Arbeitnehmer mit Vermietungseinkünften ein. Voraussetzung: Der Gewinn darf im Vorjahr 200.000 € (Einzelunternehmen/Freiberufler) nicht übersteigen.",
  },
  {
    question: "Wie viele Jahre vor dem Kauf kann ich den IAB bilden?",
    answer: "Du kannst den IAB bis zu drei Jahre vor der tatsächlichen Anschaffung bilden. Das bedeutet: Planst du den Kauf für 2026, kannst du bereits in der Steuererklärung 2023, 2024 oder 2025 einen IAB bilden – und so Steuern in Jahren mit hohem Gewinn sparen.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House nach dem IAB nicht kaufe?",
    answer: "Wird die Investition nicht wie geplant durchgeführt, muss der IAB aufgelöst werden. Das Finanzamt verzinst den nachzuzahlenden Betrag dann mit 1,8 % p.a. (§ 233a AO). Deshalb sollte der IAB nur gebildet werden, wenn der Kaufentschluss konkret ist.",
  },
  {
    question: "Kann ich IAB und Sonder-AfA kombinieren?",
    answer: "Ja – das ist sogar die empfohlene Strategie. IAB im Vorjahr reduziert die Steuerbasis, Sonder-AfA (40 %) im Kaufjahr schreibt den Restwert ab. Zusammen mit degressiver AfA (30 %) ergibt sich im Kaufjahr eine Sofortabschreibung auf über 70 % des ursprünglichen Kaufpreises.",
  },
  {
    question: "Muss das Tiny House nach dem IAB-Kauf sofort vermietet werden?",
    answer: "Das Wirtschaftsgut muss im Jahr der Anschaffung und im Folgejahr in einer inländischen Betriebsstätte genutzt werden (§7g Abs. 4 EStG). Bei Vermietung über tiny Escapes ist diese Voraussetzung erfüllt – der Standort in Deutschland gilt als Betriebsstätte.",
  },
  {
    question: "Wie hoch ist die maximale IAB-Summe?",
    answer: "Bis zu 50 % des voraussichtlichen Nettokaufpreises, maximal 200.000 € je Betrieb (§7g Abs. 1 EStG). Bei einem Tiny House für 80.000 € sind das maximal 40.000 € IAB – was bei 42 % Grenzsteuersatz rund 16.800 € sofortige Steuererstattung bedeutet.",
  },
  {
    question: "Kann ich den IAB für ein Tiny House auch 2026 noch nutzen?",
    answer: "Ja, §7g EStG ist 2026 unverändert in Kraft. Das IAB Tiny House Modell ist sogar attraktiver als je zuvor: Seit 2024 kann die degressive AfA (30 %) erstmals mit IAB und Sonder-AfA (40 %) kombiniert werden – zusammen über 70 % Sofortabschreibung im Kaufjahr. Wer 2026 investiert, kann außerdem prüfen ob der IAB rückwirkend noch für 2025 möglich ist, sofern der Steuerbescheid 2025 noch nicht bestandskräftig ist.",
  },
];

export default function IabTinyHousePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IAB Tiny House 2026: Investitionsabzugsbetrag beantragen & 30.000 € sparen",
    "description": "Wie du den IAB für ein Tiny House nutzt: Voraussetzungen, Fristen, Beantragung beim Finanzamt und typische Erfahrungen.",
    "url": "https://tinyhouse.investments/wissen/iab-tiny-house",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/inside/tiny-house-innen-steuerberatung.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "IAB Tiny House", "item": "https://tinyhouse.investments/wissen/iab-tiny-house" },
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "IAB für Tiny House beantragen: Schritt für Schritt",
    "description": "So bildest du den Investitionsabzugsbetrag (§7g) für ein Tiny House, erhältst die Steuererstattung und setzt Sonder-AfA im Kaufjahr ab.",
    "totalTime": "P1Y",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Steuererklärung einreichen & IAB bilden",
        "text": "Du oder dein Steuerberater trägt in der Anlage EÜR oder Bilanz den IAB ein (Zeile 97–99). Kein gesonderter Antrag beim Finanzamt nötig – der IAB wird automatisch bei der Steuerveranlagung berücksichtigt.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Steuererstattung erhalten",
        "text": "Das Finanzamt erstattet die Mehrsteuer durch den IAB. Bei 40.000 € IAB und 42 % Grenzsteuersatz: ca. 16.800 € Erstattung innerhalb von 3–6 Monaten nach Veranlagung.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tiny House kaufen (innerhalb 3 Jahre)",
        "text": "Du kaufst das Tiny House innerhalb von 3 Jahren nach IAB-Bildung. Im Kaufjahr wird der IAB aufgelöst und mit dem Kaufpreis verrechnet. Belege: Kaufvertrag direkt mit Hersteller (Vlemmix Trailer).",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sonder-AfA & degressive AfA im Kaufjahr absetzen",
        "text": "Im selben Steuerjahr greift die Sonder-AfA (40 %) auf den Restkaufpreis. Zusätzlich kann die degressive AfA (30 %) angewendet werden. In der Summe: bis zu 70 % Sofortabschreibung im Kaufjahr.",
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">IAB Tiny House</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · IAB · §7g EStG</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            IAB Tiny House 2026: So sparst du bis zu 30.000 € vor dem Kauf
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
            Das IAB Tiny House Modell ist das mächtigste Steuerinstrument im deutschen Steuerrecht für Investoren –
            du sparst Steuern, bevor du auch nur einen Euro ausgegeben hast. 2026 ist die Kombination aus IAB, Sonder-AfA und degressiver AfA so effektiv wie nie zuvor.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/inside/tiny-house-innen-steuerberatung.webp" alt="Tiny House Steuerberatung IAB" fill className="object-cover" priority />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["IAB 50 %", "Bis zu 40.000 € vorziehen", "3 Jahre vor Kauf", "§7g Abs. 1 EStG", "Bewegliches Wirtschaftsgut"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Was ist neu 2026 */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">IAB Tiny House 2026: Was ist neu?</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das IAB Tiny House Modell ist 2026 attraktiver als je zuvor. Seit 2024 gilt die wiedereingeführte degressive AfA (30 %) – in Kombination mit IAB (50 % vorab) und Sonder-AfA (40 % im Kaufjahr) ergibt sich erstmals eine dreigliedrige Abschreibungsstruktur, die im Kaufjahr über 70 % des Kaufpreises steuerlich wirksam macht. Diese Kombination war vor 2024 nicht möglich.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Für Investoren, die 2026 planen: Die Lieferverfügbarkeit der Solido-Modelle auf Vlemmix-Trailer liegt aktuell bei 8–12 Wochen, was eine planbare Investition ermöglicht. Wer außerdem noch keinen IAB für 2025 gebildet hat, kann prüfen lassen ob das rückwirkend noch möglich ist – solange der Steuerbescheid 2025 noch nicht bestandskräftig ist.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "IAB §7g", pct: "50 %", desc: "bis zu 3 Jahre vorab" },
                { label: "Sonder-AfA", pct: "40 %", desc: "neu: kombinierbar mit deg. AfA" },
                { label: "Deg. AfA", pct: "30 %", desc: "seit 2024 wieder nutzbar" },
              ].map((h) => (
                <div key={h.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-2xl font-black text-green-800 mb-1">{h.pct}</p>
                  <p className="text-[11px] text-gray-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Was ist der IAB */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was ist der Investitionsabzugsbetrag?</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Investitionsabzugsbetrag (IAB) nach §7g Abs. 1 EStG erlaubt es, Anschaffungskosten eines geplanten Wirtschaftsguts steuerlich geltend zu machen, bevor das Wirtschaftsgut überhaupt existiert. Du planst den Kauf, trägst den Betrag in deine Steuererklärung ein – und bekommst die Steuererstattung bereits im nächsten Jahr.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Für Tiny Houses auf Vlemmix Trailer ist das besonders attraktiv, weil sie als bewegliche Wirtschaftsgüter eingestuft werden. Das öffnet nicht nur den IAB, sondern auch Sonder-AfA und degressive AfA – ein dreifacher Hebel, den keine klassische Immobilie bietet.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-black text-green-900 text-sm mb-2">Kernmechanismus in einem Satz</p>
              <p className="text-green-800 text-[13px] leading-relaxed">Du bildest im Jahr mit hohem Gewinn einen IAB von bis zu 50 % des Kaufpreises, zahlst weniger Steuern – und kaufst das Tiny House in den nächsten 3 Jahren mit dem freigesetzten Kapital.</p>
            </div>
          </div>

          {/* Voraussetzungen */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Voraussetzungen für den IAB</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Einkunftsart", desc: "Gewerbebetrieb, selbstständige Arbeit oder Vermietung & Verpachtung. Arbeitnehmer ohne Nebeneinkünfte sind ausgeschlossen.", ok: true },
                { title: "Gewinngrenze", desc: "Der Gewinn darf im Wirtschaftsjahr der IAB-Bildung 200.000 € nicht übersteigen (§7g Abs. 1 Satz 2 EStG).", ok: true },
                { title: "Geplante Nutzung", desc: "Das Wirtschaftsgut muss mindestens bis Ende des Folgejahres nach Anschaffung in einer inländischen Betriebsstätte genutzt werden.", ok: true },
                { title: "Bewegliches Gut", desc: "Nur für bewegliche Wirtschaftsgüter des Anlagevermögens. Tiny Houses auf Vlemmix Trailer erfüllen diese Bedingung.", ok: true },
                { title: "Kaufabsicht", desc: "Eine konkrete Investitionsabsicht muss vorliegen. Eine unverbindliche Absichtserklärung reicht – aber der Kauf muss innerhalb von 3 Jahren folgen.", ok: true },
                { title: "Keine Rückwirkung", desc: "Der IAB gilt ab dem Jahr der Bildung. Rückwirkend für abgelaufene Jahre ist er nur möglich, wenn der Steuerbescheid noch nicht bestandskräftig ist.", ok: false },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className={`text-lg shrink-0 mt-0.5 ${item.ok ? "text-green-500" : "text-amber-400"}`}>{item.ok ? "✓" : "⚠"}</span>
                    <div>
                      <p className="font-black text-gray-900 text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-[12px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Break */}
          <div className="rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House Kapitalanlage Sachwert" fill className="object-cover" priority />
          </div>

          {/* Schritt für Schritt */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Schritt für Schritt: IAB für Tiny House beantragen</h2>
            <div className="space-y-4">
              {[
                {
                  nr: "01", phase: "Jahr 1 – Entscheidung & IAB-Bildung",
                  title: "Steuererklärung einreichen",
                  desc: "Du oder dein Steuerberater trägt in der Anlage EÜR oder Bilanz den IAB ein. Kein gesonderter Antrag beim Finanzamt nötig – der IAB wird automatisch bei der Steuerveranlagung berücksichtigt.",
                  detail: "Eintrag in Anlage EÜR, Zeile 97–99 (IAB für geplante Investitionen)",
                },
                {
                  nr: "02", phase: "Jahr 1 – Steuererstattung",
                  title: "Erstattung erhalten",
                  desc: "Das Finanzamt erstattet die Mehrsteuer durch den IAB. Bei 40.000 € IAB und 42 % Grenzsteuersatz: ca. 16.800 € Erstattung innerhalb weniger Monate nach Veranlagung.",
                  detail: "Durchschnittliche Bearbeitungszeit: 3–6 Monate nach Einreichung",
                },
                {
                  nr: "03", phase: "Jahr 1–3 – Investition",
                  title: "Tiny House kaufen",
                  desc: "Du kaufst das Tiny House innerhalb von 3 Jahren nach IAB-Bildung. Im Kaufjahr wird der IAB aufgelöst und mit dem Kaufpreis verrechnet. Der Buchwert reduziert sich entsprechend.",
                  detail: "Kaufvertrag direkt mit Hersteller (Vlemmix Trailer)",
                },
                {
                  nr: "04", phase: "Kaufjahr – Zusatzabschreibung",
                  title: "Sonder-AfA & degressive AfA",
                  desc: "Im selben Steuerjahr greift die Sonder-AfA (40 %) auf den Restkaufpreis. Zusätzlich kannst du die degressive AfA (30 %) anwenden. In der Summe: bis zu 70 % Sofortabschreibung im Kaufjahr.",
                  detail: "Belege: Kaufvertrag, Übergabeprotokoll, Fahrzeugbrief (VIN/FIN)",
                },
              ].map((step) => (
                <div key={step.nr} className="flex gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-sm">{step.nr}</div>
                  <div className="grow">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">{step.phase}</span>
                      <h3 className="font-black text-gray-900 text-[13px]">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-[12px] leading-relaxed mb-2">{step.desc}</p>
                    <p className="text-[11px] text-gray-400 italic">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rechenbeispiel */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Rechenbeispiel: 80.000 € Tiny House · 42 % Steuersatz</h2>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-[11px] text-gray-400 font-bold uppercase">Zeitpunkt</th>
                      <th className="text-left py-2 text-[11px] text-gray-400 font-bold uppercase">Maßnahme</th>
                      <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Steuereffekt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[13px]">
                    {[
                      { zeit: "Vorjahr (2025)", mass: "IAB bilden: 50 % × 80.000 € = 40.000 €", effekt: "−16.800 € Steuern", highlight: false },
                      { zeit: "Kaufjahr (2026)", mass: "IAB auflösen, Sonder-AfA 40 % auf Restwert", effekt: "−8.400 € Steuern", highlight: false },
                      { zeit: "Kaufjahr (2026)", mass: "Degressive AfA 30 % auf Restwert", effekt: "−5.040 € Steuern", highlight: false },
                      { zeit: "Gesamt", mass: "Steuerersparnis über IAB + Kauf-AfA", effekt: "≈ 30.240 €", highlight: true },
                    ].map((row) => (
                      <tr key={row.zeit} className={row.highlight ? "text-green-400 font-bold" : "text-gray-300"}>
                        <td className="py-3">{row.zeit}</td>
                        <td className="py-3">{row.mass}</td>
                        <td className="py-3 text-right">{row.effekt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-[10px] mb-1">Effektiver Kaufpreis nach Steuer</p>
                  <p className="text-xl font-black text-white">≈ 49.760 €</p>
                </div>
                <div className="bg-green-600 rounded-xl p-4 text-center">
                  <p className="text-green-200 text-[10px] mb-1">Steuerersparnis gesamt</p>
                  <p className="text-xl font-black text-white">≈ 30.240 €</p>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-3">Beispielrechnung ohne Anlageberatung. Individuelle Ergebnisse hängen von Steuersatz und Einkunftsart ab.</p>
          </div>

          {/* Häufige Fehler */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Typische Fehler beim IAB Tiny House</h2>
            <div className="space-y-3">
              {[
                { fehler: "IAB ohne konkreten Kaufplan bilden", folge: "Auflösungszinsen von 1,8 % p.a. wenn Kauf nicht stattfindet" },
                { fehler: "3-Jahres-Frist verpassen", folge: "Rückwirkende Auflösung mit Zinsnachzahlung" },
                { fehler: "IAB für Immobilien bilden", folge: "Nicht zulässig – IAB gilt nur für bewegliche Wirtschaftsgüter" },
                { fehler: "Doppelte Abschreibung", folge: "IAB und Sonder-AfA auf denselben Buchwert – korrekte Verrechnung nötig" },
                { fehler: "Betriebsstätte vergessen", folge: "Keine inländische Betriebsstätte → IAB wird rückwirkend versagt" },
              ].map((item) => (
                <div key={item.fehler} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
                  <span className="text-red-400 shrink-0 text-sm font-black mt-0.5">✗</span>
                  <div>
                    <p className="font-bold text-gray-900 text-[13px]">{item.fehler}</p>
                    <p className="text-gray-500 text-[12px] mt-0.5">{item.folge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: IAB für Tiny Houses</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">IAB-Analyse für deine Steuersituation</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir stellen dir das IAB-Factsheet zusammen, das dein Steuerberater für die Beantragung braucht – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">IAB-Factsheet anfordern →</ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB-Rechner →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
