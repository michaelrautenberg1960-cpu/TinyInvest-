"use client";
import { useState } from "react";
import Link from "next/link";

const tabs = ["📋 Steuer-Investor", "📈 Rendite-Investor", "🏡 Finanzierungs-Käufer"];

const steuerSteps = [
  { num: "01", title: "Steuerberater konsultieren", desc: "Sie nehmen unser Steuer-Factsheet mit und lassen prüfen, ob IAB und Sonder-AfA für Sie anwendbar sind. (Spoiler: Fast immer ja.)" },
  { num: "02", title: "IAB bilden", desc: "Ihr Steuerberater bildet den Investitionsabzugsbetrag (50 %) – oft noch rückwirkend für das Vorjahr. Das Finanzamt überweist ca. 16.000–17.000 € zurück.", link: { href: "/wissen/iab-tiny-house", label: "IAB beantragen: Schritt-für-Schritt-Anleitung →" } },
  { num: "03", title: "Haus kaufen & liefern", desc: "Sie wählen Ihr TinyInvest-Modell, wir produzieren es und liefern es auf den vereinbarten Standort in Deutschland oder der EU." },
  { num: "04", title: "Vermietung & Steuer genießen", desc: "Ihr Haus geht sofort in den Betrieb. Sonder-AfA und AfA werden in der Steuererklärung geltend gemacht. Monatliche Mieteinnahmen fließen." },
];

const renditeSteps = [
  { num: "01", title: "Modell & Standort wählen", desc: "Wählen Sie Ihr Modell und Ihren Wunschstandort – ob Deutschland, Österreich, Rumänien oder Kroatien. Wir beraten Sie bei der Standortwahl." },
  { num: "02", title: "Host & Lieferung", desc: "Wir vermitteln Ihnen einen verifizierten Host vor Ort, der Reinigung, Check-in und Pflege übernimmt. Ihr Haus wird geliefert und aufgestellt." },
  { num: "03", title: "Monatliche Auszahlung", desc: "Los geht's: Ihr Haus ist buchbar. Sie erhalten 40 % der Einnahmen monatlich ausgezahlt – transparent und vollständig passiv." },
];

const finanzSteps = [
  { num: "01", title: "Beratungsgespräch", desc: "Wir klären gemeinsam Ihre Finanzierungsmöglichkeiten: Kredit, Ratenkauf oder Leasing. Ihr Budget bestimmt das passende Modell." },
  { num: "02", title: "IAB als Eigenkapital", desc: "Ihr Steuerberater bildet den IAB, das Finanzamt zahlt Ihnen ca. 16.000–17.000 € zurück. Dieses Geld nutzen Sie als Eigenkapital für die Bank.", link: { href: "/wissen/iab-tiny-house", label: "IAB beantragen: Schritt-für-Schritt-Anleitung →" } },
  { num: "03", title: "Kredit & Lieferung", desc: "Mit echtem Eigenkapital aus der Steuer erhalten Sie günstige Konditionen. Das Haus wird geliefert und sofort vermietet." },
  { num: "04", title: "Miete tilgt den Kredit", desc: "Ihre 40 % Mieteinnahmen decken die monatliche Kreditrate – oft mit positivem Cashflow. Das Haus gehört nach der Laufzeit Ihnen." },
];

function StepCard({ num, title, desc, link }: { num: string; title: string; desc: string; link?: { href: string; label: string } }) {
  return (
    <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mx-auto mb-5 shadow-lg"
        style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
      >
        {num}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
      {link && (
        <Link href={link.href} className="inline-block mt-3 text-green-700 font-semibold text-xs hover:underline">
          {link.label}
        </Link>
      )}
    </div>
  );
}

export default function Prozess() {
  const [activeTab, setActiveTab] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="prozess" className="py-20 bg-platform border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Der Prozess</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            So einfach geht&apos;s
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Wählen Sie Ihren Weg – wir begleiten Sie Schritt für Schritt durch den Prozess.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steuerSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renditeSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {finanzSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}

        {/* ── YouTube Video ──────────────────────────── */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Das Konzept im Video</span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2 tracking-tight">
              Sehen Sie selbst, wie TinyInvest funktioniert
            </h3>
          </div>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            {videoLoaded ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/CTZJA2tUlZg?start=20&rel=0&modestbranding=1&autoplay=1"
                title="TinyInvest – Das Konzept"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                onClick={() => setVideoLoaded(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Video abspielen"
              >
                <img
                  src="https://img.youtube.com/vi/CTZJA2tUlZg/maxresdefault.jpg"
                  alt="TinyInvest Video Vorschau"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
