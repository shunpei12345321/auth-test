"use client";

//import { useEffect, useState } from 'react'

import useSWR from "swr";
import type { SWRConfiguration } from "swr";

import UserList from "@/app/user/_components/user-list";
import type { UserWithRoleDepartment } from "@/app/_repositories/User";
import { fetcher } from "@/app/_utils/fetcher";

export default function RevalidateData() {
	return (
		<main>
			<div>
				<p>Revalidate Data</p>
			</div>
		</main>
	);
}
