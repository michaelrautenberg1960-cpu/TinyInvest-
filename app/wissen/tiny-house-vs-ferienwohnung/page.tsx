import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/tiny-house-vs-ferienwohnung";
const STAND = "2026-11-25";
const IMG = "/images/outside/tiny-house-ferienimmobilie-aussen.webp";

// Tiny House: gleiche Annahmen wie im Rendite-Rechner (60 % Belegung, 120 €/Nacht, Pacht vor Aufteilung, 40 % Investor)
const PACHT = 2500;
const NAECHTE = Math.round(0.6 * 365);
const TH_UMSATZ = NAECHTE * 120;
const TH_AUSZAHLUNG = (TH_UMSATZ - PACHT) * 0.4;
const TH_RENDITE = TH_AUSZAHLUNG / B.kaufpreis;

// Ferienwohnung: typisches Vergleichsobjekt (Beispielannahmen)
const FW_PREIS = 250_000;
const FW_NEBENKOSTEN = FW_PREIS * 0.1;
const FW_NAECHTE = Math.round(0.5 * 365);
const FW_UMSATZ = FW_NAECHTE * 110;
const FW_SERVICE = FW_UMSATZ * 0.3; // Vermittlung, Reinigung, Gästebetreuung
const FW_LAUFEND = 6000; // Hausgeld, Strom, Internet, Versicherung, Rücklage
const FW_UEBERSCHUSS = FW_UMSATZ - FW_SERVICE - FW_LAUFEND;
const FW_RENDITE = FW_UEBERSCHUSS / FW_PREIS;
const FW_AFA = FW_PREIS * 0.7 * 0.02;

const rund = (n: number) => eur(Math.round(n / 100) * 100);
const prozent = (n: number) => (n * 100).toFixed(1).replace(".", ",") + " %";

export const metadata = {
  title: "Tiny House vs. Ferienwohnung als Kapitalanlage 2026 | TinyInvest",
  description:
    "Ferienwohnung kaufen oder Tiny House? Kapitalbedarf, Nebenkosten, Rendite, Genehmigung, Steuern und Aufwand im ehrlichen Vergleich – mit Rechenbeispiel 2026.",
  keywords:
    "ferienwohnung als kapitalanlage, ferienwohnung kaufen alternative, tiny house vs ferienwohnung, ferienimmobilie kapitalanlage rendite, ferienwohnung rendite 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House vs. Ferienwohnung als Kapitalanlage",
    description: "Kapitalbedarf, Rendite, Genehmigung, Steuern und Aufwand im ehrlichen Vergleich – mit Rechenbeispiel.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Was bringt mehr Rendite: Ferienwohnung oder Tiny House?",
    answer: `Im Beispiel bleibt bei einer Ferienwohnung für ${eur(FW_PREIS)} nach Vermittlung, Reinigung und laufenden Kosten ein Überschuss von rund ${eur(FW_UEBERSCHUSS)} (ca. ${prozent(FW_RENDITE)} auf den Kaufpreis). Ein Tiny House für ${eur(B.kaufpreis)} netto bringt rund ${eur(TH_AUSZAHLUNG)} Auszahlung (ca. ${prozent(TH_RENDITE)} vor Steuern). Dafür verliert das Tiny House an Wert, während die Wohnung einen Grundstücksanteil hat.`,
  },
  {
    question: "Darf ich jede Ferienwohnung an Urlauber vermieten?",
    answer: "Nicht automatisch. In manchen Städten und Urlaubsorten gelten Zweckentfremdungsverbote oder Genehmigungspflichten für Ferienwohnungen, und auch Bebauungsplan oder Teilungserklärung können die Ferienvermietung einschränken. Das sollte vor dem Kauf geprüft werden. Auch ein Tiny House braucht einen genehmigten Stellplatz – bei TinyInvest stellen ihn lokale Partner.",
  },
  {
    question: "Wie wird eine Ferienwohnung abgeschrieben?",
    answer: "Bei einer privat vermieteten Ferienwohnung wird der Gebäudeanteil in der Regel mit 2 % pro Jahr abgeschrieben (bei Fertigstellung ab 2023 mit 3 %); das Inventar kann separat abgeschrieben werden. Ein Tiny House auf Trailer kann als bewegliches Wirtschaftsgut gelten. Gehört es zu einem Betrieb mit Gewinneinkünften, sind IAB, Sonder-AfA und degressive AfA möglich.",
  },
  {
    question: "Kann ich die Ferienwohnung oder das Tiny House selbst nutzen?",
    answer: "Bei beiden ist Eigennutzung grundsätzlich denkbar, sie wirkt sich aber steuerlich aus: Bei einer Ferienwohnung kann sie die Anerkennung der Vermietungsverluste gefährden, bei einem Tiny House im Betrieb ist private Nutzung nur sehr begrenzt möglich. Wie viel Eigennutzung in deinem Fall unschädlich ist, klärt dein Steuerberater.",
  },
  {
    question: "Wer kümmert sich um Gäste und Reinigung?",
    answer: "Bei einer Ferienwohnung entweder du selbst oder eine Vermittlungsagentur, die dafür häufig 20–30 % der Einnahmen erhält. Beim Tiny House übernimmt ein lokaler Partner Buchungen, Reinigung und Gästebetreuung; die Einnahmen werden nach Abzug der Stellplatzpacht aufgeteilt.",
  },
];

export default function TinyHouseVsFerienwohnungPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House vs. Ferienwohnung als Kapitalanlage",
    description: "Kapitalbedarf, Nebenkosten, Rendite, Genehmigung, Steuern und Aufwand von Ferienwohnung und Tiny House im Vergleich, mit Rechenbeispiel.",
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
      { "@type": "ListItem", position: 3, name: "Tiny House vs. Ferienwohnung", item: URL },
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
    ["Kaufpreis", `z. B. ${eur(FW_PREIS)}`, `${eur(B.kaufpreis)} netto (On-Grid)`],
    ["Kaufnebenkosten", `ca. ${eur(FW_NEBENKOSTEN)} (~10 %)`, "keine Grunderwerbsteuer, kein Notar"],
    ["Überschuss p.a.", `ca. ${eur(FW_UEBERSCHUSS)} (~${prozent(FW_RENDITE)})`, `ca. ${eur(TH_AUSZAHLUNG)} Auszahlung (~${prozent(TH_RENDITE)})`],
    ["Betrieb", "selbst oder Agentur (20–30 %)", "lokaler Partner, Aufteilung nach Pacht"],
    ["Genehmigung", "Zweckentfremdung, Bebauungsplan, Teilungserklärung prüfen", "genehmigter Stellplatz über den Partner"],
    ["Abschreibung", `2 % auf den Gebäudeanteil (~${eur(FW_AFA)} p.a.)`, "IAB, Sonder-AfA und degressive AfA (bei Betrieb)"],
    ["Wertentwicklung", "Grundstücksanteil kann an Wert gewinnen", "Wertverlust über die Nutzungsdauer"],
    ["Verkauf", "nach 10 Jahren privat steuerfrei", "betrieblich zu versteuern (bei Betrieb)"],
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
            <span className="text-green-700 font-semibold">Tiny House vs. Ferienwohnung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Ferienvermietung 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Tiny House vs. Ferienwohnung: Welche Ferienimmobilie lohnt sich als Kapitalanlage?
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
              <li>• <strong>Ferienwohnung:</strong> viel Kapital und hohe Nebenkosten, Genehmigungsfragen und oft eigener Aufwand – dafür Grundstückswert und steuerfreier Verkauf nach zehn Jahren.</li>
              <li>• <strong>Tiny House:</strong> wenig Kapital, keine Kaufnebenkosten, Betrieb über lokale Partner und bei Betrieb ein früher Steuereffekt – aber Wertverlust und schwankende Belegung.</li>
              <li>• Beide leben von der Ferienvermietung. Der Unterschied liegt vor allem im Kapitaleinsatz und im Wertverlauf.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={IMG} alt="Tiny House als Alternative zur Ferienwohnung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Vergleich auf einen Blick</h2>
            <p className="mb-5">
              Als Vergleichsobjekt dient eine Ferienwohnung für {eur(FW_PREIS)} in einer Urlaubsregion, vermietet an {FW_NAECHTE} Nächten
              zu 110 €. Das Tiny House ist ein Escape 660 On-Grid für {eur(B.kaufpreis)} netto bei 60 % Belegung und 120 € pro Nacht.
              Die Werte der Ferienwohnung sind gerundete Beispielannahmen, keine Marktdaten. Alle Werte sind Beispielrechnungen, keine
              Prognosen.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Ferienwohnung</th>
                    <th className="text-left p-3 font-black text-green-700 text-[11px] uppercase bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vergleich.map(([k, fw, th]) => (
                    <tr key={k}>
                      <td className="p-3 font-medium text-gray-800">{k}</td>
                      <td className="p-3 text-gray-600">{fw}</td>
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
              Für die Beispielwohnung fallen neben dem Kaufpreis Grunderwerbsteuer, Notar, Grundbuch und oft eine Maklerprovision an –
              zusammen rund {eur(FW_NEBENKOSTEN)}. Hinzu kommt die Einrichtung, bevor die erste Buchung möglich ist.
            </p>
            <p>
              Ein Tiny House wird ohne Grundstück gekauft. Grunderwerbsteuer, Notar und Grundbuch entfallen. Der Komplettpreis von{" "}
              {eur(B.kaufpreis)} netto enthält Ausstattung, Transport zum Standort und Aufstellung. Mit dem Kapital für eine
              Ferienwohnung lassen sich mehrere Häuser an verschiedenen Standorten kaufen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Rendite: Was nach Kosten übrig bleibt</h2>
            <p className="mb-4">
              Ferienwohnung: {FW_NAECHTE} Nächte × 110 € = {eur(FW_UMSATZ)} Umsatz. Davon gehen im Beispiel rund {eur(FW_SERVICE)} für
              Vermittlung, Reinigung und Gästebetreuung (30 %) und rund {eur(FW_LAUFEND)} laufende Kosten wie Hausgeld, Strom,
              Internet, Versicherung und Rücklage ab. Übrig bleiben etwa {eur(FW_UEBERSCHUSS)} im Jahr, rund {prozent(FW_RENDITE)} auf
              den Kaufpreis.
            </p>
            <p className="mb-4">
              Tiny House: {NAECHTE} Nächte × 120 € = {eur(TH_UMSATZ)} Umsatz. Zuerst wird die Stellplatzpacht ({eur(PACHT)} pro Jahr)
              abgezogen, vom Rest erhält der Eigentümer 40 % – rund {eur(TH_AUSZAHLUNG)} im Jahr bzw. {eur(TH_AUSZAHLUNG / 12)} im
              Monat, etwa {prozent(TH_RENDITE)} auf den Kaufpreis vor Steuern und Versicherung.
            </p>
            <p>
              Zur fairen Einordnung: Die höhere laufende Rendite des Tiny House steht einem Wertverlust des Hauses gegenüber, während
              die Ferienwohnung über den Grundstücksanteil an Wert gewinnen kann. Beide Rechnungen hängen stark an der Belegung.
              Eigene Annahmen kannst du im{" "}
              <Link href="/rechner/rendite" className="text-green-700 font-semibold underline underline-offset-2">Rendite-Rechner</Link> prüfen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Genehmigung und Vermietungsregeln</h2>
            <p className="mb-4">
              Ferienvermietung ist nicht überall erlaubt. Viele Städte und einige Urlaubsorte haben Zweckentfremdungsverbote oder
              Genehmigungspflichten. Auch der Bebauungsplan und bei Eigentumswohnungen die Teilungserklärung können die kurzfristige
              Vermietung einschränken. Das sollte vor dem Kauf schriftlich geklärt sein.
            </p>
            <p>
              Ein Tiny House braucht ebenfalls einen genehmigten Stellplatz. Bei TinyInvest stellen lokale Partner Stellplatz und
              Betrieb. Mehr dazu unter{" "}
              <Link href="/wissen/tiny-house-genehmigung" className="text-green-700 font-semibold underline underline-offset-2">Tiny House Genehmigung</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Abschreibung und Steuern</h2>
            <p className="mb-4">
              Bei einer privat vermieteten Ferienwohnung wird der Gebäudeanteil in der Regel mit 2 % pro Jahr abgeschrieben (bei
              Fertigstellung ab 2023 mit 3 %). Bei 70 % Gebäudeanteil sind das im Beispiel rund {eur(FW_AFA)} pro Jahr. Das Inventar
              kann separat abgeschrieben werden. Nach zehn Jahren ist ein privater Verkauf steuerfrei.
            </p>
            <p className="mb-4">
              Ein Tiny House auf einem zugelassenen Trailer kann als bewegliches Wirtschaftsgut gelten. Gehört es zu einem Betrieb
              mit Gewinneinkünften, sind Investitionsabzugsbetrag (IAB), Sonder-AfA und degressive AfA möglich. Im Beispiel
              ({eur(B.kaufpreis)}, {pct(B.steuersatz)}): IAB {eur(B.iab)} im Vorjahr, im Kaufjahr Sonder-AfA {eur(B.sonderAfa)} und
              degressive AfA {eur(B.degressiveAfa)} – zusammen rund {rund(B.steuereffektGesamt)} Steuereffekt, überwiegend als{" "}
              <strong>Steuerstundung</strong>. Beim späteren Verkauf ist der Erlös über dem Restbuchwert betrieblich zu versteuern.
            </p>
            <p className="text-gray-500 text-sm">
              Allgemeine Information, keine Steuerberatung. Ob IAB und Sonder-AfA in deinem Fall möglich sind, klärt dein
              Steuerberater. Mehr zur Ferienimmobilie:{" "}
              <Link href="/wissen/ferienimmobilie-steuer" className="text-green-700 underline underline-offset-2">Ferienimmobilie und Steuer</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Risiken beider Anlagen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">Ferienwohnung</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Saisonale Belegung und Leerstand</li>
                  <li>• Neue Vermietungsverbote am Standort</li>
                  <li>• Sonderumlagen und Sanierungskosten</li>
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
              Die <strong>Ferienwohnung</strong> passt zu Anlegern mit viel Eigenkapital, die eine Immobilie mit Grundstücksanteil
              wollen, die Vermietungsregeln am Standort geprüft haben und Zeit oder eine Agentur für den Betrieb einplanen.
            </p>
            <p className="mb-4">
              Das <strong>Tiny House</strong> passt zu Anlegern, die mit weniger Kapital in die Ferienvermietung einsteigen, den
              Betrieb abgeben und – als Selbstständige mit Betrieb – den §7g-Effekt nutzen wollen. Dafür akzeptieren sie, dass das
              Haus an Wert verliert.
            </p>
            <p>
              Den vollständigen Investment-Guide findest du unter{" "}
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
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Tiny House vs. Ferienwohnung</h2>
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
