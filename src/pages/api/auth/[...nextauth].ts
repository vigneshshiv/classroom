/**
 * Next Auth
 */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'providers/prisma';
// Application
import { ROUTES } from 'shared/constants';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const response = await fetch(ROUTES.API.AUTH_SERVICE, {
          headers: { 'Content-type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ email })
        });
        return response as any;
      }
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
  },
  // Enable debug messages in the console if you are having problems
  debug: false,
};

export default NextAuth(authOptions);
