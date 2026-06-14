"use client";
import { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    interesse: "Investitionsunterlagen + §7g-Steueranalyse anfordern",
    budget: "Asset #TE-2026-02 · TinyInvest Escape (79.000 €)",
    investmentVolumen: "60.000 – 80.000 € (1 Asset)",
    kontaktZeit: "Jederzeit / flexibel",
    nachricht: "",
    // Host-Bewerbung fields
    hostRegion: "",
    hostFlaeche: "500–1.000 m²",
    hostEigentum: "Eigentümer",
    hostBebauung: "Keine Infos vorhanden",
    hostVersorgung: "Ja – Strom & Wasser",
    hostAnzahl: "2–3",
  });

  const isHost = form.interesse === "Host-Bewerbung (Standort / Grundstück)";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname || !form.nachname || !form.email) {
      setError("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "generate_lead", { form_type: "kontakt", interesse: form.interesse });
    } catch {
      setError("Es gab einen Fehler. Bitte versuche es nochmal oder schreib uns direkt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-950 via-green-950 to-gray-900">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-700 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Live social proof */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[13px] font-semibold px-5 py-2.5 rounded-full">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            47 Investoren haben in den letzten 30 Tagen Investitionsunterlagen angefragt
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-[12px] font-semibold px-4 py-2 rounded-full mb-4 font-data">
            investitionsunterlagen/request
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
            Investitionsunterlagen anfordern
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto leading-relaxed">
            Sie erhalten das vollständige Investor-Paket: §7g-Steueranalyse, tiny Escapes Betreiberkonzept,
            Asset-Kennzahlen und individuelle Beratung – kostenfrei und unverbindlich.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* LEFT: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-2xl text-center flex flex-col items-center justify-center min-h-[420px]">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">Unterlagen angefordert</h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                  Ihre Anfrage ist eingegangen. Wir prüfen Ihre Angaben und senden Ihnen
                  das Investor-Paket innerhalb von 24&nbsp;Stunden persönlich zu.
                </p>
                <p className="text-[11px] text-gray-400 mt-4">Bitte auch Spam-Ordner prüfen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">

                {/* Form header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-base font-black text-gray-900">Unterlagen-Anfrage</h3>
                  <span className="bg-green-100 text-green-700 text-[11px] font-bold px-3 py-1 rounded-full">
                    Kostenfrei
                  </span>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      name="vorname"
                      value={form.vorname}
                      onChange={handleChange}
                      placeholder="Max"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      name="nachname"
                      value={form.nachname}
                      onChange={handleChange}
                      placeholder="Mustermann"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Telefon{" "}
                    <span className="text-gray-300 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={form.telefon}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Interesse */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Anfrage-Typ
                  </label>
                  <select
                    name="interesse"
                    value={form.interesse}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Investitionsunterlagen + §7g-Steueranalyse anfordern</option>
                    <option>Projektunterlagen zu einem spezifischen Asset</option>
                    <option>Rendite-Beratung (passives Einkommen)</option>
                    <option>Kauf auf Raten / Finanzierungsberatung</option>
                    <option>Host-Bewerbung (Standort / Grundstück)</option>
                    <option>Allgemeine Erstinformation</option>
                  </select>
                </div>

                {/* Host-Bewerbung: Grundstücks-Felder */}
                {isHost && (
                  <div className="mb-4 rounded-2xl border border-green-200 bg-green-50/60 p-4 space-y-3">
                    <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest flex items-center gap-1.5">
                      <span>🏡</span> Angaben zum Grundstück / Standort
                    </p>

                    {/* Region */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Region / Standort *
                      </label>
                      <input
                        type="text"
                        name="hostRegion"
                        value={form.hostRegion}
                        onChange={handleChange}
                        placeholder="z.B. Bayern, Nähe München"
                        required={isHost}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300 bg-white"
                      />
                    </div>

                    {/* Fläche + Eigentum */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Grundstücksgröße
                        </label>
                        <select
                          name="hostFlaeche"
                          value={form.hostFlaeche}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                        >
                          <option>{"< 500 m²"}</option>
                          <option>500–1.000 m²</option>
                          <option>1.000–3.000 m²</option>
                          <option>{"> 3.000 m²"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Eigentumsverhältnis
                        </label>
                        <select
                          name="hostEigentum"
                          value={form.hostEigentum}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                        >
                          <option>Eigentümer</option>
                          <option>Pächter / Mieter</option>
                          <option>Noch in Planung</option>
                        </select>
                      </div>
                    </div>

                    {/* Bebauung + Versorgung */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Bebauungsplan / Zonung
                        </label>
                        <select
                          name="hostBebauung"
                          value={form.hostBebauung}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                        >
                          <option>Touristisch / Freizeitfläche</option>
                          <option>Landwirtschaftlich</option>
                          <option>Wohngebiet</option>
                          <option>Keine Infos vorhanden</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Strom & Wasser vorhanden?
                        </label>
                        <select
                          name="hostVersorgung"
                          value={form.hostVersorgung}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                        >
                          <option>Ja – Strom & Wasser</option>
                          <option>Nur Strom</option>
                          <option>Nur Wasser</option>
                          <option>Noch keine Versorgung</option>
                        </select>
                      </div>
                    </div>

                    {/* Anzahl */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Wie viele Tiny Houses vorstellbar?
                      </label>
                      <select
                        name="hostAnzahl"
                        value={form.hostAnzahl}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                      >
                        <option>1</option>
                        <option>2–3</option>
                        <option>4–6</option>
                        <option>Mehr als 6</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Asset preference (nur bei Nicht-Host) */}
                {!isHost && (
                  <div className="mb-4">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Asset-Interesse
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                    >
                      <option>Asset #TE-2026-01 · TinyInvest Comfort (60.000 €)</option>
                      <option>Asset #TE-2026-02 · TinyInvest Escape (79.000 €)</option>
                      <option>Asset #TE-2026-03 · TinyInvest Elite (95.000 €)</option>
                      <option>Individuell – bitte beraten</option>
                    </select>
                  </div>
                )}

                {/* QUALIFIER: Investment volume (nur bei Nicht-Host) */}
                {!isHost && (
                  <div className="mb-4">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Geplantes Investitionsvolumen{" "}
                      <span className="text-gray-300 font-normal normal-case">(zur Vorbereitung)</span>
                    </label>
                    <select
                      name="investmentVolumen"
                      value={form.investmentVolumen}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                    >
                      <option>60.000 – 80.000 € (1 Asset)</option>
                      <option>80.000 – 100.000 € (1 Premium Asset)</option>
                      <option>120.000 – 160.000 € (2 Assets)</option>
                      <option>200.000 € + (3+ Assets / Portfolio)</option>
                      <option>Noch unklar – Erstberatung gewünscht</option>
                    </select>
                  </div>
                )}

                {/* Kontaktzeit */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Wann am besten erreichbar?
                  </label>
                  <select
                    name="kontaktZeit"
                    value={form.kontaktZeit}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Morgens (8–12 Uhr)</option>
                    <option>Mittags (12–15 Uhr)</option>
                    <option>Abends (17–20 Uhr)</option>
                    <option>Jederzeit / flexibel</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Fragen / Anmerkungen{" "}
                    <span className="text-gray-300 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    rows={3}
                    placeholder="z.B. Ich habe bereits einen IAB gebildet und möchte 2026 kaufen…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-3.5 rounded-xl text-base transition-all shadow-lg"
                >
                  {loading
                    ? "Wird übermittelt…"
                    : isHost
                    ? "🏡 Host-Bewerbung absenden →"
                    : "🔐 Investitionsunterlagen anfordern →"}
                </button>

                <p className="text-center text-[11px] text-gray-400 mt-3 flex items-center justify-center gap-1">
                  <span>🔒</span> Vertraulich · Keine Anlageberatung · Kein Spam · DSGVO-konform
                </p>
              </form>
            )}
          </div>

          {/* RIGHT: Trust sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* What you get */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
              <h4 className="text-white font-black text-sm mb-4 uppercase tracking-wide">
                Im Investor-Paket enthalten
              </h4>
              <ul className="space-y-2.5">
                {[
                  "§7g-Steueranalyse (Steuerberater-geprüft)",
                  "tiny Escapes Betreiberkonzept + Belegungsdaten",
                  "Asset-Kennzahlen: IRR, NPV, Cashflow-Plan",
                  "Vlemmix Trailer Technisches Datenblatt",
                  "Individuelle Beratung (ohne Kaufzwang)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/75">
                    <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time */}
            <div className="bg-green-500/15 border border-green-400/25 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4">
              <div className="text-3xl flex-shrink-0">⏱</div>
              <div>
                <p className="text-white font-black text-sm">Antwort innerhalb 24h</p>
                <p className="text-white/50 text-[12px] mt-0.5">Persönliche Rückmeldung – kein automatisches Bot-Mail.</p>
              </div>
            </div>

            {/* Regulatory clarity */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-3">Rechtlicher Hinweis</p>
              <p className="text-[12px] text-gray-400 leading-relaxed">
                TinyInvest hält zu keinem Zeitpunkt Investorengelder.
                Der Investor kauft das Wirtschaftsgut direkt beim Hersteller.
                tiny Escapes übernimmt den Betrieb auf Basis eines Bewirtschaftungsvertrags.
                Dies ist kein Finanzprodukt i.S.d. KAGB.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-white/70 text-[12px] leading-relaxed italic mb-3">
                &bdquo;Innerhalb von 2 Wochen nach meiner Anfrage stand der Kaufvertrag. Die Beratung war ehrlich, klar und ohne Druck.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xs">MK</div>
                <div>
                  <p className="text-white font-semibold text-[12px]">Michael K.</p>
                  <p className="text-white/35 text-[10px]">Asset #TE-2026-02 · Investor</p>
                </div>
              </div>
            </div>

            {/* Direct contact */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">Direktkontakt</p>
              <a
                href="mailto:info@tinyhouse.investments"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-[13px]"
              >
                <span>✉️</span> info@tinyhouse.investments
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
