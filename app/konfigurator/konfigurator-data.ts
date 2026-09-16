
// ─────────────────────────────────────────────────────────────────────────────
// Tiny House Konfigurator – Zentrale Datei für Paketpreise & Angebotstexte
// ALLE Preise sind NETTO-Preise in EURO. MwSt. wird über VAT_RATE ergänzt.
// Verbindliche Verkaufspreise – kein Mengenrabatt, auch nicht bei Großabnahmen.
// ─────────────────────────────────────────────────────────────────────────────

export type Variant = "offgrid" | "ongrid";

export const VAT_RATE = 0.19;

export interface PackageLine {
  label: string;
  net: number;
}

export interface ModelInfo {
  id: string;
  name: string;
  subtitle: string;
  dimensions: string;
  trailerDimensions: string;
  trailer: string;
  image: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// MODELL MIT PAKETPREIS
// ─────────────────────────────────────────────────────────────────────────────

export const ESCAPE_660: ModelInfo = {
  id: "escape_660",
  name: "ESCAPE 660",
  subtitle: "Bestseller",
  dimensions: "660 × 255 × 325 (H) cm",
  trailerDimensions: "660 × 244 cm",
  trailer: "TH660 – 2 Achsen × 1.800 kg",
  image: "/images/outside/tiny-house-escape-sachwert.webp",
};

// ─────────────────────────────────────────────────────────────────────────────
// MODELLE AUF ANFRAGE – bewusst ohne Preis, keine PDF-Erstellung
// ─────────────────────────────────────────────────────────────────────────────

export const REQUEST_ONLY_MODELS: Array<{
  id: string;
  name: string;
  dimensions: string;
  note: string;
}> = [
  {
    id: "escape_840",
    name: "ESCAPE 840",
    dimensions: "840 × 255 × 340 (H) cm",
    note: "Preis auf Anfrage",
  },
  {
    id: "cabin_8400",
    name: "CABIN 8400",
    dimensions: "840 × 255 × 300 (H) cm",
    note: "Preis auf Anfrage",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// KOMPLETTPAKET – Preise je Einheit (netto)
// Enthält alles von der Produktion über die Lieferung bis zur
// Vermietungsbereitschaft am Aufstellungsort.
// On-Grid:  74.700 € netto · Off-Grid: 83.400 € netto
// ─────────────────────────────────────────────────────────────────────────────

const SHARED_PACKAGE_LINES: PackageLine[] = [
  { label: "Transport zum Standort (ab Werk)", net: 4000 },
  { label: "Innenausstattung (Bettwäsche, Geschirr, Wechselwäsche)", net: 2500 },
  { label: "Sofa Bed – JSK Extendable", net: 1000 },
  { label: "Tisch & Stühle", net: 1000 },
  {
    label:
      "Grundstücksvorbereitung & Vor-Ort-Service (Wasser-/Abwasseranschluss, Aufstellung, Bodenanpassung)",
    net: 5500,
  },
];

export const PACKAGE_LINE_ITEMS: Record<Variant, PackageLine[]> = {
  ongrid: [
    {
      label:
        "Escape 660 – On-Grid, komplett ausgestattet (inkl. Klimaanlage GREE 9000BTU, Kassettentoilette)",
      net: 60700,
    },
    ...SHARED_PACKAGE_LINES,
  ],
  offgrid: [
    {
      label:
        "Escape 660 – Off-Grid, komplett ausgestattet (inkl. Klimaanlage, Solaranlage, Kassettentoilette)",
      net: 69400,
    },
    ...SHARED_PACKAGE_LINES,
  ],
};

export const VARIANT_LABEL: Record<Variant, string> = {
  ongrid: "On-Grid (Netzanschluss am Standort erforderlich)",
  offgrid: "Off-Grid (Solarbetrieb)",
};

export const VARIANT_SHORT: Record<Variant, string> = {
  ongrid: "On-Grid",
  offgrid: "Off-Grid",
};

// ─────────────────────────────────────────────────────────────────────────────
// AUFPREIS-EXTRAS (netto, je Einheit)
// ─────────────────────────────────────────────────────────────────────────────

export interface ExtraItem {
  id: string;
  label: string;
  description?: string;
  net: number;
}

export const EXTRAS: ExtraItem[] = [
  {
    id: "entrance_stair",
    label: "Eingangstreppe – Massiv Kieferholz",
    description: "Stabile Eingangstreppe aus massivem Kiefernholz, passend zur Hausfront.",
    net: 899,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PREISBERECHNUNG – einzige Quelle für App & PDF
// MwSt. wird je Einheit gerundet, Gesamtsummen sind Vielfache davon.
// ─────────────────────────────────────────────────────────────────────────────

export interface OfferCalculation {
  lines: PackageLine[];
  unitNet: number;
  unitVat: number;
  unitGross: number;
  totalNet: number;
  totalVat: number;
  totalGross: number;
  units: number;
}

export function calcOffer(
  variant: Variant,
  units: number,
  extraIds: string[] = []
): OfferCalculation {
  const count = Math.max(1, Math.floor(units) || 1);

  const extraLines: PackageLine[] = EXTRAS.filter((e) => extraIds.includes(e.id)).map((e) => ({
    label: e.label,
    net: e.net,
  }));
  const lines = [...PACKAGE_LINE_ITEMS[variant], ...extraLines];

  const unitNet = lines.reduce((sum, l) => sum + l.net, 0);
  const unitVat = Math.round(unitNet * VAT_RATE);
  const unitGross = unitNet + unitVat;

  return {
    lines,
    unitNet,
    unitVat,
    unitGross,
    totalNet: unitNet * count,
    totalVat: unitVat * count,
    totalGross: unitGross * count,
    units: count,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// LEISTUNGSUMFANG – was im Komplettpaket steckt (Transparenzliste)
// ─────────────────────────────────────────────────────────────────────────────

export const OFF_GRID_INCLUDED_ITEMS = [
  // ── Modell & Außen ──────────────────────────────────────────────────────
  "Escape 660 mit Loft – Rohbau",
  "Anhänger TH660 – 2 Achsen × 1.800 kg (660×244 cm)",
  "Technikbox Außen",
  "Holz imprägniert & behandelt gegen Feuer & Pilze",
  // ── Struktur ────────────────────────────────────────────────────────────
  "3-schichtiger Holzfußboden (Wohnbereich) & LVT Boden (Bad)",
  "Wandstruktur: Kiefern-Innenverkleidung 12mm, Thermowood Luna 21mm außen kombiniert mit Stahl RAL9005",
  "Dachstruktur: Kiefernholz 12mm innen, Stahl-Dachabdeckung",
  "PVC-Fenster: Doppelverglast LOW-E Standard, ROTO Beschläge, Fliegengitter für alle Fenster",
  "Elektroinstallation: LED-Deckenlichter, Schneider Sedna Steckdosen & Schalter, Außen-LED, 16A Außensteckdose, Sicherungskasten",
  // ── Off-Grid Systeme ────────────────────────────────────────────────────
  "Solaranlage S3000-48: 4× Longi Monokristallin 560W, Victron Multiplus 48/3000/35-32, SmartSolar MPPT 150/45, LiFePO4 51,2V/100Ah, VE.Bus BMS, Cerbo GX MK2, GX Touch 70",
  "Frischwassertank 93L + 12V SEAFLO Pumpe",
  "Grauwassertank 93L (auf Stahltrolley)",
  // ── Heizung & Klima ─────────────────────────────────────────────────────
  "Holzofen SG50 mit isolierten Abgasrohren",
  "Klimaanlage GREE 9000BTU – Inverter mit WIFI-Steuerung",
  // ── Sanitär & Toilette ──────────────────────────────────────────────────
  "Kassettentoilette",
  "Durchlauferhitzer – TULPE Gasgerät inkl. Abdeckschrank",
  "Badezimmerschrank mit Frischwassertank 93L + 12V SEAFLO Pumpe",
  "Trennwand mit Schiebetür – Massivholz, Naturlack",
  "Dusche 800×800 mit Klapptür",
  "Waschbecken Badezimmer",
  "Spiegel mit LED-Beleuchtung",
  // ── Küche & Ausstattung ─────────────────────────────────────────────────
  "Küchenpaket komplett 1660mm: Unterschränke, MDF Arbeitsplatte, Spüle 460×460 mit Armatur, Oberschrank mit LED, integrierter Kühlschrank",
  "2-Flammen Gas-Kochfeld (integriert in Küche)",
  // ── Möbel & Wohnen ──────────────────────────────────────────────────────
  "Bett mit Matratze & Kopfregalablage",
  "Sofa Bed – JSK Extendable",
  "Tisch & Stühle",
  "Innenausstattung: Bettwäsche, Geschirr, Wechselwäsche",
  // ── Lieferung & Aufstellung ─────────────────────────────────────────────
  "Transport zum Standort (ab Werk)",
  "Grundstücksvorbereitung & Vor-Ort-Service: Wasser-/Abwasseranschluss, Aufstellung, Bodenanpassung",
];

export const ON_GRID_INCLUDED_ITEMS = [
  // ── Modell & Außen ──────────────────────────────────────────────────────
  "Escape 660 mit Loft – Rohbau",
  "Anhänger TH660 – 2 Achsen × 1.800 kg (660×244 cm)",
  "Holz imprägniert & behandelt gegen Feuer & Pilze",
  // ── Struktur ────────────────────────────────────────────────────────────
  "3-schichtiger Holzfußboden (Wohnbereich) & LVT Boden (Bad)",
  "Wandstruktur: Kiefern-Innenverkleidung 12mm, Thermowood Luna 21mm außen kombiniert mit Stahl RAL9005",
  "Dachstruktur: Kiefernholz 12mm innen, Stahl-Dachabdeckung",
  "PVC-Fenster: Doppelverglast LOW-E Standard, ROTO Beschläge, Fliegengitter für alle Fenster",
  "Elektroinstallation: LED-Deckenlichter, Schneider Sedna Steckdosen & Schalter, Außen-LED, 16A Außensteckdose, Sicherungskasten",
  // ── Wasserversorgung ────────────────────────────────────────────────────
  "Frischwassertank 93L + 12V SEAFLO Pumpe",
  "Grauwassertank 93L",
  "Anschluss ans Kanalnetz – Vorbereitung (110mm PVC-Rohr außen)",
  // ── Heizung & Klima ─────────────────────────────────────────────────────
  "Holzofen SG50 mit isolierten Abgasrohren",
  "Klimaanlage GREE 9000BTU – Inverter mit WIFI-Steuerung",
  // ── Sanitär & Toilette ──────────────────────────────────────────────────
  "Kassettentoilette",
  "Badezimmerschrank mit Frischwassertank 93L + 12V SEAFLO Pumpe",
  "Trennwand mit Schiebetür – Massivholz, Naturlack",
  "Dusche 800×800 mit Klapptür",
  "Waschbecken Badezimmer",
  "Spiegel mit LED-Beleuchtung",
  // ── Küche & Ausstattung ─────────────────────────────────────────────────
  "Küchenpaket komplett 1660mm: Unterschränke, MDF Arbeitsplatte, Spüle 460×460 mit Armatur, Oberschrank mit LED, integrierter Kühlschrank",
  "2-Flammen Gaskochfeld (integriert in Küche)",
  // ── Möbel & Wohnen ──────────────────────────────────────────────────────
  "Bett 1600×2200 mit Sitzbank, Matratze & Kopfregalablage",
  "Sofa Bed – JSK Extendable",
  "Tisch & Stühle",
  "Innenausstattung: Bettwäsche, Geschirr, Wechselwäsche",
  // ── Lieferung & Aufstellung ─────────────────────────────────────────────
  "Transport zum Standort (ab Werk)",
  "Grundstücksvorbereitung & Vor-Ort-Service: Wasser-/Abwasseranschluss, Aufstellung, Bodenanpassung",
];

export const INCLUDED_ITEMS: Record<Variant, string[]> = {
  ongrid: ON_GRID_INCLUDED_ITEMS,
  offgrid: OFF_GRID_INCLUDED_ITEMS,
};

// ─────────────────────────────────────────────────────────────────────────────
// GARANTIEBEDINGUNGEN
// ─────────────────────────────────────────────────────────────────────────────
export const WARRANTY_TERMS = [
  { item: "Wasserdichtigkeit & Abdichtung", duration: "2 Jahre" },
  { item: "Holzkonstruktion", duration: "2 Jahre" },
  { item: "Wasserinstallation", duration: "1 Jahr" },
  { item: "Elektroinstallation", duration: "1 Jahr" },
  { item: "Fenster & Türen, Möbel", duration: "1 Jahr" },
  { item: "Haushaltsgeräte", duration: "1 Jahr" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ZAHLUNGS- & ANGEBOTSBEDINGUNGEN
// ─────────────────────────────────────────────────────────────────────────────
export const PAYMENT_TERMS = [
  "50 % bei Auftragsbestätigung",
  "50 % bei Abholung/Versand ab Werk (nachgewiesen durch Frachtbrief/Spediteurbestätigung)",
];

export const DELIVERY_TERM = "Lieferzeit: 60 Tage";

export const OFFER_VALIDITY =
  "Dieses Preisangebot ist 14 Tage gültig. Alle Beträge in EURO.";

export const PACKAGE_NOTE =
  "Diese Preise enthalten alles von der Produktion über die Lieferung bis zur Vermietungsbereitschaft der jeweiligen Einheit.";

export const QUANTITY_NOTE =
  "Die Preise sind Einzelpreise je Einheit. Der Einzelpreis ist unabhängig von der Stückzahl – kein Mengenrabatt.";

export const VAT_NOTE =
  "Sofern Sie als vorsteuerabzugsberechtigtes Unternehmen kaufen und die Einheiten gewerblich vermieten, können Sie die ausgewiesene Mehrwertsteuer als Vorsteuer geltend machen.";

export const LOCATION_NOTE =
  "On-Grid-Einheiten setzen einen bereits vorhandenen Netzanschluss am jeweiligen Standort voraus. Nicht jedes Grundstück verfügt automatisch über eine Stromversorgung. Off-Grid-Modelle sind flexibler in der Standortwahl.";

export const COMPANY_INFO = {
  name: "Rautenberg Professional Solutions GmbH",
  address: "Baslerstraße 3, 61325 Bad Homburg v.d.Höhe",
  phone: "+49 151 68957104",
  email: "info@tinyhouse.investments",
  vatId: "USt-IdNr.: DE318742905",
  bank: "Bank: tbd | IBAN: tbd | SWIFT: tbd",
};
