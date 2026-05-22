"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useModal } from "./ModalContext";
import { getBrowserClient } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// ── Nav structure ─────────────────────────────────────────────────────────────
const NAV_GROUPS = [
  {
    label: "Investieren",
    items: [
      { label: "So funktioniert's", href: "/so-funktioniert-es", desc: "Der vollständige Investor-Prozess" },
      { label: "Konfigurator", href: "/konfigurator", desc: "Haus konfigurieren & Angebot erhalten" },
      { label: "Für Hosts", href: "/hosts", desc: "Stellplatz vermieten & Einnahmen erzielen" },
      { label: "Für Senioren", href: "/senioren", desc: "Altersvorsorge & Sachwert für Rentner" },
      { label: "Für Ärzte", href: "/aerzte", desc: "§7g IAB & Steuern sparen als Arzt" },
    ],
  },
  {
    label: "Steuern & Rendite",
    items: [
      { label: "§7g Steuervorteile", href: "/steuervorteil", desc: "IAB, Sonder-AfA und degressive AfA" },
      { label: "Renditemodell", href: "/renditemodell", desc: "12–14 % IRR p.a. transparent erklärt" },
    ],
  },
  {
    label: "Wissen",
    items: [
      { label: "Wissens-Hub", href: "/wissen", desc: "Alle Guides, Glossar & Artikel" },
      { label: "Tiny House als Kapitalanlage", href: "/tiny-house-als-kapitalanlage", desc: "Der komplette Guide 2026" },
      { label: "Partner werden", href: "/partner", desc: "Als Vertriebspartner provisionieren" },
    ],
  },
];

// ── Dropdown (desktop) ────────────────────────────────────────────────────────
function NavDropdown({
  group,
  isIce,
}: {
  group: (typeof NAV_GROUPS)[0];
  isIce: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-[13px] font-medium transition-colors duration-300 ${
          isIce ? "text-white/75 hover:text-white" : "text-gray-500 hover:text-green-700"
        }`}
      >
        {group.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m2 4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45" />
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex flex-col px-5 py-3 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[13px] font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                {item.label}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Navbar({ variant = "hero" }: { variant?: "hero" | "sub" }) {
  const { openModal } = useModal();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(variant === "sub");
  const [investorLoggedIn, setInvestorLoggedIn] = useState(false);
  // which mobile accordion group is open
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  useEffect(() => {
    const supabase = getBrowserClient();
    supabase.auth.getSession().then(({ data }) => {
      setInvestorLoggedIn(!!data.session?.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setInvestorLoggedIn(!!session?.user);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleInvestorClick = useCallback(() => {
    router.push(investorLoggedIn ? "/investor" : "/investor/login");
  }, [router, investorLoggedIn]);

  useEffect(() => {
    if (variant === "sub") return;
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isIce = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isIce
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20"
          : "bg-white/97 backdrop-blur-md border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="TinyInvest Logo"
              width={500}
              height={150}
              className={`h-50 w-auto transition-all duration-500 ${isIce ? "brightness-0 invert" : "brightness-0"}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">

            {/* Marktplatz — direct (most important) */}
            <Link
              href="/marktplatz"
              className={`text-[13px] font-semibold transition-colors duration-300 ${
                isIce ? "text-white/90 hover:text-white" : "text-green-700 hover:text-green-800"
              }`}
            >
              Marktplatz
            </Link>

            {/* Dropdown groups */}
            {NAV_GROUPS.map((group) => (
              <NavDropdown key={group.label} group={group} isIce={isIce} />
            ))}
          </nav>

          {/* Right side: Login + CTA + Mobile Burger */}
          <div className="flex items-center gap-3">
            {/* Investor Login — ghost, desktop only */}
            <button
              type="button"
              onClick={handleInvestorClick}
              title={investorLoggedIn ? "Zum Investor-Dashboard" : "Investor-Portal Login"}
              className={`hidden lg:flex px-4 py-2 rounded-lg text-[12px] font-semibold border transition-all duration-300 ${
                isIce
                  ? "border-white/30 text-white/70 hover:border-white/60 hover:text-white"
                  : "border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700 bg-white"
              }`}
            >
              {investorLoggedIn ? "📊 Dashboard" : "🔐 Login"}
            </button>

            {/* Primary CTA — always visible on desktop, visible on mobile too */}
            <button
              type="button"
              onClick={openModal}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap ${
                isIce
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm"
                  : "bg-green-700 text-white hover:bg-green-800 shadow-sm"
              }`}
            >
              <span className="hidden sm:inline">Beratung anfragen →</span>
              <span className="sm:hidden">Anfragen →</span>
            </button>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü öffnen"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isIce ? "text-white hover:bg-white/20" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen border-t" : "max-h-0"
        } ${isIce ? "border-white/20" : "border-gray-100"}`}
      >
        <nav className={`px-4 py-4 flex flex-col gap-1 ${isIce ? "bg-black/60 backdrop-blur-xl" : "bg-white"}`}>

          {/* Marktplatz direct */}
          <Link
            href="/marktplatz"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-semibold py-2.5 px-1 transition-colors ${
              isIce ? "text-green-300 hover:text-green-200" : "text-green-700 hover:text-green-800"
            }`}
          >
            Marktplatz
          </Link>

          <div className={`h-px my-1 ${isIce ? "bg-white/10" : "bg-gray-100"}`} />

          {/* Dropdown groups as accordions */}
          {NAV_GROUPS.map((group, idx) => (
            <div key={group.label}>
              <button
                type="button"
                onClick={() => setMobileOpen(mobileOpen === idx ? null : idx)}
                className={`w-full flex items-center justify-between text-sm font-semibold py-2.5 px-1 transition-colors ${
                  isIce ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-green-700"
                }`}
              >
                {group.label}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileOpen === idx ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m2 4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {mobileOpen === idx && (
                <div className={`pl-4 pb-1 flex flex-col gap-0.5 ${isIce ? "border-l border-white/20" : "border-l border-gray-100"}`}>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                      className={`text-[13px] py-2 transition-colors ${
                        isIce ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-green-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className={`h-px my-1 ${isIce ? "bg-white/10" : "bg-gray-100"}`} />

          {/* Investor Login */}
          <button
            type="button"
            onClick={() => { handleInvestorClick(); setMenuOpen(false); }}
            className={`text-sm font-medium py-2 px-1 transition-colors text-left ${
              isIce ? "text-white/50 hover:text-white/80" : "text-gray-400 hover:text-green-700"
            }`}
          >
            {investorLoggedIn ? "📊 Mein Dashboard" : "🔐 Investor Login"}
          </button>
        </nav>
      </div>
    </header>
  );
}
