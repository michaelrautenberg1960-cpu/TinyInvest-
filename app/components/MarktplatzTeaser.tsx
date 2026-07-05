"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ModelleCarousel from "./ModelleCarousel";
import type { Listing } from "./ModelleCarousel";

// Skeleton while waiting for the API response
function CarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl bg-gray-200 animate-pulse h-64" />
      ))}
    </div>
  );
}

export default function MarktplatzTeaser() {
  const [listings, setListings] = useState<Listing[] | null>(null);

  useEffect(() => {
    // Lazy-fetch after page paint — doesn't block FCP/LCP
    fetch("/api/listings")
      .then((r) => r.json())
      .then((data: Listing[]) => setListings(data))
      .catch(() => setListings([]));
  }, []);

  return (
    <section id="marktplatz" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Marktplatz · Investment-Projekte 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
              Aktuelle Tinyhaus Projekte auf unserem Marktplatz
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              §7g-fähige Tiny House Assets – über lokale Partner bewirtschaftet durch lokale Partner.
              Sie investieren, wir machen den Rest.
            </p>
          </div>
          <Link
            href="/marktplatz"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Alle Projekte ansehen
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Carousel — lazy loaded */}
        {listings === null ? (
          <CarouselSkeleton />
        ) : listings.length > 0 ? (
          <ModelleCarousel listings={listings} />
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🏗️</p>
            <p className="font-semibold text-sm">Projekte werden geladen …</p>
          </div>
        )}

        {/* Bottom CTA bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Alle Projekte, Karte &amp; Filteroptionen im vollständigen Marktplatz →
          </p>
          <Link
            href="/marktplatz"
            className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm hover:underline"
          >
            Zum Marktplatz
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
