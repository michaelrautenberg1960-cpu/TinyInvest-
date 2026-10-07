"use client";
import { OPEN_COOKIE_SETTINGS } from "./CookieBanner";

export default function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
