import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "PV-Anlage als Kapitalanlage: Ehrlicher Vergleich mit Tiny House Investment | TinyInvest",
  description:
    "PV-Anlage oder Tiny House als Kapitalanlage? Rendite-Vergleich, Steuervorteile, IAB und ehrliche Risikobewertung. Warum immer mehr Solar-Investoren auf Tiny Houses umsteigen.",
  keywords:
    "pv anlage als kapitalanlage, solaranlage rendite berechnen, photovoltaik investition alternative, kapitalanlage alternative photovoltaik, pv anlage lohnt sich, tiny house statt solaranlage, solaranlage vs immobilie rendite, iab photovoltaik alternative, solaranlage einspeisevergütung rendite 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/pv-anlage-als-kapitalanlage",
  },
  openGraph: {
    title: "PV-Anlage als Kapitalanlage vs. Tiny House: Der ehrliche Vergleich",
    description:
      "Einspeisevergütung oder Mieteinnahmen? IAB-Vorteil oder Technologierisiko? Dieser Guide zeigt, warum Tiny Houses die überlegene Alternative zur Solar-Investition sind.",
    url: "https://tinyhouse.investments/wissen/pv-anlage-als-kapitalanlage",
  },
};

const faqItems = [
  {
    question: "Kann ich für eine PV-Anlage den Investitionsabzugsbetrag (IAB) nutzen?",
    answer:
      "Technisch ja – wenn die PV-Anlage als eigenständiges, betriebliches Wirtschaftsgut geführt wird und du ein Gewerbe oder eine freiberufliche Tätigkeit hast. Seit der Einkommensteuerbefreiung für kleine PV-Anlagen (bis 30 kWp, ab 2022) entfällt für viele Privatanleger aber die steuerliche Einordnung als gewerbliches Gut – und damit auch der IAB. Beim Tiny House auf Vlemmix Trailer ist die Klassifizierung als bewegliches Wirtschaftsgut eindeutig gegeben, der IAB uneingeschränkt nutzbar.",
  },
  {
    question: "Wie hoch ist die Rendite einer PV-Anlage im Vergleich zu einem Tiny House?",
    answer:
      "Eine 10-kWp-Anlage produziert ca. 9.000 kWh/Jahr. Bei der aktuellen Einspeisevergütung von ~8 ct/kWh sind das rund 720 € Jahresertrag auf ~20.000 € Investition – also ca. 3,6 % brutto, vor Degradation und Wartungskosten. Ein Tiny House über TinyInvest bringt bei 60 % Belegung rund 8.760 € Jahresauszahlung auf 79.000 € Investment (11 % Cash-on-Cash) – zuzüglich des IAB-Steuereffekts von bis zu 16.000 € im Vorjahr, der die effektive Rendite auf 16–18 % IRR hebt.",
  },
  {
    question: "Was ist das größte Risiko bei der PV-Anlage als Investition?",
    answer:
      "Das politische Risiko ist das schwerwiegendste. Die Einspeisevergütung wird staatlich festgelegt und ist seit Jahren rückläufig. Anlagen, die heute installiert werden, erhalten für 20 Jahre eine fixe Vergütung – aber danach läuft die Förderung aus und der Erlös hängt am Spotmarktpreis, der oft unter 4 ct/kWh liegt. Hinzu kommen Degradation der Module (~0,5 %/Jahr), Wechselrichter-Tausch (~1.500 € alle 10–15 Jahre) und die Entsorgungskosten am Ende der Laufzeit.",
  },
  {
    question: "Gibt es einen steuerlichen Vorteil, den PV-Anlagen nicht bieten, Tiny Houses aber schon?",
    answer:
      "Ja: die Kombination aus IAB (bis zu 50 % der Anschaffungskosten im Vorjahr), Sonder-AfA (40 % im Kaufjahr) und degressiver AfA (30 % im Kaufjahr). Das ist eine Mechanik, die für bewegliche Wirtschaftsgüter des betrieblichen Anlagevermögens gilt. Bei einem Tiny House auf Trailer ist diese Klassifizierung klar. Bei PV-Anlagen auf dem Eigenheim ist sie es oft nicht – und seit der Steuerbefreiung für kleine PV gibt es dort gar keine Abzugsmöglichkeit mehr.",
  },
  {
    question: "Brauche ich viel Eigenkapital für ein Tiny House Investment?",
    answer:
      "Der Einstieg beginnt bei 65.000 € (Comfort-Modell). Durch den IAB-Effekt – der im Vorjahr die Steuerlast senkt – reduziert sich die effektive Liquiditätsbelastung auf ca. 48.000–51.000 € (bei 42 % Steuersatz). Das ist deutlich weniger als der Eigenkapitalanteil, den eine klassische Immobilie oder eine Gewerbeimmobilie erfordern würde.",
  },
  {
    question: "Kann ich ein Tiny House auch als Alternative zur Photovoltaik auf Fremdgrundstück betreiben?",
    answer:
      "Ja. TinyInvest vermittelt Stellplätze über das tiny Escapes Netzwerk – du brauchst kein eigenes Grundstück. Das Tiny House wird von einem verifizierten Host betrieben, der Stellplatz und Gästebetreuung übernimmt. Du bekommst monatlich 40 % der Netto-Mieteinnahmen ausgezahlt, ohne selbst operativ tätig zu werden.",
  },
];

