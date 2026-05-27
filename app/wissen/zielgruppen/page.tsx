import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "§7g IAB für Selbstständige 2026: Welche Berufsgruppe profitiert? | TinyInvest",
  description:
    "Ärzte, Freiberufler, IT-Freelancer oder Unternehmer: So nutzt du den §7g IAB für ein Tiny House als Kapitalanlage. Bis zu 39.500 € Steuervorteil – für jeden Berufsstand erklärt.",
  keywords:
    "§7g iab selbstständige, kapitalanlage freiberufler, steuern sparen arzt, it freelancer investment, unternehmer kapitalanlage, iab berufsgruppen, tiny house steuervorteil selbstständige",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/zielgruppen" },
  openGraph: {
    title: "§7g IAB für Selbstständige: Ärzte, Freiberufler, IT, Unternehmer | TinyInvest",
    description:
      "Bis zu 39.500 € Steuervorteil im Vorjahr – für Ärzte, Freiberufler, IT-Freelancer und Unternehmer. Welches Profil passt zu dir?",
    url: "https://tinyhouse.investments/wissen/zielgruppen",
  },
};

const profiles = [
  {
    href: "/wissen/aerzte",
    emoji: "🏥",
    label: "Für Ärzte",
    headline: "Niedergelassene Ärzte & Freiberufler",
    desc: "Bis zu 45 % Spitzensteuersatz, kein Arbeitgeber der investiert, keine Zeit für aktives Portfolio-Management. Der §7g IAB ist das passende Instrument.",
    tags: ["§18 EStG direkt", "Bis zu 39.500 € IAB", "Praxisnebentätigkeit"],
    cta: "Für Ärzte →",
    border: "border-green-200",
    tagColor: "bg-green-50 text-green-700",
  },
  {
    href: "/wissen/freiberufler",
    emoji: "⚖️",
    label: "Für Freiberufler",
    headline: "Anwälte, Architekten, Berater & Co.",
    desc: "Rechtsanwälte, Architekten, Steuerberater, Ingenieure — alle mit Einkünften nach §18 EStG sind direkt §7g-berechtigt. Hohe Steuerlast, wenig Zeit.",
    tags: ["Rechtsanwalt", "Architekt", "Unternehmensberater"],
    cta: "Für Freiberufler →",
    border: "border-blue-200",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    href: "/wissen/it-freelancer",
    emoji: "💻",
    label: "Für IT-Freelancer",
    headline: "Entwickler, DevOps & Tech-Consultants",
    desc: "Effektivsteuersatz 40–45 %, Gewinne parken auf dem Konto, Projekte lassen kein aktives Investment zu. §7g IAB + Tiny House = passiver Sachwert ohne Aufwand.",
    tags: ["§15 oder §18 EStG", "Rechenbeispiel: 100 €/h", "Vollautomatisch"],
    cta: "Für IT-Freelancer →",
    border: "border-purple-200",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    href: "/wissen/unternehmer",
    emoji: "🏢",
    label: "Für Unternehmer",
    headline: "Einzelunternehmer & Personengesellschaften",
    desc: "Gewerbesteuer + ESt drücken auf echte Rendite. Einzelunternehmer, GbR/OHG/KG und GmbHs sind §7g-berechtigt — GmbHs über §8 KStG, mit anderem Steuerhebel.",
    tags: ["Einzelunternehmer", "GbR / KG", "GmbH via §8 KStG"],
    cta: "Für Unternehmer →",
    border: "border-amber-200",
    tagColor: "bg-amber-50 text-amber-700",
  },
];

const commonSteps = [
  {
    step: "1",
    title: "IAB bilden",
    desc: "Bis zu 50 % des geplanten Kaufpreises im Jahr VOR dem Kauf steuerlich abziehen. Bei einem 79.000 €-Objekt = 39.500 € Sofortabzug.",
  },
  {
    step: "2",
    title: "Tiny House kaufen",
    desc: "Sonder-AfA 40 % + degressive AfA 30 % im Kaufjahr on top. Das Tiny House ist ein bewegliches Wirtschaftsgut — §7g ist eindeutig anwendbar.",
  },
  {
    step: "3",
    title: "Cashflow kassieren",
    desc: "40 % der Nettomieteinnahmen monatlich. tiny Escapes übernimmt alles: Buchungen, Reinigung, Wartung, Abrechnung. Kein aktiver Aufwand.",
  },
];

