import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Host werden: Tiny House auf deinem Grundstück betreiben 2026 | TinyInvest",
  description:
    "Wie wirst du TinyInvest Host? Voraussetzungen, Verdienst (bis 45 %), Standortanforderungen und der komplette Bewerbungsprozess erklärt.",
  keywords:
    "tiny house host werden, grundstück tiny house vermieten, airbnb host tiny house, tiny escapes host, tiny house betreiber werden",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/host-werden",
  },
  openGraph: {
    title: "Host werden: Tiny House auf deinem Grundstück betreiben",
    description:
      "Kein Eigenkapital nötig: Stell dein Grundstück zur Verfügung und verdiene bis zu 45 % der Mieteinnahmen.",
    url: "https://tinyhouse.investments/wissen/host-werden",
  },
};

const faqItems = [
  {
    question: "Brauche ich eine Gewerbeanmeldung, um als Host tätig zu sein?",
    answer:
      "Das hängt vom Umfang der Tätigkeit ab. Wer regelmäßig und mit Gewinnerzielungsabsicht handelt, muss ein Gewerbe anmelden. TinyInvest unterstützt dich bei dieser Frage und klärt mit dir gemeinsam, ob eine Gewerbeanmeldung notwendig ist. In vielen Fällen lässt sich die Host-Tätigkeit als Nebenerwerb organisieren.",
  },
  {
    question: "Was passiert, wenn ein Gast das Tiny House beschädigt?",
    answer:
      "Gäste hinterlegen über Airbnb und Booking.com eine Sicherheitsleistung. Darüber hinaus ist das Tiny House über eine Kaskoversicherung des Investors abgesichert. Als Host haftest du nicht für Schäden, die Gäste verursachen – solange du die vereinbarten Sorgfaltspflichten erfüllst.",
  },
  {
    question: "Kann ich selbst entscheiden, welche Gäste ich aufnehme?",
    answer:
      "Die Buchungsverwaltung läuft zentral über tiny Escapes und die Plattformen. Du kannst einzelne Buchungsanfragen in Abstimmung mit tiny Escapes ablehnen, wenn es konkrete Gründe gibt. Der Prozess ist darauf ausgelegt, dir möglichst wenig Koordinationsaufwand zu geben – die Plattform übernimmt das Gäste-Screening.",
  },
  {
    question: "Kann ich aufhören, Host zu sein, wenn es mir nicht mehr passt?",
    answer:
      "Es gibt einen Betreibervertrag mit einer vereinbarten Laufzeit. Nach Ablauf oder bei beidseitigem Einvernehmen kann der Vertrag beendet werden. Das Tiny House gehört dem Investor und wird dann entweder an einen neuen Standort verlegt oder verkauft. Ein kurzfristiger Exit ist möglich, aber vertraglich geregelt.",
  },
];

