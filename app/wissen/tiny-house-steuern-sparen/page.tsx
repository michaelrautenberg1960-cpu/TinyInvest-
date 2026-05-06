import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Steuern sparen: Die vollständige Anleitung | TinyInvest",
  description:
    "Wie du mit einem Tiny House als Kapitalanlage bis zu 34.000 € Steuern sparst: IAB, Sonder-AfA, degressive AfA – Schritt für Schritt erklärt für Selbstständige und Unternehmer.",
  keywords:
    "tiny house steuern sparen, tiny house steuervorteile anleitung, tiny house kapitalanlage steuern, steuern sparen selbstständige tiny house, tiny house steueroptimierung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-steuern-sparen" },
  openGraph: {
    title: "Tiny House Steuern sparen: Die vollständige Anleitung",
    description: "IAB, Sonder-AfA, degressive AfA: So sparst du bis zu 34.000 € im ersten Jahr. Schritt-für-Schritt für Selbstständige und Unternehmer.",
    url: "https://tinyhouse.investments/wissen/tiny-house-steuern-sparen",
  },
};

const faqItems = [
  {
    question: "Wie viel Steuern kann ich mit einem Tiny House wirklich sparen?",
    answer: "Bei einem Kaufpreis von 80.000 € und einem Grenzsteuersatz von 42 % sind Steuerersparnisse von 22.000–34.000 € im ersten Jahr realistisch – je nachdem ob du IAB im Vorjahr, Sonder-AfA und degressive AfA kombinierst. Bei 35 % Steuersatz sind es entsprechend weniger.",
  },
  {
    question: "Brauche ich zwingend ein Gewerbe, um Steuern zu sparen?",
    answer: "Nein. Du kannst das Tiny House auch im Rahmen von Einkünften aus Vermietung und Verpachtung (§ 21 EStG) abschreiben. Ein Gewerbe ist nicht erforderlich. Wichtig ist, dass du das Tiny House entgeltlich vermietest – was über tiny Escapes automatisch gewährleistet ist.",
  },
  {
    question: "Ab welchem Steuersatz lohnt sich das Investment besonders?",
    answer: "Ab einem Grenzsteuersatz von 35 % (ab ca. 30.000 € zu versteuerndes Einkommen für Ledige) rechnet sich das Investment sehr gut. Ab 42 % (Spitzensteuersatz) ist der Steuereffekt maximal. Mit Solidaritätszuschlag und ggf. Kirchensteuer liegt der effektive Vorteil noch höher.",
  },
  {
    question: "Muss ich die Steuerersparnis später zurückzahlen?",
    answer: "Nein – du verschiebst die Steuerzahlung nicht, du ziehst die Kosten vor. Du kaufst ein Wirtschaftsgut, das echte Anschaffungskosten hat. Diese Kosten werden nur schneller abgeschrieben als bei einer Immobilie. Auf die laufenden Mieteinnahmen zahlst du natürlich normal Steuern.",
  },
  {
    question: "Was passiert steuerlich, wenn ich das Tiny House nach 5 Jahren verkaufe?",
    answer: "Wenn das Tiny House vollständig abgeschrieben ist (Buchwert = 0), ist der Verkaufserlös voll steuerpflichtig. Du zahlst dann auf den gesamten Verkaufserlös Einkommensteuer. Für eine steueroptimierte Exit-Strategie ist eine frühzeitige Beratung durch deinen Steuerberater empfehlenswert.",
  },
  {
    question: "Kann ich mehrere Tiny Houses kaufen und so mehrfach Steuern sparen?",
    answer: "Ja. Jedes Tiny House ist ein eigenständiges Wirtschaftsgut. Du kannst für jedes Objekt separat IAB bilden und AfA geltend machen – solange die Gewinngrenze von 200.000 € für den IAB nicht überschritten wird. Viele Investoren bauen so ein Portfolio von 2–5 Objekten auf.",
  },
];

export default function TinyHouseSteuernSparenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House Steuern sparen: Die vollständige Anleitung",
    "description": "Wie du mit einem Tiny House bis zu 34.000 € Steuern sparst: IAB, Sonder-AfA, degressive AfA – Schritt für Schritt erklärt.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-steuern-sparen",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Steuern sparen", "item": "https://tinyhouse.investments/wissen/tiny-house-steuern-sparen" },
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
    "name": "Mit Tiny House Steuern sparen: Die optimale Steuerstrategie in 4 Schritten",
    "description": "So nutzt du IAB, Sonder-AfA und degressive AfA für ein Tiny House Investment und sparst bis zu 34.000 € Steuern im ersten Jahr.",
    "totalTime": "P1Y",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Steuersituation analysieren",
        "text": "Lass deinen Grenzsteuersatz für das laufende und das kommende Jahr ermitteln. Je höher dein Grenzsteuersatz, desto wertvoller ist die Abschreibung. Bei 42 % Spitzensteuersatz spart jeder Euro Abschreibung 42 Cent.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "IAB im Vorjahr bilden",
        "text": "Dein Steuerberater trägt in der Anlage EÜR oder Bilanz den IAB ein. Bei 80.000 € geplantem Kaufpreis sind das bis zu 40.000 € IAB – was bei 42 % Steuersatz ca. 16.800 € Soforterstattung ergibt.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tiny House im Kaufjahr erwerben",
        "text": "Du kaufst direkt beim Hersteller (Vlemmix Trailer). Das Tiny House wird per Kaufvertrag und Fahrzeugbrief (VIN/FIN) als bewegliches Wirtschaftsgut dokumentiert. TinyInvest begleitet diesen Prozess vollständig.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sonder-AfA + degressive AfA im Kaufjahr absetzen",
        "text": "Im selben Jahr: Sonder-AfA (40 %) auf den um den IAB reduzierten Kaufpreis plus degressive AfA (30 %). In der Summe über 70 % Sofortabschreibung im Kaufjahr. Ab dem Folgejahr fließen die Mieteinnahmen.",
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-steuern" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-steuern" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-steuern" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema-steuern" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Steuern sparen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Anleitung · Praxis-Guide</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House Steuern sparen: Die vollständige Anleitung
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
            Kein anderes Investitionsvehikel in Deutschland kombiniert Sachwert, passives Einkommen und Steueroptimierung
            so effizient wie ein Tiny House auf Vlemmix Trailer. Diese Anleitung zeigt dir genau, wie das geht.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House Kapitalanlage Sachwert Steuervorteil" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Bis zu 34.000 € sparen", "IAB + Sonder-AfA", "Kein Gewerbe nötig", "Ab 35 % Steuersatz", "Bewegliches Wirtschaftsgut"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Warum Tiny House */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum ein Tiny House besser abschreibt als alles andere</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer in Deutschland Steuern sparen will, denkt meist an Immobilien. Doch wer eine Eigentumswohnung kauft, schreibt sie 50 Jahre lang mit 2 % ab. Der Steuereffekt tröpfelt – anstatt zu fließen. Ein Tiny House auf Vlemmix Trailer spielt in einer völlig anderen Liga.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Grund: Ein Tiny House auf einem straßenzugelassenen Trailer ist kein Gebäude, sondern ein <strong>bewegliches Wirtschaftsgut</strong>. Das öffnet drei Abschreibungshebel gleichzeitig, die bei klassischen Immobilien schlicht nicht existieren: den Investitionsabzugsbetrag (IAB), die Sonder-AfA und die degressive AfA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "IAB", pct: "50 %", desc: "des Kaufpreises im Vorjahr absetzen" },
                { label: "Sonder-AfA", pct: "40 %", desc: "zusätzlich im Kaufjahr" },
                { label: "Deg. AfA", pct: "30 %", desc: "auf Buchwert im Kaufjahr" },
              ].map((h) => (
                <div key={h.label} className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
                  <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-3xl font-black text-green-800 mb-1">{h.pct}</p>
                  <p className="text-[12px] text-gray-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vergleich */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House vs. ETW vs. PV-Anlage: Steuervergleich</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-bold">Kriterium</th>
                    <th className="text-center p-4 font-bold">Tiny House</th>
                    <th className="text-center p-4 font-bold">ETW</th>
                    <th className="text-center p-4 rounded-tr-xl font-bold">PV-Anlage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { kriterium: "AfA-Zeitraum", tiny: "8 Jahre", etw: "50 Jahre", pv: "20 Jahre" },
                    { kriterium: "IAB möglich", tiny: "Ja (50 %)", etw: "Nein", pv: "Ja (50 %)" },
                    { kriterium: "Sonder-AfA (40 %)", tiny: "Ja", etw: "Nein", pv: "Nein" },
                    { kriterium: "Sofortabschreibung", tiny: "Bis 70 %", etw: "Nein", pv: "Bis 50 %" },
                    { kriterium: "Passives Einkommen", tiny: "720 €/Monat", etw: "Miete − Kosten", pv: "Einspeisevergütung" },
                    { kriterium: "Verwaltungsaufwand", tiny: "Vollautomatisch", etw: "Hoch", pv: "Gering" },
                  ].map((row) => (
                    <tr key={row.kriterium} className="hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700">{row.kriterium}</td>
                      <td className="p-4 text-center text-green-700 font-bold">{row.tiny}</td>
                      <td className="p-4 text-center text-gray-400">{row.etw}</td>
                      <td className="p-4 text-center text-gray-400">{row.pv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Image Break */}
          <div className="rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-wohnbereich.webp" alt="Tiny House Innenausstattung Wohnbereich" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* Die optimale Strategie */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Die optimale Steuerstrategie in 4 Schritten</h2>
            <div className="space-y-4">
              {[
                {
                  nr: "01", title: "Steuersituation analysieren",
                  desc: "Lass deinen Grenzsteuersatz für das laufende und das kommende Jahr ermitteln. Je höher dein Grenzsteuersatz, desto wertvoller ist die Abschreibung. Bei 42 % Spitzensteuersatz spart jeder Euro Abschreibung 42 Cent.",
                  tip: "Ideal: Jahr mit außergewöhnlich hohem Gewinn (Unternehmensverkauf, Boni, starkes Geschäftsjahr)",
                },
                {
                  nr: "02", title: "IAB im Vorjahr bilden",
                  desc: "Dein Steuerberater trägt in der Anlage EÜR oder Bilanz den IAB ein. Bei 80.000 € geplantem Kaufpreis sind das bis zu 40.000 € IAB – was bei 42 % Steuersatz ca. 16.800 € Soforterstattung ergibt.",
                  tip: "Frist: Die Steuererklärung muss eingereicht werden, bevor der Steuerbescheid bestandskräftig wird",
                },
                {
                  nr: "03", title: "Tiny House im Kaufjahr erwerben",
                  desc: "Du kaufst direkt beim Hersteller (Vlemmix Trailer). Das Tiny House wird per Kaufvertrag und Fahrzeugbrief (VIN/FIN) als bewegliches Wirtschaftsgut dokumentiert. TinyInvest begleitet diesen Prozess vollständig.",
                  tip: "Belege sichern: Kaufvertrag, Übergabeprotokoll, Fahrzeugbrief, Aufstellgenehmigung",
                },
                {
                  nr: "04", title: "Sonder-AfA + degressive AfA im Kaufjahr",
                  desc: "Im selben Jahr: Sonder-AfA (40 %) auf den um den IAB reduzierten Kaufpreis plus degressive AfA (30 %). In der Summe über 70 % Sofortabschreibung im Kaufjahr. Ab dem Folgejahr fließen die Mieteinnahmen.",
                  tip: "Mieteinnahmen versteuern: 40 % der Nettomieteinnahmen müssen als Einkünfte aus V&V angegeben werden",
                },
              ].map((step) => (
                <div key={step.nr} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-sm">{step.nr}</div>
                    <div className="grow">
                      <h3 className="font-black text-gray-900 text-base mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-3">{step.desc}</p>
                      <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2">
                        <p className="text-[11px] text-green-700 font-semibold">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wer profitiert am meisten */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Für wen lohnt sich das besonders?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { gruppe: "Selbstständige & Freiberufler", desc: "Hohe Gewinne, schwankende Einnahmen – der IAB gleicht Spitzenjahre aus und spart genau dann, wenn der Grenzsteuersatz am höchsten ist." },
                { gruppe: "GmbH-Gesellschafter & Unternehmer", desc: "Im Betriebsvermögen abgeschrieben reduziert das Tiny House den Körperschaftsteuer- und Gewerbesteueraufwand zusätzlich." },
                { gruppe: "Gut verdienende Angestellte", desc: "Ab 35 % Grenzsteuersatz (ab ca. 62.000 € zvE für Ledige) ist der Steuereffekt relevant – auch ohne eigenes Gewerbe über Vermietungseinkünfte." },
                { gruppe: "Portfolioinvestoren", desc: "Wer mehrere Tiny Houses kauft, kann IAB und AfA gestaffelt einsetzen und so jedes Jahr Steuerersparnisse erzielen." },
              ].map((item) => (
                <div key={item.gruppe} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <p className="font-black text-gray-900 text-sm mb-2">{item.gruppe}</p>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House beantragen →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Steuern sparen</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Deine persönliche Steuerersparnis berechnen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Unverbindliche Analyse deiner Steuersituation – wir zeigen dir, wie viel du im ersten Jahr konkret sparst.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Steueranalyse anfragen →</ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB-Rechner starten →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
