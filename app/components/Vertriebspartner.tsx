import { partnerBenefits } from "./data";

export default function Vertriebspartner() {
  const checklist = [
    "Sie begeistern Menschen für echte, zukunftssichere Investments",
    "Wir unterstützen Sie bei Beratung & Produktvorstellung",
    "Sie erhalten eine attraktive Provision ohne Deckel",
    "Keine Lizenz und keine Vorleistung nötig",
    "Kostenloses Schulungskonzept inklusive",
  ];

  return (
    <section id="partner" className="py-24 bg-[#f8f4ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            Vertriebspartner werden
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Verdiene mit TinyInvest –{" "}
            <span className="text-green-700">auch als Quereinsteiger</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Werden Sie Experte für nachhaltige Sachwerte und bauen Sie sich ein passives Einkommen auf –
            mit einem Produkt, das sich dank IAB &amp; Sonder-AfA quasi selbst erklärt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Checklist + CTA */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-gray-900 mb-6">
              🤝 Das erhalten Sie als Vertriebspartner
            </h3>
            <ul className="space-y-4 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
              <p className="text-green-800 text-sm font-medium">
                💡 <strong>Für wen ist das ideal?</strong> Finanzberater, Steuerberater, Immobilienmakler,
                Netzwerker oder einfach jemand mit einem starken Bekanntenkreis aus Unternehmern und
                Gutverdiener – Sie brauchen kein Vorwissen, nur Kommunikationsfreude.
              </p>
            </div>

            <a
              href="#kontakt"
              className="block w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-full text-center text-base transition-colors shadow-md"
            >
              Jetzt als Partner bewerben →
            </a>
            <p className="text-center text-xs text-gray-400 mt-3">
              Kostenlos & unverbindlich – kein Risiko, kein Vorschuss.
            </p>
          </div>

          {/* Right: Benefit cards */}
          <div className="flex flex-col gap-6">
            {partnerBenefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex items-start gap-5"
              >
                <span className="text-4xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}

            {/* Win-Win badge */}
            <div className="bg-gray-900 rounded-3xl p-7 text-white text-center">
              <p className="text-4xl mb-3">🏆</p>
              <p className="text-2xl font-black mb-2">Echtes Win-Win-Win</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Der Investor spart Steuern &amp; baut Vermögen auf. Der Endkunde bekommt ein
                hochwertiges Tiny House. Sie verdienen eine faire Provision.
                <strong className="text-white"> Alle gewinnen.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
