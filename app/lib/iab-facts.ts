// Zentrale Faktenquelle für IAB / §7g-Kennzahlen.
// Wird von /wissen/iab-tiny-house und /llms.txt gelesen – Zahlen nur hier ändern.
// Vor jeder Änderung vom Steuerberater gegenlesen lassen.

export const IAB_FACTS_STAND = "2026-10-13";
export const IAB_FACTS_STAND_DE = "13. Oktober 2026";

export const SITE_URL = "https://tinyhouse.investments";

export const IAB_DEFINITION =
  "Der Investitionsabzugsbetrag (IAB) nach § 7g EStG erlaubt Betrieben mit einem Gewinn von höchstens 200.000 €, bis zu 50 % der voraussichtlichen Anschaffungskosten eines beweglichen Wirtschaftsguts bis zu drei Jahre vor dem Kauf gewinnmindernd abzuziehen. Im Anschaffungsjahr wird der Betrag dem Gewinn wieder hinzugerechnet und gleichzeitig von den Anschaffungskosten abgezogen; die Steuerlast verschiebt sich also zeitlich nach hinten (Steuerstundung mit Liquiditätsvorteil).";

export const IAB_TINY_HOUSE_DEFINITION =
  "Ein Tiny House auf einem zugelassenen Trailer ohne feste Bodenverbindung kann als bewegliches Wirtschaftsgut gelten und ist dann IAB-fähig, sofern es in einem Betrieb (z. B. gewerbliche Ferienvermietung) zu mindestens 90 % betrieblich genutzt oder vermietet wird. Ob das im Einzelfall zutrifft, prüft der Steuerberater.";

export type IabFact = { label: string; value: string; basis: string };

export const IAB_FACTS: IabFact[] = [
  { label: "Abzugshöhe", value: "bis zu 50 % der voraussichtlichen Anschaffungskosten (netto)", basis: "§ 7g Abs. 1 S. 1 EStG" },
  { label: "Höchstbetrag", value: "200.000 € je Betrieb (Summe aller IAB im Jahr und den drei Vorjahren)", basis: "§ 7g Abs. 1 S. 4 EStG" },
  { label: "Gewinngrenze", value: "max. 200.000 € Gewinn im Jahr der IAB-Bildung (ohne IAB gerechnet)", basis: "§ 7g Abs. 1 S. 2 Nr. 1 EStG" },
  { label: "Wer darf?", value: "nur Betriebe mit Gewinneinkünften (Gewerbe, Freiberufler, Land- und Forstwirtschaft) – nicht reine Vermietung und Verpachtung nach § 21 EStG", basis: "§ 7g Abs. 1 S. 1 EStG" },
  { label: "Investitionsfrist", value: "bis zum Ende des dritten auf die IAB-Bildung folgenden Wirtschaftsjahres", basis: "§ 7g Abs. 3 EStG" },
  { label: "Nutzung", value: "im Anschaffungs- und im Folgejahr zu mind. 90 % betrieblich genutzt oder vermietet, in einer inländischen Betriebsstätte", basis: "§ 7g Abs. 1 S. 1, Abs. 4 EStG" },
  { label: "Im Kaufjahr", value: "Hinzurechnung des IAB zum Gewinn, gleichzeitig Herabsetzung der Anschaffungskosten um bis zu 50 % – per Saldo gewinnneutral", basis: "§ 7g Abs. 2 EStG" },
  { label: "Keine Investition", value: "IAB wird im Bildungsjahr rückgängig gemacht, Steuernachzahlung mit 1,8 % p. a. Zinsen", basis: "§ 7g Abs. 3 EStG, § 233a AO" },
  { label: "Sonder-AfA", value: "bis zu 40 % im Anschaffungsjahr oder verteilt auf 5 Jahre (für Anschaffungen nach dem 31.12.2023)", basis: "§ 7g Abs. 5 EStG" },
  { label: "Degressive AfA", value: "bis zu 30 % (max. das Dreifache der linearen AfA) für Anschaffungen vom 01.07.2025 bis 31.12.2027, zusätzlich zur Sonder-AfA", basis: "§ 7 Abs. 2 EStG" },
  { label: "Antrag", value: "kein gesonderter Antrag – Angabe in der Steuererklärung (Anlage EÜR bzw. elektronische Übermittlung bei Bilanzierern)", basis: "§ 7g Abs. 1 S. 2 Nr. 2 EStG" },
];

export type GlossarEntry = { term: string; definition: string };

