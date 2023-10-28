import { PrismaClient } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        name: { label: "name", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Record<"name" | "email" | "password", string> | undefined
      ) {
        const { email, password } = credentials || {};
        if (!email || !password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (user && (await bcrypt.compare(password, user.passwordHash))) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
