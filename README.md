# TinyInvest — Tiny House Investment Platform

> Steueroptimierte Kapitalanlage in mobile Tiny Houses – kaufen, vermieten, Steuern sparen.  
> Live: [tinyhouse.investments](https://tinyhouse.investments)

---

## Was ist TinyInvest?

TinyInvest ist eine Next.js-Plattform, über die Privatinvestoren mobile Tiny Houses als steueroptimierte Kapitalanlage erwerben können. Die Häuser werden an Ferienstandorten in DE/AT/EU betrieben und vollständig durch [tiny Escapes](https://tiny.rentals) verwaltet. Investoren erhalten 40 % der Nettomieteinnahmen monatlich ausgezahlt, ohne selbst operativ tätig zu werden.

**Zielgruppen:**
- **Steuer-Investor** – §7g IAB + Sonder-AfA + degressive AfA (bis ~33.000 € Steuervorteil im Kaufjahr)
- **Rendite-Investor** – 40 % der Mieteinnahmen monatlich, 12–18 % IRR p.a.
- **Finanzierungs-Käufer** – Bankkredit + IAB als Eigenkapitalhebel, Mieteinnahmen tilgen die Rate
- **Senioren & Rentner** – Sachwert als Altersvorsorge: Kapitalanlage mit monatlicher Auszahlung oder Selbstnutzung
- **Ärzte, Freiberufler, IT-Freelancer, Unternehmer** – §7g IAB für Selbstständige mit hohem Grenzsteuersatz

---

## Tech Stack

| Technologie | Einsatz |
|---|---|
| **Next.js 16** (App Router) | Frontend + API Routes |
| **TypeScript** | Typsicherheit |
| **Tailwind CSS** | Styling |
| **Supabase** | PostgreSQL Datenbank + Magic Link & Google OAuth |
| **Resend** | E-Mail-Versand (Admin-Benachrichtigung, Erstmail an Leads) |
| **jsPDF** + jspdf-autotable | Angebots-PDF (Konfigurator & Erstmail) |
| **Netlify** | Hosting & Deployment |

---

## Projektstruktur

```
app/
├── page.tsx                          # Startseite (Landing Page)
├── layout.tsx                        # Root Layout + globale Metadata
├── sitemap.ts                        # Automatische XML-Sitemap (50+ Einträge)
│
├── lib/
│   ├── supabase.ts                   # Supabase Client
│   ├── og.ts                        # Open Graph Hilfsfunktionen
│   ├── sendWelcomeEmail.ts          # Erstmail an Leads (mit/ohne Telefon) + Host-Mail
│   └── offerPdfServer.ts            # Persönliches Angebots-PDF serverseitig erzeugen
│
├── marktplatz/                       # Listing-Marktplatz (Supabase-Live-Daten)
│   └── [id]/                         # Einzelnes Listing (dynamische Route)
├── renditemodell/                    # Interaktiver Renditerechner
├── steuervorteil/                    # §7g IAB + AfA Erklärung
├── so-funktioniert-es/               # Investor-Prozess Schritt für Schritt
├── galerie/                          # Foto-Galerie (Innen & Außen)
├── hosts/                            # Host-Partnerprogramm
├── partner/                          # Vertriebspartner-Programm
├── konfigurator/                     # Tiny House Konfigurator
│   ├── KonfiguratorApp.tsx           # Konfigurator-Logik & UI
│   ├── konfigurator-data.ts          # Paketpreise, Extras, Angebotstexte, Firmendaten (einzige Preisquelle)
│   └── generate-pdf.ts               # PDF-Angebotsgenerator (Browser + Server)
├── tiny-house-als-kapitalanlage/     # SEO-Pillar-Landingpage (Priority 1.0)
│
├── agb/                              # Allgemeine Geschäftsbedingungen
├── impressum/                        # Impressum
├── datenschutz/                      # Datenschutzerklärung
│
├── rechner/
│   ├── iab/                          # IAB-Steuerrechner (WebApplication schema)
│   └── rendite/                      # Renditerechner (WebApplication schema)
│
├── wissen/                           # SEO-Wissens-Hub (33 Artikel)
│   ├── page.tsx                      # Hub-Übersichtsseite
│   │
│   ├── — Steuer & §7g —
│   ├── 7g-tiny-house-investment/     # §7g Leitfaden (Priority 1.0)
│   ├── afa-abschreibung/             # AfA-Abschreibung erklärt
│   ├── iab-tiny-house/               # IAB Tiny House Guide
│   ├── investitionsabzugsbetrag-tiny-house/ # IAB Detailguide
│   ├── tiny-house-steuern-sparen/    # Steuern sparen Anleitung
│   ├── tiny-house-steuer-risiken/    # Steuerrisiken & Fallstricke
│   ├── ferienimmobilie-steuer/       # Steuer bei Ferienimmobilien
│   ├── steuerberater-finden/         # Steuerberater finden
│   │
│   ├── — Rendite & Investment —
│   ├── kapitalanlage/                # Tiny House vs. ETW Vergleich
│   ├── tiny-house-als-rendite/       # Cashflow & Ertragsmodell
│   ├── tiny-house-rendite-rechner/   # Rendite berechnen
│   ├── direktinvestment/             # Direktinvestment vs. Fonds
│   ├── passive-einnahmen-immobilien/ # Passive Einnahmen mit Immobilien
│   │
│   ├── — Solar-Alternativen —
│   ├── pv-anlage-als-kapitalanlage/  # Tiny House vs. PV-Anlage Vergleich
│   ├── solaranlage-alternative/      # Solaranlage Alternative
│   ├── pv-direktinvestment-alternative/ # PV-Direktinvestment Alternative
│   │
│   ├── — Kaufen & Standort —
│   ├── tiny-house-kaufen/            # Tiny House kaufen Guide
│   ├── tiny-house-kaufen-checkliste/ # Kaufcheckliste
│   ├── tiny-house-kaufen-mit-grundstueck/ # Kauf mit Grundstück
│   ├── tiny-house-finanzierung/      # Finanzierungsoptionen
│   ├── tiny-house-genehmigung/       # Baugenehmigung & Recht
│   ├── tiny-house-standorte/         # Standortauswahl
│   ├── tiny-house-airbnb/            # Tiny House auf Airbnb vermieten
│   ├── host-werden/                  # Host werden bei tiny Escapes
│   │
│   ├── — Altersvorsorge (Senioren-Cluster) —
│   ├── tiny-house-altersvorsorge/    # Sachwert statt Riester
│   ├── rentenlucke-schliessen/       # Rentenlücke mit Cashflow schließen
│   ├── tiny-house-vs-etf-altersvorsorge/ # Tiny House vs. ETF Vergleich
│   │
│   └── — Zielgruppen-Landingpages —
│       ├── senioren/                 # Senioren & Altersvorsorge
│       ├── aerzte/                   # Ärzte (§7g IAB)
│       ├── freiberufler/             # Freiberufler (§7g IAB)
│       ├── it-freelancer/            # IT-Freelancer (§7g IAB)
│       ├── unternehmer/              # Unternehmer (§7g IAB)
│       └── zielgruppen/              # Hub: Alle Selbstständigen-Zielgruppen
│
├── investor/                         # Investor-Dashboard (Auth required)
│   ├── page.tsx                      # Dashboard (Assets, KPIs, Buchungen)
│   ├── login/page.tsx                # Login (Magic Link + Google OAuth)
│   └── auth/callback/                # OAuth Callback Handler
│
├── admin/                            # Admin-Panel (passwortgeschützt)
│   └── page.tsx
│
├── api/
│   ├── contact/route.ts              # Lead-Formular → Supabase + Resend
│   ├── listings/route.ts             # Öffentliche Listings (read-only, CDN-gecacht)
│   ├── gate-register/route.ts        # Partner-Zugangsanfrage → Lead + Resend
│   ├── investor/data/route.ts        # Investor-Dashboard Daten
│   └── admin/
│       ├── leads/                    # Leads verwalten
│       ├── lead-notizen/             # Notizen zu einzelnen Leads
│       ├── listings/                 # Listings CRUD
│       ├── investor-users/           # Investor-User Management
│       ├── investor-assets/          # Asset-Zuordnung
│       ├── promote-to-investor/      # User → Investor hochstufen
│       ├── sales-team/               # Vertriebsteam verwalten
│       ├── settings/                 # Plattform-Einstellungen
│       ├── migrate-db/               # DB-Migrationsschritte (Supabase JS Client)
│       └── upload/                   # Bild-Upload
│
└── components/
    ├── Hero.tsx                      # Startseite Hero (H1, CTA, Badge)
    ├── HeroCTAButton.tsx             # CTA-Button im Hero
    ├── HeroCalculator.tsx            # Mini-Renditerechner im Hero
    ├── RenditeRechner.tsx            # Interaktiver Rendite-Rechner
    ├── SteuerRechner.tsx             # §7g Steuer-Rechner
    ├── ProjekteGrid.tsx              # Projekt-Kacheln
    ├── ProjekteGoogleMap.tsx         # Google Maps Standortkarte
    ├── MarktplatzShell.tsx           # Marktplatz-Layout (Filter, Liste, Karte)
    ├── MarktplatzMap.tsx             # Marktplatz-Karte
    ├── MarktplatzTeaser.tsx          # Marktplatz-Teaser Startseite
    ├── StandortMap.tsx               # Einzelstandort-Karte
    ├── StandortMapWidget.tsx         # Standortkarte-Widget (Einzelseite)
    ├── StandortMapLazy.tsx           # Lazy-geladene Standortkarte
    ├── GalerieTeaser.tsx             # Galerie-Teaser Startseite
    ├── Galerie.tsx                   # Vollbild-Galerie
    ├── Modelle.tsx                   # Haus-Modelle Übersicht
    ├── ModelleCarousel.tsx           # Karussell für Modelle
    ├── HausTypen.tsx                 # Haustypen-Vergleich
    ├── DreiWege.tsx                  # 3-Wege-Aufteilung Grafik
    ├── Oekosystem.tsx                # Ökosystem-Darstellung
    ├── WinWinWin.tsx                 # Win-Win-Win Grafik
    ├── Prozess.tsx                   # Investor-Prozess Steps
    ├── Sicherheit.tsx                # Sicherheitsmerkmale
    ├── SteuerSection.tsx             # Steuer-Infoblock
    ├── PainPoints.tsx                # Pain-Point Sektion
    ├── Betreiber.tsx                 # Betreiber-Info (tiny Escapes)
    ├── Hosts.tsx                     # Host-Übersicht
    ├── InvestorCard.tsx              # Investor-Profil-Karte
    ├── Testimonials.tsx              # Kundenstimmen
    ├── TrustBar.tsx                  # Vertrauens-Logos & Kennzahlen
    ├── Presse.tsx                    # Presseerwähnungen
    ├── FAQ.tsx                       # FAQ-Accordion
    ├── AccordionItem.tsx             # Einzelnes FAQ-Element
    ├── Kontakt.tsx                   # Kontaktformular
    ├── DataRoom.tsx                  # Investor-Datenraum
    ├── Factsheet.tsx                 # PDF-Factsheet Download
    ├── Vertriebspartner.tsx          # Partner-Infos
    ├── Ueber.tsx                     # Über uns Sektion
    ├── Navbar.tsx                    # Navigation (variant: main/sub)
    ├── Footer.tsx                    # Footer
    ├── CookieBanner.tsx              # DSGVO Cookie-Banner
    ├── SubPageHeader.tsx             # Unterseiten-Header
    ├── BackButton.tsx                # Zurück-Button (Unterseiten)
    ├── ModalContext.tsx              # Globaler Lead-Modal State
    ├── MemorandumModal.tsx           # Unterlagen-Anfrage Modal
    ├── MemorandumModalLazy.tsx       # Lazy-geladenes Unterlagen-Modal
    ├── ModalButton.tsx               # CTA-Button mit Modal-Trigger
    └── data.ts                       # Statische Daten (Listings, etc.)

scripts/
├── migrate.js                        # DB-Migration
├── setup-investor-db.sql
└── setup-investor-assets.sql

public/
├── logo1.png
├── favicon.png
├── robots.txt
├── TinyInvest-Erstinformation.pdf            # Anhang der Erstmail
├── TinyInvest-Angebot-Escape660-On-Grid.pdf  # Ersatz-Angebot, falls die PDF-Erzeugung fehlschlägt
├── EB_Plakat_Finanzierungsbeispiel_tinyEscape660.pdf  # EthikBank-Beispiel (veraltet, aktuell nicht angehängt)
└── images/
    ├── inside/                       # Innenansichten der Häuser
    ├── outside/                      # Außenansichten der Häuser
    └── pdf/escape-660.jpg            # JPEG-Hausbild fürs Angebots-PDF (jsPDF kann kein WebP)
```

---

## Lead-Flow & automatische E-Mails

### Formulare → Erstmail

| Einstieg | Wann geht die Erstmail raus? | Variante |
|---|---|---|
| Unterlagen-Popup (`MemorandumModal`) | nach Schritt 2 – oder wenn das Popup in Schritt 2 geschlossen wird | Käufer bzw. Host |
| Kontaktformular (`Kontakt`) | direkt nach dem Absenden | Käufer bzw. Host |
| Projekt-Freischaltung (`gate-register`) | direkt nach dem Absenden | Käufer (Telefon ist Pflicht) |

Nach Popup-Schritt 1 allein geht noch keine Mail an den Kunden, erst in Schritt 2 steht fest, ob Käufer oder Host-Bewerber. Wer den Browser-Tab nach Schritt 1 schließt, bleibt im Admin auf Status `neu` und muss manuell nachgefasst werden.

Nach dem Versand wird der Lead von `neu` auf `email_gesendet` gesetzt (`markWelcomeEmailSent`). Beim Schließen des Popups wird nur gesendet, solange der Status noch `neu` ist – so gibt es keine doppelten Mails.

### Lead-Status im CRM (`/admin`)

`neu` → `email_gesendet` → `kontaktiert` → `wiedervorlage` → `abgeschlossen`, außerdem:
- `nicht_weiter` (⚪ Geht nicht weiter) – Lead ist ausgestiegen / kein Interesse mehr
- `abgeben` (🤝 Abgeben) – Lead soll an einen Partner oder Kollegen abgegeben werden

`abgeschlossen`, `nicht_weiter` und `abgeben` erscheinen nicht im Follow-up-Board.

### Exposé-PDF pro Projekt

Im CRM (`/admin` → Listings → Projekt bearbeiten) unter „📄 Exposé-PDF“ hochladen und speichern. Das PDF wird über eine signierte URL (`PUT /api/admin/upload`) direkt in Supabase Storage (Bucket `listing-images`) geladen und in `listings.document_url` gespeichert. „🗑 Löschen“ entfernt die Datei nach Rückfrage endgültig aus dem Storage (`DELETE /api/admin/upload`); danach das Projekt speichern. Auf der Projektseite erscheint „📄 Exposé herunterladen“, sobald der Kunde das Projekt mit Name, Telefon und E-Mail freigeschaltet hat. Ohne PDF wird der Abschnitt „Unterlagen & Exposé“ ausgeblendet.

### Käufer-Erstmail (`app/lib/sendWelcomeEmail.ts`)

- **Mit Telefonnummer:** kündigt einen Rückruf innerhalb von 24 Stunden (werktags) an.
- **Ohne Telefonnummer:** bittet um eine kurze Antwort oder die Telefonnummer.
- **Anhänge:** Erstinformation + persönliches Angebots-PDF.
- Anrede mit dem eingetragenen Vornamen; Finanzierung über die EthikBank eG wird nur erwähnt, deren PDF ist bis zu einem neuen Rechenbeispiel deaktiviert (`WELCOME_ATTACHMENTS`).

### Persönliches Angebots-PDF

- Wird beim Versand mit `buildOfferDoc` aus `app/konfigurator/generate-pdf.ts` erzeugt – derselbe Generator wie im Konfigurator, auf dem Server über `app/lib/offerPdfServer.ts`.
- Kundenname = eingetragener Name, Datum = heute, 1 Einheit, ohne Extras.
- Modell nach Auswahl im Popup: **Off-Grid** (83.400 € netto) wenn gewählt, sonst **On-Grid** (74.700 € netto).
- Das Angebot ist freibleibend („Ein Vertrag kommt erst mit unserer schriftlichen Auftragsbestätigung zustande“).
- Schlägt die Erzeugung fehl, wird `public/TinyInvest-Angebot-Escape660-On-Grid.pdf` angehängt und im Mailtext als Beispielangebot bezeichnet.

### Host-Bewerber

Wer im Formular „Host-Bewerbung (Standort / Grundstück)“ wählt, bekommt statt der Käufer-Mail eine kurze Bestätigung ohne Anhänge (`sendHostWelcomeEmail`).

### Admin-Benachrichtigung

Jede Anfrage schickt eine Mail an `RESEND_TO` (Popup: nach Schritt 1 und nach Schritt 2). Sie enthält Kontaktdaten, Modell, Standort, Anzahl Häuser und die IAB-Angabe.

**IAB-Frage (§ 7g):** Popup-Schritt 2 fragt, ob und für welches Jahr bereits ein Investitionsabzugsbetrag gebildet wurde. Die Investitionsfrist (31.12. des dritten Folgejahres) wird berechnet und in Admin-Mail und Lead-Nachricht gespeichert. Läuft die Frist im aktuellen Jahr ab, zeigt die Admin-Mail einen gelben Hinweis „zuerst anrufen“. Die Jahresauswahl (aktuell 2023–2026) muss jährlich nachgezogen werden.

### Preise & Texte pflegen

- Preise, Extras, Zahlungs-/Garantiebedingungen und Firmendaten (Adresse, USt-IdNr., Bankverbindung): nur in `app/konfigurator/konfigurator-data.ts`.
- Modellkacheln im Popup (`MODELS` in `MemorandumModal.tsx`) und Preise im Mailtext (`OFFER_TEXT` in `sendWelcomeEmail.ts`) bei Preisänderungen mit anpassen.

---

## SEO-Architektur

### Hub-and-Spoke Struktur

```
/tiny-house-als-kapitalanlage  ← Pillar (Priority 1.0)
         ↑
  alle 33 /wissen Artikel verlinken zurück zum Pillar

/wissen/senioren  ← Pillar für Altersvorsorge-Cluster
         ↑
  /wissen/tiny-house-altersvorsorge
  /wissen/rentenlucke-schliessen
  /wissen/tiny-house-vs-etf-altersvorsorge
```

### Schema.org JSON-LD

| Schema | Seiten |
|---|---|
| `Article` + `FAQPage` + `BreadcrumbList` | Alle 33 /wissen Artikel (inkl. /wissen/senioren, /wissen/aerzte, /wissen/freiberufler, /wissen/it-freelancer, /wissen/unternehmer, /wissen/zielgruppen) |
| `WebApplication` + `FAQPage` | /rechner/iab, /rechner/rendite |
| `Product` + `BreadcrumbList` | /marktplatz |
| `Organization` + `WebSite` | Startseite |

**Autor-Attribution (E-E-A-T):** Alle Artikel sind Noah Stein (`@type: Person`) mit LinkedIn-URL zugeordnet — sowohl im JSON-LD `author`-Feld als auch im sichtbaren Byline (Avatar, Name, Datum).

### Sitemap

50+ Einträge in `app/sitemap.ts`, inkl. Priority-Gewichtung:
- Priority 1.0: `/`, `/tiny-house-als-kapitalanlage`, `/wissen/7g-tiny-house-investment`
- Priority 0.9: alle /wissen Artikel (inkl. /wissen/senioren, /wissen/aerzte, /wissen/freiberufler, /wissen/it-freelancer, /wissen/unternehmer, /wissen/zielgruppen), /rechner/iab, /rechner/rendite
- Priority 0.85: /wissen Hub, /hosts
- Priority 0.6–0.8: /marktplatz, /projekte, /galerie, /konfigurator

Private Seiten (`/admin`, `/investor`, `/investor/login`, `/investor/auth/callback`) sind bewusst **nicht** in der Sitemap.

### Alle Seiten & Routen

| Route | Beschreibung | Schema.org |
|---|---|---|
| `/` | Startseite | Organization + WebSite |
| `/marktplatz` | Live-Marktplatz (Supabase) | Product + BreadcrumbList |
| `/marktplatz/[id]` | Einzelnes Listing (dynamisch) | Product + BreadcrumbList |
| `/renditemodell` | Renditerechner | — |
| `/steuervorteil` | §7g Steuer-Guide | — |
| `/so-funktioniert-es` | Investor-Prozess | — |
| `/galerie` | Foto-Galerie | — |
| `/hosts` | Host-Programm | — |
| `/partner` | Vertrieb-Programm | — |
| `/konfigurator` | Konfigurator | — |
| `/tiny-house-als-kapitalanlage` | SEO-Pillar-Landingpage (Priority 1.0) | Article + FAQPage + BreadcrumbList |
| `/rechner/iab` | IAB-Steuerrechner | WebApplication + FAQPage |
| `/rechner/rendite` | Renditerechner | WebApplication + FAQPage |
| `/wissen` | Wissens-Hub (33 Artikel) | CollectionPage |
| `/wissen/*` | Einzelartikel (33 Stück) | Article + FAQPage + BreadcrumbList |
| `/wissen/senioren` | Landingpage Senioren & Altersvorsorge | Article + FAQPage + BreadcrumbList |
| `/wissen/aerzte` | Landingpage Ärzte (§7g IAB) | Article + FAQPage + BreadcrumbList |
| `/wissen/freiberufler` | Landingpage Freiberufler (§7g IAB) | Article + FAQPage + BreadcrumbList |
| `/wissen/it-freelancer` | Landingpage IT-Freelancer (§7g IAB) | Article + FAQPage + BreadcrumbList |
| `/wissen/unternehmer` | Landingpage Unternehmer (§7g IAB) | Article + FAQPage + BreadcrumbList |
| `/wissen/zielgruppen` | Hub: Alle Selbstständigen-Zielgruppen | Article + BreadcrumbList |
| `/investor` | Dashboard | Auth required |
| `/investor/login` | Login | Auth required |
| `/admin` | Admin-Panel | Passwortgeschützt |

---

## Umgebungsvariablen

Erstelle `.env.local` im Root-Verzeichnis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...

# Resend (E-Mail-Versand)
RESEND_API_KEY=re_...
RESEND_FROM=noreply@tinyhouse.investments   # Absender der Admin-Benachrichtigung
RESEND_TO=info@tinyhouse.investments        # Empfänger der Admin-Benachrichtigung

# Admin-Panel
ADMIN_PASSWORD=dein-geheimes-passwort

# Öffentliche URL (für Auth-Callbacks)
NEXT_PUBLIC_SITE_URL=https://tinyhouse.investments
```

---

## Lokale Entwicklung

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

```bash
# Production Build testen
npm run build && npm run start

# Linting
npm run lint
```

---

## Datenbank (Supabase)

| Tabelle | Beschreibung |
|---|---|
| `listings` | Immobilien-Listings (Projekte / Marktplatz) |
| `leads` | Kontaktanfragen vom Lead-Formular |
| `investor_users` | Verifizierte Investoren |
| `investor_assets` | Verknüpfung Investor ↔ Asset |
| `bookings` | Buchungsdaten von tiny Escapes |
| `settings` | Plattform-Konfiguration |
| `sales_team` | Vertriebspartner/Sales-Team-Mitglieder |
| `lead_notizen` | Notizen der Vertriebs-/Admin-Seite zu einzelnen Leads |

```bash
# DB einrichten
node scripts/migrate.js

# SQL direkt im Supabase SQL-Editor ausführen
scripts/setup-investor-db.sql
scripts/setup-investor-assets.sql
```

---

## Deployment (Netlify)

Die Seite läuft auf Netlify. API-Routen laufen dort als Netlify Functions (Request-Body max. ~6 MB – große Dateien deshalb direkt zu Supabase hochladen, siehe Exposé-Upload). Alle `.env.local` Variablen müssen unter *Site configuration → Environment variables* hinterlegt werden.

---

## Kontakt

**TinyInvest**  
info@tinyhouse.investments  
[tinyhouse.investments](https://tinyhouse.investments)
