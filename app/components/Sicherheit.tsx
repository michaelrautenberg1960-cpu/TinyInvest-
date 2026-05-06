import Image from "next/image";
import { sicherheitItems } from "./data";

export default function Sicherheit() {
  return (
    <section id="sicherheit" className="py-24 bg-[#f8f4ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/Tinyhouseinside.webp" alt="Tiny House Innenraum" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏅</span>
                <div>
                  <p className="font-bold text-gray-900">Sachwert-Investition</p>
                  <p className="text-sm text-gray-500">Bewegliches Wirtschaftsgut · §7g EStG fähig</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Sicherheit & Vertrauen</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-6">
              Ihr Investment ist<br />
              <span className="text-green-700">real & flexibel abgesichert</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Im Gegensatz zu einer klassischen Immobilie im Ausland sind Sie nicht an einen Standort gebunden. Ihr TinyInvest-Haus kann jederzeit transportiert werden – Ihr Kapital bleibt immer mobil.
            </p>

            <div className="space-y-4">
              {sicherheitItems.map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
