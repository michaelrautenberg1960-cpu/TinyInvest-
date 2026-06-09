import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ListingAccessGate } from "@/app/components/listing/ListingAccessGate";
import { ListingDetailSections } from "@/app/components/listing/ListingDetailSections";
import type { Listing } from "@/app/components/ModelleCarousel";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const { data } = await supabase
    .from("listings")
    .select("title, description, location, img")
    .eq("id", id)
    .single();
  if (!data) return { title: "Projekt | TinyInvest" };
  return {
    title: `${data.title} | TinyInvest Marktplatz`,
    description: data.description?.slice(0, 155),
    alternates: { canonical: `https://tinyhouse.investments/marktplatz/${id}` },
    openGraph: {
      title: `${data.title} | TinyInvest`,
      description: data.description?.slice(0, 155),
      images: data.img ? [{ url: data.img }] : [],
      url: `https://tinyhouse.investments/marktplatz/${id}`,
    },
  };
}

const statusCfg: Record<string, { badgeCls: string }> = {
  available: { badgeCls: "badge-available" },
  reserved:  { badgeCls: "badge-reserved"  },
  sold:      { badgeCls: "badge-sold"      },
  planning:  { badgeCls: "badge-planning"  },
};

export default async function ListingDetailPage({ params }: PageProps) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) notFound();

  const listing = data as Listing;
  const cfg = statusCfg[listing.status] ?? statusCfg.available;
  const pct = listing.total > 0 ? Math.round((listing.reserved / listing.total) * 100) : 0;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: listing.title,
    description: listing.description,
    image: listing.img,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability:
        listing.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      url: `https://tinyhouse.investments/marktplatz/${id}`,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar variant="sub" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-700 transition-colors">Startseite</Link>
          <span>›</span>
          <Link href="/marktplatz" className="hover:text-gray-700 transition-colors">Marktplatz</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium truncate">{listing.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Left Sidebar ──────────────────────────────── */}
          <aside className="w-full lg:w-64 shrink-0 space-y-4 order-2 lg:order-1">

            {/* Asset ID */}
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Asset-ID</p>
              <p className="font-data font-bold text-gray-700 mt-0.5">#{listing.asset_id}</p>
            </div>

            {/* Price */}
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-2">Preis / Einheit</p>
              <p className="font-data text-2xl font-black text-gray-900">{listing.preis}</p>
              <p className="text-[11px] text-gray-400 mt-1">{listing.category}</p>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-2">Verfügbarkeit</p>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.badgeCls}`}>
                  {listing.status_label}
                </span>
                <span className="text-[11px] text-gray-500 font-semibold">
                  {Math.max(0, listing.total - listing.reserved)}/{listing.total} frei
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-1.5 bg-green-600 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* Access gate — desktop, id for scroll target */}
            <div id="unlock-section" className="transition-all duration-300">
              <ListingAccessGate listingId={listing.id} />
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-500 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="text-green-600">✓</span> §7g-fähige Assets
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-600">✓</span> Direkt beim Hersteller
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-600">✓</span> Vollautomatisch bewirtschaftet
              </div>
            </div>

            {/* Back */}
            <Link
              href="/marktplatz"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              ← Alle Projekte
            </Link>
          </aside>

          {/* ── Main Content ──────────────────────────────── */}
          <div className="flex-1 min-w-0 order-1 lg:order-2">

            {/* Hero */}
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 mb-5">
              <img
                src={listing.img}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-data bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                  #{listing.asset_id}
                </span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cfg.badgeCls}`}>
                  {listing.status_label}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] text-white/60 mb-1">{listing.category} · {listing.location}</p>
                <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">{listing.title}</h1>
              </div>
            </div>

            {/* Mobile access gate — id for scroll target */}
            <div id="unlock-section-mobile" className="mb-5 block lg:hidden transition-all duration-300">
              <ListingAccessGate listingId={listing.id} />
            </div>

            {/* Sections with 🔒 */}
            <ListingDetailSections listing={listing} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
