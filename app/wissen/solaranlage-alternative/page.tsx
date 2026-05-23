import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Solaranlage Alternative 2026: §7g IAB ohne Photovoltaik | TinyInvest",
  description:
    "Solaranlage lohnt sich nicht mehr? Welche Alternativen qualifizieren für den §7g IAB – und warum ein Tiny House mehr Rendite bringt als eine PV-Anlage.",
  keywords:
    "solaranlage alternative 2026, pv alternative investition, photovoltaik alternative §7g, iab investition statt solar, bewegliches wirtschaftsgut statt photovoltaik, solaranlage lohnt sich nicht mehr alternative, photovoltaik alternative rendite",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/solaranlage-alternative",
  },
  openGraph: {
    title: "Solaranlage Alternative 2026: §7g IAB ohne Photovoltaik",
    description:
      "Solaranlage lohnt sich nicht mehr? Welche Alternativen für den §7g IAB – und warum Tiny Houses doppelte Rendite bringen.",
    url: "https://tinyhouse.investments/wissen/solaranlage-alternative",
  },
};

const faqItems = [
  {
    question: "Qualifiziert ein Tiny House für den §7g IAB genauso wie eine PV-Anlage?",
    answer:
      "Ja. Ein Tiny House auf einem Vlemmix-Trailer gilt als bewegliches Wirtschaftsgut im Sinne des §7g EStG – genau wie eine PV-Anlage. Voraussetzung ist die betriebliche Nutzung mit Gewinnerzielungsabsicht, also die Vermietung als Ferienwohnung. Sowohl IAB (bis 50 % des Investitionsvolumens vorab) als auch Sonder-AfA (20 % im Investitionsjahr) und degressive AfA (25 % p.a.) sind nutzbar.",
  },
  {
    question: "Warum lohnt sich eine PV-Anlage 2026 oft nicht mehr als IAB-Investment?",
    answer:
      "Die Einspeisevergütung ist seit 2022 auf ein historisches Tief gefallen – aktuell 7–13 Cent pro kWh für neue Anlagen. Gleichzeitig hat sich der PV-Modulpreis halbiert, was die Anfangsinvestition zwar senkt, aber auch den IAB-Steuerhebel reduziert. Hinzu kommen Netzentgeltreformen und das politische Risiko weiterer Vergütungskürzungen. Die Netto-Rendite nach Steuern liegt für viele PV-Investoren heute bei 4–7 % – während ein verwaltetes Tiny House 12–18 % erzielen kann.",
  },
  {
    question: "Brauche ich ein eigenes Dach oder Grundstück für ein Tiny House Investment?",
    answer:
      "Nein. Das Tiny House wird auf dem Grundstück eines Hosts aufgestellt – du brauchst weder eigenes Land noch ein Dach. Das ist einer der entscheidenden strukturellen Unterschiede zur PV-Anlage, die an eine Immobilie gebunden ist. Tiny Escapes vermittelt geprüfte Hosts und Standorte; der Investor kauft nur das mobile Wirtschaftsgut.",
  },
  {
    question: "Wie hoch ist die AfA-Laufzeit beim Tiny House im Vergleich zur PV-Anlage?",
    answer:
      "PV-Anlagen werden über 20 Jahre linear abgeschrieben (5 % p.a.). Ein Tiny House auf Trailer kann über 8 Jahre linear abgeschrieben werden (~12,5 % p.a.) oder degressiv mit 25 % p.a. im ersten Jahr. Das bedeutet: Der steuerliche Hebel konzentriert sich bei Tiny Houses in den ersten Jahren – der Cashflow-Effekt ist früher spürbar als bei einer PV-Anlage.",
  },
  {
    question: "Kann ich mehrere IAB-fähige Wirtschaftsgüter gleichzeitig absetzen?",
    answer:
      "Ja, innerhalb der gesetzlichen Grenzen. Der IAB kann für mehrere bewegliche Wirtschaftsgüter gleichzeitig genutzt werden, solange der Gesamtbetrag 200.000 € nicht überschreitet (Stand 2026). Ein Investor kann also gleichzeitig eine PV-Anlage und ein Tiny House über §7g absetzen – sofern beide die Voraussetzungen erfüllen. Dein Steuerberater kann die optimale Staffelung planen.",
  },
];

