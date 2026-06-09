"use client";
import { useState } from "react";
import Link from "next/link";
import type { Listing } from "./ModelleCarousel";

const MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const MAP_BG = `https://maps.googleapis.com/maps/api/staticmap?center=51.0,10.5&zoom=5&size=400x80&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:water|color:0xc9e8f5&style=feature:landscape|color:0xf0f4f0&key=${MAP_KEY}`;

function MapButton({ onOpenMap }: { onOpenMap: () => void }) {
  return (
    <button
      onClick={onOpenMap}
      className="ml-auto relative overflow-hidden rounded-full h-9 px-4 flex items-center gap-1.5 text-[12px] font-semibold text-white shadow-sm hover:shadow-md transition-all"
      style={{ backgroundImage: `url('${MAP_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <span className="absolute inset-0 bg-black/40" />
      <span className="relative flex items-center gap-1.5">🗺 Kartenansicht</span>
    </button>
  );
}

const statusCfg = {
  available: { bar: "bg-green-500",  track: "bg-green-100",  badge: "bg-emerald-100 text-emerald-700", dim: "" },
  reserved:  { bar: "bg-amber-400",  track: "bg-amber-100",  badge: "bg-amber-100 text-amber-800",    dim: "" },
  sold:      { bar: "bg-red-400",    track: "bg-red-100",    badge: "bg-red-100 text-red-700",         dim: "opacity-60" },
  planning:  { bar: "bg-indigo-300", track: "bg-indigo-50",  badge: "bg-indigo-100 text-indigo-700",  dim: "opacity-65" },
};

type FilterKey = "all" | "available" | "reserved" | "planning";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",       label: "Alle" },
  { key: "available", label: "Verfügbar" },
  { key: "reserved",  label: "Reserviert" },
  { key: "planning",  label: "In Planung" },
];

interface ProjectCardProps {
  item: Listing;
  compact?: boolean;
  onHover?: (id: number | null) => void;
  isHovered?: boolean;
}

export function ProjectCard({ item, compact, onHover, isHovered }: ProjectCardProps) {
  const cfg        = statusCfg[item.status] ?? statusCfg.available;
  const pct        = item.total > 0 ? Math.round((item.reserved / item.total) * 100) : 0;
  const isPlanning = item.status === "planning";
  const available  = Math.max(0, item.total - item.reserved);
  const excerpt    = item.description
    ? item.description.slice(0, 110).trimEnd() + (item.description.length > 110 ? "…" : "")
    : null;
  const taxBadges = [
    item.iab_eligible        && { key: "IAB",        tip: "Investitionsabzugsbetrag" },
    item.afa_eligible        && { key: "AfA",        tip: "Absetzung für Abnutzung" },
    item.sonder_afa_eligible && { key: "Sonder-AfA", tip: "Sonderabschreibung §7g EStG" },
  ].filter(Boolean) as { key: string; tip: string }[];

  /* ── Compact card (split-screen list) ──────────────────────────── */
  if (compact) {
    return (
      <Link
        id={`map-card-${item.id}`}
        href={`/marktplatz/${item.id}`}
        className={`group flex rounded-xl border bg-white overflow-hidden transition-all ${
          isHovered
            ? "border-green-400 shadow-lg ring-1 ring-green-400"
            : "border-gray-200 hover:shadow-md hover:border-green-300"
        } ${cfg.dim}`}
        onMouseEnter={() => onHover?.(item.id)}
        onMouseLeave={() => onHover?.(null)}
      >
        {/* Image */}
        <div className="relative w-36 shrink-0 overflow-hidden bg-gray-100">
          <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute bottom-2 left-2 rounded bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            #{item.asset_id}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 min-w-0 flex-col px-3 py-3 gap-2">

          {/* Row 1: status left, tax badges right */}
          <div className="flex items-start justify-between gap-1">
            <span className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-bold ${cfg.badge}`}>
              {item.status_label}
            </span>
            {taxBadges.length > 0 && (
              <div className="flex flex-wrap justify-end gap-1">
                {taxBadges.map(({ key, tip }) => (
                  <span key={key} title={tip} className="flex items-center gap-0.5 rounded border border-violet-200 bg-violet-50 px-1.5 py-0.5">
                    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-[8px] font-bold leading-none">✓</span>
                    <span className="text-[10px] font-semibold text-violet-700">{key}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Row 2: location */}
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400 truncate">
            📍 {item.location}
          </p>

          {/* Row 3: title */}
          <p className="text-sm font-bold leading-snug text-[#003580] group-hover:underline line-clamp-1">
            {item.title}
          </p>

          {/* Row 4: category · availability */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <span className="rounded border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-teal-700 font-medium">{item.category}</span>
            <span className="text-gray-300">·</span>
            <span className="font-semibold text-gray-600">{available}/{item.total} frei</span>
          </div>

          {/* Row 5: price + IRR */}
          <div className="mt-auto flex items-end justify-between pt-1.5 border-t border-gray-100">
            <div>
              <p className="text-[9px] text-gray-400 leading-none mb-0.5">Kaufpreis</p>
              <p className="text-sm font-black text-gray-900">{item.preis}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-gray-400 leading-none mb-0.5">IRR p.a.</p>
              <p className="text-sm font-black text-emerald-600">{item.irr}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  /* ── Full card (horizontal, tinyMarket-style) ──────────────────── */
  return (
    <Link
      href={`/marktplatz/${item.id}`}
      className="group block"
      onMouseEnter={() => onHover?.(item.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div
        className={`relative overflow-hidden rounded-xl border bg-white transition-all duration-200 group-hover:shadow-xl group-hover:border-green-400 group-hover:ring-1 group-hover:ring-green-400 ${
          isHovered
            ? "border-green-400 shadow-xl ring-1 ring-green-400"
            : "border-gray-200"
        } ${cfg.dim}`}
      >
        <div className="flex flex-col sm:flex-row">

          {/* ── Image ─────────────────────────────────────────── */}
          <div className="relative h-52 w-full shrink-0 overflow-hidden bg-gray-100 sm:h-auto sm:w-52 lg:w-60">
            <img
              src={item.img}
              alt={item.title}
              className={`h-full w-full object-cover sm:absolute sm:inset-0 ${isPlanning ? "grayscale-30" : ""}`}
            />
            {/* units badge */}
            <div className="absolute top-2.5 right-2.5 rounded-full bg-white/92 px-2.5 py-0.5 text-[10px] font-semibold text-gray-800 shadow-sm">
              {available}/{item.total} frei
            </div>
            {/* asset id */}
            <div className="absolute bottom-2.5 left-2.5 rounded-md bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
              #{item.asset_id}
            </div>
            {/* Tax badges — mobile only, stacked top-right */}
            {taxBadges.length > 0 && (
              <div className="absolute top-2.5 right-2.5 flex flex-col items-end gap-1 sm:hidden">
                {taxBadges.map(({ key, tip }) => (
                  <span key={key} title={tip} className="flex items-center gap-1 rounded-md border border-violet-200 bg-violet-50 px-1.5 py-0.5">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet-600 text-white text-xs font-bold leading-none">✓</span>
                    <span className="text-xs font-semibold text-violet-700">{key}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Middle: content ───────────────────────────────── */}
          <div className="flex min-w-0 flex-1 flex-col px-4 py-4 sm:px-5">
            <div className="space-y-2.5">

              {/* Location */}
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                📍 {item.location}
              </p>

              {/* Title */}
              <h3 className="text-base font-bold leading-tight text-[#003580] group-hover:underline line-clamp-2 sm:text-lg">
                {item.title}
              </h3>

              {/* Status + category chips */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${cfg.badge}`}>
                  {item.status_label}
                </span>
                <span className="rounded border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs text-teal-700">
                  {item.category}
                </span>
                {item.badge && (
                  <span className={`rounded px-2 py-0.5 text-xs font-semibold ${item.badge_color}`}>
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Description excerpt */}
              {excerpt && (
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 sm:text-sm">
                  {excerpt}
                </p>
              )}

              {/* KPI row */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 sm:text-sm">
                <span className="flex items-center gap-1">
                  <span className="text-gray-400">📈</span>
                  <b className="text-emerald-700">{item.irr}</b> IRR p.a.
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-gray-400">💰</span>
                  <b>{item.preis}</b>/Einheit
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-gray-400">📊</span>
                  NPV: <b>{item.npv}</b>
                </span>
              </div>

              {/* Occupancy */}
              {item.occ && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="text-gray-400">🏠</span> Ø Belegung: <b className="text-gray-700">{item.occ}</b>
                  {item.occ_note && <span className="text-gray-400 ml-1">· {item.occ_note}</span>}
                </div>
              )}

              {/* Reservation bar */}
              {!isPlanning && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-gray-400">Listing-Auslastung</span>
                    <span className="font-data text-[10px] font-semibold text-gray-600">
                      {item.reserved}/{item.total} Einheiten
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full ${cfg.track}`}>
                    <div
                      className={`h-1.5 rounded-full ${cfg.bar} transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Mobile: price + CTA */}
            <div className="mt-4 sm:hidden">
              <div className="mb-2.5">
                <p className="font-data text-xl font-extrabold text-[#003580] leading-none">
                  {item.preis}
                  <span className="text-xs font-normal text-gray-400"> /Einheit</span>
                </p>
                <p className="font-data text-sm font-bold text-emerald-600 mt-0.5">
                  {item.irr}
                  <span className="text-xs font-normal text-gray-400"> p.a.</span>
                </p>
              </div>
              <span className="block w-full rounded-lg bg-green-700 px-3 py-2.5 text-center text-sm font-bold text-white group-hover:bg-green-800 transition-colors">
                Projektdetails →
              </span>
            </div>
          </div>

          {/* ── Right panel: price + CTA (desktop only) ───────── */}
          <div className="hidden sm:flex w-44 shrink-0 flex-col items-end justify-between border-l border-gray-100 px-4 py-4 lg:w-48 lg:px-5">

            {/* Tax badges — desktop, top-right */}
            <div className="flex flex-row flex-wrap justify-end gap-1.5 w-full">
              {taxBadges.length > 0 ? taxBadges.map(({ key, tip }) => (
                <span key={key} title={tip} className="flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-2 py-1">
                  <span className="text-xs font-semibold text-violet-700">{key}</span>
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-xs font-bold">✓</span>
                </span>
              )) : <div className="h-6" />}
            </div>

            {/* Price (primary) */}
            <div className="text-right w-full">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Kaufpreis</p>
              <p className="font-data text-2xl font-extrabold text-[#003580] leading-none">
                {item.preis}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">pro Einheit</p>
            </div>

            {/* IRR (secondary) */}
            <div className="text-right w-full mt-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">IRR p.a.</p>
              <p className="font-data text-xl font-extrabold text-emerald-600 leading-none">
                {item.irr}
              </p>
              {item.npv && (
                <p className="text-[10px] text-gray-400 mt-1">
                  NPV: <span className="font-semibold text-gray-600">{item.npv}</span>
                </p>
              )}
            </div>

            {/* CTA */}
            <div className="mt-4 w-full">
              <span className="block w-full rounded-lg bg-green-700 px-3 py-2.5 text-center text-sm font-bold text-white group-hover:bg-green-800 transition-colors shadow-sm">
                {isPlanning ? "Vormerken →" : "Details →"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default function ProjekteGrid({ listings, onOpenMap }: { listings: Listing[]; onOpenMap?: () => void }) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered =
    filter === "all"
      ? listings
      : filter === "planning"
      ? listings.filter(l => l.status === "planning" || l.status === "sold")
      : listings.filter(l => l.status === filter);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {FILTERS.map((f) => {
          const count =
            f.key === "all"
              ? listings.length
              : f.key === "planning"
              ? listings.filter(l => l.status === "planning" || l.status === "sold").length
              : listings.filter(l => l.status === f.key).length;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold transition-all ${
                filter === f.key
                  ? "bg-green-700 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700"
              }`}
            >
              {f.label}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                filter === f.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
        {onOpenMap && (
          <MapButton onOpenMap={onOpenMap} />
        )}
      </div>

      {/* Card list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🏗️</p>
          <p className="font-semibold">Keine Projekte in dieser Kategorie</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(item => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
