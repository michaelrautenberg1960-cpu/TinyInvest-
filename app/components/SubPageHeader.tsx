// SubPageHeader.tsx — reusable dark hero band for all sub-pages
import ModalButton from "./ModalButton";
import Link from "next/link";

interface SubPageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
  img?: string;
}

export default function SubPageHeader({
  badge,
  title,
  subtitle,
  breadcrumb = "Plattform",
  img = "/images/outside/tiny-house-escape-sachwert.webp",
}: SubPageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden isolate transform-gpu">
      {/* BG image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-[11px]">
          <Link href="/" className="text-white/50 hover:text-green-400 transition-colors">
            {breadcrumb}
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/70">{badge}</span>
        </div>

        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          {badge}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
          {title}
        </h1>

        <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-3">
          <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-lg">
            🔐 Investitionsunterlagen →
          </ModalButton>
          <Link
            href="/#modelle"
            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all backdrop-blur-sm"
          >
            Marktplatz ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
