"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CATEGORIES, getConsent, setConsent, type CategoryInfo, type ConsentCategory } from "../lib/consent";

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

type Choice = Record<ConsentCategory, boolean>;
type View = "hidden" | "banner" | "settings";

const btnPrimary =
  "bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors";

export default function CookieBanner() {
  const [view, setView] = useState<View>("hidden");
  const [choice, setChoice] = useState<Choice>({ statistik: false, funktional: false });
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!getConsent()) {
      // Small delay so banner animates in after page load
      timer = setTimeout(() => setView("banner"), 800);
    }
    const open = () => {
      const c = getConsent();
      setChoice({ statistik: c?.statistik ?? false, funktional: c?.funktional ?? false });
      setView("settings");
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
    };
  }, []);

  // Fokus in den Dialog setzen; im Einstellungs-Modal zusätzlich mit Tab darin halten.
  useEffect(() => {
    if (view === "hidden") return;
    const el = dialogRef.current;
    if (!el) return;
    const focusables = () =>
      Array.from(el.querySelectorAll<HTMLElement>("button, a[href], input")).filter((n) => !n.hasAttribute("disabled"));
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || view !== "settings") return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [view]);

  const save = (c: Choice) => {
    const before = getConsent();
    setConsent(c);
    if (!c.statistik) deleteAnalyticsCookies();
    // Bereits geladene Drittinhalte (z. B. Karten) lassen sich nur durch Neuladen entfernen.
    if (before?.funktional && !c.funktional) window.location.reload();
    setView("hidden");
  };

  if (view === "hidden") return null;

  const legalLinks = (
    <p className="text-gray-500 text-xs">
      <Link href="/datenschutz" className="hover:text-gray-300 underline">Datenschutzerklärung</Link>
      {" · "}
      <Link href="/impressum" className="hover:text-gray-300 underline">Impressum</Link>
    </p>
  );

  if (view === "banner") {
    return (
      <div
        ref={dialogRef}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-fadeInUp"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-title"
      >
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-5 sm:p-6 max-h-[85vh] overflow-y-auto">
          <p id="cookie-title" className="font-bold text-white text-base mb-3">Privatsphäre-Einstellungen</p>
          <div className="text-gray-400 text-xs leading-relaxed space-y-2">
            <p>
              Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten
              (z. B. IP-Adresse), um Zugriffe auf unsere Website zu analysieren und Inhalte von Drittanbietern wie
              Karten und Videos einzubinden. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden.
              Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.
            </p>
            <p>
              Die Datenverarbeitung erfolgt nur mit Ihrer Einwilligung, soweit sie nicht technisch notwendig ist. Sie
              haben das Recht, nicht einzuwilligen und Ihre Einwilligung zu einem späteren Zeitpunkt über
              „Cookie-Einstellungen“ im Footer zu ändern oder zu widerrufen. Der Widerruf wird sofort wirksam, hat
              jedoch keine Auswirkungen auf bereits verarbeitete Daten. Weitere Informationen finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-green-400 hover:text-green-300 underline">Datenschutzerklärung</Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-5">
            <button onClick={() => save({ statistik: true, funktional: true })} className={`${btnPrimary} flex-1`}>
              Alle akzeptieren
            </button>
            <button onClick={() => save({ statistik: false, funktional: false })} className={`${btnPrimary} flex-1`}>
              Nur essenzielle akzeptieren
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
            <button
              onClick={() => setView("settings")}
              className="text-green-400 hover:text-green-300 text-sm underline"
            >
              Individuelle Privatsphäre-Einstellungen
            </button>
            {legalLinks}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        className="w-full max-w-3xl bg-gray-900 border border-gray-700 sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]"
      >
        <div className="p-5 sm:p-6 overflow-y-auto">
          <p id="cookie-settings-title" className="font-bold text-white text-base mb-3">
            Individuelle Privatsphäre-Einstellungen
          </p>
          <p className="text-gray-400 text-xs leading-relaxed mb-5">
            Im Folgenden finden Sie eine Übersicht über alle Services, die von dieser Website genutzt werden. Sie können
            sich detaillierte Informationen zu jedem Service ansehen und ihm einzeln zustimmen. Ihre Einwilligung können
            Sie jederzeit über „Cookie-Einstellungen“ im Footer ändern oder widerrufen.
          </p>

          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <CategoryRow
                key={cat.id}
                cat={cat}
                checked={cat.id === "essenziell" ? true : choice[cat.id]}
                onChange={
                  cat.id === "essenziell"
                    ? undefined
                    : (v) => setChoice((prev) => ({ ...prev, [cat.id]: v }))
                }
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={() => save({ statistik: true, funktional: true })} className={`${btnPrimary} flex-1`}>
              Alle akzeptieren
            </button>
            <button onClick={() => save(choice)} className={`${btnPrimary} flex-1`}>
              Individuelle Auswahl speichern
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            {getConsent() ? (
              <button onClick={() => setView("hidden")} className="text-gray-400 hover:text-gray-200 text-sm underline">
                Schließen ohne Änderung
              </button>
            ) : (
              <button onClick={() => setView("banner")} className="text-gray-400 hover:text-gray-200 text-sm underline">
                Zurück
              </button>
            )}
            {legalLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  cat,
  checked,
  onChange,
}: {
  cat: CategoryInfo;
  checked: boolean;
  onChange?: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const locked = !onChange;
  const inputId = `consent-${cat.id}`;

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-950/50 p-4">
      <div className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={locked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-green-600 disabled:opacity-60 shrink-0"
        />
        <div className="min-w-0">
          <label htmlFor={inputId} className="font-semibold text-white text-sm cursor-pointer">
            {cat.title} ({cat.services.length})
          </label>
          <p className="text-gray-400 text-xs leading-relaxed mt-1">
            {cat.description}
            {"  •  "}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="text-green-400 hover:text-green-300 underline"
            >
              {open ? "Service-Informationen ausblenden" : "Service-Informationen anzeigen"}
            </button>
          </p>
        </div>
      </div>

      {open && (
        <div className="mt-3 space-y-3 pl-7">
          {cat.services.map((s) => (
            <dl key={s.name} className="rounded-lg bg-gray-900 border border-gray-800 p-3 text-xs grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="col-span-2 font-semibold text-gray-200 mb-1">{s.name}</dt>
              <dt className="text-gray-500">Anbieter</dt>
              <dd className="text-gray-300">{s.anbieter}</dd>
              <dt className="text-gray-500">Zweck</dt>
              <dd className="text-gray-300">{s.zweck}</dd>
              <dt className="text-gray-500">Speicherung</dt>
              <dd className="text-gray-300">{s.speicherung}</dd>
              <dt className="text-gray-500">Rechtsgrundlage</dt>
              <dd className="text-gray-300">{s.rechtsgrundlage}</dd>
              {s.drittland && (
                <>
                  <dt className="text-gray-500">Drittland</dt>
                  <dd className="text-gray-300">{s.drittland}</dd>
                </>
              )}
            </dl>
          ))}
        </div>
      )}
    </div>
  );
}
