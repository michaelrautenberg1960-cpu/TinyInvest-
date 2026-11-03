import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/tiny-house-vs-eigentumswohnung";
const STAND = "2026-11-03";
const IMG = "/images/outside/Tiny House vs. Eigentumswohnung als Kapitalanlage Rendite, Steuer & Aufwand im Vergleich 2026.webp";

// Tiny House: gleiche Annahmen wie im Rendite-Rechner (60 % Belegung, 120 €/Nacht, Pacht vor Aufteilung, 40 % Investor)
const PACHT = 2500;
const NAECHTE = Math.round(0.6 * 365);
const TH_UMSATZ = NAECHTE * 120;
const TH_AUSZAHLUNG = (TH_UMSATZ - PACHT) * 0.4;
const TH_RENDITE = TH_AUSZAHLUNG / B.kaufpreis;
const TH_GEBUNDEN = B.kaufpreis - B.steuereffektGesamt;

// Eigentumswohnung: typisches Vergleichsobjekt
const ETW_PREIS = 300_000;
const ETW_NEBENKOSTEN = ETW_PREIS * 0.1;
const ETW_MIETE = ETW_PREIS * 0.04;
const ETW_GEBAEUDE = ETW_PREIS * 0.75;
const ETW_AFA = ETW_GEBAEUDE * 0.02;

// Steuereffekt und gebundenes Kapital wie im übrigen Text auf 100 € runden (~26.700 €)
const rund = (n: number) => eur(Math.round(n / 100) * 100);

export const metadata = {
  title: "Tiny House vs. Eigentumswohnung: Kapitalanlage im Vergleich | TinyInvest",
  description:
    `Tiny House oder Eigentumswohnung als Kapitalanlage? Kaufpreis, Nebenkosten, Rendite, Abschreibung, Aufwand und Risiken im ehrlichen Vergleich – mit Rechenbeispiel 2026.`,
  keywords:
    "tiny house vs eigentumswohnung, tiny house oder eigentumswohnung, eigentumswohnung als kapitalanlage alternative, tiny house kapitalanlage vergleich, etw vs tiny house rendite",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House vs. Eigentumswohnung als Kapitalanlage",
    description: "Kaufpreis, Rendite, Abschreibung, Aufwand und Risiken im ehrlichen Vergleich – mit Rechenbeispiel.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Ist ein Tiny House eine bessere Kapitalanlage als eine Eigentumswohnung?",
    answer: `Das hängt vom Ziel ab. Ein Tiny House braucht deutlich weniger Kapital (ab ${eur(B.kaufpreis)} netto, ohne Kaufnebenkosten) und bringt im Beispiel eine höhere laufende Auszahlung (ca. ${(TH_RENDITE * 100).toFixed(1).replace(".", ",")} % vor Steuern). Dafür verliert es über die Jahre an Wert und die Einnahmen schwanken mit der Belegung. Eine Eigentumswohnung bringt meist weniger laufende Rendite, hat aber einen Grundstücksanteil, der langfristig an Wert gewinnen kann.`,
  },
  {
    question: "Wie unterscheidet sich die Abschreibung?",
    answer: `Bei einer vermieteten Bestandswohnung wird in der Regel nur der Gebäudeanteil mit 2 % pro Jahr abgeschrieben (bei Fertigstellung ab 2023: 3 %). Ein Tiny House auf Trailer kann als bewegliches Wirtschaftsgut gelten. In einem Betrieb sind dann IAB, Sonder-AfA und degressive AfA möglich – im Beispiel rund ${rund(B.steuereffektGesamt)} Steuereffekt in Vorjahr und Kaufjahr bei ${pct(B.steuersatz)} Grenzsteuersatz, überwiegend als Steuerstundung.`,
  },
  {
    question: "Welche Kaufnebenkosten fallen an?",
    answer: "Bei einer Eigentumswohnung fallen Grunderwerbsteuer (je nach Bundesland 3,5–6,5 %), Notar- und Grundbuchkosten (ca. 2 %) und oft eine Maklerprovision an – zusammen häufig 10 % oder mehr. Beim Tiny House ohne Grundstück entfallen Grunderwerbsteuer, Notar und Grundbuch. Transport und Aufstellung sind im TinyInvest-Komplettpreis enthalten.",
  },
  {
    question: "Was ist beim Verkauf steuerlich anders?",
    answer: "Eine privat gehaltene Eigentumswohnung kann nach zehn Jahren steuerfrei verkauft werden (§ 23 EStG). Ein Tiny House im Betriebsvermögen ist dagegen beim Verkauf betrieblich zu versteuern: Der Erlös über dem Restbuchwert erhöht den Gewinn. Das gehört zur Gesamtrechnung dazu.",
  },
  {
    question: "Kann ich beides kombinieren?",
    answer: "Ja. Viele Anleger nutzen ein oder mehrere Tiny Houses als Ergänzung zu Immobilien, ETFs oder Anleihen. Durch den niedrigen Einstiegspreis lässt sich das Kapital auf mehrere Häuser und Standorte verteilen.",
  },
];

