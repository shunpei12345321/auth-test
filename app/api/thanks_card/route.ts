import { ThanksCardRepository } from "@/app/_repositories/ThanksCard";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamaic";

export async function GET() {
	const thanksCard = await ThanksCardRepository.findMany();
	return NextResponse.json(thanksCard);
}