export default function HostWerdenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Host werden: Tiny House auf deinem Grundstück betreiben 2026",
    "description": "Wie wirst du TinyInvest Host? Voraussetzungen, Verdienst (bis 45 %), Standortanforderungen und der komplette Bewerbungsprozess erklärt.",
    "url": "https://tinyhouse.investments/wissen/host-werden",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-host-grundstueck.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Host werden", "item": "https://tinyhouse.investments/wissen/host-werden" }
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
        id="faq-schema-host-werden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script id="article-schema-host-werden" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-host-werden" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-amber-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-amber-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-amber-600 font-semibold">Host werden</span>
          </div>
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Für Hosts · Grundstückseigentümer · Guide 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Host werden: Tiny House auf deinem Grundstück betreiben
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
            Als TinyInvest Host stellst du das Grundstück, übernimmst Check-in, Reinigung und Gästebetreuung – und profitierst von einem leistungsbasierten Einkommensmodell ohne eigenes Kapitalrisiko.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
            <Image src="/images/outside/tiny-house-host-grundstueck.webp" alt="Tiny House Host – Grundstück mit Tiny House" fill className="object-cover" priority />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Bis 45 % Einnahmenanteil", "Kein Eigenkapital", "EU-weit möglich", "Leistungsbasiert"].map((tag) => (
              <span key={tag} className="bg-amber-50 border border-amber-100 text-amber-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das klassische Modell bei Ferienunterkünften: Wer verdienen will, muss erst investieren. Grundstück kaufen, Haus bauen oder kaufen, Gäste selbst verwalten. TinyInvest dreht dieses Prinzip um. Du brauchst kein Kapital – nur ein geeignetes Grundstück. Der Investor kauft das Tiny House, du betreibst es vor Ort und erhältst dafür bis zu 45 % der monatlichen Mieteinnahmen. Wer besser bewertet wird, verdient mehr. Die Plattform übernimmt Marketing, Buchungsverwaltung und Preisgestaltung.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das Modell funktioniert, weil es drei Interessen gleichzeitig bedient: Der Investor möchte sein Haus zuverlässig betrieben sehen. Der Gast möchte eine gepflegte, persönlich betreute Unterkunft. Du als Host möchtest ein faires Einkommen ohne Kapitalrisiko. In dieser Struktur hängt dein Verdienst direkt von deiner Leistung ab – nicht von Börsenkursen oder Baugenehmigungen. Wer gute Gäste-Bewertungen sammelt, bekommt mehr Buchungen und einen höheren Anteil.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Das Host-Modell erklärt</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Du stellst einen geeigneten Stellplatz zur Verfügung – privat, landwirtschaftlich oder gewerblich, mindestens 50–80 m² ebene Fläche mit stabiler Zufahrt für einen Tieflader. TinyInvest vermittelt dann einen passenden Investor, der das Tiny House kauft. Du schließt einen Betreibervertrag ab, kein Eigenkapital nötig. Sobald das Haus aufgestellt und gelistet ist, teilen sich die Einnahmen auf: Du als Host erhältst bis zu 45 %, der Investor bekommt 40 % passiv, 15 % entfallen auf die Plattform.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Was das Modell für Hosts besonders attraktiv macht: Es gibt kein eigenes Kapitalrisiko und kein unternehmerisches Haftungsrisiko für das Gebäude. Die Vergütung ist leistungsbasiert – je besser deine Gäste-Bewertungen und Belegungsquoten, desto höher dein Anteil. Die Plattform übernimmt Marketing, Buchungsmanagement und Preisgestaltung. Du konzentrierst dich auf das, was Gäste wirklich schätzen: persönliche Betreuung vor Ort, saubere Übergaben und ein gepflegtes Ambiente.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Welche Standorte eignen sich?</h2>
          <div className="max-w-3xl mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              TinyInvest-Standorte befinden sich in Tourismusregionen – Natur, Wald, Wasser oder landschaftlich reizvolle Lagen sind ideal. Städtenähe bis 60 Minuten Fahrtzeit ist vertretbar, entscheidend ist das Erlebnis vor Ort. Geeignete Grundstückstypen reichen vom Bauernhof über Campingplätze und Ferienparks bis zu Privatgärten ab 800 m², Seegrundstücken oder Waldrändern. Auch Weinberge und Naturgrundstücke im Ausland wurden bereits erfolgreich erschlossen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Infrastrukturanforderungen hängen vom Modell ab: On-Grid-Häuser benötigen einen 230V-Stromanschluss und Wasserversorgung. Off-Grid-Modelle kommen ohne diese Anschlüsse aus – Energie kommt von der Solaranlage, Sanitär wird über eine Komposttoilette gelöst. Bei der Genehmigungsfrage – Stellplatzgenehmigung oder temporäres Aufstellen – unterstützt TinyInvest aktiv. Die gewerbliche Nutzung muss in der Regel als Nebenerwerb angemeldet werden; auch dabei hilft das Team.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <Image src="/images/outside/tiny-house-stellplatz-standort.webp" alt="Tiny House Standort – geeignetes Grundstück für Hosts" fill className="object-cover" priority />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was kannst du als Host verdienen?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Auf Basis eines TinyInvest Escape (79.000 €) bei 60 % Belegung ergibt sich folgendes Bild: Die monatlichen Gesamtmieteinnahmen liegen bei rund 1.825 €. Davon fließen bis zu 45 % – also bis zu 821 € pro Monat – an dich als Host. Über das Jahr summiert sich das auf bis zu 9.852 €. Der Investor erhält 730 € monatlich passiv, ohne eigene Tätigkeit vor Ort.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Dein Anteil ist nicht vertraglich fixiert, sondern leistungsbasiert. Exzellente Gäste-Bewertungen, schnelle Reaktionszeiten und eine gepflegte Ausstattung werden mit dem vollen 45 %-Anteil belohnt. Das setzt einen klaren Anreiz – und sichert dem Investor gleichzeitig maximale Belegungsquoten. Hosts, die konsequent Top-Ratings sammeln, erreichen nach wenigen Saisons eine verlässliche Nebeneinkommen-Basis ohne eigenes Kapital eingesetzt zu haben.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Deine Aufgaben als Host</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Kern deiner Tätigkeit dreht sich um drei Bereiche: Check-in und Check-out, Reinigung sowie Grundstückspflege. Pro Buchung empfängst du die Gäste persönlich oder über einen Smart-Lock, gibst eine kurze Einweisung ins Haus – das dauert typisch 15 bis 30 Minuten. Nach jedem Aufenthalt reinigst du das Tiny House, was je nach Modell ein bis zwei Stunden in Anspruch nimmt. Wer das outsourcen möchte, kann einen lokalen Reinigungsservice beauftragen, was viele erfahrene Hosts mit mehreren Buchungen pro Monat tun.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Hinzu kommen Grundstückspflege – Terrasse, Außenbereich, Rasen mähen, Laub entfernen – sowie gelegentliche kleine Wartungsarbeiten: Glühbirnen wechseln, Solarpanel reinigen, kleinere Reparaturen. Größere Instandhaltungsmaßnahmen koordiniert TinyInvest; du trägst keine Kosten dafür. Die Kommunikation mit Gästen läuft großteils über die Plattform tiny Escapes, die auch Buchungsmanagement und Zahlungsabwicklung übernimmt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Realistisch betrachtet bedeutet das bei vier Buchungen pro Monat etwa acht Stunden für Check-ins und Reinigungen sowie zwei bis drei Stunden für Grundstückspflege – insgesamt rund zehn bis zwölf Stunden monatlich. Für diesen Aufwand erhältst du bis zu 821 € – ein Stundensatz, der sich sehen lässt.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Der Bewerbungsprozess: Schritt für Schritt</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Weg vom ersten Kontakt bis zur ersten Gästebuchung dauert typisch vier bis acht Wochen. Im ersten Schritt schreibst du TinyInvest eine kurze Beschreibung deines Grundstücks – Lage, verfügbare Fläche, Infrastruktur. Das Team meldet sich innerhalb von 24 Stunden. Innerhalb von zwei bis fünf Tagen erhältst du eine ehrliche Einschätzung: Lage, Tourismusattraktivität, Genehmigungspotenzial und Infrastruktur werden bewertet.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wenn dein Standort geeignet ist, beginnt das Investor-Matching: TinyInvest sucht einen passenden Investor für dein Grundstück, du kannst das Modell und die Person kennenlernen. Das dauert in der Regel ein bis zwei Wochen. Danach folgt die Vertragsphase: Du unterschreibst den Betreibervertrag, TinyInvest hilft dir bei Gewerbeanmeldung und Genehmigungsfragen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Im vorletzten Schritt wird das Tiny House geliefert, aufgebaut und buchungsbereit eingerichtet – du wirst in alle Abläufe eingewiesen: Check-in-Prozess, Reinigungsstandards, Dashboard-Nutzung. Anschließend wird das Haus auf tiny Escapes und Airbnb gelistet. Erste Buchungen gehen typischerweise nach zwei bis vier Wochen ein. Ab dann bekommst du monatlich deine Auszahlung.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/hosts" className="border border-amber-200 text-amber-700 hover:bg-amber-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Host-Seite →</Link>
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Renditemodell für Investoren →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Host werden bei TinyInvest</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit, Host zu werden?</p>
            <h3 className="text-xl font-black mb-3">Jetzt Standort kostenlos prüfen lassen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Schick uns eine kurze Beschreibung deines Grundstücks. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🏡 Als Host bewerben →
              </ModalButton>
              <Link href="/hosts" className="border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Hosts-Übersicht ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
