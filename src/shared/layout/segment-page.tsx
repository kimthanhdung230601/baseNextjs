import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbSegment } from "@/types/interfaces/navigation";

import PageContent from "./page-content";

interface SegmentPageProps {
  params?: Promise<{ locale: string }>;
  translationKey?: string;
  breadcrumbSegments?: BreadcrumbSegment[];
  children?: React.ReactNode;
}

export default async function SegmentPage({
  params,
  translationKey = "home",
  breadcrumbSegments,
  children,
}: SegmentPageProps) {
  if (params) {
    const { locale } = await params;
    setRequestLocale(locale);
  }

  const t = await getTranslations(`pages.${translationKey}`);

  return (
    <PageContent
      breadcrumbSegments={breadcrumbSegments}
      title={t("title")}
      description={t("description")}
    >
      {children}
    </PageContent>
  );
}