export default function ZielgruppenPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Für Selbstständige", item: "https://tinyhouse.investments/wissen/zielgruppen" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "§7g IAB für Selbstständige: Welche Berufsgruppe profitiert vom Tiny House Investment?",
    description:
      "Ärzte, Freiberufler, IT-Freelancer und Unternehmer nutzen den §7g IAB für bis zu 39.500 € Steuervorteil. Übersicht aller Berufsgruppen.",
    url: "https://tinyhouse.investments/wissen/zielgruppen",
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    author: {
      "@type": "Person",
      name: "Noah Stein",
      url: "https://www.linkedin.com/in/noah-stein-a5b486182/",
    },
    publisher: {
      "@type": "Organization",
      name: "TinyInvest",
      logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" },
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />
      <Script id="breadcrumb-schema-zielgruppen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema-zielgruppen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Für Selbstständige</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">§7g IAB · Alle Berufsgruppen</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Kapitalanlage für Selbstständige — §7g IAB für jeden Berufsstand
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-22">22. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Ob Arzt, Rechtsanwalt, Softwareentwickler oder Einzelunternehmer — wer betriebliche Einkünfte hat, kann den §7g Investitionsabzugsbetrag nutzen. Das bedeutet: bis zu 39.500 € Steuerabzug im Jahr vor dem Kauf, Sonder-AfA 40 % im Kaufjahr, und monatlicher Cashflow ohne aktiven Aufwand. Welches Profil passt zu dir?
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["§7g IAB nutzbar", "Bis zu 39.500 € Steuervorteil", "Vollautomatisch", "Ab 79.000 €", "4 Berufsgruppen"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-renditeobjekt-aussen.webp"
              alt="Tiny House als Kapitalanlage für Selbstständige – §7g IAB für Ärzte, Freiberufler, IT-Freelancer und Unternehmer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Profile cards */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Dein Berufsprofil</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Wähle deine Zielgruppe</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {profiles.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`bg-white rounded-2xl border ${p.border} p-7 hover:shadow-md transition-all group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl">{p.emoji}</div>
                  <span className="text-[11px] font-bold text-gray-400 group-hover:text-green-600 transition-colors">{p.label}</span>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">{p.headline}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${p.tagColor}`}>{t}</span>
                  ))}
                </div>
                <span className="text-[13px] font-bold text-green-700 group-hover:underline">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What they all share */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Das gemeinsame Modell</p>
          <h2 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">Was alle Berufsgruppen verbindet</h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-10">
            Alle vier Gruppen — Ärzte, Freiberufler, IT-Freelancer und Unternehmer — nutzen denselben Steuerhebel: den §7g Investitionsabzugsbetrag. Das Tiny House auf einem Vlemmix-Trailer ist ein <strong>bewegliches Wirtschaftsgut</strong> mit Fahrzeugidentifikationsnummer — damit eindeutig §7g-fähig. Kein anderes Investitionsprodukt in dieser Preisklasse bietet denselben Vorzieheffekt.
          </p>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-10">
            <p className="font-black text-gray-900 text-[14px] mb-2">Rechenbeispiel: €79.000 Tiny House, 42 % Grenzsteuersatz</p>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              IAB im Vorjahr: 50 % × 79.000 € = 39.500 € Abzug → ca. 16.590 € Steuerersparnis noch vor Lieferung. Im Kaufjahr: Sonder-AfA 40 % (31.600 €) + degressive AfA 30 % (23.700 €). Gesamtsteuervorteil in Jahr 1 und 2: bis zu 25.000–30.000 € — dazu monatliche Mieteinnahmen ab Betriebsaufnahme.
            </p>
          </div>

          {/* 3 steps */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So läuft es ab — 3 Schritte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {commonSteps.map((item) => (
              <div key={item.step} className="border border-gray-100 rounded-2xl p-6 bg-white">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm mb-4">{item.step}</div>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison: who qualifies */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">§7g-Berechtigung je Berufsgruppe</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Berufsgruppe</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Einkunftsart</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">§7g IAB</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Hinweis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["🏥 Niedergelassener Arzt", "§18 EStG", "✅ Direkt", "Gewinngrenze 200.000 € beachten"],
                    ["⚖️ Rechtsanwalt / Architekt", "§18 EStG", "✅ Direkt", "Volle 50 % im Vorjahr nutzbar"],
                    ["💻 IT-Freelancer (Gewerbe)", "§15 EStG", "✅ Direkt", "Häufigste Form bei Entwicklern"],
                    ["💻 IT-Freelancer (freiberuflich)", "§18 EStG", "✅ Direkt", "FG-Urteile: Softwareentwicklung oft freiberuflich"],
                    ["🏢 Einzelunternehmer", "§15 EStG", "✅ Direkt", "Gewinngrenze 200.000 € beachten"],
                    ["🏢 GmbH (via §8 KStG)", "Körperschaftsteuer", "✅ Direkt möglich", "KSt/GewSt ~30 % statt ESt 42–45 % — persönlicher IAB oft effizienter"],
                    ["👔 Angestellter (ohne Nebengewerbe)", "§19 EStG", "❌ Nicht möglich", "Steuerberater für Alternativen"],
                  ].map(([gruppe, art, iab, hinweis]) => (
                    <tr key={gruppe} className="hover:bg-gray-50/50">
                      <td className="p-4 font-semibold text-gray-700">{gruppe}</td>
                      <td className="p-4 text-center text-gray-500">{art}</td>
                      <td className={`p-4 text-center font-bold ${iab.startsWith("✅") ? "text-green-700 bg-green-50/50" : iab.startsWith("⚠️") ? "text-amber-700 bg-amber-50/50" : "text-red-500 bg-red-50/50"}`}>{iab}</td>
                      <td className="p-4 text-center text-gray-400 text-[12px]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Angaben sind Richtwerte und keine Steuerberatung. Die §7g-Berechtigung sowie die Gewinngrenze von 200.000 € sind individuell zu prüfen. Bitte konsultieren Sie einen §7g-erfahrenen Steuerberater vor jeder Investitionsentscheidung.</p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Guide →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Abschreibung erklärt →</Link>
            <Link href="/rechner/iab" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Rechner →</Link>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Verfügbare Objekte →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Kostenlose Beratung anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir zeigen Ihnen, wie §7g konkret auf Ihre berufliche Situation passt — inkl. Renditeberechnung und Steuerübersicht. Unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Beratung anfordern →
              </ModalButton>
              <Link
                href="/marktplatz"
                className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
              >
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
