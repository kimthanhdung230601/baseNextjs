import type { MetadataRoute } from "next";

import { ROUTES } from "@/constants/route";
import { SITE_URL } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [ROUTES.SYSTEM.ADMIN_ROOT, `/*${ROUTES.AUTH.PREFIX}`],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
