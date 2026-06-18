import { Segment } from "@/types/enums/segment";
import type { NavigationConfig } from "@/types/interfaces/navigation";

export const BUSINESS_NAVIGATION: NavigationConfig = {
  segment: Segment.BUSINESS,
  items: [
    {
      key: "telecommunications",
      label: "telecommunications",
      href: "/doanh-nghiep/vien-thong",
    },
    {
      key: "informationTechnology",
      label: "informationTechnology",
      href: "/doanh-nghiep/cong-nghe-thong-tin",
    },
    {
      key: "transmissionBroadband",
      label: "transmissionBroadband",
      href: "/doanh-nghiep/truyen-dan-bang-thong",
    },
  ],
};

export const PERSONAL_NAVIGATION: NavigationConfig = {
  segment: Segment.PERSONAL,
  items: [
    {
      key: "publicServices",
      children: [
        {
          key: "subscriberTypes",
          label: "subscriberTypes",
          href: "/dich-vu-di-dong/loai-thue-bao",
        },
        {
          key: "packages",
          label: "packages",
          href: "/dich-vu-di-dong/goi-cuoc",
        },
        {
          key: "services",
          label: "services",
          href: "/dich-vu-di-dong/dich-vu",
        },
        {
          key: "registerNetwork",
          label: "registerNetwork",
          href: "/dich-vu-di-dong/dang-ky-hoa-mang",
        },
        {
          key: "internationalServices",
          label: "internationalServices",
          href: "/dich-vu-di-dong/dich-vu-quoc-te",
        },
        {
          key: "eSim",
          label: "eSim",
          href: "/dich-vu-di-dong/eSim",
        },
      ],
    },
    {
      key: "customerSupport",
      children: [
        {
          key: "longTermConnection",
          label: "longTermConnection",
          href: "/ho-tro-khach-hang/ket-noi-dai-lau",
        },
        {
          key: "faq",
          label: "faq",
          href: "/ho-tro-khach-hang/cau-hoi-thuong-gap",
        },
        {
          key: "searchStore",
          label: "searchStore",
          href: "/ho-tro-khach-hang/tim-kiem-cua-hang",
        },
        {
          key: "numberPortability",
          label: "numberPortability",
          href: "/ho-tro-khach-hang/chuyen-mang-giu-so",
        },
        {
          key: "sendFeedback",
          label: "sendFeedback",
          href: "/ho-tro-khach-hang/gui-phan-anh",
        },
      ],
    },
    {
      key: "promotions",
      children: [
        {
          key: "promotionNews",
          label: "promotionNews",
          href: "/khuyen-mai/tin-khuyen-mai",
        },
        {
          key: "prizeInformation",
          label: "prizeInformation",
          href: "/khuyen-mai/thong-tin-trung-thuong",
        },
        {
          key: "searchPrize",
          label: "searchPrize",
          href: "/khuyen-mai/tra-cuu-ma-giai-thuong",
        },
      ],
    },
    {
      key: "myMobifone",
      layout: "grid",
      children: [
        {
          key: "accountInformation",
          category: "accountInformation",
          items: [
            {
              key: "accountInfo",
              label: "accountInfo",
              href: "/my-mobifone/tai-khoan/thong-tin-tai-khoan",
            },
            {
              key: "accountDetails",
              label: "accountDetails",
              href: "/my-mobifone/tai-khoan/thong-tin-ca-nhan",
            },
            {
              key: "registerInfo",
              label: "registerInfo",
              href: "/my-mobifone/tai-khoan/dang-ky-thong-tin",
            },
            {
              key: "mypointUsage",
              label: "mypointUsage",
              href: "/my-mobifone/tai-khoan/lich-su-mypoint",
            },
            {
              key: "fwaManagement",
              label: "fwaManagement",
              href: "/my-mobifone/tai-khoan/quan-ly-thiet-bi-fwa",
            },
          ],
        },
        {
          key: "benefits",
          category: "benefits",
          items: [
            {
              key: "topup",
              label: "topup",
              href: "/my-mobifone/tien-ich/nap-tien",
            },
            {
              key: "bankTransfer",
              label: "bankTransfer",
              href: "/my-mobifone/tien-ich/thanh-toan-ngan-hang",
            },
            {
              key: "autopay",
              label: "autopay",
              href: "/my-mobifone/tien-ich/autopay",
            },
            {
              key: "mobifoneOnline",
              label: "mobifoneOnline",
              href: "/my-mobifone/tien-ich/mobifone-online",
            },
            {
              key: "mypointBenefit",
              label: "mypointBenefit",
              href: "/my-mobifone/tien-ich/uu-dai-mypoint",
            },
            {
              key: "mobifiber",
              label: "mobifiber",
              href: "/my-mobifone/tien-ich/mobifiber",
            },
          ],
        },
        {
          key: "bills",
          category: "bills",
          items: [
            {
              key: "billInquiry",
              label: "billInquiry",
              href: "/my-mobifone/cuoc/tra-cuoc",
            },
            {
              key: "billHistory",
              label: "billHistory",
              href: "/my-mobifone/cuoc/lich-su-nap-tien",
            },
            {
              key: "billWebApp",
              label: "billWebApp",
              href: "/my-mobifone/cuoc/lich-su-thanh-toan-app",
            },
            {
              key: "billInvoice",
              label: "billInvoice",
              href: "/my-mobifone/cuoc/hoa-don-ban-hang",
            },
          ],
        },
      ],
    },
    {
      key: "recruitment",
      label: "recruitment",
      href: "/tuyen-dung",
    },
    {
      key: "fiveGMobifone",
      label: "fiveGMobifone",
      href: "https://5g.mobifone.vn",
      isExternal: true,
    },
  ],
};

export const SEGMENT_HOME_PATH = {
  [Segment.PERSONAL]: "/",
  [Segment.BUSINESS]: "/doanh-nghiep/vien-thong",
} as const;

export const FIVE_G_MOBIFONE_PATH = "/personal/5g-mobifone";
