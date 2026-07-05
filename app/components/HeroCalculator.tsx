"use client";
import { useState } from "react";
import { useModal } from "./ModalContext";

const steuersatzOptions = [
  { label: "32 %", value: 0.32 },
  { label: "42 %", value: 0.42 },
  { label: "45 %", value: 0.45 },
];

function calcResults(kaufpreis: number, steuersatz: number) {
  const iab       = kaufpreis * 0.5 * steuersatz;
  // §7g Abs.2: IAB-Bildung mindert die AfA-Bemessungsgrundlage im Kaufjahr
  const afaBasis  = kaufpreis * 0.5;
  const sonderAfa = afaBasis * 0.4 * steuersatz;
  const degAfa    = afaBasis * 0.3 * steuersatz;
  const total     = iab + sonderAfa + degAfa * 0.5;
  return { iab, sonderAfa, total };
}

function fmt(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function HeroCalculator() {
  const { openModal } = useModal();
  const [kaufpreis, setKaufpreis]         = useState(79000);
  const [steuersatzIdx, setSteuersatzIdx] = useState(1); // 42 %

  const steuersatz = steuersatzOptions[steuersatzIdx].value;
  const { iab, sonderAfa, total } = calcResults(kaufpreis, steuersatz);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 w-full lg:max-w-sm lg:mt-10">

      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-black text-gray-900 text-sm">Steuer-Vorteil berechnen</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Sofortige Schätzung auf Basis §7g EStG</p>
        </div>
        <span className="text-lg"></span>
      </div>

      {/* Kaufpreis slider */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="kaufpreis-range" className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">
            <span>💰</span> Kaufpreis (Asset)
          </label>
          <span className="font-data text-sm font-black text-gray-900">{fmt(kaufpreis)}</span>
        </div>
        <input
          id="kaufpreis-range"
          type="range"
          min={60000}
          max={95000}
          step={1000}
          value={kaufpreis}
          aria-label="Kaufpreis des Assets"
          aria-valuemin={60000}
          aria-valuemax={95000}
          aria-valuenow={kaufpreis}
          aria-valuetext={fmt(kaufpreis)}
          onChange={(e) => setKaufpreis(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-[10px] text-gray-400 mt-0.5 font-data">
          <span>60.000 € (Comfort)</span>
          <span>95.000 € (Elite)</span>
        </div>
      </div>

      {/* Steuersatz */}
      <div className="mb-3">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
          <span>📊</span> Grenzsteuersatz
        </p>
        <div className="flex gap-2">
          {steuersatzOptions.map((opt, idx) => (
            <button
              key={opt.label}
              onClick={() => setSteuersatzIdx(idx)}
              className={`flex-1 py-1.5 rounded-xl text-sm font-bold border transition-all ${
                steuersatzIdx === idx
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 mb-3" />

      {/* Results */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
          <div>
            <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">IAB-Erstattung</p>
            <p className="text-[10px] text-gray-400">50 % vorab · §7g Abs. 1</p>
          </div>
          <span className="font-data text-base font-black text-gray-800">{fmt(iab)}</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
          <div>
            <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Sonder-AfA</p>
            <p className="text-[10px] text-gray-400">40 % · §7g Abs. 5</p>
          </div>
          <span className="font-data text-base font-black text-gray-800">{fmt(sonderAfa)}</span>
        </div>
        <div className="flex items-center justify-between bg-green-600 rounded-xl px-3 py-3">
          <div>
            <p className="text-[11px] text-green-200 font-semibold uppercase tracking-wider flex items-center gap-1">
              <span>🎯</span> Steuer-Vorteil Jahr 1
            </p>
            <p className="text-[10px] text-green-300">Konservative Schätzung</p>
          </div>
          <span className="font-data text-xl font-black text-white">{fmt(total)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2.5 rounded-2xl text-sm transition-all cursor-pointer"
      >
        Unverbindliches Erstgespräch anfragen →
      </button>
      <p className="text-center text-[10px] text-gray-400 mt-1.5">
        * Schätzung · Abhängig von Steuersituation · Steuerberater konsultieren
      </p>
    </div>
  );
}
