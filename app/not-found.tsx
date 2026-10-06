import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar variant="sub" />

      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-xl w-full text-center">
          <p className="text-[11px] text-green-700 font-bold uppercase tracking-widest mb-4">Fehler 404</p>
          <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tight">Seite nicht gefunden</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md mx-auto">
            Die Seite, die du suchst, existiert nicht oder wurde verschoben. Vielleicht findest du hier, was du brauchst.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/"
              className="bg-green-700 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all"
            >
              Zur Startseite →
            </Link>
            <Link
              href="/marktplatz"
              className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-7 py-3.5 rounded-full text-sm transition-all"
            >
              Marktplatz ansehen
            </Link>
            <Link
              href="/wissen"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-7 py-3.5 rounded-full text-sm transition-all"
            >
              Wissens-Hub
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            {[
              { href: "/steuervorteil", label: "§7g Steuervorteil" },
              { href: "/renditemodell", label: "Renditemodell" },
              { href: "/so-funktioniert-es", label: "So funktioniert es" },
              { href: "/rechner/iab", label: "IAB-Rechner" },
              { href: "/konfigurator", label: "Konfigurator" },
              { href: "/tiny-house-als-kapitalanlage", label: "Tiny House als Kapitalanlage" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl px-4 py-3 text-[13px] font-semibold text-gray-700 hover:text-green-700 transition-all"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
