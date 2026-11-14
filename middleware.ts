import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Auth läuft client-seitig auf /investor/*. Die Middleware normalisiert nur URLs:
// "//wissen/iab-tiny-house" (z. B. aus fehlerhaften externen Links) führt sonst zu einem
// SecurityError beim Router (replaceState mit protokoll-relativer URL) und zu doppeltem Content.
export function middleware(req: NextRequest) {
  // req.url statt req.nextUrl, damit die rohen Mehrfach-Slashes sichtbar sind
  const url = new URL(req.url);
  if (/\/{2,}/.test(url.pathname)) {
    url.pathname = url.pathname.replace(/\/{2,}/g, "/");
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Alle Seiten außer Next-Assets, API und Dateien mit Endung
  matcher: ["/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)"],
};
