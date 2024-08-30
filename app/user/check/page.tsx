"use client";

import { fetcher } from "@/app/_utils/fetcher";
import useSWR from "swr";

import type { UserWithRoleDepartment } from "@/app/_repositories/User";
import UserList from "@/app/user/_components/user-list";
// user list からインポート　　view user

export default function UserPage() {
	const { data: users } = useSWR<UserWithRoleDepartment[]>(
		"/api/user/",
		fetcher
	);

	if (!users) return;

	return (
		<>
			<UserList users={users} />
		</>
	);
}

//8.9pull した後だけでnpm install だけで動くかチェック
//
