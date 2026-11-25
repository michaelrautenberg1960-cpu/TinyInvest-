import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/tiny-house-vs-festgeld";
const STAND = "2026-11-25";
const IMG = "/images/outside/tiny-house-escape-sachwert.webp";

// Tiny House: gleiche Annahmen wie im Rendite-Rechner (60 % Belegung, 120 €/Nacht, Pacht vor Aufteilung, 40 % Investor)
const PACHT = 2500;
const VERSICHERUNG = 650;
const NAECHTE = Math.round(0.6 * 365);
const TH_UMSATZ = NAECHTE * 120;
const TH_AUSZAHLUNG = (TH_UMSATZ - PACHT) * 0.4;
const TH_RENDITE = TH_AUSZAHLUNG / B.kaufpreis;
const TH_NACH_VERS = TH_AUSZAHLUNG - VERSICHERUNG;

// Festgeld: Beispielannahme, kein Marktzins mit Stichtag
const FG_ZINS = 0.025;
const FG_ERTRAG = B.kaufpreis * FG_ZINS;

const rund = (n: number) => eur(Math.round(n / 100) * 100);
const prozent = (n: number) => (n * 100).toFixed(1).replace(".", ",") + " %";

export const metadata = {
  title: "Tiny House vs. Festgeld 2026: Die Alternative im Vergleich | TinyInvest",
  description:
    "Festgeld oder Tiny House? Sicherheit, Ertrag, Inflation, Steuern und Risiken im ehrlichen Vergleich – mit Rechenbeispiel für 74.700 € Anlagebetrag.",
  keywords:
    "festgeld alternative, tagesgeld alternative, tiny house vs festgeld, sachwert statt festgeld, geld anlegen alternative festgeld, festgeld alternative 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House vs. Festgeld: Die Alternative im Vergleich",
    description: "Sicherheit, Ertrag, Inflation, Steuern und Risiken im ehrlichen Vergleich – mit Rechenbeispiel.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Ist ein Tiny House eine sichere Alternative zu Festgeld?",
    answer: "Nein, nicht im Sinne von „gleich sicher“. Festgeld ist bis 100.000 € pro Bank und Kunde durch die gesetzliche Einlagensicherung geschützt und der Zins steht fest. Ein Tiny House ist ein Sachwert mit unternehmerischem Risiko: Die Einnahmen schwanken mit der Belegung und das Haus verliert über die Jahre an Wert. Dafür ist der mögliche laufende Ertrag deutlich höher.",
  },
  {
    question: "Wie viel bringt ein Tiny House im Vergleich zu Festgeld?",
    answer: `Im Beispiel bringen ${eur(B.kaufpreis)} als Festgeld bei angenommenen ${prozent(FG_ZINS)} rund ${eur(FG_ERTRAG)} Zinsen im Jahr. Ein Tiny House zum gleichen Preis bringt bei 60 % Belegung und 120 € pro Nacht rund ${eur(TH_AUSZAHLUNG)} Auszahlung (ca. ${prozent(TH_RENDITE)} vor Steuern). Beim Tiny House muss man davon aber noch Versicherung und den Wertverlust des Hauses abziehen.`,
  },
  {
    question: "Wie werden die Erträge besteuert?",
    answer: "Festgeldzinsen unterliegen der Abgeltungsteuer von 25 % zzgl. Solidaritätszuschlag und ggf. Kirchensteuer; der Sparer-Pauschbetrag von 1.000 € (Zusammenveranlagung 2.000 €) bleibt steuerfrei. Einnahmen aus einem Tiny House werden mit dem persönlichen Steuersatz versteuert – je nach Gestaltung als Vermietungseinkünfte oder als gewerbliche Einkünfte.",
  },
  {
    question: "Kann ich als Rentner oder Angestellter den IAB nutzen?",
    answer: "Den Investitionsabzugsbetrag (IAB) gibt es nur für Betriebe mit Gewinneinkünften, also für Selbstständige, Freiberufler und Unternehmer. Wer nur Rente oder Gehalt bezieht und das Tiny House privat vermietet, kann den IAB nicht nutzen. Ob ein Betrieb vorliegt, klärt dein Steuerberater.",
  },
  {
    question: "Wie schnell komme ich an mein Geld?",
    answer: "Festgeld ist bis zum Ende der Laufzeit gebunden, danach sofort verfügbar. Ein Tiny House ist kein liquides Anlageprodukt: Wer aussteigen will, muss das Haus verkaufen. Das kann dauern, und der Preis hängt von Zustand und Nachfrage ab.",
  },
];

export default function TinyHouseVsFestgeldPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House vs. Festgeld: Die Alternative im Vergleich",
    description: "Sicherheit, Ertrag, Inflation, Steuern und Risiken von Festgeld und Tiny House im Vergleich, mit Rechenbeispiel.",
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
      { "@type": "ListItem", position: 3, name: "Tiny House vs. Festgeld", item: URL },
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
    ["Anlagebetrag", eur(B.kaufpreis), `${eur(B.kaufpreis)} netto (On-Grid)`],
    ["Laufender Ertrag p.a.", `ca. ${eur(FG_ERTRAG)} (Annahme ${prozent(FG_ZINS)})`, `ca. ${eur(TH_AUSZAHLUNG)} (~${prozent(TH_RENDITE)} vor Steuern)`],
    ["Ertrag planbar?", "ja, Zins fest für die Laufzeit", "nein, abhängig von der Belegung"],
    ["Absicherung", "Einlagensicherung bis 100.000 €", "Eigentum am Haus, keine Einlagensicherung"],
    ["Wert am Ende", "Nominalbetrag kommt zurück", "Haus verliert über die Nutzungsdauer an Wert"],
    ["Inflation", "frisst Teil des Zinses", "Übernachtungspreise können mitsteigen"],
    ["Steuer auf Ertrag", "Abgeltungsteuer 25 % (+ Soli)", "persönlicher Steuersatz"],
    ["IAB / Sonder-AfA", "nicht möglich", "möglich, wenn das Haus zu einem Betrieb gehört"],
    ["Verfügbarkeit", "nach Laufzeitende", "nur durch Verkauf des Hauses"],
    ["Aufwand", "keiner", "gering, Betrieb über lokale Partner"],
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
            <span className="text-green-700 font-semibold">Tiny House vs. Festgeld</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Geldanlage 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Tiny House vs. Festgeld: Lohnt sich der Sachwert als Alternative?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime={STAND}>25. November 2026</time>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">Kurz gesagt</p>
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li>• <strong>Festgeld:</strong> fester Zins, Einlagensicherung, kein Aufwand – aber nach Steuern und Inflation bleibt oft wenig übrig.</li>
              <li>• <strong>Tiny House:</strong> deutlich höherer möglicher Ertrag aus Ferienvermietung – aber schwankende Einnahmen, Wertverlust und kein schneller Ausstieg.</li>
              <li>• Das Tiny House ersetzt nicht die Notreserve. Es kann einen Teil des Vermögens ergänzen, der langfristig angelegt werden soll.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={IMG} alt="Tiny House als Sachwert-Alternative zu Festgeld" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Vergleich auf einen Blick</h2>
            <p className="mb-5">
              Verglichen wird derselbe Betrag von {eur(B.kaufpreis)}: einmal als Festgeld mit einem angenommenen Zins von{" "}
              {prozent(FG_ZINS)} p.a., einmal als Tiny House Escape 660 On-Grid, vermietet als Ferienunterkunft bei 60 % Belegung
              und 120 € pro Nacht. Der Festgeldzins ist eine gerundete Beispielannahme, kein aktueller Marktzins. Alle Werte sind
              Beispielrechnungen, keine Prognosen.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Festgeld</th>
                    <th className="text-left p-3 font-black text-green-700 text-[11px] uppercase bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vergleich.map(([k, fg, th]) => (
                    <tr key={k}>
                      <td className="p-3 font-medium text-gray-800">{k}</td>
                      <td className="p-3 text-gray-600">{fg}</td>
                      <td className="p-3 text-gray-900 bg-green-50/40">{th}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Sicherheit: Wo Festgeld klar vorne liegt</h2>
            <p className="mb-4">
              Festgeld ist eine der sichersten Anlageformen. Der Zins steht für die gesamte Laufzeit fest, und Einlagen sind in der
              EU bis 100.000 € pro Bank und Kunde gesetzlich abgesichert. Am Ende der Laufzeit kommt der volle Anlagebetrag zurück.
            </p>
            <p>
              Ein Tiny House bietet diese Sicherheit nicht. Du bist Eigentümer eines Sachwerts, dessen Ertrag von Belegung,
              Standort und Betreiber abhängt. Das Haus nutzt sich ab und ist nach einigen Jahren weniger wert als beim Kauf. Wer
              jeden Euro planbar zurückhaben muss, ist mit Festgeld besser bedient.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Ertrag: Was nach Zinsen und Vermietung übrig bleibt</h2>
            <p className="mb-4">
              Beim Festgeld ist die Rechnung einfach: {eur(B.kaufpreis)} × {prozent(FG_ZINS)} = rund {eur(FG_ERTRAG)} Zinsen im Jahr,
              vor Abgeltungsteuer.
            </p>
            <p className="mb-4">
              Beim Tiny House ergibt sich die Auszahlung aus der Ferienvermietung: {NAECHTE} Nächte × 120 € = {eur(TH_UMSATZ)} Umsatz.
              Davon wird zuerst die Stellplatzpacht ({eur(PACHT)} pro Jahr) abgezogen, vom Rest erhält der Eigentümer 40 % – rund{" "}
              {eur(TH_AUSZAHLUNG)} im Jahr bzw. {eur(TH_AUSZAHLUNG / 12)} im Monat. Nach rund {eur(VERSICHERUNG)} Versicherung bleiben
              etwa {eur(TH_NACH_VERS)} vor Steuern.
            </p>
            <p>
              Fair verglichen werden muss das mit dem Wertverlust: Das Festgeld ist am Ende noch {eur(B.kaufpreis)} wert, das Haus
              nicht. Ein Teil der höheren Auszahlung ist also ein Rückfluss des eingesetzten Kapitals. Außerdem schwankt die Belegung –
              bei weniger Buchungen sinkt die Auszahlung spürbar. Eigene Annahmen kannst du im{" "}
              <Link href="/rechner/rendite" className="text-green-700 font-semibold underline underline-offset-2">Rendite-Rechner</Link> prüfen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Inflation: Der unsichtbare Kostenfaktor beim Festgeld</h2>
            <p>
              Liegt die Inflation in der Nähe des Festgeldzinses, verliert das Geld nach Steuern real an Kaufkraft, obwohl der
              Kontostand steigt. Bei einer Ferienvermietung können Übernachtungspreise dagegen mit dem allgemeinen Preisniveau
              angepasst werden. Eine Garantie ist das nicht: Steigen die Kosten für Reinigung, Energie oder Pacht stärker als die
              Preise, die Gäste zu zahlen bereit sind, schrumpft der Ertrag.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Steuern: Abgeltungsteuer vs. persönlicher Steuersatz</h2>
            <p className="mb-4">
              Festgeldzinsen werden pauschal mit 25 % Abgeltungsteuer zzgl. Solidaritätszuschlag und ggf. Kirchensteuer besteuert.
              Bis zum Sparer-Pauschbetrag von 1.000 € (bei Zusammenveranlagung 2.000 €) bleiben Kapitalerträge steuerfrei.
            </p>
            <p className="mb-4">
              Einnahmen aus einem Tiny House werden mit dem persönlichen Steuersatz versteuert. Gehört das Haus zu einem Betrieb
              mit Gewinneinkünften – etwa bei Selbstständigen, Freiberuflern oder Unternehmern –, sind zusätzlich
              Investitionsabzugsbetrag (IAB), Sonder-AfA und degressive AfA möglich. Im Beispiel ({eur(B.kaufpreis)},{" "}
              {pct(B.steuersatz)} Grenzsteuersatz) ergibt das rund {rund(B.steuereffektGesamt)} Steuereffekt in Vorjahr und
              Kaufjahr, überwiegend als <strong>Steuerstundung</strong>: Was früh abgeschrieben wird, fehlt in den Folgejahren.
            </p>
            <p className="mb-4">
              Wichtig für Rentner und Angestellte: Wer keinen Betrieb hat und das Haus privat vermietet, kann den IAB nicht nutzen.
              Dann bleibt die normale Abschreibung über die Nutzungsdauer.
            </p>
            <p className="text-gray-500 text-sm">
              Allgemeine Information, keine Steuerberatung. Ob IAB und Sonder-AfA in deinem Fall möglich sind, klärt dein
              Steuerberater. Details: <Link href="/wissen/iab-tiny-house" className="text-green-700 underline underline-offset-2">IAB Tiny House</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Risiken beider Anlagen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Festgeld</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Kaufkraftverlust durch Inflation</li>
                  <li>• Niedrigere Zinsen bei der Wiederanlage</li>
                  <li>• Geld bis Laufzeitende gebunden</li>
                  <li>• Beträge über 100.000 € pro Bank nicht gesetzlich gesichert</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Tiny House</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Schwankende Belegung</li>
                  <li>• Abhängigkeit von Standort und Betreiber</li>
                  <li>• Wertverlust über die Nutzungsdauer</li>
                  <li>• Kein schneller Ausstieg, Verkauf nötig</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Fazit: Für wen passt was?</h2>
            <p className="mb-4">
              <strong>Festgeld</strong> passt für die Notreserve und für Geld, das in absehbarer Zeit gebraucht wird oder
              garantiert vollständig zurückkommen muss.
            </p>
            <p className="mb-4">
              Ein <strong>Tiny House</strong> passt zu Anlegern, die einen Teil ihres Vermögens langfristig in einen Sachwert
              stecken wollen, laufende Einnahmen anstreben und schwankende Erträge sowie den Wertverlust des Hauses akzeptieren.
              Für Selbstständige mit Betrieb kommt der §7g-Effekt hinzu. Mehr für ältere Anleger:{" "}
              <Link href="/wissen/senioren" className="text-green-700 font-semibold underline underline-offset-2">Tiny House für Senioren</Link>.
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
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Tiny House vs. Festgeld</h2>
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
