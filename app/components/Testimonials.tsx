import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section id="referenzen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Kundenstimmen</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Was unsere Investoren sagen
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Über 200 zufriedene Investoren vertrauen bereits auf TinyInvest – hier sind ihre Erfahrungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8f4ee] rounded-3xl p-8 flex flex-col justify-between border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed text-sm flex-grow mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact numbers */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-10">
          <p className="text-center text-white/60 text-sm uppercase tracking-widest mb-8 font-semibold">
            Unsere Bilanz – Zahlen die sprechen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "3+", label: "Aktive Assets (wachsend)" },
              { value: "2021", label: "Gegründet · wachsendes Volumen" },
              { value: "12–14 %*", label: "p.a. (Erfahrungswerte, standortabh.)" },
              { value: "100 %", label: "Eigentumsübertragung" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl md:text-4xl font-black text-green-400 mb-1">{item.value}</p>
                <p className="text-white/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
