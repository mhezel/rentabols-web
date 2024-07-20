import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {

    pages: {
        signIn: '/auth/sign-in'
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID!,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET!
        })
    ]
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };