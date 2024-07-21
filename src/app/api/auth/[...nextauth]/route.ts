import { clientPromise } from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string,
            name: string,
        }
    }
}

export const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise() as Promise<MongoClient>) as Adapter,
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
    ],
    callbacks: {
        async session({ session, user }) {

            session.user.id = user.id
            return Promise.resolve(session);
        }
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };