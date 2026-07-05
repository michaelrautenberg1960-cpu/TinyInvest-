import { supabase } from "../lib/supabase";
import ModelleCarousel, { Listing } from "./ModelleCarousel";

export default async function Modelle() {
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  const listings: Listing[] = (data ?? []).map((row) => ({
    id:           row.id,
    asset_id:     row.asset_id,
    img:          row.img,
    category:     row.category,
    title:        row.title,
    location:     row.location,
    description:  row.description,
    preis:        row.preis,
    irr:          row.irr,
    npv:          row.npv,
    occ:          row.occ,
    occ_note:     row.occ_note,
    reserved:     row.reserved,
    total:        row.total,
    status:       row.status,
    status_label: row.status_label,
    badge:        row.badge,
    badge_color:  row.badge_color,
    sort_order:   row.sort_order,
  }));

  if (error) {
    console.error("[Modelle] Supabase error:", error.message);
  }

  return (
    <section id="marktplatz" className="py-20 bg-platform border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">
            Projekte 2026 – Jetzt investieren
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Marktplatz
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Projekte, in die du investieren kannst – mit Status, verfügbaren Einheiten und IRR. Jedes Asset ist §7g-fähig und wird durch{" "}
            <a
              href="https://www.tinyhouse.investments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold hover:underline"
            >
              lokale Partner
            </a>{" "}
            bewirtschaftet.
          </p>
        </div>

        <ModelleCarousel listings={listings} />
      </div>
    </section>
  );
}
