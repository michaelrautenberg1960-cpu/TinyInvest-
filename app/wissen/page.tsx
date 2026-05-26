import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Wissen & Glossar: Tiny House Investment erklärt | TinyInvest",
  description:
    "Alles über Tiny House Investments: Kapitalanlage, §7g AfA, Abschreibung, IRR und mehr. Glossar mit 25+ Fachbegriffen für Investoren.",
  keywords:
    "tiny house wissen, tiny house glossar, §7g erklärt, afa abschreibung, irr rendite, tiny house investment begriffe",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen",
  },
  openGraph: {
    title: "Wissen & Glossar – Tiny House Investment erklärt",
    description: "Investor-Guides, Steuer-Deep-Dives und ein vollständiges Glossar für Tiny House Investments.",
    url: "https://tinyhouse.investments/wissen",
  },
};

const featured = {
  href: "/wissen/kapitalanlage",
  badge: "Flagship-Guide",
  badgeColor: "bg-green-100 text-green-700",
  title: "Tiny House als Kapitalanlage 2026",
  desc: "Vergleich Tiny House vs. Eigentumswohnung, die 3 Renditesäulen, Risiken, steuerliche Vorteile und ein vollständiges 5-Jahres-Modell – der komplette Einstiegsguide für Investoren.",
  tags: ["Rendite", "ETW-Vergleich", "Risiken", "Cashflow", "§7g"],
  img: "/images/outside/Tiny House vs. Eigentumswohnung als Kapitalanlage Rendite, Steuer & Aufwand im Vergleich 2026.webp",
};

