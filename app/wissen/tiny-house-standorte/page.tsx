import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Beste Tiny House Standorte Deutschland 2026 | TinyInvest",
  description:
    "Welche Regionen eignen sich für ein Tiny House Investment? Bayern, Schwarzwald, Ostsee, Allgäu – Belegungsquoten und Rendite im Vergleich.",
  keywords:
    "tiny house standorte deutschland, tiny house stellplatz deutschland, beste tiny house standorte, tiny house urlaub deutschland, tiny house investition standort",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-standorte" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Beste Tiny House Standorte Deutschland 2026 | TinyInvest",
    description: "Bayern, Schwarzwald, Ostsee, Allgäu – die besten Regionen für ein Tiny House Investment mit höchster Belegungsquote.",
    url: "https://tinyhouse.investments/wissen/tiny-house-standorte",
  },
};


const faqItems = [
  {
    question: "Wo in Deutschland sind Tiny House Investments am rentabelsten?",
    answer: "Die höchste Rendite erzielen Standorte mit ganzjährigem Tourismus: Bayern/Alpen, Schwarzwald und Allgäu liegen vorne. Küstenregionen (Ostsee) haben sehr hohe Saisonpreise, aber ausgeprägte Saisonalität. Ganzjahresstandorte mit 70 % Belegung sind typischerweise rentabler als Saisonstandorte mit 80 % im Sommer aber 30 % im Winter.",
  },
  {
    question: "Muss ich als Investor den Standort selbst suchen?",
    answer: "Nein. TinyInvest-Investoren kaufen ein Tiny House, das bereits einem geprüften Standort im tiny Escapes Netzwerk zugeordnet wird. Standort-Due-Diligence, Baugenehmigung und Host-Beziehung werden vollständig durch tiny Escapes gemanagt.",
  },
  {
    question: "Kann ich meinen bevorzugten Standort wählen?",
    answer: "Je nach Verfügbarkeit können Investoren zwischen verschiedenen Standorten wählen. Die Verfügbarkeit ist projektabhängig – im Marktplatz siehst du alle aktuell verfügbaren Projekte mit Standortangabe und Renditeprognose.",
  },
  {
    question: "Wie wichtig ist die Lage für die Rendite?",
    answer: "Sehr wichtig – aber nicht allein entscheidend. Die Belegungsquote wird durch Lage, Listing-Qualität, Pricing und Saison beeinflusst. Ein gut gemanagter Standort in der Eifel kann einen schlecht betriebenen Alpen-Standort übertreffen. Das tiny Escapes Betreibermodell optimiert alle Faktoren gleichzeitig.",
  },
];

