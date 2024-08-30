import { prisma } from "@/app/_utils/prismaSingleton";
import type { Prisma } from "@prisma/client";

export type ReciptWithFromTo = Exclude<
	Prisma.PromiseReturnType<typeof ReciptRepository.findUnique>,
	null
>;

export namespace ReciptRepository {
	export async function findMany() {
		return await prisma.thanksCard.findMany({
			include: {
				from: true,
				to: true,
			},
		});
	}

	export async function findUnique(id: string) {
		return await prisma.thanksCard.findUnique({
			include: {
				from: true,
				to: true,
			},
			where: {
				id: id,
			},
		});
	}
}

// length で一件だけ取得
