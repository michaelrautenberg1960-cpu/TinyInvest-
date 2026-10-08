"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { getConsent, setConsent, useConsent } from "../lib/consent";

// Zeigt Inhalte von Drittanbietern (Karten, Videos) erst nach Einwilligung in die Kategorie "Funktional".
export default function ConsentGate({
  service,
  className = "rounded-2xl border border-gray-200",
  children,
}: {
  service: string;
  className?: string;
  children: ReactNode;
}) {
  const granted = useConsent("funktional");
  const [once, setOnce] = useState(false);

  if (granted || once) return <>{children}</>;
  if (granted === null) return <div className={`bg-gray-100 ${className}`} />;

  const allowAlways = () => setConsent({ statistik: getConsent()?.statistik ?? false, funktional: true });

  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-3 bg-gray-100 p-6 ${className}`}
    >
      <p className="text-sm font-semibold text-gray-800">Inhalt von {service}</p>
      <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
        Hier wird ein Inhalt von {service} geladen. Dabei werden Daten (u. a. Ihre IP-Adresse) an den Anbieter
        übermittelt. Mehr in unserer{" "}
        <Link href="/datenschutz" className="underline hover:text-gray-700">Datenschutzerklärung</Link>.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setOnce(true)}
          className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          Einmal laden
        </button>
        <button
          type="button"
          onClick={allowAlways}
          className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          Immer erlauben
        </button>
      </div>
    </div>
  );
}
