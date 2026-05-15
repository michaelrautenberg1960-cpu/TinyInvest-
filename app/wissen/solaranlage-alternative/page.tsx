import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Solaranlage Alternative 2026: Â§7g IAB ohne Photovoltaik | TinyInvest",
  description:
    "Solaranlage lohnt sich nicht mehr? Welche Alternativen qualifizieren fÃ¼r den Â§7g IAB â€“ und warum ein Tiny House mehr Rendite bringt als eine PV-Anlage.",
  keywords:
    "solaranlage alternative 2026, pv alternative investition, photovoltaik alternative Â§7g, iab investition statt solar, bewegliches wirtschaftsgut statt photovoltaik, solaranlage lohnt sich nicht mehr alternative, photovoltaik alternative rendite",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/solaranlage-alternative",
  },
  openGraph: {
    title: "Solaranlage Alternative 2026: Â§7g IAB ohne Photovoltaik",
    description:
      "Solaranlage lohnt sich nicht mehr? Welche Alternativen fÃ¼r den Â§7g IAB â€“ und warum Tiny Houses doppelte Rendite bringen.",
    url: "https://tinyhouse.investments/wissen/solaranlage-alternative",
  },
};

const faqItems = [
  {
    question: "Qualifiziert ein Tiny House fÃ¼r den Â§7g IAB genauso wie eine PV-Anlage?",
    answer:
      "Ja. Ein Tiny House auf einem Vlemmix-Trailer gilt als bewegliches Wirtschaftsgut im Sinne des Â§7g EStG â€“ genau wie eine PV-Anlage. Voraussetzung ist die betriebliche Nutzung mit Gewinnerzielungsabsicht, also die Vermietung als Ferienwohnung. Sowohl IAB (bis 50 % des Investitionsvolumens vorab) als auch Sonder-AfA (20 % im Investitionsjahr) und degressive AfA (25 % p.a.) sind nutzbar.",
  },
  {
    question: "Warum lohnt sich eine PV-Anlage 2026 oft nicht mehr als IAB-Investment?",
    answer:
      "Die EinspeisevergÃ¼tung ist seit 2022 auf ein historisches Tief gefallen â€“ aktuell 7â€“13 Cent pro kWh fÃ¼r neue Anlagen. Gleichzeitig hat sich der PV-Modulpreis halbiert, was die Anfangsinvestition zwar senkt, aber auch den IAB-Steuerhebel reduziert. Hinzu kommen Netzentgeltreformen und das politische Risiko weiterer VergÃ¼tungskÃ¼rzungen. Die Netto-Rendite nach Steuern liegt fÃ¼r viele PV-Investoren heute bei 4â€“7 % â€“ wÃ¤hrend ein verwaltetes Tiny House 12â€“18 % erzielen kann.",
  },
  {
    question: "Brauche ich ein eigenes Dach oder GrundstÃ¼ck fÃ¼r ein Tiny House Investment?",
    answer:
      "Nein. Das Tiny House wird auf dem GrundstÃ¼ck eines Hosts aufgestellt â€“ du brauchst weder eigenes Land noch ein Dach. Das ist einer der entscheidenden strukturellen Unterschiede zur PV-Anlage, die an eine Immobilie gebunden ist. Tiny Escapes vermittelt geprÃ¼fte Hosts und Standorte; der Investor kauft nur das mobile Wirtschaftsgut.",
  },
  {
    question: "Wie hoch ist die AfA-Laufzeit beim Tiny House im Vergleich zur PV-Anlage?",
    answer:
      "PV-Anlagen werden Ã¼ber 20 Jahre linear abgeschrieben (5 % p.a.). Ein Tiny House auf Trailer kann Ã¼ber 8 Jahre linear abgeschrieben werden (~12,5 % p.a.) oder degressiv mit 25 % p.a. im ersten Jahr. Das bedeutet: Der steuerliche Hebel konzentriert sich bei Tiny Houses in den ersten Jahren â€“ der Cashflow-Effekt ist frÃ¼her spÃ¼rbar als bei einer PV-Anlage.",
  },
  {
    question: "Kann ich mehrere IAB-fÃ¤hige WirtschaftsgÃ¼ter gleichzeitig absetzen?",
    answer:
      "Ja, innerhalb der gesetzlichen Grenzen. Der IAB kann fÃ¼r mehrere bewegliche WirtschaftsgÃ¼ter gleichzeitig genutzt werden, solange der Gesamtbetrag 200.000 â‚¬ nicht Ã¼berschreitet (Stand 2026). Ein Investor kann also gleichzeitig eine PV-Anlage und ein Tiny House Ã¼ber Â§7g absetzen â€“ sofern beide die Voraussetzungen erfÃ¼llen. Dein Steuerberater kann die optimale Staffelung planen.",
  },
];

