import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "IAB Tiny House: Investitionsabzugsbetrag §7g EStG – Voraussetzungen & Beispiel | TinyInvest",
  description:
    "IAB Tiny House: Mit §7g EStG bis zu 16.800 € Steuererstattung erhalten – bevor du auch nur einen Euro ausgibst. Voraussetzungen, Fristen & Rechenbeispiel.",
  keywords:
    "IAB tiny house, iab tiny house 2026, investitionsabzugsbetrag tiny house, IAB beantragen anleitung, IAB erfahrungen, tiny house steuer vorziehen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/iab-tiny-house" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "IAB Tiny House: Investitionsabzugsbetrag §7g EStG – bis zu 33.000 € Liquiditätsvorteil",
    description:
      "Bis zu 33.000 € Liquiditätsvorteil im ersten Jahr: IAB (50 % im Vorjahr) + Sonder-AfA (40 %) + degressive AfA (30 %) für dein Tiny House. Voraussetzungen & Rechenbeispiel.",
    url: "https://tinyhouse.investments/wissen/iab-tiny-house",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAB Tiny House: §7g EStG – bis zu 33.000 € Liquiditätsvorteil im ersten Jahr",
    description: "IAB (50 % im Vorjahr) + Sonder-AfA (40 %) + degressive AfA (30 %): So sparst du als Tiny House Investor legal bis zu 33.000 € im ersten Jahr.",
  },
};

const faqItems = [
  {
    question: "Was ist der Investitionsabzugsbetrag beim Tiny House genau?",
    answer: "Der Investitionsabzugsbetrag Tiny House ist ein Steuerinstrument nach §7g EStG, das es Investoren erlaubt, bis zu 50 % des geplanten Kaufpreises bereits im Jahr vor dem Kauf vom zu versteuernden Einkommen abzuziehen. Bei einem Tiny House für 80.000 € bedeutet das maximal 40.000 € Investitionsabzugsbetrag – und bei 42 % Grenzsteuersatz sofort rund 16.800 € Steuererstattung. Der Investitionsabzugsbetrag wird im Kaufjahr aufgelöst und mit der Sonder-AfA (40 %) kombiniert.",
  },
  {
    question: "Wer darf den IAB für ein Tiny House bilden?",
    answer: "Jeder, der das Tiny House im Rahmen einer betrieblichen oder Vermietungseinkunftsart nutzt. Das schließt Selbstständige, Unternehmer, Freiberufler und Arbeitnehmer mit Vermietungseinkünften ein. Voraussetzung: Der Gewinn darf im Vorjahr 200.000 € (Einzelunternehmen/Freiberufler) nicht übersteigen.",
  },
  {
    question: "Wie viele Jahre vor dem Kauf kann ich den IAB bilden?",
    answer: "Du kannst den IAB bis zu drei Jahre vor der tatsächlichen Anschaffung bilden. Das bedeutet: Planst du den Kauf für 2026, kannst du bereits in der Steuererklärung 2023, 2024 oder 2025 einen IAB bilden – und so Steuern in Jahren mit hohem Gewinn sparen.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House nach dem IAB nicht kaufe?",
    answer: "Wird die Investition nicht wie geplant durchgeführt, muss der IAB aufgelöst werden. Das Finanzamt verzinst den nachzuzahlenden Betrag dann mit 1,8 % p.a. (§ 233a AO). Deshalb sollte der IAB nur gebildet werden, wenn der Kaufentschluss konkret ist.",
  },
  {
    question: "Kann ich IAB und Sonder-AfA kombinieren?",
    answer: "Ja – das ist sogar die empfohlene Strategie. IAB im Vorjahr reduziert die Steuerbasis, Sonder-AfA (40 %) im Kaufjahr schreibt den Restwert ab. Zusammen mit degressiver AfA (30 %) ergibt sich im Kaufjahr eine Sofortabschreibung auf über 70 % des ursprünglichen Kaufpreises.",
  },
  {
    question: "Muss das Tiny House nach dem IAB-Kauf sofort vermietet werden?",
    answer: "Das Wirtschaftsgut muss im Jahr der Anschaffung und im Folgejahr in einer inländischen Betriebsstätte genutzt werden (§7g Abs. 4 EStG). Bei Vermietung über tiny Escapes ist diese Voraussetzung erfüllt – der Standort in Deutschland gilt als Betriebsstätte.",
  },
  {
    question: "Wie hoch ist die maximale IAB-Summe?",
    answer: "Bis zu 50 % des voraussichtlichen Nettokaufpreises, maximal 200.000 € je Betrieb (§7g Abs. 1 EStG). Bei einem Tiny House für 80.000 € sind das maximal 40.000 € IAB – was bei 42 % Grenzsteuersatz rund 16.800 € sofortige Steuererstattung bedeutet.",
  },
  {
    question: "Kann ich den IAB für ein Tiny House auch 2026 noch nutzen?",
    answer: "Ja, §7g EStG ist 2026 unverändert in Kraft. Das IAB Tiny House Modell ist sogar attraktiver als je zuvor: Seit 2024 kann die degressive AfA (30 %) erstmals mit IAB und Sonder-AfA (40 %) kombiniert werden – zusammen über 70 % Sofortabschreibung im Kaufjahr. Wer 2026 investiert, kann außerdem prüfen ob der IAB rückwirkend noch für 2025 möglich ist, sofern der Steuerbescheid 2025 noch nicht bestandskräftig ist.",
  },
];

