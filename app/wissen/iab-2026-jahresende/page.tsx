import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";
import { DELIVERY_TERM } from "@/app/konfigurator/konfigurator-data";

const JAHR = 2026;
const FRIST = JAHR + 3;
const URL = "https://tinyhouse.investments/wissen/iab-2026-jahresende";
const STAND = "2026-11-03";

export const metadata = {
  title: "IAB 2026 noch nutzen: Was bis Jahresende zählt | TinyInvest",
  description:
    "Investitionsabzugsbetrag für 2026: Was bis 31.12. wichtig ist, warum der IAB erst in der Steuererklärung gebildet wird und wann ein Tiny House als angeschafft gilt. Mit Checkliste.",
  keywords:
    "iab 2026, investitionsabzugsbetrag 2026, iab jahresende, iab bis wann, iab 2026 tiny house, steuern sparen jahresende 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "IAB 2026 noch nutzen: Was bis zum Jahresende zählt",
    description:
      "IAB in der Steuererklärung 2026 bilden, Tiny House bis Ende 2029 anschaffen: Fristen, Rechenbeispiel und Checkliste.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Muss ich den IAB für 2026 bis zum 31. Dezember beantragen?",
    answer: `Nein. Einen gesonderten Antrag gibt es nicht. Der IAB für ${JAHR} wird in der Steuererklärung ${JAHR} angegeben, die in der Regel erst ${JAHR + 1} abgegeben wird. Bis zum Jahresende entscheidet sich aber, wie hoch der Gewinn ${JAHR} ausfällt und ob die Voraussetzungen (u. a. Betrieb mit Gewinneinkünften, Gewinngrenze 200.000 €) in diesem Jahr vorliegen.`,
  },
  {
    question: "Bis wann muss das Tiny House gekauft werden, wenn ich den IAB 2026 bilde?",
    answer: `Bis zum Ende des dritten Wirtschaftsjahres nach der IAB-Bildung, bei einem kalendergleichen Wirtschaftsjahr also bis zum 31.12.${FRIST}. Wird bis dahin nicht investiert, wird der IAB im Jahr ${JAHR} rückgängig gemacht und die Steuer mit Zinsen nachgezahlt.`,
  },
  {
    question: "Zählt eine Bestellung im Dezember schon als Anschaffung 2026?",
    answer: `In der Regel nicht. Steuerlich angeschafft ist ein Wirtschaftsgut, wenn du die Verfügungsmacht darüber erhältst, also meist mit der Lieferung. Bestellung oder Anzahlung reichen dafür nicht. Beim Escape 660 gilt: ${DELIVERY_TERM}. Bei einer Bestellung ab November fällt die Lieferung daher voraussichtlich ins Jahr ${JAHR + 1}.`,
  },
  {
    question: "Wie hoch ist der Steuereffekt des IAB im Beispiel?",
    answer: `Beim Escape 660 On-Grid (${eur(B.kaufpreis)} netto) beträgt der IAB bis zu ${eur(B.iab)}. Bei ${pct(B.steuersatz)} Grenzsteuersatz mindert das die Einkommensteuer rechnerisch um rund ${eur(B.steuereffektIab)}. Das ist überwiegend eine Steuerstundung: Im Kaufjahr wird der IAB wieder hinzugerechnet, und es bleibt weniger Abschreibung übrig.`,
  },
];

export default function Iab2026JahresendePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "IAB 2026 noch nutzen: Was bis zum Jahresende zählt",
    description:
      "Investitionsabzugsbetrag (§7g EStG) für das Jahr 2026: Bildung in der Steuererklärung, Investitionsfrist, Anschaffungszeitpunkt und Checkliste.",
    url: URL,
    datePublished: STAND,
    dateModified: STAND,
    inLanguage: "de-DE",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: { "@type": "Organization", name: "TinyInvest", logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" } },
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/tiny-house-winter-ganzjahresbetrieb.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "IAB 2026 Jahresende", item: URL },
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
            <span className="text-green-700 font-semibold">IAB 2026 Jahresende</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">§7g EStG · Jahresende {JAHR}</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            IAB {JAHR} noch nutzen: Was bis zum Jahresende zählt
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime={STAND}>3. November {JAHR}</time>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">Kurz gesagt</p>
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li>• Den IAB für {JAHR} gibt es ohne Antrag: Er wird in der <strong>Steuererklärung {JAHR}</strong> gebildet.</li>
              <li>• Das Tiny House muss nicht {JAHR} gekauft werden, sondern bis spätestens <strong>31.12.{FRIST}</strong>.</li>
              <li>• Bis Jahresende zählt vor allem: Liegen die Voraussetzungen im Jahr {JAHR} vor, und wie hoch ist der Gewinn?</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <Image
              src="/images/outside/tiny-house-winter-ganzjahresbetrieb.webp"
              alt="Tiny House im Winter – Investitionsabzugsbetrag zum Jahresende planen"
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
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum der IAB jetzt zum Thema wird</h2>
            <p className="mb-4">
              Zum Jahresende schauen viele Selbstständige, Freiberufler und Unternehmer auf ihren Gewinn {JAHR}. Der
              Investitionsabzugsbetrag (IAB) nach § 7g EStG erlaubt es, bis zu 50 % der voraussichtlichen
              Anschaffungskosten eines beweglichen Wirtschaftsguts schon vor dem Kauf gewinnmindernd abzuziehen. Ein
              Tiny House auf einem zugelassenen Trailer kann ein solches Wirtschaftsgut sein, wenn es zu einem Betrieb
              gehört, etwa einer gewerblichen Ferienvermietung.
            </p>
            <p>
              Häufiges Missverständnis: Der IAB muss nicht bis zum 31. Dezember beantragt werden. Er wird in der
              Steuererklärung für {JAHR} angegeben, die in der Regel erst im Laufe des Jahres {JAHR + 1} abgegeben wird.
              Was bis zum Jahresende feststeht, sind aber die Grundlagen: der Gewinn {JAHR} und ob die Voraussetzungen in
              diesem Jahr erfüllt sind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Zeitplan: IAB {JAHR}, Kauf bis {FRIST}</h2>
            <ol className="space-y-3">
              {[
                [`Steuererklärung ${JAHR}`, `IAB von bis zu 50 % der geplanten Anschaffungskosten angeben. Im Beispiel (Escape 660 On-Grid, ${eur(B.kaufpreis)} netto) sind das bis zu ${eur(B.iab)}.`],
                [`${JAHR + 1} bis ${FRIST}`, "Tiny House anschaffen. Maßgeblich ist der Zeitpunkt, zu dem du die Verfügungsmacht erhältst, in der Regel die Lieferung."],
                ["Im Kaufjahr", "Der IAB wird dem Gewinn hinzugerechnet, gleichzeitig sinken die Anschaffungskosten um denselben Betrag. Auf den Rest sind Sonder-AfA (bis 40 %) und – bei Anschaffung bis 31.12.2027 – degressive AfA (bis 30 %) möglich. Die degressive AfA wird im Kaufjahr zeitanteilig berechnet."],
                ["Kauf- und Folgejahr", "Das Haus wird zu mindestens 90 % betrieblich genutzt bzw. vermietet."],
              ].map(([k, v], i) => (
                <li key={k} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <span><strong className="text-gray-900">{k}:</strong> {v}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4">
              Wird bis Ende {FRIST} nicht investiert, wird der IAB im Jahr {JAHR} rückgängig gemacht. Die Steuer ist dann
              nachzuzahlen, zuzüglich Zinsen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rechenbeispiel: Was der IAB {JAHR} bewirkt</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <tbody>
                  {[
                    ["Geplanter Kauf", `Escape 660 On-Grid, ${eur(B.kaufpreis)} netto`],
                    [`IAB in der Steuererklärung ${JAHR}`, `${eur(B.iab)} (50 %)`],
                    ["Grenzsteuersatz (Annahme)", pct(B.steuersatz)],
                    [`Steuerentlastung ${JAHR} (rechnerisch)`, `ca. ${eur(B.steuereffektIab)}`],
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
              Die Entlastung ist vor allem ein Liquiditätsvorteil: Im Kaufjahr wird der IAB wieder hinzugerechnet und es
              bleibt weniger Abschreibung übrig. Wie IAB, Sonder-AfA und degressive AfA zusammenspielen, zeigt der{" "}
              <Link href="/rechner/iab" className="text-green-700 font-semibold underline underline-offset-2">IAB-Rechner</Link>{" "}
              und ausführlich unser Ratgeber{" "}
              <Link href="/wissen/iab-tiny-house" className="text-green-700 font-semibold underline underline-offset-2">IAB Tiny House</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Lässt sich das Tiny House noch {JAHR} anschaffen?</h2>
            <p className="mb-4">
              Steuerlich zählt nicht die Bestellung und nicht die Anzahlung, sondern in der Regel die Lieferung. Beim
              Escape 660 gilt: {DELIVERY_TERM}. Wer ab November bestellt, erhält das Haus daher voraussichtlich erst {JAHR + 1}.
              Sonder-AfA und degressive AfA betreffen dann das Jahr {JAHR + 1}.
            </p>
            <p>
              Für {JAHR} bleibt der IAB das passende Instrument: Er setzt keinen Kauf im selben Jahr voraus, sondern nur die
              geplante Anschaffung innerhalb der Frist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Checkliste bis zum Jahresende</h2>
            <ul className="space-y-2.5">
              {[
                ["Betrieb", `Besteht ${JAHR} ein Betrieb mit Gewinneinkünften (Gewerbe, freiberufliche Tätigkeit)? Private Vermietung nach § 21 EStG reicht nicht.`],
                ["Gewinn", `Liegt der Gewinn ${JAHR} voraussichtlich bei höchstens 200.000 € (ohne IAB gerechnet)?`],
                ["Investition planen", "Modell, Variante und Stückzahl festlegen. Der geplante Netto-Preis ist die Basis für die 50 %."],
                ["Frist im Blick", `Kann die Anschaffung realistisch bis 31.12.${FRIST} erfolgen?`],
                ["Nutzung", "Ist eine Vermietung bzw. betriebliche Nutzung von mindestens 90 % im Kauf- und Folgejahr geplant?"],
                ["Steuerberater", "Termin vereinbaren und klären, ob und in welcher Höhe der IAB in deinem Fall passt."],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">☐</span>
                  <span><strong className="text-gray-900">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              Diese Seite ist eine allgemeine Information und keine Steuerberatung. Ob und wie der IAB in deinem Fall greift,
              klärt dein Steuerberater.
            </p>
          </div>

          <div className="bg-gray-950 rounded-3xl p-8 text-center">
            <p className="text-white font-black text-xl mb-2">Planungsgrundlage für deinen Steuerberater</p>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Erstelle im Konfigurator ein Angebot mit Preis und Variante oder fordere unsere Produktunterlagen an.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/konfigurator" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all">
                Angebot im Konfigurator erstellen →
              </Link>
              <ModalButton className="border border-gray-700 text-gray-200 hover:border-green-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                Produktunterlagen anfordern
              </ModalButton>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: IAB {JAHR} zum Jahresende</h2>
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
