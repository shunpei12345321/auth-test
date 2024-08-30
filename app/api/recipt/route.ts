import { prisma } from "@/app/_utils/prismaSingleton";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamaic";

export async function GET() {
	const roles = await prisma.user.findMany();
	return NextResponse.json(roles, { status: 200 });
}
