"use client";
import { useEffect } from "react";
import { useModal } from "./ModalContext";
import { track } from "@/app/lib/track";

const STORAGE_KEY = "ti_exit_intent_shown";
const MIN_TIME_ON_PAGE_MS = 15000;

// Öffnet das Lead-Modal einmal pro Sitzung, wenn der Mauszeiger den Tab oben verlässt.
// Nur Desktop mit Maus; auf Touch-Geräten gibt es kein verlässliches Exit-Signal.
export default function ExitIntent() {
  const { isOpen, openModal } = useModal();

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const armedAt = Date.now() + MIN_TIME_ON_PAGE_MS;

    function onMouseOut(e: MouseEvent) {
      if (e.relatedTarget || e.clientY > 0) return;
      if (Date.now() < armedAt || isOpen || sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      track("exit_intent_shown");
      openModal();
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [isOpen, openModal]);

  // Hat der Besucher das Modal selbst geöffnet, nicht noch einmal per Exit-Intent zeigen
  useEffect(() => {
    if (isOpen) sessionStorage.setItem(STORAGE_KEY, "1");
  }, [isOpen]);

  return null;
}
