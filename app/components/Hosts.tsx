import Link from "next/link";
import ModalButton from "./ModalButton";

const hostBenefits = [
  {
    icon: "💰",
    title: "Bis zu 45 % der Einnahmen",
    desc: "Als Host verdienst du bis zu 45 % aller Mieteinnahmen – monatlich, transparent abgerechnet. Je besser deine Gäste-Bewertungen, desto höher dein Anteil.",
  },
  {
    icon: "🏡",
    title: "Kein Eigenkapital nötig",
    desc: "Du brauchst kein Geld für das Tiny House aufbringen. Der Investor kauft das Haus – du stellst das Grundstück und kümmerst dich vor Ort.",
  },
  {
    icon: "🛎️",
    title: "Plattform übernimmt Marketing",
    desc: "TinyInvest und lokale Partner kümmern sich um Buchungen auf Airbnb und eigenen Kanälen. Du musst nicht selbst inserieren oder werben.",
  },
  {
    icon: "📊",
    title: "Transparentes Dashboard",
    desc: "Alle Buchungen, Auszahlungen und Bewertungen in einem übersichtlichen Host-Dashboard. Volle Kontrolle, kein Papierkram.",
  },
  {
    icon: "🌍",
    title: "Deutschland & Europa",
    desc: "Das Modell funktioniert in Deutschland, Österreich, Italien, Schweden und weiteren EU-Ländern. Dein Grundstück – egal wo – kann ein Tiny House aufnehmen.",
  },
  {
    icon: "🤝",
    title: "Volle Unterstützung",
    desc: "TinyInvest begleitet dich beim Onboarding, der Standortprüfung, der Genehmigungsfrage und dem Aufbau. Du bist nicht allein.",
  },
];

const hostSteps = [
  {
    num: "1",
    title: "Standort prüfen",
    desc: "Du hast ein Grundstück, einen Garten oder einen Stellplatz? Wir prüfen kostenlos, ob der Standort für ein Tiny House geeignet ist.",
  },
  {
    num: "2",
    title: "Matching mit Investor",
    desc: "TinyInvest vermittelt dich mit einem passenden Investor, der das Tiny House kauft. Du schließt einen Betreibervertrag ab.",
  },
  {
    num: "3",
    title: "Aufbau & Ausstattung",
    desc: "Das Tiny House wird geliefert, aufgebaut und buchungsbereit eingerichtet. Wir koordinieren alles – du musst nur dabei sein.",
  },
  {
    num: "4",
    title: "Vermietung starten",
    desc: "lokale Partner listet das Haus auf Airbnb und eigenen Kanälen. Erste Buchungen kommen typisch nach 2–4 Wochen.",
  },
  {
    num: "5",
    title: "Monatlich verdienen",
    desc: "Du erhältst monatlich bis zu 45 % der Netto-Mieteinnahmen auf dein Konto. Transparent, pünktlich, leistungsbasiert.",
  },
];

