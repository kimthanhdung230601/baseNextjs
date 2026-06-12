import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { BuildPageMetadataParams } from "@/types/interfaces/seo";
import { Locale } from "@/types/enums/locale";

function buildCanonicalUrl(locale: string, path: string): string {
  if (path === "") {
    return `${SITE_URL}/${locale}`;
  }

  return `${SITE_URL}/${locale}${path}`;
}

function buildAlternateLanguages(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, buildCanonicalUrl(locale, path)]),
  );
}

function resolveOpenGraphLocale(locale: string): string {
  return locale === Locale.VI ? "vi_VN" : "en_US";
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  noIndex = false,
}: BuildPageMetadataParams): Metadata {
  const canonicalUrl = buildCanonicalUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: resolveOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
