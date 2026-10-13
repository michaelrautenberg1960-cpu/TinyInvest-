import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import {
  IAB_DEFINITION,
  IAB_TINY_HOUSE_DEFINITION,
  IAB_FACTS,
  IAB_GLOSSAR,
  IAB_FAQ,
  IAB_BEISPIEL as B,
  IAB_FACTS_STAND,
  IAB_FACTS_STAND_DE,
  eur,
  pct,
} from "@/app/lib/iab-facts";

export const metadata = {
  title: "IAB Tiny House: Investitionsabzugsbetrag §7g EStG – Voraussetzungen, Zahlen & Beispiel | TinyInvest",
  description:
    "IAB Tiny House nach §7g EStG: bis zu 50 % des Kaufpreises bis zu 3 Jahre vor dem Kauf abziehen. Gewinngrenze, Fristen, Sonder-AfA, degressive AfA & Rechenbeispiel – Stand 2026.",
  keywords:
    "IAB tiny house, iab tiny house 2026, investitionsabzugsbetrag tiny house, IAB beantragen anleitung, IAB erfahrungen, tiny house steuer vorziehen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/iab-tiny-house" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "IAB Tiny House: Investitionsabzugsbetrag §7g EStG – Zahlen, Fristen & Beispiel",
    description:
      "IAB (50 % vorab) + Sonder-AfA (40 %) + degressive AfA (30 %, bis 2027): Voraussetzungen, Fristen & Rechenbeispiel für Tiny Houses – inkl. Steuerstundungs-Effekt.",
    url: "https://tinyhouse.investments/wissen/iab-tiny-house",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAB Tiny House: §7g EStG – Zahlen, Fristen & Beispiel",
    description: "IAB (50 % vorab) + Sonder-AfA (40 %) + degressive AfA (30 %, bis 2027): Voraussetzungen & Rechenbeispiel.",
  },
};

const faqItems = IAB_FAQ;