export default function IabTinyHousePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IAB Tiny House: Investitionsabzugsbetrag §7g EStG beantragen & bis zu 33.000 € Liquiditätsvorteil",
    "description": "Wie du den IAB für ein Tiny House nutzt: Voraussetzungen, Fristen, Beantragung beim Finanzamt und typische Erfahrungen.",
    "url": "https://tinyhouse.investments/wissen/iab-tiny-house",
    "datePublished": "2026-04-15",
    "dateModified": "2026-06-13",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/IAB Tiny House 2026 So sparst du bis zu 30.000 € vor dem Kauf.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "IAB Tiny House", "item": "https://tinyhouse.investments/wissen/iab-tiny-house" },
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "IAB für Tiny House beantragen: Schritt für Schritt",
    "description": "So bildest du den Investitionsabzugsbetrag (§7g) für ein Tiny House, erhältst die Steuererstattung und setzt Sonder-AfA im Kaufjahr ab.",
    "totalTime": "P1Y",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Steuererklärung einreichen & IAB bilden",
        "text": "Du oder dein Steuerberater trägt in der Anlage EÜR oder Bilanz den IAB ein (Zeile 97–99). Kein gesonderter Antrag beim Finanzamt nötig – der IAB wird automatisch bei der Steuerveranlagung berücksichtigt.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Steuererstattung erhalten",
        "text": "Das Finanzamt erstattet die Mehrsteuer durch den IAB. Bei 40.000 € IAB und 42 % Grenzsteuersatz: ca. 16.800 € Erstattung innerhalb von 3–6 Monaten nach Veranlagung.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tiny House kaufen (innerhalb 3 Jahre)",
        "text": "Du kaufst das Tiny House innerhalb von 3 Jahren nach IAB-Bildung. Im Kaufjahr wird der IAB aufgelöst und mit dem Kaufpreis verrechnet. Belege: Kaufvertrag direkt mit Hersteller (Vlemmix Trailer).",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sonder-AfA & degressive AfA im Kaufjahr absetzen",
        "text": "Im selben Steuerjahr greift die Sonder-AfA (40 %) auf den Restkaufpreis. Zusätzlich kann die degressive AfA (30 %) angewendet werden. In der Summe: bis zu 70 % Sofortabschreibung im Kaufjahr.",
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="article-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema-iab" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">IAB Tiny House</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · IAB · §7g EStG</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            IAB Tiny House: bis zu 33.000 € Liquiditätsvorteil im ersten Jahr
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
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Das IAB Tiny House Modell ist das mächtigste Steuerinstrument im deutschen Steuerrecht für Investoren –
            du sparst Steuern, bevor du auch nur einen Euro ausgegeben hast. 2026 ist die Kombination aus IAB, Sonder-AfA und degressiver AfA so effektiv wie nie zuvor.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
            <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-2">IAB Tiny House – kurz erklärt</p>
            <p className="text-gray-700 text-[14px] leading-relaxed">
              Mit dem <strong>IAB Tiny House</strong>-Modell (§7g EStG) setzt du bis zu 50 % des geplanten Kaufpreises schon im Vorjahr steuerlich ab –
              ohne das Haus bereits zu besitzen. Bei 80.000 € Kaufpreis und 42 % Steuersatz bedeutet das bis zu <strong>16.800 € Sofort-Erstattung</strong>.
              Im Kaufjahr folgt die Sonder-AfA (40 %), seit 2024 kombinierbar mit degressiver AfA (30 %) – zusammen über 70 % Sofortabschreibung.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
            <Image src="/images/outside/IAB Tiny House 2026 So sparst du bis zu 30.000 € vor dem Kauf.webp" alt="IAB Tiny House 2026 – So sparst du bis zu 30.000 € vor dem Kauf" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["IAB 50 %", "Bis zu 40.000 € vorziehen", "3 Jahre vor Kauf", "§7g Abs. 1 EStG", "Bewegliches Wirtschaftsgut"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Was ist neu 2026 */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">IAB Tiny House 2026: Was ist neu?</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das IAB Tiny House Modell ist 2026 attraktiver als je zuvor. Seit 2024 gilt die wiedereingeführte degressive AfA (30 %) – in Kombination mit IAB (50 % vorab) und Sonder-AfA (40 % im Kaufjahr) ergibt sich erstmals eine dreigliedrige Abschreibungsstruktur, die im Kaufjahr über 70 % des Kaufpreises steuerlich wirksam macht. Diese Kombination war vor 2024 nicht möglich.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Für Investoren, die 2026 planen: Die Lieferverfügbarkeit der Solido-Modelle auf Vlemmix-Trailer liegt aktuell bei 8–12 Wochen, was eine planbare Investition ermöglicht. Wer außerdem noch keinen IAB für 2025 gebildet hat, kann prüfen lassen ob das rückwirkend noch möglich ist – solange der Steuerbescheid 2025 noch nicht bestandskräftig ist.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "IAB §7g", pct: "50 %", desc: "bis zu 3 Jahre vorab" },
                { label: "Sonder-AfA", pct: "40 %", desc: "neu: kombinierbar mit deg. AfA" },
                { label: "Deg. AfA", pct: "30 %", desc: "seit 2024 wieder nutzbar" },
              ].map((h) => (
                <div key={h.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-2xl font-black text-green-800 mb-1">{h.pct}</p>
                  <p className="text-[11px] text-gray-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fließtext */}
          <div className="max-w-3xl space-y-10 mb-14">

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Was ist der IAB beim Tiny House?</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Das IAB Tiny House ist ein Steuerinstrument nach § 7g des Einkommensteuergesetzes (EStG), das Investoren erlaubt, bis zu 50 % des geplanten Kaufpreises im Vorjahr des Kaufs steuerlich abzuziehen – bevor das Haus auch nur existiert. Ursprünglich zur Förderung kleiner und mittlerer Unternehmen gedacht, entfaltet dieses Werkzeug in Kombination mit mobilen Tiny Houses eine enorme Hebelwirkung für private und geschäftliche Investoren. Da ein Tiny House auf einem zertifizierten Trailer rechtlich als bewegliches Wirtschaftsgut eingestuft wird, können Anleger hiermit legal und hocheffizient Steuerzahlungen in privates Vermögen umwandeln.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Funktionsweise: Steuern sparen, bevor das Haus gebaut ist</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Das Besondere am Investitionsabzugsbetrag ist der zeitliche Vorwegeffekt. Investoren müssen nicht warten, bis das Tiny House fertiggestellt oder geliefert ist, um von den steuerlichen Vorteilen zu profitieren. Der IAB erlaubt es, bis zu 50 Prozent der voraussichtlichen Anschaffungs- und Herstellungskosten bereits in der Steuererklärung des aktuellen oder sogar des vorangegangenen Jahres gewinnmindernd geltend zu machen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Planen Sie beispielsweise den Kauf eines Tiny Houses für 80.000 Euro, können Sie über den IAB bis zu 40.000 Euro direkt vom zu versteuernden Einkommen abziehen. Bei einem hohen persönlichen Steuersatz führt dies sofort zu einer Steuererstattung oder einer massiven Senkung der Steuerschuld. Nach der Festsetzung des IAB verbleibt ein großzügiger gesetzlicher Zeitraum von bis zu drei Jahren, um die tatsächliche Investition zu tätigen und das Tiny House zu erwerben.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Der Liquiditätseffekt: Staatliche Co-Finanzierung</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Aus wirtschaftlicher Sicht wirkt der IAB wie ein zinsloses Darlehen vom Finanzamt oder eine direkte staatliche Co-Finanzierung. Die Steuerersparnis, die durch den Abzug der 40.000 Euro entsteht (bei Spitzensteuersatz inklusive Solidaritätszuschlag oft weit über 15.000 Euro), fließt dem Investor als liquide Mittel zu. Dieses Geld steht sofort zur Verfügung und kann direkt als Eigenkapital für den Kauf des Tiny Houses genutzt oder anderweitig wertsteigernd angelegt werden. Der reale finanzielle Eigenanteil am Investment sinkt dadurch drastisch, während der Investor von den vollen Mieteinnahmen und der vollen Rendite des Objekts profitiert.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Voraussetzungen und Kombination mit der Sonder-AfA</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Um den IAB erfolgreich nutzen zu können, müssen bestimmte steuerliche Rahmenbedingungen erfüllt sein. Die wichtigste Grenze betrifft den Gewinn des Investors: Der steuerliche Gewinn darf im Jahr der IAB-Bildung die Grenze von 200.000 Euro nicht überschreiten. Zudem muss das Tiny House im Jahr der Anschaffung und im darauffolgenden Jahr nachweislich zu mindestens 90 Prozent betrieblich bzw. zur gewerblichen Vermietung genutzt werden. Eine private Eigennutzung ist in diesem Zeitraum nahezu vollständig ausgeschlossen.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Der Steuerhebel endet jedoch nicht mit dem IAB. Im Jahr der tatsächlichen Anschaffung wird der zuvor gebildete IAB gewinnerhöhend aufgelöst, während gleichzeitig die Anschaffungskosten des Tiny Houses um genau diesen Betrag gemindert werden. Auf Basis dieses reduzierten Restwertes kann der Investor sofort eine <strong className="text-gray-900">Sonderabschreibung (Sonder-AfA) von bis zu 40 Prozent</strong> geltend machen — durch das Wachstumschancengesetz 2024 auf diesen Höchstwert angehoben und bis 31.12.2027 befristet. Der verbleibende Betrag wird anschließend linear über die reguläre Nutzungsdauer von acht Jahren abgeschrieben.
              </p>
            </div>

          </div>

          {/* Image Break */}
          <div className="relative rounded-2xl overflow-hidden my-14" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House Kapitalanlage Sachwert" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Strategischer Einsatz zur Steueroptimierung</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Der IAB für Tiny Houses ist ein ideales Instrument, um außergewöhnliche steuerliche Belastungen gezielt abzufedern. Typische Anwendungsszenarien sind Jahre, in denen Investoren durch Sonderzahlungen, Abfindungen, Boni, erfolgreiche Krypto-Gewinne oder den Verkauf von Unternehmensanteilen und Immobilien in eine extrem hohe Steuerprogression rutschen. Durch den gezielten Einsatz des IAB lässt sich das zu versteuernde Einkommen in genau diesen Spitzenjahren drastisch senken.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Gepaart mit einem professionellen Betreibermodell, das die touristische Vermietung vollautomatisch übernimmt, wandeln Anleger so eine drohende Steuerlast in einen renditestarken, inflationsgeschützten Sachwert um.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-green-700 font-bold text-sm mb-1">Steuerlicher Hinweis</p>
              <p className="text-green-800 text-[13px] leading-relaxed">
                Alle Steuereffekte sind Beispielrechnungen. Die individuelle Steuerersparnis hängt von der persönlichen Einkommenssituation und dem Grenzsteuersatz ab. Eine Beratung durch einen §7g-erfahrenen Steuerberater ist vor der Investition empfohlen.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/investitionsabzugsbetrag-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Investitionsabzugsbetrag Guide →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">AfA & Abschreibung →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: IAB für Tiny Houses</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">IAB-Analyse für deine Steuersituation</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Wir stellen dir das IAB-Factsheet zusammen, das dein Steuerberater für die Beantragung braucht – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">IAB-Factsheet anfordern →</ModalButton>
              <Link href="/rechner/iab" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">IAB-Rechner →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
