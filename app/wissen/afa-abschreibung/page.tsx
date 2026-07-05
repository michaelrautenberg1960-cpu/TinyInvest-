import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House abschreiben: 34.000 € Steuervorteil | TinyInvest",
  description: "Wie du ein Tiny House in 8 Jahren vollständig abschreibst – statt 50 Jahre wie bei einer Wohnung. IAB, Sonder-AfA und degressive AfA kombiniert erklärt.",
  keywords: "tiny house abschreiben, tiny house steuern sparen, tiny house steuervorteile 2026, investitionsabzugsbetrag tiny house, tiny house kapitalanlage steuer",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/afa-abschreibung" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House abschreiben: Bis zu 34.000 € Steuervorteil im ersten Jahr",
    description: "Wie du ein Tiny House in 8 Jahren vollständig abschreibst – statt 50 Jahre wie bei einer Wohnung. IAB, Sonder-AfA und degressive AfA kombiniert erklärt.",
    url: "https://tinyhouse.investments/wissen/afa-abschreibung",
  },
};

const faqItems = [
  { question: "Wie lange schreibt man ein Tiny House steuerlich ab?", answer: "Ein Tiny House auf Vlemmix Trailer gilt als bewegliches Wirtschaftsgut. Die amtliche AfA-Nutzungsdauer beträgt üblicherweise 8 Jahre (lineare AfA von 12,5 % p.a.). In Kombination mit §7g Sonder-AfA (40 %) und degressiver AfA (30 %) ist das Wirtschaftsgut jedoch oft bereits nach 3–5 Jahren steuerlich vollständig abgeschrieben." },
  { question: "Was ist der Unterschied zwischen IAB und Sonder-AfA?", answer: "Der Investitionsabzugsbetrag (IAB) ist ein Vorzieheffekt: Du setzt 50 % des geplanten Kaufpreises bereits im Jahr VOR dem Kauf als Betriebsausgabe ab (§7g Abs. 1 EStG). Die Sonder-AfA (40 %) greift dann im Kaufjahr selbst – zusätzlich zur regulären Jahres-AfA. Zusammen mit der degressiven AfA (30 %) kannst du im Kaufjahr bis zu 70 % des Restwerts abschreiben." },
  { question: "Muss ich zwingend einen IAB bilden, um von der Sonder-AfA zu profitieren?", answer: "Nein. IAB und Sonder-AfA sind unabhängig voneinander. Du kannst direkt im Kaufjahr Sonder-AfA (40 %) + degressive AfA (30 %) = 70 % Sofortabschreibung in Anspruch nehmen, ohne vorher einen IAB gebildet zu haben. Der IAB ist dann sinnvoll, wenn du im Vorjahr einen sehr hohen Gewinn hattest." },
  { question: "Gilt §7g nur für Unternehmer oder auch für Arbeitnehmer?", answer: "§7g EStG gilt für alle, die das Tiny House im Rahmen einer Einkunftsart (Vermietung und Verpachtung, Gewerbetrieb, Freiberufler) nutzen. Wer das Tiny House über lokale Partner vermietet, erzielt Einkünfte aus Vermietung – und kann damit §7g anwenden, unabhängig vom Hauptberuf." },
  { question: "Kann ich die Abschreibung auch rückwirkend geltend machen?", answer: "Den IAB kann dein Steuerberater unter Umständen noch rückwirkend für das Vorjahr bilden, sofern der Steuerbescheid noch nicht bestandskräftig ist. Die Sonder-AfA und degressive AfA gelten ab dem Jahr der Anschaffung. Eine Beratung durch deinen Steuerberater ist hier unverzichtbar." },
  { question: "Kann ich ein Tiny House steuerlich absetzen?", answer: "Ja – ein Tiny House auf Vlemmix Trailer lässt sich als bewegliches Wirtschaftsgut vollständig steuerlich absetzen. Die Abschreibung erfolgt über 8 Jahre (12,5 % p.a.). In Kombination mit IAB (50 % im Vorjahr) und Sonder-AfA (40 % im Kaufjahr) kannst du den Großteil des Kaufpreises in den ersten 1–2 Jahren steuerlich absetzen. Technisch spricht man von der Absetzung für Abnutzung (AfA) – bei einem Tiny House auf 8 statt 50 Jahre beschleunigt wie bei klassischen Gebäuden." },
  { question: "Was ist die Tiny House Sonderabschreibung?", answer: "Die Tiny House Sonderabschreibung beträgt 40 % des Kaufpreises und greift im Jahr der Anschaffung – zusätzlich zur regulären Jahres-AfA. Sie ist in §7g Abs. 5 EStG geregelt und gilt für bewegliche Wirtschaftsgüter wie ein Tiny House auf Vlemmix Trailer. Kombiniert mit der degressiven AfA (30 %) ergibt sich im Kaufjahr eine Sofortabschreibung von bis zu 70 % des Kaufpreises." },
];

