import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House kaufen 2026: Preise & Modelle | TinyInvest",
  description:
    "Tiny House kaufen: Preise ab 65.000 €, Solido Modelle (Escape A17, Cabin 8400), Genehmigung, neu vs. gebraucht – und die Investment-Option für Käufer.",
  keywords:
    "tiny house kaufen, tiny house kaufen preise, tiny house kaufen 2026, tiny house preise, mobiles tiny house kaufen, tiny house ganzjährig bewohnbar kaufen, tiny house gebraucht kaufen, günstige tiny häuser kaufen, tiny house als kapitalanlage kaufen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-kaufen",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House kaufen 2026: Preise, Modelle & Investment-Option",
    description: "Preise ab 65.000 €, Solido Modellvergleich und die Frage: selbst einziehen oder als Kapitalanlage vermieten lassen?",
    url: "https://tinyhouse.investments/wissen/tiny-house-kaufen",
  },
};

const faqItems = [
  {
    question: "Was kostet ein Tiny House kaufen 2026?",
    answer:
      "Hochwertige Tiny Houses auf zugelassenem Vlemmix-Trailer kosten bei TinyInvest zwischen 65.000 € (Solido Escape A17, ca. 17–20 m²) und 95.000 € (Solido Cabin 8400 Premium, ca. 25–30 m²). Günstigere Angebote am Markt unter 30.000 € sind meist Eigenbauten ohne COC-Zulassung, ohne winterfeste Dämmung und ohne Fahrzeugbrief – steuerlich nicht §7g-fähig. Der Preis bei TinyInvest beinhaltet Lieferung, Aufstellung und Ersteinrichtung.",
  },
  {
    question: "Ist ein Tiny House ganzjährig bewohnbar kaufen sinnvoll?",
    answer:
      "Ja – die Solido Tiny Houses von TinyInvest sind vollständig winterfest gebaut. Holzständerwerk mit Mineralwolldämmung, Fußbodenheizung, Wärmerückgewinnung und optional Solar- und Off-Grid-Ausstattung ermöglichen einen Betrieb bei Temperaturen bis -20 °C. Sie werden ganzjährig als Ferienunterkunft gebucht, auch im Winter.",
  },
  {
    question: "Brauche ich ein eigenes Grundstück um ein Tiny House zu kaufen?",
    answer:
      "Nein. TinyInvest bietet zwei Wege: Paketangebot mit Grundstück an geprüftem Standort – oder Aufstellung auf dem Grundstück eines Hosts, ohne eigenes Land. Für Investoren ist das zweite Modell oft wirtschaftlicher, da kein Kapital im Grundstück gebunden wird.",
  },
  {
    question: "Kann ich ein Tiny House als Kapitalanlage kaufen statt selbst einzuziehen?",
    answer:
      "Ja – und das ist für viele Käufer die wirtschaftlich bessere Option. Als Kapitalanlage wird das Tiny House von tiny Escapes als Ferienunterkunft betrieben. Du erhältst 40 % der Mieteinnahmen monatlich und kannst über §7g EStG bis zu 33.000 € Steuern im ersten Jahr sparen. Der Kauf als Investitionsobjekt ist steuerlich deutlich vorteilhafter als Eigennutzung.",
  },
  {
    question: "Tiny House kaufen: neu oder gebraucht?",
    answer:
      "Gebrauchte Tiny Houses auf Trailer sind selten und meist nur über Direktverkäufe von Privatpersonen erhältlich. Der Markt ist klein. Wer ein gebrauchtes Tiny House kaufen möchte, sollte unbedingt auf gültigen Fahrzeugbrief (COC/VIN), Wartungshistorie und Zustand der Dämmung achten. Für die §7g-Nutzung als Kapitalanlage ist ein Neufahrzeug deutlich einfacher – der steuerliche Hebel greift nur bei neuen Anschaffungen ohne Vornutzung.",
  },
  {
    question: "Wie läuft der Kaufprozess ab?",
    answer:
      "Nach einem kostenlosen Beratungsgespräch wählst du Modell und Standort. Kaufvertrag direkt mit dem Hersteller Solido. Lieferung und Aufstellung auf Vlemmix-Trailer innerhalb von 4–8 Wochen. Bei Investitionsmodell: Listing auf tiny Escapes und Buchungsplattformen, erste Mietauszahlung im Folgemonat.",
  },
];

