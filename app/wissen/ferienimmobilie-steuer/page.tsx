import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite | TinyInvest",
  description:
    "Ferienimmobilie kaufen als Kapitalanlage: Steuern, AfA, Rendite und der Vergleich mit Tiny House Investments. Was sich 2026 wirklich lohnt.",
  keywords:
    "ferienimmobilie als kapitalanlage, ferienimmobilie steuer 2026, ferienimmobilie rendite, ferienhaus kaufen investition, ferienimmobilie afa abschreibung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/ferienimmobilie-steuer" },
  openGraph: {
    title: "Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite | TinyInvest",
    description: "Alles über Steuern, AfA und Rendite bei Ferienimmobilien – und warum Tiny Houses das bessere Modell sind.",
    url: "https://tinyhouse.investments/wissen/ferienimmobilie-steuer",
  },
};

const faqItems = [
  {
    question: "Wie wird eine Ferienimmobilie steuerlich behandelt?",
    answer: "Einkünfte aus Ferienvermietung werden als Einkünfte aus Vermietung und Verpachtung (§21 EStG) oder gewerbliche Einkünfte (§15 EStG) behandelt. Abschreibung: 2 % pro Jahr (50 Jahre) auf den Gebäudeanteil. Kaufnebenkosten (Grunderwerbsteuer 3,5–6,5 %, Notar, Makler) sind nicht direkt absetzbar, sondern werden auf die Nutzungsdauer verteilt.",
  },
  {
    question: "Gilt §7g auch für klassische Ferienimmobilien?",
    answer: "Nein. §7g EStG gilt nur für bewegliche Wirtschaftsgüter. Ein Ferienhaus oder eine Ferienwohnung sind unbewegliche Wirtschaftsgüter (Grundstück + Gebäude) und fallen nicht unter §7g. Das ist der entscheidende steuerliche Vorteil von Tiny Houses auf Vlemmix Trailern: sie gelten als beweglich.",
  },
  {
    question: "Was ist die 75-%-Regel bei Ferienimmobilien?",
    answer: "Wer eine Ferienimmobilie vermietet, muss in Deutschland belegen, dass die Vermietungsabsicht dauerhaft besteht. Als Faustregel gilt: Wer weniger als 75 % der ortsüblichen Vermietungszeit vermietet, dem kann das Finanzamt die Abzugsfähigkeit der Verluste verwehren (Liebhaberei). Das betrifft Privatvermieter ohne Betreiber.",
  },
  {
    question: "Ist eine Ferienimmobilie nach 10 Jahren steuerfrei verkaufbar?",
    answer: "Ja, für Privatpersonen gilt die 10-jährige Spekulationsfrist (§23 EStG). Nach 10 Jahren Haltedauer ist der Veräußerungsgewinn steuerfrei. Für gewerbliche Vermieter gilt dies nicht. Tiny Houses unterliegen als bewegliche Wirtschaftsgüter anderen Regeln – die Haltefrist ist deutlich kürzer.",
  },
];

