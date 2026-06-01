import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubPageHeader from "../components/SubPageHeader";
import RenditeRechner from "../components/RenditeRechner";
import ModalButton from "../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { winWinModel } from "../components/data";

export const metadata = {
  title: "Tiny House Rendite 2026: 12–14 % IRR erklärt | TinyInvest",
  description: "Wie funktioniert die Tiny House Rendite? 40 % Mietauszahlung + §7g Steuereffekt = 12–14 % IRR p.a. Rechner & 5-Jahres-Cashflow-Modell.",
  keywords: "tiny house rendite, tiny house IRR, §7g rendite berechnen, passive einnahmen tiny house, ferienhausrendite 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/renditemodell",
  },
  openGraph: {
    title: "14 % IRR p.a. – Tiny House Renditemodell | TinyInvest",
    description: "Renditemodell für §7g-optimierte Tiny House Investments. NPV, Cashflow, Steuereffekt.",
    url: "https://tinyhouse.investments/renditemodell",
  },
};

export default function RenditeModellPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <SubPageHeader
        badge="Renditemodell · Win-Win-Win"
        title="Wie Ihr Kapital arbeitet. Vollständig transparent."
        subtitle="40 % der Einnahmen fließen monatlich an den Investor. 45 % sichern den Host-Betrieb. 15 % decken die Plattform. Jeder hat einen klaren Anreiz."
        img="/images/outside/tiny-house-escape-hero.webp"
      />

      {/* KPI bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "40 %", label: "Investor-Anteil", sub: "Netto-Einnahmen monatlich" },
              { value: "12–15 %", label: "IRR p.a.", sub: "Projiziert · Escape-Modell" },
              { value: "≈ 720 €", label: "Monatlicher Cashflow", sub: "Bei 60 % Belegung · 100 €/Nacht" },
              { value: "≈ 33 K€", label: "Liquidität Jahr 1", sub: "inkl. Steuererstattungen" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-data text-2xl font-black text-green-400">{s.value}</p>
                <p className="text-[11px] font-bold text-white mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Win-Win-Win Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Das Modell</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              Das Win-Win-Win Prinzip
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Drei Parteien profitieren — jede mit einem klaren Anreiz. Das macht das Modell nachhaltig und langfristig stabil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {winWinModel.map((party) => (
              <div key={party.party} className={`rounded-2xl p-7 border-2 ${party.color}`}>
                <div className="text-4xl mb-3">{party.icon}</div>
                <div className={`font-data text-3xl font-black mb-1 ${party.textColor}`}>{party.percent}</div>
                <h3 className="text-base font-black text-gray-900 mb-2">{party.party}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-3">{party.role}</p>
                <div className="bg-white/60 rounded-xl p-3">
                  <p className="text-[11px] text-gray-500 italic">{party.motivation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Example calculation */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white">
            <div className="text-center mb-8">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-2">Beispielrechnung</p>
              <h3 className="text-xl font-black">80.000 € Haus · 100 €/Nacht · 60 % Auslastung</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">Monatlicher Umsatz</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "18 Nächte × 100 €",  value: "1.800 €",  bold: false },
                    { label: "Host (bis 45 %)",     value: "− 810 €",  bold: false },
                    { label: "Plattform (~15 %)",   value: "− 270 €",  bold: false },
                    { label: "Investor (40 %)",     value: "= 720 €",  bold: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}>
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">Jahr 1 Liquidität</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Mietauszahlung (p.a.)", value: "+ 8.640 €",  bold: false },
                    { label: "IAB-Erstattung",         value: "+ 16.800 €", bold: false },
                    { label: "Sonder-AfA + AfA",       value: "+ 7.728 €",  bold: false },
                    { label: "Gesamt Liquidität",      value: "≈ 33.168 €", bold: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}>
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Investiert</p>
                <p className="font-data text-2xl font-black text-white">80.000 €</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Effektiv nach Steuer</p>
                <p className="font-data text-2xl font-black text-green-400">≈ 55.500 €</p>
              </div>
              <div className="bg-green-600 rounded-2xl p-5">
                <p className="text-green-200 text-[10px] mb-1">IRR p.a. (projiziert)</p>
                <p className="font-data text-2xl font-black text-white">12–15 %</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RenditeRechner */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Interaktiver Rechner</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 tracking-tight">Persönlichen Cashflow berechnen</h2>
            <p className="text-gray-500 text-sm mt-2">Passe Kaufpreis, Auslastung und Steuersatz an deine Situation an.</p>
          </div>
          <RenditeRechner />
        </div>
      </section>

      {/* Passives Einkommen */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Tiny House als Quelle für passives Einkommen</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-5">
            Ein Tiny House ist eine der wenigen Sachwertanlagen, die echtes tiny house passive einkommen generieren – ohne operativen Aufwand. Durch das Full-Service-Modell von tiny Escapes übernimmt ein professioneller Betreiber alle Aufgaben: Standortvermittlung, Buchungsmanagement, Gästebetreuung und Instandhaltung. Der Investor erhält seine 40 % monatlich ausgezahlt.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Wer ein Tiny House vermieten und Geld verdienen möchte, profitiert dabei von zwei Hebeln gleichzeitig: dem laufenden Cashflow aus der Vermietung und dem §7g-Steuereffekt, der in Jahr 1 den effektiven Kapitaleinsatz um bis zu 33.000 € reduziert. Das Ergebnis ist ein IRR von 12–15 % p.a. – deutlich über dem, was klassische Immobilien oder REITs realistisch erzielen.
          </p>
        </div>
      </section>

      {/* Risk disclosure */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Risikohinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Alle Rendite- und Cashflow-Angaben sind Projektionen auf Basis historischer Belegungsdaten und stellen keine Garantie zukünftiger Erträge dar.
              Investitionen in Sachwerte sind mit wirtschaftlichen Risiken verbunden. Bitte konsultieren Sie vor einer Investitionsentscheidung einen
              unabhängigen Finanz- und Steuerberater.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit zum nächsten Schritt?</p>
          <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Vollständiges Investor-Paket anfordern</h3>
          <p className="text-gray-500 text-sm mb-6">
            IRR-Analyse, §7g-Berechnung und individuelle Rendite-Prognose für Ihre Situation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Unterlagen anfordern →
            </ModalButton>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              §7g-Analyse lesen →
            </Link>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Weiterführende Artikel</p>
            <Link href="/wissen/kapitalanlage" className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-green-200 hover:shadow-sm transition-all text-left mb-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/images/outside/tiny-house-escape-hero.webp" alt="Kapitalanlage" fill className="object-cover group-hover:scale-105 transition-transform duration-300" priority sizes="(max-width: 768px) 100vw, 896px" />
              </div>
              <div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Flagship-Guide</span>
                <p className="font-black text-gray-900 text-[13px] mt-1 group-hover:text-green-700 transition-colors">Tiny House als Kapitalanlage 2026 →</p>
                <p className="text-gray-400 text-[11px]">Vergleich, 3 Renditesäulen, Risiken</p>
              </div>
            </Link>
            <Link href="/wissen/afa-abschreibung" className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-green-200 hover:shadow-sm transition-all text-left mb-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="§7g AfA Abschreibung" fill className="object-cover group-hover:scale-105 transition-transform duration-300" priority sizes="(max-width: 768px) 100vw, 896px" />
              </div>
              <div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Steuer-Guide</span>
                <p className="font-black text-gray-900 text-[13px] mt-1 group-hover:text-green-700 transition-colors">§7g AfA & Abschreibung erklärt →</p>
                <p className="text-gray-400 text-[11px]">IAB, Sonder-AfA, degressive AfA im Detail</p>
              </div>
            </Link>
            <Link href="/wissen/tiny-house-als-rendite" className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-green-200 hover:shadow-sm transition-all text-left">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/images/outside/tiny-house-renditeobjekt-aussen.webp" alt="Tiny House Rendite Cashflow" fill className="object-cover group-hover:scale-105 transition-transform duration-300" priority sizes="(max-width: 768px) 100vw, 896px" />
              </div>
              <div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Cashflow-Guide</span>
                <p className="font-black text-gray-900 text-[13px] mt-1 group-hover:text-green-700 transition-colors">Tiny House Rendite & Cashflow →</p>
                <p className="text-gray-400 text-[11px]">5-Jahres-Modell, IRR, Mieteinnahmen</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