export default function SolaranlageAlternativePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solaranlage Alternative 2026: §7g IAB ohne Photovoltaik",
    "description": "Solaranlage lohnt sich nicht mehr? Welche Alternativen qualifizieren für den §7g IAB – und warum ein Tiny House mehr Rendite bringt als eine PV-Anlage.",
    "url": "https://tinyhouse.investments/wissen/solaranlage-alternative",
    "datePublished": "2026-04-28",
    "dateModified": "2026-04-28",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/Solaranlage-alternative.webp" },
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
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">PV-Vergleich · §7g IAB · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Solaranlage Alternative 2026: §7g IAB ohne Photovoltaik
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-28">28. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Die Einspeisevergütung ist auf einem Rekordtief. Viele Investoren fragen sich: Was qualifiziert noch für den §7g IAB – außer einer PV-Anlage? Die Antwort liefert in vielen Fällen eine höhere Rendite bei kürzerer Abschreibungslaufzeit.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src="/images/outside/Solaranlage-alternative.webp"
              alt="Tiny House in Naturlage – Solaranlage Alternative für §7g IAB"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g IAB", "Solaranlage Alternative", "12–18 % Rendite", "Bewegliches Wirtschaftsgut", "Kein eigenes Dach"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Jahrelang war die PV-Anlage das Standardinstrument für Investoren, die den §7g Investitionsabzugsbetrag nutzen wollten. Die Logik war einfach: bewegliches Wirtschaftsgut, betriebliche Nutzung, IAB im Vorjahr bilden, Sonder-AfA im Kaufjahr absetzen. Doch seit 2022 hat sich das Bild grundlegend verändert. Die Einspeisevergütung für neue Anlagen liegt bei 7 bis 13 Cent pro Kilowattstunde – ein historisches Tief. Gleichzeitig sind die Modulpreise gefallen, was zwar den Einstieg erleichtert, aber auch den steuerwirksamen Investitionsbetrag und damit den IAB-Hebel verkleinert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Was viele Investoren nicht wissen: Der §7g IAB gilt nicht exklusiv für Solaranlagen. Er gilt für alle abnutzbaren beweglichen Wirtschaftsgüter des Anlagevermögens, die betrieblich genutzt werden. Fahrzeuge, Maschinen, Spezialgeräte – und eben auch ein Tiny House auf einem zugelassenen Trailer. Wer also nach einer IAB-fähigen Investition sucht, die mehr Rendite abwirft als eine PV-Anlage und dabei dieselbe Steuermechanik nutzt, sollte den Vergleich kennen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum Investoren die PV-Anlage als IAB-Vehikel überdenken</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Kernproblem der PV-Anlage als Kapitalanlage ist nicht der Steuerhebel – der funktioniert nach wie vor. Das Problem ist die Einkommensseite. Die Einspeisevergütung, die Betreibern für eingespeisten Strom gezahlt wird, ist seit der Novellierung des Erneuerbare-Energien-Gesetzes massiv gesunken. Wer heute eine neue Anlage in Betrieb nimmt, erhält für den eingespeisten Strom in der Regel 7 bis 13 Cent pro Kilowattstunde – vor fünf Jahren waren es noch 20 bis 30 Cent. Das bedeutet: Die Amortisationszeit, also der Zeitraum bis die Anlage ihre Kosten wieder eingespielt hat, liegt aktuell bei 12 bis 18 Jahren – trotz gesunkener Modulpreise.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Hinzu kommen strukturelle Risiken, die viele Investoren unterschätzen. Die Einspeisevergütung ist gesetzlich geregelt und kann durch politische Entscheidungen jederzeit geändert werden. Netzentgeltreformen und neue Grid-Fees belasten zunehmend die Wirtschaftlichkeit kleiner Dachanlagen. Und das Technologierisiko – Degradation der Module, Wechselrichterausfälle, Wartungskosten – ist zwar überschaubar, aber real vorhanden.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Ergebnis: Selbst mit vollständiger §7g-Nutzung liegt die Netto-Rendite einer PV-Anlage nach Steuern für viele Investoren heute bei 4 bis 7 Prozent. Das ist respektabel für eine risikoarme Anlage – aber kein Spitzenwert für ein aktiv gestaltetes Investment mit echtem Steuerhebel.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was neben PV für den §7g IAB qualifiziert</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der §7g EStG definiert drei Kernvoraussetzungen für den Investitionsabzugsbetrag: Das Wirtschaftsgut muss abnutzbar und beweglich sein, es muss zum Anlagevermögen eines Betriebs gehören, und es muss in den ersten drei Jahren nach dem Investitionsjahr ausschließlich oder fast ausschließlich betrieblich genutzt werden. PV-Anlagen erfüllen diese Kriterien – aber sie sind nicht die einzige Assetklasse, die das tut.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Fahrzeuge, die betrieblich genutzt werden, qualifizieren ebenso. Maschinen und Spezialgeräte qualifizieren. Und ein Tiny House auf einem Vlemmix-Trailer – einem zugelassenen Fahrzeuganhänger – qualifiziert ebenfalls, weil es als bewegliches Wirtschaftsgut gilt und nicht im Grundbuch eingetragen wird. Entscheidend ist, dass der Investor das wirtschaftliche Eigentum am Tiny House hält und das Haus im Rahmen eines Gewerbebetriebs oder einer Vermietungstätigkeit mit Gewinnerzielungsabsicht betrieben wird. Beides ist beim TinyInvest-Modell gegeben: Der Kaufvertrag überträgt das Eigentum auf den Investor, die Vermietung als Ferienunterkunft über tiny Escapes stellt die betriebliche Nutzung sicher.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-naturlage-gruen.webp"
              alt="Tiny House als §7g-Alternative zur Solaranlage"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House als §7g-Alternative zur Solaranlage – der Vergleich</h2>
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
                    ["Netto-Rendite", "4–7 %", "12–18 %"],
                    ["Einkommensquelle", "Einspeisevergütung", "Ferientourismus"],
                    ["Technologierisiko", "âš  Degradation, Wechselrichter", "âœ… Niedrig"],
                    ["Politisches Risiko", "âš  Einspeisevergütung gesetzlich", "âœ… Niedrig"],
                    ["Eigenes Dach/Grundstück nötig", "âš  Ja", "âœ… Nein"],
                    ["Passives Einkommen", "âœ… Ja", "âœ… Ja (vollständig verwaltet)"],
                    ["Break-even", "12–18 Jahre", "6–8 Jahre"],
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

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum die kürzere AfA-Laufzeit entscheidend ist</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei einer PV-Anlage wird der Investitionsbetrag über 20 Jahre linear abgeschrieben – das ergibt 5 Prozent pro Jahr. Der steuerliche Entlastungseffekt verteilt sich damit über zwei Jahrzehnte. Ein Tiny House auf Trailer hingegen kann über 8 Jahre linear abgeschrieben werden, was einer jährlichen AfA von rund 12,5 Prozent entspricht. Wer die degressive AfA wählt, kann im ersten Jahr sogar 25 Prozent des Buchwerts abschreiben.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das bedeutet in der Praxis: Der steuerliche Hebel des Tiny House konzentriert sich in den ersten Jahren – genau dort, wo er den größten Liquiditätsvorteil bringt. Bei einem 80.000-€-Objekt und einem Grenzsteuersatz von 42 Prozent summiert sich der Effekt aus IAB, Sonder-AfA und degressiver AfA im Investitionsjahr auf rund 33.600 € Steuererstattung. Das entspricht einer sofortigen Nettoliquidität von mehr als 40 Prozent des Kaufpreises – ohne dass ein Euro Mieteinnahme geflossen ist.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Eine PV-Anlage gleicher Größe würde denselben IAB erlauben, aber die laufende AfA verteilt sich auf 20 Jahre. Wer schnell Liquidität aus dem Steuerhebel zurückgewinnen möchte, ist mit dem Tiny House deutlich besser aufgestellt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Für wen ist ein Tiny House die bessere PV-Alternative?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Tiny House als §7g-Investment eignet sich besonders für Investoren mit einem Grenzsteuersatz von mindestens 35 Prozent, da ab diesem Niveau der Steuerhebel seine volle Wirkung entfaltet. Wer keinen eigenen Dachbesitz hat – und damit keine Grundlage für eine PV-Anlage –, findet im Tiny House eine Kapitalanlage, die kein eigenes Grundstück erfordert. Das Haus wird auf dem Stellplatz eines geprüften Hosts aufgebaut; Standort-Due-Diligence und Betrieb übernimmt tiny Escapes vollständig.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Für Investoren, die bereits eine PV-Anlage besitzen und den §7g-Rahmen noch nicht ausgeschöpft haben, kann das Tiny House eine sinnvolle Ergänzung sein: Beide Wirtschaftsgüter qualifizieren gleichzeitig, solange der IAB-Gesamtbetrag 200.000 € nicht übersteigt. Wer hingegen technisches Engagement scheut und ein vollständig passives Einkommensmodell bevorzugt, ist mit dem verwalteten Tiny House ebenfalls gut bedient – das Investment erfordert nach dem Kauf keinen weiteren Aufwand auf Investorenseite.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/pv-anlage-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">PV-Anlage als Kapitalanlage →</Link>
            <Link href="/rechner/iab" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB-Rechner →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Solaranlage Alternative &amp; §7g IAB</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">§7g-Steueranalyse anfordern</p>
            <h3 className="text-xl font-black mb-3">Wie hoch ist dein Steuervorteil statt PV?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Kostenlose Vergleichsrechnung: Tiny House vs. PV-Anlage auf Basis deines Grenzsteuersatzes und Investitionsvolumens.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Jetzt Vergleich anfordern →
              </ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                IAB-Rechner nutzen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
