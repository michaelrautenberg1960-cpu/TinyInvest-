// Betreiber.tsx — Lokale Partner / Betreiberstruktur

const locations = [
  { name: "Harz", region: "Niedersachsen", status: "Aktiv", units: 2, occ: "55 %" },
  { name: "Schwarzwald", region: "Baden-Württemberg", status: "Aktiv", units: 1, occ: "60 %" },
  { name: "Ostseeküste", region: "Mecklenburg-VP", status: "Planung", units: 3, occ: "—" },
  { name: "Brandenburg", region: "Brandenburg", status: "Planung", units: 2, occ: "—" },
];

export default function Betreiber() {
  return (
    <section id="betreiber" className="py-24 bg-platform border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Struktur · Direktkauf & Betrieb</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight">
            Ihr Kauf. Optionaler Betrieb über lokale Partner.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            TinyInvest vermittelt den Direktkauf und die Steueroptimierung.
            Lokale Partner können das Asset auf Wunsch bewirtschaften.
            Sie bleiben 100&nbsp;% Eigentümer des physischen Wirtschaftsguts.
          </p>
        </div>

        {/* Legal Structure Diagram */}
        <div className="mb-14">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">Rechtliche Struktur</p>
          <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-4xl mx-auto">

            {/* Investor box */}
            <div className="flex-1 bg-white border-2 border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl mb-2">💼</div>
              <p className="font-black text-gray-900 text-sm mb-1">Der Investor</p>
              <p className="text-[12px] text-gray-400 mb-3">100&nbsp;% Eigentümer</p>
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-[11px] font-semibold text-green-700">Kaufvertrag mit Hersteller</p>
                <p className="text-[11px] text-green-600">Kein Kapital an TinyInvest</p>
              </div>
            </div>

            {/* Arrow + labels */}
            <div className="flex md:flex-col items-center justify-center gap-3 md:gap-1 flex-row py-2 md:py-0">
              <div className="flex-1 md:flex-none flex flex-col items-center gap-1">
                <div className="w-full md:w-px md:h-8 h-px bg-gray-200" />
                <span className="text-[10px] text-gray-400 text-center">Kaufvertrag</span>
              </div>
              <div className="flex-1 md:flex-none flex flex-col items-center gap-1">
                <div className="w-full md:w-px md:h-8 h-px bg-gray-200" />
                <span className="text-[10px] text-gray-400 text-center">Management-Auftrag</span>
              </div>
            </div>

            {/* TinyInvest box */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl mb-2">🏗️</div>
              <p className="font-black text-gray-900 text-sm mb-1">TinyInvest</p>
              <p className="text-[12px] text-gray-400 mb-3">Finanz-Infrastruktur</p>
              <div className="space-y-1.5">
                {["§7g IAB-Strukturierung", "Vlemmix Asset-Kauf", "Steuerberater-Netzwerk", "Finanzierungspartner"].map((f) => (
                  <p key={f} className="text-[11px] text-gray-500 bg-gray-50 rounded-lg px-2 py-1">{f}</p>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center gap-1 py-0">
              <div className="w-px h-8 bg-gray-200" />
              <span className="text-[10px] text-gray-400">Betriebsauftrag</span>
              <div className="w-px h-8 bg-gray-200" />
            </div>

            {/* Lokaler Partner box */}
            <div className="flex-1 bg-white border border-green-200 rounded-2xl p-6 text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-[9px] font-bold px-2 py-1 rounded-bl-xl">
                Auf Wunsch
              </div>
              <div className="text-2xl mb-2">🏕️</div>
              <p className="font-black text-green-700 text-sm">Lokaler Partner</p>
              <p className="text-[12px] text-gray-400 mt-1 mb-3">Operations-Partner (optional)</p>
              <div className="space-y-1.5">
                {["Standort & Placement", "Gäste & Buchungen", "Cleaning & Check-in", "Monatliche Abrechnung"].map((f) => (
                  <p key={f} className="text-[11px] text-gray-500 bg-green-50 rounded-lg px-2 py-1">{f}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Legal note */}
          <p className="text-center text-[11px] text-gray-400 mt-5 max-w-2xl mx-auto">
            * Der Käufer schließt zwei separate Verträge ab: (1) Kaufvertrag mit dem Hersteller für das bewegliche Wirtschaftsgut, (2) Betreibervertrag direkt mit dem lokalen Partner (nicht mit TinyInvest). TinyInvest hält zu keinem Zeitpunkt Käufergelder.
          </p>
        </div>

        {/* lokale Partner stats + locations */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left: Stats */}
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-7 text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">Lokale Partner · Erfahrungswerte</span>
            </div>
            <div className="space-y-5">
              {[
                { label: "Ø Belegung", value: "50–60 %", note: "Erfahrungswerte, standortabhängig" },
                { label: "Ø Nachtrate", value: "120–180 €", note: "Je nach Standort & Saison" },
                { label: "Investor-Anteil", value: "40 %", note: "Der Brutto-Einnahmen monatlich" },
                { label: "Host-Anteil", value: "bis 45 %", note: "Performance-basiert (Anreizmodell)" },
              ].map((s) => (
                <div key={s.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-end justify-between mb-0.5">
                    <span className="text-[12px] text-gray-400">{s.label}</span>
                    <span className="font-data text-lg font-black text-green-400 tracking-tight">{s.value}</span>
                  </div>
                  <p className="text-[11px] text-gray-600">{s.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] text-gray-500">
              Erfahrungswerte lokaler Partner · standortabhängig · keine garantierte Rendite
            </p>
          </div>

          {/* Right: Location table */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <p className="text-[12px] font-semibold text-gray-700 uppercase tracking-widest">Standort-Netzwerk</p>
              <span className="text-[11px] text-gray-400">Laufend erweitert</span>
            </div>
            <div className="divide-y divide-gray-50">
              {locations.map((loc) => (
                <div key={loc.name} className="px-6 py-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-sm">{loc.name}</span>
                    <span className="text-[11px] text-gray-400">{loc.region}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center hidden sm:block">
                      <p className="font-data text-[12px] font-bold text-gray-700">{loc.units} Units</p>
                      <p className="text-[10px] text-gray-400">Kapazität</p>
                    </div>
                    <div className="text-center hidden sm:block">
                      <p className="font-data text-[12px] font-bold text-green-700">{loc.occ}</p>
                      <p className="text-[10px] text-gray-400">Belegung</p>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        loc.status === "Aktiv"
                          ? "badge-available"
                          : "badge-planning"
                      }`}
                    >
                      {loc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-[11px] text-gray-400">
                Du hast Land oder einen Stellplatz? {" "}
                <a href="#kontakt" className="text-green-700 font-semibold hover:underline">Jetzt als Host bewerben →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
