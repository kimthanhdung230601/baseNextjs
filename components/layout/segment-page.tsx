import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageContent } from "@/components/layout/page-content";

interface SegmentPageProps {
  params: Promise<{ locale: string }>;
  translationKey: string;
}

export async function SegmentPage({
  params,
  translationKey,
}: SegmentPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations(`pages.${translationKey}`);

  return <PageContent title={t("title")} description={t("description")} />;
}
