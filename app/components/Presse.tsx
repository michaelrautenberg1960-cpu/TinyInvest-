"use client";

import { useRef } from "react";

function MediumLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1043.63 592.71"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Medium"
    >
      <g>
        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
        <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.17-279 147.17 124.9 147.17 279" />
        <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
      </g>
    </svg>
  );
}

const articles = [
  {
    publication: "Medium",
    date: "2026",
    category: "Investment & Steuern",
    title: "Warum smarte Investoren 2026 keine Eigentumswohnungen mehr kaufen",
    excerpt:
      "Der Markt für klassische Immobilien stagniert – während ein neues Asset-Modell Renditen von 12–18 % p.a. bei gleichzeitiger §7g-Steueroptimierung bietet. TinyInvest zeigt, wie mobile Wirtschaftsgüter das Investitionsportfolio 2026 revolutionieren.",
    url: "https://medium.com/@robert_10241/warum-smarte-investoren-2026-keine-eigentumswohnungen-mehr-kaufen-cb36427305f3",
    logo: "medium" as const,
  },
  {
    publication: "Der Immobilien Blog",
    date: "4. Juni 2026",
    category: "Kapitalanlage",
    title: "Tiny Houses als Kapitalanlage",
    excerpt:
      "Mobile Tiny Houses gelten steuerlich als bewegliche Wirtschaftsgüter und ermöglichen erhebliche Steuerabschreibungen. Neben steuerlichen Vorteilen bieten sie Renditen durch Vermietung im Tourismusbereich – bei niedrigen Einstiegskosten und minimalem Verwaltungsaufwand.",
    url: "https://www.derimmobilienblog.de/tiny-houses-als-kapitalanlage/",
    logo: "ib" as const,
  },
  {
    publication: "Alltag mal anders",
    date: "24. Mai 2026",
    category: "Kapitalanlage",
    title: "Tiny Houses als Kapitalanlage: Warum Mini-Häuser große Renditen versprechen",
    excerpt:
      "Tiny Houses entwickeln sich von einem Nischentrend zu einer ernsthaften Anlageklasse mit niedrigen Einstiegskosten und hohem Rendite-Potenzial durch Kurzzeitvermietung. Investoren müssen baurechtliche Anforderungen beachten und zwischen mobilen sowie stationären Modellen unterscheiden.",
    url: "https://alltagmalanders.de/tiny-houses-als-kapitalanlage",
    logo: "am" as const,
  },
];

function ArticleLogo({ type }: { type: "medium" | "ib" | "am" }) {
  if (type === "medium") {
    return (
      <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center shrink-0">
        <MediumLogo className="w-5 h-5 text-white" />
      </div>
    );
  }
  if (type === "ib") {
    return (
      <div className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.derimmobilienblog.de/favicon.ico"
          alt="Der Immobilien Blog"
          className="w-6 h-6 object-contain"
        />
      </div>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-9 h-9 shrink-0" aria-label="Alltag mal anders">
      <circle cx="16" cy="16" r="16" fill="#166534"/>
      <polygon points="7,10 25,17 25,23 7,23" fill="white" opacity="0.95"/>
      <polygon points="5,9 27,16.5 25,17 7,10" fill="white" opacity="0.78"/>
      <rect x="17.5" y="18" width="6" height="4.5" rx="0.4" fill="#166534" opacity="0.72"/>
      <rect x="8" y="14" width="3" height="2.5" rx="0.3" fill="#166534" opacity="0.55"/>
      <rect x="4" y="23" width="24" height="1.5" rx="0.5" fill="white" opacity="0.88"/>
      <rect x="3" y="23.5" width="4" height="0.8" rx="0.3" fill="white" opacity="0.7"/>
      <circle cx="11" cy="26" r="2" fill="white" opacity="0.82"/>
      <circle cx="11" cy="26" r="0.8" fill="#166534"/>
      <circle cx="22" cy="26" r="2" fill="white" opacity="0.82"/>
      <circle cx="22" cy="26" r="0.8" fill="#166534"/>
    </svg>
  );
}

export default function Presse() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({ left: direction === "right" ? 360 : -360, behavior: "smooth" });
  }

  return (
    <section id="presse" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">
            In der Presse
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            TinyInvest in den Medien
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Was Journalisten und Analysten über TinyInvest schreiben.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Vorheriger Artikel"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:border-green-300 hover:text-green-700 transition-all"
          >
            ←
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
          >
            {articles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group snap-start shrink-0 w-[calc(50%-10px)] min-w-72 bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                {/* Publication header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <ArticleLogo type={article.logo} />
                    <div>
                      <p className="font-bold text-gray-900 text-sm leading-none">{article.publication}</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">{article.date}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700 shrink-0 ml-2">
                    {article.category}
                  </span>
                </div>

                {/* Article content */}
                <h3 className="font-black text-gray-900 text-base leading-snug mb-3 group-hover:text-green-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed grow mb-5">
                  {article.excerpt}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Artikel lesen</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Nächster Artikel"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:border-green-300 hover:text-green-700 transition-all"
          >
            →
          </button>
        </div>

</div>
    </section>
  );
}
