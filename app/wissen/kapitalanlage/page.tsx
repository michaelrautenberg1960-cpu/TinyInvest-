import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House vs. Eigentumswohnung als Kapitalanlage 2026: Rendite, Steuer & Aufwand | TinyInvest",
  description:
    "Lohnt sich ein Tiny House als Kapitalanlage wirklich? Detaillierter Vergleich Tiny House vs. ETW, 3 Renditesäulen, 5-Jahres-Modell und Risiken. Bildungsguide für Investoren 2026.",
  keywords:
    "tiny house vs eigentumswohnung, tiny house kapitalanlage vergleich, lohnt sich tiny house, tiny house rendite berechnen, tiny house kapitalanlage erklärung 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/kapitalanlage",
  },
  openGraph: {
    title: "Tiny House vs. Eigentumswohnung als Kapitalanlage 2026: Rendite, Steuer & Aufwand",
    description:
      "Tiny House vs. ETW: Warum mobile Assets in 2026 die bessere Kapitalanlage sein könnten. Vergleich, Renditeanalyse und Investoren-Guide.",
    url: "https://tinyhouse.investments/wissen/kapitalanlage",
  },
};

const faqItems = [
  {
    question: "Ist ein Tiny House eine Immobilie oder ein bewegliches Wirtschaftsgut?",
    answer:
      "Ein Tiny House auf einem Vlemmix Trailer mit eigener Fahrzeug-Identifikationsnummer (VIN/FIN) gilt steuerrechtlich als bewegliches Wirtschaftsgut – nicht als Immobilie. Es ist nicht fest mit dem Boden verbunden, straßenzugelassen und damit vergleichbar mit einem Wohnmobil oder einer Maschine. Das ist der entscheidende Unterschied zur klassischen ETW: Statt 2 % linearer Gebäude-AfA über 50 Jahre profitierst du von §7g EStG (IAB), 40 % Sonder-AfA und 30 % degressiver AfA im Kaufjahr.",
  },
  {
    question: "Wie hoch ist die durchschnittliche Rendite bei einem Tiny House Investment?",
    answer:
      "Bei einem §7g-optimierten Tiny House über TinyInvest projizieren wir eine IRR (Internal Rate of Return) von 12–15 % p.a. über 5 Jahre. Der Investor erhält 40 % der Kurzzeitvermietungs-Einnahmen von tiny Escapes – bei 60 % Belegung und 100 €/Nacht sind das ca. 720 € netto pro Monat. Hinzu kommen Steuererstattungen im Jahr 1 von bis zu ~33.000 € (bei 80.000 € Investment und 42 % Grenzsteuersatz).",
  },
  {
    question: "Ab welchem Budget kann ich in ein Tiny House investieren?",
    answer:
      "Die Einstiegsschwelle beginnt bei 65.000 € für das Comfort-Modell. Das entspricht weniger als 15 % des durchschnittlichen Kaufpreises einer Eigentumswohnung in einer deutschen Großstadt. Mit dem IAB-Effekt (Steuererstattung von ca. 13.000–14.000 € im ersten Jahr bei 42 % Steuersatz) reduziert sich die effektive Liquiditätsbelastung auf ca. 51.000–52.000 €.",
  },
  {
    question: "Brauche ich ein Grundstück für das Investment?",
    answer:
      "Nein. TinyInvest vermittelt dir einen verifizierten Host und Standort über das tiny Escapes Netzwerk. Du kaufst das Haus – der Stellplatz wird durch den Host bereitgestellt. Das ist einer der größten Vorteile gegenüber klassischen Ferienimmobilien: kein Grundstückskauf, keine Grunderwerbsteuer, keine Notarkosten.",
  },
  {
    question: "Was passiert, wenn das Tiny House nicht vermietet ist?",
    answer:
      "Leerstands-Risiko ist ein echter Faktor. tiny Escapes bewirtschaftet die Objekte aktiv über Airbnb, Booking.com und eigene Kanäle und erreicht historisch 60–70 % Belegung. Sollte die Belegung dauerhaft unter 50 % fallen, wird tiny Escapes das Objekt an einem besser frequentierten Standort neu aufstellen – auf Kosten des Betreibers, nicht des Investors. Das Haus bleibt jederzeit dein Eigentum.",
  },
];

