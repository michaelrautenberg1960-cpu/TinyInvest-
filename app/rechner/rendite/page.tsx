import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RenditeRechner from "../../components/RenditeRechner";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Rendite-Rechner 2026: Cashflow kostenlos berechnen | TinyInvest",
  description:
    "Berechne deinen monatlichen Cashflow und IRR für ein Tiny House Investment. Kaufpreis, Auslastung und Steuersatz eingeben – sofortiges 5-Jahres-Ergebnis. Kostenlos.",
  keywords:
    "tiny house rendite rechner, tiny house cashflow berechnen, tiny house IRR rechner, ferienhaus rendite berechnen 2026, tiny house investment rechner kostenlos",
  alternates: {
    canonical: "https://tinyhouse.investments/rechner/rendite",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Tiny House Rendite-Rechner 2026 | TinyInvest",
    description:
      "Cashflow, IRR und Steuereffekt für dein Tiny House Investment berechnen. Kostenloser Online-Rechner.",
    url: "https://tinyhouse.investments/rechner/rendite",
  },
};

const faqItems = [
  {
    question: "Was berechnet der Tiny House Rendite-Rechner?",
    answer:
      "Der Rechner berechnet deinen monatlichen Cashflow (40 % der Mieteinnahmen), den jährlichen Ertrag und die IRR (Internal Rate of Return) über 5 Jahre – inklusive §7g Steuereffekten. Du kannst Kaufpreis, Belegungsquote, Nächtigungspreis und Steuersatz anpassen.",
  },
  {
    question: "Was bedeutet IRR bei einem Tiny House Investment?",
    answer:
      "Der IRR (Internal Rate of Return / interner Zinsfuß) ist eine Renditekennzahl, die alle Cashflows über die Haltedauer berücksichtigt – inklusive des Wiederverkaufswerts am Ende. Ein IRR von 12 % bedeutet, dass dein Kapital effektiv mit 12 % p.a. verzinst wird. Das ist deutlich höher als klassische ETW-Mietrenditen (3–5 % brutto).",
  },
  {
    question: "Wie realistisch ist eine Belegungsquote von 60 %?",
    answer:
      "Eine Belegungsquote von 60 % entspricht ~18 Nächten pro Monat. Das ist ein konservativer Mittelwert für Standorte im tiny Escapes Netzwerk. In touristisch starken Lagen können 70–80 % erreicht werden, in schwachen Lagen liegt die Quote bei 40–50 %. Der Rechner lässt dir die Quote frei anpassen.",
  },
  {
    question: "Ist die Rendite garantiert?",
    answer:
      "Nein. Alle Angaben sind Projektionen auf Basis historischer Belegungsdaten und der aktuellen §7g-Gesetzeslage (Stand 2026). Die tatsächliche Rendite hängt von Auslastung, Standortqualität, Steuerrechtsänderungen und der Betriebsqualität des Hosts ab. Bitte konsultiere einen Finanzberater vor der Investitionsentscheidung.",
  },
];

export default function RenditeRechnerPage() {
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
        id="faq-schema-rendite-rechner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="webapp-schema-rendite-rechner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Tiny House Rendite-Rechner — Cashflow & IRR berechnen",
          "url": "https://tinyhouse.investments/rechner/rendite",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
          "description": "Kostenloser Rechner für monatlichen Cashflow und IRR eines Tiny House Investments. Kaufpreis, Auslastung und Steuersatz eingeben – 5-Jahres-Ergebnis sofort.",
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
            <span className="text-green-700 font-semibold">Rendite-Rechner</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kostenloses Tool · Investment-Analyse · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House Rendite-Rechner 2026: Cashflow & IRR berechnen
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Wie viel wirft dein Tiny House Investment wirklich ab? Gib Kaufpreis, Auslastung und
            Nächtigungspreis ein – der Rechner zeigt dir{" "}
            <strong className="text-gray-700">monatlichen Cashflow</strong>,{" "}
            <strong className="text-gray-700">5-Jahres-IRR</strong> und{" "}
            <strong className="text-gray-700">§7g Steuereffekte</strong> in Echtzeit.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mb-2">
            {["12–14 % IRR p.a.", "40 % Investor-Anteil", "§7g-Steuereffekt", "5-Jahres-Cashflow", "Kostenlos"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick KPIs */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "40 %", label: "Investor-Anteil Mieteinnahmen" },
              { value: "12–14 %", label: "IRR p.a. (projiziert)" },
              { value: "≈ 720 €", label: "Cashflow/Monat (Basis)" },
              { value: "3–5 J.", label: "Break-even inkl. §7g" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-data text-xl font-black text-green-400">{s.value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RenditeRechner />
        </div>
      </section>

      {/* Context / Vergleich */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">
            Tiny House Rendite vs. klassische ETW — der direkte Vergleich
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kennzahl</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Klassische ETW</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Einstiegspreis", "300.000–500.000 €", "ab 65.000 €"],
                    ["Brutto-Mietrendite", "3–5 % p.a.", "12–14 % IRR p.a."],
                    ["Monatlicher Cashflow", "800–1.500 €", "≈ 720 € (bei 60 % Auslastung)"],
                    ["Steuerabschreibung", "2 % / 50 Jahre", "§7g: bis 70 % im Kaufjahr"],
                    ["Break-even", "12–15 Jahre", "3–5 Jahre (inkl. §7g)"],
                    ["Zeitaufwand", "20–50 Std./Jahr", "~0 Std. (vollautomatisch)"],
                  ].map(([merkmal, etw, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-medium text-gray-700 text-[13px]">{merkmal}</td>
                      <td className="p-4 text-center text-[13px] text-gray-500">{etw}</td>
                      <td className="p-4 text-center text-[13px] font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/wissen/kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Kapitalanlage-Guide →
            </Link>
            <Link href="/rechner/iab" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              IAB-Rechner →
            </Link>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Vollständiges Renditemodell →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Rendite-Rechner</h2>
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
            <h3 className="text-xl font-black mb-3">Persönliche Rendite-Analyse anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              IRR-Prognose, §7g-Berechnung und Investitionsunterlagen – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Unterlagen anfordern →
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
