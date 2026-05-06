import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House als Renditeobjekt: Cashflow & Ertragsmodell 2026 | TinyInvest",
  description:
    "Wie funktioniert die Rendite eines Tiny Houses? Mieteinnahmen, Cashflow-Analyse, 40 % Investor-Anteil, Belegungsquote und vollständiges 5-Jahres-Modell erklärt.",
  keywords:
    "tiny house rendite, tiny house cashflow, tiny house mieteinnahmen, rendite ferienimmobilien 2026, tiny house investment rendite berechnen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
  openGraph: {
    title: "Tiny House als Renditeobjekt – Cashflow & Ertragsmodell 2026",
    description:
      "40 % der Mieteinnahmen für den Investor, 60 % Belegung, 12–18 % IRR: So funktioniert das Tiny House Renditemodell.",
    url: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
};

const faqItems = [
  {
    question: "Wie hoch ist die Rendite eines Tiny Houses bei TinyInvest?",
    answer: "Bei 60 % Belegung und einem Durchschnittspreis von 100 € pro Nacht erhält der Investor 40 % der Netto-Einnahmen – rund 720 € monatlich bzw. 8.760 € jährlich auf ein 79.000 € Objekt. Das entspricht ca. 11 % Cash-on-Cash-Rendite. Inklusive §7g-Steuervorteilen (IAB, Sonder-AfA) liegt der IRR über 5 Jahre bei 13–15 % p.a.",
  },
  {
    question: "Was bekomme ich als Investor ausgezahlt?",
    answer: "Du erhältst monatlich 40 % der Netto-Mieteinnahmen. Die übrigen 60 % gehen an den Host (Stellplatzinhaber) und tiny Escapes (Betrieb, Gästebetreuung, Reinigung). Die Auszahlung erfolgt automatisch – du hast keinen operativen Aufwand.",
  },
  {
    question: "Wie hoch muss die Belegungsquote sein damit sich das Investment lohnt?",
    answer: "Ab ca. 40 % Belegung deckst du laufende Kosten und erzielst positiven Cashflow. Bei 60 % (realistischer Durchschnitt in der tiny Escapes Community) erreichst du die kalkulierten Renditen. Spitzenobjekte in touristischen Regionen liegen bei 70–80 % Belegung.",
  },
  {
    question: "Was passiert nach 5 Jahren mit dem Tiny House?",
    answer: "Das Tiny House hat nach 5 Jahren einen Restwert von ca. 55.000 € (auf Basis aktueller Marktdaten für gebrauchte Vlemmix-Einheiten). Du kannst es weiter vermieten, auf einem anderen Standort aufstellen oder verkaufen. Die Mobilität des Objekts ist dabei ein wesentlicher Vorteil gegenüber Immobilien.",
  },
  {
    question: "Wie unterscheidet sich die Tiny House Rendite von klassischen Immobilien?",
    answer: "Klassische Immobilien erzielen 3–5 % Bruttomietrendite, vor AfA und Steuern. Ein Tiny House bringt 11 % Cash-on-Cash plus signifikante Steuervorteile durch §7g IAB und Sonder-AfA. Der entscheidende Unterschied: Das Tiny House ist als bewegliches Wirtschaftsgut vollständig absetzbar – eine Eigentumswohnung nicht.",
  },
];

export default function TinyHouseAlsRenditePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House als Renditeobjekt: Cashflow & Ertragsmodell 2026",
    "description": "Wie funktioniert die Rendite eines Tiny Houses? Mieteinnahmen, Cashflow-Analyse, 40 % Investor-Anteil, Belegungsquote und vollständiges 5-Jahres-Modell erklärt.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
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
      { "@type": "ListItem", "position": 3, "name": "Renditemodell", "item": "https://tinyhouse.investments/wissen/tiny-house-als-rendite" }
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
      <Script id="article-schema-rendite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-als-rendite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-rendite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Renditemodell</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Cashflow · Ertragsmodell · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Renditeobjekt: Cashflow & Ertragsmodell erklärt
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
            Wie entsteht die Rendite bei einem Tiny House Investment? Dieser Guide erklärt das gesamte Ertragsmodell – von der Belegungsquote über die 3-Wege-Aufteilung bis zum vollständigen 5-Jahres-Cashflow.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-renditeobjekt-aussen.webp" alt="Tiny House Außenansicht – Renditeobjekt" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["40 % Investor-Anteil", "60–70 % Belegung", "12–18 % IRR p.a.", "Monatliche Auszahlung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Modell ist einfach zu verstehen, aber erstaunlich leistungsfähig: Du kaufst ein Tiny House, tiny Escapes betreibt es als Ferienunterkunft, und du erhältst monatlich 40 Prozent der Netto-Einnahmen ausgezahlt – ohne selbst tätig werden zu müssen. Bei 60 Prozent Belegung und einem Durchschnittspreis von 100 Euro pro Nacht sind das rund 720 Euro monatlich für ein 79.000 Euro Objekt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Was das Modell gegenüber klassischen Mietimmobilien überlegen macht, ist nicht allein die Rendite der Mieteinnahmen. Es ist die Kombination: Die 40-Prozent-Auszahlung bildet die Basis. Der §7g-Steuereffekt – Investitionsabzugsbetrag, Sonder-AfA und degressive AfA – verdoppelt in den ersten zwei Jahren die Gesamtrendite. Und der Restwert des Hauses sichert die Investition gegen einen Totalverlust ab.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Warum Tiny Houses zur ernstzunehmenden Assetklasse geworden sind</h2>
          <div className="max-w-3xl mb-6">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die globale Finanzlandschaft und der deutsche Immobilienmarkt befinden sich in einer Phase des grundlegenden Wandels, in der traditionelle Anlagestrategien zunehmend an ihre Grenzen stoßen, während gleichzeitig innovative Nischen zu ernstzunehmenden Assetklassen heranreifen. In diesem Spannungsfeld zwischen Inflationsschutz, steuerlicher Optimierung und der Sehnsucht nach nachhaltigen Lebensformen hat sich das Tiny House als eines der spannendsten Renditeobjekte des 21. Jahrhunderts etabliert. Um die ökonomische Logik hinter diesem Trend zu verstehen, muss man sich von der klassischen Vorstellung der Immobilie als starres und unbewegliches Gut lösen und das Tiny House stattdessen als eine hybride Anlageform begreifen, die die Sicherheit von Sachwerten mit der Dynamik und steuerlichen Flexibilität von beweglichen Wirtschaftsgütern kombiniert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein wesentlicher Treiber für die Attraktivität dieser Anlageform ist die drastische Veränderung des Reiseverhaltens und die Entstehung des sogenannten Glamping-Marktes. Reisende suchen heute vermehrt nach individuellen, naturnahen Erlebnissen, die den Komfort eines Hotels mit der Freiheit und Abgeschiedenheit der Natur verbinden. Ein Tiny House bietet genau diese Intimität und wird damit zu einem hochgradig nachgefragten Produkt in der Kurzzeitvermietung. Aus der Perspektive eines Investors bedeutet dies, dass die erzielbaren Quadratmeterpreise in touristischen Lagen oft ein Vielfaches dessen betragen, was in der klassischen Langzeitvermietung von Wohnraum möglich wäre. Während eine herkömmliche Eigentumswohnung in einer B-Lage oft nur eine Bruttorendite im niedrigen einstelligen Bereich erwirtschaftet, erzielen professionell verwaltete Tiny Houses in Ferienresorts oder an strategisch ausgewählten Standorten oft zweistellige Renditen. Diese Performance resultiert aus einer Kombination von vergleichsweise geringen Anschaffungskosten und einer hohen Zahlungsbereitschaft der Gäste, die für ein Wochenende im autarken Designerhaus gerne Preise zahlen, die auf das Niveau von Luxushotels steigen können.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-wald-naturstandort.webp" alt="Tiny House im Wald – naturnaher Glamping-Standort" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Der Steuermotor: §7g trifft auf Sachwert</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed">
              Die wahre Kraft des Tiny House Investments entfaltet sich jedoch erst bei einer genauen Betrachtung der steuerlichen Rahmenbedingungen in Deutschland, die für Investoren fast beispiellose Vorteile bieten. Da mobile Tiny Houses auf Trailern oft als bewegliche Wirtschaftsgüter klassifiziert werden, eröffnen sie den Zugang zu Abschreibungsmodellen, die bei massiv gebauten Immobilien undenkbar sind. Ein zentrales Instrument ist hierbei der Investitionsabzugsbetrag gemäß §7g EStG, der es Anlegern erlaubt, bis zu 50 % der voraussichtlichen Anschaffungskosten bereits bis zu drei Jahre vor der eigentlichen Investition steuerlich geltend zu machen. Dieser Mechanismus ermöglicht es, die Steuerlast aus anderen Einkunftsarten massiv zu drücken und das so gesparte Kapital direkt zur Finanzierung des Tiny Houses einzusetzen, was die Eigenkapitalrendite erheblich steigert. Ergänzt wird dieser Effekt durch die Möglichkeit der Sonderabschreibung und eine reguläre Abschreibungsdauer von meist nur acht bis elf Jahren – im Vergleich zu den üblichen 50 Jahren bei herkömmlichen Gebäuden. Dieser steuerliche Hebel führt dazu, dass sich das Investment oft bereits nach wenigen Jahren rein durch die Steuerersparnis und die laufenden Cashflows amortisiert.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Vollständig verwaltet – echter passiver Cashflow</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed">
              Ein weiterer entscheidender Faktor für den Erfolg ist die Integration in ein professionelles Bewirtschaftungskonzept, wie es TinyInvest ermöglicht. Für den einzelnen Anleger wäre es operativ kaum zu bewältigen, sich um Standortsuche, Baugenehmigung, Marketing, Gästebetreuung und Instandhaltung eines einzelnen Hauses zu kümmern. Das Modell des Managed Marketplace löst dieses Problem, indem es die Rollen zwischen Investor, Host und Plattform klar verteilt: Der Investor stellt das Kapital und wird rechtmäßiger Eigentümer des Hauses, während spezialisierte Betreiber vor Ort für die maximale Auslastung sorgen. Diese Arbeitsteilung garantiert, dass das Investment ein echtes passives Einkommen generiert, bei dem der Anleger von der Skalierbarkeit und der Professionalität eines Netzwerks profitiert, ohne selbst operativ tätig werden zu müssen. Die Standorte werden dabei nach strengen Kriterien ausgewählt, die sowohl die touristische Attraktivität als auch die rechtliche Sicherheit der Aufstellung berücksichtigen. Da die Nachfrage nach solchen nachhaltigen Urlaubsformen stetig wächst und das Angebot durch begrenzte Stellflächen limitiert bleibt, ist mit einer langfristigen Wertstabilität der Objekte zu rechnen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Nachhaltigkeit als Renditetreiber</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Betrachtet man die ökologische Dimension, so wird deutlich, dass Tiny Houses auch unter dem Aspekt des Impact Investings eine führende Rolle einnehmen. Durch den minimalen Flächenverbrauch, die Verwendung nachhaltiger Rohstoffe wie Holz und hocheffiziente Dämmungen erfüllen sie die Anforderungen einer klimabewussten Gesellschaft. In einer Zeit, in der ESG-Kriterien für Investoren immer wichtiger werden, bietet das Tiny House eine greifbare Möglichkeit, Kapital so einzusetzen, dass es nicht nur finanzielle Erträge abwirft, sondern auch einen positiven ökologischen Fußabdruck hinterlässt. Die Reduktion auf das Wesentliche, die Minimierung von Ressourcenverbrauch und die Förderung des regionalen Tourismus sind Argumente, die nicht nur Gäste anziehen, sondern auch die Resilienz des Investments gegenüber zukünftigen regulatorischen Anforderungen im Gebäudesektor stärken. Zusammenfassend lässt sich festhalten: Das Tiny House als Renditeobjekt bietet Schutz vor Geldentwertung durch physischen Sachwertbesitz, nutzt die massiven steuerlichen Vorteile des deutschen Steuerrechts zur Maximierung des Cashflows und profitiert von einem boomenden Tourismussegment, das nach Authentizität und Naturerlebnis strebt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Die 3-Wege-Aufteilung der Mieteinnahmen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "🏡", party: "Host", percent: "bis 45 %", color: "bg-amber-50 border-amber-200 text-amber-800", textColor: "text-amber-700", desc: "Reinigung, Check-in, Grundstück, Gästebetreuung vor Ort." },
              { icon: "💼", party: "Investor", percent: "40 %", color: "bg-green-50 border-green-200 text-green-800", textColor: "text-green-700", desc: "Stellt das Kapital. Bekommt 40 % passiv – monatlich ausgezahlt." },
              { icon: "⚙️", party: "TinyInvest", percent: "~15 %", color: "bg-gray-50 border-gray-200 text-gray-800", textColor: "text-gray-600", desc: "Buchungsplattform, Marketing, Zahlungsabwicklung, Qualität." },
            ].map((item) => (
              <div key={item.party} className={`rounded-3xl border p-6 text-center ${item.color}`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-lg mb-1">{item.party}</h3>
                <p className={`font-black text-3xl mb-2 ${item.textColor}`}>{item.percent}</p>
                <p className="text-[12px] leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-white mb-12">
            <p className="font-black text-base mb-2">💡 Warum ist dieses Modell so motivierend?</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              Der Host verdient mehr, je besser seine Bewertungen sind – er hat also einen direkten finanziellen Anreiz, das Haus in Top-Zustand zu halten. TinyInvest verdient nur, wenn das Haus auch vermietet wird. Und der Investor profitiert von beiden Motivationen, ohne selbst tätig werden zu müssen.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-investor-aussen.webp" alt="Tiny House Standort Außenansicht" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Belegungsquote & Umsatz: Was ist realistisch?</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Szenario</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Belegung</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Nächte/Jahr</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Umsatz/Jahr</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Investor (40 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Konservativ", "50 %", "182", "18.250 €", "7.300 €"],
                    ["Realistisch ✓", "60 %", "219", "21.900 €", "8.760 €"],
                    ["Optimistisch", "70 %", "255", "25.500 €", "10.200 €"],
                    ["Peak Season", "80 %", "292", "29.200 €", "11.680 €"],
                  ].map(([szen, bel, naechte, umsatz, investor], i) => (
                    <tr key={szen} className={i === 1 ? "bg-green-50/50 font-semibold" : "hover:bg-gray-50/50"}>
                      <td className="p-4 text-gray-700">{szen}</td>
                      <td className="p-4 text-center text-gray-500">{bel}</td>
                      <td className="p-4 text-center text-gray-500">{naechte}</td>
                      <td className="p-4 text-center text-gray-500">{umsatz}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{investor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 p-4 border-t border-gray-100">* Basis: 100 €/Nacht Durchschnittspreis. Tiny Escapes historisch: 60–70 % Belegung.</p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Monatlicher Cashflow: TinyInvest Escape (79.000 €)</h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="space-y-2.5 mb-6">
              {[
                { label: "Umsatz/Monat (219 Nächte ÷ 12 × 100 €)", value: "1.825 €", highlight: false },
                { label: "Host-Anteil (45 %)", value: "– 821 €", highlight: false },
                { label: "Plattform-Fee TinyInvest (15 %)", value: "– 274 €", highlight: false },
                { label: "💰 Investor-Auszahlung (40 %)", value: "730 €/Monat", highlight: true },
                { label: "Rendite auf Kaufpreis (ohne Steuer)", value: "~11,1 % p.a.", highlight: false },
                { label: "Effektive Rendite (mit §7g Steuereffekt)", value: "~16–18 % p.a.", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.highlight ? "text-green-400 font-bold" : "text-gray-300 text-[13px]"}`}>
                  <span>{row.label}</span>
                  <span className="font-data">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-[10px] mb-1">Monatliche Auszahlung</p>
                <p className="font-data text-2xl font-black text-white">730 €</p>
              </div>
              <div className="bg-green-600 rounded-xl p-4 text-center">
                <p className="text-green-200 text-[10px] mb-1">Effektive Rendite p.a.</p>
                <p className="font-data text-2xl font-black text-white">16–18 %</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-kueche.webp" alt="Tiny House Küche und Wohnbereich" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">5-Jahres-Cashflow: TinyInvest Escape 79.000 €</h2>
          <div className="space-y-3 mb-8">
            {[
              { jahr: "Jahr 0", event: "Kauf", cashflow: "– 79.000 €", steuer: "+ 16.380 € (IAB)", kumuliert: "– 62.620 €", highlight: false },
              { jahr: "Jahr 1", event: "IAB-Auflösung + AfA + Miete", cashflow: "+ 8.760 €", steuer: "+ 14.448 € (Sonder-AfA + deg. AfA)", kumuliert: "– 39.412 €", highlight: false },
              { jahr: "Jahr 2", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 € (lineare AfA)", kumuliert: "– 28.852 €", highlight: false },
              { jahr: "Jahr 3", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 18.292 €", highlight: false },
              { jahr: "Jahr 4", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 7.732 €", highlight: false },
              { jahr: "Jahr 5", event: "Mieteinnahmen + Restwert ~55k", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "+ 57.828 €", highlight: true },
            ].map((row) => (
              <div key={row.jahr} className={`rounded-xl p-5 border ${row.highlight ? "bg-green-50 border-green-200" : "bg-white border-gray-100"}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.highlight ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-500"}`}>{row.jahr}</span>
                    <p className="font-semibold text-gray-900 text-sm mt-1">{row.event}</p>
                  </div>
                  <div className="flex gap-6 text-[12px]">
                    <div><p className="text-gray-400 text-[10px]">Cash</p><p className="font-data font-semibold text-gray-700">{row.cashflow}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Steuervorteil</p><p className="font-data font-semibold text-green-700">{row.steuer}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Kumuliert</p><p className={`font-data font-black ${row.highlight ? "text-green-700" : "text-gray-600"}`}>{row.kumuliert}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white mb-10">
            <p className="font-black text-base mb-2">📊 IRR über 5 Jahre: ~13–15 % p.a.</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Der IRR berücksichtigt den Zeitwert des Geldes und alle Cashflows über 5 Jahre. Durch den kombinierten Effekt aus Mieteinnahmen, Steuererstattungen und Restwert ergibt sich eine effektive Jahresrendite von 13–15 % – deutlich über klassischen Immobilien (3–4 %) oder Anleihen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">In ein Tiny House investieren →</Link>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Interaktiver Renditerechner →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Rendite & Cashflow</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Rendite selbst berechnen</h3>
          <p className="text-gray-500 text-sm mb-6">Unser interaktiver Renditerechner zeigt dir deine persönliche Netto-Rendite nach Steuer – in Echtzeit.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/renditemodell" className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">Zum Renditerechner →</Link>
            <ModalButton className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Unterlagen anfordern →</ModalButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