const articles = [
  {
    href: "/wissen/afa-abschreibung",
    badge: "Steuer-Deep-Dive",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "§7g AfA & Sonder-Abschreibung erklärt",
    desc: "IAB, Sonder-AfA (40 %), degressive AfA (30 %): Warum Tiny Houses steuerlich keine Immobilien sind.",
    tags: ["§7g EStG", "IAB", "Sonder-AfA", "Steuer"],
    img: "/images/outside/Tiny House abschreiben Bis zu 34.000 € Steuervorteil im ersten Jahr.webp",
  },
  {
    href: "/wissen/direktinvestment",
    badge: "Sachwert & Eigentum",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Tiny House als Direktinvestment",
    desc: "Kein Fonds, kein Token: Du wirst echter Eigentümer. Vergleich Direktinvestment vs. Crowdinvesting, Kaufprozess und 3 Sachwert-USPs.",
    tags: ["Eigentum", "Sachwert", "Drittverwendung", "Insolvenzschutz"],
    img: "/images/outside/Tiny House als Direktinvestment Sachwert statt Finanzprodukt.jpg",
  },
  {
    href: "/wissen/tiny-house-als-rendite",
    badge: "Cashflow-Guide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House als Renditeobjekt: Cashflow erklärt",
    desc: "3-Wege-Aufteilung, Belegungsquoten, monatlicher Cashflow und vollständiges 5-Jahres-Modell.",
    tags: ["Cashflow", "40 % Anteil", "Belegung", "IRR"],
    img: "/images/outside/tiny-house-nebel-natur.jpg",
  },
  {
    href: "/wissen/steuerberater-finden",
    badge: "Praxis-Guide",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Den richtigen §7g-Steuerberater finden",
    desc: "Checkliste, 7 kritische Erstgespräch-Fragen und was du mitbringen musst – damit kein Steuervorteil verloren geht.",
    tags: ["Steuerberater", "§7g", "Checkliste", "Erstgespräch"],
    img: "/images/outside/tiny-house-stellplatz-standort.webp",
  },
  {
    href: "/wissen/host-werden",
    badge: "Für Hosts",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "Host werden: Tiny House auf deinem Grundstück",
    desc: "Kein Eigenkapital nötig: Standort-Voraussetzungen, Verdienst bis 45 % und der komplette Bewerbungsprozess.",
    tags: ["Host", "Grundstück", "bis 45 %", "Bewerbung"],
    img: "/images/outside/tiny-house-naturlage-gruen.webp",
  },
  {
    href: "/wissen/tiny-house-finanzierung",
    badge: "Finanzierungs-Guide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House finanzieren 2026",
    desc: "Kredit, Leasing oder Cash? Vergleich der Finanzierungsoptionen und warum §7g Barzahlung begünstigt.",
    tags: ["Kredit", "Cash", "Leasing"],
    img: "/images/outside/tiny-house-escape-sachwert.webp",
  },
  {
    href: "/wissen/tiny-house-kaufen-checkliste",
    badge: "Praxis-Guide",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Checkliste: Tiny House kaufen",
    desc: "Von der §7g-Steuervorbereitung bis zum ersten Cashflow — alle 20 Punkte für Investoren.",
    tags: ["Checkliste", "Kauf", "Cashflow"],
    img: "/images/inside/tiny-house-innen-eigentumsuebergabe.webp",
  },
  {
    href: "/wissen/tiny-house-genehmigung",
    badge: "Rechtliches",
    badgeColor: "bg-red-100 text-red-700",
    title: "Genehmigung: Was du wirklich brauchst",
    desc: "Baurecht, Stellplatz, Bebauungsplan – klare Antworten für Tiny House Investoren in Deutschland.",
    tags: ["Baurecht", "Genehmigung", "Stellplatz"],
    img: "/images/outside/tiny-house-aussenbereich-natur.webp",
  },
  {
    href: "/wissen/ferienimmobilie-steuer",
    badge: "Vergleich",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Ferienimmobilie vs. Tiny House",
    desc: "Steuern, AfA, Rendite und der Vergleich mit Tiny House Investments. Was sich 2026 wirklich lohnt.",
    tags: ["Ferienhaus", "Steuer", "Vergleich"],
    img: "/images/outside/ferienimmobilie-steuer.webp",
  },
  {
    href: "/wissen/tiny-house-standorte",
    badge: "Standort-Guide",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "Beste Standorte in Deutschland",
    desc: "Bayern, Schwarzwald, Ostsee, Allgäu – Belegungsquoten und Rendite im Vergleich.",
    tags: ["Standort", "Belegung", "Regionen"],
    img: "/images/outside/tiny-house-skandinavien-naturlage.webp",
  },
  {
    href: "/wissen/passive-einnahmen-immobilien",
    badge: "Vergleich",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Passive Einnahmen: 5 Modelle im Vergleich",
    desc: "ETW, REITs, Ferienimmobilien, Crowdinvesting und Tiny House im direkten Vergleich.",
    tags: ["Passiv", "REIT", "Crowdinvesting"],
    img: "/images/outside/tiny-house-escape-wald.webp",
  },
  {
    href: "/wissen/tiny-house-airbnb",
    badge: "Cashflow-Guide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House auf Airbnb vermieten",
    desc: "Wirklich profitabel? Belegungsquoten, Nettorevenuen und Steuereffekte für Airbnb-Vermietung.",
    tags: ["Airbnb", "Vermietung", "Rendite"],
    img: "/images/inside/tiny-house-innen-airbnb.webp",
  },
  {
    href: "/wissen/7g-tiny-house-investment",
    badge: "Steuer-Guide",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "§7g Tiny House Investment: Der vollständige Leitfaden",
    desc: "IAB, Sonder-AfA und degressive AfA Schritt für Schritt erklärt – mit Rechenbeispielen und Checkliste für Investoren.",
    tags: ["§7g EStG", "IAB", "Sonder-AfA", "Leitfaden"],
    img: "/images/outside/7g Tiny House Investment Der Vollständige Leitfaden 2026.webp",
  },
  {
    href: "/wissen/iab-tiny-house",
    badge: "Steuer-Deep-Dive",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "Investitionsabzugsbetrag (IAB) für Tiny Houses",
    desc: "Voraussetzungen, Schritt-für-Schritt-Anleitung, Rechenbeispiel und häufige Fehler beim IAB für Tiny House Investoren.",
    tags: ["IAB", "§7g", "Betriebsausgaben", "Vorjahr"],
    img: "/images/outside/IAB Tiny House 2026 So sparst du bis zu 30.000 € vor dem Kauf.webp",
  },
  {
    href: "/wissen/tiny-house-steuern-sparen",
    badge: "Steuer-Strategie",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Steuern sparen mit Tiny House Investment",
    desc: "Die vollständige Anleitung: Drei steuerliche Hebel, Vergleich mit ETW und PV, und wer am meisten profitiert.",
    tags: ["Steuern sparen", "AfA", "IAB", "Strategie"],
    img: "/images/outside/tiny-house-escape-sachwert.webp",
  },
  {
    href: "/wissen/tiny-house-rendite-rechner",
    badge: "Cashflow-Guide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House Rendite berechnen: Cashflow, IRR & Break-even",
    desc: "Wie du Rendite, IRR und Amortisation korrekt berechnest – mit Kennzahlen, Szenarien und Break-even-Matrix.",
    tags: ["Rendite", "IRR", "Cashflow", "Break-even"],
    img: "/images/outside/tiny-house-renditeobjekt-aussen.webp",
  },
  {
    href: "/wissen/pv-anlage-als-kapitalanlage",
    badge: "Vergleich",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "PV-Anlage als Kapitalanlage: Vergleich mit Tiny House",
    desc: "Solaranlage oder Tiny House? Rendite, IAB, Technologierisiko und steuerlicher Hebel im direkten Vergleich.",
    tags: ["PV", "Solaranlage", "Vergleich", "Rendite"],
    img: "/images/outside/PV-Anlage%20als%20Kapitalanlage.webp",
  },
  {
    href: "/wissen/solaranlage-alternative",
    badge: "PV-Alternative",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Solaranlage Alternative 2026: §7g IAB ohne Photovoltaik",
    desc: "PV lohnt sich nicht mehr? Welche Alternativen für den §7g IAB qualifizieren – und warum Tiny Houses doppelte Rendite bringen.",
    tags: ["PV", "Alternative", "IAB", "§7g"],
    img: "/images/outside/Solaranlage-alternative.webp",
  },
  {
    href: "/wissen/pv-direktinvestment-alternative",
    badge: "Steuer & Rendite",
    badgeColor: "bg-green-100 text-green-700",
    title: "PV-Direktinvestment Alternative: §7g IAB unter 100.000 €",
    desc: "Seriöse PV-Direktinvestments starten oft ab 100.000 – 250.000 €. Das Tiny House bietet denselben §7g-Hebel – ab 79.000 €, ohne Netzanschluss-Bürokratie.",
    tags: ["IAB §7g", "Direktinvestment", "Solar Alternative"],
    img: "/images/outside/pv-direktinvestment-alternative.webp",
  },
  {
    href: "/wissen/tiny-house-kaufen",
    badge: "Kaufguide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House kaufen 2026: Preise, Modelle & Investment-Option",
    desc: "Preise ab 65.000 €, Modellvergleich, Genehmigung – und warum viele Käufer ihr Tiny House als Kapitalanlage vermieten statt selbst einzuziehen.",
    tags: ["Kaufen", "Preise", "Modelle", "Investment"],
    img: "/images/outside/tiny-house-investor-aussen.webp",
  },
  {
    href: "/wissen/tiny-house-kaufen-mit-grundstueck",
    badge: "Kaufguide",
    badgeColor: "bg-green-100 text-green-700",
    title: "Tiny House mit Grundstück kaufen: Pakete, Preise & Standorte",
    desc: "Paketangebote aus Tiny House und Grundstück an geprüften Standorten in Bayern, Ostsee & Schwarzwald. Mit Genehmigungsinfo.",
    tags: ["Mit Grundstück", "Bayern", "Ostsee", "Standorte"],
    img: "/images/outside/tiny-house-host-grundstueck.webp",
  },
  {
    href: "/wissen/tiny-house-steuer-risiken",
    badge: "Steuer-Guide",
    badgeColor: "bg-red-100 text-red-700",
    title: "Tiny House Steuermodell: Was das Finanzamt prüft",
    desc: "Die 3 Punkte an denen das §7g-Modell scheitert – und wie professionelles Investment sie von Anfang an ausschließt.",
    tags: ["Betriebsprüfung", "Liebhaberei", "90%-Regel", "§7g"],
    img: "/images/outside/tiny-house-steuermodell-finanzamt.webp",
  },
  {
    href: "/wissen/tiny-house-altersvorsorge",
    badge: "Altersvorsorge",
    badgeColor: "bg-blue-50 text-blue-700",
    title: "Tiny House als Altersvorsorge: Sachwert statt Riester",
    desc: "Riester, ETF oder Tiny House? Monatlicher Cashflow statt Rentenpunkte – vollautomatisch verwaltet, ab 65.000 €.",
    tags: ["Altersvorsorge", "Sachwert", "Riester Alternative", "Monatliche Auszahlung"],
    img: "/images/outside/tiny-house-naturlage-gruen.webp",
  },
  {
    href: "/wissen/rentenlucke-schliessen",
    badge: "Altersvorsorge",
    badgeColor: "bg-blue-50 text-blue-700",
    title: "Rentenlücke schließen: Cashflow mit Tiny House im Ruhestand",
    desc: "Die Rentenlücke liegt bei 800–1.200 €/Monat. Wie ein einzelnes Tiny House sie mit monatlichem Cashflow schließt – kein Aufwand.",
    tags: ["Rentenlücke", "Ruhestand", "Cashflow", "Passives Einkommen"],
    img: "/images/outside/tiny-house-escape-sachwert.webp",
  },
  {
    href: "/wissen/tiny-house-vs-etf-altersvorsorge",
    badge: "Altersvorsorge",
    badgeColor: "bg-blue-50 text-blue-700",
    title: "Tiny House vs. ETF-Sparplan als Altersvorsorge: Vergleich 2026",
    desc: "Rendite, Risiko, Cashflow und das Sequence-of-Returns-Risiko: Direkter Vergleich für Senioren & Rentner ab 55.",
    tags: ["vs. ETF", "Altersvorsorge", "Sequence Risk", "Vergleich"],
    img: "/images/outside/tiny-house-renditeobjekt-aussen.webp",
  },
];

