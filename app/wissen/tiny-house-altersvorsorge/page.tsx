import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Altersvorsorge: Sachwert statt Riester | TinyInvest",
  description:
    "Riester, ETF oder Tiny House? Warum ein über lokale Partner betriebenes Tiny House als Altersvorsorge mehr bringt – monatlicher Cashflow statt Rentenpunkte.",
  keywords:
    "tiny house altersvorsorge, altersvorsorge sachwert, riester alternative, tiny house rente, sachwert altersvorsorge 2026, tiny house senioren investment, passive einnahmen ruhestand",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-altersvorsorge",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House als Altersvorsorge 2026: Sachwert statt Riester",
    description:
      "Monatlicher Cashflow statt Rentenpunkte: Wie ein über lokale Partner betriebenes Tiny House die Rentenlücke schließt – ab 65.000 €, kein Aufwand.",
    url: "https://tinyhouse.investments/wissen/tiny-house-altersvorsorge",
  },
};

const faqItems = [
  {
    question: "Sollte ich meine Riester-Rente kündigen, um in ein Tiny House zu investieren?",
    answer:
      "Eine Kündigung des Riester-Vertrags ist in den meisten Fällen nicht sinnvoll, da die staatlichen Förderungen und Steuervorteile zurückgezahlt werden müssen. Sinnvoller ist es, beide Strategien zu kombinieren: Riester als Basis laufen lassen und das Tiny House zusätzlich als Sachwert-Baustein zur Rentenaufbesserung einzusetzen. Lassen Sie sich dazu von einem Steuerberater beraten.",
  },
  {
    question: "Ab welchem Alter ist ein Tiny House als Altersvorsorge noch sinnvoll?",
    answer:
      "Grundsätzlich ab 50–55 Jahren. Wer noch eine freiberufliche oder gewerbliche Tätigkeit ausübt, kann zusätzlich den §7g IAB nutzen und die Steuerlast im Kaufjahr erheblich reduzieren. Auch Rentner ohne laufende Einkünfte profitieren vom monatlichen Cashflow – der §7g-Steuerhebel entfällt dann, aber der Sachwert und die monatliche Auszahlung bleiben vollständig erhalten.",
  },
  {
    question: "Kann ich ein Tiny House als Altersvorsorge mit meiner gesetzlichen Rente kombinieren?",
    answer:
      "Ja, und genau dafür ist es konzipiert. Die monatlichen Mieteinnahmen (40 % der Netto-Einnahmen) ergänzen die gesetzliche Rente direkt. Bei 60 % Belegung und 100 € Durchschnittspreis/Nacht sind das rund 720 € monatlich – ein messbarer Aufschlag auf die typische Rentenlücke von 800–1.200 €.",
  },
  {
    question: "Kann ich das Tiny House später selbst bewohnen?",
    answer:
      "Ja. Das Tiny House bleibt dauerhaft Ihr Eigentum. Nach der Mietphase können Sie es auf einem geeigneten Stellplatz selbst aufstellen und bewohnen – oder verkaufen. Der Wiederverkaufswert liegt nach 5 Jahren typischerweise bei ca. 55.000 € (auf Basis aktueller Gebrauchtmarktpreise für Vlemmix-Einheiten). Die Mobilität des Hauses ist dabei ein wesentlicher Vorteil gegenüber einer Eigentumswohnung.",
  },
  {
    question: "Wie hoch ist der Mindestbetrag für ein Tiny House Investment?",
    answer:
      "Der Einstieg beginnt bei 65.000 € für das Comfort-Modell. Das Escape-Modell liegt bei 79.000 €. Durch den IAB-Effekt (bis zu 50 % Vorabsteuerabzug im Jahr vor dem Kauf) reduziert sich die effektive Liquiditätsbelastung für Investoren mit gewerblichen Einkünften auf ca. 48.000–51.000 €.",
  },
];

