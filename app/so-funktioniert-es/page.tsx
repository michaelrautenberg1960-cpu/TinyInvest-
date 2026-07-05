"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubPageHeader from "../components/SubPageHeader";
import ModalButton from "../components/ModalButton";
import Link from "next/link";

const paths = [
  {
    id: "steuer",
    label: "📋 Steuer-Investor",
    subtitle: "IAB + Sonder-AfA · Steuervorteil im Vordergrund",
    steps: [
      { num: "01", title: "Steuerberater konsultieren", desc: "Du nimmst unser Steuer-Factsheet mit und lässt prüfen, ob IAB und Sonder-AfA für dich anwendbar sind. (Spoiler: Fast immer ja.)" },
      { num: "02", title: "IAB bilden", desc: "Dein Steuerberater bildet den Investitionsabzugsbetrag (50 %) – oft noch rückwirkend für das Vorjahr. Das Finanzamt überweist ca. 16.000–17.000 € zurück." },
      { num: "03", title: "Haus kaufen & liefern", desc: "Du wählst dein TinyInvest-Modell, wir produzieren es und liefern es auf den vereinbarten Standort in Deutschland oder der EU." },
      { num: "04", title: "Vermietung & Steuer genießen", desc: "Dein Haus geht sofort in den Betrieb. Sonder-AfA und AfA werden in der Steuererklärung geltend gemacht. Monatliche Mieteinnahmen fließen." },
    ],
  },
  {
    id: "rendite",
    label: "📈 Rendite-Investor",
    subtitle: "Passiver Cashflow · 40 % der Einnahmen monatlich",
    steps: [
      { num: "01", title: "Modell & Standort wählen", desc: "Wähle dein Modell und deinen Wunschstandort – ob Deutschland, Österreich, Rumänien oder Kroatien. Wir beraten dich bei der Standortwahl." },
      { num: "02", title: "Host & Lieferung", desc: "Wir vermitteln dir einen verifizierten Host vor Ort, der Reinigung, Check-in und Pflege übernimmt. Dein Haus wird geliefert und aufgestellt." },
      { num: "03", title: "Monatliche Auszahlung", desc: "Los geht's: Dein Haus ist buchbar. Du erhältst 40 % der Einnahmen monatlich ausgezahlt – transparent und vollständig passiv." },
    ],
  },
  {
    id: "finanzierung",
    label: "🏡 Finanzierungs-Käufer",
    subtitle: "Kredit · Miete tilgt die Rate",
    steps: [
      { num: "01", title: "Beratungsgespräch", desc: "Wir klären gemeinsam deine Finanzierungsmöglichkeiten: Kredit, Ratenkauf oder Leasing. Dein Budget bestimmt das passende Modell." },
      { num: "02", title: "IAB als Eigenkapital", desc: "Dein Steuerberater bildet den IAB, das Finanzamt zahlt dir ca. 16.000–17.000 € zurück. Dieses Geld nutzt du als Eigenkapital für die Bank." },
      { num: "03", title: "Kredit & Lieferung", desc: "Mit echtem Eigenkapital aus der Steuer bekommst du günstige Konditionen. Das Haus wird geliefert und sofort vermietet." },
      { num: "04", title: "Miete tilgt den Kredit", desc: "Deine 40 % Mieteinnahmen decken die monatliche Kreditrate – oft mit positivem Cashflow. Das Haus gehört nach der Laufzeit dir." },
    ],
  },
];

const timeline = [
  { phase: "Woche 1", title: "Erstberatung & Factsheet", desc: "Kostenfreies Gespräch · Steuer-Factsheet für deinen Steuerberater", icon: "💬" },
  { phase: "Woche 2–4", title: "IAB-Bildung & Freigabe", desc: "Steuerberater prüft und bildet den IAB · Finanzamt-Rückzahlung initiiert", icon: "📋" },
  { phase: "Woche 4–6", title: "Kaufvertrag & Anzahlung", desc: "Direkt mit dem Hersteller · TinyInvest vermittelt, verwaltet, betreut", icon: "✍️" },
  { phase: "Woche 8–16", title: "Produktion & Lieferung", desc: "Individuelle Konfiguration · Vlemmix-Trailer-Zertifizierung · Übergabe EU-weit", icon: "🏗️" },
  { phase: "Ab Lieferung", title: "Betrieb & Auszahlung", desc: "lokale Partner übernimmt Hosting · 40 % monatlich automatisch ausgezahlt", icon: "💶" },
];

export default function SoFunktioniertEsPage() {
  const [active, setActive] = useState(0);
  const path = paths[active];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <SubPageHeader
        badge="Der Prozess · So funktioniert es"
        title="Vom Erstkontakt zum laufenden Asset. In 3 Schritten."
        subtitle="Wähle deinen Weg — Steuer-Optimierung, passiver Cashflow oder Finanzierungs-Modell. Wir begleiten dich von der ersten Anfrage bis zur monatlichen Auszahlung."
        img="/images/investieren.png"
      />

      {/* Path selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Dein Investor-Profil</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              Wähle deinen Weg
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
              Jeder Investor hat andere Prioritäten. Wir haben für jedes Profil einen klaren Prozess.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {paths.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 rounded-full text-[13px] font-semibold transition-all ${
                  active === i
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active path subtitle */}
          <div className="text-center mb-8">
            <span className="inline-block bg-green-50 border border-green-100 text-green-700 text-[12px] font-semibold px-4 py-1.5 rounded-full">
              {path.subtitle}
            </span>
          </div>

          {/* Steps */}
          <div className={`grid gap-5 ${path.steps.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-4"}`}>
            {path.steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < path.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-5 h-0.5 bg-green-100 z-10" style={{ transform: "translateX(-50%)" }} />
                )}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white mx-auto mb-5 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-[13px] font-black text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed text-center">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Zeitplan</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 tracking-tight">Von der Anfrage zum laufenden Asset</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block" />

            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-green-100 flex items-center justify-center text-2xl shadow-sm z-10">
                    {t.icon}
                  </div>
                  {/* Content */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-grow shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-data text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{t.phase}</span>
                      <h3 className="font-black text-gray-900 text-[13px]">{t.title}</h3>
                    </div>
                    <p className="text-gray-500 text-[12px]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Noch Fragen?</p>
            <h3 className="text-xl font-black text-gray-900 mb-3">Wir beantworten sie im Detail</h3>
            <p className="text-gray-500 text-[13px] mb-6">
              Oder beantworte dir selbst die häufigsten Investoren-Fragen zu §7g, Betrieb, Rendite und Regulierung.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-sm">
                Gespräch anfragen →
              </ModalButton>
              <Link href="/#faq" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-all">
                FAQ ansehen →
              </Link>
              <Link href="/marktplatz" className="border border-green-600 text-green-700 hover:bg-green-50 font-semibold px-6 py-3 rounded-full text-sm transition-all">
                Projekte ansehen →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Link href="/wissen/iab-tiny-house" className="border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
                IAB Steuerguide lesen →
              </Link>
              <Link href="/wissen/host-werden" className="border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
                Host werden Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
