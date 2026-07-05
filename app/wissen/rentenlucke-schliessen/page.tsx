import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Rentenlücke schließen: Cashflow mit Tiny House | TinyInvest",
  description:
    "Rentenlücke von 800–1.200 €/Monat schließen – mit monatlichen Mieteinnahmen aus einem über lokale Partner betriebenen Tiny House. Kein Aufwand, echter Sachwert.",
  keywords:
    "rentenlücke schließen, rentenlücke 2026, rentenluecke schliessen, passives einkommen ruhestand, rente aufbessern, tiny house rentner, monatliche einnahmen im alter",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/rentenlucke-schliessen",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Rentenlücke schließen 2026: Monatlicher Cashflow mit Tiny House",
    description:
      "Wie ein über lokale Partner betriebenes Tiny House die Rentenlücke mit monatlichem Cashflow schließt — ab 65.000 €, kein aktiver Aufwand.",
    url: "https://tinyhouse.investments/wissen/rentenlucke-schliessen",
  },
};

const faqItems = [
  {
    question: "Wie verlässlich ist der monatliche Cashflow aus einem Tiny House?",
    answer:
      "Der Cashflow basiert auf der Belegungsquote des Tiny Houses im lokale Partner Netzwerk. Historisch lag die durchschnittliche Belegung bei 60–70 %. Bei 60 % Belegung und 100 €/Nacht ergibt das rund 720 € monatlich für den Investor. Standort, Saison und Ausstattung beeinflussen die Auslastung. Eine Garantie kann nicht gegeben werden — wir empfehlen die konservative Kalkulation mit 50 % Belegung für die Planung.",
  },
  {
    question: "Wie viel muss ich investieren, um 800 € monatlich zu erhalten?",
    answer:
      "Bei 60 % Belegung und 100 €/Nacht erhalten Sie pro 79.000 € Investition rund 720 € monatlich. Um 800 € monatlich zu erzielen, benötigen Sie entweder ein etwas höheres Modell (ab ca. 88.000 €) oder eine leicht höhere Belegungsquote. Unser Renditerechner zeigt die genauen Zahlen für Ihre Situation.",
  },
  {
    question: "Was passiert, wenn die Belegungsquote sinkt?",
    answer:
      "Bei 40 % Belegung (Worst-Case-Szenario) erhalten Sie noch rund 480 € monatlich — immer noch ein positiver Cashflow, der die Rentenlücke teilweise schließt. Der Sachwert des Tiny Houses bleibt davon unberührt: Das Haus ist jederzeit verkaufbar oder kann umgestellt werden.",
  },
  {
    question: "Kann ich das Tiny House später selbst bewohnen?",
    answer:
      "Ja. Das Tiny House bleibt dauerhaft Ihr Eigentum. Sie können die Mietphase jederzeit beenden und das Haus auf einem geeigneten Stellplatz selbst bewohnen — oder es verkaufen. Der typische Wiederverkaufswert nach 5 Jahren liegt bei ca. 55.000 € (auf Basis aktueller Gebrauchtmarktdaten für Vlemmix-Einheiten).",
  },
  {
    question: "Muss ich die Mieteinnahmen versteuern?",
    answer:
      "Ja, die Mieteinnahmen unterliegen der Einkommensteuer. Sie können die Abschreibungen (AfA) gegenrechnen, was die Steuerlast in den ersten Jahren erheblich reduziert. Ein Steuerberater kann die genaue steuerliche Behandlung für Ihre individuelle Situation klären.",
  },
];

