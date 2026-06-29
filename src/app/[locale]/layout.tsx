import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "@/constants/seo";
import { routing } from "@/i18n/routing";
import SiteShell from "@/shared/layout/site-shell";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { Locale } from "@/types/enums/locale";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("seo");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    description: t("organizationDescription"),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "1800-1090",
      contactType: "customer service",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("defaultDescription"),
    keywords: t("keywords"),
    applicationName: t("siteName"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `${SITE_URL}/${item}`])
      ),
    },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      title: t("defaultTitle"),
      description: t("defaultDescription"),
      locale: locale === Locale.VI ? "vi_VN" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("defaultDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "application/ld+json": JSON.stringify(structuredData),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <main className="bg-white text-zinc-700 dark:bg-black dark:text-zinc-400">
        <SiteShell>{children}</SiteShell>
      </main>
    </NextIntlClientProvider>
  );
}
