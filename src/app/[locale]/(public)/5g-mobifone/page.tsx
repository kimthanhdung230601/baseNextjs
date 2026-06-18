import { getTranslations, setRequestLocale } from "next-intl/server";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "fiveGMobifone",
  "/personal/5g-mobifone"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FiveGMobifonePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.fiveGMobifone");

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-lg text-zinc-300">{t("description")}</p>
    </section>
  );
}
