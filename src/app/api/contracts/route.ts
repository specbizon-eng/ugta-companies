import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";

// ⬇⬇⬇ ГОЛОВНЕ: не типізуємо деструктуризацію другого аргументу
export async function PATCH(req: Request, context: any) {
  const me = await getUserFromCookie();
  if (!me || (me.role !== "STAFF" && me.role !== "ADMIN")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = (context?.params || {}) as { id: string };
  const data = await req.json();

  const updated = await prisma.contract.update({
    where: { id },
    data,
  });

  return NextResponse.json(updated);
}
