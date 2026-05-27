import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Steuern sparen als IT-Freelancer 2026: §7g IAB | TinyInvest",
  description:
    "Als IT-Freelancer bis zu 39.500 € Steuerlast reduzieren – §7g IAB nutzen und Tiny House als Kapitalanlage kaufen. Vollautomatisch. Kein Aufwand neben dem Projekt.",
  keywords:
    "steuern sparen it freelancer, kapitalanlage entwickler, §7g software entwickler, it freelancer investment, freelancer steuern deutschland, entwickler kapitalanlage 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/it-freelancer" },
  openGraph: {
    title: "Steuern sparen als IT-Freelancer 2026: §7g IAB | TinyInvest",
    description:
      "Bis zu 39.500 € Steuerlast reduzieren – §7g IAB nutzen. Tiny House als Kapitalanlage: vollautomatisch, monatlicher Cashflow, kein Aufwand neben dem Projekt.",
    url: "https://tinyhouse.investments/wissen/it-freelancer",
  },
};

const faqItems = [
  {
    question: "Bin ich als IT-Freelancer §7g-berechtigt?",
    answer:
      "In den meisten Fällen ja. Gewerblich angemeldete IT-Freelancer (§15 EStG) sind direkt §7g-berechtigt. Softwareentwickler, die als Freiberufler nach §18 EStG eingestuft sind (anerkannt durch Finanzämter und FG-Urteile bei ingenieursmäßiger Tätigkeit), sind ebenfalls berechtigt. Die Einordnung klärt Ihr Steuerberater — die Voraussetzungen sind in der IT-Branche sehr häufig erfüllt.",
  },
  {
    question: "Wie hoch ist der Steuervorteil bei einem Tagessatz von 800–1.200 €?",
    answer:
      "Bei einem Jahresgewinn von 100.000–150.000 € liegt der Grenzsteuersatz bei 42–45 %. Ein IAB von 39.500 € (50 % eines 79.000 €-Tiny-House) spart ca. 16.590–17.775 € Steuern — noch vor dem Kauf. Im Kaufjahr kommen Sonder-AfA (40 %) und degressive AfA (30 %) hinzu. Gesamtvorteil in zwei Jahren: bis zu 25.000–30.000 €. Alle Angaben sind Richtwerte.",
  },
  {
    question: "Ich bin zwischen Projekten — kann ich den IAB trotzdem bilden?",
    answer:
      "Ja, sofern Sie im betreffenden Steuerjahr Gewinne aus selbstständiger oder gewerblicher Tätigkeit erzielen. Der IAB muss im Jahr der Bildung einen positiven Gewinn voraussetzen — bei Projektpausen in einem anderen Jahr ist die individuelle Situation mit dem Steuerberater zu klären.",
  },
  {
    question: "Muss ich das Tiny House selbst verwalten?",
    answer:
      "Nein. tiny Escapes übernimmt Buchungen, Gästebetreuung, Reinigung und Wartung vollständig. Sie erhalten monatlich 40 % der Nettomieteinnahmen — remote, ohne Aufwand, egal ob Sie gerade im Sprint sind oder auf Workation.",
  },
  {
    question: "Kann ich das Tiny House nach ein paar Jahren verkaufen?",
    answer:
      "Ja. Das Tiny House gehört Ihnen als physisches Wirtschaftsgut. Es kann jederzeit weiterverkauft werden — der Erlös ist dann steuerlich zu berücksichtigen (Veräußerungsgewinn). Empfohlen wird ein Anlagehorizont von mindestens 5 Jahren für optimale Gesamtrendite.",
  },
];

