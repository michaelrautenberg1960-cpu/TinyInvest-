import type { Metadata } from "next";
import Script from "next/script";
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
    "Tiny House zum Direktkauf als §7g-Wirtschaftsgut. Ab 65.000 € · Steuervorteil im Kaufjahr · Betrieb auf Wunsch über lokale Partner.",
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
      "Tiny House zum Direktkauf als §7g-Wirtschaftsgut. Ab 65.000 € · Steuervorteil im Kaufjahr · Betrieb auf Wunsch über lokale Partner.",
    url: "https://tinyhouse.investments",
  },
};

// Force fully static pre-rendering — served as a plain CDN file.
// No server round-trips on page load. Listings are fetched client-side by MarktplatzTeaser.
export const dynamic = "force-static";

// Static hero background — no DB lookup needed
const HERO_IMAGE = "/images/outside/tiny-house-escape-hero.webp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TinyInvest",
  "url": "https://tinyhouse.investments",
  "logo": "https://tinyhouse.investments/logo1.png",
  "description": "Tiny House Direktkauf als §7g-Wirtschaftsgut ab 65.000 €. Bis zu 70 % Steuerabschreibung im Kaufjahr. Betrieb auf Wunsch über lokale Partner.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Marie-Curie-Straße 1",
    "addressLocality": "Hanau",
    "postalCode": "63457",
    "addressCountry": "DE",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-69-4321-8700",
    "contactType": "customer service",
    "email": "info@tinyhouse.investments",
    "availableLanguage": "German",
  },
  "sameAs": [],
};


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TinyInvest",
  "url": "https://tinyhouse.investments",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tinyhouse.investments/marktplatz?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <TrustBar />
      <MarktplatzTeaser />

      {/* Internal pillar links — helps Google discover key product pages from the homepage */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              Kapitalanlage-Guide →
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
