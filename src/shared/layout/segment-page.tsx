import { BreadcrumbSegment } from "@/types/interfaces/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "../components/breadcrumbs";

interface SegmentPageProps {
  params?: Promise<{ locale: string }>;
  translationKey?: string;
  breadcrumbSegments?: BreadcrumbSegment[];
  children?: React.ReactNode
}

export default async function SegmentPage({
  params,
  translationKey = 'telecommunications',
  breadcrumbSegments,
  children
}: SegmentPageProps) {
  const t = await getTranslations(`pages.${translationKey}`);

  if (params) {
    const { locale } = await params;
    setRequestLocale(locale);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {!!breadcrumbSegments && <div className="mb-4">
        <Breadcrumbs segments={breadcrumbSegments} />
      </div>}
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {t("title")}
      </h1>
      {children}
    </section>
  );
}