export default function FerienimmobilieSteuerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite",
    "description": "Ferienimmobilie kaufen als Kapitalanlage: Steuern, AfA, Rendite und der Vergleich mit Tiny House Investments. Was sich 2026 wirklich lohnt.",
    "url": "https://tinyhouse.investments/wissen/ferienimmobilie-steuer",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-ferienimmobilie-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Ferienimmobilie", "item": "https://tinyhouse.investments/wissen/ferienimmobilie-steuer" }
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
      <Script id="faq-schema-ferienimmobilie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-ferienimmobilie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-ferienimmobilie-steuer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Ferienimmobilie</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuern & Rendite · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite
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
            Ferienimmobilien klingen attraktiv – hohe Nächtigungspreise, schöne Lage, steuerliche Absetzbarkeit. Doch was bleibt netto? Und warum Tiny Houses das steuerlich überlegene Modell sind.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-ferienimmobilie-aussen.webp" alt="Ferienimmobilie vs Tiny House – Steuervergleich" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ferienimmobilie", "§21 EStG", "AfA 2 %", "Spekulationsfrist", "vs. Tiny House"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ferienimmobilien klingen nach dem perfekten Investment: hohe Nächtigungspreise in touristischen Lagen, steuerliche Absetzbarkeit, ein Objekt das man selbst nutzen kann. Die Realität sieht für viele Investoren ernüchternder aus. Der Schlüsselpunkt: Der Steuervorteil einer klassischen Ferienimmobilie ist ein Bruchteil dessen, was ein bewegliches Wirtschaftsgut wie ein Tiny House bietet.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Die 2 %-Regelung der linearen AfA bedeutet: Wer ein Ferienhaus für 300.000 € kauft (Gebäudeanteil 200.000 €), darf 4.000 € pro Jahr abschreiben – über 50 Jahre. Ein Tiny House für 80.000 € schreibt im Kaufjahr durch IAB und Sonder-AfA bis zu 70 % ab. Das sind bis zu 56.000 € steuerlich anrechenbare Kosten in zwölf Monaten. Der Unterschied ist nicht marginal – er ist strukturell.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Ferienimmobilie: Die steuerliche Realität</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "🏗️", title: "AfA: 2 % über 50 Jahre", desc: "Bei einer 300.000 € Ferienimmobilie (Gebäudeanteil ~200.000 €) sind das 4.000 € AfA pro Jahr. Klingt viel, ist aber über 50 Jahre verteilt – kein Vergleich zu §7g mit 70 % Sofortabschreibung." },
              { icon: "💸", title: "Kaufnebenkosten: 10–15 %", desc: "Grunderwerbsteuer (3,5–6,5 %), Notar (~1,5 %), Makler (~3,5 %) – bei 300.000 € sind das 30.000–45.000 € Kaufnebenkosten, die nicht sofort absetzbar sind." },
              { icon: "⚖️", title: "§7g: Nicht anwendbar", desc: "Ferienimmobilien sind unbewegliche Wirtschaftsgüter. §7g EStG gilt nur für bewegliche – das schließt alle Grundstücke und Gebäude aus. Kein IAB, keine Sonder-AfA (40 %), keine degressive AfA (30 %)." },
              { icon: "📋", title: "Liebhaberei-Risiko", desc: "Das Finanzamt kann die Verlustverrechnung verweigern, wenn die Vermietungsquote zu niedrig ist. Selbstnutzung reduziert die abzugsfähigen Kosten anteilig." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-hero.webp" alt="Tiny House Ferienunterkunft" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Ferienimmobilie vs. Tiny House: Steuervergleich</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Steuermerkmal</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Ferienimmobilie</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["§7g IAB (50 % Vorzieheffekt)", "❌ Nein", "✅ Ja"],
                    ["Sonder-AfA 40 %", "❌ Nein", "✅ Ja"],
                    ["Degressive AfA 30 %", "❌ Nein", "✅ Ja"],
                    ["Standard AfA", "2 % / 50 Jahre", "20 % / 5 Jahre (linear)"],
                    ["Sofortabschreibung Jahr 1", "2 %", "bis 70 % (mit IAB)"],
                    ["Kaufnebenkosten", "10–15 %", "0 % (kein Grundbuch)"],
                    ["Steuereffekt (42 %, 100k €)", "~840 € / Jahr", "~33.600 € im Kaufjahr"],
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

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Steuerhinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Steuerangaben sind allgemeiner Natur und keine Steuerberatung. Individuelle Steuereffekte hängen von der persönlichen Situation ab. Bitte konsultiere einen Steuerberater.</p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-wohnzimmer.webp" alt="Tiny House Wohnbereich modern" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/rechner/iab" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB-Rechner →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA-Guide →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen/tiny-house-airbnb" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Airbnb Vermietung →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Ferienimmobilie als Kapitalanlage</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Das steuerlich überlegene Modell entdecken</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">§7g-Analyse und vollständiges Investor-Paket – kostenlos anfordern.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Unterlagen anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
