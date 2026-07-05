import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "§7g-Steuerberater finden: Tiny House Investment 2026 | TinyInvest",
  description:
    "Wie findest du einen Steuerberater, der IAB und Sonder-AfA bei Tiny Houses kennt? Checkliste, Fragen für das Erstgespräch und was du mitbringen musst.",
  keywords:
    "steuerberater §7g, steuerberater tiny house, iab steuerberater finden, sonder-afa steuerberater, tiny house investment steuerberatung",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/steuerberater-finden",
  },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "§7g-Steuerberater finden – Checkliste für Tiny House Investoren",
    description: "Nicht jeder Steuerberater kennt §7g EStG und IAB. So findest du den richtigen – mit Checkliste und konkreten Fragen.",
    url: "https://tinyhouse.investments/wissen/steuerberater-finden",
  },
};

const faqItems = [
  {
    question: "Wie finde ich einen §7g-Spezialisten in meiner Nähe?",
    answer: "Starte mit steuerberatersuche.de und filtere nach 'Gewerbe' und 'Abschreibungen'. Frage gezielt nach Erfahrung mit IAB bei beweglichen Wirtschaftsgütern. TinyInvest vermittelt auf Wunsch direkt an geprüfte Steuerberater aus unserem Netzwerk.",
  },
  {
    question: "Was kostet ein Steuerberater für ein Tiny House Investment?",
    answer: "Typisch: 1.500–3.500 € p.a. für ein vollständiges Mandat inklusive gewerblicher Einnahmen-Überschuss-Rechnung, §7g-Optimierung und Steuererklärung. Die Kosten amortisieren sich durch die Mehrersparnis in der Regel innerhalb weniger Wochen.",
  },
  {
    question: "Muss mein Steuerberater in meiner Nähe sein?",
    answer: "Nein. Viele spezialisierte Kanzleien arbeiten volldigital. Unterlagen können per Datev-Upload oder gesichertem Portal übermittelt werden. Wichtiger als die Nähe ist die Spezialisierung auf bewegliche Wirtschaftsgüter und §7g EStG.",
  },
  {
    question: "Was passiert, wenn mein Steuerberater §7g falsch anwendet?",
    answer: "Falsche IAB-Bildung oder verpasste Sonder-AfA-Kombinationen können 5.000–15.000 € an entgangenen Steuererstattungen bedeuten. Im schlimmsten Fall kann das Finanzamt den IAB rückgängig machen, wenn die Verwendungsbedingungen nicht erfüllt wurden. Ein Spezialist verhindert diese Fehler.",
  },
];

