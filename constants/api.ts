export const MOCK_API_BASE =
  "https://64380678894c9029e8cca33d.mockapi.io/api/products";

/** Ghép base URL MockAPI với path — dùng với sendGet/sendPost từ lib/api/axios */
export const mockApiUrl = (path: string) => `${MOCK_API_BASE}${path}`;

export const AUTH_API = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  REFRESH_TOKEN: "/auth/refresh-token",
  PROFILE: "/auth/profile",
} as const;

export const CUSTOMER_API = {
  LIST: "/example",
  DETAIL: (id: string) => `/example/${id}`,
} as const;