export default function Hosts() {
  return (
    <section id="hosts" className="py-24 bg-[#f8f4ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Für Hosts & Grundstückseigentümer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Dein Grundstück.{" "}
            <span className="text-amber-600">Unser Tiny House.</span>{" "}
            Gemeinsam verdienen.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Du hast ein Grundstück, einen freien Stellplatz oder ein Stück Land?
            Wir bringen das Tiny House – vollfinanziert vom Investor. Du verdienst bis zu 45 % der Mieteinnahmen,
            ohne eigenes Kapital einzusetzen.
          </p>
        </div>

        {/* Win-Win Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-xl font-black text-amber-800 mb-2">Du als Host</h3>
            <p className="text-amber-700 font-bold text-3xl mb-1">bis 45 %</p>
            <p className="text-amber-600 text-sm">der monatlichen Einnahmen</p>
            <ul className="text-left mt-4 space-y-2 text-[13px] text-amber-700">
              <li className="flex gap-2"><span>✓</span> Grundstück bereitstellen</li>
              <li className="flex gap-2"><span>✓</span> Check-in & Reinigung</li>
              <li className="flex gap-2"><span>✓</span> Gäste-Betreuung vor Ort</li>
              <li className="flex gap-2"><span>✓</span> Pflege des Hauses</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-black text-green-800 mb-2">Der Investor</h3>
            <p className="text-green-700 font-bold text-3xl mb-1">40 %</p>
            <p className="text-green-600 text-sm">passives Monatseinkommen</p>
            <ul className="text-left mt-4 space-y-2 text-[13px] text-green-700">
              <li className="flex gap-2"><span>✓</span> Kauft das Tiny House</li>
              <li className="flex gap-2"><span>✓</span> Trägt Anschaffungskosten</li>
              <li className="flex gap-2"><span>✓</span> Profitiert von §7g Steuer</li>
              <li className="flex gap-2"><span>✓</span> 100 % passiv</li>
            </ul>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-black text-gray-800 mb-2">TinyInvest</h3>
            <p className="text-gray-600 font-bold text-3xl mb-1">~15 %</p>
            <p className="text-gray-500 text-sm">Plattform-Fee</p>
            <ul className="text-left mt-4 space-y-2 text-[13px] text-gray-600">
              <li className="flex gap-2"><span>✓</span> Buchungsplattform</li>
              <li className="flex gap-2"><span>✓</span> Marketing & Airbnb</li>
              <li className="flex gap-2"><span>✓</span> Zahlungsabwicklung</li>
              <li className="flex gap-2"><span>✓</span> Qualitätskontrolle</li>
            </ul>
          </div>
        </div>

        {/* Benefits + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left: Benefits */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">
              🌟 Warum du als Host mitmachen solltest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hostBenefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <span className="text-3xl">{b.icon}</span>
                  <h4 className="font-black text-gray-900 text-sm mt-2 mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 sticky top-28">
            <h3 className="text-xl font-black text-gray-900 mb-2">
              🏠 Interessiert? Standort kostenlos prüfen lassen
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Schreib uns kurz, wo dein Grundstück liegt und wie viel Fläche zur Verfügung steht.
              Wir melden uns innerhalb von 24 Stunden mit einer ehrlichen Einschätzung.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-6">
              <p className="text-amber-800 text-sm font-medium">
                💡 <strong>Ideal für:</strong> Bauernhöfe, Ferienhausbesitzer, Campingplatzbetreiber,
                Grundstückseigentümer in Tourismusregionen, Naturgrundstücke – in ganz Deutschland und der EU.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                "Keine Investition deinerseits nötig",
                "Keine Haftung für das Tiny House",
                "Leistungsbasierte Vergütung – du verdienst mehr, je besser du bist",
                "Kostenloser Exit nach vereinbarter Laufzeit",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <ModalButton className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-full text-center text-base transition-colors shadow-md">
              Als Host bewerben →
            </ModalButton>
            <p className="text-center text-xs text-gray-400 mt-3">
              Kostenlos & unverbindlich – wir prüfen deinen Standort innerhalb von 24h.
            </p>
          </div>
        </div>

        {/* 5-Step Process */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm mb-12">
          <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
            🗺️ In 5 Schritten zum Host
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-100 hidden md:block" />
            <div className="space-y-5">
              {hostSteps.map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-xl font-black text-white shadow-sm z-10">
                    {step.num}
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex-grow">
                    <h4 className="font-black text-gray-900 text-[14px] mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deep-Dive Link */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-3">Mehr Details zum Host-Modell?</p>
          <Link
            href="/wissen/host-werden"
            className="inline-flex items-center gap-2 border border-amber-200 text-amber-700 hover:bg-amber-50 font-semibold px-6 py-3 rounded-full text-sm transition-all"
          >
            📖 Host-Werden: Der vollständige Guide →
          </Link>
        </div>

      </div>
    </section>
  );
}
