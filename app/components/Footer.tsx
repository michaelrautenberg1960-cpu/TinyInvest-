import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex mb-4">
            <Image
                src="/logo1.png"
                alt="TinyInvest Logo"
                width={500}
                height={150}
                className="h-50 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hochwertige, moderne Tiny Houses – als Steuer-Investment, Rendite-Objekt oder Traumhaus auf Raten. Mobil. Zukunftssicher. Sicher.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
              <li>
                <Link href="/partner" className="text-green-400 hover:text-green-300 text-sm transition-colors font-semibold">
                  Vertriebspartner werden
                </Link>
              </li>
              <li>
                <Link href="/hosts" className="text-amber-400 hover:text-amber-300 text-sm transition-colors font-semibold">
                  Für Hosts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Investment</h4>
            <ul className="space-y-2">
              <li><Link href="/marktplatz" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Marktplatz</Link></li>
              <li><Link href="/konfigurator" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Konfigurator</Link></li>
              <li><Link href="/renditemodell" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Renditemodell</Link></li>
              <li><Link href="/steuervorteil" className="text-gray-400 hover:text-green-400 text-sm transition-colors">§7g Steuervorteil</Link></li>
              <li><Link href="/so-funktioniert-es" className="text-gray-400 hover:text-green-400 text-sm transition-colors">So funktioniert es</Link></li>
              <li><Link href="/galerie" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Galerie</Link></li>
              <li><Link href="/senioren" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Für Senioren</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Wissen & Hosts</h4>
            <ul className="space-y-2">
              <li><Link href="/wissen/kapitalanlage" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Kapitalanlage-Guide</Link></li>
              <li><Link href="/wissen/7g-tiny-house-investment" className="text-gray-400 hover:text-green-400 text-sm transition-colors">§7g Leitfaden</Link></li>
              <li><Link href="/wissen/iab-tiny-house" className="text-gray-400 hover:text-green-400 text-sm transition-colors">IAB Tiny House</Link></li>
              <li><Link href="/wissen/afa-abschreibung" className="text-gray-400 hover:text-green-400 text-sm transition-colors">§7g AfA erklärt</Link></li>
              <li><Link href="/wissen/tiny-house-steuern-sparen" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Steuern sparen</Link></li>
              <li><Link href="/wissen/pv-anlage-als-kapitalanlage" className="text-gray-400 hover:text-green-400 text-sm transition-colors">PV vs. Tiny House</Link></li>
              <li><Link href="/wissen/tiny-house-als-rendite" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Rendite & Cashflow</Link></li>
              <li><Link href="/wissen/steuerberater-finden" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Steuerberater finden</Link></li>
              <li><Link href="/wissen" className="text-green-400 hover:text-green-300 text-sm transition-colors font-semibold">Alle Guides →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Datenschutz</Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-green-400 text-sm transition-colors">AGB</Link>
              </li>
              <li>
                <Link href="/datenschutz#risikohinweise" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Risikohinweise</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <a href="mailto:info@tinyhouse.investments" className="hover:text-green-400 transition-colors">info@tinyhouse.investments</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="tel:+4915679670322" className="hover:text-green-400 transition-colors">+49 156 7967 0322</a>
              </li>
              <li>
                <span>Marie-Curie-Straße 1, 63457 Hanau</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TinyInvest. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 text-xs">
              <Link href="/impressum" className="text-gray-600 hover:text-green-400 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-gray-600 hover:text-green-400 transition-colors">Datenschutz</Link>
              <Link href="/agb" className="text-gray-600 hover:text-green-400 transition-colors">AGB</Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center sm:text-left">
            Investitionen in Wirtschaftsgüter sind mit Risiken verbunden. Steuerliche Vorteile hängen von den individuellen Voraussetzungen ab. Bitte berücksichtigen Sie unsere Risikohinweise.
          </p>
        </div>
      </div>
    </footer>
  );
}
