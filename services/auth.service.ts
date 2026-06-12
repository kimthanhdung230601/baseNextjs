import { AUTH_API } from "@/constants/api";
import { MOCK_ACCOUNTS } from "@/constants/auth";
import configs from "@/constants/config";
import { sendPost } from "@/lib/api/axios";
import { UserRole } from "@/types/enums/auth";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/interfaces/auth";

const MOCK_USERS = [
  {
    id: "1",
    username: MOCK_ACCOUNTS.ADMIN.username,
    email: "admin@example.com",
    password: MOCK_ACCOUNTS.ADMIN.password,
    role: UserRole.ADMIN,
  },
  {
    id: "2",
    username: MOCK_ACCOUNTS.USER.username,
    email: "user@example.com",
    password: MOCK_ACCOUNTS.USER.password,
    role: UserRole.USER,
  },
];

const hasApiDomain =
  Boolean(configs.API_DOMAIN) && configs.API_DOMAIN !== "undefined";

function delay(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mockLoginApi(payload: LoginRequest): Promise<LoginResponse> {
  await delay();

  const user = MOCK_USERS.find(
    (account) =>
      (account.username === payload.usernameOrEmail ||
        account.email === payload.usernameOrEmail) &&
      account.password === payload.password
  );

  if (!user) {
    throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
  }

  return {
    success: true,
    message: "Đăng nhập thành công",
    data: {
      accessToken: `mock-access-token-${user.role}`,
      refreshToken: `mock-refresh-token-${user.role}`,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
  };
}

async function mockRegisterApi(
  payload: RegisterRequest
): Promise<RegisterResponse> {
  await delay();

  const isExisted = MOCK_USERS.some(
    (account) =>
      account.username === payload.username || account.email === payload.email
  );

  if (isExisted) {
    throw new Error("Tên đăng nhập hoặc email đã tồn tại");
  }

  return {
    success: true,
    message: "Đăng ký thành công",
    data: {
      id: String(MOCK_USERS.length + 1),
      username: payload.username,
      email: payload.email,
    },
  };
}

export async function loginApi(payload: LoginRequest): Promise<LoginResponse> {
  if (hasApiDomain) {
    return sendPost<LoginResponse>(AUTH_API.LOGIN, payload);
  }

  return mockLoginApi(payload);
}

export async function registerApi(
  payload: RegisterRequest
): Promise<RegisterResponse> {
  if (hasApiDomain) {
    return sendPost<RegisterResponse>(AUTH_API.REGISTER, payload);
  }

  return mockRegisterApi(payload);
}

/** Endpoint tham chiếu khi tích hợp API thật */
export const AUTH_ENDPOINTS = AUTH_API;
