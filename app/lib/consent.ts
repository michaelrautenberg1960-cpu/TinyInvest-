"use client";
import { useEffect, useState } from "react";

export type ConsentCategory = "statistik" | "funktional";

export type Consent = {
  v: 1;
  statistik: boolean;
  funktional: boolean;
  ts: string;
};

const STORAGE_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent";

// Liest die gespeicherte Auswahl. Alte Werte ("all" / "necessary") aus dem einstufigen Banner werden übernommen.
export function getConsent(): Consent | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  if (raw === "all" || raw === "necessary") {
    const all = raw === "all";
    return { v: 1, statistik: all, funktional: all, ts: "" };
  }
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.v === 1) {
      return { v: 1, statistik: !!parsed.statistik, funktional: !!parsed.funktional, ts: String(parsed.ts ?? "") };
    }
  } catch {}
  return null;
}

export function setConsent(choice: Record<ConsentCategory, boolean>) {
  const consent: Consent = { v: 1, ...choice, ts: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {}
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function hasConsent(cat: ConsentCategory): boolean {
  return getConsent()?.[cat] ?? false;
}

// Reagiert auf Änderungen im Cookie-Banner, ohne die Seite neu zu laden.
// Liefert null, solange der Speicher noch nicht gelesen wurde (erster Render / SSR).
export function useConsent(cat: ConsentCategory): boolean | null {
  const [granted, setGranted] = useState<boolean | null>(null);
  useEffect(() => {
    const update = () => setGranted(hasConsent(cat));
    update();
    window.addEventListener(CONSENT_EVENT, update);
    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, [cat]);
  return granted;
}

export type ServiceInfo = {
  name: string;
  anbieter: string;
  zweck: string;
  speicherung: string;
  rechtsgrundlage: string;
  drittland?: string;
};

export type CategoryInfo = {
  id: "essenziell" | ConsentCategory;
  title: string;
  description: string;
  services: ServiceInfo[];
};

// Einzige Quelle für die Service-Informationen im Cookie-Banner.
export const CATEGORIES: CategoryInfo[] = [
  {
    id: "essenziell",
    title: "Essenziell",
    description:
      "Essenzielle Services sind für die grundlegende Funktionalität der Website erforderlich. Sie enthalten nur technisch notwendige Services. Diesen Services kann nicht widersprochen werden.",
    services: [
      {
        name: "Einwilligungs-Speicher",
        anbieter: "Rautenberg Professional Solutions GmbH (Betreiber dieser Website)",
        zweck: "Speichert Ihre Auswahl im Cookie-Banner, damit er nicht bei jedem Seitenaufruf erneut erscheint.",
        speicherung: "Local Storage „cookie-consent“, bis Sie Ihre Auswahl ändern oder den Browserspeicher löschen",
        rechtsgrundlage: "§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. c und f DSGVO",
      },
      {
        name: "Netlify (Hosting)",
        anbieter: "Netlify, Inc., San Francisco, USA",
        zweck: "Auslieferung der Website, Server-Logfiles zur Absicherung des Betriebs.",
        speicherung: "Keine Cookies; Logfiles max. 7 Tage",
        rechtsgrundlage: "Art. 6 Abs. 1 lit. f DSGVO, Auftragsverarbeitung nach Art. 28 DSGVO",
        drittland: "USA – Standardvertragsklauseln (Art. 46 DSGVO) bzw. EU-US Data Privacy Framework",
      },
      {
        name: "Supabase (Datenbank & Login)",
        anbieter: "Supabase Inc.",
        zweck: "Speicherung von Formularanfragen und Anmeldung im Investoren-Bereich.",
        speicherung: "Anmelde-Token im Local Storage nur nach Login im Investoren-Bereich",
        rechtsgrundlage: "Art. 6 Abs. 1 lit. b DSGVO, Auftragsverarbeitung nach Art. 28 DSGVO",
        drittland: "Ggf. Zugriffe aus Drittländern – Standardvertragsklauseln",
      },
    ],
  },
  {
    id: "statistik",
    title: "Statistik",
    description:
      "Statistik-Services werden benötigt, um anonymisierte Daten über die Nutzung der Website zu sammeln. So können wir besser verstehen, wie Besucher unsere Website nutzen, und unser Angebot verbessern.",
    services: [
      {
        name: "Google Analytics 4",
        anbieter: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
        zweck: "Besucherstatistiken (aufgerufene Seiten, Verweildauer, Herkunft, Gerät, abgeschickte Formulare). Google Signals und Werbefunktionen sind deaktiviert.",
        speicherung: "Cookies _ga, _ga_* – bis zu 14 Monate",
        rechtsgrundlage: "Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG",
        drittland: "USA – EU-US Data Privacy Framework (Art. 45 DSGVO)",
      },
    ],
  },
  {
    id: "funktional",
    title: "Funktional",
    description:
      "Funktionale Services sind notwendig, um über die wesentliche Funktionalität hinausgehende Features wie interaktive Karten oder Videowiedergabe bereitzustellen. Inhalte von Karten- und Videoplattformen sind standardmäßig gesperrt und können erlaubt werden. Wenn dem Service zugestimmt wird, werden diese Inhalte automatisch ohne weitere manuelle Einwilligung geladen.",
    services: [
      {
        name: "Google Maps",
        anbieter: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
        zweck: "Anzeige interaktiver Karten mit den Standorten der Tiny Houses.",
        speicherung: "Google kann Cookies und Local-Storage-Einträge setzen; IP-Adresse wird an Google übertragen",
        rechtsgrundlage: "Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG",
        drittland: "USA – EU-US Data Privacy Framework (Art. 45 DSGVO)",
      },
      {
        name: "YouTube (erweiterter Datenschutzmodus)",
        anbieter: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
        zweck: "Wiedergabe unseres Erklärvideos über youtube-nocookie.com.",
        speicherung: "Erst beim Abspielen: Local-Storage-Einträge und ggf. Cookies von YouTube",
        rechtsgrundlage: "Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG",
        drittland: "USA – EU-US Data Privacy Framework (Art. 45 DSGVO)",
      },
    ],
  },
];
