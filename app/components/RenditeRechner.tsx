"use client";
import { useState } from "react";

const MODELLE = [
  { label: "On-Grid", preis: 74700 },
  { label: "Off-Grid", preis: 83400 },
];
const PACHT_JAHR = 2500;

export default function RenditeRechner() {
  const [modell, setModell] = useState(0);
  const [preisNacht, setPreisNacht] = useState(120);
  const [auslastung, setAuslastung] = useState(60);
  const [steuersatz, setSteuersatz] = useState(42);

  const kaufpreis = MODELLE[modell].preis;

  // Mieteinnahmen: Pacht wird vor der Aufteilung abgezogen, vom Rest erhält der Investor 40 %
  const naechteJahr = Math.round((auslastung / 100) * 365);
  const bruttoJahr = naechteJahr * preisNacht;
  const nachPacht = Math.max(bruttoJahr - PACHT_JAHR, 0);
  const investorAnteil = nachPacht * 0.4;
  const investorMonatlich = investorAnteil / 12;
  const renditeVorSteuern = (investorAnteil / kaufpreis) * 100;

  // Steuereffekt: IAB 50 % im Vorjahr, im Kaufjahr Sonder-AfA 40 % + degr. AfA 30 % auf die um den IAB geminderte Basis
  const iabSteuer = kaufpreis * 0.5 * (steuersatz / 100);
  const afaBasis = kaufpreis * 0.5;
  const afaSteuer = afaBasis * (0.4 + 0.3) * (steuersatz / 100);
  const gesamtSteuereffekt = iabSteuer + afaSteuer;

  // Gebundenes Kapital nach Steuereffekt
  const effektivesKapital = Math.max(kaufpreis - gesamtSteuereffekt, 1);
  const rendite = (investorAnteil / effektivesKapital) * 100;

  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");


  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">

      {/* Schieberegler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Modell (Escape 660)
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{fmt(kaufpreis)} € <span className="text-base font-normal text-gray-400">netto</span></div>
          <div className="grid grid-cols-2 gap-2">
            {MODELLE.map((m, i) => (
              <button
                key={m.label}
                type="button"
                onClick={() => setModell(i)}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-all ${modell === i ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"}`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Preis pro Nacht
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{preisNacht} €</div>
          <input
            type="range" min={80} max={160} step={5} value={preisNacht}
            onChange={(e) => setPreisNacht(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>80 € (Standard)</span><span>160 € (Top-Lage)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Auslastung
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{auslastung} % <span className="text-base font-normal text-gray-400">({naechteJahr} Nächte/Jahr)</span></div>
          <input
            type="range" min={40} max={80} step={5} value={auslastung}
            onChange={(e) => setAuslastung(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>40 % (konservativ)</span><span>80 % (Top-Standort)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Ihr Grenzsteuersatz
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{steuersatz} %</div>
          <input
            type="range" min={30} max={45} step={1} value={steuersatz}
            onChange={(e) => setSteuersatz(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>30 %</span><span>45 %</span>
          </div>
        </div>
      </div>

      {/* Aufschlüsselung */}
      <div className="bg-gray-50 rounded-2xl px-5 py-4 mb-3 text-[13px]">
        {[
          { label: `Umsatz (${naechteJahr} Nächte × ${preisNacht} €)`, value: `${fmt(bruttoJahr / 12)} €` },
          { label: `Stellplatzpacht (${fmt(PACHT_JAHR)} €/Jahr)`, value: `– ${fmt(PACHT_JAHR / 12)} €` },
          { label: "Host (45 % vom Rest)", value: `– ${fmt((nachPacht * 0.45) / 12)} €` },
          { label: "Plattform (15 % vom Rest)", value: `– ${fmt((nachPacht * 0.15) / 12)} €` },
        ].map((row) => (
          <div key={row.label} className="flex justify-between py-1.5 text-gray-500">
            <span>{row.label}</span>
            <span className="font-data">{row.value}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 mt-1 border-t border-gray-200 font-bold text-gray-700">
          <span>Ihre Auszahlung (40 % vom Rest) pro Monat</span>
          <span className="font-data text-green-700">{fmt(investorMonatlich)} €</span>
        </div>
      </div>

      {/* Ergebnisse */}
      <div className="grid grid-cols-1 gap-3 mb-5">
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Jährlicher Ertrag</p>
            <p className="text-xs text-gray-400 mt-0.5">{renditeVorSteuern.toFixed(1)} % auf den Kaufpreis, vor Steuern</p>
          </div>
          <p className="text-2xl font-black text-green-700">{fmt(investorAnteil)} €</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Steuereffekt Vorjahr + Kaufjahr</p>
            <p className="text-xs text-gray-400 mt-0.5">IAB + Sonder-AfA + degr. AfA</p>
          </div>
          <p className="text-2xl font-black text-green-700">+{fmt(gesamtSteuereffekt)} €</p>
        </div>
      </div>

      {/* Hauptergebnis */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-green-100 text-sm font-semibold">Rendite auf gebundenes Kapital</p>
            <p className="text-green-200 text-xs mt-1 leading-relaxed">
              {fmt(investorAnteil)} € ÷ {fmt(effektivesKapital)} € nach Steuereffekt
            </p>
          </div>
          <p className="text-4xl sm:text-5xl font-black text-white flex-shrink-0">{rendite.toFixed(1)} %</p>
        </div>
        <div className="mt-3 pt-3 border-t border-green-500/40 grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs text-green-200">
          <span>📊 Umsatz: {fmt(bruttoJahr)} €/Jahr</span>
          <span>🏠 Gebunden: {fmt(effektivesKapital)} €</span>
          <span>🌙 {naechteJahr} × {preisNacht} €</span>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        <strong className="text-gray-500">Unverbindliche Beispielrechnung · keine Garantie · keine Steuerberatung</strong><br />
        * Stellplatzpacht ({fmt(PACHT_JAHR)} €/Jahr) wird vor der Aufteilung abgezogen. Steuereffekt: IAB (50 %) im Vorjahr, Sonder-AfA (40 %) und degressive AfA (30 %) auf die um den IAB geminderte Basis im Kaufjahr, bei {steuersatz} % Grenzsteuersatz. Ein großer Teil davon ist eine Steuerstundung. Ohne Versicherung und Steuern auf die Einnahmen. Stand: § 7g EStG, § 7 Abs. 2 EStG (2026).
      </p>
    </div>
  );
}
