import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubPageHeader from "../components/SubPageHeader";
import SteuerRechner from "../components/SteuerRechner";
import ModalButton from "../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { steuerCards, vergleichRows } from "../components/data";

export const metadata = {
  title: "Tiny House §7g Steuervorteile: IAB & AfA erklärt | TinyInvest",
  description: "§7g IAB, 40 % Sonder-AfA, 30 % degressive AfA — bis zu 33.000 € Liquiditätsvorteil im Kaufjahr. Für Selbstständige & GmbHs. §7g Rechner inklusive.",
  keywords: "§7g EStG tiny house, Investitionsabzugsbetrag IAB, Sonder-AfA Tiny House, tiny house IAB steuervorteil, §7g Rechner 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/steuervorteil",
  },
  openGraph: {
    title: "§7g Steuervorteil – Bis zu 40 % Erstattung | TinyInvest",
    description: "IAB, Sonder-AfA, lineare AfA. Im Jahr 1 bis zu 40 % des Kaufpreises zurück.",
    url: "https://tinyhouse.investments/steuervorteil",
  },
};

export default function SteuerVorteilPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <SubPageHeader
        badge="§7g EStG · Steuer-Analyse 2026"
        title="Der §7g Steuer-Hebel. Vollständig erklärt."
        subtitle="IAB, Sonder-AfA und degressive AfA kombiniert: Bis zu 70 % des Kaufpreises im Kaufjahr steuerlich ansetzen. Exklusiv für bewegliche Wirtschaftsgüter."
        img="/images/outside/tiny-house-escape-wald.webp"
      />

      {/* Intro stats bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "70 %", label: "Sofortabschreibung im Kaufjahr", sub: "Sonder-AfA + deg. AfA kombiniert" },
              { value: "50 %", label: "IAB im Vorjahr absetzbar", sub: "§7g Abs. 1 EStG" },
              { value: "42 %", label: "Grenzsteuersatz-Beispiel", sub: "Gutverdienende Arbeitnehmer" },
              { value: "≈ 33 K€", label: "Liquiditätsvorteil Jahr 1", sub: "Bei 80.000 € Investition" },
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

      {/* 3 Steuer-Hebel Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Die drei Hebel</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              IAB · Sonder-AfA · Degressive AfA
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Da Tiny Houses auf Vlemmix Trailern stehen (VIN, keine Bodenverbindung), gelten sie als
              bewegliche Wirtschaftsgüter — nicht als Immobilien. Das öffnet drei steuerliche Hebel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steuerCards.map((card) => (
              <div key={card.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
                <div className="text-4xl mb-4">{card.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{card.label}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
                </div>
                <h3 className="text-base font-black text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive tax calculator */}
          <div className="mb-4 text-center">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Interaktiver Rechner</span>
            <h3 className="text-xl font-black text-gray-900 mt-2 mb-1">Persönlichen Steuervorteil berechnen</h3>
            <p className="text-gray-400 text-sm">Schiebe die Regler – Echtzeit-Schätzung auf Basis §7g EStG.</p>
          </div>
          <SteuerRechner />
        </div>
      </section>

      {/* 3-Varianten Vergleich */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerberater-Analyse · Stand 2026</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              Steuerbooster 2026: Drei-Varianten-Vergleich
            </h2>
            <p className="text-gray-500 text-sm mt-2">Basis: 100.000 € Investition · 42 % Grenzsteuersatz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Variante 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">Variante 1</span>
                <span className="text-gray-400 text-[11px]">Altes Recht</span>
              </div>
              <h4 className="font-black text-gray-900 text-base mb-1">8 Jahre linear</h4>
              <p className="text-gray-400 text-[11px] mb-4">12,5 % p.a. · ohne Sonder-AfA</p>
              <div className="space-y-2 mb-4">
                {[
                  { jahr: "Jahr 1", afa: "12.500 €", kumuliert: "12.500 €" },
                  { jahr: "Jahr 2", afa: "12.500 €", kumuliert: "25.000 €" },
                  { jahr: "Jahr 3", afa: "12.500 €", kumuliert: "37.500 €" },
                ].map((r) => (
                  <div key={r.jahr} className="flex justify-between text-[12px] border-b border-gray-50 pb-2">
                    <span className="text-gray-500">{r.jahr}</span>
                    <span className="text-gray-700 font-medium">{r.afa}</span>
                    <span className="text-gray-400 font-data">∑ {r.kumuliert}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-[10px] text-gray-400">3 Jahre kumuliert</p>
                <p className="font-data text-2xl font-black text-gray-500">37,5 %</p>
              </div>
            </div>

            {/* Variante 2 */}
            <div className="bg-white border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full">Variante 2</span>
                <span className="text-green-600 text-[11px]">Neu 2026 · ohne IAB</span>
              </div>
              <h4 className="font-black text-gray-900 text-base mb-1">40 % + 30 % im Kaufjahr</h4>
              <p className="text-gray-400 text-[11px] mb-4">Sonder-AfA + degressive AfA kombiniert</p>
              <div className="space-y-2 mb-4">
                {[
                  { jahr: "Jahr 1 (2026)", afa: "70.000 €", kumuliert: "70.000 €", highlight: true },
                  { jahr: "Jahr 2 (2027)", afa: "9.000 €",  kumuliert: "79.000 €", highlight: false },
                  { jahr: "Jahr 3 (2028)", afa: "6.300 €",  kumuliert: "85.300 €", highlight: false },
                ].map((r) => (
                  <div key={r.jahr} className={`flex justify-between text-[12px] border-b pb-2 ${r.highlight ? "border-green-100" : "border-gray-50"}`}>
                    <span className="text-gray-500">{r.jahr}</span>
                    <span className={`font-medium ${r.highlight ? "text-green-700 font-bold" : "text-gray-700"}`}>{r.afa}</span>
                    <span className="text-gray-400 font-data">∑ {r.kumuliert}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-[10px] text-gray-400">3 Jahre kumuliert</p>
                <p className="font-data text-2xl font-black text-green-700">85,3 %</p>
                <p className="text-[10px] text-green-600 mt-0.5">vs. 37,5 % altes Recht</p>
              </div>
            </div>

            {/* Variante 3 */}
            <div className="bg-green-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/40 text-green-200 text-[10px] font-bold px-3 py-1 rounded-full">Variante 3</span>
                <span className="text-green-300 text-[11px] font-semibold">Maximum-Hebel ⚡</span>
              </div>
              <h4 className="font-black text-white text-base mb-1">IAB + 40 % + 30 %</h4>
              <p className="text-green-200/70 text-[11px] mb-4">IAB im Vorjahr + voller Booster im Kaufjahr</p>
              <div className="space-y-2 mb-4">
                {[
                  { jahr: "2025 (Vorjahr)", steuer: "–50.000 €", highlight: false },
                  { jahr: "2026 (Kaufjahr)", steuer: "–20.000 €", highlight: true },
                  { jahr: "2027",            steuer: "–9.000 €",  highlight: false },
                  { jahr: "2028",            steuer: "–6.300 €",  highlight: false },
                ].map((r) => (
                  <div key={r.jahr} className={`flex justify-between text-[12px] border-b pb-2 ${r.highlight ? "border-green-400/40" : "border-green-600"}`}>
                    <span className="text-green-200/70">{r.jahr}</span>
                    <span className={`font-medium ${r.highlight ? "text-white font-bold" : "text-green-200"}`}>{r.steuer}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-600/50 rounded-xl p-3 text-center">
                <p className="text-[10px] text-green-200">Timing-Vorteil</p>
                <p className="text-green-200 text-[11px] font-bold mt-0.5">Aufwand ins Vorjahr verlagern</p>
                <p className="text-[10px] text-green-300/60 mt-0.5">Ideal bei hohem Gewinn 2025</p>
              </div>
            </div>
          </div>

          {/* Fazit */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-4">Fazit vom Steuerberater</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13px]">
              {[
                { icon: "🪦", text: <><strong className="text-gray-900">Altes Recht ist praktisch tot.</strong> 37,5 % nach 3 Jahren vs. 85,3 % – kein seriöser Steuerberater empfiehlt heute noch die lineare AfA allein.</> },
                { icon: "⚡", text: <><strong className="text-gray-900">Der Booster ohne IAB ist bereits extrem stark.</strong> 40 % Sonder-AfA + 30 % degressiv = 70 % Sofortabschreibung im Kaufjahr.</> },
                { icon: "🎯", text: <><strong className="text-gray-900">IAB ist ein Timing-Instrument.</strong> Sinnvoll bei hohem Gewinn im Vorjahr – um Progressionsspitzen zu glätten.</> },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <p className="text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich: TinyInvest vs ETW */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">TinyInvest vs. Klassische Immobilie</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Klassische ETW</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">TinyInvest-Modell</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {vergleichRows.map(([merkmal, etw, tiny]) => (
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

          {/* Factoid */}
          <div className="mt-8 bg-green-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-5xl flex-shrink-0">💡</div>
              <div>
                <p className="text-base font-black mb-2">Die härteste Immobilienwahrheit Deutschlands:</p>
                <p className="text-green-100 text-[13px] leading-relaxed">
                  Eine 70 m² Wohnung in Berlin kostet <strong className="text-white">~440.000 €</strong>.
                  Davon gehen <strong className="text-white">~44.000 € direkt an Notar, Makler und Finanzamt</strong> — noch bevor du einen Euro tilgst.
                  Das ist mehr als der halbe Kaufpreis eines <strong className="text-white">vollwertigen TinyInvest Comfort (60.000 €)</strong>.
                </p>
                <p className="text-green-200 text-[12px] mt-3 font-semibold">
                  → Mit TinyInvest kaufst du ein vollständiges Haus zum Preis der Kaufnebenkosten einer Berliner Wohnung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit zum nächsten Schritt?</p>
          <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Investitionsunterlagen anfordern</h3>
          <p className="text-gray-500 text-sm mb-6">
            Erhalten Sie die vollständige §7g-Analyse für Ihre persönliche Steuersituation plus individuelle Beratung.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Unterlagen anfordern →
            </ModalButton>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              Renditemodell ansehen →
            </Link>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Weiterführende Artikel</p>
            <Link href="/wissen/afa-abschreibung" className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-green-200 hover:shadow-sm transition-all text-left">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/images/outside/tiny-house-escape-wald.webp" alt="AfA Abschreibung" fill className="object-cover group-hover:scale-105 transition-transform duration-300" priority sizes="(max-width: 768px) 100vw, 896px" />
              </div>
              <div>
                <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">Steuer-Deep-Dive</span>
                <p className="font-black text-gray-900 text-[13px] mt-1 group-hover:text-green-700 transition-colors">§7g AfA & Sonder-Abschreibung erklärt →</p>
                <p className="text-gray-400 text-[11px]">IAB, Sonder-AfA 40 %, degressive AfA 30 %</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
