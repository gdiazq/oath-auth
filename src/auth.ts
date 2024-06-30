import NextAuth, { type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import { getUserbyId } from "@/data/user"
import { prisma } from "@/lib/prisma"
import { UserRole } from "@prisma/client"

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/signin",
    signOut: "/",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }
  },
  callbacks: {
    async signIn({ user, account}) {
      if (!user.id) {
        throw new Error("User ID is missing");
      }
      if (account?.provider !== "credentials") {
        return true;
      }
      const existingUser = await getUserbyId(user.id);
      if (!existingUser?.emailVerified) {
        return false;
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }
      const existingUser = await getUserbyId(token.sub)
      if (!existingUser) {
        return token
      }
      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role
      return token;
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig
})