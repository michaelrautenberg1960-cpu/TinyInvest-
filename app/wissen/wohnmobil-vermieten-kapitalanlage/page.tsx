import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import { IAB_BEISPIEL as B, eur, pct } from "@/app/lib/iab-facts";

const URL = "https://tinyhouse.investments/wissen/wohnmobil-vermieten-kapitalanlage";
const STAND = "2026-11-25";
const IMG = "/images/outside/tiny-house-skandinavien-naturlage.webp";

// Tiny House: gleiche Annahmen wie im Rendite-Rechner (60 % Belegung, 120 €/Nacht, Pacht vor Aufteilung, 40 % Investor)
const PACHT = 2500;
const NAECHTE = Math.round(0.6 * 365);
const TH_UMSATZ = NAECHTE * 120;
const TH_AUSZAHLUNG = (TH_UMSATZ - PACHT) * 0.4;
const TH_RENDITE = TH_AUSZAHLUNG / B.kaufpreis;

// Wohnmobil: typisches Vergleichsobjekt (Beispielannahmen)
const WM_PREIS = 75_000;
const WM_TAGE = 90;
const WM_TAGESPREIS = 140;
const WM_UMSATZ = WM_TAGE * WM_TAGESPREIS;
const WM_PLATTFORM = WM_UMSATZ * 0.2; // Vermietplattform inkl. Mietversicherung
const WM_LAUFEND = 4000; // Kfz-Steuer, Versicherung, Wartung, TÜV, Stellplatz, Reinigung
const WM_UEBERSCHUSS = WM_UMSATZ - WM_PLATTFORM - WM_LAUFEND;
const WM_RENDITE = WM_UEBERSCHUSS / WM_PREIS;

const rund = (n: number) => eur(Math.round(n / 100) * 100);
const prozent = (n: number) => (n * 100).toFixed(1).replace(".", ",") + " %";

export const metadata = {
  title: "Wohnmobil vermieten als Kapitalanlage? Vergleich 2026 | TinyInvest",
  description:
    "Wohnmobil kaufen und vermieten oder Tiny House? Einnahmen, Saison, Wertverlust, Aufwand und §7g im ehrlichen Vergleich – mit Rechenbeispiel 2026.",
  keywords:
    "wohnmobil vermieten kapitalanlage, wohnmobil als kapitalanlage, wohnmobil vermieten rendite, wohnmobil vermieten lohnt sich, wohnmobil vermieten steuer, tiny house vs wohnmobil",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: URL },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Wohnmobil vermieten oder Tiny House als Kapitalanlage?",
    description: "Einnahmen, Saison, Wertverlust, Aufwand und §7g im ehrlichen Vergleich – mit Rechenbeispiel.",
    url: URL,
  },
};

const faqItems = [
  {
    question: "Lohnt sich ein Wohnmobil als Kapitalanlage?",
    answer: `Das hängt stark von Auslastung und eigenem Aufwand ab. Im Beispiel bringt ein Wohnmobil für ${eur(WM_PREIS)} bei ${WM_TAGE} Miettagen nach Plattformgebühr und laufenden Kosten rund ${eur(WM_UEBERSCHUSS)} im Jahr (ca. ${prozent(WM_RENDITE)}). Davon sind noch der Wertverlust, Schäden und die eigene Zeit für Übergaben und Reinigung abzuziehen.`,
  },
  {
    question: "Warum vermietet sich ein Tiny House öfter als ein Wohnmobil?",
    answer: "Wohnmobile werden vor allem von Frühjahr bis Herbst und meist wochenweise gebucht; im Winter stehen sie oft still. Ein winterfestes Tiny House an einem guten Standort kann ganzjährig als Ferienunterkunft vermietet werden. Die Belegung schwankt trotzdem mit Saison und Lage.",
  },
  {
    question: "Kann ich für ein Wohnmobil den IAB nutzen?",
    answer: "Ja, grundsätzlich schon – wenn das Wohnmobil zu einem Betrieb gehört, etwa bei gewerblicher Vermietung, und im Jahr nach der Anschaffung fast ausschließlich betrieblich genutzt wird (mindestens 90 %). Das gilt genauso für ein Tiny House. Bei rein privater Gelegenheitsvermietung ist der IAB nicht möglich. Ob die Voraussetzungen vorliegen, klärt dein Steuerberater.",
  },
  {
    question: "Wie viel Aufwand macht die Vermietung?",
    answer: "Beim Wohnmobil fallen Übergabe und Einweisung, Rücknahme, Reinigung, Schadensprüfung und Wartung an – entweder selbst oder über einen Vermietservice gegen Gebühr. Beim Tiny House übernimmt ein lokaler Partner Buchungen, Reinigung und Gästebetreuung; die Einnahmen werden nach Abzug der Stellplatzpacht aufgeteilt.",
  },
  {
    question: "Wie stark verlieren Wohnmobil und Tiny House an Wert?",
    answer: "Ein Wohnmobil ist ein Fahrzeug: Kilometer, Motor und häufige Fremdnutzung drücken den Wiederverkaufswert, vor allem in den ersten Jahren. Ein Tiny House steht die meiste Zeit an einem Ort und hat keinen Antrieb, verliert über die Nutzungsdauer aber ebenfalls an Wert. Konkrete Restwerte hängen von Zustand und Markt ab.",
  },
];

