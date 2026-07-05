
// ─────────────────────────────────────────────────────────────────────────────
// Tiny House Konfigurator – Zentrale Datei für Modelle, Optionen & Preise
// Preise können hier jederzeit angepasst werden.
// ─────────────────────────────────────────────────────────────────────────────

export type Variant = "offgrid" | "ongrid";

export interface ModelConfig {
  id: string;
  name: string;
  subtitle: string;
  dimensions: string;
  trailerDimensions: string;
  trailer: string;
  basePrice: { offgrid: number; ongrid: number };
  image: string;
  loft: boolean;
  tag?: string;
}

export interface OptionItem {
  id: string;
  label: string;
  description?: string;
  price: number;
  unit?: string;
  /**
   * lockedFor: Pre-selected AND cannot be deselected for these variants.
   * These items are included in the base price.
   */
  lockedFor?: Variant[];
  /**
   * defaultFor: Pre-selected but CAN be changed.
   * These are baked into the basePrice – adding them does NOT raise the price.
   */
  defaultFor?: Variant[];
  /**
   * hideFor: Do not show this option for these variants at all.
   */
  hideFor?: Variant[];
  note?: string;
}

export interface OptionCategory {
  id: string;
  label: string;
  icon: string;
  items: OptionItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// MODELLE
// All basePrice values are GROSS (inkl. 21% MwSt.)
// Netto = basePrice / 1.21
// On-Grid minimum price: €59.000 (ESCAPE 660)
// Off-Grid ESCAPE 660: €65.289 gross (≈ €53.958 netto)
// ─────────────────────────────────────────────────────────────────────────────

export const MODELS: ModelConfig[] = [
  {
    id: "escape_660",
    name: "ESCAPE 660",
    subtitle: "Bestseller",
    dimensions: "660 × 255 × 325 (H) cm",
    trailerDimensions: "660 × 244 cm",
    trailer: "TH660 – 2 Achsen × 1.800 kg",
    basePrice: { offgrid: 79000, ongrid: 69000 },
    image: "/images/outside/tiny-house-escape-sachwert.webp",
    loft: true,
    tag: "Bestseller",
  },
  {
    id: "escape_840",
    name: "ESCAPE 840",
    subtitle: "Größeres Escape Modell",
    dimensions: "840 × 255 × 340 (H) cm",
    trailerDimensions: "840 × 244 cm",
    trailer: "TH840 – 3 Achsen × 1.800 kg",
    basePrice: { offgrid: 98000, ongrid: 89000 },
    image: "/images/outside/Escape2.webp",
    loft: true,
    tag: "Größeres Modell",
  },
  {
    id: "cabin_8400",
    name: "CABIN 8400",
    subtitle: "Einstöckiges Cabin",
    dimensions: "840 × 255 × 300 (H) cm",
    trailerDimensions: "840 × 244 cm",
    trailer: "TH840 – 3 Achsen × 1.800 kg",
    basePrice: { offgrid: 77400, ongrid: 64900 },
    image: "/images/outside/Escape2.webp",
    loft: false,
    tag: "Cabin",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ENTHALTENE PAKETE (im Basispreis, nicht separat berechnet)
// Diese werden im PDF als "Im Paket enthalten" aufgelistet
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
  // ── Heizung ─────────────────────────────────────────────────────────────
  "Holzofen SG50 mit isolierten Abgasrohren",
  // ── Sanitär & Toilette ──────────────────────────────────────────────────
  "Trockentoilette – Clesana (Kapselsystem)",
  "Durchlauferhitzer – TULPE Gasgerät inkl. Abdeckschrank",
  "Badezimmerschrank mit Frischwassertank 93L + 12V SEAFLO Pumpe",
  "Trennwand mit Schiebetür – Massivholz, Naturlack",
  "Dusche 800×800 mit Klapptür",
  "Waschbecken Badezimmer",
  "Spiegel mit LED-Beleuchtung",
  // ── Küche & Ausstattung ─────────────────────────────────────────────────
  "2-Flammen Gas-Kochfeld (integriert in Küche)",
  "Spüle 460×460mm mit Armatur",
  "Oberschrank mit 3 Türen + integriertem LED-Licht (1660mm)",
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
  // ── Heizung ─────────────────────────────────────────────────────────────
  "Holzofen SG50 mit isolierten Abgasrohren",
  // ── Sanitär & Toilette ──────────────────────────────────────────────────
  "Kassettentoilette – Thetford C263CS",
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
  "Trennwand mit Schiebetür – Massivholz, Naturlack",
];

// ─────────────────────────────────────────────────────────────────────────────
// OPTIONEN
// defaultFor = pre-selected, baked into base price, price ONLY goes UP if extras added
// lockedFor  = mandatory, cannot be unchecked
// hideFor    = not shown for that variant
// ─────────────────────────────────────────────────────────────────────────────

export const OPTION_CATEGORIES: OptionCategory[] = [
  // ── SOLARANLAGE ────────────────────────────────────────────────────────────
  {
    id: "solar",
    label: "Solaranlage",
    icon: "☀️",
    items: [
      {
        id: "solar_wires",
        label: "Solar Leitungsvorbereitung",
        description: "Kabelvorinstallation für spätere Solarmontage – ohne Panels und Wechselrichter",
        price: 380,
      },
      {
        id: "solar_s3000",
        label: "Solaranlage S3000-48",
        description:
          "4× Longi Monokristallin 560W · Victron Multiplus 48/3000/35-32 Wechselrichter · SmartSolar MPPT 150/45 · LiFePO4 51,2V/100Ah Smart · VE.Bus BMS · Lynx Smart BMS 500 NG · Cerbo GX MK2 · GX Touch 70",
        price: 12500,
        lockedFor: ["offgrid"],
        note: "Im Off-Grid Paket enthalten",
      },
    ],
  },

  // ── SANITÄR ────────────────────────────────────────────────────────────────
  {
    id: "sanitaer",
    label: "Sanitär & Bad",
    icon: "🚿",
    items: [
      {
        id: "shower_800",
        label: "Dusche 800×800 mit Klapptür",
        description: "Kompakte Duschkabine mit platzsparender Klapptür",
        price: 680,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "bathroom_sink",
        label: "Waschbecken Badezimmer",
        description: "Keramikwaschbecken für das Badezimmer",
        price: 320,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "mirror_led",
        label: "Spiegel mit LED-Beleuchtung",
        price: 180,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "bathroom_cabinet",
        label: "Badezimmerschrank mit Frischwassertank + 12V SEAFLO Pumpe",
        description: "Integrierter Unterschrank mit verstecktem Wassertank und leisem 12V Pumpensystem",
        price: 1290,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "toilet_kolo",
        label: "Spültoilette – Kolo Solo",
        description: "Klassische Keramik-Spültoilette",
        price: 490,
      },
      {
        id: "toilet_geberit",
        label: "Spültoilette – Geberit Wandmontage",
        description: "Hochwertiges Wand-WC mit Unterputz-Spülkasten",
        price: 890,
      },
      {
        id: "toilet_separett",
        label: "Trockentoilette – Separett Tiny",
        description: "Trenntoilette ohne Wasseranschluss. www.separett.com",
        price: 750,
      },
      {
        id: "toilet_clesana",
        label: "Trockentoilette – Clesana",
        description: "Wasserlose Hygienetoilette. www.clesana.com",
        price: 1400,
        defaultFor: ["offgrid"],
      },
      {
        id: "toilet_thetford",
        label: "Kassettentoilette – Thetford C263CS",
        description: "Kassettentoilette für mobilen Einsatz",
        price: 650,
        defaultFor: ["ongrid"],
      },
      {
        id: "toilet_thetford_extra",
        label: "Zusatzkassette für Thetford Toilette",
        price: 180,
      },
    ],
  },

  // ── WASSERVERSORGUNG ───────────────────────────────────────────────────────
  {
    id: "wasser",
    label: "Wasserversorgung & -entsorgung",
    icon: "💧",
    items: [
      {
        id: "cleanwater_93",
        label: "Frischwassertank 93L + 12V SEAFLO Pumpe",
        description: "Für Off-Grid Betrieb. Stahltrolley im Lieferumfang.",
        price: 890,
        lockedFor: ["offgrid"],
        note: "Im Off-Grid Paket enthalten",
      },
      {
        id: "cleanwater_400",
        label: "Frischwassertank 400L + Pumpe",
        description: "Große Kapazität für längere Off-Grid Aufenthalte",
        price: 1450,
      },
      {
        id: "greywater_93",
        label: "Grauwassertank 93L",
        description: "Auffangtank für Grauwasser (Dusche/Küche)",
        price: 420,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "greywater_pump",
        label: "Grauwassertank mit Pumpe",
        description: "Grauwassertank mit integrierter Entleerungspumpe",
        price: 690,
      },
      {
        id: "sewage_prep",
        label: "Anschluss ans Kanalnetz (Vorbereitung)",
        description: "Außen 110mm PVC-Rohr Vorbereitung für Kanalanschluss",
        price: 280,
        defaultFor: ["ongrid"],
      },
      {
        id: "water_filter",
        label: "Wasserfiltrationsanlage & Regenwassersammlung",
        price: 1890,
      },
      {
        id: "water_filter_uv",
        label: "Good Guards Filtration UV + Kohle",
        description: "Installiert unter dem Badezimmerwaschbecken",
        price: 980,
      },
    ],
  },

  // ── WASSERERWÄRMUNG ────────────────────────────────────────────────────────
  {
    id: "warmwasser",
    label: "Warmwasserbereitung",
    icon: "🌡️",
    items: [
      {
        id: "heater_tulpe",
        label: "Durchlauferhitzer – TULPE (Gas)",
        description: "Gas-Durchlauferhitzer inkl. Abdeckschrank",
        price: 390,
        defaultFor: ["offgrid"],
      },
      {
        id: "heater_ariston_80",
        label: "Boiler 80L – Ariston EVO80 (Elektrisch)",
        description: "Elektrischer Warmwasserboiler 80L – Ariston EVO80",
        price: 780,
      },
      {
        id: "heater_ariston_50",
        label: "Boiler 50L – Ariston EVO50 (Elektrisch, inkl. Schrank)",
        price: 720,
      },
      {
        id: "heater_30l",
        label: "Warmwasserboiler 30L – Ariston (Elektrisch)",
        price: 540,
      },
      {
        id: "heater_ariston_15",
        label: "Warmwasserboiler 15L – Ariston (Elektrisch)",
        price: 380,
      },
      {
        id: "heater_truma_boiler",
        label: "Truma Boiler Hybrid – Warmwasserbereiter",
        description: "Gas/Elektrisch – Truma",
        price: 890,
      },
      {
        id: "heater_truma_combi",
        label: "Truma Combi 4 Hybrid – Wasser + Luftheizung",
        description: "Gas/Elektrisch. Kombinierte Heizlösung für Wasser und Raumheizung.",
        price: 3200,
      },
    ],
  },

  // ── KÜCHE ──────────────────────────────────────────────────────────────────
  {
    id: "kueche",
    label: "Küche",
    icon: "🍳",
    items: [
      {
        id: "kitchen_full",
        label: "Küchenpaket komplett (1660mm)",
        description:
          "Unterschrank mit 1 Tür (für Spüle) · Unterschrank mit 4 Schubladen · MDF Arbeitsplatte · Spüle 460×460mm mit Armatur · Oberschrank mit 3 Türen + LED (1660mm) · Integrierter Kühl-/Gefrierkombinat",
        price: 4800,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "hob_2burner",
        label: "2-Flammen Gaskochfeld (integriert in Küche)",
        price: 680,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "hob_1burner",
        label: "1-Flammen Kochfeld (mobil)",
        price: 290,
      },
      {
        id: "kitchen_hood",
        label: "Küchenabzugshaube",
        price: 350,
      },
      {
        id: "washing_machine",
        label: "Waschmaschine",
        description: "Eingebaut unter dem Badezimmerwaschbecken",
        price: 780,
      },
    ],
  },

  // ── MÖBEL ──────────────────────────────────────────────────────────────────
  {
    id: "moebel",
    label: "Möbel & Einrichtung",
    icon: "🛋️",
    items: [
      {
        id: "stairs_loft",
        label: "Treppe zum Loft",
        description: "Für Escape-Modelle mit Loft. Massivholz.",
        price: 1200,
      },
      {
        id: "stairs_wardrobe",
        label: "Treppe mit Garderobe & Stauraum",
        description: "Für zweites Loft – von der linken Seite",
        price: 1650,
      },
      {
        id: "storage_loft",
        label: "Stauraum im Loft",
        price: 850,
      },
      {
        id: "table_4chairs",
        label: "Esstisch mit 4 Stühlen – Solido Extendable",
        description: "Ausziehbarer Esstisch. Material: Pappelsperrholz 18mm / Massivholz Eiche. Farbe: Naturlack.",
        price: 980,
        defaultFor: ["offgrid"],
      },
      {
        id: "table_2chairs",
        label: "Esstisch mit 2 Stühlen",
        description: "Kompakte Version. Material: Pappelsperrholz 18mm / Massivholz Eiche.",
        price: 680,
      },
      {
        id: "sofa_bed",
        label: "Schlafsofa – Solido Extendable",
        description: "Ausziehbares Schlafsofa. Material: Pappelsperrholz/Massivholz Eiche. Farbe: Grün / Grau.",
        price: 1650,
      },
      {
        id: "sofa_bed_jsk",
        label: "Schlafsofa – JSK Extendable",
        description: "Ausziehbares Schlafsofa, zweite Variante. Farbe: Grün / Grau.",
        price: 1750,
      },
      {
        id: "bed_full",
        label: "Bett 1600×2200 mit Bank, Matratze & Regalablage",
        description: "Doppelbett mit integrierter Sitzbank und Kopfregalablage. Inkl. Matratze und Kissen.",
        price: 2100,
        defaultFor: ["ongrid"],
      },
      {
        id: "mattress_loft_160",
        label: "Matratze Loft 1600×2000mm inkl. Kissen",
        description: "Für Escape Modelle mit Loft",
        price: 680,
        defaultFor: ["offgrid"],
      },
      {
        id: "mattress_loft_140",
        label: "Matratze Loft 1400×2000mm",
        price: 580,
      },
      {
        id: "partition_wall",
        label: "Trennwand mit Schiebetür",
        description: "Massivholz Schiebetür – Naturlack. Schafft ein separates Schlafzimmer.",
        price: 1350,
        defaultFor: ["offgrid", "ongrid"],
      },
    ],
  },

  // ── AUSSENBEREICH ──────────────────────────────────────────────────────────
  {
    id: "aussen",
    label: "Außenbereich",
    icon: "🌿",
    items: [
      {
        id: "deck",
        label: "Außendeck 6×2,5m",
        description: "Inkl. Deck, 2× Adirondack Stühle und alle Annehmlichkeiten für den Vermietungsbetrieb",
        price: 3200,
      },
      {
        id: "entrance_stair",
        label: "Eingangstreppe – Massiv Kieferholz",
        price: 680,
      },
      {
        id: "technical_box",
        label: "Technikbox Außen",
        description: "Wetterfeste Technikbox für außen",
        price: 450,
        defaultFor: ["offgrid"],
      },
      {
        id: "storage_gas",
        label: "Zusatzlagerboxen außen (Gas & Ecoflow)",
        description: "Abnehmbare Außenlagerboxen für Gas & Batteriesysteme",
        price: 390,
      },
      {
        id: "extra_window",
        label: "Zusätzliches Fenster hinter dem Esstisch",
        price: 780,
      },
    ],
  },

  // ── HEBE- & STÜTZSYSTEME ───────────────────────────────────────────────────
  {
    id: "support",
    label: "Hebe- & Stützsysteme",
    icon: "🔧",
    items: [
      {
        id: "lifting_jacks",
        label: "Hebevorrichtung – Handwinden zum Anheben",
        description: "Werden zum Anheben des Hauses verwendet – nicht zum Nivelliern des Anhängers",
        price: 480,
      },
      {
        id: "fixed_supports",
        label: "Stahl-Festlager für Nivellierung des Tiny Houses",
        price: 390,
      },
      {
        id: "support_legs_4",
        label: "Schwerlast-Standstützen – 4 Stück",
        description: "Für Modelle ab 7,2m und 8,4m Länge",
        price: 680,
      },
      {
        id: "support_legs_8",
        label: "Schwerlast-Standstützen – 8 Stück",
        description: "Für Modelle ab 7,2m und 8,4m Länge",
        price: 1150,
      },
    ],
  },

  // ── HEIZUNG & KÜHLUNG ──────────────────────────────────────────────────────
  {
    id: "heizung",
    label: "Heizung & Kühlung",
    icon: "🔥",
    items: [
      {
        id: "woodstove_sg50",
        label: "Holzofen SG50 mit isolierten Abgasrohren",
        description: "Holzofen 7,2kW für effiziente Raumheizung",
        price: 1890,
        defaultFor: ["offgrid", "ongrid"],
      },
      {
        id: "woodstove_mini",
        label: "Holzofen Mini 4kW mit Abgasrohren",
        price: 1250,
      },
      {
        id: "woodstove_midi",
        label: "Holzofen Midi 6kW mit Abgasrohren",
        price: 1580,
      },
      {
        id: "pellet_stove",
        label: "Pelletofen",
        price: 2900,
      },
      {
        id: "ac_gree",
        label: "Klimaanlage – GREE 9000BTU",
        description: "Inverter-Klimaanlage mit WIFI-Steuerung",
        price: 1450,
      },
      {
        id: "infrared_panel",
        label: "Infrarot-Heizpanel – Elektrisch",
        description: "1 Stück",
        price: 390,
      },
      {
        id: "convector_tesy",
        label: "Heizkonvektor – TESY WIFI (2000W)",
        description: "Elektrischer WIFI-Heizkonvektor 2000W – TESY",
        price: 290,
      },
      {
        id: "floor_heating",
        label: "Elektrische Fußbodenheizung",
        price: 850,
      },
    ],
  },

  // ── TRANSPORT ─────────────────────────────────────────────────────────────
  {
    id: "transport",
    label: "Transport",
    icon: "🚛",
    items: [
      {
        id: "transport_km",
        label: "Transport von unserer Werkstatt",
        description: "2,00 € / km (einfache Strecke) + MwSt. Bitte Entfernung in km eingeben.",
        price: 2, // per km
        unit: "km",
        note: "Entfernung von unserer Werkstatt zu Ihrem Standort (einfache Strecke)",
      },
    ],
  },
];

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
// ZAHLUNGSBEDINGUNGEN
// ─────────────────────────────────────────────────────────────────────────────
export const PAYMENT_TERMS = [
  "50 % bei Vertragsunterzeichnung",
  "50 % wenn das Haus lieferbereit ist",
];

export const DELIVERY_TERM = "Lieferzeit: 60 Tage";
export const OFFER_VALIDITY = "Dieses Preisangebot ist 7 Tage gültig. Alle Beträge in EURO.";

export const COMPANY_INFO = {
  name: "Rautenberg Professional Solutions GmbH",
  address: "Marie-Curie-Straße 1, 63457 Hanau",
  phone: "+49 151 68957104",
  email: "info@tinyhouse.investments",
  vatId: "USt-IdNr.: DE318742905",
  bank: "Bank: tbd | IBAN: tbd | SWIFT: tbd",
};
