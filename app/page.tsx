import type { Metadata } from "next";
import { BASE_OG } from "@/app/lib/og";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import MarktplatzTeaser from "./components/MarktplatzTeaser";
import Oekosystem from "./components/Oekosystem";
import Prozess from "./components/Prozess";
import Ueber from "./components/Ueber";
import GalerieTeaser from "./components/GalerieTeaser";
import Testimonials from "./components/Testimonials";
import Presse from "./components/Presse";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tiny House kaufen & vermieten | Steuern sparen | TinyInvest",
  description:
    "Tiny House kaufen, vermieten und im ersten Jahr bis zu 33.000 € Steuern sparen. Ab 65.000 € · 10–14 % p.a.* · Betrieb aus einer Hand über unser Partner-Netzwerk.",
  keywords:
    "tiny house kaufen vermieten, tiny house investment, tiny house steuern sparen, tiny house rendite, tiny house als kapitalanlage",
  alternates: {
    canonical: "https://tinyhouse.investments",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Tiny House kaufen & vermieten | Steuern sparen | TinyInvest",
    description:
      "Tiny House kaufen, vermieten und im ersten Jahr bis zu 33.000 € Steuern sparen. Ab 65.000 € · 10–14 % p.a.* · Betrieb aus einer Hand über unser Partner-Netzwerk.",
    url: "https://tinyhouse.investments",
  },
};

// Force fully static pre-rendering — served as a plain CDN file.
// No server round-trips on page load. Listings are fetched client-side by MarktplatzTeaser.
export const dynamic = "force-static";

// Static hero background — no DB lookup needed
const HERO_IMAGE = "/images/outside/tiny-house-escape-hero.webp";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <TrustBar />
      <MarktplatzTeaser />

      {/* Internal pillar links — helps Google discover key product pages from the homepage */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Jetzt durchrechnen</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { href: "/rechner/iab", title: "IAB-Rechner", desc: "§7g-Steuereffekt für dein Tiny House schätzen" },
              { href: "/rechner/rendite", title: "Rendite-Rechner", desc: "Monatliche Auszahlung & Rendite berechnen" },
              { href: "/konfigurator", title: "Konfigurator", desc: "Komplettpaket wählen & Angebot als PDF" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group border border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-300 rounded-2xl px-5 py-4 transition-all"
              >
                <p className="font-bold text-green-800 text-sm">{t.title} →</p>
                <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Mehr erfahren</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              Tiny House als Kapitalanlage →
            </Link>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              §7g Steuervorteil →
            </Link>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              Renditemodell →
            </Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              IAB Tiny House →
            </Link>
          </div>
        </div>
      </section>

      <Oekosystem />
      <Prozess />
      <Ueber />
      <GalerieTeaser />
      <Testimonials />
      <Presse />
      <FAQ />
      <Footer />
    </main>
  );
}
