import type { SeoRouteConfig } from "@/types/interfaces/seo";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Mobifone";

export const SEO_ROUTES: SeoRouteConfig[] = [
  { path: "", namespace: "pages.home" },
  {
    path: "/business/telecommunications",
    namespace: "pages.telecommunications",
  },
  {
    path: "/business/information-technology",
    namespace: "pages.informationTechnology",
  },
  {
    path: "/business/transmission-broadband",
    namespace: "pages.transmissionBroadband",
  },
  { path: "/personal/public-services", namespace: "pages.publicServices" },
  {
    path: "/personal/public-services/subscriber-types",
    namespace: "pages.subscriberTypes",
  },
  {
    path: "/personal/public-services/packages",
    namespace: "pages.packages",
  },
  {
    path: "/personal/public-services/services",
    namespace: "pages.services",
  },
  {
    path: "/personal/customer-support",
    namespace: "pages.customerSupport",
  },
  {
    path: "/personal/customer-support/long-term-connection",
    namespace: "pages.longTermConnection",
  },
  { path: "/personal/customer-support/faq", namespace: "pages.faq" },
  { path: "/personal/promotions", namespace: "pages.promotions" },
  { path: "/personal/5g-mobifone", namespace: "pages.fiveGMobifone" },
  { path: "/auth/login", namespace: "auth.login", noIndex: true },
  { path: "/auth/register", namespace: "auth.register", noIndex: true },
];