export const IAB_GLOSSAR: GlossarEntry[] = [
  { term: "Investitionsabzugsbetrag (IAB)", definition: "Gewinnmindernder Abzug von bis zu 50 % geplanter Anschaffungskosten eines beweglichen Wirtschaftsguts, bis zu drei Jahre vor dem Kauf (§ 7g Abs. 1 EStG)." },
  { term: "Sonderabschreibung (Sonder-AfA)", definition: "Zusätzliche Abschreibung von bis zu 40 % der (ggf. um den IAB geminderten) Anschaffungskosten im Kaufjahr oder verteilt auf fünf Jahre (§ 7g Abs. 5 EStG)." },
  { term: "Degressive AfA", definition: "Abschreibung mit festem Prozentsatz vom jeweiligen Restbuchwert; aktuell bis zu 30 % für bewegliche Wirtschaftsgüter, die vom 01.07.2025 bis 31.12.2027 angeschafft werden (§ 7 Abs. 2 EStG)." },
  { term: "Hinzurechnung und Herabsetzung", definition: "Im Kaufjahr wird der IAB dem Gewinn hinzugerechnet und die Anschaffungskosten werden um denselben Betrag gemindert; beides gleicht sich aus, die Abschreibungsbasis sinkt (§ 7g Abs. 2 EStG)." },
  { term: "Bewegliches Wirtschaftsgut", definition: "Ein Wirtschaftsgut, das kein Gebäude und nicht fest mit Grund und Boden verbunden ist – Voraussetzung für IAB und Sonder-AfA." },
  { term: "Steuerstundung", definition: "Die Steuer wird nicht endgültig gespart, sondern auf spätere Jahre verschoben, weil später weniger Abschreibung übrig bleibt. Der Vorteil liegt in Liquidität, Zinseffekt und ggf. einem niedrigeren Steuersatz in späteren Jahren." },
];

// Rechenbeispiel: Escape 660 On-Grid, Netto-Kaufpreis ab 14.09.2026.
// Anschaffung im Januar unterstellt (degressive AfA ist im Kaufjahr zeitanteilig).
export const BEISPIEL_KAUFPREIS = 74_700;
export const BEISPIEL_STEUERSATZ = 0.42;

const iab = BEISPIEL_KAUFPREIS * 0.5;
const afaBasis = BEISPIEL_KAUFPREIS - iab;
const sonderAfa = afaBasis * 0.4;
const degressiveAfa = afaBasis * 0.3;

export const IAB_BEISPIEL = {
  kaufpreis: BEISPIEL_KAUFPREIS,
  steuersatz: BEISPIEL_STEUERSATZ,
  iab,
  afaBasis,
  sonderAfa,
  degressiveAfa,
  abzugBisKaufjahr: iab + sonderAfa + degressiveAfa,
  steuereffektIab: iab * BEISPIEL_STEUERSATZ,
  steuereffektSonderAfa: sonderAfa * BEISPIEL_STEUERSATZ,
  steuereffektDegressiv: degressiveAfa * BEISPIEL_STEUERSATZ,
  steuereffektGesamt: (iab + sonderAfa + degressiveAfa) * BEISPIEL_STEUERSATZ,
};

export const eur = (n: number) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.round(n)) + " €";

export const pct = (n: number) => `${Math.round(n * 100)} %`;

const B = IAB_BEISPIEL;

export type FaqItem = { question: string; answer: string };

