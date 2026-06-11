import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Steuern sparen als Arzt 2026: §7g IAB für Ärzte | TinyInvest",
  description:
    "Als Arzt bis zu 39.500 € Steuerlast reduzieren – §7g IAB nutzen vor dem Kauf. Vollautomatisch verwaltetes Tiny House als Kapitalanlage. Kein Aufwand.",
  keywords:
    "steuern sparen arzt, kapitalanlage arzt, §7g arzt, iab arzt steuervorteil, arzt steuerlast reduzieren, niedergelassener arzt kapitalanlage, arzt investition steuern",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/aerzte" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Steuern sparen als Arzt 2026: §7g IAB für Ärzte | TinyInvest",
    description:
      "Bis zu 39.500 € Steuerlast senken – mit dem §7g IAB vor dem Kauf. Vollautomatisch verwaltetes Tiny House als Kapitalanlage. Kein Aufwand neben der Praxis.",
    url: "https://tinyhouse.investments/wissen/aerzte",
  },
};

const faqItems = [
  {
    question: "Kann ich als niedergelassener Arzt den §7g IAB nutzen?",
    answer:
      "Ja – eindeutig. Niedergelassene Ärzte erzielen Einkünfte aus selbstständiger Arbeit (§18 EStG), was nach §7g Abs. 1 EStG zur Nutzung des Investitionsabzugsbetrags berechtigt. Voraussetzung: Der Gewinn Ihrer Praxis darf im Jahr der IAB-Bildung 200.000 € nicht übersteigen. Ein Tiny House auf einem Vlemmix-Trailer ist ein bewegliches Wirtschaftsgut des Anlagevermögens — die Voraussetzung für §7g ist damit klar erfüllt.",
  },
  {
    question: "Ich bin angestellter Arzt — gilt der IAB trotzdem für mich?",
    answer:
      "Rein angestellte Ärzte ohne Nebeneinkünfte können den §7g IAB nicht direkt nutzen, da §7g ausschließlich für betriebliche Einkünfte gilt (Gewerbebetrieb, selbstständige Arbeit, Land- und Forstwirtschaft). Haben Sie jedoch Nebeneinkünfte — etwa aus Gutachtertätigkeiten, Notarztdiensten oder Belegarztleistungen — lässt sich ein Einzelunternehmen oder eine selbstständige Tätigkeit begründen, über die der IAB beantragt werden kann. Sprechen Sie dazu mit einem §7g-erfahrenen Steuerberater.",
  },
  {
    question: "Wie hoch ist der tatsächliche Steuervorteil bei einem Spitzensteuersatz von 42 %?",
    answer:
      "Bei einem Tiny House für 79.000 € können Sie bis zu 50 % = 39.500 € als IAB im Vorjahr abziehen. Bei einem Grenzsteuersatz von 42 % bedeutet das eine Steuerersparnis von ca. 16.590 € — noch bevor das Haus überhaupt geliefert wird. Im Kaufjahr kommen Sonder-AfA (40 % = 31.600 €) und degressive AfA (30 % = 23.700 €) hinzu. Der Gesamtsteuervorteil im ersten und zweiten Jahr kann je nach Steuersatz 20.000–30.000 € übersteigen. Alle Angaben sind Richtwerte — die individuelle Steuerersparnis hängt von Ihrer persönlichen Situation ab.",
  },
  {
    question: "Muss ich das Tiny House selbst verwalten?",
    answer:
      "Nein. tiny Escapes übernimmt die vollständige Bewirtschaftung: Buchungsmanagement, Gästebetreuung, Reinigung, Wartung und Abrechnung. Sie erhalten monatlich 40 % der Nettomieteinnahmen auf Ihr Konto. Der Aufwand neben einer vollen Arztpraxis ist damit gleich null.",
  },
  {
    question: "Was passiert steuerlich, wenn ich das Tiny House nach 5 Jahren verkaufe?",
    answer:
      "Beim Verkauf eines Tiny Houses als Betriebsvermögen entsteht ein Veräußerungsgewinn, der grundsätzlich steuerpflichtig ist. Da Sie in den ersten Jahren erhebliche Abschreibungen vorgenommen haben (IAB-Auflösung, Sonder-AfA, degressive AfA), ist der Buchwert beim Verkauf entsprechend niedrig. Empfehlenswert ist ein Anlagehorizont von mindestens 5 Jahren für eine optimale Gesamtrendite. Steuerliche Details sollten mit einem Steuerberater besprochen werden.",
  },
];

