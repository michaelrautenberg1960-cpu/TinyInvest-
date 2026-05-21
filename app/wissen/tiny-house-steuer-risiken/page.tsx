import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Steuermodell: Was das Finanzamt prüft – und wie du sicher bist | TinyInvest",
  description:
    "Das Tiny House Steuermodell ist legal – aber nur wenn es professionell aufgesetzt ist. Die 3 Punkte die Betriebsprüfer gezielt prüfen: 90%-Regel, Liebhaberei, Gebäude-Umwidmung.",
  keywords:
    "tiny house steuer risiken, tiny house finanzamt, iab tiny house betriebsprüfung, tiny house liebhaberei, tiny house 90 prozent regel",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-steuer-risiken" },
  openGraph: {
    title: "Tiny House Steuermodell: Was das Finanzamt prüft – und wie du sicher bist",
    description:
      "90%-Nutzungsregel, Liebhaberei, Gebäude-Umwidmung: Die 3 Punkte an denen das Tiny House Steuermodell scheitert – und wie du sie von Anfang an ausschließt.",
    url: "https://tinyhouse.investments/wissen/tiny-house-steuer-risiken",
  },
};

const faqItems = [
  {
    question: "Was passiert, wenn das Finanzamt mein Tiny House als Gebäude einstuft?",
    answer: "Wird das Tiny House fest mit dem Boden verbunden (Fundament, feste Versorgungsleitungen), kann das Finanzamt es rückwirkend als Gebäude umwidmen. Die Abschreibungsdauer springt von 8 auf 33–50 Jahre. IAB und Sonder-AfA müssen rückabgewickelt werden – mit Zinsen von 1,8 % p.a. Auf einem straßenzugelassenen Vlemmix-Trailer mit eigener Fahrgestellnummer passiert das nicht.",
  },
  {
    question: "Was ist die 90-Prozent-Regel und warum ist sie so kritisch?",
    answer: "§7g Abs. 4 EStG fordert, dass das Wirtschaftsgut im Jahr der Anschaffung und im Folgejahr zu mindestens 90 % betrieblich genutzt wird. Jede private Nutzung über 10 % hinaus lässt den gesamten IAB und die Sonder-AfA rückwirkend entfallen – inklusive Nachzahlung plus Zinsen. Deshalb muss die Vermietung exklusiv und dokumentiert sein.",
  },
  {
    question: "Was bedeutet Liebhaberei im Steuerrecht und wie erkenne ich das Risiko?",
    answer: "Das Finanzamt stuft eine Tätigkeit als Liebhaberei ein, wenn über einen längeren Zeitraum kein Gewinn erzielt wird und keine realistische Gewinnerzielungsabsicht erkennbar ist. Konkrete Warnsignale: Vermietung unter Marktniveau, keine Werbemaßnahmen, dauerhafter Leerstand. Marktübliche Preise und nachweisbares aktives Marketing schließen dieses Risiko aus.",
  },
  {
    question: "Brauche ich für das Tiny House Steuermodell zwingend ein Gewerbe?",
    answer: "Für den IAB nach §7g EStG ja – er setzt betriebliche Einkünfte voraus (Gewerbe oder Freiberufler). Ohne eigenes Gewerbe ist der IAB nicht nutzbar. Die Sonder-AfA ist auch im Rahmen von Einkünften aus Vermietung und Verpachtung möglich, der Steuereffekt ist dann aber deutlich geringer.",
  },
  {
    question: "Wie hoch sind die Nachzahlungszinsen wenn das Modell rückwirkend versagt?",
    answer: "Das Finanzamt erhebt nach § 233a AO Nachzahlungszinsen von 1,8 % pro Jahr. Bei einer fünfstelligen Steuererstattung die rückabgewickelt wird, summiert sich das schnell – besonders wenn mehrere Steuerjahre betroffen sind. Das zeigt: Das Modell muss von Anfang an korrekt aufgesetzt sein, nicht korrigiert werden.",
  },
];

export default function TinyHouseSteuerRisikenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House Steuermodell: Was das Finanzamt prüft – und wie du sicher bist",
    "description": "Die 3 Punkte an denen das Tiny House Steuermodell scheitert – 90%-Regel, Liebhaberei, Gebäude-Umwidmung – und wie professionelles Investment sie ausschließt.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-steuer-risiken",
    "datePublished": "2026-05-06",
    "dateModified": "2026-05-06",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-steuermodell-finanzamt.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House Steuer Risiken", "item": "https://tinyhouse.investments/wissen/tiny-house-steuer-risiken" },
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

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-steuer-risiken" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-steuer-risiken" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-steuer-risiken" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Steuer Risiken</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · Betriebsprüfung · §7g EStG</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Das Tiny House Steuermodell: Was das Finanzamt prüft – und wie du sicher bist
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-06">6. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-8">
            Das Tiny House ist eines der effizientesten Steuersparmodelle im deutschen Recht — legal, erprobt und in §7g EStG klar geregelt. Aber wer es falsch aufbaut, steht schnell im Visier der Betriebsprüfer. Drei Punkte entscheiden darüber, ob das Modell hält oder nicht.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-steuermodell-finanzamt.webp" alt="Tiny House Steuerberatung Finanzamt" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "IAB · Sonder-AfA", "90%-Nutzungsregel", "Liebhaberei-Test", "Betriebsprüfung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Warum Tiny Houses steuerliche Turbo-Güter sind */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Warum Tiny Houses steuerliche „Turbo-Güter" sind</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der entscheidende Vorteil eines Tiny Houses liegt in seiner Mobilität. Solange das Objekt auf Rädern steht, über keine feste Fundamentierung verfügt und theoretisch jederzeit ortsveränderlich ist, gilt es im Sinne des EStG nicht als Gebäude, sondern als <strong>bewegliches Wirtschaftsgut</strong>. Das öffnet eine Werkzeugkiste der Steueroptimierung, die für normale Immobilien verschlossen bleibt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das mächtigste Instrument ist der <Link href="/wissen/iab-tiny-house" className="text-green-700 font-semibold hover:underline">Investitionsabzugsbetrag (IAB) nach §7g EStG</Link>. Ein Investor kann bereits bis zu drei Jahre vor der Anschaffung 50 % der voraussichtlichen Kosten gewinnmindernd geltend machen. Kombiniert mit der Sonder-AfA (40 %) und der degressiven Abschreibung (30 %) lassen sich im Idealfall bis zu 70–80 % der Anschaffungskosten steuerlich im ersten Jahr abbauen.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-black text-green-900 text-sm mb-2">Das Modell in einem Satz</p>
              <p className="text-green-800 text-[13px] leading-relaxed">Ein Gutverdiener bildet den IAB im Jahr mit hohem Gewinn, erhält eine fünfstellige Steuererstattung, kauft das Tiny House — und verrechnet im Kaufjahr nochmals massiv über Sonder-AfA und degressive AfA. Völlig legal, solange drei Bedingungen erfüllt sind.</p>
            </div>
          </div>

          {/* Die 3 Prüfpunkte */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Die 3 Punkte, an denen Betriebsprüfer ansetzen</h2>
            <div className="space-y-6">

              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-sm">01</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-3">Die 90-Prozent-Hürde</h3>
                    <p className="text-gray-700 text-[13px] leading-relaxed mb-4">
                      Um IAB und Sonder-AfA zu erhalten, muss das Tiny House im Jahr der Anschaffung und im Folgejahr zu <strong>mindestens 90 % betrieblich genutzt</strong> werden (§7g Abs. 4 EStG). Wer das Haus als Wochenenddomizil nutzt oder Freunde kostenlos einquartiert, riskiert die rückwirkende Streichung aller Steuervorteile — plus Nachzahlungszinsen von 1,8 % p.a.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      <p className="text-[12px] text-red-700 font-semibold">Risiko: Jede nachgewiesene private Nutzung über 10 % lässt das gesamte Modell rückwirkend entfallen.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-sm">02</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-3">Das Damoklesschwert der Liebhaberei</h3>
                    <p className="text-gray-700 text-[13px] leading-relaxed mb-4">
                      Jede gewerbliche Tätigkeit muss eine <strong>langfristige Gewinnerzielungsabsicht</strong> verfolgen. Wer das Tiny House zu einem Spottpreis an Verwandte vermietet oder die Auslastung durch mangelndes Marketing bewusst niedrig hält, läuft Gefahr, dass das Finanzamt das Projekt als Hobby (Liebhaberei) einstuft. Alle Verluste werden dann steuerlich ignoriert — rückwirkend.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      <p className="text-[12px] text-red-700 font-semibold">Risiko: Marktfremde Miete oder dauerhafter Leerstand ohne aktives Marketing = Liebhaberei-Verdacht.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-sm">03</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-3">Die Umwandlung in ein Gebäude</h3>
                    <p className="text-gray-700 text-[13px] leading-relaxed mb-4">
                      Oft unterschätzt: Wird das Tiny House fest mit Versorgungsleitungen verbunden, auf ein Fundament gesetzt oder mit einer festen Terrasse umbaut, kann das Finanzamt es als <strong>Gebäude umwidmen</strong>. Die Abschreibungsdauer springt von 8 Jahren auf 33–50 Jahre. IAB für bewegliche Wirtschaftsgüter war dann unrechtmäßig — Rückabwicklung plus Zinsen.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      <p className="text-[12px] text-red-700 font-semibold">Risiko: Jede bauliche Maßnahme die auf Dauerhaftigkeit hindeutet gefährdet den Status als bewegliches Wirtschaftsgut.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Image break */}
          <div className="rounded-2xl overflow-hidden my-14 relative" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House als Kapitalanlage Sachwert" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* Wie das Modell strukturell sicher wird */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Wie das Modell strukturell sicher wird</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Tiny House Steuermodell ist kein Trick — es ist ein strukturelles Merkmal, das §7g EStG für genau diese Asset-Klasse vorsieht. Die drei Risikopunkte oben lassen sich nicht durch Glück oder nachträgliche Korrekturen vermeiden. Sie müssen von Anfang an in die Konstruktion des Investments eingebaut sein.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Das bedeutet konkret: Das Tiny House muss auf einem straßenzugelassenen Trailer mit eigener Fahrgestellnummer stehen (Vlemmix), ausschließlich gewerblich zu Marktpreisen vermietet werden, und der Investor muss als Unternehmer auftreten — mit eigenem Gewerbe, eigenem Steuerberater und lückenloser Dokumentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { risk: "90%-Regel: strukturell ausgeschlossen", solution: "Ausschließlich gewerbliche Kurzzeitvermietung, kein Eigennutz vertraglich ausgeschlossen", icon: "✓" },
                { risk: "Liebhaberei: kein Risiko bei aktiver Vermietung", solution: "Marktübliche Preise, aktives Marketing auf Airbnb & Booking.com, nachweisbare Belegung", icon: "✓" },
                { risk: "Gebäude-Status: durch Vlemmix-Trailer ausgeschlossen", solution: "Vlemmix-Trailer mit VIN/FIN, keine Fundamentierung, jederzeit ortsveränderlich", icon: "✓" },
              ].map((item) => (
                <div key={item.risk} className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 font-black">{item.icon}</span>
                    <p className="font-black text-gray-900 text-[13px]">{item.risk}</p>
                  </div>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fazit */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Fazit: Das Modell hält — wenn es professionell gebaut ist</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House kann eines der effizientesten Steuersparmodelle im deutschen Recht sein. Die Risiken sind real — aber sie sind keine Zufälle. Sie entstehen, wenn Investoren versuchen, ein Gewerbe auf dem Papier zu führen, während sie das Asset privat nutzen. Wer es wie ein echtes Unternehmen betreibt, hat keinen dieser drei Punkte zu fürchten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das gilt unabhängig davon, wie das Investment aufgesetzt ist: Du bist der Unternehmer — das Gewerbe läuft auf deinen Namen, dein <Link href="/wissen/steuerberater-finden" className="text-green-700 font-semibold hover:underline">Steuerberater</Link> macht die Erklärung, du trägst die unternehmerische Verantwortung. Das ist kein Nachteil — es ist der Preis für das mächtigste Steuerinstrument des deutschen Rechts.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Tiny House →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Steuer Risiken</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Dein Investment strukturell richtig aufsetzen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir zeigen dir wie das Modell aufgebaut sein muss, damit dein Steuerberater grünes Licht gibt — unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Erstgespräch anfragen →</ModalButton>
              <Link href="/wissen/iab-tiny-house" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB Tiny House →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