export default function SolaranlageAlternativePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solaranlage Alternative 2026: Â§7g IAB ohne Photovoltaik",
    "description": "Solaranlage lohnt sich nicht mehr? Welche Alternativen qualifizieren fÃ¼r den Â§7g IAB â€“ und warum ein Tiny House mehr Rendite bringt als eine PV-Anlage.",
    "url": "https://tinyhouse.investments/wissen/solaranlage-alternative",
    "datePublished": "2026-04-28",
    "dateModified": "2026-04-28",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-naturlage-gruen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Solaranlage Alternative", "item": "https://tinyhouse.investments/wissen/solaranlage-alternative" },
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
      <Script id="faq-schema-solaranlage-alternative" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-solaranlage-alternative" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-solaranlage-alternative" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Solaranlage Alternative</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">PV-Vergleich Â· Â§7g IAB Â· 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Solaranlage Alternative 2026: Â§7g IAB ohne Photovoltaik
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>Â·</span>
              <span>TinyInvest Redaktion</span>
              <span>Â·</span>
              <time dateTime="2026-04-28">28. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Die EinspeisevergÃ¼tung ist auf einem Rekordtief. Viele Investoren fragen sich: Was qualifiziert noch fÃ¼r den Â§7g IAB â€“ auÃŸer einer PV-Anlage? Die Antwort liefert in vielen FÃ¤llen eine hÃ¶here Rendite bei kÃ¼rzerer Abschreibungslaufzeit.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-naturlage-gruen.webp"
              alt="Tiny House in Naturlage â€“ Solaranlage Alternative fÃ¼r Â§7g IAB"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Â§7g IAB", "Solaranlage Alternative", "12â€“18 % Rendite", "Bewegliches Wirtschaftsgut", "Kein eigenes Dach"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Jahrelang war die PV-Anlage das Standardinstrument fÃ¼r Investoren, die den Â§7g Investitionsabzugsbetrag nutzen wollten. Die Logik war einfach: bewegliches Wirtschaftsgut, betriebliche Nutzung, IAB im Vorjahr bilden, Sonder-AfA im Kaufjahr absetzen. Doch seit 2022 hat sich das Bild grundlegend verÃ¤ndert. Die EinspeisevergÃ¼tung fÃ¼r neue Anlagen liegt bei 7 bis 13 Cent pro Kilowattstunde â€“ ein historisches Tief. Gleichzeitig sind die Modulpreise gefallen, was zwar den Einstieg erleichtert, aber auch den steuerwirksamen Investitionsbetrag und damit den IAB-Hebel verkleinert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Was viele Investoren nicht wissen: Der Â§7g IAB gilt nicht exklusiv fÃ¼r Solaranlagen. Er gilt fÃ¼r alle abnutzbaren beweglichen WirtschaftsgÃ¼ter des AnlagevermÃ¶gens, die betrieblich genutzt werden. Fahrzeuge, Maschinen, SpezialgerÃ¤te â€“ und eben auch ein Tiny House auf einem zugelassenen Trailer. Wer also nach einer IAB-fÃ¤higen Investition sucht, die mehr Rendite abwirft als eine PV-Anlage und dabei dieselbe Steuermechanik nutzt, sollte den Vergleich kennen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum Investoren die PV-Anlage als IAB-Vehikel Ã¼berdenken</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Kernproblem der PV-Anlage als Kapitalanlage ist nicht der Steuerhebel â€“ der funktioniert nach wie vor. Das Problem ist die Einkommensseite. Die EinspeisevergÃ¼tung, die Betreibern fÃ¼r eingespeisten Strom gezahlt wird, ist seit der Novellierung des Erneuerbare-Energien-Gesetzes massiv gesunken. Wer heute eine neue Anlage in Betrieb nimmt, erhÃ¤lt fÃ¼r den eingespeisten Strom in der Regel 7 bis 13 Cent pro Kilowattstunde â€“ vor fÃ¼nf Jahren waren es noch 20 bis 30 Cent. Das bedeutet: Die Amortisationszeit, also der Zeitraum bis die Anlage ihre Kosten wieder eingespielt hat, liegt aktuell bei 12 bis 18 Jahren â€“ trotz gesunkener Modulpreise.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Hinzu kommen strukturelle Risiken, die viele Investoren unterschÃ¤tzen. Die EinspeisevergÃ¼tung ist gesetzlich geregelt und kann durch politische Entscheidungen jederzeit geÃ¤ndert werden. Netzentgeltreformen und neue Grid-Fees belasten zunehmend die Wirtschaftlichkeit kleiner Dachanlagen. Und das Technologierisiko â€“ Degradation der Module, WechselrichterausfÃ¤lle, Wartungskosten â€“ ist zwar Ã¼berschaubar, aber real vorhanden.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Ergebnis: Selbst mit vollstÃ¤ndiger Â§7g-Nutzung liegt die Netto-Rendite einer PV-Anlage nach Steuern fÃ¼r viele Investoren heute bei 4 bis 7 Prozent. Das ist respektabel fÃ¼r eine risikoarme Anlage â€“ aber kein Spitzenwert fÃ¼r ein aktiv gestaltetes Investment mit echtem Steuerhebel.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was neben PV fÃ¼r den Â§7g IAB qualifiziert</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Â§7g EStG definiert drei Kernvoraussetzungen fÃ¼r den Investitionsabzugsbetrag: Das Wirtschaftsgut muss abnutzbar und beweglich sein, es muss zum AnlagevermÃ¶gen eines Betriebs gehÃ¶ren, und es muss in den ersten drei Jahren nach dem Investitionsjahr ausschlieÃŸlich oder fast ausschlieÃŸlich betrieblich genutzt werden. PV-Anlagen erfÃ¼llen diese Kriterien â€“ aber sie sind nicht die einzige Assetklasse, die das tut.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Fahrzeuge, die betrieblich genutzt werden, qualifizieren ebenso. Maschinen und SpezialgerÃ¤te qualifizieren. Und ein Tiny House auf einem Vlemmix-Trailer â€“ einem zugelassenen FahrzeuganhÃ¤nger â€“ qualifiziert ebenfalls, weil es als bewegliches Wirtschaftsgut gilt und nicht im Grundbuch eingetragen wird. Entscheidend ist, dass der Investor das wirtschaftliche Eigentum am Tiny House hÃ¤lt und das Haus im Rahmen eines Gewerbebetriebs oder einer VermietungstÃ¤tigkeit mit Gewinnerzielungsabsicht betrieben wird. Beides ist beim TinyInvest-Modell gegeben: Der Kaufvertrag Ã¼bertrÃ¤gt das Eigentum auf den Investor, die Vermietung als Ferienunterkunft Ã¼ber tiny Escapes stellt die betriebliche Nutzung sicher.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-naturlage-gruen.webp"
              alt="Tiny House als Â§7g-Alternative zur Solaranlage"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House als Â§7g-Alternative zur Solaranlage â€“ der Vergleich</h2>
          <div className="max-w-3xl mb-6">
            <p className="text-gray-700 text-base leading-relaxed">
              Beide Assetklassen nutzen denselben Steuermechanismus. Der Unterschied liegt in der Rendite, der AfA-Laufzeit und dem Risikoprofil.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">PV-Anlage (10 kWp)</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["IAB nutzbar", "âœ… Ja", "âœ… Ja"],
                    ["AfA-Laufzeit", "20 Jahre (5 % p.a.)", "8 Jahre (~12,5 % p.a.)"],
                    ["Netto-Rendite", "4â€“7 %", "12â€“18 %"],
                    ["Einkommensquelle", "EinspeisevergÃ¼tung", "Ferientourismus"],
                    ["Technologierisiko", "âš  Degradation, Wechselrichter", "âœ… Niedrig"],
                    ["Politisches Risiko", "âš  EinspeisevergÃ¼tung gesetzlich", "âœ… Niedrig"],
                    ["Eigenes Dach/GrundstÃ¼ck nÃ¶tig", "âš  Ja", "âœ… Nein"],
                    ["Passives Einkommen", "âœ… Ja", "âœ… Ja (vollstÃ¤ndig verwaltet)"],
                    ["Break-even", "12â€“18 Jahre", "6â€“8 Jahre"],
                  ].map(([k, a, b]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center text-gray-500">{a}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum die kÃ¼rzere AfA-Laufzeit entscheidend ist</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei einer PV-Anlage wird der Investitionsbetrag Ã¼ber 20 Jahre linear abgeschrieben â€“ das ergibt 5 Prozent pro Jahr. Der steuerliche Entlastungseffekt verteilt sich damit Ã¼ber zwei Jahrzehnte. Ein Tiny House auf Trailer hingegen kann Ã¼ber 8 Jahre linear abgeschrieben werden, was einer jÃ¤hrlichen AfA von rund 12,5 Prozent entspricht. Wer die degressive AfA wÃ¤hlt, kann im ersten Jahr sogar 25 Prozent des Buchwerts abschreiben.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das bedeutet in der Praxis: Der steuerliche Hebel des Tiny House konzentriert sich in den ersten Jahren â€“ genau dort, wo er den grÃ¶ÃŸten LiquiditÃ¤tsvorteil bringt. Bei einem 80.000-â‚¬-Objekt und einem Grenzsteuersatz von 42 Prozent summiert sich der Effekt aus IAB, Sonder-AfA und degressiver AfA im Investitionsjahr auf rund 33.600 â‚¬ Steuererstattung. Das entspricht einer sofortigen NettoliquiditÃ¤t von mehr als 40 Prozent des Kaufpreises â€“ ohne dass ein Euro Mieteinnahme geflossen ist.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Eine PV-Anlage gleicher GrÃ¶ÃŸe wÃ¼rde denselben IAB erlauben, aber die laufende AfA verteilt sich auf 20 Jahre. Wer schnell LiquiditÃ¤t aus dem Steuerhebel zurÃ¼ckgewinnen mÃ¶chte, ist mit dem Tiny House deutlich besser aufgestellt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FÃ¼r wen ist ein Tiny House die bessere PV-Alternative?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Tiny House als Â§7g-Investment eignet sich besonders fÃ¼r Investoren mit einem Grenzsteuersatz von mindestens 35 Prozent, da ab diesem Niveau der Steuerhebel seine volle Wirkung entfaltet. Wer keinen eigenen Dachbesitz hat â€“ und damit keine Grundlage fÃ¼r eine PV-Anlage â€“, findet im Tiny House eine Kapitalanlage, die kein eigenes GrundstÃ¼ck erfordert. Das Haus wird auf dem Stellplatz eines geprÃ¼ften Hosts aufgebaut; Standort-Due-Diligence und Betrieb Ã¼bernimmt tiny Escapes vollstÃ¤ndig.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              FÃ¼r Investoren, die bereits eine PV-Anlage besitzen und den Â§7g-Rahmen noch nicht ausgeschÃ¶pft haben, kann das Tiny House eine sinnvolle ErgÃ¤nzung sein: Beide WirtschaftsgÃ¼ter qualifizieren gleichzeitig, solange der IAB-Gesamtbetrag 200.000 â‚¬ nicht Ã¼bersteigt. Wer hingegen technisches Engagement scheut und ein vollstÃ¤ndig passives Einkommensmodell bevorzugt, ist mit dem verwalteten Tiny House ebenfalls gut bedient â€“ das Investment erfordert nach dem Kauf keinen weiteren Aufwand auf Investorenseite.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/pv-anlage-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">PV-Anlage als Kapitalanlage â†’</Link>
            <Link href="/rechner/iab" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB-Rechner â†’</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Â§7g Leitfaden â†’</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House â†’</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">â† Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Solaranlage Alternative &amp; Â§7g IAB</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Â§7g-Steueranalyse anfordern</p>
            <h3 className="text-xl font-black mb-3">Wie hoch ist dein Steuervorteil statt PV?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Kostenlose Vergleichsrechnung: Tiny House vs. PV-Anlage auf Basis deines Grenzsteuersatzes und Investitionsvolumens.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Jetzt Vergleich anfordern â†’
              </ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                IAB-Rechner nutzen â†’
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
