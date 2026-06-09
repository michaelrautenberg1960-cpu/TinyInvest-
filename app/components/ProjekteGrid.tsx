"use client";
import { useState } from "react";
import Link from "next/link";
import type { Listing } from "./ModelleCarousel";

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

  /* ── Compact card (split-screen list) ──────────────────────────── */
  if (compact) {
    return (
      <Link
        href={`/marktplatz/${item.id}`}
        className={`group flex gap-0 rounded-xl border bg-white overflow-hidden transition-shadow ${
          isHovered
            ? "border-green-400 shadow-lg ring-1 ring-green-400"
            : "border-gray-200 hover:shadow-lg"
        } ${cfg.dim}`}
        onMouseEnter={() => onHover?.(item.id)}
        onMouseLeave={() => onHover?.(null)}
      >
        {/* Image */}
        <div className="relative w-40 shrink-0 overflow-hidden bg-gray-100">
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-800 shadow-sm">
            {available}/{item.total} frei
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 min-w-0 flex-col px-3 py-2.5 gap-1.5">
          <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 truncate">
            📍 {item.location}
          </p>
          <p className="text-sm font-bold leading-snug text-[#003580] group-hover:underline line-clamp-2">
            {item.title}
          </p>
          <div className="flex flex-wrap gap-1">
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${cfg.badge}`}>
              {item.status_label}
            </span>
            <span className="rounded border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-[10px] text-teal-700">
              {item.category}
            </span>
          </div>
          <div className="mt-auto flex items-end justify-between gap-1 pt-1 border-t border-gray-100">
            <span className="font-data text-sm font-extrabold text-emerald-600">
              {item.irr}
              <span className="text-[10px] font-normal text-gray-400"> p.a.</span>
            </span>
            <span className="font-data text-xs font-bold text-[#003580]">{item.preis}</span>
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
        className={`relative overflow-hidden rounded-xl border bg-white transition-shadow duration-200 group-hover:shadow-xl ${
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
              <div className="flex items-baseline gap-3 mb-2.5">
                <span className="font-data text-xl font-extrabold text-emerald-600">
                  {item.irr}
                  <span className="text-xs font-normal text-gray-400"> p.a.</span>
                </span>
                <span className="font-data text-sm font-bold text-[#003580]">
                  {item.preis}
                  <span className="text-xs font-normal text-gray-400"> /Einheit</span>
                </span>
              </div>
              <span className="block w-full rounded-lg bg-green-700 px-3 py-2.5 text-center text-sm font-bold text-white group-hover:bg-green-800 transition-colors">
                Projektdetails →
              </span>
            </div>
          </div>

          {/* ── Right panel: price + CTA (desktop only) ───────── */}
          <div className="hidden sm:flex w-44 shrink-0 flex-col items-end justify-between border-l border-gray-100 px-4 py-4 lg:w-48 lg:px-5">

            {/* IRR */}
            <div className="text-right w-full">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">IRR p.a.</p>
              <p className="font-data text-3xl font-extrabold text-emerald-600 leading-none">
                {item.irr}
              </p>
            </div>

            {/* Price */}
            <div className="text-right w-full mt-3">
              <p className="font-data text-xl font-extrabold text-[#003580] leading-none">
                {item.preis}
              </p>
              <p className="text-[10px] text-gray-400 mt-1">pro Einheit</p>
              {item.npv && (
                <p className="text-[10px] text-gray-400 mt-0.5">
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

export default function ProjekteGrid({ listings }: { listings: Listing[] }) {
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
