"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import ModalButton from "./ModalButton";

export interface Listing {
  id: number;
  asset_id: string;
  img: string;
  category: string;
  title: string;
  location: string;
  description: string;
  preis: string;
  irr: string;
  npv: string;
  occ: string;
  occ_note: string;
  reserved: number;
  total: number;
  status: "available" | "reserved" | "sold" | "planning";
  status_label: string;
  badge: string;
  badge_color: string;
  sort_order: number;
  iab_eligible?: boolean;
  afa_eligible?: boolean;
  sonder_afa_eligible?: boolean;
}

const statusCfg = {
  available: { bar: "bg-green-500",   track: "bg-green-100",  badgeCls: "badge-available", dim: "" },
  reserved:  { bar: "bg-amber-400",   track: "bg-amber-100",  badgeCls: "badge-reserved",  dim: "" },
  sold:      { bar: "bg-red-400",     track: "bg-red-100",    badgeCls: "badge-sold",      dim: "" },
  planning:  { bar: "bg-indigo-300",  track: "bg-indigo-50",  badgeCls: "badge-planning",  dim: "opacity-70" },
};

function ListingCard({ item }: { item: Listing }) {
  const cfg = statusCfg[item.status] ?? statusCfg.available;
  const pct = item.total > 0 ? Math.round((item.reserved / item.total) * 100) : 0;
  const isPlanning = item.status === "planning";

  return (
    <div className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-200 ${cfg.dim}`}>
      {/* Image */}
      <div className="relative h-60 overflow-hidden flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className={`w-full h-full object-cover ${isPlanning ? "grayscale-[30%]" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="font-data bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
            #{item.asset_id}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cfg.badgeCls}`}>
            {item.status_label}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[10px] text-white/70 mb-0.5">{item.category}</p>
          <p className="text-[13px] text-white font-semibold leading-tight truncate">{item.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-black text-gray-900 text-[15px] leading-tight">{item.title}</h3>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${item.badge_color}`}>
            {item.badge}
          </span>
        </div>

        <p className="text-gray-500 text-[13px] leading-relaxed mb-3 line-clamp-2">{item.description}</p>

        {/* Reservation bar */}
        {!isPlanning && (
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-gray-400">Auslastung</span>
              <span className="font-data text-[11px] font-semibold text-gray-600">{item.reserved}/{item.total}</span>
            </div>
            <div className={`w-full h-1.5 rounded-full ${cfg.track}`}>
              <div className={`h-1.5 rounded-full ${cfg.bar}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}

        {/* Data row */}
        <div className="mt-auto">
          <div className="grid grid-cols-3 gap-1.5 mb-1.5">
            <div className="bg-gray-50 rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-gray-400">IRR</p>
              <p className="font-data text-[13px] font-black text-green-700 leading-tight">{item.irr}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-gray-400">Preis/Einheit</p>
              <p className="font-data text-[13px] font-black text-gray-800 leading-tight">{item.preis}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-gray-400">Einheiten frei</p>
              <p className="font-data text-[13px] font-black text-green-700 leading-tight">{Math.max(0, item.total - item.reserved)}</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mb-3 truncate">{item.occ_note}</p>
          <ModalButton
            className={`block w-full py-2.5 rounded-full font-semibold text-[13px] text-center transition-colors ${
              isPlanning
                ? "border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            {isPlanning ? "Vormerken →" : "Unterlagen →"}
          </ModalButton>
        </div>
      </div>
    </div>
  );
}

export default function ModelleCarousel({ listings }: { listings: Listing[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);

  const STEP = 320; // px per arrow click

  const scrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -STEP, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({ left: STEP, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollPct(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const canPrev = scrollPct > 0.01;
  const canNext = scrollPct < 0.99;

  return (
    <div>
      {/* Arrows + track wrapper */}
      <div className="relative -mx-2">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#f8fafc] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#f8fafc] to-transparent" />

        {/* Prev arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canPrev}
          aria-label="Zurück"
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border shadow-md
                      flex items-center justify-center text-sm transition-all duration-200
                      ${canPrev
                        ? "bg-white border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-700"
                        : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"}`}
        >
          ←
        </button>

        {/* Scrollable track — all 6 cards visible on wide screens */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-2 pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {listings.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
          style={{ width: "calc((100% - 4 * 1rem) / 5)", minWidth: "300px" }}
            >
              <ListingCard item={item} />
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={scrollRight}
          disabled={!canNext}
          aria-label="Weiter"
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border shadow-md
                      flex items-center justify-center text-sm transition-all duration-200
                      ${canNext
                        ? "bg-white border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-700"
                        : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"}`}
        >
          →
        </button>
      </div>

      {/* Scroll progress bar (thin) */}
      <div className="mt-4 mx-auto w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-150"
          style={{ width: `${Math.max(16, scrollPct * 100)}%` }}
        />
      </div>

      {/* Bottom note */}
      <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
        <p className="text-[12px] text-gray-500">
          💡 <strong className="text-gray-700">Phase-2-Projekte</strong> sind bereits buchbar zur Vormerkliste.
          Alle Assets werden nach Abnahme direkt in das tiny Escapes Netzwerk überführt.{" "}
          <ModalButton className="text-green-700 font-semibold hover:underline">
            Anfrage stellen →
          </ModalButton>
        </p>
      </div>
    </div>
  );
}
