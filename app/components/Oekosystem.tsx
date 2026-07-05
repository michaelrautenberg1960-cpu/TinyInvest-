import { oekosystemItems } from "./data";

export default function Oekosystem() {
  return (
    <section id="oekosystem" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
            Was uns einzigartig macht
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Alles, was Sie bisher aufgehalten hat –{" "}
            <span className="text-green-400">haben wir gelöst.</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            TinyInvest vermittelt den Direktkauf und verbindet Sie auf Wunsch mit lokalen Betreiberpartnern, die Standort, Vermietung und Buchungsmanagement übernehmen können – sowie mit Steuerberatern und Finanzierungspartnern.
            Sie kaufen. Lokale Partner können den Betrieb übernehmen.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {oekosystemItems.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.highlight}
                </span>
              </div>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-800 to-green-600 p-10 text-center">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative">
            <p className="text-4xl mb-4">🚀</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Sie kaufen. Lokale Partner können den Betrieb übernehmen.
            </h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
              Geringer Aufwand: Auf Wunsch übernehmen lokale Partner den Betrieb. Mieteinnahmen erzielen Sie als Eigentümer – abhängig von Standort und Auslastung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="bg-white text-green-800 font-bold px-8 py-4 rounded-full text-base hover:bg-green-50 transition-colors shadow-lg"
              >
                Unverbindliches Erstgespräch anfragen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
