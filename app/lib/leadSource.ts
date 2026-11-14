// Server: Lead-Quelle aus dem Request prüfen und mit dem Lead speichern.
// Fehlen die Spalten in Supabase noch, wird der Lead ohne Quelle gespeichert statt verloren zu gehen.
import { getAdminClient } from "./supabase";
import { describeLeadSource, type LeadSource } from "./leadSourceFormat";

export { describeLeadSource, type LeadSource };

const str = (v: unknown, max = 300) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

export function parseLeadSource(raw: unknown): LeadSource | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  let utm: Record<string, string> | null = null;
  if (r.utm && typeof r.utm === "object") {
    const entries = Object.entries(r.utm as Record<string, unknown>)
      .filter(([k, v]) => /^(utm_[a-z]+|gclid)$/.test(k) && typeof v === "string")
      .slice(0, 6)
      .map(([k, v]) => [k, (v as string).slice(0, 200)]);
    if (entries.length) utm = Object.fromEntries(entries);
  }
  const source = {
    landing_page: str(r.landing_page),
    referrer: str(r.referrer),
    utm,
    conversion_page: str(r.conversion_page),
  };
  return Object.values(source).some(Boolean) ? source : null;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** HTML-Zeile für interne Mails (Werte kommen aus der URL, deshalb escaped). */
export function leadSourceHtml(s: LeadSource | null, color: string): string {
  return `<p style="margin:6px 0 0;font-size:12px;color:${color};">Quelle: ${escapeHtml(describeLeadSource(s))}</p>`;
}

const isMissingColumn = (e: { code?: string; message?: string } | null) =>
  !!e && (e.code === "PGRST204" || e.code === "42703" || /column/i.test(e.message ?? ""));

/** Fügt einen Lead ein; bei fehlenden Quellen-Spalten erneut ohne Quelle. */
export async function insertLead(row: Record<string, unknown>, source: LeadSource | null) {
  const admin = getAdminClient();
  if (source) {
    const res = await admin.from("leads").insert([{ ...row, ...source }]).select("id");
    if (!isMissingColumn(res.error)) return res;
    console.warn("leads: Quellen-Spalten fehlen, speichere ohne Quelle:", res.error?.message);
  }
  return admin.from("leads").insert([row]).select("id");
}
