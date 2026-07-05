import { BASE_OG } from "@/app/lib/og";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Tiny House Altersvorsorge 2026: Senioren & Rentner | TinyInvest",
  description:
    "Tiny House als Altersvorsorge: Sachwert kaufen, monatlich Einkommen kassieren — oder selbst einziehen. Für Senioren & Rentner ab 55. mit geringem Aufwand über lokale Partner.",
  keywords:
    "tiny house altersvorsorge, tiny house senioren, tiny house rente, tiny house rentner, im alter tiny house wohnen, sachwert rentenlücke, passives einkommen senioren",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: { canonical: "https://tinyhouse.investments/wissen/senioren" },
  openGraph: {
    ...BASE_OG,
    type: "article",
    title: "Tiny House Altersvorsorge 2026: Senioren & Rentner | TinyInvest",
    description:
      "Sachwert statt Sparbuch: Tiny House kaufen, monatlich Einkommen erhalten oder selbst einziehen. Für Senioren & Rentner — mit geringem Aufwand über lokale Partner.",
    url: "https://tinyhouse.investments/wissen/senioren",
  },
};

const faqItems = [
  {
    question: "Muss ich das Tiny House selbst verwalten?",
    answer:
      "Nein. Bei der Kapitalanlage-Variante übernimmt lokale Partner die vollständige Bewirtschaftung: Buchungen, Reinigung, Gästebetreuung, Wartung. Sie erhalten monatlich 40 % der Mieteinnahmen auf Ihr Konto — ohne eigenen Aufwand.",
  },
  {
    question: "Kann ich auch selbst darin wohnen?",
    answer:
      "Ja. Ein Tiny House auf einem Vlemmix Trailer kann als Hauptwohnsitz genutzt werden, sofern am Stellplatz eine Wohngenehmigung vorliegt. Viele Senioren verkaufen ihr großes Haus, kaufen das Tiny House und ziehen in eine ruhige Naturlage — mit deutlich niedrigeren Lebenshaltungskosten.",
  },
  {
    question: "Was passiert mit dem Objekt, wenn ich es nicht mehr will?",
    answer:
      "Das Tiny House gehört Ihnen als physisches Eigentum. Sie können es jederzeit weiterverkaufen, vermieten oder den Stellplatz wechseln. Da es auf einem Trailer steht, ist es mobil und nicht an eine einzige Immobilie gebunden.",
  },
  {
    question: "Ist das Risiko gering?",
    answer:
      "Sie kaufen einen realen Sachwert — kein Papier, keine Aktie. Das Objekt behält einen Restwert und ist nicht von Bankbilanzen abhängig. Die Hauptrisiken sind Belegungsschwankungen und Gesetzesänderungen bei Kurzzeitvermietung, weshalb lokale Partner auf diversifizierte Standorte und langfristige Partnerschaften setzt.",
  },
  {
    question: "Gibt es eine Mindestlaufzeit?",
    answer:
      "Nein. Es gibt keine vertragliche Mindestlaufzeit. Sie können den Bewirtschaftungsvertrag mit lokale Partner kündigen oder das Objekt weiterverkaufen. Empfohlen wird jedoch ein Anlagehorizont von mindestens 5 Jahren für eine optimale Renditeentwicklung.",
  },
  {
    question: "Ab welchem Alter kann ich investieren oder selbst einziehen?",
    answer:
      "Es gibt keine Altersgrenze. Viele unserer Käufer sind zwischen 55 und 75 Jahren. Ob Sie das Tiny House als Kapitalanlage nutzen oder selbst einziehen möchten, hängt von Ihrer persönlichen Lebenssituation ab — nicht von Ihrem Alter. Eine kostenfreie Beratung hilft Ihnen, die passende Option zu wählen.",
  },
  {
    question: "Ist ein Tiny House für Senioren barrierefrei?",
    answer:
      "Moderne Tiny Houses auf Vlemmix-Trailer können mit ebenem Eingang, bodengleicher Dusche und breiten Türöffnungen gebaut werden. Individuelle Anpassungen sind möglich. Sprechen Sie uns im Beratungsgespräch auf barrierefreie Ausstattungsoptionen an — wir koordinieren die Anforderungen direkt mit dem Hersteller.",
  },
  {
    question: "Was passiert mit dem Tiny House, wenn ich pflegebedürftig werde?",
    answer:
      "Das Tiny House gehört Ihnen als physisches Eigentum. Sie können es jederzeit weiterverkaufen, an Angehörige übertragen oder in die Kapitalanlage-Variante wechseln und monatliche Einnahmen beziehen. Durch diese Flexibilität bleibt das investierte Kapital verfügbar — anders als bei Rentenversicherungen oder gebundenen Fonds.",
  },
];

