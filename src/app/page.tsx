import SegmentPage from "@/shared/layout/segment-page";
import SiteShell from "@/shared/layout/site-shell";
import { NextIntlClientProvider } from "next-intl";
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("pages.home");

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
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteShell>
        <SegmentPage />
      </SiteShell>
    </NextIntlClientProvider>
  );
}
