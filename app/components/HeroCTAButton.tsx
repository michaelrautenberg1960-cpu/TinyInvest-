"use client";
import { useModal } from "./ModalContext";

export default function HeroCTAButton() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={openModal}
        className="bg-green-500 hover:bg-green-400 text-white font-black px-7 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-green-900/40"
      >
        Kostenlose Beratung anfragen →
      </button>
      <a
        href="/marktplatz"
        className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all backdrop-blur-sm"
      >
        🏡 Marktplatz ansehen
      </a>
    </div>
  );
}
