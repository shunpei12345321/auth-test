"use client";
import { InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { Infer } from "next/dist/compiled/superstruct";

getCsrfToken;

// export default function SignIn( {
//     getCsrfToken,
// }:InferGetServerSidePropsType<typeof getServerSideProps>){
//     return ()
// }