export default function RentenluckeSchliessen() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rentenlücke schließen: Wie ein Tiny House monatlichen Cashflow im Ruhestand liefert",
    "description": "Rentenlücke von 800–1.200 €/Monat schließen – mit monatlichen Mieteinnahmen aus einem über lokale Partner betriebenen Tiny House. Kein Aufwand, echter Sachwert.",
    "url": "https://tinyhouse.investments/wissen/rentenlucke-schliessen",
    "datePublished": "2026-05-23",
    "dateModified": "2026-05-23",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Rentenlücke schließen", "item": "https://tinyhouse.investments/wissen/rentenlucke-schliessen" },
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

  const lueckeRows = [
    ["500 €", "55.000 € (Comfort-Modell)", "50 %", "~500 €"],
    ["700 €", "79.000 € (Escape-Modell)", "60 %", "~720 €"],
    ["1.000 €", "ca. 110.000 €", "60 %", "~1.000 €"],
    ["1.200 €", "ca. 130.000 €", "60 %", "~1.190 €"],
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-rentenluecke" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-rentenluecke" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-rentenluecke" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Rentenlücke schließen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Ruhestand · Cashflow · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Rentenlücke schließen: Wie ein Tiny House monatlichen Cashflow im Ruhestand liefert
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
            Die durchschnittliche Rentenlücke in Deutschland liegt bei 800 bis 1.200 € pro Monat. Klassische Produkte — Riester, Sparbuch, Lebensversicherung — decken sie kaum. Dieser Guide zeigt, wie ein einzelnes Tiny House die Lücke mit monatlichem Cashflow schließt — mit geringem Aufwand über lokale Partner.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House als Sachwert – Rentenlücke schließen" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ab 65.000 €", "~720 €/Monat", "40 % Investor-Anteil", "mit geringem Aufwand über lokale Partner", "Kein Aufwand"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Laut Deutschem Institut für Wirtschaftsforschung (DIW) beträgt die durchschnittliche Versorgungslücke im Ruhestand rund 700 bis 1.200 € pro Monat — die Differenz zwischen dem letzten Nettolohn und dem, was Rente, Riester und Betriebsrente zusammen ausschütten. Diese Lücke wächst: Durch sinkende Rentenniveaus, steigende Lebenshaltungskosten und lange Rentenbezugsdauern wird das Problem größer, nicht kleiner.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House über TinyInvest bietet einen strukturell anderen Ansatz: Statt Jahrzehnte zu sparen und auf eine Versicherungsleistung zu warten, kaufen Sie einen physischen Sachwert, der Ihnen ab dem ersten Monat 40 % der Mieteinnahmen auszahlt — über lokale Partner bewirtschaftet durch das lokale Partnernetzwerknetzwerk.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Was ist die Rentenlücke — und warum wird sie größer?</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das gesetzliche Rentenniveau liegt heute bei rund 48 % des letzten Bruttolohns — und wird bis 2040 auf unter 45 % sinken, wenn keine politischen Korrekturen erfolgen. Wer 4.000 € brutto verdiente, erhält also rund 1.920 € Rente. Nach Abzügen für Krankenversicherung und Pflegeversicherung bleiben netto oft unter 1.700 €.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Gleichzeitig steigen Wohn-, Energie- und Gesundheitskosten. Die reale Kaufkraft der Rente sinkt. Riester und betriebliche Altersvorsorge decken statistisch nur rund 200–300 € der Lücke — zu wenig für einen sorgenfreien Ruhestand.
            </p>
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "48 %", label: "Rentenniveau heute" },
                  { value: "800–1.200 €", label: "Durchschnittliche Lücke/Monat" },
                  { value: "2040", label: "Rentenniveau fällt auf ~45 %" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-black text-2xl text-green-400 mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-[11px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Tiny House als Baustein: 40 % der Mieteinnahmen monatlich</h2>
          <div className="max-w-3xl mb-5">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Grundprinzip ist einfach: Sie kaufen ein Tiny House, lokale Partner betreibt es als Ferienunterkunft auf einem verifizierten Stellplatz, und Sie erhalten 40 % der Netto-Mieteinnahmen monatlich ausgezahlt. Kein Gäste-Check-in, keine Reinigung, keine Kommunikation mit Vermietern — alles läuft ohne Ihr Zutun.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-10">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">Rechenbeispiel: Escape 79.000 € · 60 % Belegung · 100 €/Nacht</p>
            <div className="space-y-2.5">
              {[
                { label: "Nächte/Jahr (60 % von 365)", value: "219 Nächte" },
                { label: "Brutto-Umsatz", value: "21.900 €/Jahr" },
                { label: "Host-Anteil (45 %)", value: "– 9.855 €" },
                { label: "Plattform-Fee (15 %)", value: "– 3.285 €" },
                { label: "💰 Investor-Anteil (40 %)", value: "8.760 €/Jahr · 730 €/Monat", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 text-[13px] ${row.highlight ? "text-green-400 font-black" : "text-gray-300"}`}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Rentenlücke 800 €: Welche Investitionssumme brauche ich?</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Ziel-Cashflow/Monat</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Investitionssumme</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Belegung</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Erwarteter Cashflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {lueckeRows.map(([ziel, investition, belegung, cashflow], i) => (
                    <tr key={ziel} className={i === 1 ? "bg-green-50/50 font-semibold" : "hover:bg-gray-50/50"}>
                      <td className="p-4 text-gray-700">{ziel}</td>
                      <td className="p-4 text-center text-gray-500">{investition}</td>
                      <td className="p-4 text-center text-gray-500">{belegung}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{cashflow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 p-4 border-t border-gray-100">* Basis: 100 €/Nacht. Angaben ohne Gewähr. Individuelle Kalkulation über unseren Renditerechner.</p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Wann sollte ich anfangen?</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Je früher, desto besser — aber auch mit 65 oder 70 Jahren ist ein Tiny House-Investment sinnvoll. Anders als ETF-Sparpläne, bei denen ein früher Start entscheidend ist, gibt ein Tiny House bereits ab dem ersten Monat Cashflow. Es gibt keine Ansparphase.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer mit 55 Jahren investiert und das Objekt 15 Jahre hält, erzielt bei 60 % Belegung rund 130.000 € an Mietauszahlungen — plus den Restwert des Hauses von ca. 40.000–50.000 €. Das Gesamtbild über den Lebenszyklus ist erheblich besser als bei klassischen Rentenprodukten.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-[13px] text-amber-900">
              <p className="font-black mb-1">Hinweis</p>
              <p>Die genannten Renditen basieren auf historischen Auslastungsdaten. Individuelle Ergebnisse können abweichen. Wir empfehlen eine persönliche steuerliche Beratung vor der Investitionsentscheidung.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/senioren" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Senioren & Rentner →</Link>
            <Link href="/wissen/tiny-house-altersvorsorge" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Altersvorsorge Vergleich →</Link>
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Renditemodell erklärt →</Link>
            <Link href="/wissen/ferienimmobilie-steuer" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Ferienimmobilie Steuer →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Rentenlücke & Tiny House Cashflow</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Persönliche Kalkulation</p>
            <h3 className="text-xl font-black mb-3">Wie viel schließt ein Tiny House Ihre Lücke?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Wir berechnen Ihren persönlichen Cashflow auf Basis Ihrer Investitionssumme — kostenlos und in 10 Minuten.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/rechner/rendite" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">Zum Renditerechner →</Link>
              <ModalButton className="border border-white/20 text-white hover:border-white/50 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Beratung anfordern →</ModalButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
