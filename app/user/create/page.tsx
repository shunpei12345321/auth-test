import UserForm from "@/app/user/_components/user-form";
import { DepartmentRepository } from "@/app/_repositories/Department";
import { RoleRepository } from "@/app/_repositories/Role";
import { UserRepository } from "@/app/_repositories/User";
import { getSession } from "next-auth/react";

export const dynamic = "force-dynamic";

export default async function UserCreate() {
	const session = await getSession();
	const userId = session?.user?.id;

	if (!userId) {
		throw new Error("User not found");
	}

	// ユーザーの情報を取得
	const user = await UserRepository.findUnique(userId);
	const roles = await RoleRepository.findMany();
	const departments = await DepartmentRepository.findMany();

	if (!user) {
		throw new Error("User not found");
	}

	return (
		<UserForm
			user={user} // ユーザーの情報をフォームに渡す
			departments={departments}
			roles={roles}
			onSuccessUrl="/user/"
		/>
	);
}
