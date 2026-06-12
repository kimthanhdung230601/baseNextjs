import Cookies from "js-cookie";

import { AUTH_COOKIE } from "@/constants/auth";
import type { LoginResponseData } from "@/types/interfaces/auth";

export function setAuthCookies(data: LoginResponseData) {
  Cookies.set(AUTH_COOKIE.TOKEN, data.accessToken, { expires: 7 });
  Cookies.set(AUTH_COOKIE.REFRESH_TOKEN, data.refreshToken, { expires: 30 });
  Cookies.set(AUTH_COOKIE.ROLE, data.user.role, { expires: 7 });
}

export function clearAuthCookies() {
  Cookies.remove(AUTH_COOKIE.TOKEN);
  Cookies.remove(AUTH_COOKIE.REFRESH_TOKEN);
  Cookies.remove(AUTH_COOKIE.ROLE);
}
