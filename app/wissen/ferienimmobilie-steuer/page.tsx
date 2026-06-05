import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Ferienimmobilie als Kapitalanlage 2026 | TinyInvest",
  description:
    "Ferienimmobilie kaufen als Kapitalanlage: Steuern, AfA, Rendite und der Vergleich mit Tiny House Investments. Was sich 2026 wirklich lohnt.",
  keywords:
    "ferienimmobilie als kapitalanlage, ferienimmobilie steuer 2026, ferienimmobilie rendite, ferienhaus kaufen investition, ferienimmobilie afa abschreibung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/ferienimmobilie-steuer" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Ferienimmobilie als Kapitalanlage 2026 | TinyInvest",
    description: "Alles über Steuern, AfA und Rendite bei Ferienimmobilien – und warum Tiny Houses das bessere Modell sind.",
    url: "https://tinyhouse.investments/wissen/ferienimmobilie-steuer",
  },
};

const faqItems = [
  {
    question: "Wie wird eine Ferienimmobilie steuerlich behandelt?",
    answer: "Einkünfte aus Ferienvermietung werden als Einkünfte aus Vermietung und Verpachtung (§21 EStG) oder gewerbliche Einkünfte (§15 EStG) behandelt. Abschreibung: 2 % pro Jahr (50 Jahre) auf den Gebäudeanteil. Kaufnebenkosten (Grunderwerbsteuer 3,5–6,5 %, Notar, Makler) sind nicht direkt absetzbar, sondern werden auf die Nutzungsdauer verteilt.",
  },
  {
    question: "Gilt §7g auch für klassische Ferienimmobilien?",
    answer: "Nein. §7g EStG gilt nur für bewegliche Wirtschaftsgüter. Ein Ferienhaus oder eine Ferienwohnung sind unbewegliche Wirtschaftsgüter (Grundstück + Gebäude) und fallen nicht unter §7g. Das ist der entscheidende steuerliche Vorteil von Tiny Houses auf Vlemmix Trailern: sie gelten als beweglich.",
  },
  {
    question: "Was ist die 75-%-Regel bei Ferienimmobilien?",
    answer: "Wer eine Ferienimmobilie vermietet, muss in Deutschland belegen, dass die Vermietungsabsicht dauerhaft besteht. Als Faustregel gilt: Wer weniger als 75 % der ortsüblichen Vermietungszeit vermietet, dem kann das Finanzamt die Abzugsfähigkeit der Verluste verwehren (Liebhaberei). Das betrifft Privatvermieter ohne Betreiber.",
  },
  {
    question: "Ist eine Ferienimmobilie nach 10 Jahren steuerfrei verkaufbar?",
    answer: "Ja, für Privatpersonen gilt die 10-jährige Spekulationsfrist (§23 EStG). Nach 10 Jahren Haltedauer ist der Veräußerungsgewinn steuerfrei. Für gewerbliche Vermieter gilt dies nicht. Tiny Houses unterliegen als bewegliche Wirtschaftsgüter anderen Regeln – die Haltefrist ist deutlich kürzer.",
  },
];

