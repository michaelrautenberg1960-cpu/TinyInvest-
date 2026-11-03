"use client";
import { useRef } from "react";

// GA4-Event senden; ohne Statistik-Consent ist gtag nicht geladen und es passiert nichts
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag?.("event", event, { page_path: window.location.pathname, ...params });
}

// Liefert einen Handler, der das Event nur bei der ersten Interaktion sendet (z. B. Rechner benutzt)
export function useTrackOnce(event: string, params: Record<string, unknown> = {}) {
  const sent = useRef(false);
  return () => {
    if (sent.current) return;
    sent.current = true;
    track(event, params);
  };
}
