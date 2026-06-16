import { NextIntlClientProvider } from "next-intl";
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContent } from "@/shared/layout/page-content";
import { SiteShell } from "@/shared/layout/site-shell";

export async function generateMetadata() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("pages.telecommunications");

  return buildPageMetadata({
    locale,
    path: "",
    title: t("title"),
    description: t("description"),
  });
}

export default async function RootPage() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("pages.telecommunications");
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteShell>
        <PageContent title={t("title")} description={t("description")} />
      </SiteShell>
    </NextIntlClientProvider>
  );
}
