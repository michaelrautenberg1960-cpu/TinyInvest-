"use client";
import { useState } from "react";
import ProjekteGrid, { ProjectCard } from "./ProjekteGrid";
import MarktplatzMap from "./MarktplatzMap";
import type { Listing } from "./ModelleCarousel";
import type { MapListing } from "./ProjekteGoogleMap";

interface Props {
  listings: Listing[];
  mapListings: MapListing[];
}

export default function MarktplatzShell({ listings, mapListings }: Props) {
  const [mapOpen, setMapOpen]   = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tab, setTab]           = useState<"map" | "list">("map");

  const close = () => { setMapOpen(false); setHoveredId(null); };

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
      <ProjekteGrid listings={listings} onOpenMap={() => { setTab("map"); setMapOpen(true); }} />

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
          <div className={`${tab === "list" ? "flex" : "hidden"} sm:flex w-full sm:w-[42%] shrink-0 flex-col border-r border-gray-200 overflow-hidden`}>
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
          <div className={`${tab === "map" ? "flex" : "hidden"} sm:flex flex-1 min-w-0`}>
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
