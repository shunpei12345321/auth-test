import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
	interface JWT {
		sessionExpires: number;
	}
}
// ここは追記

declare module "next-auth" {
	interface Session {
		user: {
			/** The user's postal address. */
			id: string;
			accessToken: string;
			refreshToken: string;
			accessTokenExpires: string;
			sessionExpires: number;
		} & DefaultSession["user"];
	}
}
