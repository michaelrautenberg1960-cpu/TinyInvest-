"use client";
import { useEffect } from "react";
import { captureAttribution } from "../lib/attribution";
import { CONSENT_EVENT } from "../lib/consent";

// Merkt sich beim ersten Seitenaufruf die Lead-Quelle (siehe lib/attribution.ts).
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
    window.addEventListener(CONSENT_EVENT, captureAttribution);
    return () => window.removeEventListener(CONSENT_EVENT, captureAttribution);
  }, []);
  return null;
}
