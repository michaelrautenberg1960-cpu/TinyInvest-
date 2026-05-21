import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "PV-Direktinvestment Alternative: §7g IAB nutzen unter 100.000 € | TinyInvest",
  description:
    "Du suchst eine Alternative zum Photovoltaik-Direktinvestment? Wie du mit Tiny Houses den §7g IAB & Sonder-AfA mit kleinerem Budget optimal nutzt – ab 79.000 €.",
  keywords:
    "pv direktinvestment alternative, photovoltaik direktinvestment mindestanlage, solar direktinvestment einstiegssumme, iab bewegliche wirtschaftsgüter liste, tiny house statt solar direktinvestment, pv direktinvestment sinnvoll, alternative zu solar investment, kapitalanlage unter 100000 euro, §7g iab bewegliches wirtschaftsgut, solarpark direktinvestment alternative",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/pv-direktinvestment-alternative",
  },
  openGraph: {
    title: "PV-Direktinvestment Alternative: §7g IAB unter 100.000 € nutzen",
    description:
      "PV-Direktinvestments starten oft erst ab 100.000 – 250.000 €. Das Tiny House bietet denselben §7g-Steuerhebel – ab 79.000 €, ohne Netzanschluss-Bürokratie.",
    url: "https://tinyhouse.investments/wissen/pv-direktinvestment-alternative",
  },
};

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen einem PV-Direktinvestment und einem Solar-Fonds?",
    answer:
      "Bei einem PV-Direktinvestment erwirbst du direktes Eigentum an einer definierten Photovoltaikanlage oder einem Anlagenanteil – du bist wirtschaftlicher Eigentümer. Bei einem Solar-Fonds kaufst du eine Beteiligung an einer Gesellschaft, die Anlagen betreibt. Nur beim Direktinvestment mit echter Eigentumsübertragung eines beweglichen Wirtschaftsguts ist der §7g IAB uneingeschränkt nutzbar. Viele günstigere Einstiegsprodukte sind faktisch Fondsbeteiligungen – der IAB-Effekt fehlt oder ist rechtlich unsicher.",
  },
  {
    question: "Warum starten seriöse PV-Direktinvestments oft erst ab 100.000 €?",
    answer:
      "Für ein sinnvolles PV-Direktinvestment mit echter Eigentumsübertragung braucht es eine ausreichend große Anlage, eine Netzanschlusszusage des Netzbetreibers und eine rechtssichere Vertragsstruktur. All das erzeugt Fixkosten – Projektentwicklung, Genehmigung, Netzanschluss, Notarkosten. Unter ca. 100.000 € Investitionsvolumen rechnen sich diese Strukturkosten für Anbieter nicht, weshalb seriöse Direktprodukte selten darunter angeboten werden.",
  },
  {
    question: "Qualifiziert ein Tiny House für den §7g IAB genauso wie eine PV-Anlage?",
    answer:
      "Ja – und sogar mit größerer Rechtssicherheit. Ein Tiny House auf einem Vlemmix-Trailer besitzt eine eigene Fahrzeugidentifikationsnummer, ist straßenzugelassen und gilt eindeutig als bewegliches Wirtschaftsgut im Sinne des §7g EStG. Diese Klassifizierung ist bei stationären PV-Anlagen auf Fremd-Grundstücken oder Dächern komplexer. Beim Tiny House ist die §7g-Eignung unambivalent – kein Steuerberater muss raten.",
  },
  {
    question: "Wie hoch ist der tatsächliche IAB-Steuervorteil bei einem Tiny House für 79.000 €?",
    answer:
      "Der IAB erlaubt es, bis zu 50 % der geplanten Anschaffungskosten bereits im Vorjahr steuerlich abzuziehen – also bis zu 39.500 € bei einem 79.000 €-Objekt. Bei einem Grenzsteuersatz von 42 % entspricht das einer Steuererstattung von rund 16.590 € – noch bevor das Haus geliefert wird. Im Kaufjahr selbst greift zusätzlich die Sonder-AfA (40 %) und die degressive AfA (30 %). Der kombinierte Effekt in den ersten beiden Jahren übersteigt häufig 30.000 € Liquiditätsvorteil.",
  },
  {
    question: "Brauche ich eine Netzanschlusszusage oder Baugenehmigung für ein Tiny House Investment?",
    answer:
      "Nein. Das ist einer der entscheidenden strukturellen Vorteile gegenüber PV-Direktinvestments. Das Tiny House wird auf dem Stellplatz eines geprüften Hosts aufgestellt – du brauchst keine Netzanschlusszusage, keine Baugenehmigung und keine 12- bis 24-monatige Warteschleife beim Netzbetreiber. Das Investment ist ab Lieferung des Hauses (3–6 Monate nach Bestellung) operativ und generiert Mieteinnahmen.",
  },
  {
    question: "Kann ich das Tiny House später wieder verkaufen?",
    answer:
      "Ja – und das ist ein weiterer struktureller Vorteil gegenüber stationären Solar-Direktinvestments. Das Tiny House auf Trailer ist mobil und wiederverkaufbar. Es entstehen keine Grunderwerbsteuer und keine Notarkosten beim Verkauf. Der Wiederverkaufswert ist marktbasiert und hängt vom Zustand des Hauses ab – nicht von politischen Entscheidungen über Einspeisevergütungen.",
  },
];

