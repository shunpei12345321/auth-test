import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
	interface JWT {
		sessionExpres: number;
	}
}
// ここは追記

declare module "next-auth" {
	interface Seccionn {
		user: {
			id: string;
			accessToken: string;
			refreshToken: string;
			accessTokenExpires: string;
			sesionExpires: number;
		} & DefaultSession["user"];
	}
}
