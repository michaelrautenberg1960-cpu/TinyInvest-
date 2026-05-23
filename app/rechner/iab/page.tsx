import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SteuerRechner from "../../components/SteuerRechner";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "IAB-Rechner 2026: §7g Steuerersparnis kostenlos berechnen | TinyInvest",
  description:
    "Berechne deine §7g IAB Steuerersparnis kostenlos. Investitionsabzugsbetrag + Sonder-AfA + degressive AfA für Tiny House Investments 2026. Sofort-Ergebnis.",
  keywords:
    "IAB rechner 2026, investitionsabzugsbetrag berechnen, §7g rechner kostenlos, sonder-afa rechner tiny house, tiny house steuer berechnen",
  alternates: {
    canonical: "https://tinyhouse.investments/rechner/iab",
  },
  openGraph: {
    title: "IAB-Rechner 2026: §7g Steuerersparnis berechnen | TinyInvest",
    description:
      "Kostenloser §7g Rechner: IAB, Sonder-AfA (40 %), degressive AfA (30 %). Sofort-Ergebnis für dein Tiny House Investment.",
    url: "https://tinyhouse.investments/rechner/iab",
  },
};

const faqItems = [
  {
    question: "Was berechnet dieser IAB-Rechner?",
    answer:
      "Der Rechner berechnet deinen steuerlichen Liquiditätsvorteil durch §7g EStG: Investitionsabzugsbetrag (IAB, 50 % im Vorjahr), Sonder-AfA (40 % im Kaufjahr) und degressive AfA (30 % im Kaufjahr). Das Ergebnis zeigt, wie viel du vom Finanzamt effektiv zurückbekommst – abhängig von Kaufpreis und Grenzsteuersatz.",
  },
  {
    question: "Gilt §7g für jeden Tiny House Käufer?",
    answer:
      "§7g EStG gilt für alle, die das Tiny House im Rahmen einer Einkunftsart nutzen (z.B. Vermietung und Verpachtung). Da Tiny Houses auf Vlemmix Trailern als bewegliche Wirtschaftsgüter gelten (VIN/FIN, keine feste Bodenverbindung), ist §7g vollständig anwendbar – anders als bei Immobilien.",
  },
  {
    question: "Wie genau ist die Berechnung?",
    answer:
      "Die Berechnung ist eine Schätzung auf Basis der gesetzlichen AfA-Sätze (Stand 2026). Die individuelle Steuerersparnis kann abweichen – abhängig von deiner Gesamtsteuersituation, der Einkunftsart und ob du den IAB tatsächlich im Vorjahr gebildet hast. Bitte konsultiere deinen Steuerberater für eine verbindliche Berechnung.",
  },
  {
    question: "Was ist der Unterschied zwischen IAB und Sonder-AfA?",
    answer:
      "Der IAB (Investitionsabzugsbetrag) ist ein Vorzieheffekt: Du setzt die Steuerwirkung ein Jahr VOR dem Kauf an. Die Sonder-AfA (40 %) greift im Kaufjahr – zusätzlich zur degressiven AfA (30 %). Zusammen ergibt das 70 % Sofortabschreibung im Kaufjahr.",
  },
];

export default function IABRechnerPage() {
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

      <Script
        id="faq-schema-iab-rechner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="webapp-schema-iab-rechner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "IAB-Rechner — §7g Steuerersparnis berechnen",
          "url": "https://tinyhouse.investments/rechner/iab",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
          "description": "Kostenloser Rechner für den Investitionsabzugsbetrag (§7g IAB), Sonder-AfA (40 %) und degressive AfA (30 %) für Tiny House Investments.",
          "provider": { "@type": "Organization", "name": "TinyInvest", "url": "https://tinyhouse.investments" }
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Rechner</span>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">IAB-Rechner</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kostenloses Tool · §7g EStG · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            IAB-Rechner 2026: Tiny House Steuerersparnis berechnen
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Gib deinen Kaufpreis und Grenzsteuersatz ein – der Rechner zeigt dir sofort, wie viel
            Liquiditätsvorteil du durch <strong className="text-gray-700">§7g IAB</strong>,{" "}
            <strong className="text-gray-700">Sonder-AfA (40 %)</strong> und{" "}
            <strong className="text-gray-700">degressive AfA (30 %)</strong> realisierst.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mb-2">
            {["§7g EStG", "IAB 50 %", "Sonder-AfA 40 %", "Deg. AfA 30 %", "Kostenlos"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SteuerRechner />
        </div>
      </section>

      {/* Context text for SEO */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">
            Wie funktioniert der §7g IAB-Rechner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                num: "01",
                title: "Kaufpreis eingeben",
                desc: "Gib den geplanten Kaufpreis deines Tiny Houses ein (ab 65.000 € für das Comfort-Modell).",
              },
              {
                num: "02",
                title: "Steuersatz wählen",
                desc: "Wähle deinen persönlichen Grenzsteuersatz. 42 % gilt für Einkommen ab ~62.000 € p.a.",
              },
              {
                num: "03",
                title: "Ergebnis ablesen",
                desc: "Der Rechner zeigt dir Steuerersparnis durch IAB, Sonder-AfA und degressive AfA – aufgeteilt nach Jahr.",
              },
            ].map((s) => (
              <div key={s.num} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className="font-data text-2xl font-black text-green-700 mb-2">{s.num}</div>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{s.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Dieser Rechner liefert eine Schätzung – keine Steuerberatung. Die individuelle Steuerersparnis
              hängt von deiner Gesamtsteuersituation ab. Bitte konsultiere deinen Steuerberater, bevor du
              eine Investitionsentscheidung triffst.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              §7g AfA-Guide lesen →
            </Link>
            <Link href="/rechner/rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Rendite-Rechner →
            </Link>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Vollständige Steueranalyse →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: IAB-Rechner & §7g</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Nächster Schritt</p>
            <h3 className="text-xl font-black mb-3">Persönliche §7g-Analyse anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir stellen dir das Steuer-Factsheet zusammen, das dein Steuerberater braucht – kostenlos.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Steuer-Factsheet anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
