/**
 * Next Auth
 */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'providers/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  // Authentication adapter
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    }, 
    async session({ session, user, token}) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) {
        return `${baseUrl}/`;
      } else if (Object.is(new URL(url).origin, baseUrl)) {
        // Allows callback URLs on the same origin
        return url;
      }
      return baseUrl;
    }
  }
};

export default NextAuth(authOptions);
