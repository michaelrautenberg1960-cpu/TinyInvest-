import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "§7g Tiny House Investment: Leitfaden 2026 | TinyInvest",
  description:
    "§7g EStG für Tiny Houses: IAB (50 %), Sonder-AfA (40 %), degressive AfA (30 %) — bis zu 33.000 € Steuerersparnis im Kaufjahr. Der komplette Guide für Investoren.",
  keywords:
    "§7g tiny house investment, IAB investitionsabzugsbetrag tiny house, sonder-afa tiny house, bewegliches wirtschaftsgut abschreiben, tiny house steuern sparen 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/7g-tiny-house-investment",
  },
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  openGraph: {
    title: "§7g Tiny House Investment – Vollständiger Leitfaden 2026",
    description:
      "IAB, Sonder-AfA, degressive AfA: So sparst du 22.000–33.000 € Steuern im Kaufjahr. Der umfassendste §7g-Guide für Tiny House Investoren.",
    url: "https://tinyhouse.investments/wissen/7g-tiny-house-investment",
  },
};

const faqItems = [
  {
    question: "Was ist §7g EStG und warum gilt er für Tiny Houses?",
    answer:
      "§7g EStG ermöglicht Investoren, bewegliche Wirtschaftsgüter steuerlich bevorzugt zu behandeln. Ein Tiny House auf einem Vlemmix Trailer mit eigener Fahrzeug-Identifikationsnummer (VIN/FIN) gilt nicht als Immobilie, sondern als bewegliches Wirtschaftsgut — ähnlich einer Maschine oder einem Fahrzeug. Damit greifen alle §7g-Vorteile: IAB, Sonder-AfA und degressive AfA.",
  },
  {
    question: "Wie hoch ist die maximale Steuerersparnis durch §7g bei einem Tiny House?",
    answer:
      "Bei einem 80.000 € Investment und 42 % Grenzsteuersatz: IAB (50 % = 40.000 €) im Vorjahr → ca. 16.800 € Steuerersparnis. Im Kaufjahr: Sonder-AfA (40 % = 32.000 €) + degressive AfA (30 % = 24.000 €) auf Restwert. Gesamteffekt Jahr 0–1: ca. 22.000–33.000 € Liquiditätsvorteil. Das ist in keinem anderen Asset-Modell mit vergleichbarem Kaufpreis erreichbar.",
  },
  {
    question: "Muss ich ein Gewerbe anmelden, um §7g nutzen zu können?",
    answer:
      "Ja. §7g EStG ist ausschließlich für betriebliche Zwecke nutzbar. Du musst ein Einzelgewerbe oder Einzelunternehmen betreiben. Die gute Nachricht: TinyInvest unterstützt dich bei der Gewerbeanmeldung und das Full-Service-Modell von tiny Escapes erfüllt automatisch die Voraussetzung der gewerblichen Nutzung.",
  },
  {
    question: "Was ist der Unterschied zwischen IAB und Sonder-AfA?",
    answer:
      "Der IAB (Investitionsabzugsbetrag) wird bis zu 3 Jahre VOR dem Kauf gebildet — du setzt 50 % des geplanten Kaufpreises bereits im laufenden Steuerjahr ab, ohne das Asset schon zu besitzen. Die Sonder-AfA (40 %) wird hingegen IM Kaufjahr zusätzlich zur regulären AfA geltend gemacht. Kombiniert ergibt sich ein Timing-Effekt, der die Steuerbelastung in den Jahren vor und nach dem Kauf massiv reduziert.",
  },
  {
    question: "Kann ich §7g auch rückwirkend nutzen?",
    answer:
      "Den IAB kann dein Steuerberater in bestimmten Fällen noch rückwirkend für das Vorjahr bilden, sofern der Steuerbescheid noch nicht bestandskräftig ist. Die Sonder-AfA und degressive AfA gelten ab dem Jahr der Anschaffung. Eine individuelle Beratung durch einen §7g-erfahrenen Steuerberater ist unverzichtbar.",
  },
  {
    question: "Was bedeutet 'bewegliches Wirtschaftsgut' steuerlich?",
    answer:
      "Ein bewegliches Wirtschaftsgut ist nicht dauerhaft fest mit dem Boden verbunden. Tiny Houses auf Vlemmix Trailern haben eine eigene Fahrgestellnummer, sind straßenzugelassen und transportierbar. Das Finanzamt klassifiziert sie wie Fahrzeuge oder Maschinen — mit einer Nutzungsdauer von 8 Jahren statt 50 Jahren bei Gebäuden. Das ist der Schlüssel zu den kurzen, effektiven Abschreibungszeiträumen.",
  },
];

