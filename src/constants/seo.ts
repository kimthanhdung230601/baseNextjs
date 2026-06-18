import type { SeoRouteConfig } from "@/types/interfaces/seo";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Mobifone";

export const SEO_ROUTES: SeoRouteConfig[] = [
  {
    path: "",
    namespace: "pages.home",
  },

  {
    path: "/doanh-nghiep/vien-thong",
    namespace: "pages.telecommunications",
  },
  {
    path: "/doanh-nghiep/cong-nghe-thong-tin",
    namespace: "pages.informationTechnology",
  },
  {
    path: "/doanh-nghiep/truyen-dan-bang-rong",
    namespace: "pages.transmissionBroadband",
  },

  // {
  //   path: "/dich-vu-di-dong",
  //   namespace: "pages.publicServices",
  // },
  {
    path: "/dich-vu-di-dong/loai-thue-bao",
    namespace: "pages.subscriberTypes",
  },
  {
    path: "/dich-vu-di-dong/goi-cuoc",
    namespace: "pages.packages",
  },
  {
    path: "/dich-vu-di-dong/dich-vu",
    namespace: "pages.services",
  },

  {
    path: "/ho-tro-khach-hang",
    namespace: "pages.customerSupport",
  },
  {
    path: "/ho-tro-khach-hang/ket-noi-dai-lau",
    namespace: "pages.longTermConnection",
  },
  {
    path: "/ho-tro-khach-hang/cau-hoi-thuong-gap",
    namespace: "pages.faq",
  },

  {
    path: "/khuyen-mai",
    namespace: "pages.promotions",
  },
  {
    path: "/5g-mobifone",
    namespace: "pages.fiveGMobifone",
  },
];
