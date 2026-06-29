import { getTranslations, setRequestLocale } from "next-intl/server";

import JsonLd from "@/shared/components/seo/json-ld";

export default async function Head({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tSeo = await getTranslations("seo");

  return (
    <JsonLd locale={locale} description={tSeo("organizationDescription")} />
  );
}