export default function WohnmobilVermietenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wohnmobil vermieten als Kapitalanlage? Der Vergleich mit dem Tiny House",
    description: "Einnahmen, Saison, Wertverlust, Aufwand und §7g von Wohnmobil-Vermietung und Tiny House im Vergleich, mit Rechenbeispiel.",
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
      { "@type": "ListItem", position: 3, name: "Wohnmobil vermieten als Kapitalanlage", item: URL },
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
    ["Kaufpreis", `z. B. ${eur(WM_PREIS)}`, `${eur(B.kaufpreis)} netto (On-Grid)`],
    ["Vermietung", `${WM_TAGE} Tage × ${eur(WM_TAGESPREIS)} (Beispiel)`, `${NAECHTE} Nächte × 120 € (60 % Belegung)`],
    ["Saison", "vor allem Frühjahr bis Herbst", "ganzjährig möglich, standortabhängig"],
    ["Überschuss p.a.", `ca. ${eur(WM_UEBERSCHUSS)} (~${prozent(WM_RENDITE)})`, `ca. ${eur(TH_AUSZAHLUNG)} Auszahlung (~${prozent(TH_RENDITE)})`],
    ["Eigener Aufwand", "Übergabe, Reinigung, Schäden, Wartung", "gering, Betrieb über lokale Partner"],
    ["Verschleiß", "Motor, Kilometer, Fremdfahrer", "kein Antrieb, steht an einem Ort"],
    ["Laufende Fixkosten", "Kfz-Steuer, Versicherung, TÜV, Stellplatz", "Stellplatzpacht, Versicherung"],
    ["§7g (IAB, Sonder-AfA)", "möglich bei Betrieb", "möglich bei Betrieb"],
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
            <span className="text-green-700 font-semibold">Wohnmobil vermieten</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Mobile Sachwerte 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Wohnmobil vermieten als Kapitalanlage – oder lieber ein Tiny House?
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
              <li>• <strong>Wohnmobil:</strong> ähnlicher Kaufpreis, gute Tagespreise in der Saison – aber kurze Saison, hoher Verschleiß und viel eigener Aufwand.</li>
              <li>• <strong>Tiny House:</strong> ganzjährig vermietbar, kein Antrieb, Betrieb über lokale Partner – aber ebenfalls Wertverlust und schwankende Belegung.</li>
              <li>• Steuerlich sind beide bewegliche Wirtschaftsgüter: §7g ist möglich, wenn sie zu einem Betrieb gehören.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={IMG} alt="Tiny House als Alternative zur Wohnmobil-Vermietung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 text-[15px] leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Vergleich auf einen Blick</h2>
            <p className="mb-5">
              Als Vergleichsobjekt dient ein Wohnmobil für {eur(WM_PREIS)}, vermietet an {WM_TAGE} Tagen im Jahr zu {eur(WM_TAGESPREIS)} über
              eine Vermietplattform. Das Tiny House ist ein Escape 660 On-Grid für {eur(B.kaufpreis)} netto bei 60 % Belegung und
              120 € pro Nacht. Die Wohnmobil-Werte sind gerundete Beispielannahmen, keine Marktdaten. Alle Werte sind
              Beispielrechnungen, keine Prognosen.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-gray-500 text-[11px] uppercase">Wohnmobil</th>
                    <th className="text-left p-3 font-black text-green-700 text-[11px] uppercase bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vergleich.map(([k, wm, th]) => (
                    <tr key={k}>
                      <td className="p-3 font-medium text-gray-800">{k}</td>
                      <td className="p-3 text-gray-600">{wm}</td>
                      <td className="p-3 text-gray-900 bg-green-50/40">{th}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Einnahmen: Saison gegen Ganzjahresbetrieb</h2>
            <p className="mb-4">
              Wohnmobil: {WM_TAGE} Tage × {eur(WM_TAGESPREIS)} = {eur(WM_UMSATZ)} Umsatz. Die Vermietplattform behält im Beispiel inklusive
              Mietversicherung rund 20 % ({eur(WM_PLATTFORM)}). Kfz-Steuer, Versicherung, Wartung, TÜV, Stellplatz und Reinigung
              kosten zusammen rund {eur(WM_LAUFEND)}. Übrig bleiben etwa {eur(WM_UEBERSCHUSS)} im Jahr, rund {prozent(WM_RENDITE)} auf den
              Kaufpreis – vor Wertverlust, Schäden und eigener Arbeitszeit.
            </p>
            <p className="mb-4">
              Tiny House: {NAECHTE} Nächte × 120 € = {eur(TH_UMSATZ)} Umsatz. Zuerst wird die Stellplatzpacht ({eur(PACHT)} pro Jahr)
              abgezogen, vom Rest erhält der Eigentümer 40 % – rund {eur(TH_AUSZAHLUNG)} im Jahr bzw. {eur(TH_AUSZAHLUNG / 12)} im
              Monat, etwa {prozent(TH_RENDITE)} auf den Kaufpreis vor Steuern und Versicherung.
            </p>
            <p>
              Der Hauptunterschied ist die Saison: Wohnmobile werden vor allem von Frühjahr bis Herbst gebucht, ein winterfestes Tiny
              House kann ganzjährig vermietet werden. Eigene Annahmen kannst du im{" "}
              <Link href="/rechner/rendite" className="text-green-700 font-semibold underline underline-offset-2">Rendite-Rechner</Link> prüfen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Aufwand und Verschleiß</h2>
            <p className="mb-4">
              Wer ein Wohnmobil vermietet, übergibt es an wechselnde Fahrer. Dazu gehören Einweisung, Rücknahme, Reinigung,
              Schadensprüfung und Wartung – oft am Wochenende. Kilometer, Motor und Fremdnutzung drücken den Wiederverkaufswert,
              und ein Unfall kann das Fahrzeug wochenlang aus der Vermietung nehmen.
            </p>
            <p>
              Ein Tiny House steht an einem festen Standort und hat keinen Antrieb. Buchungen, Reinigung und Gästebetreuung
              übernimmt ein lokaler Partner, der dafür einen Anteil der Einnahmen erhält. Der eigene Zeitaufwand ist gering, dafür
              bist du von der Qualität des Betreibers abhängig.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Steuern: Beide können §7g-fähig sein</h2>
            <p className="mb-4">
              Wohnmobil und Tiny House sind bewegliche Wirtschaftsgüter. Gehören sie zu einem Betrieb mit Gewinneinkünften und werden
              im Jahr nach der Anschaffung fast ausschließlich betrieblich genutzt (mindestens 90 %), sind Investitionsabzugsbetrag
              (IAB), Sonder-AfA und degressive AfA möglich. Eigene Urlaubsfahrten mit dem Mietmobil können diese Grenze schnell
              gefährden.
            </p>
            <p className="mb-4">
              Für das Tiny House ergibt sich im Beispiel ({eur(B.kaufpreis)}, {pct(B.steuersatz)}): IAB {eur(B.iab)} im Vorjahr, im
              Kaufjahr Sonder-AfA {eur(B.sonderAfa)} und degressive AfA {eur(B.degressiveAfa)} – zusammen rund{" "}
              {rund(B.steuereffektGesamt)} Steuereffekt, überwiegend als <strong>Steuerstundung</strong>: Was früh abgeschrieben wird,
              fehlt in den Folgejahren.
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
                <p className="font-bold text-gray-900 mb-2">Wohnmobil</p>
                <ul className="space-y-1.5 text-sm">
                  <li>• Kurze Saison, Leerlauf im Winter</li>
                  <li>• Unfälle und Schäden durch Mieter</li>
                  <li>• Hoher Wertverlust durch Nutzung</li>
                  <li>• Viel eigener Aufwand</li>
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
              Das <strong>Wohnmobil</strong> passt zu Anlegern, die es auch selbst nutzen möchten, Zeit für Übergaben und Pflege
              haben und die Vermietung eher als Zuverdienst sehen.
            </p>
            <p className="mb-4">
              Das <strong>Tiny House</strong> passt zu Anlegern, die einen mobilen Sachwert mit ganzjähriger Vermietung und wenig
              eigenem Aufwand suchen – und als Selbstständige mit Betrieb den §7g-Effekt nutzen wollen.
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
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">FAQ: Wohnmobil vermieten vs. Tiny House</h2>
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