export default function TinyHouseStandortePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Beste Tiny House Standorte Deutschland 2026",
    "description": "Welche Regionen in Deutschland eignen sich am besten für ein Tiny House Investment? Bayern, Schwarzwald, Ostsee, Allgäu – Belegungsquoten und Rendite im Vergleich.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-standorte",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-skandinavien-naturlage.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Standorte", "item": "https://tinyhouse.investments/wissen/tiny-house-standorte" }
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
      <Script id="faq-schema-standorte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-standorte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-standorte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Standorte</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Standort-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Beste Tiny House Standorte Deutschland 2026
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
            Welche Region in Deutschland liefert die höchste Belegungsquote und damit die beste Rendite? Ein Vergleich der 6 stärksten Tourismus-Regionen für Tiny House Investments.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-skandinavien-naturlage.webp" alt="Tiny House Standort Skandinavien – Naturlage" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Bayern", "Schwarzwald", "Ostsee", "Allgäu", "Ganzjahres-Standorte"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              In einem touristischen Markt, in dem gefühlt jeder ein Tiny House betreiben will, entscheidet am Ende eine einzige Variable: der Standort. Nicht das Design, nicht die Ausstattung, nicht der Preis – die Lage bestimmt zu 60 bis 70 Prozent, ob ein Asset profitabel ist oder nicht. Die gute Nachricht: Wer in das richtige Netzwerk investiert, bekommt den Standort mitgeliefert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das tiny Escapes Netzwerk betreibt Häuser an geprüften Standorten in Deutschland, Österreich und weiteren europäischen Ländern. Die Lageauswahl folgt einem klaren Kriterienkatalog: ganzjährige Nachfrage, Erreichbarkeit aus Ballungsräumen, natürliche Alleinlage, Infrastruktur. Für Investoren bedeutet das: kein Standort-Risiko durch eigene Fehlentscheidung.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Top 6 Regionen im Vergleich</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Region</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Belegung</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Nachtpreis</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Saison</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-left">Stärke</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🏔️ Bayern &amp; Alpen</td>
                    <td className="p-4 text-center font-bold text-green-700">70–80 %</td>
                    <td className="p-4 text-center text-gray-600">120–180 €</td>
                    <td className="p-4 text-center text-gray-600">Ganzjährig</td>
                    <td className="p-4 text-gray-500">Winter-Tourismus, Wandern, Ski</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🌲 Schwarzwald</td>
                    <td className="p-4 text-center font-bold text-green-700">65–75 %</td>
                    <td className="p-4 text-center text-gray-600">90–140 €</td>
                    <td className="p-4 text-center text-gray-600">Frühling–Herbst</td>
                    <td className="p-4 text-gray-500">Natur, Wellness, Radtourismus</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🌊 Ostseeküste</td>
                    <td className="p-4 text-center font-bold text-amber-600">60–75 %</td>
                    <td className="p-4 text-center text-gray-600">100–160 €</td>
                    <td className="p-4 text-center text-gray-600">Mai–September</td>
                    <td className="p-4 text-gray-500">Strandnähe, Familientourismus</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🐄 Allgäu</td>
                    <td className="p-4 text-center font-bold text-green-700">65–75 %</td>
                    <td className="p-4 text-center text-gray-600">90–130 €</td>
                    <td className="p-4 text-center text-gray-600">Sommer + Winter</td>
                    <td className="p-4 text-gray-500">Wandern, Naturpark, Österreich-Nähe</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🍇 Eifel &amp; Mosel</td>
                    <td className="p-4 text-center font-bold text-amber-600">55–65 %</td>
                    <td className="p-4 text-center text-gray-600">80–120 €</td>
                    <td className="p-4 text-center text-gray-600">Frühling–Herbst</td>
                    <td className="p-4 text-gray-500">Weinregion, Natur, Stadtferne</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800">🦌 Harz</td>
                    <td className="p-4 text-center font-bold text-green-700">60–70 %</td>
                    <td className="p-4 text-center text-gray-600">75–110 €</td>
                    <td className="p-4 text-center text-gray-600">Ganzjährig</td>
                    <td className="p-4 text-gray-500">Wandern, Winter, Brockennähe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-winter-ganzjahresbetrieb.webp" alt="Tiny House im Winter – Ganzjahresbetrieb" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was einen Standort wirklich profitabel macht</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Vier Faktoren bestimmen, ob ein Standort langfristig rentabel ist. An erster Stelle steht ganzjährige Nachfrage: Standorte, die Winterwanderer genauso ansprechen wie Sommertouristen, erzielen gleichmäßigen Cashflow über alle zwölf Monate. Saisonstandorte wie die Ostseeküste können in der Hochphase höhere Nachtpreise abrufen, kämpfen aber in der Nebensaison mit deutlich niedrigerer Auslastung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Erreichbarkeit ist der zweite Schlüsselfaktor: Standorte innerhalb von zwei Stunden Fahrzeit von Ballungsräumen wie München, Hamburg oder Berlin haben strukturell höhere Auslastungsquoten, weil sie auch für Kurzurlauber über ein verlängertes Wochenende attraktiv sind. Dazu kommt die Listing-Qualität: Dynamisches Pricing, professionelle Fotos und Präsenz auf mehreren Buchungsplattformen gleichzeitig – Airbnb, Booking.com und die tiny Escapes Eigenwebsite – maximieren die Belegung unabhängig von der Ausgangslage.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum Standort-Risiko für TinyInvest-Investoren kein Thema ist</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              TinyInvest-Investoren kaufen kein Tiny House ohne geprüften Standort. Jedes Objekt im Marktplatz ist bereits einem validierten Standort im tiny Escapes Netzwerk zugeordnet – die Standort-Due-Diligence, Stellplatzgenehmigung und Host-Beziehung sind Teil des Pakets. Das bedeutet: Du triffst keine Standortentscheidung im Blindflug, sondern auf Basis geprüfter Belegungs- und Preisdaten. Wer dennoch Einfluss auf die Region nehmen möchte, kann je nach Verfügbarkeit zwischen verschiedenen Standorten wählen – alle aktuell verfügbaren Projekte mit Standortangabe und Renditeprognose sind im Marktplatz einsehbar.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/marktplatz" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Aktuelle Standorte im Marktplatz →</Link>
            <Link href="/rechner/rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rendite berechnen →</Link>
            <Link href="/wissen/tiny-house-genehmigung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Genehmigungs-Guide →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Standorte Deutschland</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Aktuell verfügbare Standorte anfragen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Paket mit Standort-Karte anfordern.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Standortübersicht anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
