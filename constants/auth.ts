export const AUTH_COOKIE = {
  TOKEN: "token",
  REFRESH_TOKEN: "refreshToken",
  ROLE: "userRole",
} as const;

/** Tài khoản mock để test — xóa khi có API thật */
export const MOCK_ACCOUNTS = {
  ADMIN: { username: "admin", password: "admin123" },
  USER: { username: "user", password: "user123" },
} as const;
