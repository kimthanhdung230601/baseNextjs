import type { UserRole } from "@/types/enums/auth";
import type { BaseApiResponse } from "@/types/interfaces/common";

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export type LoginResponse = BaseApiResponse<LoginResponseData>;

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponseData {
  id: string;
  username: string;
  email: string;
}

export type RegisterResponse = BaseApiResponse<RegisterResponseData>;
