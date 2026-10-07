import { BASE_OG } from "@/app/lib/og";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModalButton from "../components/ModalButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tiny House als Kapitalanlage & Investment 2026: Rendite & IAB | TinyInvest",
  description:
    "Tiny House als Investment ab 74.700 €: ~793 €/Monat Beispiel-Auszahlung, ~12,7 % vor Steuern, §7g-Steuereffekt ~26.700 €. Kosten, Risiken & Rechenbeispiel.",
  keywords:
    "tiny house kapitalanlage, tiny house als kapitalanlage, tiny house investment, tiny house kaufen investment, tiny house investieren 2026, tiny house investor werden, §7g investment",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House als Kapitalanlage 2026 – Der Investment-Guide",
    description:
      "Lohnt sich ein Tiny House als Kapitalanlage? Preise, Rendite, §7g-Steuereffekt, 4-Schritte-Prozess und Risiken. Über lokale Partner bewirtschaftet.",
    url: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
  },
};

const faqItems = [
  {
    question: "Lohnt sich ein Tiny House als Kapitalanlage?",
    answer:
      "Für viele Investoren ja – vor allem, wenn sie einen hohen Grenzsteuersatz haben, die §7g-Instrumente nutzen können und das Kapital mehrere Jahre gebunden lassen. Dann kommen laufende Mieteinnahmen und ein früher Steuereffekt zusammen. Nicht geeignet ist das Modell für Anleger, die maximale Sicherheit suchen oder das Geld kurzfristig brauchen. Die Rendite hängt stark von Belegung und Standort ab und ist nicht garantiert.",
  },
  {
    question: "Wie viel Rendite ist realistisch?",
    answer:
      "In unserer Beispielrechnung (On-Grid, 74.700 € netto, ~120 €/Nacht) hängt die Auszahlung direkt an der Belegung: bei 45 % Belegung ca. 574 €/Monat (~9,2 % p.a.), bei 60 % ca. 793 €/Monat (~12,7 % p.a.), bei 75 % ca. 1.012 €/Monat (~16,3 % p.a.) – jeweils nach Stellplatzpacht (2.500 €/Jahr), vor Steuern und Versicherung. Das sind Projektionen, keine zugesagten Werte.",
  },
  {
    question: "Brauche ich ein Grundstück?",
    answer:
      "Nein. TinyInvest vermittelt einen verifizierten Host und Standort über das lokale Partner Netzwerk. Kein Grundstückskauf, keine Grunderwerbsteuer, keine Notarkosten.",
  },
  {
    question: "Wie wird ein Tiny House steuerlich behandelt?",
    answer:
      "Ein Tiny House auf einem zugelassenen Trailer gilt als bewegliches Wirtschaftsgut, nicht als Immobilie. Es wird über eine Nutzungsdauer von 8 Jahren abgeschrieben statt über 50 Jahre. Bei betrieblicher Nutzung kommen die Instrumente aus §7g EStG in Frage: Investitionsabzugsbetrag (IAB, bis 50 % im Vorjahr), Sonder-AfA (40 %) und degressive AfA (30 %) auf den Restwert im Kaufjahr. Bei Regelbesteuerung ist die Vorsteuer (14.193 € beim On-Grid-Modell) erstattungsfähig. Die Mieteinnahmen sind steuerpflichtig. Diese Angaben dienen der allgemeinen Orientierung, ob und wie sie in deinem Fall greifen, klärt dein Steuerberater.",
  },
  {
    question: "Wie hoch ist der Steuereffekt in Zahlen?",
    answer:
      "Beim On-Grid-Modell (74.700 € netto) und 42 % Grenzsteuersatz ergibt sich rechnerisch ein Steuereffekt von rund 26.700 € in Vorjahr und Kaufjahr: IAB ≈ 15.700 € im Vorjahr, Sonder-AfA und degressive AfA ≈ 11.000 € im Kaufjahr. Die gebundene Liquidität sinkt damit auf rund 48.000 €. Wichtig: Ein großer Teil davon ist eine Steuerstundung, weil in den Folgejahren weniger Abschreibung übrig bleibt.",
  },
  {
    question: "Für wen lohnt sich das Investment am meisten?",
    answer:
      "Am stärksten profitieren Freiberufler, Selbstständige und GmbH-Inhaber, die den IAB im Vorjahr bilden können. Angestellte können durch eine einfache Nebengewerbe-Anmeldung ebenfalls den vollen §7g-Hebel nutzen — inklusive IAB. Die Anmeldung kostet 15–65 € und ist in den meisten Gemeinden online möglich. Mit Nebengewerbe stehen alle drei §7g-Instrumente offen: IAB, Sonder-AfA und degressive AfA.",
  },
  {
    question: "Kann ich mehrere Tiny Houses kaufen?",
    answer:
      "Ja. Da der Einstiegspreis bei 74.700 € netto liegt, können Investoren mit dem Kapital einer einzigen Eigentumswohnung (300.000–500.000 €) 4–6 Tiny Houses kaufen und ihr Risiko auf mehrere Standorte und Betreiber verteilen. Jedes Objekt hat einen eigenen §7g-Effekt und generiert eigenständige Mieteinnahmen.",
  },
  {
    question: "Was kostet ein Tiny House als Kapitalanlage?",
    answer:
      "Das Escape 660 kostet als On-Grid-Modell 74.700 € netto (88.893 € brutto) und als Off-Grid-Modell 83.400 € netto (99.246 € brutto). Der Komplettpreis enthält das voll ausgestattete Haus, Transport ab Werk zum Standort, Innenausstattung sowie Grundstücksvorbereitung und Aufstellung vor Ort. Grundstückskauf, Grunderwerbsteuer und Notarkosten fallen nicht an.",
  },
  {
    question: "Ist ein Tiny House eine sichere Kapitalanlage?",
    answer:
      "Ein Tiny House ist ein Sachwert in deinem Eigentum – kein Fondsanteil und kein Nachrangdarlehen. Es kann versetzt, verkauft oder neu betrieben werden. Risikofrei ist es trotzdem nicht: Belegung, Betreiberqualität, Wiederverkaufswert und mögliche Änderungen im Steuerrecht beeinflussen die Rendite. Wer mehrere Häuser an verschiedenen Standorten kauft, streut dieses Risiko.",
  },
  {
    question: "Welche Bank finanziert ein Tiny House als Kapitalanlage?",
    answer:
      "Eine klassische Baufinanzierung greift meist nicht, weil es kein Grundstück und keinen Grundbucheintrag gibt. Üblich sind stattdessen ein Investitionskredit über die Hausbank (für Selbstständige und Gewerbetreibende) oder ein Ratenkredit. Als Sicherheit dient oft das Haus selbst per Sicherungsübereignung. Viele Investoren kombinieren den Kredit mit Eigenkapital und nutzen die IAB-Erstattung aus dem Vorjahr als zusätzliches Eigenkapital. Die passende Struktur hängt von Einkommen und Bonität ab.",
  },
];

export default function TinyHouseKapitalanlagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House als Kapitalanlage 2026: Lohnt es sich wirklich?",
    mainEntityOfPage: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: { "@type": "Organization", name: "TinyInvest", logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" } },
    datePublished: "2026-04-13",
    dateModified: "2026-10-06",
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/tiny-house-investor-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Tiny House als Kapitalanlage", item: "https://tinyhouse.investments/tiny-house-als-kapitalanlage" },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House als Kapitalanlage</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Tiny House als Kapitalanlage 2026:<br className="hidden sm:block" /> Lohnt es sich wirklich?
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-10-06">Aktualisiert am 6. Oktober 2026</time>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { value: "Ab 74.700 €", label: "Einstieg (netto)" },
              { value: "~12,7 %", label: "Rendite p.a. (Beispiel)" },
              { value: "40 %", label: "Investor-Anteil" },
              { value: "0 €", label: "Kaufnebenkosten" },
            ].map((s) => (
              <div key={s.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                <p className="font-data text-lg font-black text-green-700 leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-2xl">
            Ein Tiny House als Kapitalanlage heißt: Du kaufst ein physisches Objekt – keinen Fondsanteil. Ein lokaler Partner vermietet es für dich.
            Du erhältst monatlich 40 % der Einnahmen nach Abzug der Stellplatzpacht. Über §7g EStG ergibt sich in Vorjahr und Kaufjahr rechnerisch ein Steuereffekt von rund 26.700 € (On-Grid, 42 % Steuersatz, Beispielrechnung).
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3 rounded-full text-sm transition-all shadow-sm">
              Kostenlose Beratung anfragen →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-all">
              Aktuelle Projekte ansehen →
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <Image
              src="/images/outside/tiny-house-investor-aussen.webp"
              alt="Tiny House als Kapitalanlage – Außenansicht Investment-Objekt"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      {/* ── AUF EINEN BLICK ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight">Tiny House als Kapitalanlage auf einen Blick</h2>
            <ul className="space-y-2.5">
              {[
                ["Kaufpreis", "ab 74.700 € netto (On-Grid) bzw. 83.400 € netto (Off-Grid), inklusive Transport und Aufstellung"],
                ["Rendite", "ca. 793 €/Monat bzw. ~12,7 % p.a. vor Steuern bei 60 % Belegung, nach Stellplatzpacht (Beispielrechnung)"],
                ["Abschreibung", "als bewegliches Wirtschaftsgut über 8 Jahre statt 50 Jahre wie bei Gebäuden"],
                ["Investitionsabzugsbetrag", "bis zu 50 % der Kosten schon im Jahr vor dem Kauf absetzbar (§7g EStG)"],
                ["Sonder-AfA", "40 % Sonder-AfA plus 30 % degressive AfA im Kaufjahr"],
                ["Vorsteuer", "bei Regelbesteuerung erstattungsfähig"],
                ["Betrieb", "ein lokaler Partner vermietet, reinigt und betreut – du erhältst 40 % der Einnahmen nach Pacht"],
                ["Risiken", "Belegung, Betreiber, Wertverlust und Änderungen im Steuerrecht"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-2 text-[14px] text-gray-700 leading-relaxed">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-gray-900">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-12 mb-4 tracking-tight">Was bedeutet „Tiny House als Kapitalanlage“?</h2>
          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Wer ein Tiny House als Kapitalanlage oder Investment kauft, wird Eigentümer eines kleinen, vollständig ausgestatteten Ferienhauses auf einem zugelassenen Trailer. Das Haus wird nicht selbst bewohnt, sondern an Feriengäste vermietet. Ein Betreiber vor Ort kümmert sich um Buchungen, Reinigung und Gäste, der Eigentümer erhält einen festen Anteil der Einnahmen. Wirtschaftlich ist das näher an einer Ferienwohnung als an einer klassischen Mietwohnung – mit dem Unterschied, dass weder Grundstück noch Grundbuch im Spiel sind.
            </p>
            <p>
              Genau dieser Punkt macht das Modell steuerlich interessant. Weil das Haus nicht fest mit dem Boden verbunden ist, gilt es nicht als Immobilie, sondern als bewegliches Wirtschaftsgut – vergleichbar mit einem Wohnmobil oder einer Maschine. Statt einer Gebäudeabschreibung über 50 Jahre gilt eine Nutzungsdauer von 8 Jahren, und bei betrieblicher Nutzung kommen die Instrumente aus §7g EStG in Frage: Investitionsabzugsbetrag, Sonder-AfA und degressive AfA.
            </p>
            <p>
              Wichtig ist die Abgrenzung zu Produkten, die ähnlich klingen: Bei einem Tiny House als Kapitalanlage kaufst du keinen Fondsanteil, kein Nachrangdarlehen und keine Crowdinvesting-Beteiligung, sondern ein konkretes Haus mit Fahrzeugbrief, das dir gehört. Es kann vermietet, versetzt, verkauft oder im Notfall vom Betreiber herausverlangt werden. Dieser direkte Zugriff auf den Sachwert ist der wichtigste Unterschied zu vielen Beteiligungsmodellen am Markt.
            </p>
            <p>
              Auf dieser Seite findest du alles, was du für eine Entscheidung brauchst: was ein Tiny House als Kapitalanlage kostet, welche Rendite realistisch ist, wie die Steuervorteile funktionieren, wie es sich gegen eine Eigentumswohnung schlägt, wie das Betreibermodell aufgebaut ist und welche Risiken du kennen solltest.
            </p>
          </div>
        </div>
      </section>

      {/* ── ON-GRID VS. OFF-GRID ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Preise 2026</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Was kostet ein Tiny House als Kapitalanlage?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Das Escape 660 gibt es in zwei Varianten: On-Grid und Off-Grid. Beide sind §7g-fähig und werden zum Festpreis inklusive Transport und Aufstellung geliefert. Grundstückskauf, Grunderwerbsteuer und Notar fallen nicht an.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Modell</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Netto</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">MwSt.</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Brutto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Escape 660 On-Grid", "74.700 €", "14.193 €", "88.893 €"],
                    ["Escape 660 Off-Grid", "83.400 €", "15.846 €", "99.246 €"],
                  ].map(([modell, netto, mwst, brutto]) => (
                    <tr key={modell}>
                      <td className="p-4 font-medium text-gray-700">{modell}</td>
                      <td className="p-4 text-right font-data font-bold text-green-700">{netto}</td>
                      <td className="p-4 text-right font-data text-gray-500">{mwst}</td>
                      <td className="p-4 text-right font-data text-gray-500">{brutto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-[15px] mb-2">On-Grid</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Günstigster Einstieg mit der höchsten Rendite auf den Kaufpreis. Setzt einen vorhandenen Netzanschluss am Standort voraus – das prüfen wir pro Grundstück vor der Bestellung.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-[15px] mb-2">Off-Grid</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Solarbetrieb. Off-Grid-Modelle sind flexibler in der Standortwahl – sinnvoll, wenn der Wunschstandort keinen Netzanschluss hat oder du dir spätere Standortwechsel offenhalten willst.
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-[15px] leading-relaxed">
            <strong className="text-gray-900">Im Komplettpreis enthalten:</strong> voll ausgestattetes Haus mit Klimaanlage und Kassettentoilette, Transport ab Werk zum Standort, Innenausstattung (Bettwäsche, Geschirr, Wechselwäsche), Schlafsofa, Tisch und Stühle sowie Grundstücksvorbereitung und Vor-Ort-Service (Wasser- und Abwasseranschluss, Aufstellung, Bodenanpassung).
          </p>

          <div className="mt-8 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Netto, brutto und Vorsteuer</h3>
            <p>
              Für Investoren ist in der Regel der Nettopreis entscheidend. Wer das Tiny House unternehmerisch vermietet und zur Regelbesteuerung optiert, kann sich die Umsatzsteuer aus dem Kaufpreis als Vorsteuer vom Finanzamt erstatten lassen – beim On-Grid-Modell sind das 14.193 €, beim Off-Grid-Modell 15.846 €. Im Gegenzug wird auf die Übernachtungseinnahmen Umsatzsteuer fällig. Wer die Kleinunternehmerregelung nutzt, kann keine Vorsteuer ziehen und rechnet mit dem Bruttopreis.
            </p>
            <h3 className="text-lg font-black text-gray-900 tracking-tight pt-2">Warum es keine Kaufnebenkosten gibt</h3>
            <p>
              Bei einer Eigentumswohnung kommen zum Kaufpreis Grunderwerbsteuer (je nach Bundesland 3,5–6,5 %), Notar und Grundbuch (rund 2 %) und häufig eine Maklerprovision hinzu. Bei einer 300.000-€-Wohnung sind das schnell 25.000–35.000 €, die sofort weg sind und nie Rendite bringen. Ein Tiny House auf einem Trailer ist rechtlich keine Immobilie: Es wird ohne Notar gekauft, es fällt keine Grunderwerbsteuer an und es gibt keinen Grundbucheintrag. Der Kaufpreis fließt damit vollständig in das Objekt, das später Einnahmen erzielt.
            </p>
            <h3 className="text-lg font-black text-gray-900 tracking-tight pt-2">On-Grid oder Off-Grid – was rechnet sich besser?</h3>
            <p>
              Rein rechnerisch bringt das On-Grid-Modell die höhere Rendite auf den Kaufpreis, weil es bei gleichen Einnahmen 8.700 € günstiger ist. Es setzt allerdings einen vorhandenen Netzanschluss am Standort voraus. Das ist nicht überall gegeben und wird deshalb für jedes Grundstück vor der Bestellung geprüft. Off-Grid-Modelle sind flexibler in der Standortwahl. Das kann sich lohnen, wenn ein besonders attraktiver Standort keinen Netzanschluss hat oder du dir einen späteren Standortwechsel offenhalten willst.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAUFENDE KOSTEN ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kostentransparenz</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Laufende Kosten: Was nach dem Kauf anfällt
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Kaufnebenkosten wie Notar oder Grunderwerbsteuer gibt es nicht. Ganz ohne laufende Kosten ist aber auch ein Tiny House nicht – hier die vollständige Aufteilung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-[15px] mb-3">Wird aus den Mieteinnahmen bezahlt</h3>
              <ul className="space-y-2">
                {[
                  "Stellplatzpacht (max. 2.500 €/Jahr) – vor der Aufteilung",
                  "Reinigung und Check-in",
                  "Gästebetreuung und Kommunikation",
                  "Laufende Wartung vor Ort",
                  "Buchung, Vermarktung und monatliche Abrechnung",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] text-gray-600">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-400 mt-4 border-t border-gray-50 pt-3">Nach Abzug der Pacht: Host 45 %, Plattform 15 %, dir bleiben 40 %.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-[15px] mb-3">Trägst du als Eigentümer</h3>
              <ul className="space-y-2">
                {[
                  "Versicherung (Kasko/Haftpflicht): typisch 500–800 €/Jahr",
                  "Steuerberatung für Gewinnermittlung und §7g",
                  "Rücklage für größere Reparaturen (empfohlen)",
                  "Einkommensteuer auf die Mieteinnahmen",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] text-gray-600">
                    <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-400 mt-4 border-t border-gray-50 pt-3">Die Versicherung ist in der 5-Jahres-Rechnung unten bereits abgezogen.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-gray-700 text-[15px] leading-relaxed max-w-3xl">
            <p>
              Von den Mieteinnahmen wird zuerst die Pacht für den Stellplatz abgezogen – maximal 2.500 € im Jahr. Der Rest wird aufgeteilt: Der Host vor Ort erhält 45 %, die Plattform 15 %, dir als Eigentümer bleiben 40 %. Das wirkt auf den ersten Blick wenig. Entscheidend ist aber, was in diesen 60 % bereits enthalten ist: Reinigung, Check-in, Gästekommunikation, laufende Wartung, Vermarktung und Abrechnung. Du bekommst keine separaten Rechnungen für Pacht, Reinigung oder Verwaltung – alles läuft über die Einnahmen und ist in unseren Renditezahlen bereits abgezogen.
            </p>
            <p>
              Was bei dir als Eigentümer bleibt, ist überschaubar und gut planbar: eine Versicherung für das Haus als bewegliches Wirtschaftsgut, die Kosten für deinen Steuerberater und eine Rücklage für größere Reparaturen, die über die laufende Wartung hinausgehen. Diese Kosten sind bei betrieblicher Nutzung Betriebsausgaben und mindern deinen steuerpflichtigen Gewinn. Wir empfehlen, bei der Kalkulation konservativ zu rechnen und einen kleinen Puffer für unvorhergesehene Ausgaben einzuplanen.
            </p>
          </div>
        </div>
      </section>

      {/* ── CASHFLOW-BEISPIEL ── */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-semibold text-xs uppercase tracking-widest">Rechenbeispiel</span>
            <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
              Welche Rendite bringt ein Tiny House?
            </h2>
            <p className="text-gray-400 text-sm mt-2">Escape 660 On-Grid · 74.700 € netto · 60 % Belegung · ~120 €/Nacht</p>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "Monatsumsatz (219 Nächte ÷ 12 × 120 €)", value: "2.190 €", bold: false },
              { label: "Stellplatzpacht (2.500 €/Jahr ÷ 12)", value: "– 208 €", bold: false },
              { label: "Host-Anteil (45 % vom Rest)", value: "– 892 €", bold: false },
              { label: "Plattform-Fee (15 % vom Rest)", value: "– 297 €", bold: false },
              { label: "💰 Investor-Auszahlung (40 % vom Rest)", value: "793 €/Monat", bold: true },
              { label: "Rendite auf Kaufpreis (vor Steuer)", value: "~12,7 % p.a.", bold: false },
              { label: "Nach Versicherung (~650 €/Jahr)", value: "~11,9 % p.a.", bold: false },
              { label: "§7g-Steuereffekt (Vorjahr + Kaufjahr, 42 %)", value: "≈ 26.700 €", bold: true },
            ].map((row) => (
              <div key={row.label} className={`flex justify-between py-3 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}>
                <span>{row.label}</span>
                <span className="font-data">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Kaufpreis</p>
              <p className="font-data text-xl font-black text-white">74.700 €</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Nach Steuereffekt</p>
              <p className="font-data text-xl font-black text-green-400">≈ 48.000 €</p>
            </div>
            <div className="bg-green-600 rounded-xl p-4 text-center">
              <p className="text-green-200 text-[10px] mb-1">Rendite vor Steuern</p>
              <p className="font-data text-xl font-black text-white">~12,7 %</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 text-center mb-6">
            ⚠ Projektion auf Basis historischer Daten – keine Garantie. Steuereffekt vereinfacht (IAB ≈ 15.700 € im Vorjahr, Sonder-AfA + degressive AfA ≈ 11.000 € im Kaufjahr).
          </p>

          <div className="text-center">
            <Link href="/konfigurator" className="text-green-400 font-semibold text-[13px] hover:underline">
              → Preis für deine Variante im Tiny House Konfigurator berechnen
            </Link>
          </div>
        </div>
      </section>

      {/* ── RENDITE-FAKTOREN ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Einflussfaktoren</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Wovon hängt die Rendite eines Tiny House ab?
          </h2>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Belegung</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Nächte/Jahr</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Auszahlung/Monat</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Rendite p.a.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["45 %", "164", "≈ 574 €", "~9,2 %"],
                    ["60 %", "219", "≈ 793 €", "~12,7 %"],
                    ["75 %", "274", "≈ 1.012 €", "~16,3 %"],
                  ].map(([b, n, a, r]) => (
                    <tr key={b}>
                      <td className="p-4 font-medium text-gray-700">{b}</td>
                      <td className="p-4 text-right font-data text-gray-500">{n}</td>
                      <td className="p-4 text-right font-data text-gray-700">{a}</td>
                      <td className="p-4 text-right font-data font-bold text-green-700">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-gray-400 px-4 pb-4">On-Grid, 74.700 € netto, ~120 €/Nacht, nach 2.500 € Stellplatzpacht, 40 % Investor-Anteil, vor Steuern und Versicherung.</p>
          </div>

          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Die wichtigste Stellschraube ist die <strong className="text-gray-900">Belegung</strong>. Weil die Fixkosten für dich als Eigentümer gering sind, wirkt jede zusätzlich vermietete Nacht fast vollständig auf deine Auszahlung durch. Zwischen 45 % und 75 % Belegung liegen im Beispiel rund 7 Prozentpunkte Rendite. Die Pacht ist dagegen ein fester Betrag und fällt bei niedriger Belegung stärker ins Gewicht. Deshalb ist die Frage nach dem Standort wichtiger als jede Ausstattungsoption.
            </p>
            <p>
              Der zweite Faktor ist der <strong className="text-gray-900">Nachtpreis</strong>. Er hängt von Lage, Saison, Ausstattung und Bewertungen ab. Tiny Houses in Naturlage, an Seen, an der Küste oder in Wandergebieten erzielen in der Hauptsaison deutlich höhere Preise als in der Nebensaison. Ein Ganzjahresstandort mit Wochenendnachfrage aus nahegelegenen Städten glättet die Saisonalität und stabilisiert die Einnahmen.
            </p>
            <p>
              Drittens zählt die <strong className="text-gray-900">Qualität des Betreibers</strong>. Gute Fotos, schnelle Antworten, saubere Übergaben und gepflegte Außenbereiche führen zu besseren Bewertungen – und gute Bewertungen zu höherer Sichtbarkeit auf Buchungsplattformen. Bei einem Tiny House als Kapitalanlage kaufst du deshalb immer auch die Arbeit des Hosts mit. Prüfe vor dem Kauf, wie lange der Standort schon läuft und welche Belegung dort in der Vergangenheit erreicht wurde.
            </p>
            <p>
              Und schließlich der <strong className="text-gray-900">Steuereffekt</strong>, der nicht in der laufenden Rendite steckt, sondern zusätzlich wirkt. Er verbessert vor allem die ersten beiden Jahre und ist abhängig von deinem persönlichen Steuersatz. Deshalb weisen wir ihn immer getrennt aus und rechnen die laufende Rendite vor Steuern – so bleibt sie mit anderen Anlagen vergleichbar.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5-JAHRES-RECHNUNG ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Langfristig gerechnet</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            5-Jahres-Rechnung: Was nach fünf Jahren übrig bleibt
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Gleiche Annahmen wie oben (On-Grid, 60 % Belegung, 42 % Grenzsteuersatz). Vereinfachte Liquiditätsbetrachtung.
          </p>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            {[
              { label: "Kaufpreis (netto)", value: "– 74.700 €", bold: false },
              { label: "Investor-Auszahlungen (5 × 9.512 €)", value: "+ 47.560 €", bold: false },
              { label: "Versicherung (5 × ~650 €)", value: "– 3.250 €", bold: false },
              { label: "§7g-Steuereffekt (Vorjahr + Kaufjahr)", value: "+ 26.700 €", bold: false },
              { label: "Saldo nach 5 Jahren (vor Steuern auf die Einnahmen)", value: "≈ – 3.700 €", bold: true },
              { label: "Zusätzlich: Restwert des Hauses", value: "abhängig von Zustand & Markt", bold: false },
            ].map((row) => (
              <div key={row.label} className={`flex justify-between gap-4 py-3 border-b border-gray-200 last:border-0 ${row.bold ? "text-green-700 font-bold text-base" : "text-gray-600 text-[13px]"}`}>
                <span>{row.label}</span>
                <span className="font-data text-right shrink-0">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Nach fünf Jahren ist der Kaufpreis in dieser Rechnung über Auszahlungen und Steuereffekt zu rund 95 % wieder hereingeholt – und das Haus gehört dir weiterhin. Sein Restwert kommt noch hinzu: Es kann weiter vermietet, an einen anderen Standort versetzt oder verkauft werden. Ab dem sechsten Jahr arbeitet jede Auszahlung als Überschuss.
            </p>
            <p>
              Ehrlich dazu gehört: Die Mieteinnahmen sind steuerpflichtig, und der §7g-Effekt ist zum großen Teil eine Steuerstundung. Wie viel nach Steuern bleibt, hängt von deinem Steuersatz in den Folgejahren ab. Genau deshalb lohnt sich das Modell vor allem für Investoren, deren Steuersatz heute hoch ist.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEUERVORTEILE ── */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">§7g EStG</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 tracking-tight">Steuervorteile: IAB, Sonder-AfA &amp; Abschreibung</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Nicht jedes Investment passt zu jedem Investor. Ein Tiny House als Kapitalanlage ist besonders attraktiv für Steuerpflichtige, die aktiv Steuern optimieren wollen — Freiberufler, Selbstständige und GmbH-Inhaber, die den <strong className="text-gray-900">Investitionsabzugsbetrag (IAB)</strong> nutzen können, profitieren von bis zu 50 % Vorzieheffekt bereits im Jahr vor dem Kauf. Angestellte können über ein Nebengewerbe dieselben Instrumente nutzen.
          </p>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Zeitpunkt</th>
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Instrument</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-right">Effekt (On-Grid, 42 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Vorjahr", "Investitionsabzugsbetrag: 50 % von 74.700 € = 37.350 €", "≈ 15.700 €"],
                    ["Kaufjahr", "Sonder-AfA 40 % + degressive AfA 30 % auf 37.350 €", "≈ 11.000 €"],
                    ["Kaufjahr", "Vorsteuer bei Regelbesteuerung", "14.193 €"],
                    ["Folgejahre", "Rest-AfA über die Nutzungsdauer von 8 Jahren", "geringer"],
                    ["Laufend", "Versicherung, Steuerberatung u. Ä. als Betriebsausgaben", "je nach Kosten"],
                  ].map(([zeit, instrument, effekt], i) => (
                    <tr key={i}>
                      <td className="p-4 font-medium text-gray-700">{zeit}</td>
                      <td className="p-4 text-gray-500">{instrument}</td>
                      <td className="p-4 text-right font-data font-bold text-green-700">{effekt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Der entscheidende Unterschied zu klassischen Immobilien: Tiny Houses auf zertifizierten Trailern sind <strong className="text-gray-900">bewegliche Wirtschaftsgüter</strong> — kein Grundbucheintrag, keine Grunderwerbsteuer, kein Notar. Das öffnet steuerliche Türen, die bei jeder Eigentumswohnung verschlossen bleiben. Wie die einzelnen Instrumente genau wirken, zeigt die{" "}
            <Link href="/steuervorteil" className="text-green-700 font-semibold hover:underline">§7g-Steueranalyse mit Rechner →</Link>
          </p>

          <h3 className="text-lg font-black text-gray-900 tracking-tight pt-4">Der Investitionsabzugsbetrag (IAB)</h3>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Mit dem Investitionsabzugsbetrag kannst du bis zu 50 % der voraussichtlichen Anschaffungskosten schon in dem Jahr gewinnmindernd abziehen, bevor du das Tiny House kaufst. Voraussetzung ist ein Betrieb mit einem Gewinn von höchstens 200.000 € im Jahr der Bildung. Die Investition muss innerhalb von drei Jahren erfolgen, sonst wird der Abzug rückwirkend aufgehoben und die Steuer mit Zinsen nachgezahlt. Im Kaufjahr wird der IAB dem Gewinn wieder hinzugerechnet, gleichzeitig können die Anschaffungskosten um denselben Betrag gemindert werden – der Effekt ist also vor allem ein zeitlicher Vorzieheffekt.
          </p>

          <h3 className="text-lg font-black text-gray-900 tracking-tight pt-2">Sonder-AfA und degressive AfA</h3>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Im Kaufjahr kannst du zusätzlich zur regulären Abschreibung eine Sonderabschreibung von bis zu 40 % geltend machen. Dafür muss das Haus im Kaufjahr und im Folgejahr (fast) ausschließlich betrieblich genutzt werden und in deinem Betrieb verbleiben – eine Vermietung an Feriengäste über den Betreiber erfüllt das in der Regel, eine private Nutzung über 10 % hinaus nicht. Für bewegliche Wirtschaftsgüter, die zwischen Juli 2025 und Ende 2027 angeschafft werden, ist außerdem die degressive Abschreibung von 30 % möglich. Beide Instrumente wirken auf die um den IAB geminderten Anschaffungskosten.
          </p>

          <h3 className="text-lg font-black text-gray-900 tracking-tight pt-2">Steuerersparnis oder Steuerstundung?</h3>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Ehrlich gerechnet ist ein großer Teil des §7g-Effekts eine Steuerstundung: Was du heute abschreibst, fehlt dir in den Folgejahren als Abschreibung. Trotzdem ist der Effekt wertvoll. Erstens steht dir die Liquidität früher zur Verfügung und kann bereits arbeiten. Zweitens sparst du echte Steuern, wenn dein Steuersatz in den Folgejahren niedriger ist als heute – etwa beim Übergang in den Ruhestand, nach einem besonders starken Geschäftsjahr oder bei schwankenden Einkünften als Selbstständiger.
          </p>

          <h3 className="text-lg font-black text-gray-900 tracking-tight pt-2">Umsatzsteuer bei der Vermietung</h3>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Die kurzfristige Vermietung an Feriengäste unterliegt dem ermäßigten Umsatzsteuersatz von 7 %. Wer zur Regelbesteuerung optiert, führt diese Umsatzsteuer ab und kann im Gegenzug die Vorsteuer aus dem Kaufpreis und den laufenden Kosten erstattet bekommen. Ob das für dich günstiger ist als die Kleinunternehmerregelung, hängt von deinen übrigen Umsätzen ab und sollte mit deinem Steuerberater geklärt werden.
          </p>
        </div>
      </section>

      {/* ── FÜR WEN? ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Profile</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Für wen lohnt sich ein Tiny House als Kapitalanlage?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            §7g greift nur unter bestimmten Voraussetzungen. Je nach Einkommensart variiert der optimale Hebel — hier die drei häufigsten Profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🧑‍💼",
                label: "Freiberufler & Selbstständige",
                badge: "Maximaler Hebel",
                badgeColor: "bg-green-100 text-green-700",
                points: [
                  "IAB voll nutzbar (Vorjahr)",
                  "Sonder-AfA 40 % im Kaufjahr",
                  "Degressive AfA 30 % zusätzlich",
                  "Bis zu 70 % Sofortabschreibung",
                ],
                note: "Bestes Profil für §7g. IAB setzt betrieblichen Hintergrund voraus.",
              },
              {
                icon: "👔",
                label: "Angestellte (42 % Grenzsteuersatz)",
                badge: "Voller Hebel mit Gewerbe",
                badgeColor: "bg-blue-100 text-blue-700",
                points: [
                  "Nebengewerbe anmelden → IAB voll nutzbar",
                  "Sonder-AfA 40 % + deg. AfA 30 % im Kaufjahr",
                  "Einkünfte aus Gewerbebetrieb (nicht nur V+V)",
                  "Kombination: Gehalt + Gewerbe = maximaler Effekt",
                ],
                note: "Mit Nebengewerbe (einfache Anmeldung beim Gewerbeamt) greift §7g vollständig — inklusive IAB im Vorjahr.",
              },
              {
                icon: "🏢",
                label: "GmbH-Inhaber",
                badge: "Alle Hebel",
                badgeColor: "bg-amber-100 text-amber-700",
                points: [
                  "Kauf über Betriebsvermögen",
                  "IAB + Sonder-AfA + deg. AfA",
                  "KSt-Effekt (15 % + SolZ) statt ESt",
                  "Bilanziell aktiviert, jährlich abgeschrieben",
                ],
                note: "Kauf über GmbH möglich. Steuerberater für optimale Gestaltung empfohlen.",
              },
            ].map((profile) => (
              <div key={profile.label} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{profile.icon}</div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${profile.badgeColor}`}>{profile.badge}</span>
                <h3 className="font-black text-gray-900 text-[14px] mt-2 mb-3">{profile.label}</h3>
                <ul className="space-y-1.5 mb-4">
                  {profile.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[12px] text-gray-600">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-50 pt-3">{profile.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Ein wichtiger Hinweis für Angestellte: Der IAB (Investitionsabzugsbetrag nach §7g EStG) setzt einen <strong className="text-gray-900">Gewerbebetrieb oder eine selbstständige Tätigkeit</strong> voraus — aber das bedeutet nicht, dass Angestellte ausgeschlossen sind. Wer neben seinem Anstellungsverhältnis ein <strong className="text-gray-900">Nebengewerbe anmeldet</strong> (z.B. "Vermietung und Bewirtschaftung von beweglichen Wirtschaftsgütern"), kann den IAB bereits im Jahr vor dem Kauf bilden und so alle drei §7g-Hebel nutzen: IAB, Sonder-AfA und degressive AfA.
            </p>
            <p>
              Die Gewerbe-Anmeldung kostet je nach Gemeinde zwischen 15 und 65 € und ist in den meisten Städten online in unter 20 Minuten erledigt. Wir empfehlen, diesen Schritt mit einem §7g-spezialisierten Steuerberater abzusprechen — denn der optimale Zeitpunkt der IAB-Bildung (Vorjahr vs. Kaufjahr) hängt von der persönlichen Einkommenssituation ab.
            </p>
            <p>
              <Link href="/wissen/iab-tiny-house" className="text-green-700 font-semibold hover:underline">
                → Schritt-für-Schritt-Anleitung: IAB für Tiny Houses beantragen
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── INFOGRAFIK + VERGLEICH ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Die Mathematik</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Tiny House vs. Eigentumswohnung als Kapitalanlage
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 mb-3">
            <Image
              src="/images/cashflow.png"
              alt="Cashflow-Vergleich: Tiny House als Kapitalanlage ab 74.700 € vs. klassische Eigentumswohnung 500.000 €"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-gray-400 text-[12px] italic mb-10">
            Die reine Mathematik: Gleicher Ertrag – 7x weniger Kapital
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-center">Eigentumswohnung</th>
                    <th className="p-4 font-black text-green-700 text-[11px] uppercase text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Einstiegspreis", "300.000–500.000 €", "ab 74.700 € netto"],
                    ["Kaufnebenkosten", "10–15 % (Notar, GrESt, Makler)", "Keine"],
                    ["Rendite auf Kaufpreis", "3–5 % brutto p.a.", "~12,7 % vor Steuern (Beispiel)"],
                    ["Abschreibung", "2 % über 50 Jahre", "§7g: bis 70 % im Kaufjahr"],
                    ["Bewirtschaftung", "Eigenregie / Hausverwaltung", "Betrieb über lokale Partner"],
                    ["Zeitaufwand Investor", "20–50 Std./Jahr", "Gering"],
                    ["Mietrecht", "Voller Kündigungsschutz für Mieter", "Kurzzeitvermietung an Gäste"],
                    ["Verkauf", "Monate bis Jahre, mit Notar", "Direktverkauf oder Standortwechsel"],
                    ["Flexibilität", "Ortsgebunden", "EU-weit versetzbar"],
                  ].map(([m, etw, tiny]) => (
                    <tr key={m} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{m}</td>
                      <td className="p-4 text-center text-gray-500">{etw}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="/steuervorteil" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Vollständige §7g-Steueranalyse mit interaktivem Rechner
            </Link>
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Was die Tabelle nicht zeigt: Der echte Vorteil liegt nicht in der Brutto-Mietrendite, sondern im <strong className="text-gray-900">Zusammenspiel aus Sofortabschreibung und laufendem Cashflow</strong>. Bei einer Eigentumswohnung schreibst du das Gebäude mit 2 % über 50 Jahre ab — steuerlich kaum relevant für den aktiven Investor. Beim Tiny House wirken IAB (50 % im Vorjahr) sowie Sonder-AfA und degressive AfA auf den Restwert im Kaufjahr zusammen. Das bedeutet: Wer ein On-Grid-Modell für 74.700 € netto kauft und 42 % Einkommensteuer zahlt, hat in Vorjahr und Kaufjahr rechnerisch rund 26.700 € weniger Steuerlast — zusätzlich zu den laufenden Mieteinnahmen. Ein großer Teil davon ist eine Steuerstundung: Die Abschreibung wird vorgezogen und fehlt in den Folgejahren.
            </p>
            <p>
              Hinzu kommt ein Faktor, den klassische Immobilienkäufer oft vergessen: <strong className="text-gray-900">keine Kaufnebenkosten</strong>. Grunderwerbsteuer (3,5–6,5 %), Notargebühren (~1,5 %), Grundbucheintrag (~0,5 %) und oft Makler (~3,57 %) summieren sich bei einer 300.000 €-ETW auf 25.000–35.000 € — Kapital, das sofort verloren ist und nie Rendite bringt. Beim Tiny House entfällt das vollständig.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 KERNVORTEILE ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Warum Tiny House?</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            3 Vorteile gegenüber klassischen Immobilien
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: "💰",
                title: "Niedriger Einstieg",
                kpi: "Ab 74.700 €",
                desc: "Kein Grundstück, keine Grunderwerbsteuer, kein Notar. Der Komplettpreis enthält Transport, Aufstellung und Innenausstattung – allein die Kaufnebenkosten einer Berliner ETW liegen bei ~50.000 €.",
              },
              {
                icon: "🏛️",
                title: "§7g Steuerbonus",
                kpi: "≈ 26.700 €",
                desc: "IAB (50 % Vorjahr) + Sonder-AfA (40 %) + degressive AfA (30 %) auf den Restwert im Kaufjahr. Senkt die gebundene Liquidität rechnerisch auf rund 48.000 € (On-Grid, 42 % Steuersatz).",
              },
              {
                icon: "📈",
                title: "Passiver Cashflow",
                kpi: "~793 €/Monat",
                desc: "Du erhältst monatlich 40 % der Mieteinnahmen nach Pacht. Lokale Partner übernehmen alles: Buchung, Gäste, Reinigung, Check-in – du musst nichts tun.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="font-data text-xl font-black text-green-700 mb-1">{item.kpi}</p>
                <h3 className="font-black text-gray-900 text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Passive Einnahmen aus Immobilien klingen gut — in der Praxis bedeuten sie oft: Mieter anrufen, Handwerker koordinieren, Nebenkostenabrechnung erstellen, Leerstandsphasen überbrücken. Beim Tiny House Investment über lokale Partner entfällt das vollständig. Der Betreiber übernimmt Buchungen, Gäste, Reinigung, Wartung und monatliche Abrechnung. Du erhältst jeden Monat eine Überweisung — ohne einen einzigen Anruf machen zu müssen.
            </p>
            <p>
              Das ist strukturell anders als ein klassischer Vermieter-Job. Und es ist der Grund, warum das Modell besonders für viel beschäftigte Freiberufler, Unternehmer und Angestellte attraktiv ist: Es passt in jede Lebenssituation — ohne Zusatzaufwand.
            </p>
          </div>

          <div className="text-center mt-6">
            <Link href="/renditemodell" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Interaktiver Renditerechner: eigenen Cashflow berechnen
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROZESS ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">So funktioniert's</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Wie funktioniert das Betreibermodell?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                step: "01",
                title: "Beratung & §7g-Check",
                desc: "Kostenloses Gespräch. Wir prüfen, welcher §7g-Hebel für deine Einkommensart optimal ist und welche Projekte verfügbar sind.",
              },
              {
                step: "02",
                title: "Projekt auswählen",
                desc: "Wähle ein verfügbares Objekt auf dem Marktplatz. Alle Projekte sind §7g-fähig, vollständig dokumentiert und mit IRR-Prognose hinterlegt.",
              },
              {
                step: "03",
                title: "Kauf über TinyInvest",
                desc: "Du kaufst das Haus direkt bei TinyInvest. Gefertigt wird es von unseren zertifizierten Partner-Werkstätten. Kein Notar, kein Grundbuch, keine Kaufnebenkosten.",
              },
              {
                step: "04",
                title: "Auszahlung startet",
                desc: "Ein lokaler Partner übernimmt Betrieb, Buchungen, Gäste und Wartung. Du erhältst monatlich 40 % der Mieteinnahmen nach Pacht.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-gray-100 rounded-2xl p-5 bg-white">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm mb-4 shrink-0">
                  {item.step}
                </div>
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[12px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Das Modell funktioniert nur, weil drei Parteien klar definierte Interessen haben: Du als Eigentümer willst Rendite. Der Host will ein Haus mit Gästen. TinyInvest will eine funktionierende Plattform. Wenn alle drei gewinnen, hält das System.
            </p>
            <p>
              Von der ersten Anfrage bis zur ersten Mietauszahlung vergehen in der Regel <strong className="text-gray-900">8–14 Wochen</strong>. Du kaufst das Haus bei TinyInvest — gefertigt von unseren zertifizierten Partner-Werkstätten. Du wirst Eigentümer eines physischen Objekts, kein Anteilsinhaber einer Gesellschaft.
            </p>
            <p>
              Das bedeutet auch: Du kannst das Haus im Notfall jederzeit abziehen und anderweitig nutzen oder verkaufen. Die Bindung an lokale Partner ist vertraglich geregelt, aber du bist nicht auf Gedeih und Verderb an einen einzigen Betreiber gebunden — ein wesentlicher Unterschied zu geschlossenen Fondsprodukten.
            </p>
          </div>

          <div className="text-center mt-6">
            <Link href="/marktplatz" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Verfügbare Projekte auf dem Marktplatz ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── BETREIBERMODELLE ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Anbieter vergleichen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Betreibermodelle vergleichen: Worauf du achten solltest
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Viele Anbieter werben mit einer Renditezahl. Vergleichbar wird sie erst, wenn klar ist, welche Kosten schon abgezogen sind. Diese Fragen solltest du jedem Anbieter stellen – auch uns.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Frage</th>
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Worauf achten</th>
                    <th className="text-left p-4 font-black text-green-700 text-[11px] uppercase bg-green-50">Bei TinyInvest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Stellplatz", "Wie hoch ist die Pacht? Ist sie in der Renditeangabe schon abgezogen?", "Max. 2.500 €/Jahr, vor der Aufteilung abgezogen und in allen Renditezahlen berücksichtigt"],
                    ["Einnahmenaufteilung", "Was ist im Anteil des Betreibers enthalten – und was nicht?", "40 % an dich, Reinigung, Betreuung und Wartung inklusive"],
                    ["Zusatzgebühren", "Winterlagerung, Transport, Verbrauch, Müll extra?", "Transport und Aufstellung im Kaufpreis"],
                    ["Standort", "Nur ein Resort des Anbieters oder mehrere Standorte?", "Partnernetzwerk, Haus versetzbar"],
                    ["Ausstieg", "Kannst du das Haus herausverlangen oder verkaufen?", "Ja, das Haus bleibt dein Eigentum"],
                    ["Renditeangabe", "Vor oder nach Kosten? Mit oder ohne Steuereffekt?", "~12,7 % vor Steuern nach Pacht, Steuereffekt separat ausgewiesen"],
                  ].map(([frage, achten, ti]) => (
                    <tr key={frage}>
                      <td className="p-4 font-medium text-gray-700">{frage}</td>
                      <td className="p-4 text-gray-500">{achten}</td>
                      <td className="p-4 font-semibold text-green-700 bg-green-50/50">{ti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed max-w-3xl">
            <p>
              Am Markt für Tiny Houses als Kapitalanlage gibt es im Wesentlichen zwei Modelle. Beim <strong className="text-gray-900">Resort-Modell</strong> steht dein Haus auf einem Platz, den der Anbieter selbst betreibt. Du zahlst eine Jahrespacht für den Stellplatz und oft Pauschalen für Winterlagerung, Transport oder Verbrauch. Im Gegenzug erhältst du einen höheren Anteil der Einnahmen. Beim <strong className="text-gray-900">Partner-Modell</strong> steht das Haus bei einem lokalen Host, der den Betrieb übernimmt. Die Pacht für den Stellplatz wird direkt aus den Mieteinnahmen bezahlt, bevor die Einnahmen aufgeteilt werden – du zahlst sie also nicht aus eigener Tasche, sie mindert aber deine Auszahlung.
            </p>
            <p>
              Welches Modell besser ist, lässt sich nicht an der Prozentzahl der Einnahmenaufteilung ablesen. Ein Anbieter, der 65 % der Einnahmen auszahlt, aber Pacht, Reinigung und Lagerung extra berechnet, kann am Ende ähnlich viel oder weniger übrig lassen als einer, der 40 % auszahlt, bei dem Pacht und Betriebskosten aber schon verrechnet sind. Vergleichbar wird es erst, wenn du für jedes Angebot dieselbe Rechnung aufmachst: Einnahmen bei realistischer Belegung, minus alle Kosten, die du als Eigentümer trägst, geteilt durch den Kaufpreis.
            </p>
            <p>
              Achte außerdem auf die Vertragsbedingungen: Wie lange bist du an den Betreiber gebunden? Was passiert, wenn die Belegung dauerhaft schlecht ist? Darfst du das Haus abziehen, an einen anderen Standort bringen oder verkaufen? Und wie transparent wird abgerechnet – siehst du die einzelnen Buchungen oder nur eine Summe? Ein seriöser Anbieter beantwortet diese Fragen vor dem Kauf schriftlich.
            </p>
          </div>
        </div>
      </section>

      {/* ── MID IMAGE ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-escape-wald.webp"
              alt="Tiny House Investment – Außenansicht im Wald"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── RISIKEN ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Transparenz</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Welche Risiken gibt es?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📉", title: "Leerstand", desc: "Belegung kann schwanken. Wirtschaftliche Abschwünge oder Standortprobleme beeinflussen die Einnahmen." },
              { icon: "⚖️", title: "Steuerrechtsänderung", desc: "§7g EStG kann geändert werden. Die aktuelle Förderung gilt bis auf Weiteres – keine Garantie." },
              { icon: "🚛", title: "Betreiberrisiko", desc: "Die Rendite hängt von der Arbeit des lokalen Partners ab. Als Eigentümer kannst du das Haus im Notfall herausverlangen." },
              { icon: "🏷️", title: "Wiederverkaufswert", desc: "Ein Tiny House verliert über die Jahre an Wert. Der Verkaufspreis hängt von Zustand, Nachfrage und Markt ab – eine Wertsteigerung wie bei Grundstücken ist nicht zu erwarten." },
              { icon: "📍", title: "Standort & Genehmigung", desc: "Ob und wie lange ein Haus an einem Standort vermietet werden darf, regeln Gemeinde und Bauordnung. Ändert sich das, muss das Haus versetzt werden." },
            ].map((r) => (
              <div key={r.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <span className="text-2xl mb-3 block">{r.icon}</span>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{r.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-gray-700 text-[15px] leading-relaxed max-w-3xl">
            <h3 className="text-lg font-black text-gray-900 tracking-tight">So begrenzt du die Risiken</h3>
            <p>
              Das größte Risiko eines Tiny House als Kapitalanlage ist eine dauerhaft niedrige Belegung. Sie lässt sich nicht ausschließen, aber deutlich reduzieren: durch einen Standort mit nachgewiesener Nachfrage, einen erfahrenen Host mit guten Bewertungen und eine konservative Kalkulation. Rechne deine Entscheidung nicht mit 75 % Belegung, sondern prüfe, ob sie auch bei 45 % noch für dich aufgeht.
            </p>
            <p>
              Gegen das Standort- und Betreiberrisiko hilft die Mobilität des Hauses. Anders als eine Ferienwohnung kann ein Tiny House versetzt werden, wenn sich ein Standort als schwach erweist oder sich die rechtlichen Rahmenbedingungen vor Ort ändern. Wer größere Beträge investiert, kann außerdem mehrere Häuser an verschiedenen Standorten kaufen und das Risiko so streuen – mit dem Kapital einer einzigen Eigentumswohnung sind vier bis sechs Häuser möglich.
            </p>
            <p>
              Das Steuerrisiko solltest du ebenfalls realistisch einordnen. Die §7g-Regeln gelten seit Jahren und wurden zuletzt eher ausgeweitet als eingeschränkt, eine Garantie für die Zukunft gibt es aber nicht. Kaufe ein Tiny House deshalb nur, wenn es sich auch ohne den Steuereffekt als Investment für dich trägt. Der Steuervorteil sollte das Sahnehäubchen sein, nicht die einzige Begründung.
            </p>
            <p>
              Beim Wiederverkaufswert gilt: Ein Tiny House ist ein Gebrauchsgut und verliert an Wert, ähnlich wie ein Fahrzeug. Eine Wertsteigerung wie bei Grundstücken ist nicht zu erwarten. Gute Pflege, ein dokumentierter Wartungszustand und eine hochwertige Bauweise helfen, einen ordentlichen Restwert zu erhalten.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-[13px]">
            <Link href="/wissen/tiny-house-genehmigung" className="text-green-700 font-semibold hover:underline">
              → Genehmigung & Standortrecht
            </Link>
            <Link href="/wissen/tiny-house-steuer-risiken" className="text-green-700 font-semibold hover:underline">
              → Steuerliche Risiken im Detail
            </Link>
            <Link href="/wissen/tiny-house-finanzierung" className="text-green-700 font-semibold hover:underline">
              → Tiny House finanzieren
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAZIT ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Fazit</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Lohnt sich ein Tiny House als Kapitalanlage 2026?
          </h2>
          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Für Investoren mit hohem Steuersatz, die Kapital für mehrere Jahre binden können und keinen Aufwand mit der Vermietung wollen, kann ein Tiny House als Kapitalanlage 2026 eine der interessantesten Sachwertanlagen sein. Der Einstieg liegt mit 74.700 € netto deutlich unter dem einer Eigentumswohnung, Kaufnebenkosten fallen nicht an, und die laufende Rendite liegt in unserer Beispielrechnung nach Stellplatzpacht bei rund 12,7 % vor Steuern – zusätzlich zu einem Steuereffekt von rund 26.700 € in Vorjahr und Kaufjahr.
            </p>
            <p>
              Weniger geeignet ist das Modell für Anleger, die maximale Sicherheit suchen, das Geld kurzfristig brauchen oder keine Möglichkeit haben, die §7g-Instrumente zu nutzen. Auch wer auf eine Wertsteigerung des Objekts setzt, ist bei einer Immobilie mit Grundstück besser aufgehoben: Ein Tiny House verdient sein Geld über die Vermietung, nicht über den Wiederverkauf.
            </p>
            <p>
              Unser Rat: Rechne konservativ, prüfe Standort und Betreiber genau und lass die steuerliche Seite von einem Steuerberater mit Erfahrung bei §7g begleiten. Wenn die Rechnung auch bei vorsichtigen Annahmen für dich aufgeht, ist ein Tiny House eine solide Ergänzung zu Aktien, ETFs oder klassischen Immobilien – und durch den niedrigen Einstiegspreis gut geeignet, um ein Portfolio breiter aufzustellen.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">FAQ: Tiny House als Kapitalanlage</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mt-6">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Die steuerlichen Angaben auf dieser Seite dienen der allgemeinen Orientierung und sind keine Steuer- oder Rechtsberatung. Alle Renditezahlen sind Beispielrechnungen auf Basis historischer Belegungsdaten, keine Garantie. Ob und in welcher Höhe IAB, Sonder-AfA und Vorsteuerabzug für dich in Frage kommen, klärst du mit deinem Steuerberater.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            §7g-Analyse, Rendite-Prognose und persönliche Beratung – kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Unterlagen anfordern →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              Aktuelle Projekte →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 justify-center text-[12px]">
            <Link href="/wissen" className="text-green-700 hover:underline font-semibold">Wissens-Hub →</Link>
            <span className="text-gray-300">·</span>
            <Link href="/steuervorteil" className="text-gray-500 hover:text-green-700 transition-colors">§7g Steueranalyse</Link>
            <span className="text-gray-300">·</span>
            <Link href="/renditemodell" className="text-gray-500 hover:text-green-700 transition-colors">Renditemodell</Link>
            <span className="text-gray-300">·</span>
            <Link href="/wissen/senioren" className="text-gray-500 hover:text-green-700 transition-colors">Für Senioren</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
