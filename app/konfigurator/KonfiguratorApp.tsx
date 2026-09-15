"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ModalButton from "@/app/components/ModalButton";
import {
  ESCAPE_660,
  EXTRAS,
  INCLUDED_ITEMS,
  LOCATION_NOTE,
  PACKAGE_NOTE,
  QUANTITY_NOTE,
  REQUEST_ONLY_MODELS,
  VARIANT_SHORT,
  calcOffer,
  type Variant,
} from "./konfigurator-data";
import { generatePDF } from "./generate-pdf";

// ─── Helpers ───────────────────────────────────────────────────────────────
const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

const today = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
};

// ─── Types ─────────────────────────────────────────────────────────────────
interface ClientInfo {
  name: string;
  address: string;
  salesAgent: string;
  date: string;
}

// ─── Progress Bar ──────────────────────────────────────────────────────────
function StepBar({ step }: { step: number }) {
  const steps = [
    { n: 1, label: "Paket & Stückzahl" },
    { n: 2, label: "Kundendaten" },
    { n: 3, label: "Zusammenfassung" },
  ];
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-4 h-1 bg-gray-200 -z-10" />
        <div
          className="absolute left-0 top-4 h-1 bg-green-600 -z-10 transition-all duration-500"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((s) => (
          <div key={s.n} className="flex flex-col items-center gap-1 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                step > s.n
                  ? "bg-green-600 border-green-600 text-white"
                  : step === s.n
                  ? "bg-white border-green-600 text-green-700"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {step > s.n ? "✓" : s.n}
            </div>
            <span
              className={`text-xs font-medium text-center hidden sm:block ${
                step >= s.n ? "text-green-700" : "text-gray-400"
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Price Badge (sticky) ──────────────────────────────────────────────────
function PriceBadge({ variant, units, extraIds }: { variant: Variant; units: number; extraIds: string[] }) {
  const calc = calcOffer(variant, units, extraIds);

  return (
    <div className="sticky top-24 bg-white border border-green-200 rounded-2xl shadow-lg p-5 text-sm">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
        Preisübersicht
      </div>
      <div className="text-xs text-gray-400 mb-3">
        {ESCAPE_660.name} · {VARIANT_SHORT[variant]} · {calc.units}{" "}
        {calc.units === 1 ? "Einheit" : "Einheiten"}
      </div>

      <div className="text-xs text-gray-500 mb-1">Preis pro Einheit (netto)</div>
      <div className="text-2xl font-bold text-green-700 mb-1">{EUR(calc.unitNet)}</div>
      <div className="text-xs text-gray-400 mb-4">
        zzgl. {EUR(calc.unitVat)} MwSt. (19 %) = {EUR(calc.unitGross)} brutto
      </div>

      <div className="border-t pt-3 space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Gesamt netto</span>
          <span className="font-bold text-green-700">{EUR(calc.totalNet)}</span>
        </div>
        <div className="flex justify-between text-gray-400 text-xs">
          <span>MwSt. (19 %)</span>
          <span>{EUR(calc.totalVat)}</span>
        </div>
        <div className="flex justify-between text-gray-500 text-xs">
          <span>Gesamt brutto</span>
          <span className="font-semibold">{EUR(calc.totalGross)}</span>
        </div>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-gray-400">{QUANTITY_NOTE}</p>
    </div>
  );
}

// ─── Leistungstabelle (pro Einheit) ────────────────────────────────────────
function PackageTable({ variant, extraIds }: { variant: Variant; extraIds: string[] }) {
  const calc = calcOffer(variant, 1, extraIds);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2.5 text-xs font-bold flex justify-between">
        <span>Leistung (pro Einheit)</span>
        <span>Preis (netto)</span>
      </div>
      <div className="divide-y divide-gray-100 bg-white">
        {calc.lines.map((l, i) => (
          <div key={i} className="flex items-start justify-between gap-4 px-4 py-2.5 text-sm">
            <span className="text-gray-700 leading-relaxed">{l.label}</span>
            <span className="font-semibold text-gray-800 shrink-0 whitespace-nowrap">
              {EUR(l.net)}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between px-4 py-3 bg-green-50 text-sm">
          <span className="font-bold text-green-800">Preis pro Einheit (netto)</span>
          <span className="font-bold text-green-800">{EUR(calc.unitNet)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 1: Paket & Stückzahl ─────────────────────────────────────────────
function Step1({
  variant,
  setVariant,
  units,
  setUnits,
  extraIds,
  toggleExtra,
  onNext,
}: {
  variant: Variant | null;
  setVariant: (v: Variant) => void;
  units: number;
  setUnits: (n: number) => void;
  extraIds: string[];
  toggleExtra: (id: string) => void;
  onNext: () => void;
}) {
  const [showIncluded, setShowIncluded] = useState(false);

  const cards: Array<{ v: Variant; title: string; badge: string; badgeColor: string; text: string; bullets: string[] }> = [
    {
      v: "ongrid",
      title: "On-Grid – Netzanschluss",
      badge: "On-Grid",
      badgeColor: "bg-blue-600",
      text: "Für Ferienparks & Campingplätze mit vorhandenem Stromanschluss am Standort.",
      bullets: [
        "Komplett ausgestattet inkl. Klimaanlage GREE 9000BTU",
        "Kassettentoilette",
        "Netzanschluss am Standort erforderlich",
      ],
    },
    {
      v: "offgrid",
      title: "Off-Grid – Solarbetrieb",
      badge: "Off-Grid",
      badgeColor: "bg-green-700",
      text: "Off-Grid-Modelle sind flexibler in der Standortwahl.",
      bullets: [
        "Solaranlage S3000-48 (Victron System)",
        "Komplett ausgestattet inkl. Klimaanlage",
        "Kassettentoilette",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Komplettpaket wählen</h2>
      <p className="text-gray-500 mb-6 text-sm">{PACKAGE_NOTE}</p>

      {/* Variant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {cards.map((c) => {
          const price = calcOffer(c.v, 1, []).unitNet;
          return (
            <button
              key={c.v}
              onClick={() => setVariant(c.v)}
              className={`text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
                variant === c.v
                  ? "border-green-600 shadow-lg ring-2 ring-green-200"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="relative h-48 bg-gray-100">
                <Image src={ESCAPE_660.image} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className={`${c.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {c.badge}
                  </span>
                </div>
                {variant === c.v && (
                  <div className="absolute top-3 right-3 w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{c.text}</p>
                <div className="mb-3">
                  <div className="text-xs text-gray-400">Komplettpaket pro Einheit</div>
                  <div className="font-bold text-green-700 text-xl">{EUR(price)}</div>
                  <div className="text-xs text-gray-400">netto, zzgl. 19 % MwSt.</div>
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>

      {variant && (
        <>
          {/* Leistungsumfang */}
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Leistungsumfang {ESCAPE_660.name} · {VARIANT_SHORT[variant]}
          </h3>
          <PackageTable variant={variant} extraIds={extraIds} />

          <div className="mt-3 text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
            <span>Abmessungen: {ESCAPE_660.dimensions}</span>
            <span>Anhänger: {ESCAPE_660.trailer}</span>
          </div>

          {/* Detaillierte Ausstattungsliste */}
          <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setShowIncluded((s) => !s)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-sm">
                ✅ Vollständige Ausstattungsliste anzeigen
              </span>
              <span className="text-gray-400 text-lg">{showIncluded ? "▲" : "▼"}</span>
            </button>
            {showIncluded && (
              <ul className="text-xs text-gray-700 space-y-1 p-4 bg-green-50 border-t border-green-100">
                {INCLUDED_ITEMS[variant].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-green-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Stückzahl */}
          <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">Anzahl Einheiten</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setUnits(Math.max(1, units - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-gray-50"
                aria-label="Eine Einheit weniger"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={500}
                value={units}
                onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-28 border border-gray-300 rounded-lg px-3 py-2 text-center text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setUnits(units + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-gray-50"
                aria-label="Eine Einheit mehr"
              >
                +
              </button>
              <span className="text-sm text-gray-500">
                {units === 1 ? "Einheit" : "Einheiten"}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-3">{QUANTITY_NOTE}</p>
          </div>

          {/* Extras */}
          <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">Optionale Extras</h3>
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-100 bg-white">
            {EXTRAS.map((e) => {
              const checked = extraIds.includes(e.id);
              return (
                <label
                  key={e.id}
                  className={`flex items-start gap-3 p-4 cursor-pointer transition-colors ${
                    checked ? "bg-emerald-50" : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleExtra(e.id)}
                    className="w-5 h-5 accent-green-600 cursor-pointer shrink-0 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-medium text-sm text-gray-800">{e.label}</span>
                        {e.description && (
                          <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                            {e.description}
                          </div>
                        )}
                      </div>
                      <span className="font-bold text-green-700 text-sm shrink-0 whitespace-nowrap">
                        + {EUR(e.net)}
                      </span>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Standort-Hinweis */}
          <p className="mt-4 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-xl p-4 leading-relaxed">
            <strong className="text-gray-700">Hinweis zur Standortwahl:</strong> {LOCATION_NOTE}
          </p>
        </>
      )}

      {/* Modelle auf Anfrage */}
      <div className="mt-8 border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
        <div className="text-sm font-semibold text-gray-700 mb-2">Weitere Modelle auf Anfrage</div>
        <div className="flex flex-wrap items-center gap-3">
          {REQUEST_ONLY_MODELS.map((m) => (
            <div key={m.id} className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
              <span className="font-semibold text-gray-700">{m.name}</span>
              <span className="mx-2 text-gray-300">·</span>
              <span>{m.dimensions}</span>
              <span className="mx-2 text-gray-300">·</span>
              <span className="italic">{m.note}</span>
            </div>
          ))}
          <ModalButton className="text-xs font-semibold text-green-700 hover:text-green-800 underline underline-offset-2">
            Individuelles Angebot anfragen →
          </ModalButton>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!variant}
          className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Weiter → Kundendaten
        </button>
      </div>
    </div>
  );
}

