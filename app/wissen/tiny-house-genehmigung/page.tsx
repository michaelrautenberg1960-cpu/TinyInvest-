import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Genehmigung 2026: Was du wirklich brauchst | TinyInvest",
  description:
    "Braucht ein Tiny House eine Baugenehmigung? Alles über Stellplatz, Baurecht, Bebauungsplan und Dauerwohnen. Klare Antworten für Deutschland 2026.",
  keywords:
    "tiny house genehmigung, tiny house stellplatz genehmigung, tiny house baurecht deutschland, tiny house bebauungsplan, tiny house wohnrecht 2026",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-genehmigung",
  },
  openGraph: {
    title: "Tiny House Genehmigung 2026: Was du wirklich brauchst",
    description: "Stellplatz, Baurecht, Bebauungsplan – klare Antworten für Tiny House Investoren in Deutschland.",
    url: "https://tinyhouse.investments/wissen/tiny-house-genehmigung",
  },
};

const faqItems = [
  {
    question: "Braucht ein Tiny House auf einem Trailer eine Baugenehmigung?",
    answer:
      "Das kommt auf den Verwendungszweck an. Ein Tiny House auf einem zugelassenen Vlemmix Trailer gilt primär als Fahrzeug und unterliegt der Straßenverkehrsordnung, nicht dem Baurecht – solange es regelmäßig bewegt wird und nicht dauerhaft auf einem festen Stellplatz steht. Wird es als Ferienunterkunft (Kurzzeitvermietung) genutzt, ist in den meisten Bundesländern keine Baugenehmigung erforderlich, aber der Stellplatz selbst muss genehmigt werden.",
  },
  {
    question: "Was braucht der Stellplatz für ein Tiny House?",
    answer:
      "Der Stellplatz muss im Bebauungsplan für die vorgesehene Nutzung zugelassen sein. Für Ferienvermietung reicht in vielen Fällen eine Nutzungsänderung oder eine gewerbliche Stellplatzduldung. Im tiny Escapes Netzwerk werden Stellplätze vorab rechtlich geprüft – du musst dich als Investor nicht um die Genehmigung kümmern.",
  },
  {
    question: "Darf ich dauerhaft in einem Tiny House wohnen?",
    answer:
      "Dauerwohnen in einem Tiny House ist in Deutschland rechtlich komplex. Ein Tiny House auf Trailer gilt nicht als Wohngebäude im Sinne des Baurechts. Dauerhaftes Bewohnen ohne Baugenehmigung ist in vielen Gemeinden nicht erlaubt. TinyInvest-Assets sind für Kurzzeitvermietung (Tourismus) konzipiert – kein Dauerwohnen.",
  },
  {
    question: "Was ist bei einem Tiny House Investment in Österreich oder der Schweiz anders?",
    answer:
      "In Österreich und der Schweiz gelten grundsätzlich ähnliche Regelungen: mobile Häuser auf Trailern fallen nicht unter das klassische Baurecht, aber die Nutzung als Ferienunterkunft kann lokale Gewerbegenehmigungen erfordern. Das tiny Escapes Netzwerk hat Erfahrung mit Standorten in beiden Ländern und unterstützt bei der Genehmigungsplanung.",
  },
];

