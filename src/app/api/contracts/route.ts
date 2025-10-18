import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";

export async function PATCH(req: Request, ...rest: any[]) {
  // Next 15: другий аргумент краще не типізувати. Беремо контекст так:
  const context = rest?.[0] ?? {};
  const id = context?.params?.id as string | undefined;

  const me = await getUserFromCookie();
  if (!me || (me.role !== "STAFF" && me.role !== "ADMIN")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
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
