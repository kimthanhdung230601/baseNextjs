import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageContent } from "@/components/layout/page-content";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createPageMetadata({
  path: "",
  namespace: "pages.home",
});

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.home");

  return <PageContent title={t("title")} description={t("description")} />;
}
