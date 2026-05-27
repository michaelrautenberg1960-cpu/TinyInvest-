import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Steuern sparen als Freiberufler 2026: §7g IAB | TinyInvest",
  description:
    "Als Freiberufler bis zu 39.500 € Steuerlast senken – §7g IAB vor dem Kauf nutzen. Vollautomatisch verwaltetes Tiny House als Kapitalanlage. Kein Zeitaufwand.",
  keywords:
    "steuern sparen freiberufler, kapitalanlage freiberufler, §7g freiberufler, iab freiberufler steuervorteil, anwalt steuern sparen, architekt kapitalanlage, berater investment",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/freiberufler" },
  openGraph: {
    title: "Steuern sparen als Freiberufler 2026: §7g IAB | TinyInvest",
    description:
      "Bis zu 39.500 € Steuerlast senken – §7g IAB vor dem Kauf nutzen. Vollautomatisch verwaltetes Tiny House. Kein Zeitaufwand neben Mandanten & Projekten.",
    url: "https://tinyhouse.investments/wissen/freiberufler",
  },
};

const faqItems = [
  {
    question: "Welche Freiberufler können den §7g IAB nutzen?",
    answer:
      "Alle Freiberufler mit Einkünften nach §18 EStG — also Rechtsanwälte, Architekten, Steuerberater, Unternehmensberater, Ingenieure, Ärzte, Psychologen, Heilpraktiker und viele weitere. Voraussetzung: Der Gewinn darf im Jahr der IAB-Bildung 200.000 € nicht übersteigen. Ein Tiny House auf einem Vlemmix-Trailer ist ein bewegliches Wirtschaftsgut — die §7g-Berechtigung ist eindeutig gegeben.",
  },
  {
    question: "Ich habe neben meiner freiberuflichen Tätigkeit auch gewerbliche Einkünfte — gilt der IAB für beide?",
    answer:
      "Ja. §7g gilt für Gewerbebetrieb (§15 EStG), selbstständige Arbeit (§18 EStG) und Land- und Forstwirtschaft (§13 EStG) — jeweils getrennt. Wer beide Einkunftsarten hat, kann den IAB über beide Betriebe bilden, sofern die Gewinngrenze von 200.000 € je Einkunftsart eingehalten wird. Empfehlung: IAB-Planung mit einem §7g-erfahrenen Steuerberater abstimmen.",
  },
  {
    question: "Wie hoch ist der Steuervorteil konkret?",
    answer:
      "Bei einem Tiny House für 79.000 € können Sie bis zu 50 % = 39.500 € als IAB im Vorjahr abziehen. Bei 42 % Grenzsteuersatz ergibt das eine Steuerersparnis von ca. 16.590 € — noch vor der Lieferung. Im Kaufjahr kommen Sonder-AfA (40 %) und degressive AfA (30 %) hinzu. Der Gesamtvorteil in den ersten zwei Jahren kann 20.000–30.000 € übersteigen. Alle Angaben sind Richtwerte; die individuelle Ersparnis hängt von Ihrer Steuersituation ab.",
  },
  {
    question: "Muss ich das Tiny House selbst verwalten?",
    answer:
      "Nein. tiny Escapes übernimmt Buchungen, Gästebetreuung, Reinigung und Wartung vollständig. Sie erhalten monatlich 40 % der Nettomieteinnahmen — ohne eigenen Aufwand. Neben einem vollen Auftragsbuch bleibt Ihnen damit keinerlei Verwaltungslast.",
  },
  {
    question: "Was ist der Unterschied zum Kauf einer Eigentumswohnung?",
    answer:
      "Eine Eigentumswohnung ist unbewegliches Vermögen — §7g gilt dafür nicht. Tiny Houses auf Vlemmix-Trailern sind straßenzugelassene, bewegliche Wirtschaftsgüter mit Fahrzeugidentifikationsnummer. Das macht sie §7g-berechtigt und erlaubt die Kombination aus IAB + Sonder-AfA + degressiver AfA, die bei Immobilien nicht möglich ist.",
  },
];

