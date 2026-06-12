import "../globals.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { Provider } from "@/components/provider";
import { SITE_URL } from "@/constants/seo";
import { routing } from "@/i18n/routing";
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
        routing.locales.map((item) => [item, `${SITE_URL}/${item}`]),
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
  const tSeo = await getTranslations("seo");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <JsonLd locale={locale} description={tSeo("organizationDescription")} />
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <main className="bg-white text-zinc-700 dark:bg-black dark:text-zinc-400">
              <SiteShell>{children}</SiteShell>
            </main>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