export default function AfaAbschreibungPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House §7g IAB & AfA: So sparst du Steuern 2026",
    "description": "IAB (50 %), Sonder-AfA (40 %), degressive AfA (30 %) für Tiny Houses erklärt. Rechenbeispiele für 42 % Steuersatz. §7g EStG Guide 2026.",
    "url": "https://tinyhouse.investments/wissen/afa-abschreibung",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/articles/7g%20AfA%20%26%20Sonder-Abschreibung%20Tiny%20House%20Steuer-Guide%202026.png" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "AfA Abschreibung", "item": "https://tinyhouse.investments/wissen/afa-abschreibung" }
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
      <Script id="faq-schema-afa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-afa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-afa-abschreibung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">AfA & Abschreibung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · §7g EStG · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House abschreiben: Bis zu 34.000 € Steuervorteil im ersten Jahr
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
            Eine Eigentumswohnung schreibt man 50 Jahre ab. Ein Tiny House auf Vlemmix Trailer in 8 Jahren – mit IAB,
            Sonder-AfA und degressiver AfA bis zu 70 % des Kaufpreises bereits im ersten Jahr.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/Tiny House abschreiben Bis zu 34.000 € Steuervorteil im ersten Jahr.webp" alt="Tiny House abschreiben – bis zu 34.000 € Steuervorteil im ersten Jahr" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "Sonder-AfA 40 %", "Deg. AfA 30 %", "IAB 50 %", "Bewegliches Wirtschaftsgut"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="max-w-3xl mb-14">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer in Deutschland steuerlich mit Immobilien plant, stößt schnell auf eine frustrierende Einschränkung: Gebäude werden nur mit 2 % jährlich abgeschrieben – auf 50 lange Jahre gestreckt. Ein Tiny House auf Vlemmix Trailer spielt in einer völlig anderen Kategorie. Als bewegliches Wirtschaftsgut eröffnet es drei Abschreibungshebel gleichzeitig, die zusammen im ersten Jahr bis zu 70 % des Kaufpreises steuerlich wirksam machen können.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Der entscheidende rechtliche Unterschied liegt im Trailer selbst: Er besitzt eine eigene Fahrzeug-Identifikationsnummer (VIN/FIN), ist straßenzugelassen und nicht fest mit dem Boden verbunden. Damit gilt das gesamte Tiny House steuerrechtlich als bewegliches Wirtschaftsgut – und öffnet die Tür zu §7g EStG.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-5">
              Die steuerliche Gestaltung eines Tiny Houses als Investment bietet durch die sogenannte Absetzung für Abnutzung (AfA) enorme Hebelwirkungen, die weit über die Möglichkeiten klassischer Immobilien hinausgehen. Der entscheidende Faktor für die steuerliche Behandlung ist die Mobilität des Objekts. Sofern das Tiny House als bewegliches Wirtschaftsgut eingestuft wird – was bei Modellen auf Rädern oder ohne festes Fundament der Fall ist –, verkürzt sich der Abschreibungszeitraum drastisch auf lediglich acht Jahre. Im Vergleich zu einer herkömmlichen Immobilie, die über 33 oder 50 Jahre abgeschrieben wird, fließt das investierte Kapital hier also um ein Vielfaches schneller als steuerlicher Aufwand zurück an den Investor.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-5">
              Dieser Effekt wird durch weitere steuerliche Instrumente wie den Investitionsabzugsbetrag (IAB) massiv verstärkt. Investoren haben die Möglichkeit, bereits bis zu drei Jahre vor der eigentlichen Anschaffung bis zu 50 % der voraussichtlichen Kosten gewinnmindernd geltend zu machen, was wertvolle Liquidität in der Planungsphase schafft. Erreicht das Haus dann den Standort, kann zusätzlich eine Sonderabschreibung in Anspruch genommen werden. In der Summe führt dies dazu, dass ein Großteil der Anschaffungskosten bereits in der Anfangsphase steuerlich verwertet wird, was die Nettorentabilität des Projekts signifikant steigert und die Steuerlast auf andere Einkunftsarten drückt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-5">
              Wird das Tiny House hingegen fest mit dem Erdboden verbunden und verliert seine Mobilität, ändert sich die steuerliche Logik grundlegend. In diesem Fall wird es als Gebäude behandelt, was zwar die jährlichen Abschreibungssätze auf 2 % bis 3 % reduziert, aber unter Umständen Vorteile bei der Umsatzsteuerbehandlung im Rahmen der kurzfristigen Vermietung bietet. Für den klassischen Kapitalanleger, der auf einen schnellen Cashflow und eine hohe Steuerersparnis abzielt, bleibt jedoch die Einstufung als bewegliches Gut das erstrebenswerte Ziel. Da die Grenzen zwischen mobiler Ausstattung und festem Bauwerk fließend sein können, bildet eine präzise steuerliche Gestaltung die Basis, um das Tiny House von einem einfachen Wohnobjekt in ein hocheffizientes Finanzinstrument zu verwandeln.
            </p>
          </div>

          {/* Vergleich Gebäude vs. Tiny House */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum ist das Tiny House kein Gebäude?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-3 text-base">Klassisches Gebäude (ETW)</h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  {["Fest mit dem Boden verbunden", "2 % lineare AfA über 50 Jahre", "Kein IAB anwendbar", "Keine Sonder-AfA §7g", "Grunderwerbsteuer + Notarkosten"].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-3 text-base">Tiny House auf Vlemmix Trailer</h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  {["Bewegliches Wirtschaftsgut (VIN/FIN)", "AfA über 8 Jahre (12,5 % p.a.)", "IAB anwendbar (§7g Abs. 1)", "Sonder-AfA 40 % (§7g Abs. 5)", "Degressive AfA 30 % (§ 7 Abs. 2)"].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-green-600 shrink-0">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-5">
              <p className="text-[13px] text-gray-600 leading-relaxed">
                Der Vlemmix Trailer hat eine eigene <strong className="text-gray-900">Fahrzeug-Identifikationsnummer (VIN/FIN)</strong>, ist straßenzugelassen und nicht fest mit dem Boden verbunden. Damit gilt das gesamte Tiny House steuerrechtlich als <strong className="text-gray-900">bewegliches Wirtschaftsgut</strong> – nicht als Gebäude. Diese Klassifizierung öffnet alle §7g-Vorteile, die bei Immobilien schlicht nicht existieren.
              </p>
            </div>
          </div>

          {/* Image Break 1 */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-renditeobjekt-aussen.webp" alt="Tiny House Außenansicht Standort" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* Die 4 AfA-Varianten */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Die 4 AfA-Varianten für dein Tiny House</h2>
            <div className="max-w-3xl mb-8">
              <p className="text-gray-700 text-base leading-relaxed">
                Nicht jede Abschreibungsstrategie ist gleich effizient. Je nach persönlicher Steuersituation und dem Zeitpunkt des Kaufs lohnt sich eine andere Kombination. Hier sind alle vier Optionen mit konkreten Zahlen für ein 100.000 € Haus:
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  label: "Variante 1", badge: "Altes Recht", badgeColor: "bg-gray-100 text-gray-600",
                  title: "Lineare AfA", subtitle: "12,5 % p.a. über 8 Jahre",
                  desc: "Die Basis-Abschreibung: Gleichmäßig 12,5 % des Kaufpreises pro Jahr über 8 Jahre. Ohne §7g-Kombination – der langsamste Weg. Heute kaum noch empfehlenswert.",
                  table: [
                    { jahr: "Jahr 1", afa: "12.500 €", kumuliert: "12.500 €", highlight: false },
                    { jahr: "Jahr 2", afa: "12.500 €", kumuliert: "25.000 €", highlight: false },
                    { jahr: "Jahr 8", afa: "12.500 €", kumuliert: "100.000 €", highlight: false },
                  ],
                  result: { label: "3 Jahre kumuliert", value: "37,5 %", color: "text-gray-500" },
                },
                {
                  label: "Variante 2", badge: "Empfohlen", badgeColor: "bg-green-100 text-green-700",
                  title: "Sonder-AfA + Degressive AfA", subtitle: "40 % + 30 % im Kaufjahr = 70 % Sofortabschreibung",
                  desc: "Die neue Power-Kombination ab 2023: Im Kaufjahr kannst du 40 % (Sonder-AfA §7g Abs. 5) plus 30 % (degressive AfA §7 Abs. 2) vom Buchwert abschreiben – macht 70 % im Jahr 1.",
                  table: [
                    { jahr: "Jahr 1 (Kaufjahr)", afa: "70.000 €", kumuliert: "70.000 €", highlight: true },
                    { jahr: "Jahr 2", afa: "9.000 €", kumuliert: "79.000 €", highlight: false },
                    { jahr: "Jahr 3", afa: "6.300 €", kumuliert: "85.300 €", highlight: false },
                  ],
                  result: { label: "3 Jahre kumuliert", value: "85,3 %", color: "text-green-700" },
                },
                {
                  label: "Variante 3", badge: "Maximum-Hebel", badgeColor: "bg-amber-100 text-amber-700",
                  title: "IAB + Sonder-AfA + Degressive AfA", subtitle: "IAB im Vorjahr + voller Booster im Kaufjahr",
                  desc: "Der maximale Steuer-Hebel: Bilde im Vorjahr den IAB (50 % des geplanten Kaufpreises als Steuerersparnis), löse ihn im Kaufjahr auf und kombiniere mit Sonder-AfA + degressiver AfA.",
                  table: [
                    { jahr: "Vorjahr (IAB)", afa: "– 50.000 € Steuerbasis", kumuliert: "", highlight: false },
                    { jahr: "Kaufjahr", afa: "– 20.000 € Steuerbasis", kumuliert: "", highlight: true },
                    { jahr: "Jahr 2", afa: "– 9.000 € Steuerbasis", kumuliert: "", highlight: false },
                  ],
                  result: { label: "Gesamteffekt", value: "Max. Hebel", color: "text-amber-700" },
                },
              ].map((v) => (
                <div key={v.label} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${v.badgeColor}`}>{v.label}</span>
                      <span className="text-gray-400 text-[11px]">{v.badge}</span>
                    </div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{v.title}</h3>
                    <p className="text-gray-400 text-[12px] mb-3">{v.subtitle}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-5">{v.desc}</p>
                    <div className="space-y-1.5 mb-4">
                      {v.table.map((row) => (
                        <div key={row.jahr} className={`flex justify-between text-[12px] border-b border-gray-50 pb-1.5 ${row.highlight ? "text-green-700 font-semibold" : "text-gray-500"}`}>
                          <span>{row.jahr}</span>
                          <span className="font-medium">{row.afa}</span>
                          {row.kumuliert && <span className="text-gray-400">∑ {row.kumuliert}</span>}
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{v.result.label}</span>
                      <span className={`font-black text-lg ${v.result.color}`}>{v.result.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Break 2 */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-airbnb.webp" alt="Tiny House Innenausstattung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* IAB Erklärt */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der IAB: Steuern ins Vorjahr verlagern</h2>
            <div className="max-w-3xl mb-8">
              <p className="text-gray-700 text-base leading-relaxed">
                Der Investitionsabzugsbetrag (§7g Abs. 1 EStG) ist kein Zuschuss – er ist ein Timing-Instrument. Du setzt die Kosten ab, bevor du das Geld ausgegeben hast. Das klingt fast zu gut – ist aber vollständig legal und seit Jahrzehnten gängige Steuerpraxis für bewegliche Wirtschaftsgüter.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                { icon: "📋", phase: "Vorjahr (z.B. 2025)", title: "IAB bilden", desc: "Dein Steuerberater trägt in der Steuererklärung 2025 einen IAB von 50 % des geplanten Kaufpreises ein. Bei 80.000 € Haus = 40.000 € IAB. Das reduziert deinen zu versteuernden Gewinn 2025 um 40.000 €. Bei 42 % Steuersatz: ~16.800 € Erstattung vom Finanzamt." },
                { icon: "🏠", phase: "Kaufjahr (2026)", title: "Haus kaufen & IAB auflösen", desc: "Du kaufst das Tiny House. Der IAB wird aufgelöst – aber: Im selben Jahr greift die Sonder-AfA (40 %) + degressive AfA (30 %) auf den reduzierten Restwert. Per Saldo bleibt ein erheblicher Steuereffekt." },
                { icon: "💶", phase: "Jahresende", title: "Steuererklärung & Erstattung", desc: "In der Steuererklärung 2026 werden alle AfA-Positionen geltend gemacht. Das Finanzamt erstattet – netto verbleibt deutlich weniger effektiver Kaufpreis. Ab jetzt fließen monatlich 40 % der Mieteinnahmen." },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white border-2 border-green-100 flex items-center justify-center text-2xl shadow-sm">{step.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{step.phase}</span>
                      <h3 className="font-black text-gray-900 text-[13px]">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-[12px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-700 rounded-2xl p-6 text-white">
              <p className="font-black text-base mb-2">Wann lohnt sich der IAB?</p>
              <p className="text-green-100 text-[13px] leading-relaxed">Der IAB lohnt sich besonders, wenn du im Vorjahr einen <strong className="text-white">ungewöhnlich hohen Gewinn</strong> hattest (Bonuszahlungen, Unternehmensverkauf, starkes Geschäftsjahr) und die Steuerprogression drücken möchtest. Ohne besondere Steuersituation im Vorjahr ist <strong className="text-white">Variante 2</strong> (Sonder-AfA + deg. AfA direkt im Kaufjahr) oft die einfachere Lösung.</p>
            </div>
            <p className="mt-4 text-sm">
              <Link href="/wissen/iab-tiny-house" className="text-green-700 font-semibold hover:underline">
                → Schritt-für-Schritt-Anleitung: IAB für Tiny Houses beantragen und 30.000 € sparen
              </Link>
            </p>
          </div>

          {/* Beispielrechnung */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Konkrete Zahlen: 80.000 € Tiny House · 42 % Steuersatz</h2>
            <div className="bg-gray-900 rounded-2xl p-8 text-white mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[{ label: "Kaufpreis", value: "80.000 €", sub: "Tiny House + Trailer" }, { label: "Grenzsteuersatz", value: "42 %", sub: "Beispiel-Investor" }, { label: "AfA-Nutzungsdauer", value: "8 Jahre", sub: "Bewegliches Wirtschaftsgut" }].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-[10px] mb-1">{s.label}</p>
                    <p className="text-xl font-black text-white">{s.value}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-[11px] text-gray-400 font-bold uppercase">Position</th>
                      <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Absetzungsbetrag</th>
                      <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase">Steuerersparnis (42 %)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { pos: "IAB (50 % × 80.000 €, Vorjahr)", betrag: "40.000 €", steuer: "16.800 €", highlight: false },
                      { pos: "Sonder-AfA 40 % (Kaufjahr)", betrag: "16.000 €", steuer: "6.720 €", highlight: false },
                      { pos: "Degressive AfA 30 % (Kaufjahr)", betrag: "24.000 €", steuer: "10.080 €", highlight: false },
                      { pos: "Gesamt Steuerersparnis", betrag: "80.000 €", steuer: "≈ 33.600 €", highlight: true },
                    ].map((row) => (
                      <tr key={row.pos} className={row.highlight ? "text-green-400 font-bold" : "text-gray-300"}>
                        <td className="py-3 text-[12px]">{row.pos}</td>
                        <td className="py-3 text-right text-[12px]">{row.betrag}</td>
                        <td className="py-3 text-right text-[12px]">{row.steuer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-[10px] mb-1">Effektiver Netto-Investitionspreis</p>
                  <p className="text-xl font-black text-white">≈ 46.400 €</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">80.000 € minus ~33.600 € Steuerersparnis</p>
                </div>
                <div className="bg-green-600 rounded-xl p-4">
                  <p className="text-green-200 text-[10px] mb-1">Rendite auf effektiven Einsatz</p>
                  <p className="text-xl font-black text-white">~18–22 % p.a.</p>
                  <p className="text-green-300 text-[10px] mt-0.5">bei 720 €/Monat Mietauszahlung</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Wichtiger Hinweis</p>
              <p className="text-[12px] text-amber-800 leading-relaxed">Die genannten Steuerbeträge sind Beispielrechnungen und keine Steuerberatung. Die individuelle Steuerersparnis hängt von deinem persönlichen Grenzsteuersatz, der Einkunftsart und der konkreten steuerlichen Situation ab.</p>
            </div>
          </div>

          {/* Steuerlich absetzen */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Tiny House steuerlich absetzen — was ist absetzbar?</h2>
            <div className="max-w-3xl">
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Wer ein Tiny House als Investment kauft, kann es vollständig steuerlich absetzen – dank der Klassifikation als bewegliches Wirtschaftsgut. Absetzbar sind der gesamte Kaufpreis über die AfA-Laufzeit von 8 Jahren, die Sonderabschreibung nach §7g EStG im Kaufjahr sowie der Investitionsabzugsbetrag schon im Vorjahr. Hinzu kommen laufende Betriebskosten wie Versicherungen und Verwaltungsgebühren.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Im Gegensatz zu klassischen Immobilien, bei denen nur 2 % jährlich abgeschrieben werden dürfen, erlaubt das Tiny House als bewegliches Wirtschaftsgut die schnelle, steuerlich wirksame Geltendmachung des investierten Kapitals. Das Ergebnis: In den ersten zwei Jahren fließt ein erheblicher Teil des Kaufpreises als Steuerersparnis zurück.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/steuervorteil" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Interaktiver §7g-Rechner →</Link>
            <Link href="/wissen/investitionsabzugsbetrag-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Investitionsabzugsbetrag Guide →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House als Kapitalanlage →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: §7g AfA & Abschreibung</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">§7g-Analyse für deine Steuersituation</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir stellen dir das Steuer-Factsheet zusammen, das dein Steuerberater braucht – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">🔐 Steuer-Factsheet anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Aktuelle Projekte →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