// ─── STEP 2: Client Info ───────────────────────────────────────────────────
function Step2({
  clientInfo,
  setClientInfo,
  onNext,
  onBack,
}: {
  clientInfo: ClientInfo;
  setClientInfo: (info: ClientInfo) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const update = (key: keyof ClientInfo, val: string) =>
    setClientInfo({ ...clientInfo, [key]: val });

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Kundendaten eingeben</h2>
      <p className="text-gray-500 mb-6 text-sm">
        Diese Daten erscheinen auf dem generierten PDF-Angebot.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5 max-w-lg">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name des Kunden *
          </label>
          <input
            type="text"
            value={clientInfo.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="z.B. Max Mustermann"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Adresse</label>
          <textarea
            value={clientInfo.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="Straße, PLZ, Stadt, Land"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Vertriebspartner / Verkäufer
          </label>
          <input
            type="text"
            value={clientInfo.salesAgent}
            onChange={(e) => update("salesAgent", e.target.value)}
            placeholder="Name des Vertriebspartners (optional)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Angebotsdatum</label>
          <input
            type="text"
            value={clientInfo.date}
            onChange={(e) => update("date", e.target.value)}
            placeholder="TT.MM.JJJJ"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-600 rounded-full font-semibold hover:bg-gray-50 transition-all"
        >
          ← Zurück
        </button>
        <button
          onClick={onNext}
          disabled={!clientInfo.name.trim()}
          className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Weiter → Zusammenfassung
        </button>
      </div>
    </div>
  );
}

// ─── STEP 3: Summary & PDF ─────────────────────────────────────────────────
function Step3({
  variant,
  units,
  extraIds,
  clientInfo,
  onBack,
}: {
  variant: Variant;
  units: number;
  extraIds: string[];
  clientInfo: ClientInfo;
  onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const calc = useMemo(() => calcOffer(variant, units, extraIds), [variant, units, extraIds]);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await generatePDF({ variant, units, extraIds, clientInfo });
      setDone(true);
    } catch (err) {
      console.error("PDF error:", err);
      alert("Fehler beim PDF-Export. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Zusammenfassung & PDF</h2>
      <p className="text-gray-500 mb-6 text-sm">
        Überprüfen Sie das Angebot und laden Sie es als PDF herunter.
      </p>

      {/* Client Info Summary */}
      <div className="bg-gray-50 rounded-xl p-4 mb-5 text-sm">
        <div className="font-semibold text-gray-700 mb-2">Angebotsdetails</div>
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <div>
            <div className="text-xs text-gray-400">Kunde</div>
            <div>{clientInfo.name || "–"}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Datum</div>
            <div>{clientInfo.date}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Modell & Variante</div>
            <div>
              {ESCAPE_660.name} · {VARIANT_SHORT[variant]}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Stückzahl</div>
            <div>
              {calc.units} {calc.units === 1 ? "Einheit" : "Einheiten"}
            </div>
          </div>
          {clientInfo.salesAgent && (
            <div>
              <div className="text-xs text-gray-400">Vertriebspartner</div>
              <div>{clientInfo.salesAgent}</div>
            </div>
          )}
        </div>
      </div>

      {/* Leistungstabelle */}
      <div className="mb-5">
        <PackageTable variant={variant} extraIds={extraIds} />
      </div>

      {/* Gesamtsumme */}
      <div className="border-2 border-green-200 rounded-xl overflow-hidden mb-8">
        <div className="bg-green-700 text-white px-4 py-2.5 text-sm font-bold">
          Gesamtsumme bei {calc.units} {calc.units === 1 ? "Einheit" : "Einheiten"}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800 text-white text-xs">
                <th className="text-left px-4 py-2 font-semibold"></th>
                <th className="text-right px-4 py-2 font-semibold">netto</th>
                <th className="text-right px-4 py-2 font-semibold">MwSt. (19 %)</th>
                <th className="text-right px-4 py-2 font-semibold">brutto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2.5 text-gray-600">Preis pro Einheit</td>
                <td className="px-4 py-2.5 text-right">{EUR(calc.unitNet)}</td>
                <td className="px-4 py-2.5 text-right">{EUR(calc.unitVat)}</td>
                <td className="px-4 py-2.5 text-right">{EUR(calc.unitGross)}</td>
              </tr>
              <tr className="bg-green-50 font-bold text-green-800">
                <td className="px-4 py-3">
                  GESAMT ({calc.units} {calc.units === 1 ? "Einheit" : "Einheiten"})
                </td>
                <td className="px-4 py-3 text-right">{EUR(calc.totalNet)}</td>
                <td className="px-4 py-3 text-right">{EUR(calc.totalVat)}</td>
                <td className="px-4 py-3 text-right">{EUR(calc.totalGross)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-600 rounded-full font-semibold hover:bg-gray-50 transition-all w-full sm:w-auto"
        >
          ← Zurück
        </button>
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all w-full sm:w-auto shadow-lg ${
            done ? "bg-green-600 text-white" : "bg-green-700 hover:bg-green-800 text-white"
          } disabled:opacity-60 disabled:cursor-wait`}
        >
          {loading ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              PDF wird erstellt…
            </>
          ) : done ? (
            <>✅ PDF heruntergeladen</>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Angebot als PDF herunterladen
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function KonfiguratorApp() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [units, setUnits] = useState(1);
  const [extraIds, setExtraIds] = useState<string[]>([]);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: "",
    address: "",
    salesAgent: "",
    date: today(),
  });

  const toggleExtra = (id: string) =>
    setExtraIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <StepBar step={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <Step1
              variant={variant}
              setVariant={setVariant}
              units={units}
              setUnits={setUnits}
              extraIds={extraIds}
              toggleExtra={toggleExtra}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2
              clientInfo={clientInfo}
              setClientInfo={setClientInfo}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && variant && (
            <Step3
              variant={variant}
              units={units}
              extraIds={extraIds}
              clientInfo={clientInfo}
              onBack={() => setStep(2)}
            />
          )}
        </div>

        {/* Sticky price badge */}
        {variant && (
          <div className="lg:col-span-1">
            <PriceBadge variant={variant} units={units} extraIds={extraIds} />
          </div>
        )}
      </div>
    </div>
  );
}