export default function TinyHouseKaufenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House kaufen 2026: Preise, Modelle & Investment-Option",
    "description": "Tiny House kaufen: Preise ab 65.000 €, Solido Modelle, Genehmigung, neu vs. gebraucht – und warum viele Käufer ihr Tiny House als Kapitalanlage nutzen.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-kaufen",
    "datePublished": "2026-04-29",
    "dateModified": "2026-05-06",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-investor-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House kaufen", "item": "https://tinyhouse.investments/wissen/tiny-house-kaufen" },
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
      <Script id="article-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House kaufen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kaufguide · Preise · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House kaufen 2026: Preise, Modelle & die Investment-Option
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-29">29. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Wer ein Tiny House kaufen möchte, steht vor zwei grundlegend verschiedenen Wegen: selbst einziehen oder als Kapitalanlage vermieten lassen. Dieser Guide erklärt Tiny House kaufen Preise, die Solido Modelle auf Vlemmix-Trailer, Genehmigungsfragen, den Unterschied zwischen neu und gebraucht – und warum immer mehr Käufer sich für die Investment-Option entscheiden.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-investor-aussen.webp"
              alt="Tiny House kaufen – modernes Solido Tiny House auf Vlemmix-Trailer in Naturlage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ab 65.000 €", "Ganzjährig bewohnbar", "Mit oder ohne Grundstück", "§7g-fähig", "COC-Homologation", "Solido auf Vlemmix"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House kaufen Preise 2026: Was kostet ein hochwertiges Modell?</h2>
          <div className="max-w-3xl mb-6">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Markt für Tiny Houses ist unübersichtlich. Wer ein Tiny House kaufen möchte, findet auf Online-Plattformen Angebote zwischen 15.000 € und über 200.000 €. Der Preisunterschied liegt nicht nur in der Größe, sondern vor allem in Qualität, Zulassung und Langlebigkeit. Günstige Tiny Häuser unter 30.000 € sind häufig Eigenbauten ohne COC-Zulassung, ohne winterfeste Dämmung und ohne amtlichen Fahrzeugbrief. Das bedeutet: kein legaler Straßentransport, keine Kfz-Versicherung als Fahrzeug und keine Möglichkeit den §7g Investitionsabzugsbetrag zu nutzen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein mobiles Tiny House kaufen möchte das rechtlich als Fahrzeug gilt, dauerhaft versichert werden kann und steuerlich als bewegliches Wirtschaftsgut absetzbar ist, braucht ein Modell mit europäischer COC-Homologation auf einem zugelassenen Trailer. TinyInvest setzt auf Tiny Houses des rumänischen Herstellers Solido, aufgebaut auf Vlemmix-Trailern. Diese Kombination ist seit Jahren im deutschen und europäischen Markt erprobt und gilt als Standard für qualitativ hochwertige, zertifizierte Tiny Houses.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Die Tiny House kaufen Preise bei TinyInvest beginnen bei 65.000 € für das Einstiegsmodell und reichen bis ca. 95.000 € für das vollausgestattete Premium-Modell. Das klingt nach viel – ist aber im Vergleich zu einer Eigentumswohnung (Einstieg oft ab 200.000 €, dazu Kaufnebenkosten von 10–15 %) ein erheblich niedrigerer Kapitaleinsatz mit vergleichbaren oder besseren Renditechancen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Solido Modelle im Vergleich: Escape A17 & Cabin 8400</h2>
          <div className="max-w-3xl mb-6">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Solido Tiny House bietet zwei Hauptmodelle an, die auf Vlemmix-Trailern aufgebaut und in ganz Europa zugelassen sind. Beide Modelle verfügen über eine COC-Homologation (Certificate of Conformity), die den rechtlichen Betrieb als Kraftfahrzeuganhänger in Deutschland und der gesamten EU sicherstellt. Die Außenverkleidung besteht je nach Konfiguration aus ThermoWood oder Aluminium, das Tragwerk aus Holzständerwerk mit Mineralwolldämmung.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Modell</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Abmessungen</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Wohnfläche</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Preis</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">§7g-fähig</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Escape A17 (Compact)", "6,60 × 2,55 m", "17–20 m² inkl. Loft", "ab 65.000 €", "✅ Ja"],
                    ["Cabin 8400 (Standard)", "8,40 × 2,55 m", "ca. 25–30 m²", "ab 79.000 €", "✅ Ja"],
                    ["Cabin 8400 (Premium)", "8,40 × 2,55 m", "ca. 25–30 m²", "ab 95.000 €", "✅ Ja"],
                  ].map(([m, ab, fl, p, s]) => (
                    <tr key={m} className="hover:bg-gray-50/50">
                      <td className="p-4 font-bold text-gray-900">{m}</td>
                      <td className="p-4 text-center text-gray-500 font-data">{ab}</td>
                      <td className="p-4 text-center text-gray-500">{fl}</td>
                      <td className="p-4 text-center font-data font-semibold text-gray-700">{p}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-[11px] text-gray-400">Alle Modelle auf Vlemmix-Trailer · COC-Homologation · EU-zugelassen · Gewicht ca. 3.500 kg</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Ausstattung & Off-Grid: Was beim Tiny House kaufen enthalten ist</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein zentrales Kaufargument für ein mobiles Tiny House ist die Möglichkeit zur vollständigen Autarkie. Die Solido Escape-Serie ist besonders für ihre Off-Grid-Optionen bekannt: Photovoltaik-Anlage auf dem Dach, Wassertank mit Filtersystem, Holzofen als Primärheizung und Wärmerückgewinnung für die Belüftung. Damit ist das Tiny House auch auf Grundstücken ohne Netzanschluss betreibbar – ein erheblicher Vorteil für abgelegene Ferienstandorte.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House ganzjährig bewohnbar kaufen möchte, sollte auf die Dämmstärke achten. Die Solido-Modelle verwenden Mineralwolle mit entsprechender Stärke für den Einsatz bei Temperaturen bis -20 °C. Die Fußbodenheizung sorgt für gleichmäßige Wärmeverteilung auf kleiner Fläche. Gäste buchen diese Häuser ebenso im Winter wie im Sommer – die Auslastung ist das ganze Jahr über stabil.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Im Premium-Modell des Cabin 8400 sind zusätzlich eine vollausgestattete Küche, ein Bad mit Dusche und Komposttoilette sowie Designmöbel aus Naturholz enthalten. Die Innenausstattung entspricht einem gehobenen Ferienstudio und ist auf die Erwartungen von Airbnb- und tiny Escapes-Gästen ausgerichtet.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House kaufen: neu oder gebraucht?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House gebraucht kaufen möchte, wird feststellen: der Markt ist überschaubar. Da Tiny Houses auf Trailer in Deutschland noch eine relativ junge Erscheinung sind, gibt es kaum etablierte Gebrauchtmärkte. Gelegentlich werden Objekte über Kleinanzeigen, Facebook-Gruppen oder Direktverkäufe angeboten. Wer diesen Weg geht, sollte folgende Punkte prüfen:
            </p>
            <div className="space-y-3 mb-5">
              {[
                { punkt: "Fahrzeugbrief (COC/VIN)", detail: "Liegt ein gültiger Fahrzeugbrief vor? Ist das Fahrzeug in Deutschland zugelassen? Ohne diese Dokumente ist kein legaler Betrieb möglich." },
                { punkt: "Dämmung & Winterfestigkeit", detail: "Wurde das Haus ordentlich gedämmt und gepflegt? Feuchtigkeitsschäden in Wänden und Boden sind bei gebrauchten Tiny Houses das häufigste Problem." },
                { punkt: "§7g-Nutzbarkeit", detail: "Der §7g IAB gilt nur für neue Wirtschaftsgüter ohne Vornutzung. Ein gebrauchtes Tiny House kaufen schließt den Steuerhebel in der Regel aus." },
              ].map((p) => (
                <div key={p.punkt} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-green-700 font-black text-[13px] shrink-0">→</span>
                  <div>
                    <span className="font-black text-gray-900 text-[13px]">{p.punkt}: </span>
                    <span className="text-gray-500 text-[13px]">{p.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Für Investoren empfiehlt sich fast immer der Neukauf. Der Preisunterschied zum Gebrauchten ist geringer als erwartet, die Rechtssicherheit deutlich höher – und nur ein Neukauf ermöglicht die volle §7g-Nutzung mit IAB, Sonder-AfA und degressiver AfA.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Selbst einziehen oder als Investment vermieten?</h2>
          <div className="max-w-3xl mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House kaufen möchte, steht vor einer Entscheidung die viele unterschätzen: Eigennutzung oder Kapitalanlage? Beide Wege sind möglich – aber die wirtschaftlichen Konsequenzen unterscheiden sich erheblich.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei Eigennutzung sparst du Mietkosten und hast maximale Freiheit über den Standort. Steuerlich bringt das jedoch wenig: Da keine betriebliche Nutzung mit Gewinnerzielungsabsicht vorliegt, entfällt der §7g-Steuerhebel komplett. Das Haus ist ein Konsumgut, keine Kapitalanlage.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Wer ein Tiny House als Kapitalanlage kaufen möchte, kauft ein betriebliches Wirtschaftsgut. tiny Escapes betreibt es als Ferienunterkunft, du erhältst 40 % der Nettomieteinnahmen monatlich – ca. 720 € bei 60 % Belegung. Dazu kommt der §7g-Steuervorteil: Im ersten Jahr lassen sich bis zu 33.000 € Steuern sparen. Das macht die effektive Einstiegsrendite deutlich attraktiver als Eigennutzung oder klassische Immobilien.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-12">
            <p className="font-black text-gray-900 text-base mb-2">Rechenbeispiel: Cabin 8400 für 79.000 €, 42 % Steuersatz</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-[13px]">
              {[
                { label: "Steuererstattung Jahr 1", value: "bis 33.000 €", sub: "IAB + Sonder-AfA" },
                { label: "Monatliche Auszahlung", value: "ca. 720 €", sub: "bei 60 % Belegung" },
                { label: "IRR über 5 Jahre", value: "13–15 %", sub: "inkl. Steuereffekt" },
              ].map((k) => (
                <div key={k.label} className="bg-white rounded-xl p-4 border border-green-100">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{k.label}</p>
                  <p className="font-data font-black text-green-700 text-lg">{k.value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{k.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House kaufen: Mit oder ohne Grundstück?</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein häufiges Missverständnis beim Tiny House kaufen: Du brauchst kein eigenes Grundstück. Der Vlemmix-Trailer ist ein zugelassenes Fahrzeug – das Tiny House kann jederzeit auf einen anderen Standort transportiert werden. TinyInvest bietet deshalb zwei Modelle an: das Paketangebot mit Grundstück an einem geprüften Tourismusstandort (Bayern, Ostsee, Schwarzwald) – oder die Aufstellung auf dem Grundstück eines Hosts, ohne eigenes Land.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Im Paketmodell erhältst du Tiny House und Grundstück aus einer Hand. Ideal wenn du einen festen, attraktiv gelegenen Standort bevorzugst und nicht selbst nach einem Stellplatz suchen möchtest. TinyInvest übernimmt die Standortprüfung, Genehmigungsbegleitung und Aufstellung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Im Investorenmodell ohne Grundstück wird dein Tiny House auf dem Grundstück eines geprüften Hosts im tiny Escapes Netzwerk aufgestellt. Du hast keine Grundstückskosten, keine Standortsuche und profitierst trotzdem von der vollen §7g-Abschreibung – denn der Steuerhebel gilt für das mobile Wirtschaftsgut, nicht für das Grundstück.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-stellplatz-standort.webp"
              alt="Tiny House kaufen mit oder ohne Grundstück – Stellplatz in Naturlage"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Worauf beim Tiny House kaufen achten: 4 Kriterien</h2>
          <div className="max-w-3xl mb-12">
            <div className="space-y-4">
              {[
                { nr: "01", title: "COC-Homologation & Fahrzeugbrief", desc: "Ein Tiny House kaufen ohne COC ist ein rechtliches Risiko. Nur mit gültigem Fahrzeugbrief (VIN/FIN) ist legaler Straßentransport, Kfz-Versicherung und §7g-Nutzung möglich. Solido-Häuser auf Vlemmix verfügen standardmäßig über EU-weite COC-Homologation." },
                { nr: "02", title: "Winterfestigkeit & Ganzjahresbetrieb", desc: "Wer ein Tiny House ganzjährig bewohnbar kaufen möchte, sollte auf Mineralwolldämmung, Fußbodenheizung und Wärmerückgewinnung bestehen. Die Solido-Modelle sind für -20 °C ausgelegt und ganzjährig als Ferienunterkunft betreibbar." },
                { nr: "03", title: "Genehmigung am Standort", desc: "Die Genehmigungspflicht hängt vom Bundesland und Nutzungszweck ab. Als mobiles Fahrzeug auf privatem Grund sind Tiny Houses auf Trailer oft genehmigungsfrei. Für gewerbliche Feriennutzung ist in den meisten Bundesländern eine Nutzungsänderung erforderlich. TinyInvest begleitet diesen Prozess." },
                { nr: "04", title: "Betriebskonzept bei Investment", desc: "Wer das Tiny House kaufen und vermieten möchte, braucht ein professionelles Betriebskonzept: Buchungsplattform, Gästebetreuung, Reinigung, Check-in-Prozess. TinyInvest vermittelt das vollständig über tiny Escapes – du hast nach dem Kauf keinen operativen Aufwand." },
              ].map((step) => (
                <div key={step.nr} className="flex gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-sm">{step.nr}</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-[14px] mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">In ein Tiny House investieren →</Link>
            <Link href="/wissen/tiny-house-kaufen-mit-grundstueck" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House mit Grundstück →</Link>
            <Link href="/konfigurator" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Konfigurator →</Link>
            <Link href="/wissen/tiny-house-kaufen-checkliste" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kaufen Checkliste →</Link>
            <Link href="/wissen/tiny-house-genehmigung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Genehmigung →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierung →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House kaufen 2026</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Kostenlose Beratung</p>
            <h3 className="text-xl font-black mb-3">Tiny House kaufen – welches Modell passt zu dir?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Escape A17 oder Cabin 8400? Eigennutzung oder Investment? Mit oder ohne Grundstück? Wir helfen dir in einem kostenlosen Gespräch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Kostenlose Beratung anfragen →
              </ModalButton>
              <Link href="/konfigurator" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Konfigurator starten →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
