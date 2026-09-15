import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";

const BLOCKED_OWNERS = ["us", "customer", "none"];

export async function GET(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await getAdminClient()
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const {
    id,
    status,
    assigned_to,
    blocked_on_owner,
    blocked_on_note,
    next_followup_at,
    last_contacted_at,
  } = await req.json();

  const patch: Record<string, unknown> = {};
  if (status !== undefined) patch.status = status;
  if (assigned_to !== undefined) patch.assigned_to = assigned_to;

  if (blocked_on_owner !== undefined) {
    if (blocked_on_owner !== null && !BLOCKED_OWNERS.includes(blocked_on_owner)) {
      return NextResponse.json(
        { error: `blocked_on_owner muss einer von ${BLOCKED_OWNERS.join(", ")} sein` },
        { status: 400 }
      );
    }
    patch.blocked_on_owner = blocked_on_owner;
  }

  if (blocked_on_note !== undefined) {
    patch.blocked_on_note =
      typeof blocked_on_note === "string" && blocked_on_note.trim() ? blocked_on_note.trim() : null;
  }

  if (next_followup_at !== undefined) {
    if (next_followup_at !== null && !/^\d{4}-\d{2}-\d{2}$/.test(String(next_followup_at))) {
      return NextResponse.json(
        { error: "next_followup_at muss null oder YYYY-MM-DD sein" },
        { status: 400 }
      );
    }
    patch.next_followup_at = next_followup_at;
  }

  if (last_contacted_at !== undefined) patch.last_contacted_at = last_contacted_at;

  const { error } = await getAdminClient()
    .from("leads")
    .update(patch)
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID fehlt" }, { status: 400 });
  }

  const { error } = await getAdminClient()
    .from("leads")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
