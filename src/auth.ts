import Credentials from "next-auth/providers/credentials"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import NextAuth, { User } from "next-auth"
import { loginApi } from "./services/auth.service"
import { LoginRequest } from "./types/interfaces/auth"


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },

    }),

    Facebook,

    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        usernameOrEmail: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)

        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        const { usernameOrEmail, password } = credentials;
        const formValues = { usernameOrEmail, password }
        const userResponse = await loginApi(formValues as LoginRequest)

        user = {
          email: userResponse.data?.user.email,
          id: userResponse.data?.user.id,
          image: userResponse.data?.user.username,
          name: userResponse.data?.user.username,

          accessToken: userResponse.data?.accessToken,
          refreshToken: userResponse.data?.refreshToken,
          role: userResponse.data?.user.role,

        };
        return user;



      },
    }),

  ],
  callbacks: {
    async jwt({ token, user, account, profile  }) {
      if (user && account?.provider === "credentials") {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      if (account?.provider === "google") {
        // xem log trên server
        console.log(profile);

        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      // refresh token ở đây

      // const newToken = await refreshToken(token.refreshToken)
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  }
})



