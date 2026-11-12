import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, IAB_TINY_HOUSE_DEFINITION, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/investitionsabzugsbetrag-immobilien";
const STAND = "2026-11-12";
const IMG = "/images/outside/tiny-house-stellplatz-standort.webp";
// Steuereffekt wie im übrigen Text auf 100 € runden (~26.700 €)
const STEUEREFFEKT = eur(Math.round(B.steuereffektGesamt / 100) * 100);
const ABZUG_PROZENT = Math.round((B.abzugBisKaufjahr / B.kaufpreis) * 100);

export const metadata = {
  title: "Investitionsabzugsbetrag für Immobilien? Was 2026 geht | TinyInvest",
  description:
    "Den IAB nach §7g gibt es nicht für Gebäude und Eigentumswohnungen. Welche Abschreibung bei Immobilien gilt und welche Sachwerte IAB-fähig sind – mit Rechenbeispiel.",
  keywords:
    "investitionsabzugsbetrag immobilien, iab immobilien, iab eigentumswohnung, investitionsabzugsbetrag gebäude, iab vermietung, investitionsabzugsbetrag ferienwohnung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Investitionsabzugsbetrag für Immobilien: Geht das?",
    description:
      "Warum Gebäude und Eigentumswohnungen nicht IAB-fähig sind, welche AfA stattdessen gilt und welche Sachwerte unter §7g fallen.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Kann ich den Investitionsabzugsbetrag für eine Immobilie nutzen?",
    answer:
      "Nein. Der IAB nach § 7g EStG gilt nur für bewegliche Wirtschaftsgüter des Anlagevermögens. Gebäude, Eigentumswohnungen und Grundstücke sind unbewegliche Wirtschaftsgüter. Für sie gibt es weder einen IAB noch die Sonder-AfA nach § 7g Abs. 5 EStG.",
  },
  {
    question: "Gilt der IAB für eine vermietete Eigentumswohnung?",
    answer:
      "Nein, aus zwei Gründen: Die Wohnung ist ein unbewegliches Wirtschaftsgut, und die private Vermietung nach § 21 EStG ist kein Betrieb mit Gewinneinkünften. Beides wäre Voraussetzung für den IAB.",
  },
  {
    question: "Gilt der IAB für die Einrichtung einer Ferienwohnung?",
    answer:
      "Möbel und Einrichtung sind eigenständige bewegliche Wirtschaftsgüter. Ein IAB kommt dafür grundsätzlich in Frage, wenn die Ferienwohnung im Rahmen eines Betriebs vermietet wird, etwa einer gewerblichen Ferienvermietung. Bei rein privater Vermietung nach § 21 EStG ist das nicht möglich. Die Einordnung im Einzelfall nimmt dein Steuerberater vor.",
  },
  {
    question: "Welche Alternative zur Immobilie ist IAB-fähig?",
    answer: `${IAB_TINY_HOUSE_DEFINITION} Steht ein Tiny House dagegen fest auf einem Fundament, gilt es in der Regel als Gebäude und ist nicht IAB-fähig.`,
  },
  {
    question: "Wie hoch ist der Steuereffekt im Beispiel?",
    answer: `Beim Escape 660 On-Grid (${eur(B.kaufpreis)} netto) beträgt der IAB bis zu ${eur(B.iab)}. Im Kaufjahr kommen Sonder-AfA (${eur(B.sonderAfa)}) und degressive AfA (${eur(B.degressiveAfa)}) hinzu. Bei ${pct(B.steuersatz)} Grenzsteuersatz ergibt das rechnerisch rund ${STEUEREFFEKT} Steuereffekt in Vorjahr und Kaufjahr – überwiegend eine Steuerstundung.`,
  },
];

