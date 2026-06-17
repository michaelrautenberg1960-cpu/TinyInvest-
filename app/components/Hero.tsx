import Image from "next/image";
import HeroCTAButton from "./HeroCTAButton";
import HeroCalculator from "./HeroCalculator";

const platformStats = [
  { value: "200+", label: "Registrierte Investoren", icon: "💼" },
  { value: "12+",  label: "Kooperierende Hosts",     icon: "🤝" },
  { value: "4",   label: "Aktive Länder",            icon: "🌍" },
  
];

export default function Hero({ heroImage }: { heroImage: string }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">

      {/* ── Full-bleed background image ────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="TinyInvest Escape – tiny Escapes Netzwerk"
          fill
          className="object-cover object-center"
          priority
          quality={70}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      {/* ── Gradient overlay ───────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      {/* Extra bottom fade for trust bar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Platform badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Tiny House Investment · Betrieben mit tiny Escapes · Steuervorteil im Kaufjahr
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT ───────────────────────────────────── */}
          <div>
            {/* Location pill */}
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-white/15 backdrop-blur-sm text-white/90 text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                @ tiny Escapes · Schwarzwald
              </span>
              <span className="font-data bg-black/40 backdrop-blur-sm text-white text-[9px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                #TE-2026-02
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Die schlaue Alternative zur klassischen PV-Anlage.
              <br />
              <span className="text-green-400">Steueroptimierte Investments in Tiny Houses.</span>
            </h1>

            <p className="text-white/75 text-base leading-relaxed mb-7 max-w-lg">
              Wir vermitteln Tiny Houses als steueroptimierte Kapitalanlage – fertig aufgestellt, vollständig verwaltet durch tiny Escapes, mit monatlichem Cashflow ab dem ersten Monat. Ab 65.000 €, 12–14 % Rendite p.a. Alles aus einer Hand über das{" "}
              <a
                href="https://www.tiny.rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                TinyInvest-Ökosystem
              </a>.
            </p>

            {/* Platform stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {platformStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="font-data text-lg font-black text-white leading-none">{s.value}</p>
                    <p className="text-[11px] text-white/60 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs — client component for modal interaction */}
            <HeroCTAButton />

            {/* Trust micro-line */}
            <p className="mt-3 text-[11px] text-white/45">
              Unverbindlich · Keine Anlageberatung · DSGVO-konform
            </p>

            {/* Mini-Testimonial */}
            <div className="mt-6 flex items-start gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 max-w-md">
              <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                MK
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                </div>
                <p className="text-white/80 text-[12px] leading-snug italic">
                  „Im ersten Jahr 22.000 € Steuern gespart – und monatlich passiven Cashflow."
                </p>
                <p className="text-white/45 text-[10px] mt-1">Michael B. · Unternehmer, München</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Calculator (client component) ───── */}
          <HeroCalculator />
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 pt-6 border-t border-white/15">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Partner &amp; Zertifikate</span>
            {[
              { label: "Vlemmix Trailer", sub: "Zertifizierter Hersteller" },
              { label: "Clansana", sub: "Off-Grid Systeme" },
              { label: "tiny Escapes", sub: "Betriebspartner", href: "https://www.tiny.rentals" },
              { label: "§7g EStG", sub: "Steuerkonform" },
              { label: "EU-weit", sub: "Mobiles Wirtschaftsgut" },
            ].map((b) =>
              b.href ? (
                <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <span className="text-[12px] font-bold text-white/70 group-hover:text-green-400 transition-colors">{b.label}</span>
                  <span className="text-[10px] text-white/35">{b.sub}</span>
                </a>
              ) : (
                <div key={b.label} className="flex flex-col items-center">
                  <span className="text-[12px] font-bold text-white/70">{b.label}</span>
                  <span className="text-[10px] text-white/35">{b.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