const subGuides = [
  {
    href: "/wissen/investitionsabzugsbetrag-tiny-house",
    title: "Investitionsabzugsbetrag Tiny House: Vollständiger Guide",
    desc: "Voraussetzungen, Berechnung und optimale Kombination mit Sonder-AfA. Bis zu 39.500 € Steuerersparnis.",
    badge: "IAB Deep-Dive",
    color: "bg-green-100 text-green-700",
  },
  {
    href: "/wissen/afa-abschreibung",
    title: "§7g AfA & Sonder-Abschreibung erklärt",
    desc: "IAB, Sonder-AfA (40 %), degressive AfA (30 %) mit konkreten Rechenbeispielen.",
    badge: "Steuer-Deep-Dive",
    color: "bg-amber-100 text-amber-700",
  },
  {
    href: "/wissen/kapitalanlage",
    title: "Tiny House als Kapitalanlage 2026",
    desc: "Vergleich Tiny House vs. ETW, die 3 Renditesäulen und vollständiges 5-Jahres-Modell.",
    badge: "Flagship-Guide",
    color: "bg-green-100 text-green-700",
  },
  {
    href: "/wissen/direktinvestment",
    title: "Tiny House als Direktinvestment",
    desc: "Sachwert statt Finanzprodukt: Eigentumsrechte, Kaufprozess, Insolvenzschutz.",
    badge: "Sachwert",
    color: "bg-blue-100 text-blue-700",
  },
  {
    href: "/wissen/steuerberater-finden",
    title: "Den richtigen §7g-Steuerberater finden",
    desc: "7 Pflichtfragen für das Erstgespräch und vollständige Gesprächs-Checkliste.",
    badge: "Praxis-Guide",
    color: "bg-purple-100 text-purple-700",
  },
  {
    href: "/wissen/tiny-house-finanzierung",
    title: "Tiny House finanzieren: Cash, Kredit oder Leasing?",
    desc: "Warum §7g Barzahlung zur dominanten Strategie macht — mit Zahlen.",
    badge: "Finanzierung",
    color: "bg-green-100 text-green-700",
  },
  {
    href: "/wissen/tiny-house-als-rendite",
    title: "Tiny House als Renditeobjekt: Cashflow erklärt",
    desc: "40 % Investor-Anteil, 60–70 % Belegung, 12–18 % IRR — das vollständige Modell.",
    badge: "Cashflow",
    color: "bg-green-100 text-green-700",
  },
  {
    href: "/wissen/tiny-house-kaufen-checkliste",
    title: "Checkliste: Tiny House kaufen als Investor",
    desc: "Alle 20 Punkte von der §7g-Vorbereitung bis zum ersten Cashflow.",
    badge: "Checkliste",
    color: "bg-blue-100 text-blue-700",
  },
  {
    href: "/wissen/ferienimmobilie-steuer",
    title: "Ferienimmobilie vs. Tiny House: Steuervergleich",
    desc: "Warum §7g bei Ferienimmobilien nicht greift und Tiny Houses überlegen sind.",
    badge: "Vergleich",
    color: "bg-purple-100 text-purple-700",
  },
  {
    href: "/wissen/passive-einnahmen-immobilien",
    title: "Passive Einnahmen: 5 Modelle im Vergleich",
    desc: "ETW, REITs, Crowdinvesting, Ferienimmobilien und Tiny House — direkter Vergleich.",
    badge: "Vergleich",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function PillarPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "§7g Tiny House Investment: Der vollständige Leitfaden 2026",
    "description": "§7g EStG für Tiny Houses: IAB (50 %), Sonder-AfA (40 %), degressive AfA (30 %) — bis zu 33.000 € Steuerersparnis im Kaufjahr.",
    "url": "https://tinyhouse.investments/wissen/7g-tiny-house-investment",
    "datePublished": "2026-04-15",
    "dateModified": "2026-05-06",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/7g Tiny House Investment Der Vollständige Leitfaden 2026.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "§7g Leitfaden", "item": "https://tinyhouse.investments/wissen/7g-tiny-house-investment" }
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "§7g IAB für Tiny House Investment nutzen: Schritt für Schritt",
    "description": "So wendest du den §7g Investitionsabzugsbetrag, Sonder-AfA und degressive AfA für ein Tiny House als Kapitalanlage an.",
    "totalTime": "P1Y",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Voraussetzungen prüfen",
        "text": "Du benötigst betriebliche Einkünfte (Gewerbebetrieb, Freiberuf oder Vermietung mit Gewinnerzielungsabsicht) und einen Gewinn unter 200.000 € im Jahr der IAB-Bildung. Das Tiny House auf Vlemmix Trailer gilt als bewegliches Wirtschaftsgut.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "IAB in der Steuererklärung bilden",
        "text": "Dein Steuerberater trägt den IAB in Anlage EÜR (Zeile 97–99) oder der Bilanz ein. Der Abzugsbetrag kann bis zu 50 % der geplanten Investitionssumme betragen, maximal 200.000 €.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tiny House kaufen & Sonder-AfA anwenden",
        "text": "Im Kaufjahr wird der IAB aufgelöst und mit dem Buchwert verrechnet. Zusätzlich greift die Sonder-AfA (20 % im Investitionsjahr) sowie optional die degressive AfA (25 % p.a.). Belege: Kaufvertrag, Fahrzeugbrief (VIN/FIN), Übergabeprotokoll.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Betriebliche Nutzung sicherstellen",
        "text": "Das Tiny House muss in den ersten 3 Jahren nach Investition ausschließlich oder fast ausschließlich betrieblich genutzt werden. Die Vermietung über tiny Escapes erfüllt diese Voraussetzung automatisch.",
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-7g" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-7g-tiny-house-investment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="howto-schema-7g" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="faq-schema-7g" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">§7g Leitfaden</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Pillar-Guide · §7g EStG · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            §7g Tiny House Investment:<br />Der vollständige Leitfaden 2026
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
            Investitionsabzugsbetrag, Sonder-AfA, degressive AfA — kombiniert ergibt §7g bis zu 70 % Sofortabschreibung im Kaufjahr.
            Warum Tiny Houses auf Vlemmix Trailern das einzige Immobilien-nahe Asset sind, das diesen Steuerhebel vollständig nutzt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src="/images/outside/7g Tiny House Investment Der Vollständige Leitfaden 2026.webp"
              alt="§7g Tiny House Investment – Der vollständige Leitfaden 2026"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "IAB 50 %", "Sonder-AfA 40 %", "Deg. AfA 30 %", "Bewegliches Wirtschaftsgut", "22.000–33.000 € Steuervorteil"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Kennzahlen-Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-950 rounded-2xl p-6 mb-14 text-center">
            {[
              { value: "70 %", label: "Sofortabschreibung", sub: "Sonder-AfA + deg. AfA kombiniert" },
              { value: "50 %", label: "IAB im Vorjahr", sub: "§7g Abs. 1 EStG" },
              { value: "≈ 33 K€", label: "Liquiditätsvorteil", sub: "Bei 80.000 € Investition, 42 % Steuersatz" },
              { value: "8 Jahre", label: "AfA-Laufzeit", sub: "Statt 50 Jahre bei Immobilien" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-black text-2xl text-green-400">{s.value}</p>
                <p className="text-[11px] font-bold text-white mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Warum Tiny Houses §7g-fähig sind */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum Tiny Houses §7g-fähig sind — und Immobilien nicht</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der entscheidende Unterschied liegt in der steuerlichen Klassifikation. Eine Eigentumswohnung oder ein Einfamilienhaus ist eine Immobilie — gebunden an Grunderwerbsteuer, Notar, 50-jährige AfA-Laufzeit und maximal 2 % jährliche Abschreibung. §7g EStG gilt ausschließlich für <strong>bewegliche Wirtschaftsgüter</strong>.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House auf einem Vlemmix Trailer besitzt eine eigene Fahrzeug-Identifikationsnummer (VIN/FIN), ist straßenzugelassen und nicht dauerhaft mit dem Boden verbunden. Das Finanzamt behandelt es wie eine Maschine oder ein Fahrzeug — mit einer Nutzungsdauer von 8 Jahren und dem vollen Zugang zu allen §7g-Instrumenten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das ist kein Steuertrick, sondern die korrekte Anwendung des Steuerrechts auf ein Wirtschaftsgut, das sich fundamental von klassischen Immobilien unterscheidet. Steuerberater, die §7g bei beweglichen Wirtschaftsgütern kennen, bestätigen dies routinemäßig.
            </p>
          </div>

          {/* Fließtext */}
          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Das Tiny House als steueroptimierte Kapitalanlage</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                In der modernen Investmentlandschaft gewinnt das Tiny House als innovative Sachwert-Anlageklasse zunehmend an Bedeutung. Anders als klassische Immobilien, die mit hohen Einstiegshürden, langen Finanzierungslaufzeiten und komplexen Verwaltungsaufwänden verbunden sind, kombiniert ein mobiles Tiny House die Beständigkeit von Sachwerten mit der Flexibilität beweglicher Wirtschaftsgüter. Das wesentliche Fundament für die wirtschaftliche Attraktivität bildet das deutsche Steuerrecht — insbesondere der Investitionsabzugsbetrag (IAB) sowie die Sonderabschreibungen gemäß § 7g des Einkommensteuergesetzes (EStG).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der steuerliche Kern: Das bewegliche Wirtschaftsgut</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Der entscheidende rechtliche Vorteil eines Tiny Houses liegt in seiner Konstruktion: Sofern es auf einem straßenzugelassenen Trailer — wie dem Vlemmix-Trailer — errichtet wird, gilt es steuerlich nicht als Gebäude, sondern als <strong className="text-gray-900">bewegliches Wirtschaftsgut</strong>. Dieser Status eröffnet Investoren drei aufeinander aufbauende Abschreibungshebel, die im klassischen Immobilienbereich nicht existieren.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Über den <strong className="text-gray-900">Investitionsabzugsbetrag (IAB)</strong> können bis zu 50 Prozent der voraussichtlichen Anschaffungskosten steuerlich vorweggenommen werden — sogar schon im Jahr vor der eigentlichen Anschaffung. Das führt zu einer sofortigen, massiven Reduzierung der persönlichen Steuerlast, ohne dass das Kapital bereits gebunden ist.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Zusätzlich lässt sich nach der Anschaffung eine <strong className="text-gray-900">Sonderabschreibung (Sonder-AfA) von bis zu 40 Prozent</strong> geltend machen — durch das Wachstumschancengesetz 2024 auf diesen Höchstwert angehoben und bis 31.12.2027 befristet. Der verbleibende Restwert wird anschließend über die reguläre Nutzungsdauer von acht Jahren linear oder degressiv abgeschrieben.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Im direkten Vergleich zu einer klassischen Eigentumswohnung, deren Abschreibung sich über 50 Jahre erstreckt, ermöglicht das Tiny House eine extrem beschleunigte Aufzehrung der Anschaffungskosten. In den ersten Jahren fallen dadurch kaum steuerpflichtige Gewinne aus der Vermietung an.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Konkreter Liquiditätseffekt und Zielgruppen</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Die steuerliche Hebelwirkung transformiert sich direkt in liquides Kapital. Bei einer Investitionssumme von 80.000 Euro und einem persönlichen Spitzensteuersatz von 42 Prozent führt der Steuerbonus im ersten Jahr zu einem <strong className="text-gray-900">Liquiditätsvorteil von bis zu 33.000 Euro</strong>. Der reale Netto-Kapitaleinsatz reduziert sich damit effektiv auf rund 47.000 Euro — während die Rendite auf Basis der vollen Einnahmen berechnet wird.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-gray-900">Gutverdienende Angestellte</strong> können ab einem Grenzsteuersatz von etwa 35 Prozent erhebliche Summen einsparen — ganz ohne eigenes Gewerbe, allein über die Einkünfte aus Vermietung und Verpachtung. <strong className="text-gray-900">Selbstständige und Freiberufler</strong> nutzen den IAB primär, um stark schwankende Einnahmen oder außergewöhnliche Spitzenjahre steuerlich auszugleichen. Für <strong className="text-gray-900">GmbH-Gesellschafter und Unternehmer</strong> bietet die Aktivierung im Betriebsvermögen zusätzlich die Option, Körperschaft- und Gewerbesteueraufwand effektiv zu senken.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rendite und das operative Ökosystem</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Wirtschaftlich betrachtet übertreffen Tiny House Investments viele traditionelle Anlagen. Während Photovoltaikanlagen meist Renditen von 3 bis 5 Prozent erzielen und fest mit einer Immobilie verbunden sind, erwirtschaften Tiny Houses im Tourismussektor über die Kurzzeitvermietung — etwa via Airbnb, Booking.com oder spezialisierte Portale — <strong className="text-gray-900">Nettorenditen zwischen 11 und 14 Prozent pro Jahr</strong>. Zudem bleibt das Asset hochgradig flexibel: Läuft ein Standort nicht wie erwartet, kann das Haus auf seinem Trailer unkompliziert versetzt werden. Ein Wiederverkauf ist frei von Notarkosten und Grunderwerbsteuer.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Damit das Investment echtes passives Einkommen generiert, baut TinyInvest auf ein vollautomatisches Betreibermodell durch spezialisierte Partner wie <a href="https://www.tiny.rentals" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">tiny Escapes</a>. Der Investor erwirbt das physische Objekt, während der Betreiber das gesamte operative Geschäft übernimmt: Standortakquise auf geprüften Grundstücken in Deutschland und Europa, Transport, behördliche Genehmigungen, Marketing, Gästebetreuung sowie laufende Instandhaltung. Die Abrechnung erfolgt über einen fairen Aufteilungsschlüssel der Mieteinnahmen — der Investor profitiert von einem inflationsgeschützten Sachwert und kontinuierlichem Cashflow, ohne eigenen zeitlichen Aufwand.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-green-700 font-bold text-sm mb-1">Steuerlicher Hinweis</p>
              <p className="text-green-800 text-[13px] leading-relaxed">
                Alle Steuereffekte sind Beispielrechnungen auf Basis eines 42 %-Grenzsteuersatzes. Die individuelle Steuerersparnis hängt von der persönlichen Einkommenssituation ab. Eine Beratung durch einen §7g-erfahrenen Steuerberater ist vor der Investition empfohlen. Gewinngrenze für den IAB: 200.000 € im Jahr der Bildung (§7g Abs. 1 Nr. 1 EStG).
              </p>
            </div>

          </div>

          <div className="relative rounded-2xl overflow-hidden mb-14" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-renditeobjekt-aussen.webp"
              alt="§7g Tiny House Investment – bewegliches Wirtschaftsgut als Kapitalanlage"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Vertiefende Guides */}
          <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Vertiefende Guides zu §7g & Tiny House Investment</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">Jeder Guide geht auf einen spezifischen Aspekt ein. Zusammen bilden sie das vollständige Bild.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {subGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-green-100 transition-all"
              >
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${g.color} mb-3 inline-block`}>{g.badge}</span>
                <h3 className="font-black text-gray-900 text-[14px] leading-snug mb-2 group-hover:text-green-700 transition-colors">{g.title}</h3>
                <p className="text-gray-400 text-[12px] leading-relaxed">{g.desc}</p>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Häufige Fragen zu §7g & Tiny House</h2>
          <div className="space-y-4 mb-14">
            {faqItems.map((item) => (
              <details key={item.question} className="group border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-gray-900 text-[14px] hover:bg-gray-50 transition-colors list-none">
                  {item.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4">↓</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-gray-600 text-[13px] leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-3">Jetzt starten</p>
            <h2 className="font-black text-2xl mb-3">§7g nutzen – bevor das Steuerfenster 2027 schließt</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Die erhöhte Sonder-AfA (40 %) gilt nur bis 31.12.2027. Wer jetzt kauft, sichert sich den historisch besten Abschreibungshebel für Tiny House Investments.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Beratung anfragen →
              </ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                IAB-Rechner →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-8 mt-8 border-t border-gray-100">
            <Link href="/steuervorteil" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Steuerrechner →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
