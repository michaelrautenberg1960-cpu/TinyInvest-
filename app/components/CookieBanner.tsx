"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
type Tab = "zustimmung" | "details" | "ueber";

const TABS: { id: Tab; label: string }[] = [
  { id: "zustimmung", label: "Zustimmung" },
  { id: "details", label: "Details" },
  { id: "ueber", label: "Über Cookies" },
];

const ALL: Choice = { statistik: true, funktional: true };
const NONE: Choice = { statistik: false, funktional: false };

const btnAccept =
  "w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-4 rounded transition-colors";
const btnText =
  "w-full text-green-900 hover:text-green-700 font-semibold text-base px-6 py-3 rounded transition-colors";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" className={`h-4 w-4 ${className}`} aria-hidden="true">
      <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// logo1.png ist quadratisch mit viel leerem Rand: Ausschnitt auf den Schriftzug zuschneiden und schwarz einfärben.
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[37/13] overflow-hidden ${className}`}>
      <Image
        src="/logo1.png"
        alt="TinyInvest"
        width={500}
        height={500}
        className="absolute max-w-none brightness-0"
        style={{ width: "135.1%", left: "-17.8%", top: "-138.4%" }}
      />
    </div>
  );
}

const consentText = (
  <>
    <p>
      Wir verwenden Cookies und ähnliche Technologien, um Zugriffe auf unsere Website zu analysieren und Inhalte von
      Drittanbietern wie Karten und Videos einzubinden. Dabei werden personenbezogene Daten (z. B. Ihre IP-Adresse) auch
      an Google übermittelt, das wir in den Details benennen.
    </p>
    <p>
      Die Verarbeitung erfolgt nur mit Ihrer Einwilligung, soweit sie nicht technisch notwendig ist. Sie können Ihre
      Auswahl jederzeit über „Cookie-Einstellungen“ im Footer ändern oder widerrufen. Mehr in unserer{" "}
      <Link href="/datenschutz" className="text-green-900 font-semibold underline">Datenschutzerklärung</Link>.
    </p>
  </>
);

export default function CookieBanner() {
  const [view, setView] = useState<View>("hidden");
  const [tab, setTab] = useState<Tab>("zustimmung");
  const [choice, setChoice] = useState<Choice>(NONE);
  const [hasStored, setHasStored] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!getConsent()) {
      // Small delay so banner animates in after page load
      timer = setTimeout(() => setView("banner"), 800);
    }
    const open = () => {
      const c = getConsent();
      setHasStored(!!c);
      setChoice({ statistik: c?.statistik ?? false, funktional: c?.funktional ?? false });
      setTab("details");
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

  const openSettings = () => {
    setTab("details");
    setView("settings");
  };

  if (view === "hidden") return null;

  if (view === "banner") {
    return (
      <div
        ref={dialogRef}
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-white text-gray-900 shadow-[0_-8px_30px_rgba(0,0,0,0.18)] animate-fadeInUp max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-title"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
          <Logo className="hidden lg:block shrink-0 w-52" />

          <div className="flex-1 min-w-0">
            <p id="cookie-title" className="font-bold text-base sm:text-lg mb-3">Diese Webseite verwendet Cookies</p>
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">{consentText}</div>
            <button
              type="button"
              onClick={openSettings}
              className="mt-5 inline-flex items-center gap-2 text-green-900 hover:text-green-700 font-semibold text-base"
            >
              Details zeigen <Chevron />
            </button>
          </div>

          <div className="w-full lg:w-80 shrink-0 flex flex-col items-stretch gap-1">
            <button type="button" onClick={() => save(ALL)} className={btnAccept}>
              Alle zulassen
            </button>
            <button type="button" onClick={openSettings} className={`${btnText} inline-flex items-center justify-center gap-2`}>
              Anpassen <Chevron />
            </button>
            <button type="button" onClick={() => save(NONE)} className={btnText}>
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        className="w-full max-w-4xl bg-white text-gray-900 sm:rounded-lg rounded-t-lg shadow-2xl flex flex-col max-h-[75vh]"
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-2 border-b border-gray-200">
          <Logo className="w-40 sm:w-48" />
          <p id="cookie-settings-title" className="sr-only">Privatsphäre-Einstellungen</p>
          {hasStored && (
            <button
              type="button"
              onClick={() => setView("hidden")}
              aria-label="Schließen ohne Änderung"
              className="text-gray-500 hover:text-gray-900 text-3xl leading-none px-2"
            >
              ×
            </button>
          )}
        </div>

        <div role="tablist" className="grid grid-cols-3 border-b border-gray-200">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`py-3 text-sm sm:text-base font-bold border-b-[3px] transition-colors ${
                tab === t.id ? "text-green-900 border-green-900" : "text-gray-900 border-transparent hover:text-green-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5" role="tabpanel">
          {tab === "zustimmung" && (
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">{consentText}</div>
          )}

          {tab === "details" && (
            <div className="divide-y divide-gray-200">
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
          )}

          {tab === "ueber" && (
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Cookies sind kleine Textdateien, die von Websites in Ihrem Browser gespeichert werden. Ähnliche
                Technologien wie der Local Storage funktionieren vergleichbar. Sie dienen dazu, eine Website nutzbar zu
                machen, Inhalte von Drittanbietern einzubinden oder die Nutzung statistisch auszuwerten.
              </p>
              <p>
                Technisch notwendige Speicherungen dürfen wir ohne Ihre Einwilligung vornehmen. Für alle anderen benötigen
                wir Ihre Erlaubnis. Welche Services wir einsetzen, sehen Sie im Reiter „Details“.
              </p>
              <p>
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über „Cookie-Einstellungen“ im Footer
                ändern oder widerrufen. Verantwortlich ist die Rautenberg Professional Solutions GmbH, siehe{" "}
                <Link href="/impressum" className="text-green-900 font-semibold underline">Impressum</Link> und{" "}
                <Link href="/datenschutz" className="text-green-900 font-semibold underline">Datenschutzerklärung</Link>.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-5 sm:px-7 py-3 flex flex-col-reverse sm:flex-row gap-1 sm:gap-4">
          <button type="button" onClick={() => save(NONE)} className={`${btnText} sm:flex-1`}>
            Ablehnen
          </button>
          <button type="button" onClick={() => save(choice)} className={`${btnText} sm:flex-1`}>
            Auswahl erlauben
          </button>
          <button type="button" onClick={() => save(ALL)} className={`${btnAccept} sm:flex-1`}>
            Alle zulassen
          </button>
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
  const labelId = `consent-${cat.id}`;

  return (
    <div className="py-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Service-Informationen ausblenden" : "Service-Informationen anzeigen"}
          className="text-gray-900 hover:text-green-900 p-1 -ml-1"
        >
          <Chevron className={`transition-transform ${open ? "-rotate-90" : "rotate-90"}`} />
        </button>
        <span id={labelId} className="font-bold text-base">{cat.title}</span>
        <span className="text-xs font-semibold bg-gray-200 text-gray-800 rounded-full px-2 py-0.5">
          {cat.services.length}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          disabled={locked}
          onClick={() => onChange?.(!checked)}
          className={`ml-auto relative inline-flex h-9 w-16 shrink-0 items-center rounded-full transition-colors disabled:cursor-not-allowed ${
            checked ? "bg-green-900" : "bg-gray-900"
          }`}
        >
          <span
            className={`inline-block h-7 w-7 rounded-full bg-white shadow transition-transform ${
              checked ? "translate-x-8" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 pl-8">{cat.description}</p>

      {open && (
        <div className="mt-4 space-y-3 pl-8">
          {cat.services.map((s) => (
            <dl key={s.name} className="rounded border border-gray-200 bg-gray-50 p-3 text-xs sm:text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="col-span-2 font-semibold text-gray-900 mb-1">{s.name}</dt>
              <dt className="text-gray-500">Anbieter</dt>
              <dd className="text-gray-800">{s.anbieter}</dd>
              <dt className="text-gray-500">Zweck</dt>
              <dd className="text-gray-800">{s.zweck}</dd>
              <dt className="text-gray-500">Speicherung</dt>
              <dd className="text-gray-800">{s.speicherung}</dd>
              <dt className="text-gray-500">Rechtsgrundlage</dt>
              <dd className="text-gray-800">{s.rechtsgrundlage}</dd>
              {s.drittland && (
                <>
                  <dt className="text-gray-500">Drittland</dt>
                  <dd className="text-gray-800">{s.drittland}</dd>
                </>
              )}
            </dl>
          ))}
        </div>
      )}
    </div>
  );
}
