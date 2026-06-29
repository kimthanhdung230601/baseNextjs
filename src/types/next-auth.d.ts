import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: string;
    accessToken: string;
    refreshToken: string;
  }

  interface Session extends DefaultSession {
    accessToken: string;
    refreshToken: string;
    user: DefaultSession["user"] & {
      id: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    accessToken: string;
    refreshToken: string;
  }
}