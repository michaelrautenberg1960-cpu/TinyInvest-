import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House finanzieren 2026: Kredit, Leasing oder Cash? | TinyInvest",
  description:
    "Wie finanziert man ein Tiny House als Kapitalanlage? Kredit, Leasing oder Barzahlung – Vergleich mit Steuereffekt. §7g macht Cash zur klügsten Option.",
  keywords:
    "tiny house finanzieren, tiny house kredit 2026, tiny house leasing, tiny house investment finanzierung, tiny house kaufen finanzierung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-finanzierung",
  },
  openGraph: {
    title: "Tiny House finanzieren 2026: Kredit, Leasing oder Cash?",
    description:
      "§7g macht Cash zur besten Finanzierungsoption für Tiny House Investments. Vollständiger Vergleich 2026.",
    url: "https://tinyhouse.investments/wissen/tiny-house-finanzierung",
  },
};

const faqItems = [
  {
    question: "Kann ich ein Tiny House Investment per Kredit finanzieren?",
    answer:
      "Technisch ja – einige Banken (v.a. Volksbanken und Sparkassen) vergeben Konsumentenkredite oder Gewerbedarlehen für bewegliche Wirtschaftsgüter. Da ein Tiny House auf Vlemmix Trailer als bewegliches Wirtschaftsgut gilt (kein Grundstück, keine Grundbucheintragung), scheidet eine klassische Immobilienfinanzierung aus. Die Kreditzinsen reduzieren deinen Nettoertrag. Mit §7g IAB ist Barzahlung in den meisten Fällen attraktiver.",
  },
  {
    question: "Gibt es staatliche Förderungen für Tiny House Investments?",
    answer:
      "Direkte Tiny House Förderungen gibt es aktuell nicht. Indirekt profitierst du jedoch massiv von §7g EStG (IAB + Sonder-AfA + degressive AfA) – das ist faktisch eine staatliche Förderung von bis zu 40 % des Kaufpreises durch Steuererstattungen. KfW-Darlehen greifen nicht, da keine Immobilie und kein Grundstück vorhanden ist.",
  },
  {
    question: "Warum ist Barzahlung bei einem Tiny House Investment oft besser als ein Kredit?",
    answer:
      "Bei einem Kredit zahlst du 5–8 % Zinsen p.a. auf die Kreditsumme. Gleichzeitig bekommst du durch §7g im ersten Jahr bis zu ~40 % des Kaufpreises als Steuererstattung zurück – das entspricht einem effektiven 'Rückfluss' der höher ist als die Kreditzinsen. Zudem zählen Zinszahlungen zwar als Betriebsausgabe, der gesamte Steuereffekt ist aber bei Direktkauf höher.",
  },
  {
    question: "Was ist der Mindestbetrag für ein Tiny House Investment bei TinyInvest?",
    answer:
      "Der Einstieg beginnt bei 65.000 € für das Comfort-Modell. Nach Berücksichtigung der IAB-Steuererstattung (bei 42 % Grenzsteuersatz ~13.000–14.000 €) reduziert sich die effektive Liquiditätsbelastung auf ca. 51.000–52.000 €.",
  },
];

export default function TinyHouseFinanzierungPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House finanzieren 2026: Kredit, Leasing oder Cash?",
    "description": "Wie finanziert man ein Tiny House als Kapitalanlage? Kredit, Leasing oder Barzahlung – Vergleich mit Steuereffekt. §7g macht Cash zur klügsten Option.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-finanzierung",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-escape-wald.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Finanzierung", "item": "https://tinyhouse.investments/wissen/tiny-house-finanzierung" }
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
      <Script id="faq-schema-finanzierung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-finanzierung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-finanzierung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Finanzierung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Finanzierungs-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House finanzieren 2026: Kredit, Leasing oder Cash?
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
            Welche Finanzierungsform ist die klügste für ein Tiny House Investment? Warum §7g die Rechnung komplett verändert – und warum Barzahlung in den meisten Fällen gewinnt.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-escape-wald.webp" alt="Tiny House im Wald – Kapitalanlage mit §7g" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Kredit vs. Cash", "§7g Effekt", "Leasing", "Steuererstattung", "65.000 € Einstieg"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House als Kapitalanlage kauft, steht vor einer ungewohnten Entscheidung: Eigenkapital oder Kredit? Die Antwort überrascht viele Investoren – und läuft gegen die klassische Immobilienlogik. Bei einem Haus, das 300.000 € oder mehr kostet, macht Fremdkapitalhebel oft Sinn. Bei einem Tiny House mit 65.000 € Einstiegspreis verändert §7g EStG die Rechnung fundamental.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Die Erklärung: Im Kaufjahr bekommst du durch Investitionsabzugsbetrag, Sonder-AfA und degressive AfA bis zu 40 % des Kaufpreises als Steuervorteil zurück – das entspricht einer sofortigen Nettorendite auf das eingesetzte Kapital, die jeden Kreditzins übertrifft. Wer mit 6 % Zinsen auf 80.000 € finanziert, zahlt 4.800 € Zinsen im ersten Jahr – bekommt aber mit §7g rund 33.600 € zurück. Cash schlägt Kredit deutlich.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Barzahlung – warum Cash beim Tiny House fast immer gewinnt</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House direkt aus Eigenkapital kauft, hat im ersten Jahr einen entscheidenden Vorteil: Den vollen §7g-Steuereffekt ohne Abzug. Durch Investitionsabzugsbetrag (IAB), Sonder-AfA und degressive AfA summiert sich der steuerliche Rückfluss auf bis zu 40 % des Kaufpreises – bei einem 80.000-€-Objekt und 42 % Grenzsteuersatz entspricht das rund 33.600 €. Hinzu kommen kein Zinsaufwand, sofortiger Eigentumsübergang und keine Bankkonditionsverhandlung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Der einzige echte Nachteil der Barzahlung ist der Liquiditätsbedarf: Der Einstieg beginnt bei 65.000 €. Wer dieses Kapital nicht vollständig binden möchte, kann nach dem Kaufjahr mit der Steuererstattung einen Teil zurückgewinnen – effektiv ist die Nettoliquiditätsbelastung nach dem ersten Steuerjahr deutlich niedriger als der nominale Kaufpreis.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Kredit – möglich, aber teurer</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Kredite für Tiny Houses sind möglich – typischerweise über Volksbanken und Sparkassen als Konsumentenkredit oder Gewerbedarlehen für bewegliche Wirtschaftsgüter. Ein klassisches Immobiliendarlehen mit Grundbucheintragung scheidet aus, da das Tiny House auf einem Vlemmix-Trailer als bewegliches Wirtschaftsgut gilt und kein Grundstück involviert ist.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Die Zinslast bei 6 % auf 80.000 € beträgt über fünf Jahre rund 12.800 €. Zwar sind Zinsen als Betriebsausgaben steuerlich absetzbar, dennoch liegt das Netto-Ergebnis über fünf Jahre mit Kredit bei etwa 64.000 € gegenüber rund 76.800 € bei Barzahlung – ein Unterschied von fast 13.000 €. Kredit lohnt sich nur dann, wenn das frei gehaltene Kapital anderweitig eine höhere Rendite erzielt als die Kreditzinsen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Leasing – warum es für §7g-Investoren nicht funktioniert</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed">
              Leasing scheidet für Tiny House Investments nahezu vollständig aus. Der entscheidende Grund: Beim Leasing bleibt der Leasinggeber Eigentümer des Wirtschaftsguts – der Investor tritt also nicht als wirtschaftlicher Eigentümer auf. Damit entfällt die Voraussetzung für den Investitionsabzugsbetrag und die Sonder-AfA nach §7g EStG. Die monatliche Leasingrate ist zwar als Betriebsausgabe absetzbar, der steuerliche Effekt ist jedoch deutlich geringer als bei direktem Erwerb. Gesamtwirtschaftlich sind Leasingkosten in der Regel höher als ein Direktkauf – ohne den §7g-Hebel.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum §7g die Finanzierungsentscheidung dominiert</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei klassischen Immobilien macht Fremdkapitalhebel oft Sinn – wegen langer AfA-Laufzeiten, Inflationsschutz und niedrigen Eigenkapitalquoten. Bei Tiny Houses dreht §7g die Logik um. Der Steuereffekt im Kaufjahr ist so dominant, dass er sämtliche Zinsvorteile übertrifft. Konkret: Wer 80.000 € bar zahlt, erzielt bei 42 % Grenzsteuersatz über fünf Jahre rund 76.800 € Netto-Ergebnis aus Steuererstattung und Mieteinnahmen. Mit Kredit (6 % p.a.) sinkt dieses Ergebnis auf etwa 64.000 €.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das bedeutet nicht, dass Kredit grundsätzlich falsch ist. Wer mehrere Objekte staffeln möchte oder das Eigenkapital in einem anderen Asset mit höherer Rendite arbeiten lässt, kann einen Kredit rechtfertigen. Für den typischen Einzelinvestor mit einem §7g-optimierten Einstieg ist Cash jedoch die überlegene Wahl – sowohl steuerlich als auch strukturell.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-wald-naturstandort.webp" alt="Tiny House Standort Natur" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Cash vs. Kredit vs. Leasing – Direktvergleich</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Cash</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Kredit</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Leasing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["§7g IAB nutzbar", "✅ Ja", "✅ Ja", "❌ Nein"],
                    ["Eigentumsübergang", "✅ Sofort", "✅ Sofort", "❌ Nein"],
                    ["Zinslast", "✅ 0 €", "⚠ 5–8 % p.a.", "⚠ 4–7 % p.a."],
                    ["Steueroptimierung", "✅ Maximum", "⚠ Reduziert", "❌ Minimal"],
                    ["Empfohlen für", "✅ Die meisten Investoren", "⚠ Nur mit hohem Alt-Kapital", "❌ Nicht empfohlen"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{a}</td>
                      <td className="p-4 text-center text-gray-500">{b}</td>
                      <td className="p-4 text-center text-gray-500">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/rechner/iab" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB-Rechner →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA-Guide →</Link>
            <Link href="/wissen/tiny-house-kaufen-checkliste" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kauf-Checkliste →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House finanzieren</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Investor-Paket & persönliche Beratung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">§7g-Analyse, Finanzierungsvergleich und unverbindliches Erstgespräch – kostenlos.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Unterlagen anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
