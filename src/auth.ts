import Credentials from "next-auth/providers/credentials"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import NextAuth, { User } from "next-auth"
import { loginApi } from "./services/auth.service"
import { LoginRequest } from "./types/interfaces/auth"


interface IUserResponse extends User {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
    }
  }

}

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
        let user = null

        // // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)

        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        try {
          const { usernameOrEmail, password } = credentials;
          const formValues = { usernameOrEmail, password }
          const userResponse = await loginApi(formValues as LoginRequest)

          user = { ...userResponse };
          return user as IUserResponse;

        } catch (error) {
          console.error("authorize error", error)
  
        }

      },
    }),
  ],
})



