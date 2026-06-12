import type { NavigationConfig } from "@/types/interfaces/navigation";
import { Segment } from "@/types/enums/segment";

export const BUSINESS_NAVIGATION: NavigationConfig = {
  segment: Segment.BUSINESS,
  items: [
    {
      key: "telecommunications",
      href: "/business/telecommunications",
    },
    {
      key: "informationTechnology",
      href: "/business/information-technology",
    },
    {
      key: "transmissionBroadband",
      href: "/business/transmission-broadband",
    },
  ],
};

export const PERSONAL_NAVIGATION: NavigationConfig = {
  segment: Segment.PERSONAL,
  items: [
    {
      key: "publicServices",
      href: "/personal/public-services",
      children: [
        {
          key: "subscriberTypes",
          href: "/personal/public-services/subscriber-types",
        },
        {
          key: "packages",
          href: "/personal/public-services/packages",
        },
        {
          key: "services",
          href: "/personal/public-services/services",
        },
      ],
    },
    {
      key: "customerSupport",
      href: "/personal/customer-support",
      children: [
        {
          key: "longTermConnection",
          href: "/personal/customer-support/long-term-connection",
        },
        {
          key: "faq",
          href: "/personal/customer-support/faq",
        },
      ],
    },
    {
      key: "promotions",
      href: "/personal/promotions",
    },
    {
      key: "fiveGMobifone",
      href: "/personal/5g-mobifone",
    },
  ],
};

export const SEGMENT_HOME_PATH = {
  [Segment.PERSONAL]: "/personal/public-services",
  [Segment.BUSINESS]: "/business/telecommunications",
} as const;

export const FIVE_G_MOBIFONE_PATH = "/personal/5g-mobifone";