const vergleichRows = [
  ["Einstiegspreis", "~300.000–500.000 €", "ab 65.000 €"],
  ["Kaufnebenkosten", "10–15 % (Notar, Makler, GrESt)", "~0 % (kein Grundstück, keine GrESt)"],
  ["Jährliche Mietrendite (brutto)", "3–5 % p.a.", "12–14 % IRR p.a."],
  ["Abschreibung", "2 % lineare Gebäude-AfA / 50 J.", "§7g: bis 70 % im Kaufjahr"],
  ["Flexibilität", "Keine – ortsgebunden", "Hoch – Standort wechselbar"],
  ["Instandhaltungsaufwand", "Mittel–Hoch", "Gering (Trailer, wartungsarm)"],
  ["Bewirtschaftung", "Selbst oder Hausverwaltung", "Vollautomatisch (tiny Escapes)"],
  ["Liquidierbarkeit", "Schwer (Monate–Jahre)", "Leichter (Wiederverkauf oder Standortwechsel)"],
  ["Netto-Kapitaleinsatz", "60.000–100.000 € EK + Kredit nötig", "ab ~51.000 € (nach IAB-Erstattung)"],
  ["Zeitaufwand für Investor", "20–50 Std./Jahr (Mieter, Verwaltung)", "~0 Std. – vollautomatisch"],
  ["Diversifikation", "Eine konzentrierte Investition", "Mehrere Assets ab 65.000 € möglich"],
  ["Mietrecht", "Volles Mieterschutzrecht (Kündigungsschutz)", "Kein Mietrecht – Kurzzeitvermietung"],
  ["Break-even", "~12–15 Jahre", "~3–5 Jahre (inkl. Steuereffekte)"],
];

