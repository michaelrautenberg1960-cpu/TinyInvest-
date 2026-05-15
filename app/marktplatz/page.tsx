import Link from "next/link";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubPageHeader from "../components/SubPageHeader";
import ProjekteGrid from "../components/ProjekteGrid";
import MarktplatzMap from "../components/MarktplatzMap";
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
  title: "Marktplatz – Projekte in die Sie investieren können | TinyInvest",
  description:
    "Entdecken Sie verfügbare Tiny House Investment-Projekte in Deutschland und Europa. Ab 65.000 € investieren, 12–14 % IRR p.a., §7g-steueroptimiert, vollautomatisch bewirtschaftet von tiny Escapes.",
  keywords:
    "Tiny House investieren, Ferienimmobilie kaufen, passive Einnahmen, §7g Investment, Tiny House Rendite, Marktplatz",
  alternates: {
    canonical: "https://tinyhouse.investments/marktplatz",
  },
  openGraph: {
    title: "Marktplatz – Projekte in die Sie investieren können | TinyInvest",
    description:
      "Verfügbare Tiny House Investment-Projekte mit bis zu 18 % IRR p.a. Steueroptimiert nach §7g, vollautomatisch bewirtschaftet.",
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
    badge:        row.badge,
    badge_color:  row.badge_color,
    sort_order:   row.sort_order,
  }));

  const available = listings.filter((l) => l.status === "available").length;
  const reserved  = listings.filter((l) => l.status === "reserved").length;
  const planning  = listings.filter((l) => l.status === "planning").length;
  const sold      = listings.filter((l) => l.status === "sold").length;

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
    "description": "Steueroptimierte Tiny House Kapitalanlage ab 65.000 €. Vollautomatisch verwaltet durch tiny Escapes. 12–14 % IRR p.a.",
    "image": "https://tinyhouse.investments/images/outside/tiny-house-escape-hero.webp",
    "brand": { "@type": "Brand", "name": "TinyInvest" },
    "url": "https://tinyhouse.investments/marktplatz",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "65000",
      "highPrice": "95000",
      "offerCount": String(listings.length),
      "availability": available > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
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

      <SubPageHeader
        badge="Marktplatz · Investment-Projekte 2026"
        title="Projekte, in die Sie investieren können"
        subtitle="§7g-fähige Tiny House Assets auf Vlemmix Trailer — direkt beim Hersteller gekauft, vollautomatisch bewirtschaftet durch tiny Escapes. Kein Kapital an TinyInvest."
        img="/marktplatz.png"
      />

      {/* KPI bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: String(listings.length), label: "Projekte gesamt",  sub: "Stand 2026" },
              { value: String(available),        label: "Verfügbar",        sub: "Jetzt investierbar" },
              { value: String(reserved),         label: "Reserviert",       sub: "In Abwicklung" },
              { value: String(planning + sold),  label: "Sonstige",         sub: "Planung oder Sold" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-data text-2xl font-black text-green-400">{s.value}</p>
                <p className="text-[11px] font-bold text-white mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                Standortkarte
              </p>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                Asset-Standorte im Überblick
              </h3>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 inline-block" /> Verfügbar / Reserviert
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 inline-block" /> In Planung
              </span>
            </div>
          </div>
          <MarktplatzMap listings={mapListings} />
          <p className="text-[10px] text-gray-400 mt-3 text-center">
            Klicken Sie auf einen Pin für Projektdetails · Karte zeigt Näherungsstandorte
          </p>
        </div>
      </section>

      {/* Grid with filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
              Investment-Projekte
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Wählen Sie Ihr Projekt
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Alle Projekte werden vollautomatisch durch tiny Escapes bewirtschaftet – Sie investieren, wir machen den Rest.
            </p>
          </div>
          <ProjekteGrid listings={listings} />
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
            * Alle IRR- und NPV-Angaben sind Projektionen auf Basis historischer Belegungsdaten von tiny Escapes.
            Sie stellen keine Garantie zukünftiger Renditen dar. Der Kauf erfolgt direkt beim Hersteller —
            TinyInvest agiert als Plattform und Vermittler, nicht als Kapitalsammelstelle.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
