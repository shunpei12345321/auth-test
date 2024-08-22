import { prisma } from "../_utils/prismaSingleton";
import type { Prisma } from "@prisma/client";
import type { User as _User } from "@prisma/client";
import { userAgent } from "next/server";

prisma;

export type User = _User;

export type UserWithRoleDepartment = Exclude<
	Prisma.PromiseReturnType<typeof UserRepository.findUniqWithRoleDepartment>,
	null
>;

export namespace UserRepository {
	export async function findMany() {
		return await prisma.user.findMany({
			include: {
				role: true,
				department: true,
			},
		});
	}

	export async function findUnique(id: string) {
		return await prisma.user.findUnique({
			where: {
				id: id,
			},
		});
	}

	export async function findUniqWithRoleDepartment(id: string) {
		return await prisma.user.findUnique({
			include: {
				role: true,
				department: true,
			},
			where: {
				id: id,
			},
		});
	}
	export async function create(user: User) {
		return await prisma.user.create({
			data: user,
		});
	}
}
