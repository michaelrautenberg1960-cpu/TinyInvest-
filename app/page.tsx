import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Tiny House kaufen & vermieten | 22.000 € Steuern sparen | TinyInvest",
  description:
    "Tiny House kaufen, vermieten und im ersten Jahr bis zu 33.000 € Steuern sparen. Ab 65.000 € · 12–14 % Rendite p.a. · vollautomatisch verwaltet durch tiny Escapes.",
  keywords:
    "tiny house kaufen vermieten, tiny house investment, tiny house steuern sparen, tiny house rendite, tiny house als kapitalanlage",
  alternates: {
    canonical: "https://tinyhouse.investments",
  },
  openGraph: {
    title: "Tiny House kaufen & vermieten | 22.000 € Steuern sparen | TinyInvest",
    description:
      "Tiny House kaufen, vermieten und im ersten Jahr bis zu 33.000 € Steuern sparen. Ab 65.000 € · 12–14 % Rendite p.a. · vollautomatisch verwaltet.",
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
  "description": "Tiny House §7g-Kapitalanlage ab 65.000 €. Sachwert-Investment mit bis zu 70 % Steuerabschreibung im Kaufjahr und 12–14 % IRR p.a.",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tiny House §7g Investment",
  "description": "Tiny House als bewegliches Wirtschaftsgut: §7g IAB (50 %), Sonder-AfA (40 %) und degressive AfA (30 %) kombinierbar. Ab 65.000 €, 12–14 % IRR p.a.",
  "brand": { "@type": "Brand", "name": "TinyInvest" },
  "url": "https://tinyhouse.investments/marktplatz",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "65000",
    "highPrice": "95000",
    "availability": "https://schema.org/InStock",
    "url": "https://tinyhouse.investments/marktplatz",
  },
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
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <TrustBar />
      <MarktplatzTeaser />
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
