import { PageContent } from "@/shared/layout/page-content";
import { BreadcrumbSegment } from "@/types/interfaces/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface SegmentPageProps {
  params: Promise<{ locale: string }>;
  translationKey: string;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export async function SegmentPage({
  params,
  translationKey,
  breadcrumbSegments
}: SegmentPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations(`pages.${translationKey}`);

  return <PageContent title={t("title")} description={t("description")} breadcrumbSegments={breadcrumbSegments} />;
}
