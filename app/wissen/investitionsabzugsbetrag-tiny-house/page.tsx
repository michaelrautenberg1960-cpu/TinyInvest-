import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Investitionsabzugsbetrag Tiny House: Guide 2026 | TinyInvest",
  description:
    "Investitionsabzugsbetrag für ein Tiny House beantragen: Voraussetzungen, Berechnung und Kombination mit Sonder-AfA. Bis zu 39.500 € Steuerersparnis.",
  keywords:
    "investitionsabzugsbetrag tiny house, investitionsabzugsbetrag beantragen tiny house, iab berechnen tiny house, §7g investitionsabzugsbetrag, investitionsabzugsbetrag 2026, iab sonderabschreibung tiny house, §7g abs 1 estg tiny house",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/investitionsabzugsbetrag-tiny-house" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Investitionsabzugsbetrag Tiny House: Guide 2026 | TinyInvest",
    description:
      "Voraussetzungen, Berechnung und Kombination mit Sonder-AfA: Wie du bis zu 39.500 € Steuerersparnis mit dem Investitionsabzugsbetrag für ein Tiny House erzielst.",
    url: "https://tinyhouse.investments/wissen/investitionsabzugsbetrag-tiny-house",
  },
};

const faqItems = [
  {
    question: "Wer darf den Investitionsabzugsbetrag für ein Tiny House bilden?",
    answer:
      "Jeder Steuerpflichtige, der das Tiny House im Rahmen einer betrieblichen Einkunftsart (Gewerbetrieb, Freiberuf, Vermietung und Verpachtung) nutzt. Selbstständige, Unternehmer, Freiberufler und Arbeitnehmer mit Vermietungseinkünften sind berechtigt. Voraussetzung: Der steuerliche Gewinn darf im Jahr der IAB-Bildung 200.000 € nicht übersteigen (§7g Abs. 1 Nr. 1 EStG).",
  },
  {
    question: "Wie hoch ist der maximale Investitionsabzugsbetrag?",
    answer:
      "Bis zu 50 % der voraussichtlichen Anschaffungskosten, maximal 200.000 € je Betrieb (§7g Abs. 1 EStG). Bei einem Tiny House für 79.000 € entspricht das maximal 39.500 € IAB. Bei 42 % Grenzsteuersatz ergibt das eine sofortige Steuererstattung von ca. 16.590 €.",
  },
  {
    question: "Kann man Investitionsabzugsbetrag und Sonder-AfA kombinieren?",
    answer:
      "Ja – das ist die optimale Strategie. Der IAB wird bis zu 3 Jahre vor dem Kauf gebildet (Steuerersparnis im Vorjahr). Im Kaufjahr wird der IAB aufgelöst und gleichzeitig Sonder-AfA (40 %) auf den reduzierten Kaufpreis geltend gemacht. Zusätzlich ist seit 2024 die degressive AfA (30 %) kombinierbar. Zusammen entstehen im Kaufjahr über 70 % Sofortabschreibung.",
  },
  {
    question: "Wie lange ist der Investitionsabzugsbetrag gültig?",
    answer:
      "Der IAB kann bis zu 3 Jahre nach seiner Bildung für die Anschaffung genutzt werden. Wird innerhalb dieser Frist kein passendes Wirtschaftsgut angeschafft, muss der IAB rückwirkend aufgelöst werden. Das Finanzamt verzinst den nachzuzahlenden Betrag dann mit 1,8 % p.a. (§ 233a AO).",
  },
  {
    question: "Was passiert beim Investitionsabzugsbetrag, wenn ich nicht kaufe?",
    answer:
      "Wird die geplante Investition nicht durchgeführt, muss der IAB im Jahr des Ablaufs der 3-Jahres-Frist aufgelöst werden. Der Steuerbescheid des Jahres, in dem der IAB gebildet wurde, wird rückwirkend geändert. Hinzu kommt eine Nachzahlungsverzinsung von 1,8 % p.a. Deshalb sollte der IAB nur mit konkretem Kaufvorhaben gebildet werden.",
  },
  {
    question: "Gilt der Investitionsabzugsbetrag auch für eine GmbH?",
    answer:
      "Nein. Der Investitionsabzugsbetrag nach §7g EStG gilt nur für natürliche Personen (Einzelunternehmer, Freiberufler, Gesellschafter einer Personengesellschaft). GmbHs fallen unter das KStG und können den IAB nicht nutzen. GmbH-Gesellschafter können jedoch privat investieren und das Tiny House ihrer Betriebsstätte zuordnen.",
  },
  {
    question: "Muss das Tiny House nach dem IAB-Kauf sofort vermietet werden?",
    answer:
      "Das Wirtschaftsgut muss im Jahr der Anschaffung und im darauffolgenden Jahr zu mindestens 90 % betrieblich genutzt werden (§7g Abs. 4 EStG). Bei Vermietung über lokale Partner ist diese Voraussetzung erfüllt – der Standort in Deutschland gilt als inländische Betriebsstätte.",
  },
  {
    question: "Wie funktioniert der Investitionsabzugsbetrag Tiny House in der Praxis?",
    answer:
      "Der Investitionsabzugsbetrag Tiny House funktioniert in drei Schritten: Erstens trägst du den IAB (bis zu 50 % des Kaufpreises) in der Steuererklärung des Vorjahres ein – das Finanzamt erstattet den Steueranteil. Zweitens kaufst du das Tiny House innerhalb von 3 Jahren. Drittens löst du den Investitionsabzugsbetrag auf und kombinierst ihn mit Sonder-AfA (40 %) und degressiver AfA (30 %) im Kaufjahr. Der gesamte Investitionsabzugsbetrag Tiny House Effekt über Vorjahr und Kaufjahr liegt bei 42 % Steuersatz bei rund 28.000 €.",
  },
];

export default function InvestitionsabzugsbetragTinyHousePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investitionsabzugsbetrag Tiny House 2026: Berechnung, Voraussetzungen & Kombination",
    description:
      "Wie du den Investitionsabzugsbetrag nach §7g EStG für ein Tiny House nutzt: Voraussetzungen, Rechenbeispiel und optimale Kombination mit Sonder-AfA und degressiver AfA.",
    url: "https://tinyhouse.investments/wissen/investitionsabzugsbetrag-tiny-house",
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: { "@type": "Organization", name: "TinyInvest", logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" } },
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "IAB", item: "https://tinyhouse.investments/wissen/iab-tiny-house" },
      { "@type": "ListItem", position: 4, name: "Investitionsabzugsbetrag Tiny House", item: "https://tinyhouse.investments/wissen/investitionsabzugsbetrag-tiny-house" },
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
    name: "Investitionsabzugsbetrag für Tiny House beantragen",
    description: "So bildest du den IAB nach §7g EStG, erhältst die Steuererstattung und kombinierst ihn mit Sonder-AfA im Kaufjahr.",
    totalTime: "P1Y",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "IAB in der Steuererklärung eintragen",
        text: "Du oder dein Steuerberater trägt den Investitionsabzugsbetrag in der Anlage EÜR (Zeile 97–99) oder in der Bilanz ein. Es ist kein gesonderter Antrag beim Finanzamt nötig – der IAB wird automatisch bei der Steuerveranlagung berücksichtigt.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Steuererstattung erhalten",
        text: "Das Finanzamt erstattet die Steuermehrbelastung durch den IAB. Bei 39.500 € IAB und 42 % Grenzsteuersatz: ca. 16.590 € Erstattung innerhalb von 3–6 Monaten nach Veranlagung.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Tiny House innerhalb von 3 Jahren kaufen",
        text: "Kaufe das Tiny House innerhalb von 3 Jahren nach IAB-Bildung. Im Kaufjahr wird der IAB gewinnerhöhend aufgelöst und mit dem Kaufpreis verrechnet. Der Kaufvertrag erfolgt direkt mit dem Hersteller (Solido auf Vlemmix Trailer mit VIN/FIN).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Sonder-AfA und degressive AfA im Kaufjahr geltend machen",
        text: "Im Kaufjahr setzt du Sonder-AfA (40 %) auf den Restkaufpreis ab. Zusätzlich ist die degressive AfA (30 %) seit 2024 kombinierbar. Ergebnis: über 70 % Sofortabschreibung im Kaufjahr.",
      },
    ],
  };

  const calcRows = [
    { label: "Kaufpreis Tiny House (Basis)", wert: "79.000 €", note: "" },
    { label: "IAB §7g (50 % im Vorjahr)", wert: "39.500 €", note: "Steuerersparnis Vorjahr" },
    { label: "Steuersparnis aus IAB (42 %)", wert: "≈ 16.590 €", note: "Cash-Rückfluss" },
    { label: "Restkaufpreis nach IAB-Auflösung", wert: "39.500 €", note: "Basis für AfA im Kaufjahr" },
    { label: "Sonder-AfA 40 % (Kaufjahr)", wert: "15.800 €", note: "§7g Abs. 5 EStG" },
    { label: "Degressive AfA 30 % (Kaufjahr)", wert: "11.850 €", note: "seit 2024 kombinierbar" },
    { label: "Abschreibung Kaufjahr gesamt", wert: "27.650 €", note: "= 35 % des Kaufpreises" },
    { label: "Steuersparnis Kaufjahr (42 %)", wert: "≈ 11.613 €", note: "" },
    { label: "Gesamtliquiditätsvorteil", wert: "≈ 28.203 €", note: "Jahr 0 + Kaufjahr" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-iab-voll" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-iab-voll" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-iab-voll" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema-iab-voll" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen/iab-tiny-house" className="text-gray-400 hover:text-green-700">IAB</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Investitionsabzugsbetrag</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · §7g Abs. 1 EStG · IAB</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Investitionsabzugsbetrag Tiny House 2026: Berechnung, Voraussetzungen & optimale Kombination
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-28">28. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-8">
            Der Investitionsabzugsbetrag (IAB) nach §7g EStG ist das mächtigste Steuerinstrument für Tiny House Investoren: Du ziehst bis zu 39.500 € vom zu versteuernden Einkommen ab – noch <em>bevor</em> du einen Euro ausgibst. Dieser Guide erklärt die exakten Voraussetzungen, zeigt eine vollständige Berechnung und beschreibt die optimale Kombination mit Sonder-AfA und degressiver AfA.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/tiny-house-escape-sachwert.webp"
              alt="Investitionsabzugsbetrag Tiny House – §7g EStG Steuerersparnis"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g Abs. 1 EStG", "Bis zu 39.500 €", "3 Jahre Vorlaufzeit", "Bewegliches Wirtschaftsgut", "IAB + Sonder-AfA kombinierbar"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Definition */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was ist der Investitionsabzugsbetrag (IAB)?</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der <strong className="text-gray-900">Investitionsabzugsbetrag (IAB)</strong> ist eine steuerliche Begünstigung nach <strong className="text-gray-900">§7g Absatz 1 des Einkommensteuergesetzes (EStG)</strong>. Er erlaubt es Steuerpflichtigen mit betrieblichen Einkünften, bis zu <strong className="text-gray-900">50 % der geplanten Anschaffungskosten</strong> eines beweglichen Wirtschaftsguts bereits im Jahr <em>vor</em> dem Kauf gewinnmindernd abzuziehen – ohne dass die Investition bereits getätigt wurde.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House auf einem zertifizierten Vlemmix Trailer mit eigener Fahrzeug-Identifikationsnummer (VIN/FIN) gilt steuerrechtlich als <strong className="text-gray-900">bewegliches Wirtschaftsgut</strong> – nicht als Immobilie. Es ist straßenzugelassen, nicht dauerhaft mit dem Boden verbunden und hat eine Nutzungsdauer von 8 Jahren statt 50 Jahren bei Gebäuden. Damit sind sämtliche §7g-Instrumente anwendbar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "IAB §7g Abs. 1", pct: "50 %", desc: "der Kaufkosten, bis zu 3 Jahre vor Kauf" },
                { label: "Sonder-AfA §7g Abs. 5", pct: "40 %", desc: "im Kaufjahr auf den Restwert" },
                { label: "Degressive AfA §7 Abs. 2", pct: "30 %", desc: "seit 2024 zusätzlich kombinierbar" },
              ].map((h) => (
                <div key={h.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-2xl font-black text-green-800 mb-1">{h.pct}</p>
                  <p className="text-[11px] text-gray-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Voraussetzungen */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Voraussetzungen für den Investitionsabzugsbetrag beim Tiny House</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              §7g EStG knüpft den Investitionsabzugsbetrag an drei wesentliche Voraussetzungen. Alle drei müssen gleichzeitig erfüllt sein:
            </p>
            <div className="space-y-4">
              {[
                {
                  nr: "01",
                  title: "Gewinngrenze",
                  desc: "Der steuerliche Gewinn im Jahr der IAB-Bildung darf 200.000 € nicht übersteigen (§7g Abs. 1 Nr. 1 EStG). Maßgeblich ist der Gewinn aus der Einkunftsart, nicht das Gesamteinkommen.",
                },
                {
                  nr: "02",
                  title: "Betriebliche Nutzung ≥ 90 %",
                  desc: "Das Tiny House muss im Jahr der Anschaffung und im Folgejahr zu mindestens 90 % betrieblich genutzt werden (§7g Abs. 4 EStG). Vollständige Vermietung über lokale Partner erfüllt diese Bedingung automatisch.",
                },
                {
                  nr: "03",
                  title: "Anschaffung innerhalb von 3 Jahren",
                  desc: "Das Tiny House muss spätestens 3 Jahre nach IAB-Bildung angeschafft werden. Wird die Frist überschritten, muss der IAB rückwirkend aufgelöst werden (mit Zinsen).",
                },
              ].map((item) => (
                <div key={item.nr} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                  <span className="text-green-700 font-black text-lg shrink-0 w-8">{item.nr}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Berechnung */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Berechnung: So viel sparst du mit dem Investitionsabzugsbetrag</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Basis: Tiny House Comfort für <strong className="text-gray-900">79.000 €</strong>, Grenzsteuersatz <strong className="text-gray-900">42 %</strong> (inkl. Solidaritätszuschlag ca. 44,3 %). Die Tabelle zeigt den kombinierten Effekt aus IAB, Sonder-AfA und degressiver AfA über zwei Steuerjahre:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 font-black text-gray-900">Position</th>
                    <th className="text-right px-4 py-3 font-black text-gray-900">Betrag</th>
                    <th className="text-right px-4 py-3 font-black text-gray-500 hidden sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {calcRows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 ${i === calcRows.length - 1 ? "bg-green-50" : ""}`}>
                      <td className={`px-4 py-3 ${i === calcRows.length - 1 ? "font-black text-green-800" : "text-gray-700"}`}>{row.label}</td>
                      <td className={`px-4 py-3 text-right font-bold tabular-nums ${i === calcRows.length - 1 ? "text-green-800" : "text-gray-900"}`}>{row.wert}</td>
                      <td className="px-4 py-3 text-right text-gray-400 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-[11px] mt-3 leading-relaxed">
              * Beispielrechnung. Individuelle Steuerersparnis hängt vom persönlichen Grenzsteuersatz ab. Keine Steuerberatung.
            </p>
          </div>

          {/* Kombination IAB + Sonder-AfA + deg AfA */}
          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">IAB + Sonder-AfA + degressive AfA: Die optimale Kombination</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Die drei Instrumente greifen in unterschiedlichen Steuerjahren und verstärken sich gegenseitig. Vor 2024 war die Kombination von Sonder-AfA und degressiver AfA nicht möglich; das Wachstumschancengesetz 2024 hat diese Beschränkung aufgehoben und macht das Modell so effektiv wie nie.
              </p>
              <div className="space-y-3">
                {[
                  {
                    jahr: "Vorjahr",
                    farbe: "bg-blue-50 border-blue-100 text-blue-800",
                    badge: "bg-blue-100 text-blue-700",
                    titel: "Investitionsabzugsbetrag bilden",
                    text: "50 % der geplanten Anschaffungskosten (max. 39.500 € bei 79.000 €) als Betriebsausgabe absetzen. Das Finanzamt erstattet den entsprechenden Steueranteil – ohne dass das Tiny House bereits existiert.",
                  },
                  {
                    jahr: "Kaufjahr",
                    farbe: "bg-green-50 border-green-100 text-green-800",
                    badge: "bg-green-100 text-green-700",
                    titel: "IAB auflösen + Sonder-AfA + degressive AfA",
                    text: "Der IAB wird gewinnerhöhend aufgelöst und vom Kaufpreis abgezogen (Restwert: 39.500 €). Auf diesen Restwert greift die Sonder-AfA (40 % = 15.800 €) und die degressive AfA (30 % = 11.850 €). Weitere Abschreibung über die verbleibende Nutzungsdauer.",
                  },
                  {
                    jahr: "Folgejahre",
                    farbe: "bg-gray-50 border-gray-100 text-gray-800",
                    badge: "bg-gray-200 text-gray-600",
                    titel: "Reguläre AfA auf Restwert",
                    text: "Der nach IAB-Auflösung und Sofortabschreibung verbleibende Restwert wird über die reguläre Nutzungsdauer von 8 Jahren linear abgeschrieben. Zusammen mit den Mieteinnahmen entsteht ein dauerhafter positiver Cashflow.",
                  },
                ].map((step) => (
                  <div key={step.jahr} className={`rounded-2xl border p-5 ${step.farbe}`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${step.badge}`}>{step.jahr}</span>
                      <div>
                        <p className="font-black text-sm mb-1">{step.titel}</p>
                        <p className="text-[13px] leading-relaxed opacity-80">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IAB allein vs. Kombination */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">IAB allein vs. IAB + Sonder-AfA: Der Unterschied</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Viele Investoren nutzen nur den IAB – und verschenken damit die Hälfte des Steuervorteils. Der Vergleich auf Basis 79.000 € Kaufpreis, 42 % Grenzsteuersatz:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nur IAB</p>
                  <p className="text-3xl font-black text-gray-900 mb-1">≈ 16.590 €</p>
                  <p className="text-[12px] text-gray-500">Steuerersparnis im Vorjahr durch 39.500 € IAB</p>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-2">IAB + Sonder-AfA + deg. AfA</p>
                  <p className="text-3xl font-black text-green-800 mb-1">≈ 28.203 €</p>
                  <p className="text-[12px] text-green-700">Gesamtliquiditätsvorteil über Vorjahr + Kaufjahr</p>
                </div>
              </div>
            </div>

            {/* Strategischer Einsatz */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Strategischer Einsatz: Wann lohnt sich der Investitionsabzugsbetrag besonders?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Der Investitionsabzugsbetrag ist besonders wirksam in Jahren mit außerordentlich hohem Einkommen: Sonderzahlungen, Abfindungen, Unternehmensgewinne, Krypto-Gewinne oder Immobilienverkäufe. Durch gezielten Einsatz des IAB lässt sich das zu versteuernde Einkommen in genau diesen Spitzenjahren massiv senken – und der Steuervorteil in eine renditestarke Sachanlage umwandeln.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Auch interessant: Wer einen IAB für das Vorjahr gebildet hat, aber das Tiny House noch nicht gekauft hat, kann den IAB in ein anderes Jahr verschieben – solange die 3-Jahres-Frist eingehalten wird. Das gibt Investoren Flexibilität in der Timing-Optimierung.
              </p>
            </div>

          </div>

          {/* Image Break */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-renditeobjekt-aussen.webp"
              alt="Tiny House als Renditeobjekt – Investitionsabzugsbetrag Kapitalanlage"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Rechtliche Hinweise */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rechtliche Grundlagen: §7g EStG im Wortlaut</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              §7g Abs. 1 EStG lautet sinngemäß: <em>„Steuerpflichtige können für die künftige Anschaffung oder Herstellung eines abnutzbaren beweglichen Wirtschaftsguts des Anlagevermögens, das bis zum Ende des zweiten auf die Bildung des Abzugsbetrags folgenden Wirtschaftsjahres angeschafft oder hergestellt worden ist, bis zu 50 Prozent der voraussichtlichen Anschaffungs- oder Herstellungskosten gewinnmindernd abziehen."</em>
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Entscheidend ist das Wort <strong className="text-gray-900">„bewegliches Wirtschaftsgut"</strong>. Ein Tiny House auf einem Vlemmix Trailer mit VIN erfüllt diese Definition: Es ist nicht dauerhaft mit dem Boden verbunden, straßenzugelassen und ähnelt steuerrechtlich einem Fahrzeug oder einer Maschine. Klassische Immobilien (Gebäude, ETW, Grundstück) fallen explizit <em>nicht</em> unter §7g EStG.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-green-700 font-bold text-sm mb-1">Steuerlicher Hinweis</p>
              <p className="text-green-800 text-[13px] leading-relaxed">
                Alle Berechnungen sind Beispiele auf Basis eines 42 %-Grenzsteuersatzes. Die individuelle Steuerersparnis hängt von der persönlichen Einkommenssituation ab. Eine Beratung durch einen §7g-erfahrenen Steuerberater ist vor der Investition unverzichtbar.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House Guide →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Investitionsabzugsbetrag für Tiny Houses</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">IAB für deine Steuersituation berechnen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir erstellen dir eine individuelle IAB-Berechnung auf Basis deiner Einkommenssituation – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">IAB-Analyse anfordern →</ModalButton>
              <Link href="/wissen/steuerberater-finden" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Steuerberater finden →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
