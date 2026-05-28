import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Direktinvestment: Sachwert statt Fonds | TinyInvest",
  description:
    "Du kaufst ein physisches Tiny House – kein Fondsanteil, kein Token. Wie Direktinvestment in bewegliche Wirtschaftsgüter funktioniert und warum Sachwerte sicherer sind.",
  keywords:
    "tiny house direktinvestment, tiny house sachwert, direktinvestment bewegliche wirtschaftsgüter, tiny house eigentum kaufen, sachwert investment 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/direktinvestment",
  },
  openGraph: {
    title: "Tiny House als Direktinvestment – Sachwert statt Finanzprodukt",
    description:
      "Kein Fonds, kein Token: Du wirst echter Eigentümer eines physischen Tiny Houses. Was das bedeutet und warum es besser ist.",
    url: "https://tinyhouse.investments/wissen/direktinvestment",
  },
};

const faqItems = [
  {
    question: "Wie werde ich Eigentümer des Tiny Houses?",
    answer:
      "Der Kauf erfolgt über einen Kaufvertrag. Das Tiny House wird auf deinen Namen übergeeignet, du erhältst die Fahrzeugbriefe (Übereignungsurkunde) und bist rechtlicher Eigentümer des Trailers samt Aufbauten. Der Kaufvertrag wird in deinen Unterlagen hinterlegt. Es gibt keinen Zwischenhändler, keinen Fonds und kein Token dazwischen.",
  },
  {
    question: "Was passiert mit meinem Eigentum, wenn tiny Escapes insolvent wird?",
    answer:
      "Da das Tiny House dein Eigentum ist, ist es nicht Teil der Insolvenzmasse von tiny Escapes. Du kannst das Haus herausverlangen, an einen anderen Standort stellen und mit einem anderen Betreiber weiterführen. Das ist einer der wesentlichen Unterschiede zu fondsbasierten Investments, bei denen du im Insolvenzfall auf die Insolvenztabelle gesetzt wirst.",
  },
  {
    question: "Kann ich das Tiny House auch selbst nutzen oder verkaufen?",
    answer:
      "Ja. Als Eigentümer kannst du das Haus jederzeit selbst nutzen (z.B. Urlaub), verkaufen oder an einem neuen Standort neu vermieten. Es gibt eine Vereinbarung mit tiny Escapes über den Betrieb – aber das Eigentumsrecht bleibt jederzeit bestehen und schränkt deine grundsätzliche Verfügungsgewalt nicht ein.",
  },
  {
    question: "Worin unterscheidet sich das von Crowdinvesting in Immobilien?",
    answer:
      "Bei Crowdinvesting kaufst du einen Anteil an einer Gesellschaft oder einem Darlehen – du bist nie direkter Eigentümer des Sachwertes. TinyInvest verkauft dir das physische Asset: Du erhältst den Fahrzeugbrief, bist im Kaufvertrag namentlich eingetragen und hast volle Eigentumsrechte. Das senkt dein Risikoprofil erheblich.",
  },
  {
    question: "Muss ich das Tiny House selbst versichern?",
    answer:
      "Ja, als Eigentümer bist du Versicherungsnehmer. TinyInvest unterstützt dich bei der Auswahl geeigneter Kasko- und Haftpflichtversicherungen für das mobile Wirtschaftsgut. Typische Jahresprämien liegen bei 500–800 € je nach Deckungsumfang.",
  },
];