const vergleichRows = [
  ["Typische Investitionssumme", "15.000–30.000 €", "65.000–95.000 €"],
  ["Jährliche Rendite (netto)", "3–5 % (Einspeisevergütung)", "11–14 % Cash-on-Cash"],
  ["IAB (§7g EStG) nutzbar", "Eingeschränkt / meist nein", "Ja – vollständig"],
  ["Sonder-AfA (40 %) nutzbar", "Eingeschränkt", "Ja"],
  ["Effektive Rendite nach Steuerhebel", "3–5 %", "16–18 % IRR p.a."],
  ["Einkommensquelle", "Einspeisevergütung (staatlich)", "Mietmarkt (marktbasiert)"],
  ["Technologierisiko", "Hoch (Degradation, Wechselrichter)", "Gering"],
  ["Politisches Risiko", "Hoch (Vergütung rückläufig)", "Gering"],
  ["Passives monatliches Einkommen", "Nein (Jahresabrechnung)", "Ja (monatlich)"],
  ["Liquidierbar / verkaufbar", "Kaum (fest verbaut)", "Ja (mobil, wiederverkaufbar)"],
  ["Break-even", "10–14 Jahre", "3–5 Jahre (inkl. Steuereffekte)"],
];

export default function PvAnlageAlsKapitalanlagePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PV-Anlage als Kapitalanlage: Der ehrliche Vergleich mit Tiny House Investment",
    description:
      "PV-Anlage oder Tiny House als Kapitalanlage? Rendite-Vergleich, Steuervorteile, IAB und ehrliche Risikobewertung.",
    url: "https://tinyhouse.investments/wissen/pv-anlage-als-kapitalanlage",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: {
      "@type": "Organization",
      name: "TinyInvest",
      logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" },
    },
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/tiny-house-naturlage-gruen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      {
        "@type": "ListItem",
        position: 3,
        name: "PV-Anlage als Kapitalanlage",
        item: "https://tinyhouse.investments/wissen/pv-anlage-als-kapitalanlage",
      },
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
      <Script id="article-schema-pv-anlage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-pv-anlage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-pv-anlage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">PV-Anlage als Kapitalanlage</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rendite-Vergleich · Steuer · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            PV-Anlage als Kapitalanlage: Der ehrliche Vergleich mit dem Tiny House Investment
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-23">23. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Wer heute in nachhaltige Sachwerte investieren möchte, denkt oft zuerst an Solaranlagen. Dieser Guide zeigt, was eine PV-Anlage als Kapitalanlage wirklich bringt – und warum das Tiny House für Investoren mit steuerlichem Gestaltungsspielraum die strukturell überlegene Alternative ist.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-naturlage-gruen.webp"
              alt="Tiny House in Naturlage als Kapitalanlage – Alternative zur PV-Anlage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["IAB voll nutzbar", "16–18 % IRR p.a.", "Monatlicher Cashflow", "Kein Technologierisiko"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Idee klingt überzeugend: eine Solaranlage auf dem Dach oder einer Freifläche, die über Jahrzehnte passiv Strom produziert und Einnahmen generiert. Für viele Menschen ist die PV-Anlage der erste Schritt in Richtung Kapitalanlage – sauber, staatlich gefördert, solide. Aber ein nüchterner Blick auf die tatsächlichen Zahlen zeigt ein differenziertes Bild: Die Rendite einer PV-Anlage ist solide, aber nicht spektakulär. Und der steuerliche Hebel, der viele Investoren wirklich reich macht, greift beim Siliziumdach nicht so, wie viele erwarten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Dieser Artikel richtet sich an Investoren, die mit dem Gedanken spielen, in erneuerbare Energien oder nachhaltige Sachwerte zu investieren – und die wissen wollen, was die Alternativen liefern. Wir vergleichen ehrlich, rechnen konkret und zeigen, warum mobile Tiny Houses auf Vlemmix Trailern für Anleger mit gewerblichem Hintergrund oder freiberuflichem Einkommen oft das deutlich stärkere Instrument sind.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was eine PV-Anlage als Kapitalanlage wirklich einbringt</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Eine typische Aufdach-Anlage mit 10 kWp kostet heute zwischen 15.000 und 25.000 Euro, je nach Dachsituation, Speicher und Installationsbetrieb. Sie produziert in Deutschland durchschnittlich 900 bis 1.000 kWh pro installiertem Kilowatt-Peak – also rund 9.000 bis 10.000 kWh pro Jahr. Wer diese Strommenge vollständig ins Netz einspeist, erhält aktuell die staatlich festgelegte Einspeisevergütung von rund 8 Cent pro Kilowattstunde. Das ergibt Jahreseinnahmen von etwa 720 bis 800 Euro – auf ein Investment von 20.000 Euro entspricht das einer Bruttorendite von 3,6 bis 4 Prozent.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Diese 4 Prozent klingen zunächst nach einem guten Wert für eine risikoarme Anlage. Aber es gibt strukturelle Schwächen, die sich erst im Zeitverlauf zeigen. Erstens: Solarmodule degradieren. Pro Jahr verlieren sie durchschnittlich 0,5 Prozent ihrer Leistung – nach 20 Jahren produziert die Anlage etwa 10 Prozent weniger als am ersten Tag. Zweitens: Der Wechselrichter, das Herzstück jeder Anlage, muss nach 10 bis 15 Jahren ausgetauscht werden, was Kosten von 1.000 bis 2.000 Euro bedeutet. Drittens, und das ist der entscheidende Punkt: Die Einspeisevergütung ist staatlich garantiert – aber nur für 20 Jahre. Danach läuft die Förderung aus, und der Strom lässt sich am freien Markt oft nur zu 2 bis 4 Cent je Kilowattstunde vermarkten. Die Rendite halbiert sich in diesem Szenario auf unter 2 Prozent.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Seit der Einkommensteuerreform 2022 sind kleine PV-Anlagen bis 30 kWp auf Privatgebäuden in Deutschland steuerfrei gestellt. Das klingt gut, hat aber eine Kehrseite: Wer keine Steuern auf die Einnahmen zahlt, kann auch keine Abschreibungen geltend machen, keinen Investitionsabzugsbetrag nutzen und keine Betriebsausgaben absetzen. Die Anlage ist steuerlich neutral – weder Last noch Hebel. Für Anleger, die ihre Steuerlast aktiv senken wollen, ist das kein Instrument.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der steuerliche Vergleich: Wo der entscheidende Unterschied liegt</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Tiny House auf einem Vlemmix Trailer wird steuerrechtlich als bewegliches Wirtschaftsgut eingestuft – straßenzugelassen, mit eigener Fahrzeugidentifikationsnummer, nicht fest mit dem Boden verbunden. Diese Klassifizierung ist der Schlüssel zu einem Steuerinstrument, das klassische Immobilien und Dach-PV-Anlagen nicht bieten können: dem Investitionsabzugsbetrag nach §7g EStG.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der IAB erlaubt es Unternehmern und Freiberuflern, bis zu 50 Prozent der geplanten Anschaffungskosten bereits im Jahr vor dem Kauf steuerlich abzuziehen. Bei einem Tiny House für 80.000 Euro sind das 40.000 Euro, die das zu versteuernde Einkommen im Vorjahr reduzieren. Bei einem Grenzsteuersatz von 42 Prozent entspricht das einer Steuererstattung von rund 16.800 Euro – noch bevor das Haus überhaupt geliefert wird. Im Kaufjahr selbst greift dann die Sonder-AfA von 40 Prozent und die degressive AfA von 30 Prozent auf den verbleibenden Buchwert. Der kombinierte steuerliche Effekt im ersten und zweiten Jahr liegt bei bis zu 33.000 Euro Liquiditätsvorteil.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das ist kein Trick und keine Steuervermeidung – es ist die reguläre Förderlogik des deutschen Steuerrechts für betriebliche Investitionen in bewegliche Wirtschaftsgüter. Wer heute in Solaranlagen auf dem eigenen Dach investiert, verzichtet auf genau diesen Hebel. Wer in ein Tiny House investiert, nutzt ihn vollständig.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rendite im direkten Vergleich</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-3xl">
            Die folgende Tabelle vergleicht eine typische 10-kWp-PV-Anlage (Volleinspeisung) mit einem TinyInvest Escape 660 (79.000 €) auf Basis realistischer Annahmen für 2026.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">PV-Anlage (10 kWp)</th>
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

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-skandinavien-naturlage.webp"
              alt="Tiny House in Skandinavien – nachhaltiges Investment mit Cashflow"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum Solar-Investoren auf Tiny Houses umsteigen</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Wechselbereitschaft hat einen einfachen Grund: Der Wunsch hinter der PV-Investition ist selten die Solaranlage selbst. Er ist der Wunsch nach einem nachhaltigen Sachwert, der passives Einkommen generiert und dabei steuerlich sinnvoll eingesetzt werden kann. Diesen Wunsch erfüllt ein Tiny House strukturell besser – bei höherer Rendite, kürzerem Break-even und vollem Zugriff auf §7g.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Hinzu kommt die Frage der Flexibilität. Eine PV-Anlage ist fest mit dem Gebäude verbunden. Sie lässt sich nicht verkaufen ohne das Haus, nicht verschieben, nicht anderswo betreiben. Ein Tiny House auf einem Trailer kann den Standort wechseln, wenn sich ein Betrieb nicht rechnet. Es kann wiederverkauft werden, ohne Grunderwerbsteuer oder Notarkosten. Es ist ein Sachwert mit Marktpreis – kein fest verbauites System mit Restbuchwert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die monatliche Auszahlungsstruktur ist ein weiterer Unterschied, der in der Praxis oft unterschätzt wird. PV-Einspeisevergütungen werden jährlich oder quartalsweise vom Netzbetreiber gutgeschrieben – kein laufender Cashflow. Ein Tiny House zahlt 40 Prozent der Netto-Mieteinnahmen monatlich an den Investor aus. Bei 60 Prozent Belegung und 100 Euro Durchschnittspreis pro Nacht sind das rund 730 Euro im Monat – ein messbarer, planbarer Mittelzufluss.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Für Investoren, die aktiv Steuern optimieren möchten – Unternehmer, Freiberufler, Ärzte, Anwälte mit hohem Grenzsteuersatz – ist die Entscheidung zwischen PV und Tiny House letztlich eine Frage der Effizienz. Beide sind nachhaltig. Beide sind Sachwerte. Aber nur einer bietet den vollständigen steuerlichen Hebel, einen echten monatlichen Cashflow und die Mobilität eines beweglichen Wirtschaftsguts.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Für wen ist welches Investment das richtige?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Eine PV-Anlage ist das richtige Instrument für jemanden, der sein Eigenheim langfristig aufwerten will, einen Teil des Eigenverbrauchs decken möchte und Unabhängigkeit von Strompreisschwankungen sucht. Als reine Kapitalanlage – mit dem Ziel, Rendite zu maximieren und Steuern zu optimieren – ist sie strukturell begrenzt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House über TinyInvest ist das richtige Instrument für Anleger mit gewerblichem oder freiberuflichem Einkommen, die einen IAB bilden können, ein Objekt suchen, das vollständig fremdverwaltet ist, und die einen monatlichen Cashflow einem jährlichen Einspeiseerlös vorziehen. Der Einstieg beginnt bei 65.000 Euro – weniger als die Kaufnebenkosten einer durchschnittlichen Eigentumswohnung in einer deutschen Großstadt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Wer beide Strategien kennt, erkennt: PV und Tiny House schließen sich nicht gegenseitig aus. Aber wer nur eines wählen kann – oder wer fragt, womit er seinen Grenzsteuersatz von 42 Prozent am effektivsten senkt –, dem liefert das Tiny House die stärkeren Argumente. Nicht weil Solarenergie schlecht ist, sondern weil der steuerliche und renditetechnische Hebel beim beweglichen Wirtschaftsgut schlicht größer ist.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/solaranlage-alternative" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Solaranlage Alternative →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House Guide →</Link>
            <Link href="/wissen/tiny-house-steuern-sparen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuern sparen Anleitung →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: PV-Anlage vs. Tiny House Investment</h2>
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
              Wir zeigen dir anhand deiner Einkommenssituation, wie hoch dein IAB-Vorteil im ersten Jahr wäre – konkret und unverbindlich.
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
