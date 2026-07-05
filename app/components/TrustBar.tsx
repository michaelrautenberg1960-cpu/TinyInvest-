export default function TrustBar() {
  const items = [
    {
      icon: "⚖️",
      title: "Direktkauf · Sachwert",
      sub: "Eigentumsübertragung inklusive",
    },
    {
      icon: "🏅",
      title: "§7g EStG – seit 2009",
      sub: "Etabliertes Steuerrecht",
    },
    {
      icon: "🔒",
      title: "Kein KAGB-Produkt",
      sub: "Direktkauf · kein Fonds",
    },
    {
      icon: "🛡️",
      title: "Vollversicherung",
      sub: "Feuer · Sturm · Diebstahl",
    },
    {
      icon: "📜",
      title: "Transparentes Impressum",
      sub: (
        <a href="/impressum" className="hover:text-green-700 transition-colors underline underline-offset-2">
          Impressum ansehen →
        </a>
      ),
    },
    
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
          Vertrauen &amp; Seriosität
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-1.5 bg-white border border-gray-100 rounded-2xl px-3 py-4 shadow-sm"
            >
              <span className="text-xl">{item.icon}</span>
              <p className="text-[12px] font-bold text-gray-800 leading-tight">{item.title}</p>
              <p className="text-[10px] text-gray-400 leading-snug">
                {typeof item.sub === "string" ? item.sub : item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
