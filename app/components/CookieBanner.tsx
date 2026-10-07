"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";

// Entfernt Google-Analytics-Cookies (_ga, _ga_*) für die aktuelle Domain und ihre Elterndomain.
function deleteAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem("cookie-consent");
    } catch {}
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!consent) {
      // Small delay so banner animates in after page load
      timer = setTimeout(() => setVisible(true), 800);
    }
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
    };
  }, []);

  const accept = (type: "all" | "necessary") => {
    try {
      localStorage.setItem("cookie-consent", type);
    } catch {}
    if (type === "necessary") deleteAnalyticsCookies();
    window.dispatchEvent(new Event("cookie-consent"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-fadeInUp"
      role="dialog"
      aria-label="Cookie-Einwilligung"
    >
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🍪</span>
              <p className="font-bold text-white text-sm">Datenschutz & Cookies</p>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Wir verwenden <strong className="text-gray-300">technisch notwendige Speicherungen</strong>, damit die Website funktioniert.
              Mit Ihrer Einwilligung nutzen wir zusätzlich <strong className="text-gray-300">Google Analytics</strong>, um anonymisierte
              Besucherstatistiken zu erstellen und unser Angebot zu verbessern. Dabei werden Cookies gesetzt und Daten an Google
              übermittelt, ggf. auch in die USA. Ihre Einwilligung können Sie jederzeit über „Cookie-Einstellungen“ im Footer widerrufen.
              Mehr dazu in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-green-400 hover:text-green-300 underline transition-colors"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => accept("all")}
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={() => accept("necessary")}
              className="flex-1 sm:flex-none bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Nur notwendige
            </button>
          </div>
        </div>

        {/* Legal badge */}
        <p className="text-gray-600 text-xs mt-3 pt-3 border-t border-gray-800">
          🛡️ Google Analytics nur mit Einwilligung · Einwilligung jederzeit widerrufbar · Stand: Oktober 2026
        </p>
      </div>
    </div>
  );
}
