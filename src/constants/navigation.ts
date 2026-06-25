import { Segment } from "@/types/enums/segment";
import type { NavigationConfig } from "@/types/interfaces/navigation";

import { ROUTES } from "./route";

export const BUSINESS_NAVIGATION: NavigationConfig = {
  segment: Segment.BUSINESS,
  items: [
    {
      key: "telecommunications",
      label: "telecommunications",
      href: ROUTES.BUSINESS.TELECOMMUNICATIONS,
    },
    {
      key: "informationTechnology",
      label: "informationTechnology",
      href: ROUTES.BUSINESS.INFORMATION_TECHNOLOGY,
    },
    {
      key: "transmissionBroadband",
      label: "transmissionBroadband",
      href: ROUTES.BUSINESS.TRANSMISSION_BROADBAND,
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
          href: ROUTES.PERSONAL.MOBILE_SERVICES.SUBSCRIBER_TYPES,
        },
        {
          key: "packages",
          label: "packages",
          href: ROUTES.PERSONAL.MOBILE_SERVICES.PACKAGES,
        },
        {
          key: "services",
          label: "services",
          href: ROUTES.PERSONAL.MOBILE_SERVICES.SERVICES,
        },
        {
          key: "registerNetwork",
          label: "registerNetwork",
          href: ROUTES.PERSONAL.MOBILE_SERVICES.REGISTER_NETWORK,
        },
        {
          key: "internationalServices",
          label: "internationalServices",
          href: ROUTES.PERSONAL.MOBILE_SERVICES.INTERNATIONAL_SERVICES,
        },
        {
          key: "eSim",
          label: "eSim",
          href: ROUTES.PERSONAL.MOBILE_SERVICES.ESIM,
        },
      ],
    },
    {
      key: "customerSupport",
      children: [
        {
          key: "longTermConnection",
          label: "longTermConnection",
          href: ROUTES.PERSONAL.CUSTOMER_SUPPORT.LONG_TERM_CONNECTION,
        },
        {
          key: "faq",
          label: "faq",
          href: ROUTES.PERSONAL.CUSTOMER_SUPPORT.FAQ,
        },
        {
          key: "searchStore",
          label: "searchStore",
          href: ROUTES.PERSONAL.CUSTOMER_SUPPORT.SEARCH_STORE,
        },
        {
          key: "numberPortability",
          label: "numberPortability",
          href: ROUTES.PERSONAL.CUSTOMER_SUPPORT.NUMBER_PORTABILITY,
        },
        {
          key: "sendFeedback",
          label: "sendFeedback",
          href: ROUTES.PERSONAL.CUSTOMER_SUPPORT.SEND_FEEDBACK,
        },
      ],
    },
    {
      key: "promotions",
      children: [
        {
          key: "promotionNews",
          label: "promotionNews",
          href: ROUTES.PERSONAL.PROMOTIONS.PROMOTION_NEWS,
        },
        {
          key: "prizeInformation",
          label: "prizeInformation",
          href: ROUTES.PERSONAL.PROMOTIONS.PRIZE_INFORMATION,
        },
        {
          key: "searchPrize",
          label: "searchPrize",
          href: ROUTES.PERSONAL.PROMOTIONS.SEARCH_PRIZE,
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
              href: ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION
                .ACCOUNT_INFO,
            },
            {
              key: "accountDetails",
              label: "accountDetails",
              href: ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION
                .ACCOUNT_DETAILS,
            },
            {
              key: "registerInfo",
              label: "registerInfo",
              href: ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION
                .REGISTER_INFO,
            },
            {
              key: "mypointUsage",
              label: "mypointUsage",
              href: ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION
                .MYPOINT_USAGE,
            },
            {
              key: "fwaManagement",
              label: "fwaManagement",
              href: ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION
                .FWA_MANAGEMENT,
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
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.TOPUP,
            },
            {
              key: "bankTransfer",
              label: "bankTransfer",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.BANK_TRANSFER,
            },
            {
              key: "autopay",
              label: "autopay",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.AUTOPAY,
            },
            {
              key: "mobifoneOnline",
              label: "mobifoneOnline",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.MOBIFONE_ONLINE,
            },
            {
              key: "mypointBenefit",
              label: "mypointBenefit",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.MYPOINT_BENEFIT,
            },
            {
              key: "mobifiber",
              label: "mobifiber",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.MOBIFIBER,
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
              href: ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_INQUIRY,
            },
            {
              key: "billHistory",
              label: "billHistory",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_HISTORY,
            },
            {
              key: "billWebApp",
              label: "billWebApp",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_WEB_APP,
            },
            {
              key: "billInvoice",
              label: "billInvoice",
              href: ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_INVOICE,
            },
          ],
        },
      ],
    },
    {
      key: "recruitment",
      label: "recruitment",
      href: ROUTES.PERSONAL.RECRUITMENT,
    },
    {
      key: "fiveGMobifone",
      label: "fiveGMobifone",
      href: ROUTES.PERSONAL.FIVE_G_MOBIFONE,
      isExternal: true,
    },
  ],
};

export const SEGMENT_HOME_PATH = {
  [Segment.PERSONAL]: ROUTES.PERSONAL.MOBILE_SERVICES.ROOT,
  [Segment.BUSINESS]: ROUTES.BUSINESS.TELECOMMUNICATIONS,
} as const;

export const FIVE_G_MOBIFONE_PATH = ROUTES.PERSONAL.FIVE_G_MOBIFONE_PAGE;
