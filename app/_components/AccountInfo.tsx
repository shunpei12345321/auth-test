"use client";

import React from "react";
import Button from "@mui/material/Button";

import { useSession, signIn, signOut } from "next-auth/react";
import PersonIcon from "@mui/icons-material/Person";

const AccountInfo = () => {
	const { data: session, status } = useSession();
	return (
		<>
			{status === "authenticated" && (
				<>
					{/* <PersonIcon className="ml-5xl" /> */}
					{/* ここが人型アイコンがある場所 */}
					<span>Signed in as {session?.user?.name}</span>
					<Button
						className="ml-3"
						onClick={() => signOut()}
						variant="contained"
						color="secondary">
						Sign out
					</Button>
				</>
			)}
			{status !== "authenticated" && (
				<Button onClick={() => signIn()} variant="contained" color="secondary">
					Sign in
				</Button>
			)}
		</>
	);
};

export default AccountInfo;
