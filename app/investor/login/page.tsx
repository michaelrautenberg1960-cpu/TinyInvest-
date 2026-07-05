"use client";
import { useState } from "react";
import { getBrowserClient } from "@/app/lib/supabase";

export default function InvestorLoginPage() {
  const [email, setEmail]   = useState("");
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");

  // Always hard-code to TinyInvest domain so that shared Supabase never
  // redirects investors to TinyEscapes (tinyhouse.investments) after OAuth.
  const callbackUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/investor/auth/callback`
      : "https://tinyhouse.investments/investor/auth/callback";

  // ── Magic Link ──
  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = getBrowserClient();
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: callbackUrl },
    });
    setLoading(false);
    if (err) { setError(err.message); return; }
    setSent(true);
  };

  // ── Google OAuth ──
  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    const supabase = getBrowserClient();
    const { error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: callbackUrl },
    });
    if (err) { setLoading(false); setError(err.message); }
    // on success browser navigates away, no need to setLoading(false)
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{ backgroundImage: "url('/images/outside/tiny-house-escape-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="bg-gray-900 border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* Logo / icon */}
          <div className="text-center mb-8">
            <img src="/logo1.png" alt="TinyInvest" className="h-45 w-auto mx-auto mb-6 brightness-0 invert" />
            <h1 className="text-2xl font-black text-white">Investor-Portal</h1>
            <p className="text-gray-400 text-sm mt-2">Melden Sie sich an, um Ihr Dashboard zu sehen.</p>
          </div>

          {sent ? (
            /* Success state */
            <div className="text-center py-4">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="text-white font-bold text-lg mb-2">Bitte prüfen Sie Ihre E-Mails!</h2>
              <p className="text-gray-400 text-sm">
                Wir haben einen Anmelde-Link an <strong className="text-white">{email}</strong> gesendet.
                Klicken Sie den Link, um Ihr Dashboard zu öffnen.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors underline"
              >
                Andere E-Mail verwenden
              </button>
            </div>
          ) : (
            <>
              {/* Google button */}
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-5 rounded-xl transition-all mb-5 disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Mit Google anmelden
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-xs">oder per E-Mail</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Magic Link form */}
              <form onSubmit={handleMagicLink} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="ihre@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-xl transition-all disabled:opacity-50"
                >
                  {loading ? "⏳ Sende Link…" : "Magic Link senden →"}
                </button>
              </form>

              <p className="text-center text-gray-600 text-xs mt-6">
                Sie erhalten einen einmaligen Anmelde-Link per E-Mail.
              </p>
            </>
          )}
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          <a href="/" className="hover:text-gray-400 transition-colors">← Zurück zur Website</a>
        </p>
      </div>
    </div>
  );
}