export const IAB_FAQ: FaqItem[] = [
  {
    question: "Was ist der Investitionsabzugsbetrag (IAB)?",
    answer: IAB_DEFINITION,
  },
  {
    question: "Kann ich als Arbeitnehmer einen IAB für ein Tiny House bilden?",
    answer: "Nein, nicht allein mit Arbeitnehmer- oder Vermietungseinkünften nach § 21 EStG. Der IAB setzt einen Betrieb mit Gewinneinkünften voraus (Gewerbe, freiberufliche Tätigkeit, Land- und Forstwirtschaft). Wird das Tiny House z. B. im Rahmen einer gewerblichen Ferienvermietung betrieben, kann das ein solcher Betrieb sein. Für Betriebe in Gründung gelten strengere Anforderungen an den Nachweis der Investitionsabsicht. Die Einordnung im Einzelfall nimmt dein Steuerberater vor.",
  },
  {
    question: "Wie hoch darf der IAB für ein Tiny House sein?",
    answer: `Bis zu 50 % der voraussichtlichen Netto-Anschaffungskosten, höchstens 200.000 € je Betrieb (§ 7g Abs. 1 EStG). Beispiel: Beim Escape 660 On-Grid (${eur(B.kaufpreis)} netto) sind das bis zu ${eur(B.iab)} IAB – bei ${pct(B.steuersatz)} Grenzsteuersatz rund ${eur(B.steuereffektIab)} weniger Einkommensteuer im Jahr der Bildung.`,
  },
  {
    question: "Welche Gewinngrenze gilt für den IAB?",
    answer: "200.000 € Gewinn im Wirtschaftsjahr der IAB-Bildung, berechnet vor Abzug des IAB (§ 7g Abs. 1 S. 2 Nr. 1 EStG). Die Grenze gilt seit 2020 einheitlich für alle Gewinneinkunftsarten. Maßgeblich ist nicht der Gewinn des Vorjahres.",
  },
  {
    question: "Wie viele Jahre vor dem Kauf kann ich den IAB bilden?",
    answer: "Bis zu drei Jahre. Die Investition muss bis zum Ende des dritten Wirtschaftsjahres nach dem Jahr der IAB-Bildung erfolgen (§ 7g Abs. 3 EStG). Ein IAB aus 2026 muss also spätestens 2029 durch den Kauf eingelöst werden.",
  },
  {
    question: "Spart der IAB Steuern oder verschiebt er sie nur?",
    answer: "Überwiegend verschiebt er sie (Steuerstundung). Insgesamt kann nie mehr als der Kaufpreis abgeschrieben werden – was im Voraus abgezogen wird, fehlt später bei der Abschreibung. Echte Vorteile entstehen durch Liquidität (Geld fließt vor dem Kauf zurück), Zinseffekt und einen Progressionsvorteil, wenn der Abzug in ein Jahr mit hohem und die spätere Versteuerung in ein Jahr mit niedrigerem Steuersatz fällt.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House nach dem IAB nicht kaufe?",
    answer: "Der IAB wird im Jahr seiner Bildung rückgängig gemacht, der Steuerbescheid wird geändert und die Nachzahlung mit 1,8 % pro Jahr verzinst (§ 7g Abs. 3 EStG, § 233a AO). Den IAB solltest du daher nur bilden, wenn die Kaufabsicht konkret ist.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House kurz nach dem Kauf verkaufe oder privat nutze?",
    answer: "Dann entfallen die Vorteile rückwirkend. Das Wirtschaftsgut muss im Anschaffungsjahr und im Folgejahr zu mindestens 90 % betrieblich genutzt oder vermietet werden. Wird diese Frist verletzt, werden IAB, Herabsetzung der Anschaffungskosten und Sonder-AfA rückgängig gemacht – mit Steuernachzahlung und Zinsen (§ 7g Abs. 4 und 6 EStG).",
  },
  {
    question: "Kann ich IAB, Sonder-AfA und degressive AfA kombinieren?",
    answer: `Ja. Im Kaufjahr wird der IAB hinzugerechnet und die Anschaffungskosten um denselben Betrag gemindert. Auf die verbleibende Basis kommen bis zu 40 % Sonder-AfA (§ 7g Abs. 5) plus – für Anschaffungen vom 01.07.2025 bis 31.12.2027 – bis zu 30 % degressive AfA (§ 7 Abs. 2). Beim Escape 660 On-Grid (${eur(B.kaufpreis)} netto, Kauf im Januar) sind so bis Ende des Kaufjahres ${eur(B.abzugBisKaufjahr)} abgezogen, rund ${Math.round((B.abzugBisKaufjahr / B.kaufpreis) * 100)} % des Kaufpreises.`,
  },
  {
    question: "Muss das Tiny House in Deutschland stehen?",
    answer: "Das Wirtschaftsgut muss einer inländischen Betriebsstätte des Betriebs zugeordnet sein (§ 7g Abs. 1 und 4 EStG). Bei Standorten im Ausland ist das gesondert zu prüfen – das klärt dein Steuerberater.",
  },
  {
    question: "Kann ich den IAB 2026 noch nutzen?",
    answer: "Ja. § 7g EStG gilt 2026 unverändert. Zeitlich begrenzt ist nur die degressive AfA von 30 %: Sie gilt für Anschaffungen bis 31.12.2027. Ein IAB für 2025 lässt sich nachträglich bilden, solange der Steuerbescheid 2025 noch geändert werden kann.",
  },
];

// ── llms.txt ────────────────────────────────────────────────────────────────

