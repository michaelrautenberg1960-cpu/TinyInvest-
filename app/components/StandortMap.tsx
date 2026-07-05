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
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

type Location = {
  name: string;
  country: string;
  coordinates: [number, number]; // [lng, lat]
  status: "active" | "planning";
};

const locations: Location[] = [
  { name: "Harz",         country: "DE", coordinates: [10.75, 51.65], status: "active"   },
  { name: "Schwarzwald",  country: "DE", coordinates: [8.2,  48.0],   status: "active"   },
  { name: "Ostseeküste",  country: "DE", coordinates: [13.4, 54.4],   status: "active"   },
  { name: "Istrien",      country: "HR", coordinates: [13.9, 45.2],   status: "active"   },
  { name: "Brandenburg",  country: "DE", coordinates: [13.2, 52.4],   status: "planning" },
  { name: "Allgäu",       country: "DE", coordinates: [10.3, 47.7],   status: "planning" },
  { name: "Salzburg",     country: "AT", coordinates: [13.04,47.8],   status: "planning" },
  { name: "Côte d'Azur",  country: "FR", coordinates: [7.2,  43.7],   status: "planning" },
  { name: "Toskana",      country: "IT", coordinates: [11.2, 43.5],   status: "planning" },
];

export default function StandortMap() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const active   = locations.filter((l) => l.status === "active");
  const planning = locations.filter((l) => l.status === "planning");

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">
            Netzwerk · Standorte
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Unser Deployment-Netzwerk
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Aktive und geplante Standorte des lokale Partner Netzwerks.
            Da die Häuser mobil sind, können sie jederzeit verlegt werden.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 block" />
            <span className="text-xs text-gray-500 font-medium">Aktiv ({active.length})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-300 block" />
            <span className="text-xs text-gray-500 font-medium">In Planung ({planning.length})</span>
          </div>
        </div>

        {/* Map container */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-[#EEF4FB]"
             style={{ height: "480px" }}>

          {/* Tooltip */}
          {tooltip && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10
                            bg-gray-900 text-white text-xs font-semibold
                            px-3 py-1.5 rounded-full shadow-lg pointer-events-none">
              📍 {tooltip}
            </div>
          )}

          <ComposableMap
            projection="geoMercator"
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup
              center={[10, 20]}
              zoom={1}
              minZoom={1}
              maxZoom={10}
            >
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

              {/* Active locations */}
              {active.map((loc) => (
                <Marker
                  key={loc.name}
                  coordinates={loc.coordinates}
                  onMouseEnter={() => setTooltip(`${loc.name} · ${loc.country}`)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {/* Pulse ring */}
                  <circle r={6} fill="#16a34a" fillOpacity={0.2} />
                  <circle r={3.5} fill="#16a34a" stroke="white" strokeWidth={1.2} />
                </Marker>
              ))}

              {/* Planning locations */}
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

          <p className="absolute bottom-3 right-4 text-[10px] text-gray-400">
            Karte dient zur Illustration · Standorte laufend erweitert
          </p>
        </div>

      </div>
    </section>
  );
}