export default function FreiberuflerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Steuern sparen als Freiberufler 2026: §7g IAB | TinyInvest",
    description:
      "Als Freiberufler bis zu 39.500 € Steuerlast senken – §7g IAB vor dem Kauf nutzen. Vollautomatisch verwaltetes Tiny House als Kapitalanlage.",
    url: "https://tinyhouse.investments/wissen/freiberufler",
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
      url: "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Freiberufler", item: "https://tinyhouse.investments/wissen/freiberufler" },
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
      <Script id="article-schema-freiberufler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-freiberufler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-freiberufler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Freiberufler</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerstrategie · Freiberufler & Selbstständige</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Steuern sparen als Freiberufler: §7g IAB + Tiny House — bis zu 39.500 € Steuervorteil im Vorjahr
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
            Rechtsanwälte, Architekten, Berater, Steuerberater — wer freiberuflich tätig ist, zahlt bis zu 45 % Einkommensteuer. Der §7g Investitionsabzugsbetrag erlaubt es, bis zu 39.500 € im Jahr vor dem Kauf steuerlich abzuziehen. Kein Aufwand neben dem Mandantenbetrieb — tiny Escapes verwaltet vollständig.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["§7g IAB nutzbar", "Bis zu 39.500 € Steuervorteil", "Vollautomatisch", "Ab 79.000 €", "Kein Verwaltungsaufwand"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/tiny-house-escape-sachwert.webp"
              alt="Tiny House als Kapitalanlage für Freiberufler – §7g IAB und Steuervorteil nutzen"
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
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-xl">⚖️</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Klassischer Freiberufler (§18 EStG)</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Rechtsanwälte, Architekten, Unternehmensberater, Steuerberater, Ärzte, Ingenieure und weitere Katalogberufe erzielen Einkünfte aus selbstständiger Arbeit — und sind damit direkt §7g-berechtigt. IAB im Vorjahr, Sonder-AfA und degressive AfA im Kaufjahr.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["§7g IAB direkt nutzbar", "50 % des Kaufpreises im Vorjahr", "Sonder-AfA 40 % on top", "Gewinngrenze: max. 200.000 €"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-xl">🏢</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Freiberufler mit Gewerbeanteil</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Wer neben der freiberuflichen Tätigkeit auch gewerbliche Einkünfte erzielt, kann §7g über beide Einkunftsarten nutzen — getrennt und jeweils bis zur 200.000-€-Grenze. Ideal für Berater mit eigenem Produkt oder Architekten mit Projektentwicklung.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["IAB über §15 + §18 EStG", "Getrennte IAB-Planung möglich", "Doppelter Hebel bei Mischbetrieb", "Steuerberater empfohlen"].map((b) => (
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
              Freiberufler tragen eine der höchsten Steuerlasten im deutschen System: kein Arbeitgeberanteil zur Sozialversicherung, kein betriebliches Versorgungswerk, und ein Grenzsteuersatz, der schon bei mittleren Gewinnen die 42-%-Marke überschreitet. Gleichzeitig fehlt oft die Zeit, sich mit komplexen Investmentstrukturen auseinanderzusetzen. Das §7g-Modell mit einem Tiny House ist genau für diese Situation gemacht.
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Warum §7g für Freiberufler besonders wirksam ist</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Der Investitionsabzugsbetrag nach §7g EStG erlaubt es, bis zu 50 % des geplanten Kaufpreises im Jahr <strong>vor</strong> dem Kauf steuerlich abzuziehen. Das bedeutet: Sie bilden den IAB in Ihrer Steuererklärung für 2025, erhalten die Steuererstattung im Frühjahr 2026 — und kaufen das Tiny House danach. Im Kaufjahr folgen Sonder-AfA (40 %) und degressive AfA (30 %) auf den verbleibenden Buchwert.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-1">Rechenbeispiel: €79.000 Tiny House, 42 % Grenzsteuersatz</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                IAB Vorjahr: 39.500 € → Steuerersparnis ~16.590 €. Kaufjahr Sonder-AfA: 31.600 € + degressive AfA: 23.700 €. Gesamter Steuervorteil in Jahr 1 und 2: bis zu 25.000–30.000 €. Dazu monatliche Mieteinnahmen (40 % der Nettomiete) ab Betriebsaufnahme — ohne eigenen Aufwand.
              </p>
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Bewegliches Wirtschaftsgut — der entscheidende Unterschied</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              §7g gilt ausschließlich für <strong>bewegliche Wirtschaftsgüter des Anlagevermögens</strong>. Ein Tiny House auf einem Vlemmix-Trailer trägt eine Fahrzeugidentifikationsnummer, ist straßenzugelassen und damit eindeutig ein bewegliches Wirtschaftsgut — im Gegensatz zu einer Eigentumswohnung oder einem festen Gebäude. Diese Klassifizierung ist steuerrechtlich eindeutig und macht das Modell für Freiberufler besonders attraktiv.
            </p>
          </div>

          {/* Pain points */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum klassische Investments für Freiberufler nicht passen</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "💸", title: "Bis zu 45 % Spitzensteuersatz", desc: "Bei einem Jahresgewinn von 150.000 € und mehr fließt fast jeder zweite Euro ans Finanzamt. Ohne aktive Steuergestaltung bleibt netto deutlich weniger als erwartet." },
              { icon: "🏦", title: "Keine betriebliche Altersvorsorge", desc: "Versorgungswerke decken oft nur einen Bruchteil der gewohnten Lebenshaltungskosten. Wer privat nicht vorsorgt, spürt die Lücke ab dem ersten Rentenbescheid." },
              { icon: "🏗️", title: "Klassische Immobilien: zu komplex", desc: "Maklerprovision, Notarkosten, Verwaltung, Instandhaltung — neben einem vollen Auftragsbuch fehlt die Zeit für aktives Immobilienmanagement." },
              { icon: "⏱️", title: "Mandanten & Klienten haben Vorrang", desc: "Ein Tiny House über TinyInvest erfordert null Eigenaufwand. tiny Escapes übernimmt alles — Sie genießen den Cashflow ohne eine einzige Stunde Managementarbeit." },
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
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So nutzen Freiberufler den §7g — 3 Schritte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { step: "1", title: "IAB bilden", desc: "Bis zu 50 % des Kaufpreises im Jahr VOR dem Kauf in der Steuererklärung abziehen. Steuererstattung noch vor Lieferung des Hauses." },
              { step: "2", title: "Tiny House kaufen", desc: "Sonder-AfA 40 % + degressive AfA 30 % im Kaufjahr. Maximaler Abschreibungshebel — vollständig legal nach §7g EStG." },
              { step: "3", title: "Einnahmen kassieren", desc: "40 % der Nettomieteinnahmen monatlich. tiny Escapes verwaltet vollständig — kein Aufwand neben Ihrer Haupttätigkeit." },
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
              alt="Tiny House als Renditeobjekt – vollautomatisch bewirtschaftet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* 3 Vorteile */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">3 Vorteile für Freiberufler</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { num: "01", title: "Steuervorteil im Vorjahr", desc: "Der IAB senkt die Steuerlast schon vor dem Kauf. Keine andere Anlageform bietet diesen Vorzieheffekt — legal, klar geregelt in §7g EStG." },
              { num: "02", title: "Passiver Cashflow", desc: "40 % der Nettomieteinnahmen monatlich — unabhängig von Auftragslage, Mandantenzahl oder Urlaubszeiten." },
              { num: "03", title: "Sachwert mit Restwert", desc: "Kein Papierwert. Das Tiny House ist physisches Eigentum mit Fahrzeugidentifikationsnummer — mobil, verkaufbar, inflationsresistent." },
            ].map((item) => (
              <div key={item.num} className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="font-data text-3xl font-black text-green-300 mb-3">{item.num}</p>
                <h3 className="font-black text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-green-100 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Vergleich — Kapitalanlage-Optionen für Freiberufler</h2>
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
                    ["§7g IAB nutzbar", "❌ Nein", "❌ Nein", "✅ Ja"],
                    ["Sachwert", "❌ Nein", "❌ Nein", "✅ Ja (bewegliches Gut)"],
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
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Rendite- und Steuerangaben sind Projektionen und Richtwerte. Die steuerliche Situation — insbesondere §7g-Berechtigung, Gewinngrenze 200.000 €, Einordnung der Einkunftsart — ist individuell zu prüfen. Bitte konsultieren Sie einen §7g-erfahrenen Steuerberater.</p>
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
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Häufige Fragen von Freiberuflern</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Kostenlose Beratung für Freiberufler</h3>
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
