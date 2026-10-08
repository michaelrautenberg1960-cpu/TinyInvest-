"use client";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL =
  "/geo/countries-50m.json";

type Location = {
  name: string;
  country: string;
  coordinates: [number, number];
  status: "active" | "planning";
};

const locations: Location[] = [
  { name: "Harz",        country: "DE", coordinates: [10.75, 51.65], status: "active"   },
  { name: "Schwarzwald", country: "DE", coordinates: [8.2,  48.0],   status: "active"   },
  { name: "Ostseeküste", country: "DE", coordinates: [13.4, 54.4],   status: "active"   },
  { name: "Istrien",     country: "HR", coordinates: [13.9, 45.2],   status: "active"   },
  { name: "Brandenburg", country: "DE", coordinates: [13.2, 52.4],   status: "planning" },
  { name: "Allgäu",      country: "DE", coordinates: [10.3, 47.7],   status: "planning" },
  { name: "Salzburg",    country: "AT", coordinates: [13.04,47.8],   status: "planning" },
  { name: "Côte d'Azur", country: "FR", coordinates: [7.2,  43.7],   status: "planning" },
  { name: "Toskana",     country: "IT", coordinates: [11.2, 43.5],   status: "planning" },
];

export default function StandortMapWidget() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const active   = locations.filter((l) => l.status === "active");
  const planning = locations.filter((l) => l.status === "planning");

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
      {/* Header row */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <p className="text-[12px] font-bold text-gray-700 uppercase tracking-widest">Deployment-Netzwerk</p>
        <div className="flex items-center gap-4 text-[10px] text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Aktiv ({active.length})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
            Planung ({planning.length})
          </span>
        </div>
      </div>

      {/* Map */}
      <div className="relative bg-[#EEF4FB]" style={{ height: "320px" }}>
        {tooltip && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10
                          bg-gray-900 text-white text-xs font-semibold
                          px-3 py-1.5 rounded-full shadow-lg pointer-events-none">
            📍 {tooltip}
          </div>
        )}

        <ComposableMap
          projection="geoMercator"
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup center={[10, 20]} zoom={1} minZoom={1} maxZoom={10}>
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: { rsmKey: string; [k: string]: unknown }[] }) =>
                geographies.map((geo: { rsmKey: string; [k: string]: unknown }) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#D6E4F0"
                    stroke="#B8CBE0"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: "none" },
                      hover:   { fill: "#C8DAEA", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {active.map((loc) => (
              <Marker
                key={loc.name}
                coordinates={loc.coordinates}
                onMouseEnter={() => setTooltip(`${loc.name} · ${loc.country}`)}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle r={6} fill="#16a34a" fillOpacity={0.2} />
                <circle r={3.5} fill="#16a34a" stroke="white" strokeWidth={1.2} />
              </Marker>
            ))}

            {planning.map((loc) => (
              <Marker
                key={loc.name}
                coordinates={loc.coordinates}
                onMouseEnter={() => setTooltip(`${loc.name} · ${loc.country} (Planung)`)}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle r={3.5} fill="#9ca3af" stroke="white" strokeWidth={1.2} />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        <p className="absolute bottom-2 right-3 text-[9px] text-gray-400">
          Standorte zur Illustration · laufend erweitert
        </p>
      </div>
    </div>
  );
}