export default function SeniorenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House Altersvorsorge 2026: Für Senioren & Rentner",
    description:
      "Tiny House als Altersvorsorge: Sachwert kaufen, monatlich Einkommen kassieren oder selbst einziehen. Für Senioren & Rentner ab 55.",
    url: "https://tinyhouse.investments/wissen/senioren",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
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
      url: "https://tinyhouse.investments/images/outside/tiny-house-naturlage-gruen.webp",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tinyhouse.investments" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", position: 3, name: "Senioren & Rentner", item: "https://tinyhouse.investments/wissen/senioren" },
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
      <Script id="article-schema-senioren" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-senioren" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-senioren" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Senioren & Rentner</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Altersvorsorge · Senioren & Rentner</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Altersvorsorge: Sachwert mit monatlicher Auszahlung — oder selbst einziehen
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-05-15">15. Mai 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Die gesetzliche Rente deckt die Lebenshaltungskosten oft nicht mehr. Sparbücher verlieren Kaufkraft, Aktien sind zu risikoreich, und ein großes Haus frisst Zeit und Geld. Ein Tiny House bietet eine dritte Option: Ein echter Sachwert, der entweder monatliches Einkommen generiert — oder als komfortabler, günstiger Wohnort im Ruhestand dient.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-5">
            {["Altersvorsorge", "Sachwert", "Passives Einkommen", "Selbst einziehen", "Rentenlücke"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/outside/tiny-house-senioren.webp"
              alt="Senioren-Paar vor ihrem Tiny House in Naturlage bei Sonnenuntergang"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Zwei Wege — eine Entscheidung</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Wie möchten Sie Ihr Tiny House nutzen?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-green-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-xl">💰</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Als Kapitalanlage</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Sie kaufen das Tiny House — lokale Partner übernehmen alles. Buchungen, Gäste, Reinigung, Wartung. Sie erhalten monatlich 40 % der Mieteinnahmen auf Ihr Konto. Kein Aufwand, echtes Einkommen.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["12–14 % IRR p.a.", "Monatliche Auszahlung", "über lokale Partner bewirtschaftet", "Kein Verwaltungsaufwand"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-xl">🏡</div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Selbst einziehen</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                Großes Haus verkaufen, ins Tiny House ziehen. Niedrige Betriebskosten, keine Treppen, Naturlage. Ein Tiny House auf Vlemmix Trailer kann — mit entsprechender Genehmigung am Stellplatz — als Hauptwohnsitz genutzt werden.
              </p>
              <ul className="space-y-2 text-[13px] text-gray-600">
                {["Günstiger als Eigentumswohnung", "Niedrige laufende Kosten", "Mobil & flexibel", "Natur statt Großstadt"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Fließtext */}
          <div className="max-w-3xl mb-14 space-y-5">
            <p className="text-gray-700 text-base leading-relaxed">
              Die klassische Altersvorsorge steht vor einer Zerreißprobe: Die gesetzliche Rente deckt oft kaum noch die steigenden Lebenshaltungskosten, während Erspartes auf dem Sparbuch durch die Inflation schleichend an Wert verliert. Wer im Ruhestand keine schlaflosen Nächte wegen volatiler Aktienmärkte verbringen möchte, sucht nach greifbaren Alternativen. Ein Tiny House bietet hier eine innovative dritte Option: Es ist ein echter Sachwert, der Ihnen entweder ein stabiles monatliches Einkommen sichert oder als hocheffizienter, naturnaher Wohnort für den eigenen Lebensabend dient.
            </p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Zwei Wege zur finanziellen Freiheit im Alter</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Konzept von TinyInvest lässt Ihnen die volle Flexibilität, passend zu Ihrer Lebensplanung:
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-1">Als renditestarke Kapitalanlage</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Sie erwerben das Tiny House als physisches Eigentum, während Profis den Rest erledigen. Über Partner wie lokale Partner wird das Objekt über lokale Partner bewirtschaftet – von der Buchung über die Reinigung bis zur Wartung. Sie profitieren von einer prognostizierten Rendite von 12–14 % p.a. und erhalten monatlich 40 % der Mieteinnahmen direkt auf Ihr Konto. Es ist passives Einkommen im besten Sinne: kein Verwaltungsaufwand, kein Mieterstress, volle Transparenz.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-300 rounded-r-2xl p-5">
              <p className="font-black text-gray-900 text-[14px] mb-1">Als selbstgenutzter Rückzugsort</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Viele Senioren empfinden das langjährige Familienhaus im Alter eher als Last. Hohe Heizkosten, ständige Reparaturen und zu viele Treppen fressen Zeit und Geld. Ein Tiny House ermöglicht den „Downsizing"-Traum: Reduzieren Sie Ihre Fixkosten auf ein Minimum und tauschen Sie Beton gegen Natur. Dank moderner Bauweise und hochwertiger Ausstattung genießen Sie vollen Komfort auf kleiner Fläche – barrierearm und energieeffizient.
              </p>
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Sicherheit durch Sachwerte</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Im Gegensatz zu Papierwerten wie Aktien oder Zertifikaten ist ein Tiny House „anfassbar". Es steht auf einem hochwertigen Vlemmix-Trailer, ist mobil und behält einen stabilen Restwert. In einer Zeit, in der die Rentenlücke wächst, bietet diese Form der Vorsorge eine beruhigende Sicherheit: Sie investieren in ein Wirtschaftsgut, das unabhängig von Bankbilanzen existiert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ob Sie nun Ihr Kapital für sich arbeiten lassen möchten oder einen minimalistischen, selbstbestimmten Wohnstil im Grünen suchen – das Tiny House ist mehr als nur ein Wohntrend. Es ist eine zukunftssichere Strategie für einen entspannten Ruhestand, der Ihnen die Freiheit zurückgibt, die Sie sich verdient haben.
            </p>
          </div>

          {/* Rentenlücke Fließtext */}
          <div className="max-w-3xl mb-14 space-y-5">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Die Rentenlücke: Was die Zahlen wirklich bedeuten</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Die gesetzliche Rente ersetzt im Durchschnitt nur rund 48 % des letzten Nettoeinkommens. Konkret: Wer vor der Rente 3.000 € netto verdient hat, bekommt heute im Schnitt knapp 1.440 € monatlich ausgezahlt. Davon gehen noch Krankenkassenbeiträge und Steuern ab — übrig bleiben für viele weniger als 1.200 €. Wer zur Miete wohnt, zahlt davon allein schon 700–900 € für eine kleine Stadtwohnung. Was bleibt für Urlaub, Gesundheitskosten, Hobbys und die kleinen Freuden des Lebens?
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Klassische Vorsorgeinstrumente schließen diese Lücke kaum noch. Riester-Verträge galten einmal als Hoffnungsträger — heute kämpfen viele Anbieter mit strukturellen Problemen, und die Renditen enttäuschen. Sparbücher und Tagesgeldkonten bieten zwar Sicherheit, verlieren aber bei anhaltender Inflation real an Kaufkraft. ETFs und Aktien schwanken stark: Wer mit 65 einen Kurseinbruch erlebt, hat keine Zeit mehr zum Warten. Sachwertalternativen wie Betongold — also Immobilien — sind für viele schlicht zu teuer oder zu aufwändig in der Verwaltung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House schlägt eine neue Brücke: als echter, greifbarer Sachwert mit überschaubarem Kapitaleinsatz (ab 65.000 €), der entweder monatliche Einnahmen generiert oder die eigenen Wohnkosten drastisch senkt — und damit die Rentenlücke von zwei Seiten gleichzeitig angreift.
            </p>
          </div>

          {/* Downsizing Fließtext */}
          <div className="max-w-3xl mb-14 space-y-5">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Downsizing im Alter: Freiheit statt Ballast</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Familienhaus, das einmal voller Leben war, kann im Alter zur Bürde werden. Fünf Zimmer für zwei Personen, eine Heizanlage, die ständig Aufmerksamkeit braucht, ein Garten, der nach Pflege ruft — und das alles mit einem Budget, das durch die gesetzliche Rente begrenzt ist. Laut Berechnungen des Deutschen Instituts für Wirtschaftsforschung kostet das Halten eines älteren Einfamilienhauses (Heizung, Instandhaltung, Versicherungen, Grundsteuer) im Schnitt 600–900 € im Monat — auch ohne laufende Kreditbelastung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Ein Tiny House auf einem hochwertigen Vlemmix-Trailer bietet hingegen monatliche Betriebskosten zwischen 80 und 150 €: Strom, Wasser, Versicherung — fertig. Die Stellplatzmiete in einer ruhigen Naturlage kommt noch hinzu, liegt aber meist deutlich unter einer Stadtwohnung. Wer sein großes Haus verkauft und ins Tiny House zieht, kann mit dem freigewordenen Kapital entweder weitere Tiny Houses als Kapitalanlage erwerben — oder das Geld einfach als Puffer für die kommenden Jahre behalten.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Hinzu kommt der emotionale Gewinn: Natur statt Beton, Ruhe statt Stadtlärm, Übersichtlichkeit statt endlosem Aufräumen. Viele Senioren berichten, dass sie nach dem Downsizing das erste Mal seit Jahren wieder das Gefühl haben, wirklich zu Hause zu sein — nicht Gefangene eines zu großen Hauses, das sie verwalten müssen. Tiny Houses sind heute barriereich konzipierbar: ebener Eingang, bodengleiche Dusche, offene Grundrisse. Komfort und Reduktion schließen sich dabei nicht aus.
            </p>
          </div>

          {/* Pain points */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum klassische Wege im Ruhestand nicht mehr reichen</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: "📉", title: "Rentenlücke wächst", desc: "Die gesetzliche Rente ersetzt im Schnitt nur 48 % des letzten Nettoeinkommens. Wer nicht privat vorgesorgt hat, spürt das ab dem ersten Rentenbescheid." },
              { icon: "🏦", title: "Sparbuch verliert Kaufkraft", desc: "Bei 2–3 % Inflation und Zinsen nahe null verlieren Sparguthaben real an Wert — Jahr für Jahr, ohne dass es auffällt." },
              { icon: "📊", title: "Aktienmarkt zu risikoreich", desc: "Mit 65 bleibt keine Zeit, einen Crash auszusitzen. Viele Senioren wollen keine schlaflose Nacht mehr wegen Börsenschwankungen." },
              { icon: "🏠", title: "Großes Haus: teuer, aufwändig, isolierend", desc: "Heizung, Reparaturen, Garten — ein großes Haus für zwei Personen frisst Zeit und Geld. Und wenn die Kinder ausgezogen sind, fühlt er sich leer an." },
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

          {/* 3 Vorteile */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">3 Vorteile des Tiny House für Senioren</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { num: "01", title: "Echter Sachwert", desc: "Kein Papier, kein Versprechen. Das Tiny House gehört Ihnen physisch — mit einem Restwert, der nicht von Bankbilanzen abhängt." },
              { num: "02", title: "Einkommen oder niedrige Kosten", desc: "Als Kapitalanlage: 40 % der Mieteinnahmen monatlich. Als Wohnlösung: Heizung, Strom und Versicherung kosten einen Bruchteil eines normalen Hauses." },
              { num: "03", title: "Kein Aufwand", desc: "Bei der Vermietung übernimmt lokale Partner alles. Bei der Eigennutzung ist nichts zu verwalten — kein Mieter, kein Makler, kein Verwalter." },
            ].map((item) => (
              <div key={item.num} className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="font-data text-3xl font-black text-green-300 mb-3">{item.num}</p>
                <h3 className="font-black text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-green-100 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Für wen Fließtext */}
          <div className="max-w-3xl mb-14 space-y-5">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Für wen eignet sich ein Tiny House im Alter?</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong className="text-gray-900">Das Rentner-Paar mit zu großem Haus:</strong> Sie haben jahrzehntelang in Ihr Eigenheim investiert. Die Kinder sind längst ausgezogen, aber das Haus steht noch — groß, teuer und aufwändig. Der Verkauf würde Kapital freisetzen, das Sie bisher nicht wissen, wohin es soll. Statt es auf dem Tagesgeldkonto parken, kaufen Sie ein oder zwei Tiny Houses als Kapitalanlage: monatliche Einnahmen, keine Verwaltungsarbeit, ein echter Sachwert. Das freigesetzte Kapital arbeitet für Sie — nicht umgekehrt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong className="text-gray-900">Der oder die Alleinstehende mit Rentenlücke:</strong> Wer allein von der gesetzlichen Rente lebt, kennt die monatliche Rechnung. Eine zusätzliche Einnahmequelle — auch wenn sie überschaubar beginnt — kann den Unterschied machen. 40 % der Mieteinnahmen eines gut gebuchten Tiny Houses bedeuten je nach Auslastung 500–800 € monatlich zusätzlich. Das ist kein Luxus — das ist finanzielle Luft zum Atmen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong className="text-gray-900">Wer einen neuen Lebensabschnitt aktiv gestalten möchte:</strong> Manche Senioren wollen nicht nur Kapital anlegen — sie wollen auch wohnen. Raus aus der Stadt, rein in die Natur, runter mit den Fixkosten. Ein Tiny House kann beides sein: der eigene Rückzugsort heute und eine renditestarke Anlage morgen. Wer heute einzieht und das Objekt nach ein paar Jahren nicht mehr selbst nutzen möchte, kann jederzeit in die Vermietungsvariante wechseln oder das Tiny House verkaufen. Keine Entscheidung ist endgültig.
            </p>
          </div>

          {/* Process */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">So einfach geht's</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { step: "1", title: "Objekt auswählen", desc: "Wählen Sie ein verfügbares Projekt auf dem Marktplatz. Ab 65.000 €, direkt beim Hersteller gekauft." },
              { step: "2", title: "Entscheidung treffen", desc: "Vermieten mit lokale Partner (monatliche Auszahlung) — oder selbst einziehen mit Genehmigung am Wunschstandort." },
              { step: "3", title: "Genießen", desc: "Ob Einnahmen auf dem Konto oder das Gefühl, in der Natur zu wohnen — Sie genießen, wir kümmern uns um den Rest." },
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
              src="/images/outside/tiny-house-aussenbereich-natur.webp"
              alt="Tiny House in ruhiger Naturlage – ideal für Senioren im Ruhestand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Comparison table */}
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House vs. klassische Altersvorsorge</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Sparbuch</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">ETF / Aktien</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Rendite p.a.", "~0–2 %", "~5–8 % (schwankend)", "12–14 % IRR"],
                    ["Kapitalbindung", "Jederzeit", "Jederzeit (mit Verlustrisiko)", "Empfohlen 5+ Jahre"],
                    ["Eigener Aufwand", "Keiner", "Monitoring nötig", "Keiner (bei Vermietung)"],
                    ["Anfassbar / real", "❌ Nein", "❌ Nein", "✅ Ja"],
                    ["Marktrisiko", "Gering", "Hoch", "Moderat"],
                    ["Insolvenzgeschützt", "Nur bis 100k €", "❌ Nein", "✅ Sachwert"],
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

          {/* Betriebskosten Fließtext */}
          <div className="max-w-3xl mb-14 space-y-5">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight pt-2">Was kostet ein Tiny House im laufenden Betrieb?</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Transparenz ist uns wichtig — deshalb sprechen wir offen über Zahlen. Ein modernes Tiny House auf einem Vlemmix-Trailer ist im laufenden Betrieb ausgesprochen günstig. Für die Eigennutzung können Sie mit folgenden monatlichen Kosten rechnen: Strom ca. 30–50 €, Wasser ca. 15–25 €, Gebäudeversicherung ca. 15–30 €, Stellplatzmiete je nach Lage ca. 150–400 €. Summe: rund 200–500 € monatlich — je nach Standort und persönlichem Verbrauch. Zum Vergleich: Eine vergleichbar komfortable Mietwohnung auf dem Land kostet heute leicht 700–1.100 € warm.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Bei der Kapitalanlage-Variante trägt lokale Partner sämtliche Betriebskosten für das laufende Geschäft (Reinigung, Plattformgebühren, Wartung). Aus Ihrer 40-%-Auszahlung sind keine Abzüge mehr für Verwaltung zu erwarten — das ist bereits im Auszahlungsmodell berücksichtigt. Die größten Kostenblöcke, die Sie kennen sollten: Bei Bedarf anfallende Reparaturen oder Instandhaltungen werden vorab kommuniziert und gemeinsam besprochen. Kein böses Erwachen nach einem Brief vom Verwalter.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Wichtig: Der Kaufpreis des Tiny Houses (ab 65.000 €) ist keine laufende Ausgabe, sondern eine einmalige Investition in Ihr Eigentum — ein Vermögenswert, der Ihnen physisch gehört und jederzeit weiterverkauft werden kann. Anders als bei einer Rentenversicherung oder einem Sparplan bleibt Ihr Kapital greifbar.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">Alle Renditeangaben sind Projektionen auf Basis historischer Belegungsdaten lokaler Partner. Keine Garantie zukünftiger Ergebnisse. Steuerliche und rechtliche Rahmenbedingungen (Selbstnutzung, Wohnsitzanmeldung) sind individuell zu prüfen.</p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/marktplatz" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Projekte ansehen →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Mieteinnahmen erklärt →</Link>
            <Link href="/wissen/ferienimmobilie-steuer" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">vs. Ferienimmobilie →</Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Häufige Fragen von Senioren & Rentnern</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Persönliche Beratung anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Wir beraten Sie kostenfrei — ob Kapitalanlage oder Selbstnutzung. Unterlagen und Renditeberechnung auf Anfrage.
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
