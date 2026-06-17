// ─────────────────────────────────────────────
// All static data for TinyInvest
// ─────────────────────────────────────────────

export const navLinks = [
  { label: "Marktplatz", href: "/marktplatz" },
  { label: "Konfigurator", href: "/konfigurator" },
  { label: "Steuer-Vorteile", href: "/steuervorteil" },
  { label: "Rendite-Modell", href: "/renditemodell" },
  { label: "So funktioniert's", href: "/so-funktioniert-es" },
  { label: "Wissen", href: "/wissen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: "70 %", label: "Im Kaufjahr absetzbar" },
  { value: "bis 18 %", label: "Rendite p.a." },
  { value: "50–60 %", label: "Ø Belegung (tiny Escapes)" },
  { value: "100 %", label: "Mobiles Wirtschaftsgut" },
];

export const investorPaths = [
  {
    icon: "📋",
    tag: "Steuer-Investor",
    title: "Steuern sparen & Vermögen aufbauen",
    desc: "Sie verdienen gut und zahlen hohe Steuern? Mit unserem beweglichen Wirtschaftsgut nutzen Sie IAB, Sonder-AfA und lineare Abschreibung – und holen sich bis zu 25.000 € direkt vom Finanzamt zurück.",
    highlights: ["IAB: 50 % vorab absetzbar", "Sonder-AfA: 40 % + degr. AfA 30 % (ab 2025)", "70 % im Kaufjahr absetzbar"],
    cta: "Steuer-Hebel berechnen",
    href: "#steuer",
    color: "green",
  },
  {
    icon: "📈",
    tag: "Rendite-Investor",
    title: "Passives Einkommen ohne Arbeit",
    desc: "Sie kaufen ein TinyInvest-Haus und lehnen sich zurück. Unser Host-Netzwerk vermietet es für Sie, Sie erhalten 40 % der Einnahmen monatlich – ohne einen Finger zu rühren.",
    highlights: ["40 % der Mieteinnahmen", "Full-Service Management", "Motivierter Host vor Ort"],
    cta: "Rendite berechnen",
    href: "#rendite",
    color: "blue",
  },
  {
    icon: "🏡",
    tag: "Finanzierungs-Käufer",
    title: "Das Haus finanziert sich selbst",
    desc: "Sie kaufen auf Raten oder Kredit – und die monatlichen Mieteinnahmen (Ihre 40 %) decken die Bankrate vollständig ab. Das Finanzamt übernimmt quasi die Anzahlung.",
    highlights: ["Kreditrate aus Mieteinnahmen", "IAB als Eigenkapital-Ersatz", "Haus refinanziert sich selbst"],
    cta: "Finanzierung anfragen",
    href: "#kontakt",
    color: "amber",
  },
];

export const models = [
  {
    img: "/images/outside/escape3.webp",
    tag: "On-Grid · Einstieg",
    title: "TinyInvest Comfort",
    desc: "Vollwertiges Tiny House mit modernem Design und allen Annehmlichkeiten. Netzgebunden für maximalen Komfort auf Ferienparks und Campingplätzen.",
    preis: "65.000 €",
    renditeMin: "10",
    renditeMax: "12",
    highlights: ["Netzanschluss (Strom/Wasser)", "Vlemmix Trailer · VIN", "Kompakt & effizient"],
    badge: "Günstigster Einstieg",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    img: "/images/outside/tiny-house-escape-sachwert.webp",
    tag: "Off-Grid · Standard",
    title: "TinyInvest Escape",
    desc: "Vollautarkes Tiny House mit Solaranlage, Wassertanks und Clansana-Komposttoilette. Perfekt für naturnahe Standorte ohne Infrastruktur.",
    preis: "79.000 €",
    renditeMin: "12",
    renditeMax: "14",
    highlights: ["Solar + Batteriespeicher", "Clansana Komposttoilette", "Vollautark · Standort frei wählbar"],
    badge: "Bestseller",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    img: "/images/outside/Escape2.webp",
    tag: "Off-Grid · Premium",
    title: "TinyInvest Elite",
    desc: "Das Flaggschiff. Vollautarkes Premium-Haus mit Loop-Duschwassersystem, Cinderella-Verbrennungstoilette, hochwertiger Schafwoll-Dämmung und Hotel-Standard Innenausstattung.",
    preis: "95.000 €",
    renditeMin: "13",
    renditeMax: "15",
    highlights: ["Loop Dusch-Wassersystem", "Cinderella Verbrennungstoilette", "Vollautark · Hotel-Standard"],
    badge: "Maximum IAB-Hebel",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

export const winWinModel = [
  {
    icon: "🏡",
    party: "Der Host",
    percent: "bis 45 %",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    role: "Kümmert sich vor Ort um Reinigung, Check-in und Pflege des Grundstücks.",
    motivation: "Je besser seine Gäste-Bewertung auf der Plattform, desto höher sein Anteil.",
  },
  {
    icon: "💼",
    party: "Der Investor",
    percent: "40 %",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    role: "Stellt das Kapital (Kauf des Hauses). Erhält monatlich 40 % der Mieteinnahmen passiv.",
    motivation: "Kombiniert mit IAB & Sonder-AfA: effektiv die höchste Rendite auf dem Markt.",
  },
  {
    icon: "⚙️",
    party: "TinyInvest (Plattform)",
    percent: "~15 %",
    color: "bg-gray-50 border-gray-200",
    textColor: "text-gray-700",
    role: "Betreibt die Buchungsplattform, Marketing, Zahlungsabwicklung und Qualitätskontrolle.",
    motivation: "Skalierbar und ortsunabhängig – maximale Auslastung für den Investor.",
  },
];

export const faqs = [
  {
    q: "Was ist ein 'bewegliches Wirtschaftsgut' und warum ist das wichtig?",
    a: "Ein bewegliches Wirtschaftsgut ist steuerlich das Gegenteil einer Immobilie. Da unsere Tiny Houses auf einem zertifizierten Trailer (mit eigener Fahrgestellnummer) stehen und keine feste Bodenverbindung haben, gelten sie nicht als Gebäude, sondern als Maschinen/Fahrzeuge. Das ermöglicht die kurze Abschreibung von 8–10 Jahren (statt 33–50 Jahre) und macht den IAB und die Sonder-AfA möglich.",
  },
  {
    q: "Kann das Tiny House auch im EU-Ausland stehen?",
    a: "Ja, das funktioniert hervorragend! Da das Haus als bewegliches Wirtschaftsgut (vergleichbar mit Fracht/Ladung) gilt, laufen die deutschen Steuervorteile (IAB, Sonder-AfA) über Ihr deutsches Gewerbe weiter – unabhängig vom Standort in der EU. Doppelbesteuerungsabkommen (DBA) sorgen dafür, dass Sie nicht doppelt zahlen.",
  },
  {
    q: "Brauche ich für den Kauf eine GmbH oder UG?",
    a: "Für den maximalen Steuer-Hebel empfehlen wir ein Einzelunternehmen (Nebengewerbe). Nur hier können die steuerlichen 'Verluste' durch Abschreibungen direkt mit Ihrem privaten Gehalt verrechnet werden. Bei einer UG bleibt der Verlust im Unternehmen und kann nicht direkt gegen Ihr privates Einkommen aufgerechnet werden.",
  },
  {
    q: "Wie schnell bekomme ich das Geld vom Finanzamt zurück?",
    a: "Die erste Rückzahlung durch den IAB erfolgt meist innerhalb von 1–3 Monaten nach Einreichung beim Finanzamt (rückwirkende Steuervorauszahlungsanpassung). Den Rest durch Sonder-AfA und lineare AfA erhält man über die jährliche Steuererklärung.",
  },
  {
    q: "Was passiert, wenn der Standort nicht funktioniert?",
    a: "Das ist der entscheidende Vorteil unseres Modells: Da das Haus rechtlich als mobile Ladung (Fracht) auf einem Trailer gilt, kann es jederzeit an einen anderen Standort transportiert werden. Ihr Investment ist nicht ortsgebunden – das Risiko durch schlechte Lage ist faktisch Null.",
  },
  {
    q: "Brauche ich viel Eigenkapital für den Kauf?",
    a: "Der Einstieg beginnt bei 65.000 € (Comfort-Modell). Durch die Steuererstattung im Vorjahr – ca. 16.000–17.000 € bei 42 % Steuersatz – reduziert sich die effektive Liquiditätsbelastung erheblich. Diesen Betrag nutzen viele Investoren als Eigenkapital bei der Bank; der Restkredit wird durch die monatlichen Mieteinnahmen gedeckt – oft mit positivem Cashflow.",
  },
  {
    q: "Muss die Vermietung gewerblich sein?",
    a: "Ja, das ist die Voraussetzung für IAB und Sonder-AfA. Die gute Nachricht: Durch unser Full-Service-Modell (Buchungsplattform, Reinigung, Gäste-Service) ist die gewerbliche Prägung automatisch erfüllt. Der Steuerberater sieht sofort, dass es sich um ein aktives Gewerbe handelt.",
  },
  {
    q: "Wie hoch ist die typische Belegungsrate und was beeinflusst sie?",
    a: "Unsere Häuser erzielen im Durchschnitt 50–60 % Belegung pro Jahr. Entscheidend sind Standortqualität, Host-Bewertung und Listingqualität auf Airbnb und tiny Escapes. Da das Haus jederzeit an einen besseren Standort umziehen kann, ist eine schlechte Belegung korrigierbar – ein Risikopuffer, den klassische Immobilien nicht bieten.",
  },
];

export const steuerCards = [
  {
    icon: "⏰",
    label: "IAB · §7g Abs.1",
    title: "Bis zu 3 Jahre vor dem Kauf",
    desc: "Bilden Sie den Investitionsabzugsbetrag und ziehen Sie 50 % des geplanten Kaufpreises sofort von Ihrem Gewinn ab – noch bevor Sie das Haus überhaupt bestellt haben.",
    tag: "50 % vorab",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    icon: "🚀",
    label: "Sonder-AfA · §7g Abs.5",
    title: "Turbo-Abschreibung im Kaufjahr",
    desc: "Im Jahr der Anschaffung dürfen Sie zusätzlich zur normalen AfA bis zu 40 % (Wachstumschancengesetz 2024) als Sonderabschreibung geltend machen.",
    tag: "40 % extra",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "📉",
    label: "Degressive AfA · §7 Abs.2",
    title: "30 % degressiv – ab dem ersten Tag",
    desc: "Ab 01.07.2025 gilt zusätzlich zur Sonder-AfA die degressive Abschreibung: 30 % des vollen Kaufpreises im Kaufjahr. Kombiniert mit der Sonder-AfA sind so 70 % sofort absetzbar.",
    tag: "30 % degressiv",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export const vergleichRows = [
  ["Durchschnittlicher Kaufpreis (70 m²)", "~308.000 € (DE-Schnitt)", "60.000 – 95.000 € 💚"],
  ["Kaufnebenkosten (Notar, Steuer, Makler)", "~30.000–48.000 € extra (10–12 %)", "Keine – Direktkauf ohne Notar"],
  ["Grunderwerbsteuer", "3,5–6,5 % des Kaufpreises", "❌ Keine (kein Grundstückskauf)"],
  ["Eigenkapital-Bedarf Real", "~50.000–70.000 € nur für Nebenkosten", "IAB-Erstattung = Ihr Eigenkapital ✅"],
  ["Monatliche Kreditrate", "~1.800–2.200 €/Monat", "Durch Mieteinnahmen gedeckt 🟢"],
  ["Hausgeld + Instandhaltungsrücklage", "+100–300 €/Monat extra", "Im Management-Fee enthalten ✅"],
  ["Sanierungsrisiko", "Hoch (+20.000–40.000 € Sonderumlage)", "Keins – Neubau & mobil 🏗️"],
  ["Abschreibungsdauer", "33–50 Jahre", "8–10 Jahre ⚡"],
  ["Steuer-Vorteil Jahr 1", "~1.000 €", "~24.500 € 🎯"],
  ["IAB nutzbar", "❌ Nein", "✅ Ja (50 % vorab)"],
  ["Sonder-AfA (40 %)", "❌ Nein", "✅ Ja (2024)"],
  ["Standortflexibilität", "Fest (Immobil)", "Mobil – EU-weit 🚛"],
  ["Management", "Eigenregie / Hausverwaltung", "Full-Service (Host + Plattform)"],
  ["Rendite p.a.", "3–4 % (nach Kosten)", "10–18 % (effektiv) 🚀"],
];

export const testimonials = [
  {
    initials: "MK",
    name: "Michael K.",
    role: "Selbstständiger Unternehmer, München",
    quote:
      "Ich war zunächst skeptisch, ob das wirklich alles legal ist. Nach einem Gespräch mit meinem Steuerberater war klar: IAB und Sonder-AfA sind hier zu 100 % legitim. Im ersten Jahr habe ich über 22.000 € Steuern gespart – und bekomme jetzt monatlich passiven Cashflow. TinyInvest ist die beste Investment-Entscheidung, die ich je getroffen habe.",
  },
  {
    initials: "SR",
    name: "Sandra R.",
    role: "Ärztin, Hamburg",
    quote:
      "Als Ärztin zahle ich regelmäßig enorme Steuerbeträge. TinyInvest hat mir gezeigt, wie ich das Finanzamt auf meine Seite bringen kann. Der Full-Service nimmt mir komplett die Arbeit ab – ich muss mich um nichts kümmern. Die monatlichen Auszahlungen kommen zuverlässig, und mein Steuerberater ist begeistert vom Konzept.",
  },
  {
    initials: "TH",
    name: "Thomas H.",
    role: "Handwerker & Gewerbetreibender, Köln",
    quote:
      "Als Handwerker wollte ich mein Geld nicht in irgendwelchen Aktienfonds verschwinden sehen. Ein echtes, anfassbares Tiny House – das leuchtet mir ein. Der IAB hat mir direkt im ersten Jahr über 16.000 € zurückgebracht. Und die Rendite von über 12 % p.a. sucht ihresgleichen. Klare Empfehlung!",
  },
];

export const oekosystemItems = [
  {
    icon: "📣",
    title: "Maximale Reichweite",
    desc: "Ihr Haus wird gleichzeitig auf Airbnb UND auf unserer eigenen Buchungsplattform Tiny Escapes (tiny.rentals) gelistet – doppelte Sichtbarkeit, maximale Auslastung.",
    highlight: "tiny Escapes",
    link: "https://www.tiny.rentals",
    linkLabel: "→ tiny Escapes besuchen",
  },
  {
    icon: "🗺️",
    title: "Standort & Placement",
    desc: "Wir suchen und organisieren den optimalen Standort für Ihr Tiny House – ob Ferienpark, Naturgrundstück oder Campingplatz. Sie müssen sich um nichts kümmern.",
    highlight: "Komplettvermittlung",
  },
  {
    icon: "🛎️",
    title: "Full-Service wie ein Hotelkonzern",
    desc: "Ein motivierter Host vor Ort übernimmt Reinigung, Check-in, Gäste-Kommunikation und Pflege. Sie lehnen sich zurück – wir liefern den passiven Cashflow.",
    highlight: "100 % passiv",
  },
  {
    icon: "§",
    title: "Steuerberater-Netzwerk",
    desc: "Auf Wunsch vermitteln wir Sie direkt an spezialisierte Steuerberater, die IAB & Sonder-AfA kennen – für eine reibungslose, maximale Steueroptimierung.",
    highlight: "Auf Wunsch verfügbar",
  },
  {
    icon: "🏦",
    title: "Bankfinanzierung",
    desc: "Wir arbeiten mit Finanzierungspartnern zusammen, die IAB-gestützte Kreditfinanzierungen kennen – damit Sie mit minimalem Eigenkapital einsteigen können.",
    highlight: "Finanzierungspartner",
  },
  {
    icon: "🛡️",
    title: "Versicherung inklusive",
    desc: "Ihr Tiny House wird als bewegliches Wirtschaftsgut vollständig versichert – Feuer, Sturm, Diebstahl. Auf Wunsch vermitteln wir direkt an unsere Versicherungspartner.",
    highlight: "Vollversicherung",
  },
];

export const partnerBenefits = [
  {
    icon: "🌿",
    title: "Nachhaltige Produkte",
    desc: "Sie vermitteln Produkte mit echtem Mehrwert – mobile Tiny Houses als ökologisch sinnvolle Sachwerte, die sich praktisch von selbst verkaufen.",
  },
  {
    icon: "💰",
    title: "Attraktive Provision",
    desc: "Überdurchschnittliche Vergütung pro erfolgreich vermitteltem Kauf – kein Deckel, keine Vorabgebühren, kein Risiko.",
  },
  {
    icon: "🚀",
    title: "Einfaches Onboarding",
    desc: "Kostenloses Schulungskonzept, Einwandbehandlung, fertige Präsentationsunterlagen und direkter Ansprechpartner bei TinyInvest.",
  },
];

export const sicherheitItems = [
  { icon: "📜", text: "Eigentumsübertragung mit deutschen Unterlagen" },
  { icon: "🚛", text: "Mobil – Standortwechsel innerhalb der EU jederzeit möglich" },
  { icon: "🛡️", text: "Vollversicherung als mobiles Wirtschaftsgut (Feuer, Sturm, Diebstahl)" },
  { icon: "⚖️", text: "Vertrag nach deutschem Recht – transparent und rechtssicher" },
  { icon: "📊", text: "Monatliche Abrechnung über Ihr Investor-Dashboard" },
  { icon: "🤝", text: "Motivierter Host vor Ort – sein Einkommen hängt von Ihrer Bewertung ab" },
];

export const galleryImages = [
  "/images/inside/tiny-house-innen-wohnbereich.webp",
  "/images/inside/tiny-house-innen-schlafbereich.webp",
  "/images/inside/tiny-house-innen-schlafbereich-2.webp",
  "/images/inside/tiny-house-innen-eigentumsuebergabe.webp",
  "/images/inside/tiny-house-innen-airbnb.webp",
  "/images/inside/tiny-house-innen-genehmigung.webp",
  "/images/inside/tiny-house-innen-kueche.webp",
  "/images/inside/tiny-house-innen-wohnzimmer.webp",
  "/images/inside/tiny-house-innen-steuerberatung.webp",
  "/images/inside/tiny-house-innen-modern.webp",
  "/images/inside/tiny-house-innen-detail.webp",
  "/images/inside/tiny-house-innen-detail-2.webp",
];
