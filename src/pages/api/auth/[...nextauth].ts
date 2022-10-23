/**
 * Next Auth
 */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'providers/prisma';

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
        const response = await fetch('http://localhost:3000/api/authService', {
          headers: { 'Content-type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ email })
        });
        return response as any;
      }
    })
  ],

  // It is used to sign cookies and to sign and encrypt JSON Web Tokens
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt'
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'`
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.JWT_SECRET
  },

  // Authentication adapter
  adapter: PrismaAdapter(prisma),

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      console.log(`Token - ${JSON.stringify(token)}`);
      console.log(`User - ${JSON.stringify(user)}`);
      console.log(`Account - ${JSON.stringify(account)}`);
      console.log(`Is it called ? - ${token.accessToken}`);
      return token;
    }, 
    async session({ session, user, token}) {
      console.log(`Does it called on jwt session?`);
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
