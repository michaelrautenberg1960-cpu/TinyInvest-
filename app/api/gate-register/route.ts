import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, listing_id } = await req.json();
    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }
    await getAdminClient().from("leads").insert([{
      vorname:   name,
      nachname:  null,
      email,
      telefon:   phone,
      interesse: `Projekt-Detail Freischaltung${listing_id ? ` #${listing_id}` : ""}`,
      budget:    null,
      status:    "neu",
    }]);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