export default function FerienimmobilieSteuerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite",
    "description": "Ferienimmobilie kaufen als Kapitalanlage: Steuern, AfA, Rendite und der Vergleich mit Tiny House Investments. Was sich 2026 wirklich lohnt.",
    "url": "https://tinyhouse.investments/wissen/ferienimmobilie-steuer",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/ferienimmobilie-steuer.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Ferienimmobilie", "item": "https://tinyhouse.investments/wissen/ferienimmobilie-steuer" }
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
      <Script id="faq-schema-ferienimmobilie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-ferienimmobilie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-ferienimmobilie-steuer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Ferienimmobilie</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuern & Rendite · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Ferienimmobilie als Kapitalanlage 2026: Steuern & Rendite
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
            Ferienimmobilien klingen attraktiv – hohe Nächtigungspreise, schöne Lage, steuerliche Absetzbarkeit. Doch was bleibt netto? Und warum Tiny Houses das steuerlich überlegene Modell sind.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image src="/images/outside/ferienimmobilie-steuer.webp" alt="Ferienimmobilie vs. Tiny House – Steuervergleich 2026" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ferienimmobilie", "§21 EStG", "AfA 2 %", "Spekulationsfrist", "vs. Tiny House"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Fließtext */}
          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Der Traum vom eigenen Feriendomizil ist ungebrochen: Ein idyllisches Objekt am See oder in den Bergen, das durch glückliche Feriengäste finanziert wird und nebenbei fette Renditen abwirft. Doch wer sich im Jahr 2026 den harten steuerlichen Realitäten in Deutschland stellt, merkt schnell: Die klassische Ferienimmobilie ist oft ein Renditefresser.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Der Grund dafür liegt nicht an mangelnden Urlaubern, sondern an einer starren und veralteten Steuergesetzgebung für unbewegliche Wirtschaftsgüter. Hier kommt die Disruption des Immobilienmarktes: Das Tiny House als mobiles Investitionsobjekt. Warum Tiny Houses der klassischen Ferienwohnung steuerlich und strategisch haushoch überlegen sind, zeigt der direkte Vergleich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Steuer-Turbo: Beweglich vs. Unbeweglich</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Der alles entscheidende Hebel im deutschen Steuerrecht ist die Unterscheidung zwischen beweglichen und unbeweglichen Wirtschaftsgütern.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-gray-900">Klassische Ferienimmobilie:</strong> Ein Ferienhaus ist fest mit dem Erdboden verbunden und gilt als unbeweglich. Das bedeutet für Sie als Investor: Die lineare Abschreibung (AfA) beträgt magere 2 % pro Jahr. Kaufen Sie ein Objekt für 300.000 € (wobei der reine Gebäudeanteil bei 200.000 € liegt), können Sie gerade einmal 4.000 € im Jahr steuerlich geltend machen. Es dauert geschlagene 50 Jahre, bis das Objekt voll abgeschrieben ist.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-gray-900">Tiny House (auf Trailern):</strong> Ein Tiny House auf einem Fahrgestell (z. B. einem Vlemmix Trailer) gilt steuerlich als bewegliches Wirtschaftsgut. Dies öffnet Tür und Tor für den Paragraphen § 7g EStG — ein Steuerwerkzeug, von dem Besitzer klassischer Immobilien nicht einmal träumen dürfen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Durch den Investitionsabzugsbetrag (IAB) und Sonderabschreibungen können Sie bis zu 70 % der Anschaffungskosten direkt im Kaufjahr steuerlich anrechnen lassen. Bei einem 80.000 € teuren Tiny House generieren Sie so im Handumdrehen bis zu 56.000 € an absetzbaren Kosten in nur 12 Monaten. Ihr zu versteuerndes Einkommen sinkt massiv, und Sie holen sich Liquidität sofort vom Finanzamt zurück, statt 50 Jahre darauf zu warten.
              </p>
            </div>

          </div>

          <div className="relative rounded-2xl overflow-hidden mb-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-hero.webp" alt="Tiny House Ferienunterkunft" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Die Nebenkosten-Falle entlarvt</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Wer eine klassische Ferienimmobilie kauft, verbrennt vom Start weg enorm viel Eigenkapital, das keine Rendite abwirft.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Die Kaufnebenkosten bei Stein-auf-Stein-Immobilien fressen in Deutschland in der Regel 10 bis 15 % des Kaufpreises auf. Bei einem 300.000 € Objekt blättern Sie also 30.000 € bis 45.000 € bar für Grunderwerbsteuer, Notar und Makler hin. Das Schlimmste daran: Diese Kosten können Sie nicht einmal sofort steuerlich absetzen, sondern müssen sie mühsam über die Nutzungsdauer verteilen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Beim Tiny House fallen diese klassischen Kaufnebenkosten für das Gebäude schlichtweg weg. Da es sich um ein bewegliches Gut handelt, zahlen Sie weder Grunderwerbsteuer noch Notargebühren auf das Haus selbst. Jeder investierte Euro fließt direkt in den Sachwert und die Renditeerzeugung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Flexibilität statt „Liebhaberei"-Risiko</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Das Finanzamt schaut bei Ferienwohnungen ganz genau hin. Wenn Sie Ihr klassisches Ferienhaus zu oft selbst nutzen oder die Buchungszahlen in einer schwachen Region einbrechen, droht das Schreckgespenst der Liebhaberei.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-gray-900">Die harte 75-%-Regel:</strong> Wer mit seiner klassischen Ferienimmobilie weniger als 75 % der ortsüblichen Vermietungszeit erreicht, gerät unter Generalverdacht. Das Finanzamt geht dann davon aus, dass Sie keine echte Gewinnerzielungsabsicht haben, und streicht Ihnen rückwirkend die steuerliche Abzugsfähigkeit von Verlusten.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Tiny Houses hingegen bieten durch ihre Mobilität und das geringere Investitionsvolumen eine ganz andere Dynamik. Sollte sich ein Standort touristisch negativ entwickeln, zieht das Tiny House im Extremfall einfach um. Zudem ist die Haltefrist für den steuerfreien Verkauf bei beweglichen Wirtschaftsgütern deutlich kürzer als die starre 10-Jahres-Spekulationsfrist bei klassischen Immobilien.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Fazit: Der strukturelle Vorsprung des Tiny Houses</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Eine klassische Ferienimmobilie bindet riesige Mengen Kapital, belastet Sie mit hohen, nicht direkt absetzbaren Nebenkosten und tröpfelt steuerliche Vorteile über ein halbes Jahrhundert ab.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Das Tiny House bricht diese Regeln auf. Es nutzt die gesetzlichen Privilegien für bewegliche Wirtschaftsgüter perfekt aus: Maximale Abschreibung im Hier und Jetzt (§ 7g EStG), minimale Einstiegshürden und maximale Flexibilität. Wer im Jahr 2026 klug investieren und seine Steuerlast aktiv drücken will, für den führt der Weg weg vom klassischen Betongold und hin zum smarten, mobilen Tiny House Investment.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">Steuerhinweis</p>
                <p className="text-[12px] text-amber-800 leading-relaxed">Alle Steuerangaben sind allgemeiner Natur und keine Steuerberatung. Individuelle Steuereffekte hängen von der persönlichen Situation ab. Bitte konsultiere einen Steuerberater.</p>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/rechner/iab" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB-Rechner →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA-Guide →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen/tiny-house-airbnb" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Airbnb Vermietung →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Ferienimmobilie als Kapitalanlage</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Das steuerlich überlegene Modell entdecken</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">§7g-Analyse und vollständiges Investor-Paket – kostenlos anfordern.</p>
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