const glossarItems = [
  { term: "AfA", def: "Absetzung für Abnutzung. Die steuerliche Abschreibung eines Wirtschaftsguts über seine Nutzungsdauer." },
  { term: "Belegungsquote", def: "Prozentualer Anteil der gebuchten Nächte an allen verfügbaren Nächten im Jahr. Typisch für Tiny Houses: 60–70 %." },
  { term: "Bewegliches Wirtschaftsgut", def: "Steuerrechtliche Kategorie für nicht fest mit dem Boden verbundene Vermögensgegenstände. Tiny Houses auf Vlemmix Trailern fallen darunter." },
  { term: "Cashflow", def: "Tatsächlicher Geldzufluss aus dem Investment. Bei TinyInvest: 40 % der Mieteinnahmen monatlich an den Investor." },
  { term: "Chassis", def: "Das Fahrgestell des Vlemmix Trailers, auf dem das Tiny House aufgebaut ist. Straßenzugelassen, mit eigener VIN/FIN." },
  { term: "Degressive AfA", def: "Abschreibungsmethode, bei der ein fester Prozentsatz (30 %) vom jeweiligen Restbuchwert abgeschrieben wird. Besonders hoch im ersten Jahr." },
  { term: "Direktinvestment", def: "Investitionsform, bei der der Anleger das Wirtschaftsgut direkt ins Eigentum übernimmt – ohne Intermediär, ohne Fonds, ohne Darlehen. Bei TinyInvest erhältst du Kaufvertrag und Fahrzeugbrief auf deinen Namen." },
  { term: "Drittverwendungsfähigkeit", def: "Eigenschaft eines mobilen Assets, an einem anderen Standort oder von einem anderen Betreiber eingesetzt werden zu können. Tiny Houses auf Vlemmix Trailern können legal abgekoppelt und neu positioniert werden." },
  { term: "FIN", def: "Fahrzeug-Identifikationsnummer. Individueller Code, der den Vlemmix Trailer als straßenzugelassenes Fahrzeug kennzeichnet und dem Tiny House seinen Status als bewegliches Wirtschaftsgut sichert." },
  { term: "Grauwasser-Recycling", def: "System zur Wiederverwendung von Waschwasser (aus Dusche, Waschbecken) z.B. für Toilettenspülung. Erhöht die Autarkie des Tiny Houses." },
  { term: "Host", def: "Betreiber vor Ort, der Reinigung, Check-in, Gästebetreuung und Instandhaltung des Tiny Houses übernimmt. Wird über tiny Escapes vermittelt und erhält bis zu 45 % der Einnahmen." },
  { term: "IAB", def: "Investitionsabzugsbetrag (§7g Abs. 1 EStG). Ermöglicht es, 50 % des geplanten Kaufpreises bereits im Jahr VOR der Investition als Betriebsausgabe abzuziehen." },
  { term: "IRR", def: "Internal Rate of Return (Interner Zinsfuß). Renditekennziffer, die den durchschnittlichen jährlichen Ertrag einer Investition unter Berücksichtigung des Zeitwerts des Geldes angibt. TinyInvest-Projektion: 12–15 % p.a." },
  { term: "Lineare AfA", def: "Klassische Abschreibungsmethode: gleichmäßige Verteilung des Kaufpreises auf die Nutzungsdauer. Bei Tiny Houses: 12,5 % p.a. über 8 Jahre." },
  { term: "NPV", def: "Net Present Value (Kapitalwert). Barwert aller zukünftigen Cashflows minus Investitionskosten. Positiver NPV = Investment lohnt sich." },
  { term: "Nutzungsdauer", def: "Steuerlich anerkannte Basis für die Abschreibung. Für bewegliche Wirtschaftsgüter (Tiny Houses): üblicherweise 8 Jahre laut AfA-Tabelle." },
  { term: "Punktfundament", def: "Punktförmige Bodenverankerung für Tiny Houses, die keine feste Verbindung mit dem Boden herstellt. Erhält den Status als bewegliches Wirtschaftsgut." },
  { term: "Sachwert", def: "Physisches Wirtschaftsgut mit inhärentem Substanzwert – unabhängig von Marktsentiment. Im Gegensatz zu Aktien, Fonds oder Token besitzt ein Sachwert einen Mindestrealisierungswert (Wiederverkauf, Selbstnutzung)." },
  { term: "Sonder-AfA (§7g)", def: "Sonderabschreibung von 40 % des Kaufpreises im Anschaffungsjahr, zusätzlich zur regulären AfA. Gilt für kleine und mittlere Unternehmen für bewegliche Wirtschaftsgüter." },
  { term: "Stellplatzverordnung", def: "Landesrechtliche Vorschriften, die regeln, wo und unter welchen Bedingungen Tiny Houses auf Trailern aufgestellt werden dürfen." },
  { term: "Substanzwert", def: "Der Wert eines Wirtschaftsguts, der auf seiner physischen Substanz basiert – unabhängig von Ertragserwartungen. Bei gebrauchten TinyInvest-Häusern: ca. 60–75 % des Neuwerts." },
  { term: "tiny Escapes", def: "Betreibergesellschaft, die TinyInvest-Assets bewirtschaftet. Übernimmt Marketing, Buchungsmanagement, Hosting und Abrechnung. Erhält bis zu 45 % der Einnahmen." },
  { term: "TinyInvest", def: "Plattform für §7g-optimierte Tiny House Investments in Deutschland und der EU. Strukturiert den Kauf, vermittelt Hosts und Standorte, betreut Investoren." },
  { term: "Übereignung", def: "Rechtlicher Vorgang der Eigentumsübertragung eines beweglichen Wirtschaftsguts. Bei TinyInvest: Übergabe des Fahrzeugbriefs (Vlemmix Trailer) an den Investor als Nachweis des vollständigen Eigentumsübergangs." },
  { term: "VIN", def: "Vehicle Identification Number. Einzelne Seriennummer jedes Vlemmix Trailers. Fundamental für die steuerrechtliche Einordnung als bewegliches Wirtschaftsgut (statt Immobilie)." },
  { term: "Vlemmix Trailer", def: "Niederländischer Fahrzeuganhänger, auf dem TinyInvest-Häuser aufgebaut werden. Straßenzugelassen, CE-zertifiziert, mit eigener VIN/FIN. Ermöglicht die steuerliche Klassifizierung als bewegliches Wirtschaftsgut." },
  { term: "Win-Win-Win", def: "Das TinyInvest-Prinzip: Investor (40 % Einnahmen), Host (bis 45 %), Plattform (15 %) – alle drei Parteien haben einen klaren finanziellen Anreiz." },
  { term: "§7g EStG", def: "Paragraph im Einkommensteuergesetz, der den Investitionsabzugsbetrag (IAB) und die Sonder-AfA für bewegliche Wirtschaftsgüter regelt. Kernstück des TinyInvest-Steuermodells." },
  { term: "§34 BauGB", def: "Regelung im Baugesetzbuch über die Zulässigkeit von Bauvorhaben im unbeplanten Innenbereich. Relevant für Stellplatzgenehmigungen von Tiny Houses." },
];

