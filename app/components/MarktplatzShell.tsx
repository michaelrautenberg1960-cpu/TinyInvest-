"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjekteGrid, { ProjectCard } from "./ProjekteGrid";
import MarktplatzMap from "./MarktplatzMap";
import type { Listing } from "./ModelleCarousel";
import type { MapListing } from "./ProjekteGoogleMap";

interface Props {
  listings: Listing[];
  mapListings: MapListing[];
}

function MarktplatzShellInner({ listings, mapListings }: Props) {
  const router       = useRouter();
  const searchParams = useSearchParams();

  const [mapOpen, setMapOpen]     = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tab, setTab]             = useState<"map" | "list">("map");
  const [listOpen, setListOpen]   = useState(true);

  // Sync mapOpen from URL on mount
  useEffect(() => {
    if (searchParams.get("map") === "1") setMapOpen(true);
  }, [searchParams]);

  const openMap = () => {
    setTab("map");
    setMapOpen(true);
    router.replace("/marktplatz?map=1", { scroll: false });
  };

  const close = () => {
    setMapOpen(false);
    setHoveredId(null);
    router.replace("/marktplatz", { scroll: false });
  };

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8">
        <div>
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
      </div>

      {/* ── Normal grid ────────────────────────────────────── */}
      <ProjekteGrid listings={listings} onOpenMap={openMap} />

      {/* ── Split-screen overlay ───────────────────────────── */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 flex flex-col sm:flex-row bg-white">

          {/* Mobile tab bar — hidden sm+ */}
          <div className="flex sm:hidden shrink-0 border-b border-gray-200 bg-white">
            <button
              onClick={() => setTab("map")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                tab === "map" ? "border-b-2 border-green-600 text-green-700" : "text-gray-400"
              }`}
            >
              🗺 Karte
            </button>
            <button
              onClick={() => setTab("list")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                tab === "list" ? "border-b-2 border-green-600 text-green-700" : "text-gray-400"
              }`}
            >
              ☰ Liste
            </button>
            <button
              onClick={close}
              className="px-4 text-gray-400 hover:text-gray-700 text-lg"
              aria-label="Schließen"
            >
              ✕
            </button>
          </div>

          {/* Card list panel */}
          <div className={`${tab === "list" ? "flex" : "hidden"} ${listOpen ? "sm:flex sm:w-[42%]" : "sm:hidden"} w-full shrink-0 flex-col border-r border-gray-200 overflow-hidden relative`}>
            {/* Collapse tab — sticks out on the right edge */}
            <button
              onClick={() => setListOpen(false)}
              title="Liste einklappen"
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center w-4 h-16 rounded-r-lg bg-white border border-l-0 border-gray-200 shadow-md text-gray-400 hover:text-green-700 hover:bg-green-50 transition-colors text-base font-bold"
            >
              ‹
            </button>

            {/* Desktop header */}
            <div className="hidden sm:flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 shrink-0">
              <span className="text-sm font-semibold text-gray-900">{listings.length} Projekte</span>
              <button
                onClick={close}
                className="ml-auto flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ✕ Schließen
              </button>
            </div>

            {/* Compact card list */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              {listings.map((item) => (
                <ProjectCard
                  key={item.id}
                  item={item}
                  compact
                  isHovered={hoveredId === item.id}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* Map panel */}
          <div className={`${tab === "map" ? "flex" : "hidden"} sm:flex flex-1 min-w-0 relative`}>
            {!listOpen && (
              <button
                onClick={() => setListOpen(true)}
                title="Liste ausklappen"
                className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200 shadow-md text-gray-500 hover:text-gray-800 transition-colors text-sm font-bold"
              >
                ›
              </button>
            )}
            <MarktplatzMap
              listings={mapListings}
              hoveredId={hoveredId}
              onHoverPin={setHoveredId}
              fullHeight
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function MarktplatzShell(props: Props) {
  return (
    <Suspense fallback={null}>
      <MarktplatzShellInner {...props} />
    </Suspense>
  );
}
