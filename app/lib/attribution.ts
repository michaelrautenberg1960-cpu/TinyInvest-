// Lead-Quelle (First Touch): Einstiegsseite, externer Referrer und UTM-Parameter.
// Ohne Einwilligung nur im Speicher dieses Besuchs (bleibt bei Client-Navigation erhalten);
// mit Statistik-Einwilligung zusätzlich 90 Tage in localStorage, damit spätere Besuche zugeordnet werden.
import { hasConsent } from "./consent";

export type Attribution = {
  landing_page: string;
  referrer: string | null;
  utm: Record<string, string> | null;
  ts: string;
};

export type LeadSourcePayload = Omit<Attribution, "ts"> & { conversion_page: string };

const KEY = "tinyinvest_first_touch";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

let firstTouch: Attribution | null = null;

function fromCurrentPage(): Attribution {
  const url = new URL(window.location.href);
  const utm: Record<string, string> = {};
  for (const p of PARAMS) {
    const v = url.searchParams.get(p);
    if (v) utm[p] = v.slice(0, 200);
  }
  let referrer: string | null = null;
  try {
    if (document.referrer && new URL(document.referrer).hostname !== url.hostname) {
      referrer = document.referrer.slice(0, 300);
    }
  } catch {}
  return {
    landing_page: (url.pathname + url.search).slice(0, 300),
    referrer,
    utm: Object.keys(utm).length ? utm : null,
    ts: new Date().toISOString(),
  };
}

function readStored(): Attribution | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const a = JSON.parse(raw) as Attribution;
    if (!a?.landing_page || Date.now() - new Date(a.ts).getTime() > MAX_AGE_MS) return null;
    return a;
  } catch {
    return null;
  }
}

function persist() {
  if (!firstTouch || !hasConsent("statistik")) return;
  try {
    if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(firstTouch));
  } catch {}
}

/** Beim ersten Laden der Seite aufrufen (AttributionCapture im Layout) und nach einer Einwilligung. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  if (!firstTouch) firstTouch = (hasConsent("statistik") && readStored()) || fromCurrentPage();
  persist();
}

/** Wird beim Absenden eines Lead-Formulars mitgeschickt. */
export function getLeadSource(): LeadSourcePayload | null {
  if (typeof window === "undefined") return null;
  captureAttribution();
  if (!firstTouch) return null;
  const { landing_page, referrer, utm } = firstTouch;
  return { landing_page, referrer, utm, conversion_page: window.location.pathname.slice(0, 300) };
}
