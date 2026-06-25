import type { SeoRouteConfig } from "@/types/interfaces/seo";
import { ROUTES, ROUTE_PATHS } from "./route";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Mobifone";

export const SEO_ROUTES: SeoRouteConfig[] = [
  {
    path: "",
    namespace: "pages.home",
  },

  {
    path: ROUTES.BUSINESS.TELECOMMUNICATIONS,
    namespace: "pages.telecommunications",
  },
  {
    path: ROUTES.BUSINESS.INFORMATION_TECHNOLOGY,
    namespace: "pages.informationTechnology",
  },
  {
    path: ROUTES.BUSINESS.TRANSMISSION_BROADBAND,
    namespace: "pages.transmissionBroadband",
  },

  // {
  //   path: "/dich-vu-di-dong",
  //   namespace: "pages.publicServices",
  // },
  {
    path: ROUTE_PATHS.LOAI_THUE_BAO,
    namespace: "pages.subscriberTypes",
  },
  {
    path: ROUTE_PATHS.GOI_CUOC,
    namespace: "pages.packages",
  },
  {
    path: ROUTE_PATHS.DICH_VU,
    namespace: "pages.services",
  },

  {
    path: ROUTE_PATHS.HO_TRO_KHACH_HANG,
    namespace: "pages.customerSupport",
  },
  {
    path: ROUTE_PATHS.KET_NOI_DAI_LAU,
    namespace: "pages.longTermConnection",
  },
  {
    path: ROUTE_PATHS.CAU_HOI_THUONG_GAP,
    namespace: "pages.faq",
  },

  {
    path: ROUTE_PATHS.KHUYEN_MAI,
    namespace: "pages.promotions",
  },
  {
    path: ROUTE_PATHS.FIVE_G_MOBIFONE_PAGE,
    namespace: "pages.fiveGMobifone",
  },
];