export default function IabTinyHousePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IAB Tiny House: Investitionsabzugsbetrag §7g EStG – Voraussetzungen, Zahlen & Beispiel",
    "description": "Wie der IAB nach §7g EStG bei einem Tiny House funktioniert: Definition, Kennzahlen mit Rechtsgrundlage, Fristen, Kombination mit Sonder-AfA und degressiver AfA, Rechenbeispiel.",
    "url": "https://tinyhouse.investments/wissen/iab-tiny-house",
    "datePublished": "2026-04-15",
    "dateModified": IAB_FACTS_STAND,
    "inLanguage": "de-DE",
    "about": { "@type": "DefinedTerm", "name": "Investitionsabzugsbetrag", "alternateName": "IAB" },
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/IAB Tiny House 2026 So sparst du bis zu 30.000 € vor dem Kauf.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "IAB Tiny House", "item": "https://tinyhouse.investments/wissen/iab-tiny-house" },
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

  const glossarSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossar: Investitionsabzugsbetrag & Abschreibung (§7g EStG)",
    "url": "https://tinyhouse.investments/wissen/iab-tiny-house#glossar",
    "hasDefinedTerm": IAB_GLOSSAR.map((g) => ({
      "@type": "DefinedTerm",
      name: g.term,
      description: g.definition,
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "IAB für ein Tiny House bilden: Schritt für Schritt",
    "description": "So wird der Investitionsabzugsbetrag (§7g EStG) für ein Tiny House gebildet, im Kaufjahr aufgelöst und mit Sonder-AfA und degressiver AfA kombiniert.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "IAB in der Steuererklärung bilden",
        "text": "Der IAB wird in der Steuererklärung angegeben (Anlage EÜR, Abschnitt Investitionsabzugsbeträge, bzw. elektronische Übermittlung bei Bilanzierern). Ein gesonderter Antrag beim Finanzamt ist nicht nötig. Voraussetzung: Betrieb mit max. 200.000 € Gewinn im Bildungsjahr.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Steuerentlastung im Bildungsjahr",
        "text": `Der IAB mindert den Gewinn des Bildungsjahres. Beispiel: ${eur(B.iab)} IAB bei ${pct(B.steuersatz)} Grenzsteuersatz entsprechen rund ${eur(B.steuereffektIab)} weniger Einkommensteuer (zzgl. Soli/Kirchensteuer, falls anfallend).`,
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tiny House innerhalb von 3 Jahren kaufen",
        "text": "Die Anschaffung muss bis zum Ende des dritten Wirtschaftsjahres nach der IAB-Bildung erfolgen. Im Kaufjahr wird der IAB dem Gewinn hinzugerechnet und die Anschaffungskosten werden um denselben Betrag gemindert (§7g Abs. 2 EStG).",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sonder-AfA und degressive AfA im Kaufjahr",
        "text": "Auf die geminderte Basis sind bis zu 40 % Sonder-AfA (§7g Abs. 5) und – für Anschaffungen vom 01.07.2025 bis 31.12.2027 – bis zu 30 % degressive AfA (§7 Abs. 2) möglich. Danach mindestens zwei Jahre (Kauf- und Folgejahr) zu mind. 90 % betrieblich nutzen oder vermieten.",
      },
    ],
  };

  const jsonLd = [articleSchema, breadcrumbSchema, faqSchema, glossarSchema, howToSchema];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      {/* Plain <script> statt next/script: JSON-LD muss im Server-HTML stehen, KI-Crawler führen kein JS aus. */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">IAB Tiny House</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · IAB · §7g EStG</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            IAB Tiny House: Investitionsabzugsbetrag nach §7g EStG – Voraussetzungen, Zahlen & Beispiel
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-15">15. April 2026</time>
              <span>·</span>
              <span>Stand: <time dateTime={IAB_FACTS_STAND}>{IAB_FACTS_STAND_DE}</time></span>
            </div>
          </div>

          {/* Definition – bewusst eigenständig formuliert, damit sie ohne Kontext zitierbar ist */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">Definition: Investitionsabzugsbetrag (IAB)</p>
            <p className="text-gray-800 text-[15px] leading-relaxed mb-3">{IAB_DEFINITION}</p>
            <p className="text-gray-700 text-[14px] leading-relaxed">{IAB_TINY_HOUSE_DEFINITION}</p>
          </div>

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Kombiniert mit Sonder-AfA (40 %) und – für Anschaffungen bis 31.12.2027 – degressiver AfA (30 %) lassen sich beim
            Escape 660 On-Grid ({eur(B.kaufpreis)} netto) bis Ende des Kaufjahres rund {Math.round((B.abzugBisKaufjahr / B.kaufpreis) * 100)} % des Kaufpreises
            steuerlich geltend machen. Das ist vor allem ein Liquiditätsvorteil: Die Steuer wird überwiegend in spätere Jahre verschoben.
          </p>

          {/* Kennzahlen */}
          <h2 className="text-xl font-black text-gray-900 mb-3 tracking-tight">IAB auf einen Blick</h2>
          <div className="border border-gray-100 rounded-2xl overflow-x-auto mb-8">
            <table className="w-full text-[13px] text-left">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-widest text-gray-500">
                <tr>
                  <th scope="col" className="px-4 py-2 font-bold">Kennzahl</th>
                  <th scope="col" className="px-4 py-2 font-bold">Wert</th>
                  <th scope="col" className="px-4 py-2 font-bold whitespace-nowrap">Rechtsgrundlage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {IAB_FACTS.map((f) => (
                  <tr key={f.label}>
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-800 align-top whitespace-nowrap">{f.label}</th>
                    <td className="px-4 py-3 text-gray-600 align-top">{f.value}</td>
                    <td className="px-4 py-3 text-gray-400 align-top whitespace-nowrap">{f.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rechenbeispiel */}
          <h2 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Rechenbeispiel: Escape 660 On-Grid</h2>
          <div className="border border-gray-100 rounded-2xl overflow-x-auto mb-8">
            <table className="w-full text-[13px] text-left">
              <caption className="sr-only">IAB-Rechenbeispiel für {eur(B.kaufpreis)} Netto-Kaufpreis bei {pct(B.steuersatz)} Grenzsteuersatz</caption>
              <thead className="bg-gray-50 text-[11px] uppercase tracking-widest text-gray-500">
                <tr>
                  <th scope="col" className="px-4 py-2 font-bold">Schritt</th>
                  <th scope="col" className="px-4 py-2 font-bold text-right">Abzug</th>
                  <th scope="col" className="px-4 py-2 font-bold text-right whitespace-nowrap">Steuereffekt ({pct(B.steuersatz)})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-800">IAB (50 %) im Jahr vor dem Kauf</th>
                  <td className="px-4 py-3 text-right text-gray-600">{eur(B.iab)}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">≈ {eur(B.steuereffektIab)}</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-800">Sonder-AfA (40 % von {eur(B.afaBasis)}) im Kaufjahr</th>
                  <td className="px-4 py-3 text-right text-gray-600">{eur(B.sonderAfa)}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">≈ {eur(B.steuereffektSonderAfa)}</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-800">Degressive AfA (30 % von {eur(B.afaBasis)}) im Kaufjahr</th>
                  <td className="px-4 py-3 text-right text-gray-600">{eur(B.degressiveAfa)}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">≈ {eur(B.steuereffektDegressiv)}</td>
                </tr>
                <tr className="bg-green-50">
                  <th scope="row" className="px-4 py-3 font-black text-gray-900">Summe bis Ende Kaufjahr</th>
                  <td className="px-4 py-3 text-right font-black text-gray-900">{eur(B.abzugBisKaufjahr)}</td>
                  <td className="px-4 py-3 text-right font-black text-green-700">≈ {eur(B.steuereffektGesamt)}</td>
                </tr>
              </tbody>
            </table>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-400 text-[11px]">
                Unverbindliche Beispielrechnung, keine Steuerberatung. Annahmen: Kauf im Januar (degressive AfA ist im Kaufjahr zeitanteilig), Anschaffung zwischen 01.07.2025 und 31.12.2027,
                ohne Soli/Kirchensteuer. Im Kaufjahr gleichen sich Hinzurechnung des IAB und Herabsetzung der Anschaffungskosten aus (§7g Abs. 2 EStG).
                Der Steuereffekt ist überwiegend eine Stundung: In den Folgejahren bleibt entsprechend weniger Abschreibung.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image src="/images/outside/IAB Tiny House 2026 So sparst du bis zu 30.000 € vor dem Kauf.webp" alt="IAB Tiny House 2026 – Investitionsabzugsbetrag vor dem Kauf nutzen" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["IAB 50 %", "Bis zu 40.000 € vorziehen", "3 Jahre vor Kauf", "§7g Abs. 1 EStG", "Bewegliches Wirtschaftsgut"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Was ist neu 2026 */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">IAB Tiny House 2026: Was ist neu?</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Seit 2024 beträgt die Sonder-AfA nach §7g Abs. 5 EStG 40 % statt zuvor 20 % (Wachstumschancengesetz). Für Anschaffungen vom 01.07.2025 bis 31.12.2027 ist zusätzlich die degressive AfA mit bis zu 30 % wieder zulässig (Investitionssofortprogramm). Zusammen mit dem IAB (50 % vorab) lassen sich damit bis Ende des Kaufjahres rund 85 % der Anschaffungskosten geltend machen. Das Zeitfenster für die degressive AfA endet mit Anschaffungen bis 31.12.2027.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Für Investoren, die 2026 planen: Die Lieferverfügbarkeit unserer Modelle auf Vlemmix-Trailer liegt aktuell bei 8–12 Wochen, was eine planbare Investition ermöglicht. Wer außerdem noch keinen IAB für 2025 gebildet hat, kann prüfen lassen ob das rückwirkend noch möglich ist – solange der Steuerbescheid 2025 noch änderbar ist.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "IAB §7g", pct: "50 %", desc: "bis zu 3 Jahre vorab" },
                { label: "Sonder-AfA", pct: "40 %", desc: "seit 2024 (vorher 20 %)" },
                { label: "Deg. AfA", pct: "30 %", desc: "Kauf 07/2025 – 12/2027" },
              ].map((h) => (
                <div key={h.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-2xl font-black text-green-800 mb-1">{h.pct}</p>
                  <p className="text-[11px] text-gray-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fließtext */}
          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was ist der IAB beim Tiny House?</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Der Investitionsabzugsbetrag ist ein Steuerinstrument nach § 7g des Einkommensteuergesetzes (EStG), das Betrieben erlaubt, bis zu 50 % des geplanten Kaufpreises bis zu drei Jahre vor dem Kauf gewinnmindernd abzuziehen. Er wurde zur Förderung kleiner und mittlerer Betriebe geschaffen, daher die Gewinngrenze von 200.000 €. Ein Tiny House auf einem zugelassenen Trailer ohne feste Bodenverbindung kann als bewegliches Wirtschaftsgut gelten und ist dann IAB-fähig – vorausgesetzt, es gehört zu einem Betrieb mit Gewinneinkünften, etwa einer gewerblichen Ferienvermietung. Reine Arbeitnehmer oder private Vermieter nach § 21 EStG können den IAB nicht nutzen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Funktionsweise: Steuerentlastung, bevor das Haus geliefert ist</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Das Besondere am Investitionsabzugsbetrag ist der zeitliche Vorwegeffekt. Investoren müssen nicht warten, bis das Tiny House fertiggestellt oder geliefert ist, um von den steuerlichen Vorteilen zu profitieren. Der IAB erlaubt es, bis zu 50 Prozent der voraussichtlichen Anschaffungs- und Herstellungskosten bereits in der Steuererklärung eines der drei Jahre vor dem Kauf gewinnmindernd geltend zu machen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Planen Sie beispielsweise den Kauf eines Tiny Houses für 80.000 Euro, können Sie über den IAB bis zu 40.000 Euro direkt vom zu versteuernden Einkommen abziehen. Bei einem hohen persönlichen Steuersatz führt dies sofort zu einer Steuererstattung oder einer massiven Senkung der Steuerschuld. Nach der Festsetzung des IAB verbleibt ein großzügiger gesetzlicher Zeitraum von bis zu drei Jahren, um die tatsächliche Investition zu tätigen und das Tiny House zu erwerben.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Liquiditätseffekt: Staatliche Co-Finanzierung</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Aus wirtschaftlicher Sicht wirkt der IAB wie ein zinsloses Darlehen vom Finanzamt oder eine direkte staatliche Co-Finanzierung. Die Steuerentlastung aus dem Abzug (beim Escape 660 On-Grid {eur(B.iab)} IAB, bei {pct(B.steuersatz)} Grenzsteuersatz rund {eur(B.steuereffektIab)}) fließt dem Investor als liquide Mittel zu. Dieses Geld steht sofort zur Verfügung und kann direkt als Eigenkapital für den Kauf des Tiny Houses genutzt oder anderweitig wertsteigernd angelegt werden. Weil in den Folgejahren entsprechend weniger Abschreibung übrig bleibt, wird die Steuer überwiegend verschoben, nicht erlassen – der Vorteil liegt in der früheren Liquidität und gegebenenfalls in einem niedrigeren Steuersatz in späteren Jahren.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Voraussetzungen und Kombination mit der Sonder-AfA</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Um den IAB erfolgreich nutzen zu können, müssen bestimmte steuerliche Rahmenbedingungen erfüllt sein. Die wichtigste Grenze betrifft den Gewinn des Investors: Der steuerliche Gewinn darf im Jahr der IAB-Bildung die Grenze von 200.000 Euro nicht überschreiten. Zudem muss das Tiny House im Jahr der Anschaffung und im darauffolgenden Jahr nachweislich zu mindestens 90 Prozent betrieblich bzw. zur gewerblichen Vermietung genutzt werden. Eine private Eigennutzung ist in diesem Zeitraum nahezu vollständig ausgeschlossen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Der Steuerhebel endet jedoch nicht mit dem IAB. Im Jahr der tatsächlichen Anschaffung wird der zuvor gebildete IAB gewinnerhöhend aufgelöst, während gleichzeitig die Anschaffungskosten des Tiny Houses um genau diesen Betrag gemindert werden. Auf Basis dieses reduzierten Restwertes kann der Investor sofort eine <strong className="text-gray-900">Sonderabschreibung (Sonder-AfA) von bis zu 40 Prozent</strong> geltend machen — durch das Wachstumschancengesetz für Anschaffungen ab 2024 von 20 % auf 40 % angehoben. Daneben läuft die reguläre AfA: für Anschaffungen vom 01.07.2025 bis 31.12.2027 wahlweise degressiv mit bis zu 30 %, sonst linear über die Nutzungsdauer.
              </p>
            </div>

          </div>

          {/* Image Break */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House Kapitalanlage Sachwert" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Strategischer Einsatz zur Steueroptimierung</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Der IAB für Tiny Houses ist ein ideales Instrument, um außergewöhnliche steuerliche Belastungen gezielt abzufedern. Typische Anwendungsszenarien sind Jahre, in denen Investoren durch Sonderzahlungen, Abfindungen, Boni, erfolgreiche Krypto-Gewinne oder den Verkauf von Unternehmensanteilen und Immobilien in eine extrem hohe Steuerprogression rutschen. Durch den gezielten Einsatz des IAB lässt sich das zu versteuernde Einkommen in genau diesen Spitzenjahren drastisch senken.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Gepaart mit einem professionellen Betreibermodell, das die touristische Vermietung mit geringem Aufwand über lokale Partner übernehmen, wandeln Anleger so eine drohende Steuerlast in einen renditestarken, inflationsgeschützten Sachwert um.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-green-700 font-bold text-sm mb-1">Steuerlicher Hinweis</p>
              <p className="text-green-800 text-[13px] leading-relaxed">
                Alle Steuereffekte sind Beispielrechnungen. Die individuelle Steuerersparnis hängt von der persönlichen Einkommenssituation und dem Grenzsteuersatz ab. Eine Beratung durch einen §7g-erfahrenen Steuerberater ist vor der Investition empfohlen.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House als Kapitalanlage →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="glossar" className="text-xl font-black text-gray-900 mb-6 tracking-tight">Glossar: IAB & Abschreibung</h2>
          <dl className="bg-white border border-gray-100 rounded-2xl divide-y divide-gray-100 mb-14">
            {IAB_GLOSSAR.map((g) => (
              <div key={g.term} className="p-5">
                <dt className="font-black text-gray-900 text-[14px] mb-1">{g.term}</dt>
                <dd className="text-gray-600 text-[13px] leading-relaxed">{g.definition}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: IAB für Tiny Houses</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Tiny House mit IAB kaufen: Unterlagen & Liefertermin</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir senden dir Produktunterlagen, Preise und unser allgemeines Steuer-Factsheet zum Escape 660, das du mit deinem Steuerberater besprechen kannst – kostenlos und unverbindlich. Ob und wie der IAB in deinem Fall greift, prüft dein Steuerberater.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Unterlagen anfordern →</ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB-Rechner →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
