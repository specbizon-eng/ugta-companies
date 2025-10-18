import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";

function getIdFromUrl(req: Request) {
  try {
    const url = new URL(req.url);
    const parts = url.pathname.split("/").filter(Boolean);
    // /api/contracts/[id] → ["api","contracts","<id>"]
    return parts[2] || null;
  } catch {
    return null;
  }
}

export async function PATCH(req: Request) {
  const me = await getUserFromCookie();
  if (!me || (me.role !== "STAFF" && me.role !== "ADMIN")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const id = getIdFromUrl(req);
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const data = await req.json();
  const updated = await prisma.contract.update({
    where: { id },
    data,
  });

  return NextResponse.json(updated);
}
