/**
 * Next Auth
 */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
// Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'providers/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  // TODO: Change session attributes
  // Authentication adapter
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.name = user.id;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/`;
    }
  }
};

export default NextAuth(authOptions);
