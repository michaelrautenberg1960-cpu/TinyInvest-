import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House vs. ETF-Sparplan: Altersvorsorge 2026 | TinyInvest",
  description:
    "Tiny House oder ETF-Sparplan für die Altersvorsorge? Rendite, Risiko, Aufwand und Steuereffekte im direkten Vergleich – für Senioren & Rentner ab 55.",
  keywords:
    "tiny house vs etf altersvorsorge, etf sparplan altersvorsorge vergleich, tiny house oder etf, sachwert vs etf, rendite vergleich altersvorsorge 2026, tiny house rendite senioren",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-vs-etf-altersvorsorge",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House vs. ETF-Sparplan als Altersvorsorge 2026: Vergleich",
    description:
      "Rendite, Risiko, Cashflow und Steuereffekte: Direkter Vergleich Tiny House vs. ETF-Sparplan für die Altersvorsorge ab 55.",
    url: "https://tinyhouse.investments/wissen/tiny-house-vs-etf-altersvorsorge",
  },
};

const faqItems = [
  {
    question: "Kann ich mit 65 Jahren noch von §7g IAB profitieren?",
    answer:
      "Nur, wenn Sie noch gewerbliche oder freiberufliche Einkünfte haben (z. B. aus einem Einzelunternehmen, einer freiberuflichen Tätigkeit oder Nebeneinkünften wie Gutachten). Rein aus Renteneinkünften ist kein IAB bildbar. Für Investoren ohne laufende Gewerbeeinkünfte bleibt die reguläre AfA als Steuereffekt erhalten — was die Steuerlast auf die Mieteinnahmen in den ersten Jahren erheblich reduziert.",
  },
  {
    question: "Wie liquide ist ein Tiny House im Vergleich zu einem ETF-Depot?",
    answer:
      "Ein ETF lässt sich in Sekunden verkaufen — ein Tiny House braucht im Schnitt 4–8 Wochen. Dafür schwankt der Wert des Tiny Houses deutlich weniger: Gebrauchte Vlemmix-Einheiten handeln bei ca. 55.000–65.000 € nach 5 Jahren, weitgehend unabhängig von Börsenschwankungen. Wer Liquidität benötigt, sollte einen Notgroschen (3–6 Monatsausgaben) liquide halten und das Tiny House als mittelfristigen Baustein betrachten.",
  },
  {
    question: "Was passiert mit meinem ETF-Depot bei einem Marktcrash kurz vor der Rente?",
    answer:
      "Das ist das sogenannte Sequence-of-Returns-Risiko: Wer kurz vor oder nach Rentenbeginn einen starken Kurseinbruch erlebt, kann sein Depot dauerhaft schädigen, da er zu günstigen Preisen verkaufen muss, um den Lebensunterhalt zu finanzieren. Ein Tiny House ist davon weitgehend entkoppelt — der Cashflow aus Mieteinnahmen läuft unabhängig von der Börse.",
  },
  {
    question: "Ist eine Kombination aus ETF und Tiny House sinnvoll?",
    answer:
      "Ja, und das ist die häufigste Strategie unserer Investoren. Das ETF-Depot liefert langfristiges Wachstum und Liquidität, das Tiny House liefert monatlichen Cashflow und einen Inflationsschutz durch den Sachwert. Beide Instrumente ergänzen sich gut — sie korrelieren kaum miteinander.",
  },
  {
    question: "Wie wird der Cashflow aus dem Tiny House steuerlich behandelt?",
    answer:
      "Die Mieteinnahmen unterliegen der Einkommensteuer. In den ersten Jahren können Sie die Abschreibungen (AfA) gegenrechnen, was die Steuerlast deutlich reduziert. ETF-Gewinne unterliegen der Abgeltungssteuer von 25 % (+ Soli). Je nach persönlichem Steuersatz kann ein Tiny House im Ruhestand steuerlich günstiger sein als hohe ETF-Entnahmen. Ein Steuerberater klärt die individuelle Situation.",
  },
];

