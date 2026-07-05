import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House mit Grundstück kaufen 2026: Preise | TinyInvest",
  description:
    "Tiny House mit Grundstück kaufen: Paketangebote ab 65.000 €, Standorte Bayern & Ostsee. Mit Genehmigungsinfo und Investment-Alternative ohne eigenes Land.",
  keywords:
    "tiny house kaufen mit grundstück, tiny house mit grundstück kaufen, tiny house mit grundstück kaufen ostsee, tiny house bayern kaufen mit grundstück, tiny house mit grundstück kaufen preise, mobiles tiny house mit grundstück",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-kaufen-mit-grundstueck",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House mit Grundstück kaufen 2026: Paket, Preise & Standorte",
    description: "Paketangebote ab 65.000 €, Standorte & Genehmigungsinfo – oder als Investment ohne eigenes Land.",
    url: "https://tinyhouse.investments/wissen/tiny-house-kaufen-mit-grundstueck",
  },
};

const faqItems = [
  {
    question: "Was kostet ein Tiny House mit Grundstück als Paket?",
    answer:
      "Der Preis hängt stark vom Standort ab. Das Tiny House selbst kostet bei TinyInvest ab 65.000 €. Je nach Region und Grundstücksgröße kommen 30.000–120.000 € für das Grundstück hinzu. In touristisch attraktiven Lagen (Ostsee, Bayern, Schwarzwald) liegt der Grundstücksanteil höher – bringt aber auch eine bessere Auslastung als Ferienunterkunft.",
  },
  {
    question: "Brauche ich eine Genehmigung für ein Tiny House auf eigenem Grundstück?",
    answer:
      "Das hängt vom Bundesland und der geplanten Nutzung ab. Als mobiles Fahrzeug auf privatem Grund ist ein Tiny House auf Trailer in vielen Gemeinden genehmigungsfrei – solange es nicht als dauerhafter Hauptwohnsitz angemeldet wird. Für gewerbliche Nutzung als Ferienunterkunft ist in den meisten Bundesländern eine Nutzungsänderung oder Baugenehmigung erforderlich. TinyInvest begleitet diesen Prozess.",
  },
  {
    question: "Kann ich ein Tiny House mit Grundstück auch als Kapitalanlage kaufen?",
    answer:
      "Ja – das Paketmodell von TinyInvest ist explizit für Investoren konzipiert. Du kaufst Tiny House und Grundstück, lokale Partner betreibt das Haus als Ferienunterkunft. Du erhältst 40 % der Nettomieteinnahmen monatlich. Das Tiny House auf Trailer ist als bewegliches Wirtschaftsgut §7g-fähig – das Grundstück selbst nicht, aber es ergänzt das Investment als Sachanlage.",
  },
  {
    question: "Welche Standorte gibt es für Tiny Houses mit Grundstück?",
    answer:
      "TinyInvest vermittelt Projekte in touristisch starken Regionen: Bayern (Alpen, Seen), Ostseeküste (Schleswig-Holstein, Mecklenburg-Vorpommern), Schwarzwald und Harz. Aktuelle verfügbare Projekte findest du im Marktplatz. Die Standorte werden nach Tourismusattraktivität, Infrastruktur und Genehmigungslage geprüft.",
  },
  {
    question: "Was ist der Vorteil gegenüber einem Tiny House ohne Grundstück?",
    answer:
      "Mit eigenem Grundstück hast du mehr Kontrolle über Standort und Nutzung. Du kannst das Tiny House auch selbst nutzen, umbenennen oder langfristig verkaufen – inklusive Grundstück. Der Nachteil: mehr gebundenes Kapital und mehr Verwaltungsaufwand. Für reine Investoren die maximale Rendite auf eingesetztes Kapital wollen, ist das Modell ohne eigenes Grundstück oft wirtschaftlicher.",
  },
];