export default function AerztePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Steuern sparen als Arzt 2026: §7g IAB für Ärzte | TinyInvest",
    description:
      "Als Arzt bis zu 39.500 € Steuerlast reduzieren – mit dem §7g IAB vor dem Kauf. Vollautomatisch verwaltetes Tiny House als Kapitalanlage.",
    url: "https://tinyhouse.investments/wissen/aerzte",
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
      url: "https://tinyhouse.investments/images/outside/arzt-steuern-sparen-iab.webp",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Ärzte & Freiberufler", item: "https://tinyhouse.investments/wissen/aerzte" },
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
      <Script id="article-schema-aerzte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-aerzte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-aerzte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Ärzte & Freiberufler</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerstrategie · Ärzte & Freiberufler</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Steuern sparen als Arzt: §7g IAB + Tiny House — bis zu 39.500 € Steuervorteil im Vorjahr
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
            Niedergelassene Ärzte und Freiberufler zahlen bis zu 45 % Einkommensteuer. Der §7g Investitionsabzugsbetrag erlaubt es, bis zu 39.500 € im Jahr vor dem Kauf steuerlich abzusetzen — ohne Bürokratie, ohne aktiven Aufwand. Das Tiny House generiert danach monatlichen Cashflow, vollautomatisch verwaltet.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["§7g IAB nutzbar", "Bis zu 39.500 € Steuervorteil", "Vollautomatisch", "Ab 79.000 €", "Kein Aufwand neben der Praxis"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/arzt-steuern-sparen-iab.webp"
              alt="Steuern sparen als Arzt: §7g IAB und Tiny House als Kapitalanlage – bis zu 39.500 € Steuervorteil"
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
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Zwei Arzt-Profile — ein Modell</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Wer profitiert vom §7g-Modell?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-green-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-xl">🏥</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Niedergelassener Arzt / Freiberufler</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Selbstständige Ärzte, Zahnärzte, Fachärzte und andere Freiberufler erzielen Einkünfte aus selbstständiger Arbeit — und sind damit direkt §7g-berechtigt. Der volle IAB von 50 % des Kaufpreises ist im Jahr vor dem Kauf absetzbar.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["§7g IAB direkt nutzbar", "50 % im Vorjahr absetzbar", "Sonder-AfA 40 % on top", "Gewinngrenze: max. 200.000 €"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-xl">📋</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Angestellter Arzt mit Nebeneinkünften</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Gutachtertätigkeiten, Notarztdienste oder Belegarztleistungen begründen selbstständige Einkünfte — und damit §7g-Berechtigung. Rein angestellte Ärzte ohne Nebeneinkünfte benötigen steuerliche Beratung.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["Gutachten, Notarzt, Belegarzt", "Einzelunternehmen möglich", "IAB über Nebeneinkünfte", "Steuerberater empfohlen"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Body copy */}
          <div className="max-w-3xl mb-14 space-y-5">
            <p className="text-gray-700 text-base leading-relaxed">
              Als Arzt sind Sie es gewohnt, in komplexen Systemen präzise zu handeln. Bei der Steueroptimierung gilt dasselbe Prinzip: Der §7g Investitionsabzugsbetrag ist eines der wenigen legalen Instrumente im deutschen Steuerrecht, mit dem sich eine erhebliche Steuerlast konkret und planbar senken lässt — noch bevor die Investition selbst getätigt wird.
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Das Steuerproblem der Ärzte — und eine Lösung</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Niedergelassene Ärzte mit einem Jahresgewinn von 150.000–400.000 € zahlen effektiv 42–45 % Einkommensteuer plus Solidaritätszuschlag. Klassische Investments helfen dabei kaum: Festgeld und ETFs bieten keine sofortige Steuerersparnis, und Immobilien sind zu kapitalintensiv und aufwändig. Das §7g-Modell mit einem Tiny House schließt genau diese Lücke.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-1">Rechenbeispiel: €79.000 Tiny House, 42 % Grenzsteuersatz</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                IAB im Vorjahr: 50 % × 79.000 € = 39.500 € → Steuerersparnis ca. 16.590 €. Im Kaufjahr: Sonder-AfA 40 % = 31.600 € + degressive AfA 30 % = 23.700 €. Gesamtsteuervorteil in Jahr 1 und 2: bis zu 25.000–30.000 € — dazu monatliche Mieteinnahmen ab Betriebsaufnahme.
              </p>
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Warum das Tiny House §7g-berechtigt ist</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              §7g gilt ausschließlich für <strong>bewegliche Wirtschaftsgüter des Anlagevermögens</strong>. Ein Tiny House auf einem Vlemmix-Trailer trägt eine Fahrzeugidentifikationsnummer, ist straßenzugelassen und damit eindeutig ein bewegliches Wirtschaftsgut — im Gegensatz zu einer Eigentumswohnung oder einem stationären Gebäude. Diese Klassifizierung ist steuerrechtlich unbestritten.
            </p>
          </div>

          {/* Pain points */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum klassische Investments für Ärzte nicht reichen</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "💸", title: "Bis zu 45 % Steuersatz", desc: "Jeder zweite Euro des Gewinns geht ans Finanzamt. Ohne aktive Steuergestaltung bleibt nach Steuern und Versorgungswerk oft weniger übrig als erwartet." },
              { icon: "📊", title: "Festgeld & ETF helfen steuerlich kaum", desc: "Zinserträge und Kursgewinne werden versteuert, aber keine sofortige Absetzung ist möglich. Der Steuereffekt entsteht erst beim Verkauf — oft Jahre später." },
              { icon: "🏗️", title: "Klassische Immobilien: zu komplex", desc: "Eigentumswohnungen binden viel Kapital, erfordern aktives Management und bieten keine bewegliche Abschreibung nach §7g. Die Bürokratie passt nicht zu einer Vollzeit-Praxis." },
              { icon: "⏱️", title: "Keine Zeit neben der Praxis", desc: "Ein Tiny House über TinyInvest erfordert null aktiven Aufwand — tiny Escapes übernimmt Buchungen, Reinigung, Wartung und Abrechnung vollständig." },
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
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So nutzen Ärzte den §7g — 3 Schritte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { step: "1", title: "IAB bilden", desc: "Bis zu 50 % des geplanten Kaufpreises im Jahr VOR dem Kauf steuerlich abziehen. Die Steuerrückerstattung kommt noch vor der Lieferung des Hauses." },
              { step: "2", title: "Tiny House kaufen", desc: "Sonder-AfA 40 % + degressive AfA 30 % im Kaufjahr on top. Maximaler Abschreibungshebel in Jahr 1 — vollständig legal nach §7g EStG." },
              { step: "3", title: "Einnahmen kassieren", desc: "40 % der Nettomieteinnahmen monatlich, vollautomatisch verwaltet durch tiny Escapes. Kein Aufwand neben der Praxis — echter passiver Cashflow." },
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
              src="/images/outside/tiny-house-renditeobjekt-aussen.webp"
              alt="Tiny House als Renditeobjekt – vollautomatisch bewirtschaftet durch tiny Escapes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* 3 Vorteile */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">3 Vorteile für Ärzte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { num: "01", title: "Steuervorteil jetzt", desc: "Der IAB senkt die Steuerlast im aktuellen Jahr — bevor das Haus überhaupt geliefert wird. Kein anderes Investitionsinstrument bietet diesen Vorzieheffekt." },
              { num: "02", title: "Monatlicher Cashflow", desc: "40 % der Nettomieteinnahmen, unabhängig von der Praxis. Ein zweites Einkommensstandbein, das nicht von Patientenzahlen oder KV-Honoraren abhängt." },
              { num: "03", title: "Sachwert statt Papiergeld", desc: "Ein physisches Wirtschaftsgut mit Restwert — inflationsresistent, nicht von Bankbilanzen abhängig, jederzeit wiederverkaufbar." },
            ].map((item) => (
              <div key={item.num} className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="font-data text-3xl font-black text-green-300 mb-3">{item.num}</p>
                <h3 className="font-black text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-green-100 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Vergleich — Kapitalanlage-Optionen für Ärzte</h2>
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
                    ["Sachwert", "❌ Nein", "❌ Nein", "✅ Ja (bewegliches Gut)"],
                    ["§7g IAB nutzbar", "❌ Nein", "❌ Nein", "✅ Ja"],
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
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Rendite- und Steuerangaben sind Projektionen und Richtwerte. Keine Garantie zukünftiger Ergebnisse. Die steuerliche Situation — insbesondere §7g-Berechtigung, Gewinngrenze 200.000 €, Behandlung von Nebeneinkünften — ist individuell zu prüfen. Bitte konsultieren Sie einen §7g-erfahrenen Steuerberater.</p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House →</Link>
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
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Häufige Fragen von Ärzten & Freiberuflern</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Kostenlose Beratung für Ärzte anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir zeigen Ihnen, wie §7g konkret auf Ihre Situation passt — inkl. Renditeberechnung und Steuerübersicht. Unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Beratung anfordern →
              </ModalButton>
              <Link
                href="/marktplatz"
                className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
              >
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