export default function SteuerberaterFindenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "§7g-Steuerberater finden: Tiny House Investment 2026",
    "description": "Wie findest du einen Steuerberater, der IAB und Sonder-AfA bei Tiny Houses kennt? Checkliste, Fragen für das Erstgespräch und was du mitbringen musst.",
    "url": "https://tinyhouse.investments/wissen/steuerberater-finden",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/inside/tiny-house-innen-steuerberatung.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Steuerberater finden", "item": "https://tinyhouse.investments/wissen/steuerberater-finden" }
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
      <Script id="faq-schema-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-steuerberater-finden" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Steuerberater finden</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerberatung · §7g EStG · Praxis-Guide</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Den richtigen §7g-Steuerberater finden: Checkliste 2026
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
            Nicht jeder Steuerberater kennt §7g EStG bei beweglichen Wirtschaftsgütern. Dieser Guide hilft dir, den richtigen zu finden – und was du im Erstgespräch fragen solltest.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/inside/tiny-house-innen-steuerberatung.webp" alt="Steuerberatung Tiny House Investment §7g" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "IAB", "Sonder-AfA", "Bewegliche Wirtschaftsgüter", "Steueroptimierung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              §7g EStG ist das mächtigste Steuerinstrument für Investoren in bewegliche Wirtschaftsgüter – und das am häufigsten falsch angewendete. Nicht weil das Gesetz kompliziert wäre, sondern weil die Kombination aus Investitionsabzugsbetrag, Sonder-AfA (40 %) und degressiver AfA (30 %) in der richtigen Reihenfolge und zum richtigen Zeitpunkt angewendet werden muss.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Viele Steuerberater kennen §7g grundsätzlich – haben ihn aber meist im Kontext von Betriebsmaschinen oder Fahrzeugen angewendet, nicht bei Ferienimmobilien. Ein Tiny House auf Vlemmix Trailer ist für viele Berater Neuland. Und Neuland kostet den Mandanten bares Geld: Ein falsch gesetzter IAB oder eine verpasste Sonder-AfA-Kombination bedeuten 5.000 bis 15.000 Euro an entgangenen Steuererstattungen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Warum der richtige Spezialist entscheidend ist</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein nicht spezialisierter Berater übersieht typischerweise das IAB-Timing: Der Investitionsabzugsbetrag muss im Jahr vor dem Kauf gebildet werden, wenn der Gewinn hoch ist – nicht im Kaufjahr selbst. Wer diese Frist verpasst, verliert den größten Einzeleffekt. Ebenso häufig wird die Nutzungsdauer falsch angesetzt: Viele Berater setzen 33 oder sogar 50 Jahre an, weil sie das Tiny House wie ein Gebäude behandeln. Korrekt sind 8 Jahre gemäß der AfA-Tabelle für Straßenfahrzeuge und Anhänger.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Spezialist hingegen plant die gesamte AfA-Kaskade im Voraus: IAB im Vorjahr bilden, im Kaufjahr auflösen, gleichzeitig Sonder-AfA (40 %) und degressive AfA (30 %) auf den Restbuchwert anwenden, ab Jahr drei lineare AfA. Er dokumentiert die gewerbliche Nutzung korrekt für das Finanzamt – Betriebsanmeldung, Buchungsbelege, Betreibervertrag, Einnahmen-Überschuss-Rechnung – und begleitet im Fall einer Betriebsprüfung. Der Unterschied zwischen dem richtigen und dem falschen Berater kann sich auf 10.000 bis 20.000 Euro aufsummieren.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Diese 7 Fragen musst du im Erstgespräch stellen</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Erstgespräch mit einem Steuerberater ist kein Verhör – aber es ist deine einzige Chance, fachliche Kompetenz vor der Mandatierung zu überprüfen. Stelle diese sieben Fragen und beobachte, wie sicher und präzise die Antworten kommen.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">1. Haben Sie Erfahrung mit §7g EStG bei beweglichen Wirtschaftsgütern?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die Antwort sollte sofort und mit konkreten Praxisbeispielen kommen. Lange Pausen oder allgemeine Aussagen wie „das schauen wir uns an" sind ein Warnsignal.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">2. Wie optimieren Sie IAB, Sonder-AfA und degressive AfA kombiniert?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Berater sollte das Timing erklären können: IAB im Vorjahr bei hohem Gewinn bilden, im Kaufjahr auflösen, dann Sonder-AfA 40 % und degressive AfA 30 % auf den Restwert anwenden. Wer nur einen der drei Hebel kennt, kostet dich Geld.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">3. Was ist die korrekte AfA-Nutzungsdauer für ein Tiny House auf Vlemmix Trailer?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die richtige Antwort: 8 Jahre (12,5 % p.a. linear), gemäß AfA-Tabelle für Straßenfahrzeuge und Anhänger. Nicht 33 oder 50 Jahre wie bei Gebäuden.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">4. Wie dokumentieren wir die gewerbliche Nutzung für das Finanzamt?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Berater sollte Betriebsanmeldung, Buchungsbelege, Betreibervertrag und Einnahmen-Überschuss-Rechnung ansprechen sowie die Abgrenzung zur steuerlich schädlichen Liebhaberei erklären.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">5. Gilt der IAB auch, wenn das Tiny House im EU-Ausland steht?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ja – weil das Gewerbe in Deutschland angemeldet ist, greift §7g auch für Objekte im EU-Ausland. Ein guter Berater weist ergänzend auf mögliche Doppelbesteuerungsabkommen hin.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">6. Wie behandeln wir die Auflösung des IAB buchhalterisch?</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der IAB erhöht im Kaufjahr den buchhalterischen Gewinn (Auflösung), während Sonder-AfA und degressive AfA den Restbuchwert reduzieren. Per Saldo muss der Nettoeffekt positiv sein – das sollte der Berater durchrechnen können.
            </p>
            <h3 className="font-black text-gray-900 text-base mb-2">7. Was kostet ein vollständiges Mandat für §7g-Optimierung?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Erwarte eine transparente Honorarauskunft. Üblich sind 1.500 bis 3.500 Euro pro Jahr für ein vollständiges Mandat inklusive gewerblicher Einnahmen-Überschuss-Rechnung und §7g-Begleitung. Diese Kosten amortisieren sich durch die Mehrersparnis typischerweise innerhalb weniger Wochen.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-wald.webp" alt="Tiny House Investment – Steueroptimierung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Was du zum Gespräch mitbringen solltest</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein Steuerberater kann nur so gut beraten wie die Unterlagen, die er von dir bekommt. Bring zum Erstgespräch den Steuerbescheid des Vorjahres mit – er zeigt deinen Grenzsteuersatz und die aktuelle Steuerbelastung, beides ist die Basis für die IAB-Berechnung. Dazu kommen die Asset-Daten des Tiny Houses: Kaufpreis, Modell, und der Nachweis des Vlemmix Trailers mit VIN/FIN-Nummer, der die steuerrechtliche Klassifizierung als bewegliches Wirtschaftsgut belegt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Außerdem brauchst du oder zumindest die Absicht zur Anmeldung eines Gewerbes – ohne gewerbliche Tätigkeit greift §7g nicht. Den Betreibervertrag mit lokale Partner kannst du ebenfalls mitbringen: Er belegt die gewerbliche Nutzungsabsicht und die Einkommensstruktur (40 % Mietanteil an den Investor). TinyInvest stellt auf Wunsch ein kostenloses §7g-Factsheet zur Verfügung, das alle relevanten Kennzahlen so aufbereitet, dass dein Steuerberater sofort arbeiten kann.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Informiere deinen Berater außerdem über den geplanten Investitionszeitraum. Das ist relevant für die IAB-Timing-Optimierung: Soll der IAB noch im laufenden Jahr gebildet werden oder bereits im nächsten? Je nach Gewinnhöhe und Steuersatz kann das einen Unterschied von mehreren tausend Euro ausmachen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Das TinyInvest Steuerberater-Netzwerk</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              TinyInvest arbeitet mit einem Netzwerk geprüfter Steuerberater zusammen, die das Modell kennen: IAB und Sonder-AfA bei beweglichen Wirtschaftsgütern, den Betreibervertrag mit lokale Partner, die gewerbliche Dokumentation und die Begleitung bei Betriebsprüfungen. Alle Berater sind bundesweit tätig und führen Erstgespräche auch digital. Auf Wunsch stellen wir dir eine persönliche Empfehlung – kostenlos und unverbindlich.
            </p>
            <div className="text-center">
              <ModalButton className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Steuerberater-Empfehlung anfordern →
              </ModalButton>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Interaktiver Steuerrechner →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Steuerberater für Tiny House Investment</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Direkte Steuerberater-Vermittlung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Wir verbinden dich kostenlos mit einem §7g-Spezialisten aus unserem Netzwerk.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Empfehlung anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