export default function TinyHouseVsEtfAltersvorsorge() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House vs. ETF-Sparplan als Altersvorsorge: Rendite, Risiko & Aufwand im Vergleich 2026",
    "description": "Tiny House oder ETF-Sparplan für die Altersvorsorge? Rendite, Risiko, Aufwand und Steuereffekte im direkten Vergleich – für Senioren & Rentner ab 55.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-vs-etf-altersvorsorge",
    "datePublished": "2026-05-23",
    "dateModified": "2026-05-23",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-renditeobjekt-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House vs. ETF Altersvorsorge", "item": "https://tinyhouse.investments/wissen/tiny-house-vs-etf-altersvorsorge" },
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

  const vergleichRows = [
    ["Rendite p.a.", "6–8 % (brutto, historisch MSCI World)", "11–16 % (Cash-on-Cash + §7g-Effekt)"],
    ["Monatlicher Cashflow", "Nein (Entnahmeplan nötig)", "Ja – ab Monat 1 (40 % der Mieteinnahmen)"],
    ["Marktabhängigkeit", "Hoch (Kursrisiko kurz vor Rente)", "Gering (Mietmarkt, nicht Börse)"],
    ["Sachwert / Inflationsschutz", "Nein (Papiervermögen)", "Ja (physisches Gut mit Restwert)"],
    ["Aufwand", "Gering (rebalancing)", "Keiner (vollverwaltet durch lokale Partner)"],
    ["Einstieg", "Ab 50 €/Monat (Sparplan)", "Ab 65.000 € (einmalig)"],
    ["§7g IAB nutzbar", "Nein", "Ja (bei gewerblichen Einkünften)"],
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-etf-vergleich" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-etf-vergleich" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-etf-vergleich" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House vs. ETF Altersvorsorge</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich · Altersvorsorge · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House vs. ETF-Sparplan als Altersvorsorge: Rendite, Risiko & Aufwand im Vergleich 2026
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-23">23. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            ETF-Sparpläne sind die beliebteste private Altersvorsorge der letzten Jahre. Tiny Houses sind ein neues Segment. Dieser Guide vergleicht beide ehrlich: Rendite, Risiko, Cashflow, Steuereffekte und den entscheidenden Unterschied für Senioren — das Sequence-of-Returns-Risiko.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-renditeobjekt-aussen.webp" alt="Tiny House als Renditeobjekt – Vergleich mit ETF-Sparplan" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ehrlicher Vergleich", "Cashflow vs. Entnahmeplan", "Sequence-of-Returns-Risiko", "§7g IAB", "Kombinierbar"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              ETF-Sparpläne auf den MSCI World haben historisch 6–8 % Rendite pro Jahr geliefert. Das ist beeindruckend — aber für Altersvorsorge gibt es eine wichtige Einschränkung: ETFs liefern keinen automatischen monatlichen Cashflow. Wer im Ruhestand von ETF-Erträgen leben will, muss selbst einen Entnahmeplan aufstellen und dabei das größte Risiko managen, das Anleger kurz vor und nach dem Rentenbeginn kennen: das Sequence-of-Returns-Risiko.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House funktioniert anders: Es zahlt 40 % der Mieteinnahmen monatlich aus — unabhängig von Börsenkursen, Zinsniveaus oder wirtschaftlichen Zyklen. Dieser Vergleich zeigt, wann welches Instrument die bessere Wahl ist.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">ETF-Sparplan zur Altersvorsorge — Chancen und Grenzen</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein breit gestreuter ETF auf den MSCI World oder MSCI All Country World ist eine der effizientesten Methoden, langfristig Vermögen aufzubauen. Kosten unter 0,2 %, keine Fondsmanager, maximale Diversifikation — das Argument für ETFs in der Ansparphase ist überzeugend.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Schwäche zeigt sich in der Entnahmephase. Wer mit 65 Jahren monatlich 1.000 € aus einem 200.000 €-Depot entnimmt, zahlt zunächst keine Steuern (Freibetrag) — aber wer zufällig kurz nach Rentenbeginn einen starken Kurseinbruch erlebt (-30 % oder mehr), muss zu günstigen Preisen verkaufen, was das Depot dauerhaft schädigt. Dieses Sequence-of-Returns-Risiko ist real und unterschätzt.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-[13px] text-amber-900 mb-5">
              <p className="font-black mb-1">Das Sequence-of-Returns-Risiko</p>
              <p>Zwei Investoren mit identischen Depotständen (200.000 €) und identischer Durchschnittsrendite (6 %/Jahr) können nach 20 Jahren völlig unterschiedliche Ergebnisse haben — je nachdem, ob die schlechten Jahre am Anfang oder Ende der Entnahmephase liegen. Wer die schlechten Jahre zuerst hat, kann sein Depot halbieren, obwohl die Gesamtrendite identisch ist.</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Tiny House als Altersvorsorge — das Cashflow-Modell</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House ist kein Wachstumsinstrument im ETF-Sinne. Es ist ein Cashflow-Instrument: Sie investieren einmalig und erhalten danach monatliche Auszahlungen — ohne Entnahmeplan, ohne Sequence-of-Returns-Risiko, ohne Börsenabhängigkeit.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Hinzu kommt der steuerliche Hebel für Investoren mit noch laufenden Gewerbeeinkünften: Der §7g IAB erlaubt es, bis zu 50 % des Kaufpreises im Jahr vor dem Kauf steuerlich abzuziehen — was die effektive Investitionssumme erheblich reduziert und die IRR-Rendite auf 16–18 % p.a. hebt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Direkter Vergleich: Tiny House vs. ETF-Sparplan</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Kriterium</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">ETF-Sparplan</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {vergleichRows.map(([kriterium, etf, tiny]) => (
                    <tr key={kriterium} className="hover:bg-gray-50/50">
                      <td className="p-4 font-semibold text-gray-700">{kriterium}</td>
                      <td className="p-4 text-center text-gray-500">{etf}</td>
                      <td className="p-4 text-center font-semibold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Kombinationsstrategie: ETF + Tiny House</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die meisten unserer Investoren kombinieren beide Instrumente. Das ETF-Depot liefert langfristiges Wachstum und Liquidität für größere Ausgaben. Das Tiny House liefert stabilen monatlichen Cashflow, der die Grundausgaben deckt — unabhängig von der Börsenentwicklung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Diese Kombination eliminiert das Sequence-of-Returns-Risiko: Wenn die Börse einbricht, entnehmen Sie nichts aus dem ETF-Depot und leben von den Tiny House-Einnahmen. Wenn die Börse gut läuft, wachsen ETF und Depot unberührt weiter.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/senioren" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Senioren & Rentner →</Link>
            <Link href="/wissen/tiny-house-altersvorsorge" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Altersvorsorge Guide →</Link>
            <Link href="/wissen/rentenlucke-schliessen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rentenlücke schließen →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House vs. ETF als Altersvorsorge</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Persönliche Analyse</p>
            <h3 className="text-xl font-black mb-3">ETF oder Tiny House — was passt zu Ihnen?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Wir vergleichen Ihre persönliche Situation und zeigen, welcher Mix aus Sachwert und Depot für Ihren Ruhestand optimal ist.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Beratung anfordern →</ModalButton>
              <Link href="/rechner/rendite" className="border border-white/20 text-white hover:border-white/50 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Renditerechner →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
