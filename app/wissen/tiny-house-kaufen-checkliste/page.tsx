import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House kaufen: Die Checkliste für Investoren 2026 | TinyInvest",
  description:
    "Schritt-für-Schritt Checkliste für den Tiny House Kauf als Kapitalanlage. Von der Steuerprüfung bis zum ersten Cashflow – alles was Investoren wissen müssen.",
  keywords:
    "tiny house kaufen checkliste, tiny house investment checkliste, tiny house kaufen worauf achten, tiny house kapitalanlage checkliste 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste",
  },
  openGraph: {
    title: "Tiny House kaufen: Die Investor-Checkliste 2026 | TinyInvest",
    description: "Von Steuerprüfung bis erstem Cashflow – die vollständige Checkliste für Tiny House Investoren.",
    url: "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste",
  },
};


const faqItems = [
  {
    question: "Wie lange dauert es vom Kauf bis zum ersten Cashflow?",
    answer:
      "Bei TinyInvest typischerweise 4–8 Wochen: Kaufvertrag → Übereignung → Aufstellung → Listing auf Buchungsplattformen → erste Buchungen. Die ersten Mietauszahlungen erfolgen im Folgemonat nach den ersten Buchungen.",
  },
  {
    question: "Muss ich als Investor persönlich anwesend sein?",
    answer:
      "Nein. Der gesamte Prozess läuft volldigital: Kaufvertrag per DocuSign, Übergabe ohne physische Anwesenheit, Betrieb durch tiny Escapes. Du erhältst monatliche Abrechnungen und Auszahlungen per Überweisung.",
  },
  {
    question: "Welche laufenden Kosten habe ich als Investor?",
    answer:
      "Die laufenden Kosten sind minimal: tiny Escapes übernimmt Betrieb, Reinigung und Kommunikation im Rahmen des Betreibermodells (60 % der Einnahmen). Als Investor trägst du Versicherungskosten (ca. 300–500 €/Jahr) und eventuelle Rücklagenbildung für Wartung. Es gibt keine Hausverwaltungsgebühren.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House wieder verkaufen möchte?",
    answer:
      "Das Tiny House gehört dir – du kannst es jederzeit verkaufen. Der Wiederverkauf ist einfacher als bei Immobilien: kein Notar, kein Grundbuch, keine Spekulationsfrist wie bei Grundstücken. Nach der 10-jährigen Haltefrist ist der Verkaufserlös aus beweglichen Wirtschaftsgütern steuerfrei.",
  },
];

export default function ChecklistePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House kaufen: Die Checkliste für Investoren 2026",
    "description": "Schritt-für-Schritt Checkliste für den Tiny House Kauf als Kapitalanlage. Von der Steuerprüfung bis zum ersten Cashflow – alles was Investoren wissen müssen.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-investor-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Checkliste", "item": "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste" }
    ]
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

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="faq-schema-checkliste" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-checkliste" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-kaufen-checkliste" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Checkliste</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Checkliste · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House kaufen: Die vollständige Checkliste für Investoren
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-15">15. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Von der §7g-Steuervorbereitung bis zum ersten Cashflow – alle 20 Punkte, die Investoren vor, während und nach dem Tiny House Kauf kennen müssen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-investor-aussen.webp" alt="Tiny House Kaufprozess – Investor-Checkliste" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["4 Phasen", "20 Checkpunkte", "§7g-Vorbereitung", "Cashflow-Start", "4–8 Wochen"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer schon einmal eine Eigentumswohnung gekauft hat, kennt das Prozedere: Monate vergehen mit Besichtigungen, Finanzierungsanfragen, Notarterminen und Grundbucheintragungen. Ein Tiny House als Investment funktioniert anders. Der Prozess ist schlanker, digitaler und deutlich schneller – von der ersten Anfrage bis zum ersten Cashflow vergehen typisch vier bis acht Wochen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das bedeutet nicht, dass Sorgfalt keine Rolle spielt. Im Gegenteil: Die richtigen Schritte in der richtigen Reihenfolge machen den Unterschied zwischen einem steuerlich optimierten Investment und einer verpassten Gelegenheit. Besonders der §7g-Investitionsabzugsbetrag hat strikte Fristen – wer ihn verpasst, verliert den wertvollsten Steuereffekt des ersten Jahres.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Phase 1 – Steuervorbereitung</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Bevor du ein Tiny House kaufst, muss die Steuerstrategie stehen. Ermittle deinen Grenzsteuersatz – für den vollen §7g-Effekt sollte er mindestens 35 % betragen. Hole dir frühzeitig einen Steuerberater mit §7g-Erfahrung und kläre gemeinsam, ob du den Investitionsabzugsbetrag im Vorjahr bilden willst: Dann muss die IAB-Position bereits in der Steuererklärung des Jahres vor dem Kauf erscheinen. Kläre außerdem die Einkunftsart – Vermietung und Verpachtung oder Gewerbebetrieb – da dies den weiteren Verlauf beeinflusst. Stelle die nötige Liquidität für den vollen Kaufpreis plus Puffer bereit, bevor du in die Vertragsphase gehst.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Phase 2 – Modell & Beratung</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Wähle das passende Modell: Das Comfort-Modell (ab 65.000 €) eignet sich für den Einstieg, das Premium-Modell (ab 80.000 €) bietet höhere Ausstattung und in der Regel bessere Belegungsquoten. Fordere die Investor-Unterlagen an – das §7g-Factsheet und die Renditeprognose sind die Grundlage jeder Entscheidung. Nutze den Rendite-Rechner unter /rechner/rendite für eigene Szenarien. Besprich den Standort mit TinyInvest: Deutschland, Österreich und die Schweiz kommen infrage. Wer möchte, kann Referenzstandorte besuchen, bevor die endgültige Entscheidung fällt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Phase 3 – Kauf & Übereignung</h2>
          <div className="max-w-3xl mb-8">
            <p className="text-gray-700 text-base leading-relaxed">
              Beim Kaufvertrag ist ein Punkt entscheidend: Der Eigentumsübergang muss auf deinen Namen erfolgen – das ist die Voraussetzung für §7g. Dokumentiere die VIN bzw. FIN des Vlemmix-Trailers, die das bewegliche Wirtschaftsgut eindeutig identifiziert. Unterzeichne den Betreibervertrag mit tiny Escapes, bestätige den Host-Standort und vereinbare den Aufstelltermin. Informiere deinen Steuerberater unmittelbar über das Kaufdatum, da es den Start der AfA-Abschreibung bestimmt.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-wohnbereich.webp" alt="Tiny House Innenraum modern" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Phase 4 – Betrieb & Cashflow</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Sobald das Tiny House buchungsbereit aufgestellt ist, beginnt der operative Betrieb. Richte die monatliche Mietauszahlung ein – als Investor erhältst du 40 % der Einnahmen passiv. Führe eine separate Einnahmen-Überschuss-Rechnung für das Tiny House und monitore die Belegungsquote monatlich über das Dashboard. In der Steuererklärung des Kaufjahres wird die §7g-AfA geltend gemacht; wurde im Vorjahr ein IAB gebildet, muss dieser jetzt aufgelöst werden. Investoren, die diese Schritte konsequent umsetzen, sehen typischerweise innerhalb von vier bis acht Wochen nach dem Kauf die erste Mietauszahlung.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/rechner/rendite" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rendite berechnen →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierungs-Guide →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House kaufen</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Bereit? Starte jetzt.</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Paket anfordern – §7g-Analyse, Renditeprognose und Beratung in einem.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Jetzt starten →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