export default function ItFreelancerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Steuern sparen als IT-Freelancer 2026: §7g IAB | TinyInvest",
    description:
      "Als IT-Freelancer bis zu 39.500 € Steuerlast reduzieren – §7g IAB nutzen. Tiny House als Kapitalanlage, vollautomatisch verwaltet.",
    url: "https://tinyhouse.investments/wissen/it-freelancer",
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
    image: {
      "@type": "ImageObject",
      url: "https://tinyhouse.investments/images/outside/it-freelancer-steuern-sparen-iab.webp",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "IT-Freelancer", item: "https://tinyhouse.investments/wissen/it-freelancer" },
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
      <Script id="article-schema-it-freelancer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-it-freelancer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-it-freelancer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">IT-Freelancer</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerstrategie · IT-Freelancer & Entwickler</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Steuern sparen als IT-Freelancer: §7g IAB + Tiny House — bis zu 39.500 € Steuervorteil
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
            IT-Freelancer mit 800–1.500 € Tagessatz zahlen effektiv 40–45 % Steuern auf ihren Gewinn. Der §7g IAB erlaubt es, bis zu 39.500 € im Jahr vor dem Kauf abzuziehen — Steuererstattung vor Lieferung. Das Tiny House läuft danach vollautomatisch: kein Aufwand neben dem Projekt.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["§7g IAB nutzbar", "Bis zu 39.500 € Steuervorteil", "Vollautomatisch", "Ab 79.000 €", "Remote-kompatibel"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/it-freelancer-steuern-sparen-iab.webp"
              alt="Steuern sparen als IT-Freelancer: §7g IAB und Tiny House als Kapitalanlage – bis zu 39.500 € Steuervorteil"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Two profiles */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Zwei Profile — ein Modell</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Welches Setup passt zu dir?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-green-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-xl">💻</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Gewerblich angemeldeter IT-Freelancer</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Die häufigste Form: Entwickler, DevOps, Data Scientists mit Gewerbeanmeldung (§15 EStG). Direkt §7g-berechtigt — IAB, Sonder-AfA und degressive AfA ohne Einschränkung.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["§7g IAB direkt nutzbar", "50 % Kaufpreis im Vorjahr", "Sonder-AfA 40 % on top", "Gewinngrenze max. 200.000 €"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-xl">🎓</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">IT-Freelancer nach §18 (Freiberufler)</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Softwareentwicklung gilt in vielen Fällen als freiberuflich (ingenieursmäßige Tätigkeit, FG-Urteile). Ebenfalls §7g-berechtigt. Steuerberater klärt die Einordnung — in der Praxis häufig unproblematisch.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["§7g via §18 EStG nutzbar", "Gleiches IAB-Modell", "Einordnung durch Steuerberater", "Oft problemlos anerkannt"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14 space-y-5">
            <p className="text-gray-700 text-base leading-relaxed">
              IT-Freelancer gehören zu den am stärksten betroffenen Gruppen im deutschen Steuersystem: Kein Arbeitgeberanteil, keine betriebliche Altersvorsorge — dafür ein Grenzsteuersatz, der bei guten Tagessätzen schnell über 42 % klettert. Gleichzeitig liegt das Kapital oft unverzinst auf dem Geschäftskonto, weil aktives Investment neben dem Projekt kaum möglich ist.
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Die Zahlen: Was §7g konkret bringt</h2>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-2">Beispielrechnung: 100 €/h × 1.000h = 100.000 € Gewinn, 42 % Grenzsteuersatz</p>
              <ul className="text-gray-600 text-[13px] space-y-1 leading-relaxed">
                <li>IAB Vorjahr: 39.500 € → <strong>Steuerersparnis ~16.590 €</strong> (noch vor Lieferung)</li>
                <li>Kaufjahr Sonder-AfA (40 %): 31.600 € → weitere ~13.272 € gespart</li>
                <li>Kaufjahr degressive AfA (30 %): 23.700 € → weitere ~9.954 € gespart</li>
                <li className="font-bold text-gray-900">Gesamtvorteil Jahre 1+2: bis zu ~29.000 €</li>
              </ul>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Dazu monatliche Mieteinnahmen von 40 % der Nettomiete — vollautomatisch, ohne Aufwand, egal ob du gerade im Sprint bist, auf Workation oder zwischen Projekten. Das Tiny House arbeitet für dich, während du arbeitest.
            </p>
          </div>

          {/* Pain points */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Das Problem mit klassischen Investments für IT-Freelancer</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "💸", title: "40–45 % Effektivsteuersatz", desc: "Bei 100k+ Jahresgewinn fließt fast die Hälfte ans Finanzamt. ETF-Renditen von 7 % brutto schrumpfen nach Steuern auf 4–5 % — kaum mehr als Inflation." },
              { icon: "🏦", title: "Altersvorsorge komplett selbst", desc: "Kein Arbeitgeber, kein Betriebsrentenangebot. Wer nicht aktiv privat vorsorgt, steht im Alter mit der gesetzlichen Mindestrente da." },
              { icon: "💰", title: "Gewinne parken unverzinst", desc: "Zwischen Projekten oder am Jahresende liegt Kapital auf dem Geschäftskonto — ohne Rendite. §7g wandelt dieses Kapital in einen aktiven Steuerhebel um." },
              { icon: "⏱️", title: "Kein Aufwand neben dem Projekt", desc: "tiny Escapes verwaltet vollständig. Buchungen, Gäste, Reinigung — alles remote erledigt. Du bekommst monatlich Geld überwiesen, mehr nicht." },
            ].map((item) => (
              <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 steps */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So läuft es ab — 3 Schritte</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { step: "1", title: "IAB bilden", desc: "50 % des Kaufpreises im Vorjahr in der Steuererklärung abziehen. Steuererstattung vor der Lieferung — Kapital kommt zurück, bevor das Haus ankommt." },
              { step: "2", title: "Kaufen & abschreiben", desc: "Sonder-AfA 40 % + degressive AfA 30 % im Kaufjahr. Maximaler Steuerhebel in zwei aufeinanderfolgenden Jahren." },
              { step: "3", title: "Cashflow kassieren", desc: "40 % der Nettomieteinnahmen monatlich. Alles verwaltet von tiny Escapes — du kriegst eine Überweisung, sonst nichts." },
            ].map((item) => (
              <div key={item.step} className="border border-gray-100 rounded-2xl p-6 bg-white">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm mb-4">{item.step}</div>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid image */}
          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/outside/tiny-house-wald-naturstandort.webp"
              alt="Tiny House in Naturlage – passiver Cashflow für IT-Freelancer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* 3 Vorteile */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">3 Vorteile für IT-Freelancer</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { num: "01", title: "Steuervorteil vor dem Kauf", desc: "IAB senkt die Steuerlast im Vorjahr — Erstattung landet auf dem Konto, bevor das Tiny House ausgeliefert wird. Kein anderes Investment hat diesen Vorzieheffekt." },
              { num: "02", title: "Passives Einkommen remote", desc: "Monatlicher Cashflow ohne Aufwand — egal ob im Homeoffice, auf Workation oder zwischen Projekten. Vollständig remote kompatibel." },
              { num: "03", title: "Sachwert statt Konto", desc: "Kein Tagesgeldkonto, kein Fonds. Ein physisches Wirtschaftsgut mit Restwert — inflationsresistent, eigentumsrechtlich klar, jederzeit verkaufbar." },
            ].map((item) => (
              <div key={item.num} className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="font-data text-3xl font-black text-green-300 mb-3">{item.num}</p>
                <h3 className="font-black text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-green-100 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Vergleich: Was IT-Freelancer typischerweise nutzen</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Tagesgeld</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">ETF-Sparplan</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Sofortige Steuerersparnis", "Keine", "Keine", "Bis zu 39.500 € im Vorjahr"],
                    ["Rendite p.a.", "~2–3 %", "~6–8 % (brutto)", "12–18 % IRR nach Steuer"],
                    ["Aufwand", "Keiner", "Gelegentliches Rebalancing", "Keiner (vollverwaltet)"],
                    ["§7g IAB nutzbar", "❌ Nein", "❌ Nein", "✅ Ja"],
                    ["Remote nutzbar", "✅ Ja", "✅ Ja", "✅ Ja"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center text-gray-500">{a}</td>
                      <td className="p-4 text-center text-gray-500">{b}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Rendite- und Steuerangaben sind Richtwerte und Projektionen. Die steuerliche Einordnung als Gewerbe (§15) oder Freiberufler (§18) ist individuell zu klären. Bitte konsultiere einen §7g-erfahrenen Steuerberater.</p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/iab-tiny-house" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">IAB Guide →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Abschreibung erklärt →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierung →</Link>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Verfügbare Objekte →</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Häufige Fragen von IT-Freelancern</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Kostenlose Beratung für IT-Freelancer</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir zeigen dir, wie §7g konkret auf deine Situation passt — inkl. Renditeberechnung und Steuerübersicht. Unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Beratung anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
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
