// Ueber.tsx — "Über TinyInvest" platform stats + world deployment map (server component)
import ModalButton from "./ModalButton";
import StandortMapLazy from "./StandortMapLazy";

const platformMetrics = [
  {
    value: "200+",
    unit: "",
    label: "Registrierte Investoren",
    desc: "Täglich neue Anfragen von Gutverdieners, Freiberuflern und Unternehmern, die ihr Steuer-Exposure reduzieren wollen.",
  },
  {
    value: "12+",
    unit: "",
    label: "Kooperierende Hosts",
    desc: "Geprüfte Grundstücks- und Standortpartner in Deutschland und der EU – bereit für Ihren Asset-Einsatz.",
  },
  {
    value: "1,2 Mio.",
    unit: "€",
    label: "Vermittlungsvolumen",
    desc: "Gesamtes vermitteltes Investitionsvolumen über die TinyInvest Plattform seit Launch.",
  },
  {
    value: "4",
    unit: "",
    label: "Aktive Länder",
    desc: "Deutschland, Österreich, Kroatien und Rumänien – EU-weit einsetzbar als bewegliches Wirtschaftsgut.",
  },
];

export default function Ueber() {
  return (
    <section id="ueber" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Über TinyInvest</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Marktplatz für §7g-fähige mobile Wirtschaftsgüter
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            TinyInvest verbindet Käufer mit §7g-optimierten, mobilen Sachwerten —
            auf Wunsch vermitteln wir Kontakt zu lokalen Betreiberpartnern auf geprüften Standorten in ganz Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Platform metrics */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {platformMetrics.map((m) => (
                <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-data text-2xl font-black text-gray-900">{m.value}</span>
                    {m.unit && <span className="font-data text-sm font-bold text-gray-500">{m.unit}</span>}
                  </div>
                  <p className="text-[12px] font-bold text-gray-700 mb-1">{m.label}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Ecosystem explanation */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-[11px] text-green-700 font-semibold uppercase tracking-widest mb-3">Unsere weltweiten Referenzen</p>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                Von Deutschland über Österreich bis Kroatien – wir vermitteln §7g-konforme Mobile Assets auf
                zertifizierten Standorten. Auf Wunsch übernehmen lokale Partner Hosting, Gäste und Abrechnung.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Aktive Assets", value: "3", icon: "🏡" },
                  { label: "Assets in Planung", value: "4", icon: "🗺️" },
                  { label: "Ø Nachtrate", value: "120–180 €", icon: "💶" },
                  { label: "Ø Belegung", value: "50–60 %", icon: "📅" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-base">{s.icon}</span>
                    <div>
                      <p className="font-data text-sm font-black text-gray-900 leading-none">{s.value}</p>
                      <p className="text-[10px] text-gray-500">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive World Map (lazy-loaded client component) */}
          <div>
            <StandortMapLazy />

            {/* CTA */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <ModalButton className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-full text-[13px] text-center transition-all">
                Investitionsunterlagen anfordern →
              </ModalButton>
              <ModalButton className="flex-1 border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-3 rounded-full text-[13px] text-center transition-all">
                Als Host bewerben →
              </ModalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