export default function TinyHouseAltersvorsorge() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House als Altersvorsorge 2026: Sachwert statt Riester — was rechnet sich wirklich?",
    "description": "Riester, ETF oder Tiny House? Warum ein über lokale Partner betriebenes Tiny House als Altersvorsorge mehr bringt – monatlicher Cashflow statt Rentenpunkte.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-altersvorsorge",
    "datePublished": "2026-05-23",
    "dateModified": "2026-05-23",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-naturlage-gruen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House Altersvorsorge", "item": "https://tinyhouse.investments/wissen/tiny-house-altersvorsorge" },
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
    ["Rendite p.a.", "1–2 % (bei Riester-Rentenfaktor)", "6–8 % (brutto, MSCI World historisch)", "11–16 % (Cash-on-Cash + §7g)"],
    ["Staatliche Förderung", "175 €/Jahr Zulage", "Keine", "§7g IAB – bis zu 39.500 € Sofortabzug"],
    ["Monatlicher Cashflow", "Nein (Auszahlung erst ab Rentenalter)", "Nein (Entnahmeplan nötig)", "Ja – ab Monat 1"],
    ["Sachwert", "Nein (Versicherungsanspruch)", "Nein (Papiervermögen)", "Ja (physisches Gut)"],
    ["Flexibilität", "Gering (Kündigung mit Verlusten)", "Hoch (Börsenabhängig)", "Mittel (Wiederverkauf möglich)"],
    ["Vererbbar", "Eingeschränkt", "Ja", "Ja"],
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-altersvorsorge" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-altersvorsorge" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-altersvorsorge" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House Altersvorsorge</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Altersvorsorge · Sachwert · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Altersvorsorge: Sachwert statt Riester — was rechnet sich wirklich?
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
            Die gesetzliche Rente ersetzt im Schnitt nur 48 % des letzten Nettogehalts. Riester steuert wenig bei. ETFs schwanken im schlechtesten Moment. Dieser Guide zeigt, wie ein Tiny House als Sachwert mit monatlichem Cashflow die Lücke schließt — ohne aktiven Aufwand im Ruhestand.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-naturlage-gruen.webp" alt="Tiny House in naturnaher Lage – Altersvorsorge als Sachwert" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Monatlicher Cashflow", "Echter Sachwert", "Ab 65.000 €", "mit geringem Aufwand über lokale Partner", "Vererbbar"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Realität der deutschen Altersvorsorge ist ernüchternd: Wer heute 3.000 € netto verdient, bekommt im Ruhestand nach 45 Beitragsjahren im Schnitt 1.450 € Rente — ein Ersatz von unter 50 %. Die monatliche Lücke von 800 bis 1.200 € soll Riester schließen. Doch der staatliche Zuschuss von 175 € pro Jahr und die bescheidenen Renditen klassischer Riester-Produkte reichen dafür kaum aus.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House bietet einen anderen Ansatz: Anstatt Kapital über Jahrzehnte anzusparen und auf eine Versicherungsleistung zu warten, kaufen Sie einen physischen Sachwert, der vom ersten Monat an Einnahmen generiert — über lokale Partner bewirtschaftet durch das lokale Partnernetzwerknetzwerk.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Das Riester-Problem — und warum Sachwerte besser abschneiden</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Riester-Verträge sind staatlich gefördert, aber strukturell begrenzt. Der Grundzuschuss beträgt 175 € pro Jahr, Kinderzulagen kommen hinzu. Das klingt nach einem Vorteil — bis man die Kosten der Versicherungsprodukte, die langen Laufzeiten und die geringe Flexibilität einrechnet.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Fondspolicen im Riester-Mantel müssen 100 % des eingezahlten Kapitals zum Rentenbeginn garantieren. Das erzwingt eine konservative Anlage — und drückt die Rendite. Wer 30 Jahre lang monatlich 200 € einzahlt, erhält mit Zulagen im besten Fall eine monatliche Zusatzrente von 300–400 €. Auf einen Schlag 65.000 € in einen Sachwert zu investieren, der 720 € monatlich auszahlt, ist eine strukturell überlegene Alternative.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Der entscheidende Unterschied: Ein Tiny House ist kein Versicherungsversprechen. Es ist ein physisches Wirtschaftsgut, das Sie besitzen, das Einnahmen generiert und das Sie jederzeit verkaufen, vererben oder selbst nutzen können.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Wie das Tiny House-Modell für Senioren funktioniert</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { step: "01", title: "Objekt auswählen", desc: "Wählen Sie aus verfügbaren Tiny Houses ab 65.000 €. TinyInvest vermittelt Stellplatz, Genehmigung und Betrieb." },
              { step: "02", title: "lokale Partner übernehmen", desc: "Buchungen, Gästebetreuung, Reinigung, Wartung — alles wird mit geringem Aufwand über lokale Partner durch das lokale Partnernetzwerknetzwerk abgewickelt." },
              { step: "03", title: "Monatlich kassieren", desc: "40 % der Netto-Mieteinnahmen werden automatisch ausgezahlt. Bei 60 % Belegung sind das rund 720 € pro Monat." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <span className="text-green-700 font-black text-2xl">{item.step}</span>
                <h3 className="font-black text-gray-900 mt-2 mb-2 text-base">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Vergleich: Riester vs. ETF vs. Tiny House als Altersvorsorge</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Kriterium</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Riester</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">ETF-Sparplan</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {vergleichRows.map(([kriterium, riester, etf, tiny]) => (
                    <tr key={kriterium} className="hover:bg-gray-50/50">
                      <td className="p-4 font-semibold text-gray-700">{kriterium}</td>
                      <td className="p-4 text-center text-gray-500">{riester}</td>
                      <td className="p-4 text-center text-gray-500">{etf}</td>
                      <td className="p-4 text-center font-semibold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Wann ist ein Tiny House als Altersvorsorge sinnvoll?</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Tiny House als Altersvorsorge eignet sich besonders für Menschen zwischen 50 und 70 Jahren, die einen konkreten Einkommensbaustein für den Ruhestand suchen — ohne dabei auf Liquidität verzichten zu müssen. Der Anlagehorizont ist flexibel: Sie können das Objekt nach 5 Jahren verkaufen oder dauerhaft im Bestand halten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Besonders attraktiv ist das Modell für Selbstständige, Freiberufler und Unternehmer, die noch beruflich aktiv sind: Sie können den §7g Investitionsabzugsbetrag nutzen und bis zu 50 % des Kaufpreises noch im Jahr vor dem Kauf steuerlich absetzen — das reduziert die effektive Investitionssumme erheblich.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-[13px] text-amber-900">
              <p className="font-black mb-1">Hinweis</p>
              <p>Die genannten Renditen basieren auf historischen Auslastungsdaten des lokale Partner Netzwerks. Individuelle Ergebnisse können abweichen. Wir empfehlen eine persönliche steuerliche Beratung vor der Investitionsentscheidung.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/senioren" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Senioren & Rentner →</Link>
            <Link href="/wissen/rentenlucke-schliessen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rentenlücke schließen →</Link>
            <Link href="/wissen/tiny-house-vs-etf-altersvorsorge" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House vs. ETF →</Link>
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Renditemodell erklärt →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House als Altersvorsorge</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Persönliche Beratung</p>
            <h3 className="text-xl font-black mb-3">Wie viel Cashflow brauchen Sie im Ruhestand?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Wir rechnen gemeinsam durch, welche Objektgröße Ihre Rentenlücke schließt — kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Beratung anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-white/50 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