export default function GenehmigungPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House Genehmigung 2026: Was du wirklich brauchst",
    "description": "Braucht ein Tiny House eine Baugenehmigung? Alles über Stellplatz, Baurecht, Bebauungsplan und Dauerwohnen. Klare Antworten für Deutschland 2026.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-genehmigung",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-stellplatz-standort.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Genehmigung", "item": "https://tinyhouse.investments/wissen/tiny-house-genehmigung" }
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
      <Script id="faq-schema-genehmigung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-genehmigung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-genehmigung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Genehmigung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rechtlicher Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House Genehmigung 2026: Was du wirklich brauchst
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
            Baurecht, Stellplatz, Bebauungsplan – das Genehmigungsthema ist der häufigste Stolperstein. Hier bekommst du klare Antworten, was bei einem Tiny House Investment tatsächlich notwendig ist – und was nicht.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-stellplatz-standort.webp" alt="Tiny House Standort – Genehmigung und Stellplatz" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Baurecht", "Stellplatz", "Kurzzeitvermietung", "Bebauungsplan", "Deutschland 2026"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Sobald das Wort "Tiny House" fällt, folgt fast immer die gleiche Frage: Braucht das eine Baugenehmigung? Die Antwort ist klarer als die meisten erwarten – und gleichzeitig differenzierter, als ein einfaches Ja oder Nein es wäre. Die entscheidende Frage ist nicht "Wie groß ist das Haus?" sondern: "Wie ist es rechtlich klassifiziert?"
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House auf einem zugelassenen Vlemmix Trailer ist kein Gebäude im Sinne der deutschen Landesbauordnungen. Es ist ein Fahrzeug. Das ändert alles: kein Grundstückskauf, keine Grunderwerbsteuer, keine klassische Baugenehmigung für das Haus selbst. Was genehmigt werden muss, ist der Stellplatz – und das ist deutlich einfacher als ein vollständiges Baugenehmigungsverfahren.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Fahrzeug oder Gebäude? Die entscheidende Frage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-4 text-base">🏢 Wenn es ein Gebäude wäre…</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-red-400">→</span>Baugenehmigung erforderlich</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Eintragung ins Grundbuch</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Grundstückskauf notwendig</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Grunderwerbsteuer (3,5–6,5 %)</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Landesbauordnung anwendbar</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-4 text-base">🚛 Als Fahrzeug (Vlemmix Trailer)…</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span>Straßenzulassung (VIN/FIN)</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Kein Grundstückskauf nötig</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Keine Grunderwerbsteuer</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Beweglich und versetzbar</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>§7g EStG anwendbar</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white mb-12">
            <p className="font-black text-base mb-2">💡 Die rechtliche Realität 2026:</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Ein Tiny House auf einem <strong className="text-white">Vlemmix Trailer mit gültiger Straßenzulassung</strong> ist kein Gebäude im Sinne der Landesbauordnungen. Was genehmigt werden muss: der <strong className="text-white">Stellplatz und dessen Nutzung</strong>.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-aussenbereich-natur.webp" alt="Tiny House Außenbereich Standort" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was der Stellplatz braucht</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                step: "01",
                title: "Bebauungsplan prüfen",
                desc: "Der Stellplatz muss für die vorgesehene Nutzung (Tourismus/Ferienvermietung) im Bebauungsplan zugelassen sein oder eine Befreiung erhalten. Viele landwirtschaftliche Flächen oder Campingplatz-ähnliche Zonen sind geeignet.",
              },
              {
                step: "02",
                title: "Nutzungsart anmelden",
                desc: "Ferienvermietung gilt als gewerbliche Nutzung. In den meisten Gemeinden muss eine Nutzungsanmeldung oder eine Gewerbeanmeldung für den Beherbergungsbetrieb erfolgen – beim Betreiber (Host/tiny Escapes), nicht beim Investor.",
              },
              {
                step: "03",
                title: "Ver- und Entsorgung sicherstellen",
                desc: "Strom, Wasser und Abwasser müssen am Stellplatz vorhanden sein oder über Off-Grid-Systeme (Solar, Sammeltank) realisiert werden. Off-Grid-Setups vereinfachen die Genehmigung erheblich.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-5">
                <div className="font-data text-2xl font-black text-green-700 shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Feriennutzung vs. Dauerwohnen</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Aspekt</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Ferienvermietung</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Dauerwohnen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Baugenehmigung Haus", "✅ Nicht nötig", "⚠ Oft erforderlich"],
                    ["Stellplatz-Genehmigung", "✅ Vereinfacht", "⚠ Komplex"],
                    ["Rechtlicher Status", "✅ Klar geregelt", "⚠ Graubereich"],
                    ["Steuerlich (§7g)", "✅ Vollständig nutzbar", "⚠ Eingeschränkt"],
                    ["TinyInvest-Modell", "✅ Genau das", "❌ Nicht vorgesehen"],
                  ].map(([k, a, b]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{a}</td>
                      <td className="p-4 text-center text-gray-500">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/inside/tiny-house-innen-genehmigung.webp" alt="Tiny House Innenausstattung" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So löst TinyInvest das Genehmigungsthema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "🔍", title: "Standort-Due-Diligence", desc: "Tiny Escapes prüft jeden Stellplatz vor Aufstellung auf Baurecht, Nutzungsart und Infrastruktur." },
              { icon: "📋", title: "Genehmigungsmanagement", desc: "Notwendige Anmeldungen und Gewerbezulassungen werden durch den Host bzw. tiny Escapes abgewickelt." },
              { icon: "🔄", title: "Standortwechsel möglich", desc: "Falls ein Standort rechtliche Probleme bekommt: Das Tiny House wird auf den Trailer gesetzt und zieht um." },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{c.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/hosts" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Für Hosts: Stellplatz anbieten →</Link>
            <Link href="/wissen/tiny-house-standorte" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Beste Standorte →</Link>
            <Link href="/wissen/tiny-house-kaufen-checkliste" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kauf-Checkliste →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/tiny-house-als-kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Genehmigung</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Noch Fragen zum Genehmigungsthema?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Wir klären deine spezifische Situation – kostenlos und unverbindlich.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Beratung anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