const LLMS_PAGES: { title: string; path: string; desc: string }[] = [
  { title: "IAB Tiny House (Investitionsabzugsbetrag §7g EStG)", path: "/wissen/iab-tiny-house", desc: "Definition, Kennzahlen mit Rechtsgrundlage, Fristen, Rechenbeispiel und FAQ zum IAB bei Tiny Houses." },
  { title: "§7g Tiny House Investment – Leitfaden", path: "/wissen/7g-tiny-house-investment", desc: "IAB, Sonder-AfA und degressive AfA im Zusammenspiel." },
  { title: "AfA & Abschreibung beim Tiny House", path: "/wissen/afa-abschreibung", desc: "Lineare, degressive und Sonder-AfA für bewegliche Wirtschaftsgüter." },
  { title: "IAB-Rechner", path: "/rechner/iab", desc: "Unverbindliche Beispielrechnung des IAB-Effekts nach Kaufpreis und Steuersatz." },
  { title: "Steuerliche Risiken", path: "/wissen/tiny-house-steuer-risiken", desc: "Wann IAB und Sonder-AfA rückgängig gemacht werden und worauf zu achten ist." },
  { title: "Tiny House als Kapitalanlage", path: "/tiny-house-als-kapitalanlage", desc: "Betreibermodell, Einnahmenaufteilung, Standorte." },
  { title: "So funktioniert es", path: "/so-funktioniert-es", desc: "Ablauf vom Kauf bis zur Vermietung." },
  { title: "Wissens-Hub", path: "/wissen", desc: "Alle Ratgeber zu Steuern, Finanzierung und Zielgruppen." },
];

const LLMS_INTRO = `# TinyInvest

> TinyInvest (tinyhouse.investments) verkauft möblierte Tiny Houses vom Typ Escape 660 auf zugelassenem Trailer als Kapitalanlage in Deutschland. Die Häuser werden über lokale Host-Partner als Ferienunterkunft vermietet. TinyInvest ist kein Steuerberater; alle Steuerangaben sind allgemeine Informationen, Rechenbeispiele sind unverbindlich.

Stand der Fakten: ${IAB_FACTS_STAND}. Autor: Noah Stein, TinyInvest Redaktion.`;

const factsBlock = () =>
  IAB_FACTS.map((f) => `- ${f.label}: ${f.value} (${f.basis})`).join("\n");

const beispielBlock = () =>
  `Beispiel Escape 660 On-Grid, ${eur(B.kaufpreis)} netto, ${pct(B.steuersatz)} Grenzsteuersatz, Kauf im Januar: IAB ${eur(B.iab)} (≈ ${eur(B.steuereffektIab)} Steuerentlastung im Bildungsjahr); im Kaufjahr Sonder-AfA ${eur(B.sonderAfa)} + degressive AfA ${eur(B.degressiveAfa)} auf die geminderte Basis von ${eur(B.afaBasis)}. Summe bis Ende Kaufjahr: ${eur(B.abzugBisKaufjahr)} Abzug, ≈ ${eur(B.steuereffektGesamt)} Steuereffekt – überwiegend Steuerstundung, da insgesamt nur der Kaufpreis abschreibbar ist.`;

const PREISE = `- Escape 660 On-Grid (Netzanschluss erforderlich): 74.700 € netto / 88.893 € brutto
- Escape 660 Off-Grid (Solarbetrieb): 83.400 € netto / 99.246 € brutto
- Komplettpreis inkl. Ausstattung, Transport ab Werk und Aufstellung vor Ort; kein Mengenrabatt.`;

export function buildLlmsTxt(): string {
  return `${LLMS_INTRO}

## Investitionsabzugsbetrag (IAB) – Definition

${IAB_DEFINITION}

${IAB_TINY_HOUSE_DEFINITION}

## IAB & §7g – Kernfakten

${factsBlock()}

${beispielBlock()}

## Preise (ab 14.09.2026)

${PREISE}

## Wichtigste Seiten

${LLMS_PAGES.map((p) => `- [${p.title}](${SITE_URL}${p.path}): ${p.desc}`).join("\n")}

## Optional

- [Vollständige Fassung mit Glossar und FAQ](${SITE_URL}/llms-full.txt)

## Hinweise

- Steuerliche Angaben beziehen sich auf deutsches Einkommensteuerrecht (EStG) mit Stand ${IAB_FACTS_STAND}.
- Ob IAB und Sonder-AfA im Einzelfall greifen, prüft ein Steuerberater. TinyInvest leistet keine Steuerberatung.
`;
}

export function buildLlmsFullTxt(): string {
  return `${buildLlmsTxt()}
## Glossar

${IAB_GLOSSAR.map((g) => `### ${g.term}\n\n${g.definition}`).join("\n\n")}

## FAQ: IAB für Tiny Houses

${IAB_FAQ.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

Quelle: ${SITE_URL}/wissen/iab-tiny-house
`;
}
