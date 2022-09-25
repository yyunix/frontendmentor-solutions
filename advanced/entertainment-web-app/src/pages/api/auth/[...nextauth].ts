import { verifyPassword } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const client = await clientPromise;
        const db = client.db("entertainment-app");

        const user = await db.collection("users").findOne({ email });

        if (!user) {
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("Could not log you in");
        }

        return { email: user.email };
      },
    }),
  ],
});
