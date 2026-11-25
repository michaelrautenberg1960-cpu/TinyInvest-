import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/container-direktinvestment-alternative";
const STAND = "2026-11-25";
const IMG = "/images/outside/tiny-house-investor-aussen.webp";

// Tiny House: gleiche Annahmen wie im Rendite-Rechner (60 % Belegung, 120 €/Nacht, Pacht vor Aufteilung, 40 % Investor)
const PACHT = 2500;
const NAECHTE = Math.round(0.6 * 365);
const TH_UMSATZ = NAECHTE * 120;
const TH_AUSZAHLUNG = (TH_UMSATZ - PACHT) * 0.4;
const TH_RENDITE = TH_AUSZAHLUNG / B.kaufpreis;

const rund = (n: number) => eur(Math.round(n / 100) * 100);
const prozent = (n: number) => (n * 100).toFixed(1).replace(".", ",") + " %";

export const metadata = {
  title: "Container-Direktinvestment: Alternative Tiny House? | TinyInvest",
  description:
    "Container-Direktinvestment oder Tiny House? Beides sind bewegliche Sachwerte – aber Ertrag, Kontrolle, Risiken und Steuern unterscheiden sich deutlich. Der ehrliche Vergleich.",
  keywords:
    "container direktinvestment alternative, container investment alternative, sachwert direktinvestment, container direktinvestment erfahrungen, tiny house direktinvestment, bewegliche wirtschaftsgüter investment",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Container-Direktinvestment vs. Tiny House",
    description: "Zwei bewegliche Sachwerte im ehrlichen Vergleich: Ertrag, Kontrolle, Risiken und Steuern.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Wie funktioniert ein Container-Direktinvestment?",
    answer: "Der Anleger kauft einen oder mehrere Seefracht-Container und vermietet sie in der Regel direkt an den Anbieter zurück, der sie an Reedereien oder Leasinggesellschaften weitervermietet. Der Anleger erhält für eine feste Laufzeit Mietzahlungen und oft ein Angebot, die Container am Ende zurückzukaufen. Ob Miete und Rückkauf tatsächlich gezahlt werden, hängt von der wirtschaftlichen Lage des Anbieters ab.",
  },
  {
    question: "Was ist bei P&R passiert?",
    answer: "2018 meldeten die deutschen P&R-Containergesellschaften Insolvenz an. Betroffen waren rund 54.000 Anleger. Im Insolvenzverfahren stellte sich heraus, dass ein Großteil der verkauften Container nicht existierte. Der Fall zeigt, wie wichtig es ist, das Eigentum an einem Sachwert selbst prüfen zu können.",
  },
  {
    question: "Ist ein Tiny House sicherer als ein Container-Direktinvestment?",
    answer: "Ein Tiny House hat andere Risiken, keine geringeren per se. Der Vorteil: Du kaufst ein konkretes Haus an einem bekannten Standort, das du besichtigen kannst, und siehst die Vermietung über Buchungen. Der Nachteil: Es gibt keine feste Miete und kein Rückkaufangebot – die Einnahmen schwanken mit der Belegung, und du bist vom Betreiber vor Ort abhängig.",
  },
  {
    question: "Wie werden die beiden steuerlich behandelt?",
    answer: "Beides sind bewegliche Wirtschaftsgüter, die abgeschrieben werden können. Wie die Einnahmen eingeordnet werden, hängt von der Vertragsgestaltung ab. Investitionsabzugsbetrag (IAB) und Sonder-AfA nach § 7g EStG setzen in beiden Fällen voraus, dass das Wirtschaftsgut zu einem Betrieb mit Gewinneinkünften gehört. Das klärt dein Steuerberater.",
  },
  {
    question: "Wie viel Kapital brauche ich jeweils?",
    answer: `Container werden oft schon ab wenigen tausend Euro pro Stück angeboten. Ein Tiny House kostet bei TinyInvest ${eur(B.kaufpreis)} netto (On-Grid) inklusive Ausstattung, Transport und Aufstellung. Der Einstieg ist also höher, dafür ist es ein vollständiges, eigenständig vermietbares Objekt.`,
  },
];

export default function ContainerDirektinvestmentAlternativePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Container-Direktinvestment vs. Tiny House: Die Sachwert-Alternative im Vergleich",
    description: "Ertrag, Kontrolle, Risiken und Steuern von Container-Direktinvestments und Tiny Houses im Vergleich.",
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
      { "@type": "ListItem", position: 3, name: "Container-Direktinvestment Alternative", item: URL },
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
    ["Was du kaufst", "Seefracht-Container (meist mehrere)", "ein komplett ausgestattetes Tiny House"],
    ["Einstieg", "oft ab wenigen tausend Euro", `${eur(B.kaufpreis)} netto (On-Grid)`],
    ["Wer vermietet?", "meist der Anbieter selbst (Rückmiete)", "lokaler Partner als Ferienunterkunft"],
    ["Ertrag", "feste Miete laut Vertrag", `variabel, im Beispiel ~${eur(TH_AUSZAHLUNG)} p.a. (~${prozent(TH_RENDITE)})`],
    ["Ende der Laufzeit", "oft Rückkaufangebot des Anbieters", "kein Rückkauf, Weiterbetrieb oder Verkauf"],
    ["Sichtbarkeit", "Container weltweit im Einsatz, kaum selbst prüfbar", "Haus an bekanntem Standort, besichtigbar"],
    ["Hauptrisiko", "Zahlungsfähigkeit des Anbieters", "Belegung, Standort, Betreiber"],
    ["§7g (IAB, Sonder-AfA)", "nur bei Zugehörigkeit zu einem Betrieb", "nur bei Zugehörigkeit zu einem Betrieb"],
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
            <span className="text-green-700 font-semibold">Container-Direktinvestment Alternative</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Sachwerte 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Container-Direktinvestment oder Tiny House? Zwei Sachwerte im ehrlichen Vergleich
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
              <li>• <strong>Container:</strong> niedriger Einstieg und feste Mieten laut Vertrag – aber Ertrag und Rückkauf hängen an der Zahlungsfähigkeit des Anbieters, und die Container sind kaum selbst prüfbar.</li>
              <li>• <strong>Tiny House:</strong> höherer Einstieg und schwankende Einnahmen – dafür ein konkretes Haus, das du besichtigen kannst, mit sichtbarer Vermietung.</li>
              <li>• Bei beiden gilt: §7g-Vorteile gibt es nur, wenn das Wirtschaftsgut zu einem Betrieb gehört.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={IMG} alt="Tiny House als Sachwert-Alternative zum Container-Direktinvestment" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Vergleich auf einen Blick</h2>
            <p className="mb-5">
              Container-Direktinvestments und Tiny Houses haben eine Gemeinsamkeit: Der Anleger kauft ein bewegliches Wirtschaftsgut
              und erzielt Einnahmen aus dessen Vermietung. Wie diese Einnahmen entstehen und wer sie kontrolliert, unterscheidet sich
              aber grundlegend. Die Tiny-House-Werte beziehen sich auf ein Escape 660 On-Grid bei 60 % Belegung und 120 € pro Nacht
              und sind Beispielrechnungen, keine Prognosen.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Container</th>
                    <th className="text-left p-3 font-black text-green-700 text-[11px] uppercase bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vergleich.map(([k, c, th]) => (
                    <tr key={k}>
                      <td className="p-3 font-medium text-gray-800">{k}</td>
                      <td className="p-3 text-gray-600">{c}</td>
                      <td className="p-3 text-gray-900 bg-green-50/40">{th}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">So funktioniert ein Container-Direktinvestment</h2>
            <p className="mb-4">
              Der Anleger kauft Seefracht-Container und vermietet sie meist direkt an den Anbieter zurück. Dieser vermietet sie weiter
              an Reedereien oder Leasinggesellschaften. Der Anleger erhält über eine feste Laufzeit Mietzahlungen und häufig ein
              Angebot, die Container am Ende zu einem vereinbarten Preis zurückzukaufen.
            </p>
            <p>
              Das wirkt planbar, hat aber einen Haken: Miete und Rückkauf sind Versprechen des Anbieters. Gerät er in
              Schwierigkeiten, stehen beide infrage. Und weil die Container weltweit im Einsatz sind, kann der Anleger kaum selbst
              prüfen, ob „seine“ Container existieren und vermietet sind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was der Fall P&R zeigt</h2>
            <p>
              2018 meldeten die deutschen P&R-Containergesellschaften Insolvenz an. Rund 54.000 Anleger waren betroffen. Im
              Insolvenzverfahren stellte sich heraus, dass ein Großteil der verkauften Container nicht existierte. Das heißt nicht,
              dass jedes Container-Investment unseriös ist. Es zeigt aber, worauf es bei jedem Sachwert-Direktinvestment ankommt:
              Kannst du dein Eigentum selbst sehen und prüfen, und bist du von einem einzigen Anbieter abhängig?
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Unterschied beim Tiny House</h2>
            <p className="mb-4">
              Beim Tiny House kaufst du ein konkretes Haus, das an einem bekannten Standort steht. Du kannst es besichtigen, und die
              Vermietung ist über Buchungen sichtbar. Ein lokaler Partner stellt den Stellplatz und übernimmt Buchungen, Reinigung
              und Gästebetreuung.
            </p>
            <p className="mb-4">
              Die Einnahmen sind nicht fest: {NAECHTE} Nächte × 120 € = {eur(TH_UMSATZ)} Umsatz, davon wird zuerst die Stellplatzpacht
              ({eur(PACHT)} pro Jahr) abgezogen, vom Rest erhält der Eigentümer 40 % – rund {eur(TH_AUSZAHLUNG)} im Jahr bzw.{" "}
              {eur(TH_AUSZAHLUNG / 12)} im Monat, etwa {prozent(TH_RENDITE)} auf den Kaufpreis vor Steuern und Versicherung. Bei
              schwächerer Belegung sinkt die Auszahlung.
            </p>
            <p>
              Es gibt kein Rückkaufangebot. Am Ende entscheidest du, ob das Haus weiter vermietet oder verkauft wird. Auch hier bist
              du vom Betreiber vor Ort abhängig – fällt er aus, muss ein neuer Partner gefunden oder das Haus versetzt werden. Mehr
              zum Eigentumsmodell: <Link href="/wissen/direktinvestment" className="text-green-700 font-semibold underline underline-offset-2">Tiny House als Direktinvestment</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Steuern: §7g nur mit Betrieb</h2>
            <p className="mb-4">
              Container und Tiny Houses sind bewegliche Wirtschaftsgüter und können abgeschrieben werden. Investitionsabzugsbetrag
              (IAB) und Sonder-AfA nach § 7g EStG setzen voraus, dass das Wirtschaftsgut zu einem Betrieb mit Gewinneinkünften gehört.
            </p>
            <p className="mb-4">
              Für ein Tiny House im Betrieb ergibt sich im Beispiel ({eur(B.kaufpreis)}, {pct(B.steuersatz)}): IAB {eur(B.iab)} im
              Vorjahr, im Kaufjahr Sonder-AfA {eur(B.sonderAfa)} und degressive AfA {eur(B.degressiveAfa)} – zusammen rund{" "}
              {rund(B.steuereffektGesamt)} Steuereffekt, überwiegend als <strong>Steuerstundung</strong>.
            </p>
            <p className="text-gray-500 text-sm">
              Allgemeine Information, keine Steuerberatung. Wie Einnahmen und Abschreibung in deinem Fall behandelt werden, klärt dein
              Steuerberater. Details: <Link href="/wissen/iab-tiny-house" className="text-green-700 underline underline-offset-2">IAB Tiny House</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Checkliste für jedes Sachwert-Direktinvestment</h2>
            <ul className="space-y-2">
              <li>• Kann ich das Wirtschaftsgut selbst sehen oder eindeutig identifizieren?</li>
              <li>• Wer zahlt die Einnahmen – ein Markt (Gäste, Mieter) oder nur der Anbieter selbst?</li>
              <li>• Was passiert, wenn der Anbieter oder Betreiber ausfällt?</li>
              <li>• Sind Rückkaufzusagen abgesichert oder nur ein Versprechen?</li>
              <li>• Sind die Ertragsannahmen nachvollziehbar und mit eigenen Zahlen prüfbar?</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Risiken beider Anlagen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Container-Direktinvestment</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Insolvenz des Anbieters</li>
                  <li>• Eigentum kaum selbst prüfbar</li>
                  <li>• Rückkaufpreis nicht gesichert</li>
                  <li>• Abhängigkeit vom Welthandel</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Tiny House</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Schwankende Belegung</li>
                  <li>• Abhängigkeit von Standort und Betreiber</li>
                  <li>• Wertverlust über die Nutzungsdauer</li>
                  <li>• Kein Rückkaufangebot</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Fazit: Für wen passt was?</h2>
            <p className="mb-4">
              Ein <strong>Container-Direktinvestment</strong> passt zu Anlegern, die kleine Beträge in feste Mietzahlungen stecken
              wollen und dem Anbieter über die gesamte Laufzeit vertrauen.
            </p>
            <p>
              Ein <strong>Tiny House</strong> passt zu Anlegern, die einen sichtbaren Sachwert besitzen wollen, schwankende Einnahmen
              aus Ferienvermietung akzeptieren und den Wertverlust des Hauses einplanen. Den vollständigen Guide findest du unter{" "}
              <Link href="/tiny-house-als-kapitalanlage" className="text-green-700 font-semibold underline underline-offset-2">Tiny House als Kapitalanlage</Link>.
            </p>
          </div>

          <div className="bg-gray-950 rounded-3xl p-8 text-center">
            <p className="text-white font-black text-xl mb-2">Selbst durchrechnen</p>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Prüfe die Zahlen im Rendite-Rechner oder fordere Produktunterlagen und das allgemeine §7g-Factsheet an.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/rechner/rendite" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all">
                Zum Rendite-Rechner →
              </Link>
              <ModalButton className="border border-gray-700 text-gray-200 hover:border-green-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                Produktunterlagen anfordern
              </ModalButton>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Container-Direktinvestment vs. Tiny House</h2>
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
