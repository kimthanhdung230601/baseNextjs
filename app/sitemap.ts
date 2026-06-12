import type { MetadataRoute } from "next";

import { SEO_ROUTES, SITE_URL } from "@/constants/seo";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = SEO_ROUTES.filter((route) => !route.noIndex);

  return routing.locales.flatMap((locale) =>
    publicRoutes.map((route) => ({
      url: route.path
        ? `${SITE_URL}/${locale}${route.path}`
        : `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternateLocale) => [
            alternateLocale,
            route.path
              ? `${SITE_URL}/${alternateLocale}${route.path}`
              : `${SITE_URL}/${alternateLocale}`,
          ]),
        ),
      },
    })),
  );
}
