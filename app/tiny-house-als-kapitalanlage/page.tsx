import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModalButton from "../components/ModalButton";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "Tiny House als Kapitalanlage 2026: Lohnt es sich? | TinyInvest",
  description:
    "Tiny House als Kapitalanlage: Rendite ab 12 % IRR p.a., §7g Steuervorteile, ab 65.000 € Einstieg. Für Freiberufler, GmbH-Inhaber & Angestellte. Investment-Guide 2026.",
  keywords:
    "tiny house als kapitalanlage, tiny house investieren, tiny house rendite, ferienhaus als kapitalanlage, tiny house investment, §7g kapitalanlage",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
  },
  openGraph: {
    title: "Tiny House als Kapitalanlage 2026 – Der vollständige Guide",
    description:
      "Lohnt sich ein Tiny House als Kapitalanlage? Rendite, Steuervorteile und Risiken transparent erklärt.",
    url: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Lohnt sich ein Tiny House als Kapitalanlage?",
    answer:
      "Ja – für Investoren mit mittlerem bis hohem Einkommen, die von §7g EStG profitieren können. Der kombinierte Effekt aus 40 % Mietauszahlung, hoher AfA-Abschreibung und niedrigem Einstiegspreis macht Tiny Houses strukturell überlegen gegenüber klassischen Ferienimmobilien. Projizierte IRR: 12–14 % p.a. über 5 Jahre.",
  },
  {
    question: "Wie viel Rendite bringt ein Tiny House?",
    answer:
      "Bei 60 % Belegung und ~120 €/Nacht erhält der Investor ca. 875 € netto pro Monat (40 % der Einnahmen). Mit §7g Steuereffekten (IAB + Sonder-AfA) steigt die effektive Rendite auf 12–15 % p.a. im ersten Jahr.",
  },
  {
    question: "Brauche ich ein Grundstück?",
    answer:
      "Nein. TinyInvest vermittelt einen verifizierten Host und Standort über das tiny Escapes Netzwerk. Kein Grundstückskauf, keine Grunderwerbsteuer, keine Notarkosten.",
  },
  {
    question: "Welche steuerlichen Vorteile gibt es?",
    answer:
      "Da Tiny Houses auf Vlemmix Trailern als bewegliche Wirtschaftsgüter gelten, greift §7g EStG: IAB (50 % im Vorjahr), Sonder-AfA (40 %) + degressive AfA (30 %) im Kaufjahr. Bei 80.000 € Investment und 42 % Steuersatz: bis zu ~33.000 € Liquiditätsvorteil im Jahr 1.",
  },
  {
    question: "Für wen lohnt sich das Investment am meisten?",
    answer:
      "Am stärksten profitieren Freiberufler und Selbstständige, die den IAB im Vorjahr bilden können, sowie GmbH-Inhaber die das Objekt über Betriebsvermögen kaufen. Auch Angestellte mit hohem Grenzsteuersatz (42 %) profitieren stark von Sonder-AfA und degressiver AfA — ohne IAB. Wer keinen betrieblichen Hintergrund hat, kann trotzdem über Gewerbeanmeldung investieren.",
  },
  {
    question: "Kann ich mehrere Tiny Houses kaufen?",
    answer:
      "Ja. Da der Einstiegspreis ab 65.000 € liegt, können Investoren mit dem Kapital einer einzigen Eigentumswohnung (300.000–500.000 €) 4–7 Tiny Houses kaufen und ihr Risiko auf mehrere Standorte und Betreiber verteilen. Jedes Objekt hat einen eigenen §7g-Effekt und generiert eigenständige Mieteinnahmen.",
  },
];

export default function TinyHouseKapitalanlagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House als Kapitalanlage 2026: Lohnt es sich?",
    author: { "@type": "Person", name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    publisher: { "@type": "Organization", name: "TinyInvest", logo: { "@type": "ImageObject", url: "https://tinyhouse.investments/logo1.png" } },
    datePublished: "2026-04-13",
    dateModified: "2026-05-15",
    image: { "@type": "ImageObject", url: "https://tinyhouse.investments/images/outside/tiny-house-investor-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Tiny House als Kapitalanlage", item: "https://tinyhouse.investments/tiny-house-als-kapitalanlage" },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House als Kapitalanlage</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
            Tiny House als Kapitalanlage:<br className="hidden sm:block" /> Lohnt es sich wirklich?
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-15">15. Mai 2026</time>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { value: "Ab 65.000 €", label: "Einstieg" },
              { value: "12–14 %", label: "IRR p.a." },
              { value: "40 %", label: "Investor-Anteil" },
              { value: "0 €", label: "Kaufnebenkosten" },
            ].map((s) => (
              <div key={s.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                <p className="font-data text-lg font-black text-green-700 leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-2xl">
            In ein Tiny House investieren heißt: Du kaufst ein physisches Objekt – kein Fondsanteil. Ein Betreiber vermietet es für dich.
            Du erhältst 40 % der Einnahmen monatlich und sparst im ersten Jahr bis zu 33.000 € Steuern über §7g EStG.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3 rounded-full text-sm transition-all shadow-sm">
              Kostenlose Beratung anfragen →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-all">
              Aktuelle Projekte ansehen →
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <Image
              src="/images/outside/tiny-house-investor-aussen.webp"
              alt="Tiny House als Kapitalanlage – Außenansicht Investment-Objekt"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      {/* ── FLIESSTEXT INTRO ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-gray-700 text-base leading-relaxed">
            Nicht jedes Investment passt zu jedem Investor. Ein Tiny House als Kapitalanlage ist besonders attraktiv für Steuerpflichtige, die aktiv Steuern optimieren wollen — Freiberufler, Selbstständige und GmbH-Inhaber, die den <strong className="text-gray-900">Investitionsabzugsbetrag (IAB)</strong> nutzen können, profitieren von bis zu 50 % Vorzieheffekt bereits im Jahr vor dem Kauf. Angestellte mit 42 % Grenzsteuersatz profitieren durch Sonder-AfA (40 %) und degressive AfA (30 %) noch im Kaufjahr erheblich — ohne Gewerbe.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Der entscheidende Unterschied zu klassischen Immobilien: Tiny Houses auf Vlemmix Trailern sind <strong className="text-gray-900">bewegliche Wirtschaftsgüter</strong> — kein Grundbucheintrag, keine Grunderwerbsteuer, kein Notar. Das öffnet steuerliche Türen, die bei jeder Eigentumswohnung verschlossen bleiben. Die vollständige theoretische Analyse dieser Mechanismen findest du im{" "}
            <Link href="/wissen/kapitalanlage" className="text-green-700 font-semibold hover:underline">detaillierten Kapitalanlage-Guide →</Link>
          </p>
        </div>
      </section>

      {/* ── INFOGRAFIK + VERGLEICH ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Die Mathematik</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            In ein Tiny House investieren: Was du wirklich bekommst
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 mb-3">
            <Image
              src="/images/cashflow.png"
              alt="Cashflow-Vergleich: Tiny House Investment 70.000 € vs. Traditionelles Apartment 500.000 € – TinyInvest nutzt dein Kapital 7x effizienter"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-gray-400 text-[12px] italic mb-10">
            Die reine Mathematik: Gleicher Ertrag – 7x weniger Kapital
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-center">Eigentumswohnung</th>
                    <th className="p-4 font-black text-green-700 text-[11px] uppercase text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Einstiegspreis", "300.000–500.000 €", "ab 65.000 €"],
                    ["Kaufnebenkosten", "10–15 % (Notar, GrESt, Makler)", "Keine"],
                    ["Mietrendite brutto", "3–5 % p.a.", "12–14 % IRR p.a."],
                    ["Abschreibung", "2 % über 50 Jahre", "§7g: bis 70 % im Kaufjahr"],
                    ["Bewirtschaftung", "Eigenregie / Hausverwaltung", "Full-Service (tiny Escapes)"],
                    ["Flexibilität", "Ortsgebunden", "EU-weit versetzbar"],
                  ].map(([m, etw, tiny]) => (
                    <tr key={m} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{m}</td>
                      <td className="p-4 text-center text-gray-500">{etw}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="/steuervorteil" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Vollständige §7g-Steueranalyse mit interaktivem Rechner
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 KERNVORTEILE ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Warum Tiny House?</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            3 entscheidende Vorteile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: "💰",
                title: "Niedriger Einstieg",
                kpi: "Ab 65.000 €",
                desc: "Kein Grundstück, keine Grunderwerbsteuer, kein Notar. Die Kaufnebenkosten einer Berliner ETW (~50.000 €) reichen für ein komplettes Tiny House.",
              },
              {
                icon: "🏛️",
                title: "§7g Steuerbonus",
                kpi: "≈ 33.000 € Jahr 1",
                desc: "IAB (50 % Vorjahr) + Sonder-AfA (40 %) + degressive AfA (30 %): bis zu 70 % im Kaufjahr absetzbar. Senkt deinen effektiven Kapitaleinsatz drastisch.",
              },
              {
                icon: "📈",
                title: "Passiver Cashflow",
                kpi: "~875 €/Monat",
                desc: "Du erhältst 40 % aller Mieteinnahmen monatlich. tiny Escapes übernimmt alles: Buchung, Gäste, Reinigung, Check-in – du musst nichts tun.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="font-data text-xl font-black text-green-700 mb-1">{item.kpi}</p>
                <h3 className="font-black text-gray-900 text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/renditemodell" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Interaktiver Renditerechner: eigenen Cashflow berechnen
            </Link>
          </div>
        </div>
      </section>

      {/* ── FÜR WEN? ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Profile</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Für wen ist dieses Investment geeignet?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            §7g greift nur unter bestimmten Voraussetzungen. Je nach Einkommensart variiert der optimale Hebel — hier die drei häufigsten Profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🧑‍💼",
                label: "Freiberufler & Selbstständige",
                badge: "Maximaler Hebel",
                badgeColor: "bg-green-100 text-green-700",
                points: [
                  "IAB voll nutzbar (Vorjahr)",
                  "Sonder-AfA 40 % im Kaufjahr",
                  "Degressive AfA 30 % zusätzlich",
                  "Bis zu 70 % Sofortabschreibung",
                ],
                note: "Bestes Profil für §7g. IAB setzt betrieblichen Hintergrund voraus.",
              },
              {
                icon: "👔",
                label: "Angestellte (42 % Grenzsteuersatz)",
                badge: "Starker Hebel",
                badgeColor: "bg-blue-100 text-blue-700",
                points: [
                  "Kein IAB (kein Betrieb nötig)",
                  "Sonder-AfA + deg. AfA nutzbar",
                  "Einkünfte aus Vermietung & Verpachtung",
                  "Gewerbe-Anmeldung als Alternative",
                ],
                note: "Ohne IAB. Steuereffekt geringer, aber bei 42 % trotzdem signifikant.",
              },
              {
                icon: "🏢",
                label: "GmbH-Inhaber",
                badge: "Alle Hebel",
                badgeColor: "bg-amber-100 text-amber-700",
                points: [
                  "Kauf über Betriebsvermögen",
                  "IAB + Sonder-AfA + deg. AfA",
                  "KSt-Effekt (15 % + SolZ) statt ESt",
                  "Bilanziell aktiviert, jährlich abgeschrieben",
                ],
                note: "Kauf über GmbH möglich. Steuerberater für optimale Gestaltung empfohlen.",
              },
            ].map((profile) => (
              <div key={profile.label} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{profile.icon}</div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${profile.badgeColor}`}>{profile.badge}</span>
                <h3 className="font-black text-gray-900 text-[14px] mt-2 mb-3">{profile.label}</h3>
                <ul className="space-y-1.5 mb-4">
                  {profile.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[12px] text-gray-600">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-50 pt-3">{profile.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROZESS ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">So funktioniert's</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            In 4 Schritten zum Investment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                step: "01",
                title: "Beratung & §7g-Check",
                desc: "Kostenloses Gespräch. Wir prüfen, welcher §7g-Hebel für deine Einkommensart optimal ist und welche Projekte verfügbar sind.",
              },
              {
                step: "02",
                title: "Projekt auswählen",
                desc: "Wähle ein verfügbares Objekt auf dem Marktplatz. Alle Projekte sind §7g-fähig, vollständig dokumentiert und mit IRR-Prognose hinterlegt.",
              },
              {
                step: "03",
                title: "Kauf beim Hersteller",
                desc: "Der Kaufvertrag läuft direkt zwischen dir und dem Hersteller (Vlemmix). Kein Kapital fließt an TinyInvest. Kein Notar, kein Grundbuch.",
              },
              {
                step: "04",
                title: "Auszahlung startet",
                desc: "tiny Escapes übernimmt Betrieb, Buchungen, Gäste und Wartung. Du erhältst monatlich 40 % der Nettomieteinnahmen.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-gray-100 rounded-2xl p-5 bg-white">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm mb-4 shrink-0">
                  {item.step}
                </div>
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[12px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/marktplatz" className="text-green-700 font-semibold text-[13px] hover:underline">
              → Verfügbare Projekte auf dem Marktplatz ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASHFLOW-BEISPIEL ── */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-semibold text-xs uppercase tracking-widest">Rechenbeispiel</span>
            <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
              TinyInvest Escape · 79.000 € · 60 % Belegung
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "Monatsumsatz (219 Nächte ÷ 12 × 120 €)", value: "2.190 €", bold: false },
              { label: "Host-Anteil (45 %)", value: "– 986 €", bold: false },
              { label: "Plattform-Fee (15 %)", value: "– 329 €", bold: false },
              { label: "💰 Investor-Auszahlung (40 %)", value: "875 €/Monat", bold: true },
              { label: "Rendite auf Kaufpreis (vor Steuer)", value: "~13,3 % p.a.", bold: false },
              { label: "Effektive Rendite (mit §7g)", value: "~14–16 % p.a.", bold: true },
            ].map((row) => (
              <div key={row.label} className={`flex justify-between py-3 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}>
                <span>{row.label}</span>
                <span className="font-data">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Kaufpreis</p>
              <p className="font-data text-xl font-black text-white">79.000 €</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Effektiv nach IAB</p>
              <p className="font-data text-xl font-black text-green-400">≈ 62.000 €</p>
            </div>
            <div className="bg-green-600 rounded-xl p-4 text-center">
              <p className="text-green-200 text-[10px] mb-1">IRR p.a.</p>
              <p className="font-data text-xl font-black text-white">12–14 %</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 text-center">
            ⚠ Projektion auf Basis historischer Daten – keine Garantie. Steuerberater konsultieren.
          </p>
        </div>
      </section>

      {/* ── MID IMAGE ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-escape-wald.webp"
              alt="Tiny House Investment – Außenansicht im Wald"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── RISIKEN ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Transparenz</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Risiken – ehrlich genannt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📉", title: "Leerstand", desc: "Belegung kann schwanken. Wirtschaftliche Abschwünge oder Standortprobleme beeinflussen die Einnahmen." },
              { icon: "⚖️", title: "Steuerrechtsänderung", desc: "§7g EStG kann geändert werden. Die aktuelle Förderung gilt bis auf Weiteres – keine Garantie." },
              { icon: "🚛", title: "Betreiberrisiko", desc: "Die Rendite hängt von tiny Escapes ab. Als Eigentümer kannst du das Haus im Notfall herausverlangen." },
            ].map((r) => (
              <div key={r.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <span className="text-2xl mb-3 block">{r.icon}</span>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{r.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            §7g-Analyse, Rendite-Prognose und persönliche Beratung – kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Unterlagen anfordern →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              Aktuelle Projekte →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 justify-center text-[12px]">
            <Link href="/wissen/kapitalanlage" className="text-green-700 hover:underline font-semibold">Detaillierter Bildungsguide →</Link>
            <span className="text-gray-300">·</span>
            <Link href="/steuervorteil" className="text-gray-500 hover:text-green-700 transition-colors">§7g Steueranalyse</Link>
            <span className="text-gray-300">·</span>
            <Link href="/renditemodell" className="text-gray-500 hover:text-green-700 transition-colors">Renditemodell</Link>
            <span className="text-gray-300">·</span>
            <Link href="/senioren" className="text-gray-500 hover:text-green-700 transition-colors">Für Senioren</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
