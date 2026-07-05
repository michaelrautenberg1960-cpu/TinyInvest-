"use client";
import { useState } from "react";

export default function RenditeRechner() {
  const [kaufpreis, setKaufpreis] = useState(79000);
  const [preisNacht, setPreisNacht] = useState(100);
  const [auslastung, setAuslastung] = useState(60);
  const [steuersatz, setSteuersatz] = useState(42);

  // Mieteinnahmen
  const naechteJahr = Math.round((auslastung / 100) * 365);
  const bruttoJahr = naechteJahr * preisNacht;
  const investorAnteil = bruttoJahr * 0.4;
  const investorMonatlich = investorAnteil / 12;

  // Steuereffekt (Sonder-AfA 40 % + degr. AfA 30 % auf vollen Kaufpreis + IAB 50 % Vorjahr)
  const iabSteuer = kaufpreis * 0.5 * (steuersatz / 100);
  const sonderAfaSteuer = kaufpreis * 0.4 * (steuersatz / 100);
  const degrAfaSteuer = kaufpreis * 0.3 * (steuersatz / 100);
  const gesamtSteuererstattung = iabSteuer + sonderAfaSteuer + degrAfaSteuer;

  // Effektives Kapital nach Steuererstattung
  const effektivesKapital = Math.max(kaufpreis - gesamtSteuererstattung, 1);

  // Effektive Rendite
  const rendite = (investorAnteil / effektivesKapital) * 100;

  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");


  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">

      {/* Schieberegler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Kaufpreis Ihres Hauses
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{fmt(kaufpreis)} €</div>
          <input
            type="range" min={60000} max={95000} step={1000} value={kaufpreis}
            onChange={(e) => setKaufpreis(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>60.000 € (Comfort)</span><span>95.000 € (Elite)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Preis pro Nacht
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{preisNacht} €</div>
          <input
            type="range" min={80} max={130} step={5} value={preisNacht}
            onChange={(e) => setPreisNacht(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>80 € (Standard)</span><span>130 € (Top-Lage)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Auslastung
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{auslastung} % <span className="text-base font-normal text-gray-400">({naechteJahr} Nächte/Jahr)</span></div>
          <input
            type="range" min={50} max={75} step={5} value={auslastung}
            onChange={(e) => setAuslastung(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>50 % (konservativ)</span><span>75 % (Top-Standort)</span>
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

      {/* Ergebnisse */}
      <div className="grid grid-cols-1 gap-3 mb-5">
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Monatlich (Ihre 40 %)</p>
            <p className="text-xs text-gray-400 mt-0.5">{naechteJahr} Nächte × {preisNacht} € × 40 %</p>
          </div>
          <p className="text-2xl font-black text-green-700">{fmt(investorMonatlich)} €</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Jährlicher Ertrag</p>
            <p className="text-xs text-gray-400 mt-0.5">vor Steuern auf Einnahmen</p>
          </div>
          <p className="text-2xl font-black text-green-700">{fmt(investorAnteil)} €</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Steuer-Erstattung Jahr 1</p>
            <p className="text-xs text-gray-400 mt-0.5">IAB + Sonder-AfA + degr. AfA</p>
          </div>
          <p className="text-2xl font-black text-green-700">+{fmt(gesamtSteuererstattung)} €</p>
        </div>
      </div>

      {/* Hauptergebnis */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-green-100 text-sm font-semibold">Effektive Eigenkapitalrendite</p>
            <p className="text-green-200 text-xs mt-1 leading-relaxed">
              {fmt(investorAnteil)} € ÷ {fmt(effektivesKapital)} € Netto-Investment
            </p>
          </div>
          <p className="text-4xl sm:text-5xl font-black text-white flex-shrink-0">{rendite.toFixed(1)} %</p>
        </div>
        <div className="mt-3 pt-3 border-t border-green-500/40 grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs text-green-200">
          <span>📊 Brutto: {fmt(bruttoJahr)} €/Jahr</span>
          <span>🏠 Effektiv: {fmt(effektivesKapital)} €</span>
          <span>🌙 {naechteJahr} × {preisNacht} €</span>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        <strong className="text-gray-500">Unverbindliche Schätzung · Erfahrungswerte lokaler Partner · keine Garantie</strong><br />
        * Rendite auf Netto-Investition nach IAB (50 %), Sonder-AfA (40 %) und degressiver AfA (30 %) bei {steuersatz} % Grenzsteuersatz. Mietpreis {preisNacht} €/Nacht, {auslastung} % Auslastung ({naechteJahr} Nächte). Individuelle Ergebnisse hängen von Standort, Steuersatz und Auslastung ab. Stand: § 7g EStG, § 7 Abs. 2 EStG (2026).
      </p>
    </div>
  );
}
