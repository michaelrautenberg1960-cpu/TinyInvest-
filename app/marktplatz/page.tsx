import { BASE_OG } from "@/app/lib/og";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MarktplatzShell from "../components/MarktplatzShell";
import type { MapListing } from "../components/ProjekteGoogleMap";
import type { Listing } from "../components/ModelleCarousel";
import Script from "next/script";

// ── Geocode a location string via Google Geocoding API ──────────────────────
async function geocodeLocation(location: string): Promise<{ lat: number; lng: number } | null> {
  if (!location.trim()) return null;
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return null;
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${key}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    const json = await res.json();
    if (json.status === "OK" && json.results?.[0]) {
      const { lat, lng } = json.results[0].geometry.location;
      return { lat, lng };
    }
  } catch { /* ignore */ }
  return null;
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Marktplatz – Tiny House Investments kaufen | TinyInvest",
  description:
    "Verfügbare Tiny House Direktkäufe als §7g-Wirtschaftsgut in Deutschland. Ab 65.000 €, Steuervorteil im Kaufjahr, Betrieb auf Wunsch über lokale Partner.",
  keywords:
    "Tiny House kaufen, Ferienimmobilie kaufen, §7g Investment, Tiny House Rendite, Marktplatz, bewegliches Wirtschaftsgut",
  alternates: {
    canonical: "https://tinyhouse.investments/marktplatz",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Marktplatz – Tiny House Investments kaufen | TinyInvest",
    description:
      "Verfügbare Tiny House Direktkäufe als §7g-Wirtschaftsgut. Steuervorteil im Kaufjahr. Betrieb auf Wunsch über lokale Partner.",
    url: "https://tinyhouse.investments/marktplatz",
  },
};

export default async function MarktplatzPage() {
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) console.error("[Marktplatz] Supabase error:", error.message);

  const rows = data ?? [];

  const listings: Listing[] = rows.map((row) => ({
    id:           row.id,
    asset_id:     row.asset_id,
    img:          row.img,
    category:     row.category,
    title:        row.title,
    location:     row.location,
    description:  row.description,
    preis:        row.preis,
    irr:          row.irr,
    npv:          row.npv,
    occ:          row.occ,
    occ_note:     row.occ_note,
    reserved:     row.reserved,
    total:        row.total,
    status:       row.status,
    status_label: row.status_label,
    badge:               row.badge,
    badge_color:         row.badge_color,
    sort_order:          row.sort_order,
    iab_eligible:        row.iab_eligible        ?? false,
    afa_eligible:        row.afa_eligible        ?? false,
    sonder_afa_eligible: row.sonder_afa_eligible ?? false,
    address:             row.address             ?? null,
    gross_rent_annual:   row.gross_rent_annual   ?? null,
    costs_annual:        row.costs_annual        ?? null,
    extras:              row.extras              ?? null,
    manager_note:        row.manager_note        ?? null,
    document_url:        row.document_url        ?? null,
  }));


  const mapListings: MapListing[] = await Promise.all(
    rows.map(async (row) => {
      let lat: number | null = row.lat ?? null;
      let lng: number | null = row.lng ?? null;
      if (lat === null || lng === null) {
        const geocoded = await geocodeLocation(row.location ?? "");
        lat = geocoded?.lat ?? null;
        lng = geocoded?.lng ?? null;
      }
      return {
        id:           row.id,
        asset_id:     row.asset_id,
        img:          row.img,
        title:        row.title,
        location:     row.location,
        status:       row.status,
        status_label: row.status_label,
        irr:          row.irr,
        preis:        row.preis,
        total:        row.total,
        reserved:     row.reserved,
        lat,
        lng,
      };
    })
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tiny House Investment",
    "description": "Tiny House Direktkauf als §7g-Wirtschaftsgut ab 65.000 €. Betrieb auf Wunsch über lokale Partner. 10–14 % p.a. (standortabhängig, keine Garantie).",
    "image": "https://tinyhouse.investments/images/outside/tiny-house-escape-hero.webp",
    "brand": { "@type": "Brand", "name": "TinyInvest" },
    "url": "https://tinyhouse.investments/marktplatz",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "65000",
      "highPrice": "95000",
      "offerCount": String(listings.length),
      "availability": listings.some(l => l.status === "available") ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      "url": "https://tinyhouse.investments/marktplatz",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Marktplatz", "item": "https://tinyhouse.investments/marktplatz" },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Script id="product-schema-marktplatz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="breadcrumb-schema-marktplatz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar variant="sub" />


      {/* Grid with filter + split-screen */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarktplatzShell listings={listings} mapListings={mapListings} />
        </div>
      </section>

      {/* §7g International Disclaimer */}
      <section className="py-6 bg-amber-50 border-t border-amber-100">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[11px] text-amber-800 leading-relaxed text-center">
            <span className="font-bold">⚠ Steuerlicher Hinweis zu internationalen Standorten:</span> §7g EStG (IAB & Sonder-AfA) gilt
            ausschließlich für deutsche Steuerpflichtige mit deutschen Betriebsstätten. Bei Projekten im EU-Ausland
            (z.B. Kroatien, Rumänien, Thailand) ist §7g <strong>nicht automatisch</strong> anwendbar – bitte konsultieren Sie einen
            auf §7g spezialisierten Steuerberater.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Weiterführende Guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              Wie funktionieren die Mieteinnahmen? →
            </Link>
            <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              IAB & Steuervorteile →
            </Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all bg-white">
              Kapitalanlage-Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            * Alle IRR- und NPV-Angaben sind Projektionen auf Basis historischer Belegungsdaten von lokale Partner.
            Sie stellen keine Garantie zukünftiger Renditen dar. Der Kauf erfolgt direkt beim Hersteller —
            TinyInvest agiert als Plattform und Vermittler, nicht als Kapitalsammelstelle.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
