# TinyInvest — Tiny House Investment Platform

> Steueroptimierte Kapitalanlage in mobile Tiny Houses – kaufen, vermieten, Steuern sparen.  
> Live: [tinyhouse.investments](https://tinyhouse.investments)

---

## Was ist TinyInvest?

TinyInvest ist eine Next.js-Plattform, über die Privatinvestoren mobile Tiny Houses als steueroptimierte Kapitalanlage erwerben können. Die Häuser werden an Ferienstandorten in DE/AT/EU betrieben und vollständig durch [tiny Escapes](https://tiny.rentals) verwaltet. Investoren erhalten 40 % der Nettomieteinnahmen monatlich ausgezahlt, ohne selbst operativ tätig zu werden.

**4 Zielgruppen:**
- **Steuer-Investor** – §7g IAB + Sonder-AfA + degressive AfA (bis ~34.000 € Steuervorteil im Kaufjahr)
- **Rendite-Investor** – 40 % der Mieteinnahmen monatlich, 12–18 % IRR p.a.
- **Finanzierungs-Käufer** – Bankkredit + IAB als Eigenkapitalhebel, Mieteinnahmen tilgen die Rate
- **Senioren & Rentner** – Sachwert als Altersvorsorge: Kapitalanlage mit monatlicher Auszahlung oder Selbstnutzung

---

## Tech Stack

| Technologie | Einsatz |
|---|---|
| **Next.js 15** (App Router) | Frontend + API Routes |
| **TypeScript** | Typsicherheit |
| **Tailwind CSS** | Styling |
| **Supabase** | PostgreSQL Datenbank + Magic Link & Google OAuth |
| **Google Maps API** | Standortkarte (`/projekte`) |
| **Vercel** | Hosting & Deployment |

---

## Projektstruktur

```
app/
├── page.tsx                          # Startseite (Landing Page)
├── layout.tsx                        # Root Layout + globale Metadata
├── sitemap.ts                        # Automatische XML-Sitemap (40+ Einträge)
│
├── marktplatz/                       # Listing-Marktplatz (Supabase-Live-Daten)
├── projekte/                         # Projektübersicht + Google Maps
├── renditemodell/                    # Interaktiver Renditerechner
├── steuervorteil/                    # §7g IAB + AfA Erklärung
├── so-funktioniert-es/               # Investor-Prozess Schritt für Schritt
├── galerie/                          # Foto-Galerie (Innen & Außen)
├── hosts/                            # Host-Partnerprogramm
├── partner/                          # Vertriebspartner-Programm
├── konfigurator/                     # Tiny House Konfigurator
├── tiny-house-als-kapitalanlage/     # SEO-Landingpage (Priority 1.0)
├── senioren/                         # Landingpage Senioren & Altersvorsorge
├── agb/                              # Allgemeine Geschäftsbedingungen
├── impressum/                        # Impressum
├── datenschutz/                      # Datenschutzerklärung
│
├── rechner/
│   ├── iab/                          # IAB-Steuerrechner
│   └── rendite/                      # Renditerechner (interaktiv)
│
├── wissen/                           # SEO-Wissens-Hub (22 Artikel)
│   ├── page.tsx                      # Hub-Übersichtsseite
│   ├── 7g-tiny-house-investment/     # §7g Leitfaden (Priority 1.0)
│   ├── afa-abschreibung/             # AfA-Abschreibung erklärt
│   ├── direktinvestment/             # Direktinvestment vs. Fonds
│   ├── ferienimmobilie-steuer/       # Steuer bei Ferienimmobilien
│   ├── host-werden/                  # Host werden bei tiny Escapes
│   ├── iab-tiny-house/               # IAB Tiny House
│   ├── kapitalanlage/                # Tiny House vs. ETW Vergleich (educational)
│   ├── passive-einnahmen-immobilien/ # Passive Einnahmen mit Immobilien
│   ├── pv-anlage-als-kapitalanlage/  # PV vs. Tiny House Vergleich
│   ├── solaranlage-alternative/      # Solaranlage als Kapitalanlage
│   ├── steuerberater-finden/         # Steuerberater finden
│   ├── tiny-house-airbnb/            # Tiny House auf Airbnb vermieten
│   ├── tiny-house-als-rendite/       # Cashflow & Ertragsmodell
│   ├── tiny-house-finanzierung/      # Finanzierungsoptionen
│   ├── tiny-house-genehmigung/       # Baugenehmigung & Recht
│   ├── tiny-house-kaufen/            # Tiny House kaufen Guide
│   ├── tiny-house-kaufen-checkliste/ # Kaufcheckliste
│   ├── tiny-house-kaufen-mit-grundstueck/ # Kauf mit Grundstück
│   ├── tiny-house-rendite-rechner/   # Rendite berechnen
│   ├── tiny-house-standorte/         # Standortauswahl
│   ├── tiny-house-steuer-risiken/    # Steuerrisiken & Fallstricke
│   └── tiny-house-steuern-sparen/    # Steuern sparen Anleitung
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
│   ├── contact/route.ts              # Lead-Formular → Supabase
│   ├── investor/data/route.ts        # Investor-Dashboard Daten
│   └── admin/
│       ├── leads/                    # Leads verwalten
│       ├── listings/                 # Listings CRUD
│       ├── investor-users/           # Investor-User Management
│       ├── investor-assets/          # Asset-Zuordnung
│       ├── promote-to-investor/      # User → Investor hochstufen
│       ├── settings/                 # Plattform-Einstellungen
│       └── upload/                   # Bild-Upload
│
└── components/
    ├── Hero.tsx                      # Startseite Hero (H1, CTA, Badge)
    ├── HeroCalculator.tsx            # Mini-Renditerechner im Hero
    ├── RenditeRechner.tsx            # Interaktiver Rendite-Rechner
    ├── SteuerRechner.tsx             # §7g Steuer-Rechner
    ├── ProjekteGrid.tsx              # Projekt-Kacheln
    ├── ProjekteGoogleMap.tsx         # Google Maps Standortkarte
    ├── MarktplatzMap.tsx             # Marktplatz-Karte
    ├── MarktplatzTeaser.tsx          # Marktplatz-Teaser Startseite
    ├── StandortMap.tsx               # Einzelstandort-Karte
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
    ├── ModalContext.tsx              # Globaler Lead-Modal State
    ├── MemorandumModal.tsx           # Unterlagen-Anfrage Modal
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
└── images/
    ├── inside/                       # Innenansichten der Häuser
    └── outside/                      # Außenansichten der Häuser
```

---

## SEO-Architektur

### Schema.org JSON-LD (alle Seiten)

| Schema | Seiten |
|---|---|
| `Article` + `FAQPage` + `BreadcrumbList` | Alle 22 /wissen Artikel + /senioren |
| `Product` + `BreadcrumbList` | /marktplatz |
| `Organization` | Startseite |

**Autor-Attribution (E-E-A-T):** Alle Artikel sind Noah Stein (`@type: Person`) mit LinkedIn-URL zugeordnet — sowohl im JSON-LD `author`-Feld als auch im sichtbaren Byline (Avatar, Name, Datum).

### Sitemap
40+ Einträge in `app/sitemap.ts`, inkl. Priority-Gewichtung:
- Priority 1.0: `/`, `/tiny-house-als-kapitalanlage`, `/wissen/7g-tiny-house-investment`
- Priority 0.9: alle /wissen Artikel, /senioren, /rechner/iab, /rechner/rendite
- Priority 0.8–0.85: /marktplatz, /projekte, /hosts, /wissen Hub

### Seiten & Routen

| Route | Beschreibung | Schema.org |
|---|---|---|
| `/` | Startseite | Organization |
| `/marktplatz` | Live-Marktplatz (Supabase) | Product + BreadcrumbList |
| `/projekte` | Projekte + Google Maps | — |
| `/renditemodell` | Renditerechner | — |
| `/steuervorteil` | §7g Steuer-Guide | — |
| `/so-funktioniert-es` | Investor-Prozess | — |
| `/galerie` | Foto-Galerie | — |
| `/hosts` | Host-Programm | — |
| `/partner` | Vertrieb-Programm | — |
| `/konfigurator` | Konfigurator | — |
| `/tiny-house-als-kapitalanlage` | SEO-Pillar-Landingpage (Priority 1.0) | Article + FAQPage + BreadcrumbList |
| `/senioren` | Landingpage Senioren & Altersvorsorge | Article + FAQPage + BreadcrumbList |
| `/rechner/iab` | IAB-Steuerrechner | — |
| `/rechner/rendite` | Renditerechner | — |
| `/wissen` | Wissens-Hub (17 Artikel) | CollectionPage |
| `/wissen/*` | Einzelartikel | Article + FAQPage + BreadcrumbList |
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

```bash
# DB einrichten
node scripts/migrate.js

# SQL direkt im Supabase SQL-Editor ausführen
scripts/setup-investor-db.sql
scripts/setup-investor-assets.sql
```

---

## Deployment (Vercel)

```bash
vercel --prod
```

Oder GitHub-Repo im [Vercel Dashboard](https://vercel.com) verbinden. Alle `.env.local` Variablen müssen unter *Project Settings → Environment Variables* hinterlegt werden.

---

## Kontakt

**TinyInvest**  
info@tinyhouse.investments  
[tinyhouse.investments](https://tinyhouse.investments)