export default function TinyHouseKaufenMitGrundstueckPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House mit Grundstück kaufen 2026: Paket, Preise & Standorte",
    "description": "Tiny House mit Grundstück kaufen: Paketangebote, Standorte Bayern & Ostsee, Genehmigung und Investment-Option erklärt.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-kaufen-mit-grundstueck",
    "datePublished": "2026-04-29",
    "dateModified": "2026-04-29",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-host-grundstueck.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House mit Grundstück kaufen", "item": "https://tinyhouse.investments/wissen/tiny-house-kaufen-mit-grundstueck" },
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
      <Script id="article-schema-tiny-house-mit-grundstueck" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-mit-grundstueck" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-tiny-house-mit-grundstueck" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House mit Grundstück</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Paketangebot · Standorte · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House mit Grundstück kaufen: Pakete, Preise & Standorte 2026
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
            Wer ein Tiny House mit Grundstück kaufen möchte, hat bei TinyInvest zwei Optionen: ein Komplettpaket aus Haus und Grundstück an einem geprüften Standort – oder ein Tiny House ohne eigenes Land, das auf dem Grundstück eines Hosts betrieben wird. Dieser Guide erklärt beide Wege, Preise und was bei Genehmigung & Standortwahl zu beachten ist.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-host-grundstueck.webp"
              alt="Tiny House mit Grundstück kaufen – Stellplatz in Naturlage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Paket Haus + Grund", "Bayern & Ostsee", "Genehmigungsbegleitung", "Investment-Option", "§7g-fähig"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Paket oder kein Grundstück – welcher Weg passt?</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Entscheidung zwischen "Tiny House mit Grundstück kaufen" und "Tiny House ohne eigenes Land" hängt in erster Linie davon ab, was du mit dem Objekt vorhast. Wer das Tiny House selbst bewohnen oder als dauerhaften Rückzugsort nutzen möchte, ist mit einem eigenen Grundstück gut aufgestellt. Wer primär renditeorientiert investiert, findet im Modell ohne Grundstück oft die wirtschaftlich effizientere Lösung – weil weniger Kapital gebunden ist und die Mobilitätsoption des Tiny Houses vollständig erhalten bleibt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Mit Grundstück</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Ohne Grundstück</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Gesamtkapital nötig", "95.000–215.000 €", "65.000–95.000 €"],
                    ["Standortflexibilität", "Fest", "âœ… Mobil"],
                    ["§7g IAB auf Haus", "âœ… Ja", "âœ… Ja"],
                    ["Eigennutzung möglich", "âœ… Ja", "Eingeschränkt"],
                    ["Operative Aufwand", "Mittel", "âœ… Minimal"],
                    ["Renditehebel (IRR)", "8–12 %", "13–15 %"],
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

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Standorte: Bayern, Ostsee & weitere Regionen</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              TinyInvest vermittelt Paketprojekte mit Grundstück in touristisch starken Regionen Deutschlands. Die Standortauswahl folgt klaren Kriterien: Tourismusintensität der Region, vorhandene Infrastruktur (Wasser, Strom, Abwasser), Genehmigungslage im jeweiligen Bundesland und Erreichbarkeit für Gäste. Nicht jede schöne Lage ist wirtschaftlich sinnvoll – deshalb prüft TinyInvest jeden Standort auf Belegungspotenzial bevor er ins Programm aufgenommen wird.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { region: "Bayern", detail: "Alpen, Seen, Chiemsee, Berchtesgaden – hohe Ganzjahresnachfrage durch Winter- und Sommertourismus" },
                { region: "Ostseeküste", detail: "Schleswig-Holstein & Mecklenburg – starke Sommersaison, wachsende Nachfrage nach Naturunterkünften" },
                { region: "Schwarzwald & Harz", detail: "Ganzjährig buchbar durch Wander- und Skiregion, weniger Konkurrenz als an der Küste" },
              ].map((s) => (
                <div key={s.region} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <h3 className="font-black text-gray-900 text-[14px] mb-2">{s.region}</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Genehmigung: Was du wissen musst</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Genehmigungsfrage ist der häufigste Unsicherheitsfaktor beim Kauf eines Tiny Houses mit Grundstück. Die gute Nachricht: Ein Tiny House auf einem zugelassenen Vlemmix-Trailer ist rechtlich ein Fahrzeug – kein Gebäude. Das bedeutet, dass in vielen Bundesländern und bei privater Nutzung auf eigenem Grund keine Baugenehmigung erforderlich ist, solange das Haus nicht als dauerhafter Hauptwohnsitz gemeldet wird.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Für die gewerbliche Nutzung als Ferienunterkunft ist die Lage differenzierter. Hier kommt es auf den Bebauungsplan des jeweiligen Grundstücks und die Gemeindesatzung an. TinyInvest begleitet den gesamten Genehmigungsprozess und hat Erfahrung mit den Anforderungen in Bayern, Schleswig-Holstein, Mecklenburg-Vorpommern und weiteren Bundesländern.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/tiny-house-kaufen" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House kaufen Guide →</Link>
            <Link href="/marktplatz" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Aktuelle Projekte →</Link>
            <Link href="/wissen/tiny-house-genehmigung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Genehmigung erklärt →</Link>
            <Link href="/wissen/tiny-house-standorte" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Beste Standorte →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Investment-Option →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House mit Grundstück kaufen</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Verfügbare Projekte</p>
            <h3 className="text-xl font-black mb-3">Tiny House mit Grundstück – aktuelle Pakete ansehen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Standort, Preis und Verfügbarkeit auf einen Blick. Oder melde dich für ein kostenloses Beratungsgespräch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/marktplatz" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Zum Marktplatz →
              </Link>
              <ModalButton className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Beratung anfragen →
              </ModalButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
