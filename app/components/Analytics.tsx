"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, hasConsent } from "../lib/consent";

export const GA_ID = "G-1726HDFQK1";

// Lädt Google Analytics erst, nachdem der Besucher im Cookie-Banner der Kategorie "Statistik" zugestimmt hat.
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => {
      const consent = hasConsent("statistik");
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !consent;
      setEnabled(consent);
    };
    update();
    window.addEventListener(CONSENT_EVENT, update);
    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
        `}
      </Script>
    </>
  );
}