export default function DirektinvestmentPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House als Direktinvestment: Sachwert statt Finanzprodukt",
    "description": "Du kaufst ein physisches Tiny House – kein Fondsanteil, kein Token, kein abstraktes Finanzprodukt. Wie Direktinvestment in bewegliche Wirtschaftsgüter funktioniert.",
    "url": "https://tinyhouse.investments/wissen/direktinvestment",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/Tiny House als Direktinvestment Sachwert statt Finanzprodukt.jpg" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Direktinvestment", "item": "https://tinyhouse.investments/wissen/direktinvestment" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script
        id="faq-schema-direktinvestment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema-direktinvestment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Direktinvestment</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Sachwert-Investment · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Direktinvestment: Sachwert statt Finanzprodukt
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
            Kein Token, kein Fonds, kein Crowdinvesting-Darlehen. Bei TinyInvest wird dir ein Tiny House auf Vlemmix Trailer direkt übereignet. Du bist Eigentümer – mit allen Rechten, die dazugehören.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image src="/images/outside/Tiny House als Direktinvestment Sachwert statt Finanzprodukt.jpg" alt="Tiny House als Direktinvestment – Sachwert statt Finanzprodukt" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Direktes Eigentumsrecht", "Keine Fonds-Konstruktion", "Drittverwendungsfähig", "Sachwert mit Substanzwert"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── 1. Die neue Kapitalanlage-Architektur ── */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Die neue Architektur der Kapitalanlage</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die globale Finanzlandschaft befindet sich in einem tiefgreifenden Umbruch, der klassische Sparmodelle zunehmend entwertet. Während Inflation die Kaufkraft von Barvermögen aushöhlt und Aktienmärkte volatil bleiben, gewinnt eine Assetklasse an Bedeutung, die das Beste aus zwei Welten vereint: die Beständigkeit der Immobilie und die steuerliche Dynamik eines beweglichen Wirtschaftsguts.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei einer konventionellen Eigentumswohnung ist das Kapital oft über Jahrzehnte in einem starren Konstrukt gebunden – geprägt durch hohe Kaufnebenkosten und langsame Abschreibungszyklen von 50 Jahren. Ein Tiny House auf Vlemmix Trailer hingegen wird rechtlich als bewegliches Wirtschaftsgut behandelt und schreibt sich in acht Jahren ab. Das öffnet Steuerinstrumente, die bei klassischen Immobilien schlicht nicht existieren: IAB, Sonder-AfA und degressive AfA.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Der Investor erwirbt dabei kein abstraktes Papierversprechen, sondern wird zum vollwertigen Eigentümer eines physischen Objekts mit Seriennummer, Versicherbarkeit und realem Wiederverkaufswert. Diese Asset-Protection ist in unsicheren Zeiten ein unschätzbarer Vorteil: Der Gegenwert des Investments bleibt jederzeit greifbar.
            </p>
          </div>

          {/* ── Image ── */}
          <div className="relative rounded-2xl overflow-hidden mb-14" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-wald-naturstandort.webp" alt="Tiny House Standort Wald Natur" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* ── 2. Sachwert statt Papierversprechen ── */}
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Sachwert statt Papierversprechen</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei TinyInvest kaufst du ein Tiny House – nicht einen Fondsanteil, nicht ein Token, nicht eine Gewinnbeteiligung. Du erhältst den Fahrzeugbrief, bist im Kaufvertrag namentlich eingetragen und hast volle Verfügungsgewalt. Das ist der fundamentale Unterschied zu fast allen alternativen Investments, die heute als "Sachwert-Investment" vermarktet werden.
            </p>
            <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Die Frage, die jeder Investor stellen sollte</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Nicht: "Wie hoch ist die projizierte Rendite?" – sondern: <em>"Was besitze ich, wenn der Betreiber morgen nicht mehr existiert?"</em> Bei Crowdinvesting-Darlehen steht man auf der Gläubigerliste. Bei REIT-Anteilen ist die Aktie möglicherweise wertlos. Bei einem TinyInvest-Haus kann das Objekt herausverlangt und eigenständig weitergeführt werden. Das ist keine Marketingaussage – es ist die entscheidende rechtliche Realität.
            </p>
          </div>

          {/* Vergleichstabelle */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Crowdinvesting / Fonds</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">REIT / Aktie</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">TinyInvest (Direkt)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[12px]">
                  {[
                    ["Was du kaufst", "Darlehensanteil", "Aktienanteil", "Physisches Haus"],
                    ["Eigentumsrecht", "Keines", "Keines am Asset", "Vollständig"],
                    ["Insolvenzschutz", "Insolvenztabelle", "Aktien wertlos", "Asset herausverlangbar"],
                    ["Steuerliche AfA", "Nein", "Nein", "Ja – §7g EStG"],
                    ["Selbstnutzung möglich", "Nein", "Nein", "Ja"],
                    ["Standort wechselbar", "Nein", "Nein", "Ja (Trailer)"],
                  ].map(([merkmal, crowd, reit, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{merkmal}</td>
                      <td className="p-4 text-center text-gray-400">{crowd}</td>
                      <td className="p-4 text-center text-gray-400">{reit}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-white mb-14">
            <p className="font-black text-sm text-green-400 uppercase tracking-widest mb-3">Schlüsselfrage</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              <strong className="text-white">Crowdinvesting:</strong> Du stehst auf der Gläubigerliste.<br />
              <strong className="text-white">REIT/Aktie:</strong> Deine Anteile sind möglicherweise wertlos.<br />
              <strong className="text-green-400">TinyInvest:</strong> Du kannst dein Haus herausverlangen und neu betreiben.
            </p>
          </div>

          {/* ── 3. Der Steuermotor ── */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Der Steuermotor hinter der Rendite</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die steuerliche Attraktivität ist im deutschen Steuerrecht fast einzigartig und stellt für viele Anleger den eigentlichen Renditemotor dar. Durch den Investitionsabzugsbetrag (§7g EStG) können bis zu 50 % der Anschaffungskosten bereits vor dem Kauf gewinnmindernd geltend gemacht werden. Für Gutverdiener resultiert daraus eine sofortige Steuerersparnis, die direkt als Eigenkapital in das Investment fließt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Ergänzt wird dieser Effekt durch die kurze Abschreibungsdauer von acht Jahren. Während ein herkömmliches Gebäude über 50 Jahre abgeschrieben wird, erlaubt das Tiny House 12,5 % jährliche Abschreibung – plus Sonder-AfA (40 %) und degressive AfA (30 %) im Kaufjahr. In der Summe: bis zu 70 % Sofortabschreibung im ersten Jahr.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "IAB", value: "50 %", sub: "im Vorjahr" },
                { label: "Sonder-AfA", value: "40 %", sub: "im Kaufjahr" },
                { label: "Deg. AfA", value: "30 %", sub: "auf Buchwert" },
              ].map((s) => (
                <div key={s.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">{s.label}</p>
                  <p className="text-2xl font-black text-green-800">{s.value}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-gray-400 mt-3">
              Mehr dazu: <Link href="/wissen/afa-abschreibung" className="text-green-700 font-semibold hover:underline">Vollständiger AfA-Guide →</Link>
            </p>
          </div>

          {/* ── Image ── */}
          <div className="relative rounded-2xl overflow-hidden mb-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-eigentumsuebergabe.webp" alt="Tiny House Eigentumsübergabe" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* ── 4. Vollautomatisch verwaltet ── */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Vollautomatisch verwaltet: Glamping als Renditemotor</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              In der Vergangenheit war der Besitz einer Ferienimmobilie mit erheblichem Aufwand verbunden – von der Gästekommunikation bis zur Endreinigung. Das moderne Direktinvestment löst dieses Problem durch ein konsequentes Full-Service-Management: tiny Escapes übernimmt die gesamte Wertschöpfungskette und transformiert das Investment in echtes passives Einkommen. Die Häuser werden in strategisch erstklassigen Lagen platziert und über globale Buchungsplattformen vermarktet.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die ökonomische Logik folgt dem Glamping-Trend: einer Mischung aus Glamour und Camping, die die Sehnsucht nach Natur mit dem Wunsch nach Komfort verbindet. In einer immer digitaleren Welt suchen Menschen nach Rückzugsorten, die reduziert aber hochwertig sind. Für den Investor bedeutet das Quadratmeterpreise, die weit über normalen Mietwohnungen liegen – bei deutlich geringeren Baukosten.
            </p>
            <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Ökologie als Wertfaktor</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Tiny Houses werden aus nachhaltigen Rohstoffen gefertigt, verbrauchen durch ihre kompakte Bauweise nur einen Bruchteil der Energie eines herkömmlichen Hauses und versiegeln deutlich weniger Bodenfläche. In einer Zukunft, in der ökologische Kriterien zunehmend in die Bewertung von Kapitalanlagen einfließen, ist das Tiny House hervorragend positioniert. Investoren, die heute einsteigen, investieren nicht nur in ein Gebäude – sondern in ein zukunftsfähiges Lebenskonzept.
            </p>
          </div>

          {/* ── Image ── */}
          <div className="relative rounded-2xl overflow-hidden mb-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-ferienimmobilie-aussen.webp" alt="Tiny House Ferienimmobilie Außenansicht" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          {/* ── 5. Kaufprozess ── */}
          <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Wie werde ich Eigentümer?</h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">Von der Erstberatung bis zur ersten Auszahlung – transparent und rechtssicher.</p>
          <div className="relative mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block" />
            <div className="space-y-4">
              {[
                { step: "1", title: "Erstgespräch & Auswahl", desc: "Du wählst ein Modell und besichtigst optional einen bestehenden Standort. Wir erstellen deine persönliche Steueranalyse.", detail: "1–2 Wochen" },
                { step: "2", title: "Kaufvertrag & Zahlungsplan", desc: "Unterzeichnung des Kaufvertrags. Das Tiny House wird auf deinen Namen übergeeignet. Einmalzahlung oder Ratenzahlung möglich.", detail: "Rechtssicher & dokumentiert" },
                { step: "3", title: "Übergabe & Dokumentation", desc: "Du erhältst: Kaufvertrag, Fahrzeugbrief, CE-Zertifikat, Versicherungsunterlagen und die vollständige §7g-Dokumentation für deinen Steuerberater.", detail: "Tax-Compliance-Paket" },
                { step: "4", title: "Aufstellung durch tiny Escapes", desc: "tiny Escapes vermittelt Host und Stellplatz. Das Haus wird aufgebaut, angeschlossen und buchungsbereit gemacht.", detail: "Full-Service ab Übergabe" },
                { step: "5", title: "Monatliche Auszahlung", desc: "Ab dem ersten Buchungsmonat erhältst du 40 % der Netto-Einnahmen. Quartalsweises Belegungs- und Umsatzreporting inklusive.", detail: "Investor-Dashboard" },
              ].map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-lg font-black text-white shadow-sm z-10">{step.step}</div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 grow">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <h3 className="font-black text-gray-900 text-[14px]">{step.title}</h3>
                      <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full">{step.detail}</span>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">In ein Tiny House investieren →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/passive-einnahmen-immobilien" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Passive Einnahmen →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Direktinvestment & Eigentumsrecht</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit, Eigentümer zu werden?</p>
            <h3 className="text-xl font-black mb-3">Jetzt Investor-Paket anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Kaufvertrag-Muster, §7g-Analyse und Besichtigungstermine – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Unterlagen anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Aktuelle Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
