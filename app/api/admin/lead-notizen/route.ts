import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";

export async function GET(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const lead_id = req.nextUrl.searchParams.get("lead_id");
  if (!lead_id) return NextResponse.json({ error: "lead_id fehlt" }, { status: 400 });

  const { data, error } = await getAdminClient()
    .from("lead_notizen")
    .select("*")
    .eq("lead_id", lead_id)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lead_id, notiz } = await req.json();
  if (!lead_id || !notiz?.trim()) {
    return NextResponse.json({ error: "lead_id und notiz erforderlich" }, { status: 400 });
  }

  const { data, error } = await getAdminClient()
    .from("lead_notizen")
    .insert({ lead_id, notiz: notiz.trim() })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id fehlt" }, { status: 400 });

  const { error } = await getAdminClient()
    .from("lead_notizen")
    .delete()
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