export default function KapitalanlagePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House vs. Eigentumswohnung als Kapitalanlage: Rendite, Steuer & Aufwand im Vergleich 2026",
    "description": "Lohnt sich ein Tiny House als Kapitalanlage? Vergleich Tiny House vs. Eigentumswohnung, 3 Renditesäulen, Risiken und Chancen. Kompletter Guide für Investoren 2026.",
    "url": "https://tinyhouse.investments/wissen/kapitalanlage",
    "datePublished": "2026-04-14",
    "dateModified": "2026-05-06",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/Tiny House vs. Eigentumswohnung als Kapitalanlage Rendite, Steuer & Aufwand im Vergleich 2026.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Kapitalanlage", "item": "https://tinyhouse.investments/wissen/kapitalanlage" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script
        id="faq-schema-kapitalanlage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema-kapitalanlage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-kapitalanlage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Kapitalanlage</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House vs. Eigentumswohnung als Kapitalanlage: Rendite, Steuer & Aufwand im Vergleich 2026
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
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Warum immer mehr Investoren auf mobile Assets setzen – statt auf überteuerte Eigentumswohnungen. Dieser Guide zeigt, wie das Modell funktioniert, was es wirklich einbringt und wo die Risiken liegen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image src="/images/outside/Tiny House vs. Eigentumswohnung als Kapitalanlage Rendite, Steuer & Aufwand im Vergleich 2026.webp" alt="Tiny House vs. Eigentumswohnung als Kapitalanlage – Rendite, Steuer & Aufwand im Vergleich 2026" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g-optimiert", "Vollvermietet durch tiny Escapes", "Ab 65.000 €", "12–14 % IRR p.a."].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Was macht eine gute Kapitalanlage im Jahr 2026 aus? Sicherheit durch Sachwert, eine Rendite die über Inflation liegt, und möglichst wenig operativen Aufwand für den Investor. Klassische Eigentumswohnungen erfüllen im deutschen Markt kaum noch eines dieser Kriterien: Kaufpreise von 300.000 bis 500.000 € in Ballungsräumen, Kaufnebenkosten von 10 bis 15 %, Mietrenditen von 3 bis 5 % brutto – und danach ein Jahrzehnt bis zum Break-even. Das war kein attraktives Modell. Es wird nicht attraktiver.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House auf einem Vlemmix Trailer löst strukturell mehrere dieser Probleme gleichzeitig. Kein Grundstückskauf, keine Grunderwerbsteuer, kein Notar. Ein Einstiegspreis ab 65.000 €. Und ein steuerlicher Hebel durch §7g EStG, den klassische Immobilien nicht bieten können – weil sie als unbewegliche Wirtschaftsgüter nicht unter diese Norm fallen. Das Ergebnis ist ein kombinierter Effekt aus laufenden Mieteinnahmen und einem einmaligen Liquiditätsvorteil im Kaufjahr, der die effektive Anfangsinvestition erheblich reduziert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              In Zeiten volatiler Finanzmärkte und steigender Immobilienpreise suchen Investoren verstärkt nach alternativen Sachwerten, die sowohl Sicherheit als auch eine attraktive Verzinsung bieten. Das Tiny House hat sich hierbei als eine der spannendsten Anlageklassen etabliert: Es verbindet die Beständigkeit von Immobilienbesitz mit der Flexibilität mobiler Wirtschaftsgüter und nutzt dabei gezielt die steigende Nachfrage nach nachhaltigen und naturnahen Urlaubsformen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Wirtschaftliche Attraktivität durch geringe Einstiegshürden</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Im Gegensatz zum klassischen Immobilienmarkt, der hohe Eigenkapitalanteile und lange Finanzierungslaufzeiten erfordert, bietet das Tiny House einen deutlich zugänglicheren Einstieg. Die vergleichsweise geringen Anschaffungskosten ermöglichen es Investoren, ihr Portfolio zu diversifizieren oder sogar mehrere Einheiten an verschiedenen Standorten zu erwerben, um das Risiko zu streuen. Die hohe Nachfrage im Tourismussektor führt dazu, dass die erzielbaren Preise bei der Kurzzeitvermietung oft weit über denen traditioneller Mietwohnungen liegen – mit einem Bruchteil des gebundenen Kapitals.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Tiny House vs. Eigentumswohnung (ETW)</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Die größte Einstiegshürde bei Immobilien ist nicht der Kaufpreis – es sind die Kaufnebenkosten. Eine 70 m² Wohnung in München kostet 500.000 €. Allein Notar, Makler und Grunderwerbsteuer verschlingen 50.000–75.000 € – bevor du einen einzigen Euro tilgst.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Klassische ETW</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {vergleichRows.map(([merkmal, etw, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700 text-[13px]">{merkmal}</td>
                      <td className="p-4 text-center text-[13px] text-gray-500">{etw}</td>
                      <td className="p-4 text-center text-[13px] font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white mb-12">
            <p className="text-base font-black mb-3">💡 Die härteste Immobilienwahrheit Deutschlands:</p>
            <p className="text-green-100 text-[14px] leading-relaxed mb-4">
              Eine 70 m² Wohnung in Berlin kostet ~440.000 €. Davon gehen <strong className="text-white">~44.000 € direkt an Notar, Makler und Finanzamt</strong> — noch bevor du einen Euro tilgst. Das ist mehr als der halbe Kaufpreis eines vollwertigen TinyInvest Comfort (65.000 €).
            </p>
            <p className="text-white font-bold text-[14px]">
              → Mit TinyInvest kaufst du ein vollständiges Haus zum Preis der Kaufnebenkosten einer Berliner Wohnung.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-naturlage-gruen.webp" alt="Tiny House in Naturlage – Kapitalanlage mit Belegung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Steuerliche Vorteile und staatliche Förderung</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein entscheidender Hebel für die Rentabilität liegt in den spezifischen steuerlichen Rahmenbedingungen des deutschen Steuerrechts. Da Tiny Houses auf Vlemmix Trailern als bewegliche Wirtschaftsgüter eingestuft werden, profitieren Investoren von deutlich kürzeren Abschreibungszeiträumen im Vergleich zu herkömmlichen Gebäuden – statt 50 Jahren sind es je nach Methode 5 bis 7 Jahre.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Besonders attraktiv ist der Investitionsabzugsbetrag (IAB). Dieser erlaubt es Unternehmern und Freiberuflern, bereits bis zu drei Jahre vor der eigentlichen Anschaffung einen erheblichen Teil der voraussichtlichen Investitionskosten steuerlich geltend zu machen und so die aktuelle Steuerlast massiv zu senken. In Kombination mit der Sonder-AfA (40 %) und der degressiven AfA (30 %) im Kaufjahr entsteht ein hocheffizientes Instrument zur Steueroptimierung und zum schnellen Liquiditätsaufbau – der Netto-Kapitaleinsatz reduziert sich im ersten Jahr erheblich.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Die 3 Säulen der Tiny House Rendite</h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            Was ein Tiny House zur überlegenen Kapitalanlage macht, ist nicht eine einzelne Eigenschaft – sondern das Zusammenspiel von drei unabhängigen Renditequellen.
          </p>
          <div className="space-y-6 mb-12">
            {[
              {
                num: "01",
                title: "Kurzzeitvermietung über tiny Escapes",
                icon: "🏕️",
                color: "border-green-200 bg-white",
                content: [
                  "Das Tiny House wird über das tiny Escapes Netzwerk auf Airbnb, Booking.com und eigenen Kanälen vermietet.",
                  "Der Investor erhält 40 % der Netto-Einnahmen monatlich ausgezahlt.",
                  "Bei 60 % Belegung und 100 €/Nacht: 1.800 € Umsatz/Monat → 720 € Netto an den Investor.",
                  "Kein eigener Aufwand: Host übernimmt Reinigung, Check-in, Kommunikation.",
                ],
                kpi: { label: "Investor-Anteil", value: "40 %" },
              },
              {
                num: "02",
                title: "Niedrige Einstiegshürde + hohe Eigenkapitalrendite",
                icon: "📊",
                color: "border-blue-100 bg-white",
                content: [
                  "Bei einem 65.000 € Haus (Comfort) und 720 €/Monat Auszahlung ergibt sich eine Cash-on-Cash-Rendite von ~13 % p.a.",
                  "Zum Vergleich: Eine ETW mit 4 % Mietrendite brutto benötigt 500.000 € Kapital – und gibt dir nur 20.000 € p.a. zurück.",
                  "Wer 3 Tiny Houses statt einer ETW kauft, verteilt Risiko UND verdient mehr.",
                ],
                kpi: { label: "Cash-on-Cash Rendite", value: "~13 % p.a." },
              },
              {
                num: "03",
                title: "§7g Steuereffekt – der unsichtbare Renditebooster",
                icon: "🏛️",
                color: "border-amber-100 bg-white",
                content: [
                  "Da Tiny Houses bewegliche Wirtschaftsgüter sind, greift §7g EStG: IAB (50 % im Vorjahr), Sonder-AfA (40 %) + degressive AfA (30 %) im Kaufjahr.",
                  "Bei 80.000 € Investment und 42 % Steuersatz: bis zu ~33.000 € Liquiditätsvorteil im Jahr 1.",
                  "Der Netto-Einsatz reduziert sich von 80.000 € auf ~47.000 € – bei gleicher Rendite auf die Einnahmen.",
                ],
                kpi: { label: "Liquiditätsvorteil Jahr 1", value: "≈ 33.000 €" },
              },
            ].map((item) => (
              <div key={item.num} className={`rounded-2xl border-2 ${item.color} p-7`}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
                  >
                    {item.num}
                  </div>
                  <div className="grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-base font-black text-gray-900">{item.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex gap-2 text-[13px] text-gray-600">
                          <span className="text-green-600 shrink-0 mt-0.5">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2">
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{item.kpi.label}</span>
                      <span className="font-black text-green-700 text-lg">{item.kpi.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Das 5-Jahres-Modell: 80.000 € Investment</h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">Jährliche Cashflows</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Mietauszahlung (40 % × 1.800 €/Mon × 12)", value: "8.640 €", bold: false },
                    { label: "IAB-Erstattung (Vorjahr, einmalig)", value: "+ 16.800 €", bold: false },
                    { label: "Sonder-AfA + deg. AfA (Jahr 1)", value: "+ 7.728 €", bold: false },
                    { label: "Gesamt Liquidität Jahr 1", value: "≈ 33.168 €", bold: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}
                    >
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">5-Jahres-Saldo</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Investition", value: "– 80.000 €", bold: false },
                    { label: "Mieteinnahmen (5 J. × 8.640 €)", value: "+ 43.200 €", bold: false },
                    { label: "Steuereffekte Gesamt", value: "+ 33.168 €", bold: false },
                    { label: "Netto-Ergebnis nach 5 Jahren", value: "≈ – 3.632 €", bold: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}
                    >
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-500 mt-3">* Nach 5 Jahren ist das Haus ~60.000 € wert und weiterhin rentabel. Der effektive IRR liegt bei 12–15 % p.a.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Investiert</p>
                <p className="font-data text-2xl font-black text-white">80.000 €</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Effektiv nach IAB</p>
                <p className="font-data text-2xl font-black text-green-400">≈ 63.200 €</p>
              </div>
              <div className="bg-green-600 rounded-2xl p-5">
                <p className="text-green-200 text-[10px] mb-1">IRR p.a.</p>
                <p className="font-data text-2xl font-black text-white">12–15 %</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-12">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Alle Zahlen sind Projektionen auf Basis historischer Belegungsdaten. Der IAB ist einmalig und setzt voraus, dass dein Steuerberater ihn im Vorjahr bildet. Renditeangaben stellen keine Garantie dar. Bitte konsultiere einen unabhängigen Steuerberater.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-wohnzimmer.webp" alt="Tiny House Wohnbereich – Kapitalanlage Innenausstattung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Flexibilität und Risikominimierung</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Ein wesentlicher Vorteil gegenüber der stationären Immobilie ist die Mobilität. Sollte sich ein Standort langfristig als weniger rentabel erweisen oder sich die rechtlichen Rahmenbedingungen vor Ort ändern, kann das Investitionsobjekt mit vergleichsweise geringem Aufwand an einen neuen, attraktiveren Standort versetzt werden. Dieses Exit-Szenario minimiert das Standortrisiko, das bei klassischen Immobilien oft die größte Unwägbarkeit darstellt. Zudem fungiert das Tiny House als Sachwert-Anker, der weitgehend entkoppelt von den Schwankungen der Aktienmärkte agiert – und im Gegensatz zu einem Crowdinvesting-Darlehen ein physisches Gut bleibt, das jederzeit herausverlangt, verkauft oder neu betrieben werden kann.
            </p>
          </div>

          

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Nachhaltigkeit als Werttreiber</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Der Markt für Eco-Tourism und minimalistisches Wohnen wächst stetig. Investoren, die heute in hochwertige, ökologisch gebaute Tiny Houses investieren, bedienen einen langfristigen gesellschaftlichen Trend. Hochwertige Materialien und eine energieeffiziente Bauweise sorgen nicht nur für eine lange Lebensdauer des Objekts, sondern auch für eine stabile Wertentwicklung. Das Tiny House ist somit nicht nur eine Antwort auf den Wunsch nach Rendite, sondern auch ein Investment in eine zukunftsorientierte Form des Eigentums – eines, das zu der Reisewelt passt, die Gäste heute nachfragen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Lohnt sich ein Tiny House als Kapitalanlage 2026?</h2>
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong className="text-gray-900">Ja – für den richtigen Investor-Typ.</strong> Ein Tiny House als Kapitalanlage eignet sich besonders für Steuerpflichtige mit mittlerem bis hohem Einkommen, die von §7g profitieren können, und die passives Einkommen ohne operativen Aufwand suchen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Der kombinierte Effekt aus 40 % Mietauszahlung, hoher AfA-Abschreibung und niedrigem Einstiegspreis macht das Modell gegenüber klassischen Ferienimmobilien strukturell überlegen – wenn der Betreiber tiny Escapes zuverlässig hohe Belegungsquoten liefert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-gray-900">Nicht geeignet für:</strong> Anleger die maximale Sicherheit suchen, keine steuerliche Optimierungsmöglichkeit haben oder das Kapital kurzfristig benötigen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Tiny House als Kapitalanlage überzeugt durch die Kombination aus hoher Cashflow-Rendite, außergewöhnlichen steuerlichen Gestaltungsmöglichkeiten und einer Flexibilität, die im Immobiliensektor ihresgleichen sucht. Wer die rechtlichen Voraussetzungen und die Standortwahl professionell angeht, findet hier ein modernes Anlageprodukt, das perfekt in die heutige Zeit der Mobilität und Nachhaltigkeit passt.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA im Detail →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House beantragen →</Link>
            <Link href="/wissen/ferienimmobilie-steuer" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Ferienimmobilien vs. Tiny House →</Link>
            <Link href="/wissen/passive-einnahmen-immobilien" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Passive Einnahmen im Vergleich →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House als Kapitalanlage</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit für den nächsten Schritt?</p>
            <h3 className="text-xl font-black mb-3">Investor-Paket & persönliche Beratung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              §7g-Analyse für deine Steuersituation, Asset-Kennzahlen und ein unverbindliches Erstgespräch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Unterlagen anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Aktuelle Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