const vergleichRows = [
  ["Typische Mindestinvestition", "100.000 – 250.000 €", "ab 79.000 €"],
  ["§7g IAB nutzbar", "Oft eingeschränkt (Fondsstruktur)", "Ja – vollständig, eindeutig"],
  ["Sonder-AfA (40 %) nutzbar", "Eingeschränkt / komplex", "Ja"],
  ["Netzanschlusszusage erforderlich", "Ja (12–24 Monate Wartezeit)", "Nein"],
  ["Zeit bis zur ersten Einnahme", "12–36 Monate", "3–6 Monate"],
  ["Kapitalbindung", "20 Jahre (EEG-Laufzeit)", "Flexibel, wiederverkaufbar"],
  ["Politisches Risiko", "Hoch (EEG-Änderungen)", "Gering"],
  ["Einkommensquelle", "Einspeisevergütung (staatlich)", "Mietmarkt (marktbasiert)"],
  ["Monatlicher Cashflow", "Nein (Jahresabrechnung)", "Ja (40 % der Nettomiete)"],
  ["IRR nach Steuereffekt", "4–8 %", "16–18 % p.a."],
  ["Wiederverkauf möglich", "Kaum (fest verbaut)", "Ja (mobil, kein Notar)"],
];

export default function PvDirektinvestmentAlternativePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PV-Direktinvestment Alternative: §7g IAB nutzen unter 100.000 €",
    description:
      "Du suchst eine Alternative zum Photovoltaik-Direktinvestment? Wie du mit Tiny Houses den §7g IAB & Sonder-AfA mit kleinerem Budget optimal nutzt.",
    url: "https://tinyhouse.investments/wissen/pv-direktinvestment-alternative",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: {
      "@type": "Organization",
      name: "TinyInvest",
      logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" },
    },
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/pv-direktinvestment-alternative.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "PV-Direktinvestment Alternative", item: "https://tinyhouse.investments/wissen/pv-direktinvestment-alternative" },
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
      <Script id="article-schema-pv-direktinvestment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-pv-direktinvestment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-pv-direktinvestment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">PV-Direktinvestment Alternative</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">§7g IAB · Direktinvestment · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            PV-Direktinvestment Alternative: §7g IAB nutzen – ab 79.000 € statt 250.000 €
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-20">20. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Photovoltaik-Direktinvestments versprechen §7g IAB, Sonder-AfA und passives Einkommen – klingen ideal. Bis man die Mindestinvestition sieht: 100.000 bis 250.000 € für ein seriöses Produkt mit echter Eigentumsübertragung. Dieser Guide zeigt, wie du denselben Steuerhebel mit einem Tiny House ab 79.000 € nutzt – ohne Netzanschluss-Bürokratie, ohne 20-jährige Kapitalbindung.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/pv-direktinvestment-alternative.webp"
              alt="Tiny House in Naturlage – Alternative zum PV-Direktinvestment mit §7g IAB"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g IAB voll nutzbar", "Ab 79.000 €", "Kein Netzanschluss", "16–18 % IRR p.a.", "Monatlicher Cashflow"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer heute als Unternehmer oder Freiberufler einen hohen Grenzsteuersatz von 42 % hat, denkt früher oder später über ein PV-Direktinvestment nach. Die Logik stimmt: Ein bewegliches Wirtschaftsgut kaufen, den §7g Investitionsabzugsbetrag im Vorjahr bilden, im Kaufjahr die Sonder-AfA absetzen – und dabei gleichzeitig ein nachhaltiges Asset mit laufenden Einnahmen aufbauen. Das ist keine Steuervermeidung, das ist die reguläre Förderlogik des deutschen Steuerrechts für betriebliche Investitionen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Problem: Sobald man konkrete Angebote einholt, stellt man fest, dass der Markt für PV-Direktinvestments zwei sehr unterschiedliche Produktwelten kennt. Auf der einen Seite günstige Einstiegsprodukte ab 10.000 oder 50.000 €, die sich bei näherer Betrachtung als Fondsbeteiligungen entpuppen – kein direktes Eigentum, kein uneingeschränkter §7g IAB. Auf der anderen Seite seriöse Direktprodukte mit echter Eigentumsübertragung, die aber selten unter 100.000 bis 250.000 € starten. Wer dazwischen liegt – und das sind viele Gutverdiener –, schaut in die Röhre. Oder entdeckt das Tiny House.
            </p>
          </div>

          {/* H2: Was kostet ein PV-Direktinvestment wirklich? */}
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was kostet ein PV-Direktinvestment wirklich?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Mindestinvestition für ein echtes PV-Direktinvestment ist höher, als die meisten Suchenden erwarten. Seriöse Anbieter, die direktes Eigentum an einer definierten Anlage mit rechtssicherer Eigentumsübertragung bieten, verlangen in der Regel Mindesttickets von 100.000 bis 250.000 €. Der Grund liegt in den Fixkosten der Produktstruktur: Projektentwicklung, Netzanschlusszusage, Genehmigungsverfahren, Notarkosten, Einspeisung in das EEG-Regime – all das erzeugt erhebliche Vorlaufkosten, die sich erst ab einer bestimmten Anlagengröße rechnen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Hinzu kommt der Faktor Zeit. Eine Netzanschlusszusage (die Zusicherung des Netzbetreibers, dass die Anlage tatsächlich ins Netz einspeisen darf) kann in Deutschland heute 12 bis 24 Monate in Anspruch nehmen. Wer im Januar investiert, generiert womöglich erst 18 Monate später die erste Kilowattstunde Einnahmen – und bindet sein Kapital in der Zwischenzeit vollständig. Die Gesamtkapitalbindung läuft dann über die EEG-Laufzeit von typischerweise 20 Jahren.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Günstigere Einstiegsprodukte, die mit Mindestanlagesummen von 10.000 bis 50.000 € werben, sind in vielen Fällen als Gesellschaftsbeteiligungen oder Fonds strukturiert. Das bedeutet: Du bist kein direkter Eigentümer einer beweglichen Photovoltaikanlage, sondern Anteilseigner einer Gesellschaft, die Anlagen betreibt. Der §7g IAB setzt direktes wirtschaftliches Eigentum an einem beweglichen, abnutzbaren Wirtschaftsgut voraus – eine Fondsbeteiligung erfüllt diese Voraussetzung typischerweise nicht. Der Steuerhebel, der die Attraktivität des PV-Investments überhaupt begründet, fehlt damit vollständig.
            </p>
          </div>

          {/* H2: Das demokratisierte IAB-Investment */}
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Das „demokratisierte IAB-Investment" – Tiny House ab 79.000 €</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House auf einem Vlemmix-Trailer ist steuerrechtlich eindeutig als bewegliches Wirtschaftsgut klassifiziert: straßenzugelassen, mit eigener Fahrzeugidentifikationsnummer, nicht dauerhaft mit dem Boden verbunden. Diese Klassifizierung ist kein Graubereich – sie ist der Normalfall für §7g EStG. Es gibt keinen Auslegungsspielraum, keine Netzanschlusszusage, keine behördliche Prüfung im Vorfeld. Du kaufst ein reales, greifbares Wirtschaftsgut und erwirbst direktes Eigentum daran.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der steuerliche Mechanismus ist identisch mit dem eines PV-Direktinvestments – nur mit klarerem Rechtsrahmen und niedrigerer Einstiegsschwelle. Bei einem Tiny House für 79.000 € kannst du im Vorjahr des Kaufs einen IAB von bis zu 39.500 € (50 % der Anschaffungskosten) bilden. Bei einem Grenzsteuersatz von 42 % entspricht das einer Steuererstattung von rund 16.590 € – noch bevor das Haus geliefert wird. Im Kaufjahr selbst greift die Sonder-AfA von 40 % und die degressive AfA von 30 % auf den verbleibenden Buchwert. Der kombinierte Liquiditätsvorteil in den ersten beiden Jahren liegt regelmäßig über 30.000 €.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Auf der Einnahmeseite unterscheidet sich das Tiny House grundlegend von einer PV-Anlage. Statt staatlich festgelegter Einspeisevergütung generiert das Haus Mieteinnahmen über den Ferientourismus – marktbasiert, monatlich, nicht an politische Entscheidungen gebunden. TinyInvest zahlt 40 % der Netto-Mieteinnahmen monatlich an den Investor aus. Bei 60 % Belegung und einem Durchschnittspreis von 100 € pro Nacht sind das rund 730 € im Monat. Der IRR liegt nach vollständiger §7g-Nutzung bei 16 bis 18 % p.a.
            </p>
          </div>

          {/* Mid article image */}
          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-skandinavien-naturlage.webp"
              alt="Tiny House Investment als Alternative zum PV-Direktinvestment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* H2: Vergleich */}
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Vergleich: PV-Direktinvestment vs. Tiny House Investment</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-3xl">
            Die folgende Tabelle vergleicht ein typisches PV-Direktinvestment mit direkter Eigentumsübertragung mit einem TinyInvest-Objekt auf Basis realistischer Marktdaten für 2026.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">PV-Direktinvestment</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {vergleichRows.map(([merkmal, pv, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700 text-[13px]">{merkmal}</td>
                      <td className="p-4 text-center text-[13px] text-gray-500">{pv}</td>
                      <td className="p-4 text-center text-[13px] font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Für wen ist ein PV-Direktinvestment trotzdem sinnvoll? */}
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Für wen ist ein PV-Direktinvestment trotzdem sinnvoll?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein PV-Direktinvestment ist das richtige Instrument, wenn du 150.000 € oder mehr Eigenkapital einsetzen kannst und möchtest, bereits Zugang zu einem geeigneten Standort mit Netzanschlusszusage hast und ein vollständig passives, staatlich reguliertes Einkommen über 20 Jahre bevorzugst. Wer in erneuerbaren Energien investieren will, gar keinen operativen Aufwand scheut und bereit ist, die Bürokratie des Genehmigungsverfahrens zu durchlaufen, findet in einem seriösen PV-Direktprodukt ein solides Instrument.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Tiny House ist hingegen die klarere Wahl, wenn die Mindestinvestition des PV-Markts dein Budget übersteigt, du denselben §7g-Steuerhebel ohne Genehmigungshürden nutzen willst, monatlicher Cashflow statt jährlicher Einspeisevergütung für dich sinnvoller ist oder du Flexibilität schätzt: Das Haus kann wiederverkauft, umgestellt oder einer anderen Nutzung zugeführt werden. Beide Assetklassen schließen sich übrigens nicht aus – wer bereits ein PV-Direktinvestment hat und den §7g-Rahmen noch nicht ausgeschöpft hat, kann ein Tiny House ergänzend einsetzen, solange der IAB-Gesamtbetrag 200.000 € nicht überschreitet.
            </p>
          </div>

          {/* H2: Die IAB-Lücke */}
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Die IAB-Lücke: Was Solar-Investoren oft übersehen</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der entscheidende Punkt, den viele Investoren beim Vergleich von PV-Produkten übersehen: Nicht jedes Solar-Investment qualifiziert für den §7g IAB. Die Voraussetzung ist direktes wirtschaftliches Eigentum an einem abnutzbaren, beweglichen Wirtschaftsgut des betrieblichen Anlagevermögens. Eine Fondsbeteiligung, ein Genussrecht oder eine stille Beteiligung an einer Photovoltaik-GmbH erfüllt das nicht. Nur wer ein physisches Wirtschaftsgut direkt erwirbt – und das auch steuerrechtlich belegen kann – darf den IAB bilden.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei einem Tiny House auf Vlemmix-Trailer ist genau das der Fall: Der Kaufvertrag überträgt das Eigentum an einem straßenzugelassenen Fahrzeug mit eigener FIN auf den Investor. Das ist das Gegenteil eines Fonds. Es ist ein reales Wirtschaftsgut, buchbar im Anlagevermögen, abschreibbar nach §7g, §7g-IAB-fähig ohne Einschränkung. Kein Steuerberater muss spekulieren – die Einordnung ist eindeutig.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Wer also den §7g-Steuerhebel wirklich nutzen will – und nicht nur ein Produkt kauft, das in der Broschüre damit wirbt –, sollte die Eigentumsstruktur genau prüfen. Beim Tiny House gibt es dabei nichts zu prüfen. Die Struktur ist transparent, das Eigentum ist direkt, der IAB ist uneingeschränkt nutzbar.
            </p>
          </div>

          {/* Related links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/pv-anlage-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">PV-Anlage als Kapitalanlage →</Link>
            <Link href="/wissen/solaranlage-alternative" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Solaranlage Alternative →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House Guide →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierung →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* ── FAQ + CTA ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: PV-Direktinvestment vs. Tiny House Investment</h2>
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
            <h3 className="text-xl font-black mb-3">§7g-Analyse für deine Steuersituation</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Wir zeigen dir konkret, wie hoch dein IAB-Vorteil im ersten Jahr wäre – auf Basis deines Grenzsteuersatzes und Investitionsvolumens. Kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Unterlagen anfordern →
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
