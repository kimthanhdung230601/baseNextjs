import { NextIntlClientProvider } from "next-intl";
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { buildPageMetadata } from "@/lib/seo/metadata";
import { SiteShell } from "@/shared/layout/site-shell";
import SegmentPage from "@/shared/layout/segment-page";

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
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteShell>
        <SegmentPage />
      </SiteShell>
    </NextIntlClientProvider>
  );
}
