"use client";
import { useState, useEffect, useRef } from "react";
import { useModal } from "./ModalContext";

const MODELS = [
  { key: "TinyInvest Comfort", preis: "65.000 €", tag: "On-Grid · Einstieg", badge: "Günstigster Einstieg" },
  { key: "TinyInvest Escape",  preis: "79.000 €", tag: "Off-Grid · Standard", badge: "Bestseller" },
  { key: "TinyInvest Elite",   preis: "95.000 €", tag: "Off-Grid · Premium",  badge: "Maximum IAB-Hebel" },
];

export default function MemorandumModal() {
  const { isOpen, closeModal } = useModal();

  const [step, setStep] = useState<1 | 2>(1);

  const [form, setForm] = useState({
    vorname: "",
    email: "",
    telefon: "",
    interesse: "Investitionsunterlagen",
    budget: "TinyInvest Escape",
    location: "Deutschland",
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

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname || !form.email) {
      setError("Bitte Vorname und E-Mail ausfüllen.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            vorname: form.vorname,
            email: form.email,
            telefon: form.telefon,
            nachname: "",
            schritt: "Schnell-Anfrage (Schritt 1)",
          }),
      });
      if (!res.ok) throw new Error();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "generate_lead", { form_type: "memorandum_step1" });
      setStep(2);
    } catch {
      setError("Fehler beim Senden. Bitte direkt per E-Mail kontaktieren.");
    } finally {
      setLoading(false);
    }
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, nachname: "", schritt: "Details (Schritt 2)" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "generate_lead", { form_type: "memorandum_step2", interesse: form.interesse });
    } catch {
      setError("Fehler beim Senden.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm
                 animate-in fade-in duration-200"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl
                   animate-in zoom-in-95 duration-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
          aria-label="Schließen"
        >
          ✕
        </button>

        <div className="p-6">

          {/* ── SUCCESS STATE ──────────────────────────── */}
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-5">✅</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Vielen Dank, {form.vorname}!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed mb-3">
                Ihre Anfrage ist bei uns eingegangen – wir freuen uns wirklich über Ihr Interesse!
              </p>
              <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                Wir melden uns persönlich innerhalb von <strong className="text-gray-700">24 Stunden</strong> bei Ihnen –
                mit dem vollständigen Investor-Paket und allen Unterlagen, die Sie brauchen.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8 text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5"><span>🔒</span> DSGVO-konform</span>
                <span className="flex items-center gap-1.5"><span>⏱</span> Antwort in 24h</span>
                <span className="flex items-center gap-1.5"><span>📋</span> Keine Anlageberatung</span>
              </div>
              <button
                onClick={closeModal}
                className="bg-green-700 hover:bg-green-800 text-white font-bold px-10 py-3.5 rounded-full text-sm transition-all shadow-md shadow-green-900/20"
              >
                Bis gleich! 👋
              </button>
            </div>

          /* ── STEP 1: MINIMAL FORM ────────────────────── */
          ) : step === 1 ? (
            <>
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
                    Kostenlose Erstberatung
                  </span>
                  <span className="text-[10px] text-gray-400">Schritt 1 von 2</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
                  Jetzt Unterlagen anfordern
                </h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                 Betreiberkonzept · Asset-Kennzahlen · Persönliche Beratung
                </p>
              </div>

              <form onSubmit={handleStep1} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Ihr Vorname *
                  </label>
                  <input
                    type="text" name="vorname" value={form.vorname} onChange={handleChange}
                    placeholder="z.B. Michael" required autoFocus
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="ihre@email.de" required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Telefon <span className="text-gray-400 font-normal normal-case">(optional – für Rückruf)</span>
                  </label>
                  <input
                    type="tel" name="telefon" value={form.telefon} onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-sm transition-all shadow-md shadow-green-900/20"
                >
                  {loading ? "Wird gesendet…" : "Unterlagen jetzt anfordern →"}
                </button>

                <p className="text-center text-[11px] text-gray-400 leading-relaxed">
                  🔒 Unverbindlich · Keine Anlageberatung · DSGVO-konform · Antwort in 24h
                </p>

                <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
                  <div className="flex -space-x-2">
                    {["MK","SR","TH"].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-green-700 border-2 border-white flex items-center justify-center text-white text-[9px] font-black">{i}</div>
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-500">
                    <strong className="text-gray-700">200+ Investoren</strong> haben bereits angefragt
                  </p>
                </div>
              </form>
            </>

          /* ── STEP 2: OPTIONAL DETAILS ──────────────── */
          ) : (
            <>
              <div className="mb-3 pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-0.5 rounded-full uppercase tracking-widest font-semibold">
                    ✅ Anfrage eingegangen
                  </span>
                  <span className="text-[10px] text-gray-400">Schritt 2 von 2</span>
                </div>
                <h2 className="text-lg font-black text-gray-900 tracking-tight mb-0.5">
                  Fast fertig, {form.vorname}!
                </h2>
                <p className="text-[12px] text-gray-500">
                  Optional: <button type="button" onClick={() => setSubmitted(true)} className="text-green-700 font-semibold hover:underline">Schritt überspringen</button>.
                </p>
              </div>

              <form onSubmit={handleStep2} className="space-y-3">
                {/* Anfrage-Typ */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Worum geht es?
                  </label>
                  <select
                    name="interesse" value={form.interesse} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Investitionsunterlagen anfordern</option>
                    <option>Projektunterlagen zu einem spezifischen Asset</option>
                    <option>Rendite-Beratung (passives Einkommen)</option>
                    <option>Kauf auf Raten / Finanzierungsberatung</option>
                    <option>Host-Bewerbung (Standort / Grundstück)</option>
                    <option>Allgemeine Erstinformation</option>
                  </select>
                </div>

                {/* Host-Bewerbung: Grundstücks-Felder */}
                {isHost && (
                  <div className="rounded-2xl border border-green-200 bg-green-50/60 p-4 space-y-3">
                    <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest flex items-center gap-1.5">
                      <span>🏡</span> Angaben zum Grundstück / Standort
                    </p>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">Region / Standort *</label>
                      <input
                        type="text" name="hostRegion" value={form.hostRegion} onChange={handleChange}
                        placeholder="z.B. Bayern, Nähe München" required={isHost}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300 bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">Grundstücksgröße</label>
                        <select name="hostFlaeche" value={form.hostFlaeche} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>{"< 500 m²"}</option>
                          <option>500–1.000 m²</option>
                          <option>1.000–3.000 m²</option>
                          <option>{"> 3.000 m²"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">Eigentum</label>
                        <select name="hostEigentum" value={form.hostEigentum} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>Eigentümer</option>
                          <option>Pächter / Mieter</option>
                          <option>Noch in Planung</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">Wie viele Tiny Houses?</label>
                      <select name="hostAnzahl" value={form.hostAnzahl} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                        <option>1</option>
                        <option>2–3</option>
                        <option>4–6</option>
                        <option>Mehr als 6</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Asset-Modell + Location (nur bei Nicht-Host) */}
                {!isHost && (
                  <>
                    {/* Modell-Karten */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Asset-Modell
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {MODELS.map((m) => (
                          <button
                            key={m.key}
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, budget: m.key }))}
                            className={`relative flex flex-col items-center text-center rounded-xl border p-2 transition-all cursor-pointer
                              ${form.budget === m.key
                                ? "border-green-500 ring-2 ring-green-500 bg-green-50"
                                : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/40"
                              }`}
                          >
                            {m.badge === "Bestseller" && (
                              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-black bg-green-600 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                                Bestseller
                              </span>
                            )}
                            <span className="text-[11px] font-black text-gray-800 leading-tight mt-1">{m.key.replace("TinyInvest ", "")}</span>
                            <span className="text-[10px] text-gray-400 leading-tight">{m.tag.split(" · ")[0]}</span>
                            <span className="text-[11px] font-bold text-green-700">{m.preis}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, budget: "Individuell – bitte beraten" }))}
                        className={`mt-1 w-full text-center text-[11px] py-1 rounded-lg transition-colors
                          ${form.budget === "Individuell – bitte beraten"
                            ? "text-green-700 font-bold bg-green-50 border border-green-300"
                            : "text-gray-400 hover:text-green-700"
                          }`}
                      >
                        Individuell – bitte beraten
                      </button>
                    </div>

                    {/* Location + Investitionsvolumen nebeneinander */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                          Zielmarkt / Standort
                        </label>
                        <select name="location" value={form.location} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>Deutschland</option>
                          <option>Italien</option>
                          <option>Kroatien</option>
                          <option>Noch offen</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">Investitionsvolumen</label>
                        <select name="investmentVolumen" value={form.investmentVolumen} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>60.000 – 80.000 € (1 Asset)</option>
                          <option>80.000 – 100.000 € (1 Premium)</option>
                          <option>120.000 – 160.000 € (2 Assets)</option>
                          <option>200.000 € + (Portfolio)</option>
                          <option>Noch unklar</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Kontaktzeit */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">Wann am besten erreichbar?</label>
                  <select name="kontaktZeit" value={form.kontaktZeit} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option>Morgens (8–12 Uhr)</option>
                    <option>Mittags (12–15 Uhr)</option>
                    <option>Abends (17–20 Uhr)</option>
                    <option>Jederzeit / flexibel</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Nachricht <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="nachricht" value={form.nachricht} onChange={handleChange}
                    rows={1}
                    placeholder="z.B. Ich habe bereits einen IAB gebildet…"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                  />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="flex-1 border border-gray-200 text-gray-500 hover:bg-gray-50 font-semibold py-3 rounded-xl text-sm transition-all"
                  >
                    Überspringen
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-[2] bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-black py-3 rounded-xl text-sm transition-all shadow-md"
                  >
                    {loading ? "Wird gesendet…" : isHost ? "🏡 Host-Bewerbung senden →" : "✅ Abschließen →"}
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 leading-relaxed">
                  TinyInvest hält zu keinem Zeitpunkt Investorengelder. Der Investor kauft das Wirtschaftsgut
                  direkt beim Hersteller. Dies ist kein Finanzprodukt i.S.d. KAGB.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