export default function TinyHouseVsEtwPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House vs. Eigentumswohnung: Kapitalanlage im Vergleich",
    description: "Kaufpreis, Nebenkosten, Rendite, Abschreibung, Aufwand und Risiken von Tiny House und Eigentumswohnung im Vergleich, mit Rechenbeispiel.",
    url: URL,
    datePublished: STAND,
    dateModified: STAND,
    inLanguage: "de-DE",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: { "@type": "Organization", name: "TinyInvest", logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" } },
    image: { "@type": "ImageObject", url: `https://tinyhouse.investments${IMG}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Tiny House vs. Eigentumswohnung", item: URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const jsonLd = [articleSchema, breadcrumbSchema, faqSchema];

  const vergleich: Array<[string, string, string]> = [
    ["Kaufpreis", `z. B. ${eur(ETW_PREIS)}`, `${eur(B.kaufpreis)} netto (On-Grid)`],
    ["Kaufnebenkosten", `ca. ${eur(ETW_NEBENKOSTEN)} (~10 %)`, "keine Grunderwerbsteuer, kein Notar"],
    ["Laufender Ertrag p.a.", `ca. ${eur(ETW_MIETE)} Kaltmiete (~4 % brutto)`, `ca. ${eur(TH_AUSZAHLUNG)} Auszahlung (~${(TH_RENDITE * 100).toFixed(1).replace(".", ",")} %)`],
    ["Abschreibung", `2 % auf den Gebäudeanteil (~${eur(ETW_AFA)} p.a.)`, "IAB, Sonder-AfA und degressive AfA (bei Betrieb)"],
    ["Steuereffekt (42 %)", `ca. ${eur(ETW_AFA * 0.42)} pro Jahr`, `ca. ${rund(B.steuereffektGesamt)} in Vorjahr + Kaufjahr`],
    ["Wertentwicklung", "Grundstücksanteil kann an Wert gewinnen", "Wertverlust über die Nutzungsdauer"],
    ["Verkauf", "nach 10 Jahren privat steuerfrei", "betrieblich zu versteuern"],
    ["Aufwand", "Mieter, Eigentümerversammlung, Instandhaltung", "Betrieb über lokale Partner"],
    ["Hauptrisiko", "Leerstand, Sanierung, Zinsen", "Belegung, Standort, Betreiber"],
    ["Flexibilität", "ortsgebunden", "Haus kann versetzt werden"],
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      {/* Plain <script> statt next/script: JSON-LD muss im Server-HTML stehen, KI-Crawler führen kein JS aus. */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House vs. Eigentumswohnung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Kapitalanlage 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Tiny House vs. Eigentumswohnung: Welche Kapitalanlage passt zu dir?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime={STAND}>3. November 2026</time>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">Kurz gesagt</p>
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li>• <strong>Tiny House:</strong> wenig Kapital, keine Kaufnebenkosten, hohe laufende Auszahlung und ein früher Steuereffekt – aber Wertverlust und schwankende Belegung.</li>
              <li>• <strong>Eigentumswohnung:</strong> viel Kapital und hohe Nebenkosten, niedrigere laufende Rendite – dafür Grundstückswert und steuerfreier Verkauf nach zehn Jahren.</li>
              <li>• Für viele Anleger ist das Tiny House keine Entweder-oder-Frage, sondern eine Ergänzung.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={IMG} alt="Tiny House vs. Eigentumswohnung als Kapitalanlage im Vergleich" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Vergleich auf einen Blick</h2>
            <p className="mb-5">
              Als Vergleichsobjekt dient eine vermietete Bestandswohnung für {eur(ETW_PREIS)} mit rund 4 % Bruttomietrendite.
              Das Tiny House ist ein Escape 660 On-Grid für {eur(B.kaufpreis)} netto, vermietet als Ferienunterkunft bei 60 %
              Belegung und 120 € pro Nacht. Alle Werte sind Beispielrechnungen, keine Prognosen.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Eigentumswohnung</th>
                    <th className="text-left p-3 font-black text-green-700 text-[11px] uppercase bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vergleich.map(([k, etw, th]) => (
                    <tr key={k}>
                      <td className="p-3 font-medium text-gray-800">{k}</td>
                      <td className="p-3 text-gray-600">{etw}</td>
                      <td className="p-3 text-gray-900 bg-green-50/40">{th}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Kapitalbedarf und Kaufnebenkosten</h2>
            <p className="mb-4">
              Der größte Unterschied liegt beim Einstieg. Für die Beispielwohnung werden inklusive Grunderwerbsteuer, Notar,
              Grundbuch und Makler schnell {eur(ETW_PREIS + ETW_NEBENKOSTEN)} fällig. Die Nebenkosten von rund {eur(ETW_NEBENKOSTEN)} sind
              sofort weg – sie steigern weder den Wert noch die Miete.
            </p>
            <p>
              Beim Tiny House gibt es kein Grundstück und damit keine Grunderwerbsteuer, keinen Notar und keinen Grundbucheintrag.
              Der Komplettpreis von {eur(B.kaufpreis)} netto enthält Ausstattung, Transport zum Standort und Aufstellung. Mit dem
              Kapital für eine einzige Wohnung ließen sich also rund vier Tiny Houses an verschiedenen Standorten kaufen – das
              verteilt das Risiko, statt alles auf eine Lage zu setzen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rendite: laufende Einnahmen im Vergleich</h2>
            <p className="mb-4">
              Die Beispielwohnung bringt rund {eur(ETW_MIETE)} Kaltmiete im Jahr. Davon gehen noch nicht umlagefähige Kosten,
              Instandhaltungsrücklage und gegebenenfalls Zinsen ab; netto bleiben in vielen Städten 2–3 % auf den Kaufpreis.
            </p>
            <p className="mb-4">
              Beim Tiny House ergibt sich die Auszahlung aus der Ferienvermietung: {NAECHTE} Nächte × 120 € = {eur(TH_UMSATZ)} Umsatz.
              Davon wird zuerst die Stellplatzpacht ({eur(PACHT)} pro Jahr) abgezogen, vom Rest erhält der Eigentümer 40 % –
              rund {eur(TH_AUSZAHLUNG)} im Jahr bzw. {eur(TH_AUSZAHLUNG / 12)} im Monat, etwa {(TH_RENDITE * 100).toFixed(1).replace(".", ",")} % auf den
              Kaufpreis vor Steuern und Versicherung.
            </p>
            <p>
              Wichtig für den fairen Vergleich: Die Tiny-House-Einnahmen hängen direkt an der Belegung und schwanken stärker als
              eine Wohnungsmiete. Bei 45 % Belegung sinkt die Auszahlung im Beispiel deutlich. Eigene Annahmen kannst du im{" "}
              <Link href="/rechner/rendite" className="text-green-700 font-semibold underline underline-offset-2">Rendite-Rechner</Link> prüfen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Abschreibung und Steuern</h2>
            <p className="mb-4">
              Bei der vermieteten Wohnung wird nur der Gebäudeanteil abgeschrieben, bei Bestandsobjekten in der Regel mit 2 % pro
              Jahr (bei Fertigstellung ab 2023 mit 3 %; für neu gebaute Wohnungen gibt es befristet auch eine degressive AfA). Bei
              75 % Gebäudeanteil sind das im Beispiel rund {eur(ETW_AFA)} Abschreibung pro Jahr, also bei {pct(B.steuersatz)} Grenzsteuersatz
              rund {eur(ETW_AFA * 0.42)} weniger Steuer jährlich.
            </p>
            <p className="mb-4">
              Ein Tiny House auf einem zugelassenen Trailer kann als bewegliches Wirtschaftsgut gelten. Gehört es zu einem Betrieb
              mit Gewinneinkünften, sind Investitionsabzugsbetrag (IAB), Sonder-AfA und degressive AfA möglich. Im Beispiel
              ({eur(B.kaufpreis)}, {pct(B.steuersatz)}): IAB {eur(B.iab)} im Vorjahr, im Kaufjahr Sonder-AfA {eur(B.sonderAfa)} und degressive
              AfA {eur(B.degressiveAfa)} – zusammen rund {rund(B.steuereffektGesamt)} Steuereffekt. Das gebundene Kapital sinkt damit
              rechnerisch auf rund {rund(TH_GEBUNDEN)}.
            </p>
            <p className="mb-4">
              Zur Ehrlichkeit gehört: Der Tiny-House-Effekt ist überwiegend eine <strong>Steuerstundung</strong>. Was früh
              abgeschrieben wird, fehlt in den Folgejahren. Und beim späteren Verkauf ist der Erlös betrieblich zu versteuern,
              während eine privat gehaltene Wohnung nach zehn Jahren steuerfrei verkauft werden kann.
            </p>
            <p className="text-gray-500 text-sm">
              Allgemeine Information, keine Steuerberatung. Ob IAB und Sonder-AfA in deinem Fall möglich sind, klärt dein
              Steuerberater. Details: <Link href="/wissen/iab-tiny-house" className="text-green-700 underline underline-offset-2">IAB Tiny House</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Aufwand und Verwaltung</h2>
            <p>
              Eine vermietete Wohnung bringt Mietersuche, Nebenkostenabrechnung, Eigentümerversammlungen und Instandhaltung mit
              sich – entweder selbst oder über eine Hausverwaltung. Beim Tiny House übernimmt ein lokaler Partner Buchungen,
              Reinigung und Gästebetreuung; dafür erhält er einen Anteil der Einnahmen. Der eigene Zeitaufwand ist gering, du bist
              aber von der Qualität des Betreibers abhängig.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Risiken beider Anlagen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Eigentumswohnung</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Leerstand und Mietausfall</li>
                  <li>• Hohe Sonderumlagen und Sanierungskosten</li>
                  <li>• Zinsänderungsrisiko bei Finanzierung</li>
                  <li>• Klumpenrisiko: eine Lage, ein Objekt</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Tiny House</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Schwankende Belegung</li>
                  <li>• Abhängigkeit von Standort und Betreiber</li>
                  <li>• Wertverlust über die Nutzungsdauer</li>
                  <li>• Änderungen im Steuerrecht</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Fazit: Für wen passt was?</h2>
            <p className="mb-4">
              Die <strong>Eigentumswohnung</strong> passt zu Anlegern, die langfristig Vermögen in Grund und Boden aufbauen wollen,
              mit Fremdkapital arbeiten und auf einen steuerfreien Verkauf nach zehn Jahren setzen.
            </p>
            <p className="mb-4">
              Das <strong>Tiny House</strong> passt zu Selbstständigen, Freiberuflern und Unternehmern, die mit weniger Kapital
              einsteigen, laufende Einnahmen erzielen und den §7g-Effekt nutzen wollen – und die akzeptieren, dass das Haus an Wert
              verliert und die Einnahmen von der Belegung abhängen.
            </p>
            <p>
              Den vollständigen Investment-Guide mit 5-Jahres-Rechnung findest du unter{" "}
              <Link href="/tiny-house-als-kapitalanlage" className="text-green-700 font-semibold underline underline-offset-2">Tiny House als Kapitalanlage</Link>.
            </p>
          </div>

          <div className="bg-gray-950 rounded-3xl p-8 text-center">
            <p className="text-white font-black text-xl mb-2">Selbst durchrechnen</p>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Erstelle ein Angebot im Konfigurator oder fordere Produktunterlagen und das allgemeine §7g-Factsheet an.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/konfigurator" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all">
                Zum Konfigurator →
              </Link>
              <ModalButton className="border border-gray-700 text-gray-200 hover:border-green-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                Produktunterlagen anfordern
              </ModalButton>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Tiny House vs. Eigentumswohnung</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqItems.map((f) => (
                <details key={f.question} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
                    {f.question}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
