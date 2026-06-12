import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { buildPageMetadata } from "@/lib/seo/metadata";

interface CreatePageMetadataOptions {
  path: string;
  namespace: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  path,
  namespace,
  noIndex,
}: CreatePageMetadataOptions) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations(namespace);

    return buildPageMetadata({
      locale,
      path,
      title: t("title"),
      description: t("description"),
      noIndex,
    });
  };
}

export function createSegmentMetadata(
  translationKey: string,
  path: string,
  options?: { noIndex?: boolean },
) {
  return createPageMetadata({
    path,
    namespace: `pages.${translationKey}`,
    noIndex: options?.noIndex,
  });
}
