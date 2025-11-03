import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import {
  loginByGoogleRequest,
  loginRequest,
} from '../../../../hooks/authentications/request';
import { TLoginData } from '../../../../types';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
  },
  session: {
    maxAge: 3 * 24 * 60 * 60, // 3 * 24 hour * 60 minutes * 60 seconds
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req): Promise<TLoginData> {
        try {
          const userAgent = req?.headers?.['user-agent'] || 'Unknown User Agent';

          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
            user_agent: userAgent,
          });

          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && account) {
        try {
          const { data } = await loginByGoogleRequest({
            credential: account.id_token as string,
          });

          account.user_id = data?.user_id;
          account.access_token = data?.token?.access_token;
          account.refresh_token = data?.token?.refresh_token;
        } catch (error: any) {
          return `/auth/login?error=${error.response.data?.message}`;
        }
      }

      if (user) return true;
      return false;
    },

    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === 'google' && account) {
        token.user_id = account.user_id;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      } else if (account?.provider === 'login' && currentUser) {
        token.user_id = currentUser.data.user_id;
        token.access_token = currentUser.data.access_token;
        token.refresh_token = currentUser.data.refresh_token;
        currentUser.name = user.name;
        currentUser.email = user.email;
      }
      
      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const jwt_token = {
        access_token: token?.access_token,
        refresh_token: token?.refresh_token,
      };
      session = {
        expires: token?.expires as string,
        user: {
          id: (token as any).data?.user_id || token?.user_id || "w",
          name: token.name,
          email: token.email,
          token: jwt_token,
        },
      };
      return session;
    },
  },
};