const sortedGlossar = [...glossarItems].sort((a, b) => a.term.localeCompare(b.term, "de"));

// Unique first letters for jump navigation
const glossarLetters = [...new Set(sortedGlossar.map((item) => item.term.charAt(0).toUpperCase()))];

export default function WissenPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Wissen & Glossar: Tiny House Investment erklärt",
    "description": "Alles über Tiny House Investments: Kapitalanlage, §7g AfA, Abschreibung, IRR und mehr. Glossar mit 25+ Fachbegriffen für Investoren.",
    "url": "https://tinyhouse.investments/wissen",
    "publisher": { "@type": "Organization", "name": "TinyInvest", "url": "https://tinyhouse.investments", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="collection-schema-wissen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Wissen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Wissen · Glossar · Guides</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight">
            Wissen & Glossar: Tiny House Investment erklärt
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Von §7g AfA bis Vlemmix Trailer: Alles, was du als Investor über Tiny Houses wissen musst –
            in verständlichen Guides und einem vollständigen Fachbegriffs-Glossar.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pt-12 pb-4 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-6">Einstieg empfohlen</p>
          <Link
            href={featured.href}
            className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6"
          >
            <div className="md:w-2/5 h-52 md:h-auto overflow-hidden shrink-0">
              <img
                src={featured.img}
                alt={`${featured.title} – TinyInvest Investor-Guide`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
            <div className="p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${featured.badgeColor}`}>{featured.badge}</span>
              </div>
              <h2 className="font-black text-gray-900 text-xl mb-3 group-hover:text-green-700 transition-colors leading-tight">{featured.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <span className="mt-4 text-green-700 font-semibold text-sm group-hover:underline">Guide lesen →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-8 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-6">Alle Guides</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((art) => (
              <Link key={art.href} href={art.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src={art.img}
                    alt={`${art.title} – Tiny House Investment Guide`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${art.badgeColor}`}>{art.badge}</span>
                  </div>
                  <h2 className="font-black text-gray-900 text-[15px] mb-2 group-hover:text-green-700 transition-colors leading-snug">{art.title}</h2>
                  <p className="text-gray-500 text-[12px] leading-relaxed mb-3">{art.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Glossar */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Fachbegriffs-Glossar</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
              A–Z: Alle Begriffe erklärt
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Von AfA bis Vlemmix: Das vollständige Glossar für Tiny House Investoren.
              Ideal als Referenz beim Gespräch mit deinem Steuerberater.
            </p>
          </div>

          {/* A-Z quick jump */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {glossarLetters.map((letter) => (
              <a
                key={letter}
                href={`#glossar-${letter.toLowerCase()}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-[12px] font-bold text-gray-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            {sortedGlossar.map((item, idx) => {
              const letter = item.term.charAt(0).toUpperCase();
              const prevLetter = idx > 0 ? sortedGlossar[idx - 1].term.charAt(0).toUpperCase() : null;
              const isNewLetter = letter !== prevLetter;
              return (
                <div key={item.term}>
                  {isNewLetter && (
                    <div
                      id={`glossar-${letter.toLowerCase()}`}
                      className="scroll-mt-28 text-[11px] font-black text-gray-400 uppercase tracking-widest pt-4 pb-1"
                    >
                      {letter}
                    </div>
                  )}
                  <div
                    id={item.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-5 scroll-mt-24"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center text-[10px] font-black text-white mt-0.5">
                        {item.term.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.term}</h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">{item.def}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Bereit zum ersten Schritt?</span>
          <h3 className="text-2xl font-black text-gray-900 mt-3 mb-4 tracking-tight">Jetzt Investor-Paket anfordern</h3>
          <p className="text-gray-500 text-sm mb-6">
            §7g-Analyse, Asset-Kennzahlen und persönliche Beratung – kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/marktplatz"
              className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm"
            >
              Aktuelle Projekte ansehen →
            </Link>
            <Link
              href="/renditemodell"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
            >
              Renditemodell ansehen →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
