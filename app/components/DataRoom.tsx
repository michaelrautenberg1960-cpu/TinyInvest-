// DataRoom.tsx — Institutional document vault
// "Financial terminal" aesthetic: dark background, mono font, gated docs
import ModalButton from "./ModalButton";

const publicDocs = [
  {
    icon: "§",
    name: "§7g-Steueranalyse_2026.pdf",
    desc: "Steuerberater-geprüfte Analyse zu IAB, Sonder-AfA & degressiver AfA",
    tag: "Steuerrecht",
    tagColor: "bg-green-500/20 text-green-300",
  },
  {
    icon: "📊",
    name: "Win-Win-Win_Modellrechnung.xlsx",
    desc: "10-Jahres-Cashflow-Projektion · Basis: 55 % Belegung @ lokale Partner",
    tag: "Finanzen",
    tagColor: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: "🏗️",
    name: "Vlemmix_Trailer_Spezifikation.pdf",
    desc: "Technische Daten, Zertifizierungen, VIN-Vergabe, §7g-Konformität",
    tag: "Asset",
    tagColor: "bg-amber-500/20 text-amber-300",
  },
  {
    icon: "🏕️",
    name: "tiny_Escapes_Betreiberkonzept.pdf",
    desc: "Gruppenstruktur, Standortnetz, Belegungshistorie, Abrechnungsmodell",
    tag: "Operations",
    tagColor: "bg-purple-500/20 text-purple-300",
  },
];

const restrictedDocs = [
  {
    icon: "📋",
    name: "Host-Mustervertrag_v3.pdf",
    desc: "Bewirtschaftungsvertrag zwischen Investor & lokale Partner",
    tag: "Vertragsrecht",
  },
  {
    icon: "🗺️",
    name: "Standort-Gutachten_Harz_2026.pdf",
    desc: "Lage, Infrastruktur, Tourismusdaten, Renditeprognose (site-spezifisch)",
    tag: "Due Diligence",
  },
  {
    icon: "🛡️",
    name: "Versicherungspolice_Muster.pdf",
    desc: "Vollversicherung für mobile Wirtschaftsgüter – Feuer, Sturm, Diebstahl",
    tag: "Versicherung",
  },
  {
    icon: "💹",
    name: "IRR_Sensitivitaetsanalyse.xlsx",
    desc: "Szenariorechnung: 40 %–65 % Belegung × Preisrange × Steuervorteil",
    tag: "Finanzen",
  },
];

export default function DataRoom() {
  return (
    <section id="dataroom" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-data text-green-400 text-xs uppercase tracking-widest font-semibold">
            investor_data_room/
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-3 tracking-tight">
            Investor Data Room
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Alle wesentlichen Unterlagen für Ihre Prüfung – transparent aufbereitet.
            Öffentliche Dokumente sind sofort verfügbar. Vertrauliche Dokumente
            werden nach Anfrage und Verifikation freigegeben.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Public documents */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-white/5">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-data text-[11px] text-gray-400 uppercase tracking-widest">
                public/ — Sofort verfügbar
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {publicDocs.map((doc) => (
                <ModalButton
                  key={doc.name}
                  className="flex items-start gap-4 px-6 py-4 hover:bg-white/5 transition-colors group w-full text-left"
                >
                  <span className="text-xl mt-0.5 flex-shrink-0">{doc.icon}</span>
                  <div className="flex-grow min-w-0">
                    <p className="font-data text-[12px] text-green-400 group-hover:text-green-300 transition-colors truncate mb-0.5">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{doc.desc}</p>
                  </div>
                  <span className={`text-[9px] font-semibold px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${doc.tagColor}`}>
                    {doc.tag}
                  </span>
                </ModalButton>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-white/5 bg-white/5">
              <ModalButton className="text-[12px] text-green-400 font-semibold hover:text-green-300 transition-colors">
                Alle öffentlichen Dokumente anfordern →
              </ModalButton>
            </div>
          </div>

          {/* Restricted documents */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-white/5">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-data text-[11px] text-gray-400 uppercase tracking-widest">
                restricted/ — Auf Anfrage
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {restrictedDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-start gap-4 px-6 py-4 opacity-60"
                >
                  <span className="text-xl mt-0.5 flex-shrink-0 grayscale opacity-50">{doc.icon}</span>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-data text-[12px] text-gray-500 truncate">{doc.name}</p>
                      <span className="text-gray-600 flex-shrink-0">🔒</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{doc.desc}</p>
                  </div>
                  <span className="text-[9px] font-semibold px-2 py-1 rounded-full bg-white/5 text-gray-500 flex-shrink-0 whitespace-nowrap">
                    {doc.tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-white/5">
              <ModalButton className="block w-full py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white text-[13px] font-semibold text-center transition-colors">
                🔐 Investitionsunterlagen anfordern
              </ModalButton>
              <p className="text-[10px] text-gray-600 text-center mt-2">
                Freigabe nach Verifikation · Vertraulich & kostenfrei
              </p>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ⚠️ Alle Dokumente dienen zur Information und stellen keine Anlageberatung dar.
            IRR, NPV und Belegungsannahmen sind Projektionen basierend auf historischen lokale Partner Daten (50–60 % Ø Belegung).
            Tatsächliche Ergebnisse können abweichen. Bitte konsultieren Sie Ihren Steuerberater.
          </p>
        </div>
      </div>
    </section>
  );
}
