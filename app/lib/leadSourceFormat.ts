// Reine Formatierung der Lead-Quelle – auch im Browser nutzbar (Admin).

export type LeadSource = {
  landing_page: string | null;
  referrer: string | null;
  utm: Record<string, string> | null;
  conversion_page: string | null;
};

/** Kurzfassung, z. B. "google.com → /wissen/iab-tiny-house → Formular auf /". */
export function describeLeadSource(s: Partial<LeadSource> | null): string {
  if (!s) return "unbekannt";
  let ref = "direkt";
  if (s.utm?.utm_source) ref = `${s.utm.utm_source}${s.utm.utm_medium ? ` / ${s.utm.utm_medium}` : ""}`;
  else if (s.utm?.gclid) ref = "Google Ads";
  else if (s.referrer) {
    try { ref = new URL(s.referrer).hostname.replace(/^www\./, ""); } catch { ref = s.referrer; }
  }
  return [ref, s.landing_page, s.conversion_page && s.conversion_page !== s.landing_page?.split("?")[0] ? `Formular auf ${s.conversion_page}` : null]
    .filter(Boolean)
    .join(" → ");
}

