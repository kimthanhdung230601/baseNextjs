import { getTranslations, setRequestLocale } from "next-intl/server";
import { ROUTES } from "@/constants/route";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";

export const generateMetadata = createSegmentMetadata(
  "fiveGMobifone",
  ROUTES.PERSONAL.FIVE_G_MOBIFONE_PAGE
);

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
