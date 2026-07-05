import { investorPaths } from "./data";

export default function DreiWege() {
  return (
    <section id="drei-wege" className="py-24 bg-[#f8f4ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Ihr Weg</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Drei Wege zu Ihrem TinyInvest
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Ob Steuern sparen, Mieteinnahmen erzielen oder das Wunschhaus finanzieren – TinyInvest hat das passende Modell für Sie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investorPaths.map((path) => (
            <div key={path.tag} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 card-hover flex flex-col">
              <div className="text-5xl mb-4">{path.icon}</div>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit ${
                path.color === "green" ? "bg-green-100 text-green-700" :
                path.color === "blue" ? "bg-blue-100 text-blue-700" :
                "bg-amber-100 text-amber-700"
              }`}>
                {path.tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-5 flex-grow">{path.desc}</p>
              <ul className="space-y-2 mb-6">
                {path.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="text-green-600 font-bold">✓</span> {h}
                  </li>
                ))}
              </ul>
              <a
                href={path.href}
                className={`w-full py-3 rounded-full font-semibold text-sm text-center transition-colors ${
                  path.color === "green" ? "bg-green-700 text-white hover:bg-green-800" :
                  path.color === "blue" ? "bg-blue-600 text-white hover:bg-blue-700" :
                  "bg-amber-500 text-white hover:bg-amber-600"
                }`}
              >
                {path.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
