import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_COOKIE } from "@/constants/auth";
import { routing } from "@/i18n/routing";
import { UserRole } from "@/types/enums/auth";

const handleI18nRouting = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(AUTH_COOKIE.TOKEN)?.value;
    const role = request.cookies.get(AUTH_COOKIE.ROLE)?.value;

    if (!token) {
      const loginUrl = new URL("/vi/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (role !== UserRole.ADMIN) {
      return NextResponse.redirect(new URL("/vi", request.url));
    }

    return NextResponse.next();
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/admin/:path*"],
};
