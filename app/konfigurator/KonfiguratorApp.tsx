"use client";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  MODELS,
  OPTION_CATEGORIES,
  OFF_GRID_INCLUDED_ITEMS,
  ON_GRID_INCLUDED_ITEMS,
  type Variant,
  type ModelConfig,
  type OptionItem,
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
    { n: 1, label: "Variante & Modell" },
    { n: 2, label: "Optionen" },
    { n: 3, label: "Kundendaten" },
    { n: 4, label: "Zusammenfassung" },
  ];
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-4 h-1 bg-gray-200 -z-10" />
        <div
          className="absolute left-0 top-4 h-1 bg-green-600 -z-10 transition-all duration-500"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
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
function PriceBadge({
  basePrice,
  optionsTotal,
  transportTotal,
}: {
  basePrice: number;
  optionsTotal: number;
  transportTotal: number;
}) {
  // All prices are GROSS (inkl. 21% MwSt.)
  const total = basePrice + optionsTotal + transportTotal;
  const netto = Math.round(total / 1.21);
  const vat = total - netto;

  return (
    <div className="sticky top-24 bg-white border border-green-200 rounded-2xl shadow-lg p-5 text-sm">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-semibold">
        Preisübersicht
      </div>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Basispaket</span>
          <span className="font-semibold">{EUR(basePrice)}</span>
        </div>
        {optionsTotal > 0 && (
          <div className="flex justify-between">
            <span>Optionen</span>
            <span className="font-semibold">+ {EUR(optionsTotal)}</span>
          </div>
        )}
        {transportTotal > 0 && (
          <div className="flex justify-between">
            <span>Transport</span>
            <span className="font-semibold">+ {EUR(transportTotal)}</span>
          </div>
        )}
        <div className="border-t pt-2 flex justify-between text-gray-400 text-xs">
          <span>davon Netto</span>
          <span>{EUR(netto)}</span>
        </div>
        <div className="flex justify-between text-gray-400 text-xs">
          <span>davon MwSt. 21%</span>
          <span>{EUR(vat)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold text-green-700 text-base">
          <span>Gesamt inkl. MwSt.</span>
          <span>{EUR(total)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 1: Variant & Model ───────────────────────────────────────────────
function Step1({
  variant,
  setVariant,
  modelId,
  setModelId,
  onNext,
}: {
  variant: Variant | null;
  setVariant: (v: Variant) => void;
  modelId: string | null;
  setModelId: (id: string) => void;
  onNext: () => void;
}) {
  const selectedModel = MODELS.find((m) => m.id === modelId);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Variante wählen</h2>
      <p className="text-gray-500 mb-6 text-sm">
        Wählen Sie zunächst die Variante Ihres Tiny House und anschließend die gewünschte Größe.
      </p>

      {/* Variant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {/* On-Grid */}
        <button
          onClick={() => {
            setVariant("ongrid");
            if (!modelId) setModelId("escape_660");
          }}
          className={`text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
            variant === "ongrid"
              ? "border-green-600 shadow-lg ring-2 ring-green-200"
              : "border-gray-200 hover:border-green-300"
          }`}
        >
          <div className="relative h-48 bg-gray-100">
            <Image
              src="/images/outside/tiny-house-escape-sachwert.webp"
              alt="On-Grid Tiny House"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                On-Grid
              </span>
            </div>
            {variant === "ongrid" && (
              <div className="absolute top-3 right-3 w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 text-lg mb-1">On-Grid – Netzanschluss</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Für Ferienparks & Campingplätze mit Stromanschluss. Günstigerer Einstiegspreis, alle Komfort-Optionen wählbar.
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Vollausgestatteter Rohbau + Anhänger
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> PVC-Fenster, Elektroinstallation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">+</span> Solar optional hinzufügbar
              </li>
            </ul>
          </div>
        </button>

        {/* Off-Grid */}
        <button
          onClick={() => {
            setVariant("offgrid");
            if (!modelId) setModelId("escape_660");
          }}
          className={`text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
            variant === "offgrid"
              ? "border-green-600 shadow-lg ring-2 ring-green-200"
              : "border-gray-200 hover:border-green-300"
          }`}
        >
          <div className="relative h-48 bg-gray-100">
            <Image
              src="/images/outside/tiny-house-escape-sachwert.webp"
              alt="Off-Grid Tiny House"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                Off-Grid
              </span>
              <span className="ml-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Bestseller
              </span>
            </div>
            {variant === "offgrid" && (
              <div className="absolute top-3 right-3 w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 text-lg mb-1">Off-Grid – Vollautark</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Vollständig autarkes Tiny House mit Solaranlage & Speicher. Standort frei wählbar. Ab <strong className="text-green-700">€ 79.000</strong> inkl. MwSt. (Escape 660).
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Solaranlage S3000-48 (Victron System)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Frischwassertank 93L + Pumpe
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Trockentoilette – Clesana (wasserlos)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Vollständige Küche, Bett & Holzofen
              </li>
            </ul>
          </div>
        </button>
      </div>

      {/* Model Selection */}
      {variant && (
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Modell wählen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => setModelId(m.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                  modelId === m.id
                    ? "border-green-600 bg-green-50 shadow"
                    : "border-gray-200 hover:border-green-300 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-bold text-gray-800 text-sm">{m.name}</span>
                  {m.tag && (
                    <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-1.5 py-0.5 rounded-full ml-1 shrink-0">
                      {m.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mb-2">{m.dimensions}</div>
                <div className="font-bold text-green-700 text-sm">
                  {EUR(m.basePrice[variant])}
                </div>
                {modelId === m.id && (
                  <div className="mt-1 text-xs text-green-600 font-semibold">✓ Ausgewählt</div>
                )}
              </button>
            ))}
          </div>

          {/* Model details */}
          {selectedModel && (
            <div className="mt-4 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Abmessungen</div>
                  <div className="font-semibold text-gray-700">{selectedModel.dimensions}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Anhänger</div>
                  <div className="font-semibold text-gray-700">{selectedModel.trailer}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Basispreis</div>
                  <div className="font-bold text-green-700 text-base">
                    {EUR(selectedModel.basePrice[variant])}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!variant || !modelId}
          className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Weiter → Optionen wählen
        </button>
      </div>
    </div>
  );
}

// ─── STEP 2: Options ───────────────────────────────────────────────────────
function Step2({
  variant,
  model,
  selectedOptionIds,
  transportKm,
  setTransportKm,
  onToggle,
  onNext,
  onBack,
}: {
  variant: Variant;
  model: ModelConfig;
  selectedOptionIds: Set<string>;
  transportKm: number;
  setTransportKm: (km: number) => void;
  onToggle: (id: string, locked: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [openCats, setOpenCats] = useState<Set<string>>(new Set());
  const includedItems = variant === "offgrid" ? OFF_GRID_INCLUDED_ITEMS : ON_GRID_INCLUDED_ITEMS;

  const toggleCat = (id: string) => {
    setOpenCats((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const isLocked = (item: OptionItem) => item.lockedFor?.includes(variant) ?? false;
  const isDefault = (item: OptionItem) => item.defaultFor?.includes(variant) ?? false;
  const isHidden = (item: OptionItem) => item.hideFor?.includes(variant) ?? false;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Optionen konfigurieren</h2>
      <p className="text-gray-500 mb-2 text-sm">
        Modell: <strong className="text-gray-700">{model.name}</strong> ·{" "}
        <strong className="text-gray-700">{variant === "offgrid" ? "Off-Grid" : "On-Grid"}</strong>
      </p>
      <p className="text-gray-500 mb-6 text-sm">
        {variant === "offgrid"
          ? "Die mit 🔒 markierten Positionen sind im Off-Grid Basispaket enthalten und können nicht abgewählt werden. Sie können weitere Ausstattungen hinzufügen."
          : "Wählen Sie die gewünschten Ausstattungsoptionen für Ihr Tiny House."}
      </p>

      {/* Included items info box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-700 font-bold text-sm">
            ✅ Im {variant === "offgrid" ? "Off-Grid" : "On-Grid"} Basispaket enthalten
          </span>
          <span className="text-xs text-green-600 font-semibold">({EUR(model.basePrice[variant])})</span>
        </div>
        <ul className="text-xs text-green-800 space-y-1">
          {includedItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Option Categories */}
      <div className="space-y-3">
        {OPTION_CATEGORIES.map((cat) => {
          // Filter items
          const visibleItems = cat.items.filter((item) => !isHidden(item));
          if (cat.id === "transport") return null; // handled separately
          if (visibleItems.length === 0) return null;

          const isOpen = openCats.has(cat.id);
          const selectedCount = visibleItems.filter(
            (item) => selectedOptionIds.has(item.id) || isLocked(item)
          ).length;

          return (
            <div key={cat.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleCat(cat.id)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-semibold text-gray-800">{cat.label}</span>
                  {selectedCount > 0 && (
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                      {selectedCount} gewählt
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-lg">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="divide-y divide-gray-100 bg-white">
                  {visibleItems.map((item) => {
                    const locked = isLocked(item);
                    const checked = locked || selectedOptionIds.has(item.id);

                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-3 p-4 transition-colors ${
                          locked ? "bg-green-50" : checked ? "bg-emerald-50" : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="pt-0.5">
                          {locked ? (
                            <div
                              className="w-5 h-5 rounded flex items-center justify-center bg-green-600 text-white text-xs shrink-0"
                              title="Im Paket enthalten – nicht abwählbar"
                            >
                              🔒
                            </div>
                          ) : (
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => onToggle(item.id, locked)}
                              className="w-5 h-5 accent-green-600 cursor-pointer shrink-0"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span
                                className={`font-medium text-sm ${
                                  locked || (isDefault(item) && checked) ? "text-green-800" : "text-gray-800"
                                }`}
                              >
                                {item.label}
                              </span>
                              {(locked || (isDefault(item) && checked)) && (
                                <span className="ml-2 text-xs text-green-600 font-semibold">
                                  inkl.
                                </span>
                              )}
                              {item.note && !locked && !(isDefault(item) && checked) && (
                                <div className="text-xs text-gray-400 italic mt-0.5">{item.note}</div>
                              )}
                              {item.description && (
                                <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                  {item.description}
                                </div>
                              )}
                            </div>
                            {!locked && !isDefault(item) && (
                              <span className="font-bold text-green-700 text-sm shrink-0 whitespace-nowrap">
                                + {EUR(item.price)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Transport - special km input */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => toggleCat("transport")}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🚛</span>
              <span className="font-semibold text-gray-800">Transport</span>
              {transportKm > 0 && (
                <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                  {transportKm} km · {EUR(transportKm * 2)}
                </span>
              )}
            </div>
            <span className="text-gray-400 text-lg">
              {openCats.has("transport") ? "▲" : "▼"}
            </span>
          </button>
          {openCats.has("transport") && (
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-600 mb-3">
                Transport von unserer Werkstatt: <strong>2,00 € / km</strong> (einfache Strecke) +
                MwSt.
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={0}
                  max={5000}
                  value={transportKm || ""}
                  onChange={(e) => setTransportKm(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="Entfernung in km"
                  className="w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <span className="text-sm text-gray-500">km</span>
                {transportKm > 0 && (
                  <span className="font-bold text-green-700 text-sm">= {EUR(transportKm * 2)}</span>
                )}
              </div>
            </div>
          )}
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
          className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-all"
        >
          Weiter → Kundendaten
        </button>
      </div>
    </div>
  );
}

// ─── STEP 3: Client Info ───────────────────────────────────────────────────
function Step3({
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

// ─── STEP 4: Summary & PDF ─────────────────────────────────────────────────
function Step4({
  variant,
  model,
  selectedOptionIds,
  transportKm,
  clientInfo,
  onBack,
}: {
  variant: Variant;
  model: ModelConfig;
  selectedOptionIds: Set<string>;
  transportKm: number;
  clientInfo: ClientInfo;
  onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Build summary rows – only show non-default extras that the customer added
  const optionRows = useMemo(() => {
    const rows: Array<{ cat: string; label: string; price: number }> = [];
    for (const cat of OPTION_CATEGORIES) {
      for (const item of cat.items) {
        if (!selectedOptionIds.has(item.id)) continue;
        if (item.hideFor?.includes(variant)) continue;
        if (item.lockedFor?.includes(variant)) continue;
        if (item.defaultFor?.includes(variant)) continue; // already in base price
        if (item.id === "transport_km") continue;
        rows.push({ cat: cat.label, label: item.label, price: item.price });
      }
    }
    return rows;
  }, [selectedOptionIds, variant]);

  const optionsTotal = optionRows.reduce((s, r) => s + r.price, 0);
  const transportTotal = transportKm * 2;
  // All prices are GROSS (inkl. 21% MwSt.)
  const total = model.basePrice[variant] + optionsTotal + transportTotal;
  const netto = Math.round(total / 1.21);
  const vat = total - netto;

  const handleDownload = async () => {
    setLoading(true);
    try {
      await generatePDF({
        variant,
        model,
        selectedOptionIds,
        transportKm,
        clientInfo,
      });
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
        Überprüfen Sie Ihre Konfiguration und laden Sie das Preisangebot als PDF herunter.
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
          {clientInfo.salesAgent && (
            <div>
              <div className="text-xs text-gray-400">Vertriebspartner</div>
              <div>{clientInfo.salesAgent}</div>
            </div>
          )}
        </div>
      </div>

      {/* Model */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
        <div className="bg-gray-800 text-white px-4 py-2.5 text-sm font-bold">
          Ausgewähltes Modell
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <div className="font-bold text-gray-800">
              {model.name}{" "}
              <span className="text-sm font-normal text-gray-500">
                ({variant === "offgrid" ? "Off-Grid – Vollautark" : "On-Grid – Netzanschluss"})
              </span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{model.dimensions} · {model.trailer}</div>
          </div>
          <div className="font-bold text-green-700 text-lg">
            {EUR(model.basePrice[variant])}
          </div>
        </div>
      </div>

      {/* Options */}
      {optionRows.length > 0 && (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
          <div className="bg-gray-800 text-white px-4 py-2.5 text-sm font-bold">
            Ausgewählte Optionen
          </div>
          <div className="divide-y divide-gray-100">
            {optionRows.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 text-sm">
                <div>
                  <span className="text-gray-800">{r.label}</span>
                  <span className="ml-2 text-xs text-gray-400">{r.cat}</span>
                </div>
                <span className="font-semibold text-gray-700">+ {EUR(r.price)}</span>
              </div>
            ))}
            {transportKm > 0 && (
              <div className="flex items-center justify-between px-4 py-2.5 text-sm">
                <div>
                  <span className="text-gray-800">Transport ab Oradea</span>
                  <span className="ml-2 text-xs text-gray-400">{transportKm} km × 2,00 €</span>
                </div>
                <span className="font-semibold text-gray-700">+ {EUR(transportTotal)}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Price Summary */}
      <div className="border-2 border-green-200 rounded-xl overflow-hidden mb-8">
        <div className="bg-green-700 text-white px-4 py-2.5 text-sm font-bold">
          Preiszusammenfassung
        </div>
        <div className="p-4 space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Basispaket {model.name}</span>
            <span>{EUR(model.basePrice[variant])}</span>
          </div>
          {optionsTotal > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Zusätzliche Optionen</span>
              <span>{EUR(optionsTotal)}</span>
            </div>
          )}
          {transportTotal > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Transport</span>
              <span>{EUR(transportTotal)}</span>
            </div>
          )}
          <div className="border-t pt-2 flex justify-between text-gray-400 text-xs">
            <span>davon Netto</span>
            <span>{EUR(netto)}</span>
          </div>
          <div className="flex justify-between text-gray-400 text-xs">
            <span>davon MwSt. 21%</span>
            <span>{EUR(vat)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-green-700 text-xl">
            <span>Gesamtbetrag (inkl. MwSt.)</span>
            <span>{EUR(total)}</span>
          </div>
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
            done
              ? "bg-green-600 text-white"
              : "bg-green-700 hover:bg-green-800 text-white"
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
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [modelId, setModelId] = useState<string | null>(null);
  const [selectedOptionIds, setSelectedOptionIds] = useState<Set<string>>(new Set());
  const [transportKm, setTransportKm] = useState(0);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: "",
    address: "",
    salesAgent: "",
    date: today(),
  });

  // When variant changes, initialize defaults
  const handleSetVariant = useCallback((v: Variant) => {
    setVariant(v);
    const defaults = new Set<string>();
    for (const cat of OPTION_CATEGORIES) {
      for (const item of cat.items) {
        if (item.lockedFor?.includes(v) || item.defaultFor?.includes(v)) {
          defaults.add(item.id);
        }
      }
    }
    setSelectedOptionIds(defaults);
  }, []);

  const handleToggle = useCallback((id: string, locked: boolean) => {
    if (locked) return;
    setSelectedOptionIds((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }, []);

  const model = MODELS.find((m) => m.id === modelId);

  // Compute totals for badge
  // Default items (defaultFor) are baked into the base price → always €0.
  // Non-default items add their price when selected.
  // Price can ONLY go UP from the base price.
  const { optionsTotal, transportTotal } = useMemo(() => {
    const v = variant ?? "ongrid";
    let opt = 0;
    for (const cat of OPTION_CATEGORIES) {
      for (const item of cat.items) {
        if (item.hideFor?.includes(v)) continue;
        if (item.lockedFor?.includes(v)) continue;
        if (item.id === "transport_km") continue;
        const isDefault = item.defaultFor?.includes(v) ?? false;
        if (isDefault) continue; // always included in base price, never add/subtract
        if (selectedOptionIds.has(item.id)) opt += item.price; // extra added → surcharge
      }
    }
    return { optionsTotal: opt, transportTotal: transportKm * 2 };
  }, [selectedOptionIds, variant, transportKm]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <StepBar step={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <Step1
              variant={variant}
              setVariant={handleSetVariant}
              modelId={modelId}
              setModelId={setModelId}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && variant && model && (
            <Step2
              variant={variant}
              model={model}
              selectedOptionIds={selectedOptionIds}
              transportKm={transportKm}
              setTransportKm={setTransportKm}
              onToggle={handleToggle}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3
              clientInfo={clientInfo}
              setClientInfo={setClientInfo}
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}
          {step === 4 && variant && model && (
            <Step4
              variant={variant}
              model={model}
              selectedOptionIds={selectedOptionIds}
              transportKm={transportKm}
              clientInfo={clientInfo}
              onBack={() => setStep(3)}
            />
          )}
        </div>

        {/* Sticky price badge */}
        {model && variant && step > 1 && (
          <div className="lg:col-span-1">
            <PriceBadge
              basePrice={model.basePrice[variant]}
              optionsTotal={optionsTotal}
              transportTotal={transportTotal}
            />
          </div>
        )}
      </div>
    </div>
  );
}