export default function IabImmobilienPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investitionsabzugsbetrag für Immobilien: Geht das?",
    description:
      "Warum Gebäude und Eigentumswohnungen nicht unter den Investitionsabzugsbetrag nach § 7g EStG fallen, welche Abschreibung bei Immobilien gilt und welche Sachwerte IAB-fähig sind.",
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
      { "@type": "ListItem", position: 3, name: "IAB für Immobilien", item: URL },
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
            <span className="text-green-700 font-semibold">IAB für Immobilien</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">§7g EStG · Immobilien</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Investitionsabzugsbetrag für Immobilien: Geht das?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime={STAND}>12. November 2026</time>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">Kurz gesagt</p>
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li>• Für <strong>Gebäude, Eigentumswohnungen und Grundstücke</strong> gibt es keinen Investitionsabzugsbetrag.</li>
              <li>• Der IAB gilt nur für <strong>bewegliche Wirtschaftsgüter</strong> in einem Betrieb mit Gewinneinkünften.</li>
              <li>• Bei Immobilien bleibt die Gebäude-AfA – sie verteilt die Kosten über Jahrzehnte.</li>
              <li>• Ein Sachwert, der IAB-fähig sein kann: ein Tiny House auf zugelassenem Trailer.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <Image
              src={IMG}
              alt="Tiny House auf Stellplatz – bewegliches Wirtschaftsgut statt Immobilie beim Investitionsabzugsbetrag"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum Immobilien nicht IAB-fähig sind</h2>
            <p className="mb-4">
              Der Investitionsabzugsbetrag nach § 7g EStG erlaubt es, bis zu 50 % der geplanten Anschaffungskosten schon
              vor dem Kauf vom Gewinn abzuziehen. Das Gesetz begrenzt ihn aber ausdrücklich auf <strong>abnutzbare
              bewegliche Wirtschaftsgüter</strong> des Anlagevermögens. Gebäude und Eigentumswohnungen sind unbewegliche
              Wirtschaftsgüter, Grund und Boden nutzt sich nicht ab. Damit scheiden Immobilien aus, egal ob sie selbst
              genutzt, vermietet oder im Betrieb eingesetzt werden.
            </p>
            <p>
              Bei einer privat vermieteten Wohnung kommt ein zweiter Grund hinzu: Einkünfte aus Vermietung und
              Verpachtung nach § 21 EStG sind keine Gewinneinkünfte. Den IAB können nur Betriebe nutzen, also Gewerbe,
              Freiberufler sowie Land- und Forstwirtschaft.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was bei Immobilien stattdessen gilt</h2>
            <ul className="space-y-3">
              {[
                ["Lineare Gebäude-AfA", "In der Regel 2 % pro Jahr, bei Wohngebäuden mit Fertigstellung ab 2023 3 %. Die Kosten verteilen sich damit über 33 bis 50 Jahre."],
                ["Degressive AfA für neue Wohngebäude", "5 % vom Restwert für Wohngebäude mit Baubeginn zwischen 01.10.2023 und 30.09.2029 – nur für Neubau oder Kauf im Jahr der Fertigstellung."],
                ["Grund und Boden", "Der Grundstücksanteil am Kaufpreis wird gar nicht abgeschrieben."],
                ["Einrichtung", "Möbel und Einrichtung einer vermieteten Wohnung sind eigene bewegliche Wirtschaftsgüter. Ein IAB kommt dafür nur in Frage, wenn die Vermietung im Rahmen eines Betriebs erfolgt."],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong className="text-gray-900">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Für Selbstständige mit hohem Gewinn heißt das: Eine Immobilie senkt die Steuer nur langsam. Wer den Effekt
              früher braucht, muss auf bewegliche Wirtschaftsgüter ausweichen. Einen Überblick über weitere Wege gibt
              unser Ratgeber{" "}
              <Link href="/wissen/zielgruppen" className="text-green-700 font-semibold underline underline-offset-2">Steuern sparen als Selbstständiger</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Eigentumswohnung vs. Tiny House auf Trailer</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-500"></th>
                    <th className="px-4 py-2.5 font-semibold text-gray-500 text-center">Eigentumswohnung</th>
                    <th className="px-4 py-2.5 font-black text-green-700 text-center bg-green-50">Tiny House (Trailer, im Betrieb)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Investitionsabzugsbetrag", "nicht möglich", "bis 50 %, möglich"],
                    ["Sonder-AfA § 7g", "nicht möglich", "bis 40 %, möglich"],
                    ["Degressive AfA", "5 % nur bei Neubau", "bis 30 % (Kauf bis 31.12.2027)"],
                    ["Lineare AfA", "2–3 % pro Jahr", "kurze Nutzungsdauer"],
                    ["Grundstücksanteil", "nicht abschreibbar", "kein Grundstück nötig"],
                    ["Abzug bis Ende Kaufjahr (Beispiel)", "wenige Prozent", `rund ${ABZUG_PROZENT} %`],
                  ].map(([k, a, b]) => (
                    <tr key={k} className="border-t border-gray-100">
                      <td className="px-4 py-2.5 text-gray-600">{k}</td>
                      <td className="px-4 py-2.5 text-center text-gray-500">{a}</td>
                      <td className="px-4 py-2.5 text-center font-semibold text-gray-900 bg-green-50/50">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Einen ausführlichen Vergleich von Kaufpreis, Rendite und Aufwand findest du in{" "}
              <Link href="/wissen/tiny-house-vs-eigentumswohnung" className="text-green-700 font-semibold underline underline-offset-2">Tiny House vs. Eigentumswohnung</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Wann ein Tiny House IAB-fähig sein kann</h2>
            <p className="mb-4">{IAB_TINY_HOUSE_DEFINITION}</p>
            <p>
              Die Grenze verläuft also nicht beim Wort „Haus“, sondern bei der Frage, ob ein Gebäude vorliegt. Ein Tiny
              House fest auf einem Fundament ist in der Regel ein Gebäude und damit genauso wenig IAB-fähig wie eine
              Eigentumswohnung. Alle Voraussetzungen, Fristen und Rechenwege stehen in unserem Ratgeber{" "}
              <Link href="/wissen/iab-tiny-house" className="text-green-700 font-semibold underline underline-offset-2">IAB für Tiny Houses</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rechenbeispiel</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <tbody>
                  {[
                    ["Kauf", `Escape 660 On-Grid, ${eur(B.kaufpreis)} netto`],
                    ["IAB im Vorjahr (50 %)", eur(B.iab)],
                    ["Sonder-AfA im Kaufjahr (40 % der Restbasis)", eur(B.sonderAfa)],
                    ["Degressive AfA im Kaufjahr (30 % der Restbasis)", eur(B.degressiveAfa)],
                    ["Abzug bis Ende Kaufjahr", `${eur(B.abzugBisKaufjahr)} (rund ${ABZUG_PROZENT} %)`],
                    [`Steuereffekt bei ${pct(B.steuersatz)} (rechnerisch)`, `ca. ${STEUEREFFEKT}`],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-t border-gray-100 first:border-t-0">
                      <td className="px-4 py-2.5 text-gray-600">{k}</td>
                      <td className="px-4 py-2.5 text-right font-semibold text-gray-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Das ist überwiegend eine Steuerstundung: Insgesamt lässt sich nie mehr als der Kaufpreis abschreiben, was
              vorgezogen wird, fehlt in späteren Jahren. Eigene Werte rechnest du mit dem{" "}
              <Link href="/rechner/iab" className="text-green-700 font-semibold underline underline-offset-2">IAB-Rechner</Link>{" "}
              durch.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Diese Seite ist eine allgemeine Information und keine Steuerberatung. Ob und wie IAB und Abschreibungen in
              deinem Fall greifen, klärt dein Steuerberater.
            </p>
          </div>

          <div className="bg-gray-950 rounded-3xl p-8 text-center">
            <p className="text-white font-black text-xl mb-2">Unterlagen für deinen Steuerberater</p>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Fordere Produktunterlagen und unser allgemeines §7g-Factsheet an oder erstelle im Konfigurator ein Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all">
                Produktunterlagen anfordern
              </ModalButton>
              <Link href="/konfigurator" className="border border-gray-700 text-gray-200 hover:border-green-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                Angebot im Konfigurator →
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Investitionsabzugsbetrag und Immobilien</h2>
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
