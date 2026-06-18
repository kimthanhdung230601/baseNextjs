import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "numberPortability",
  "/ho-tro-khach-hang/chuyen-mang-giu-so"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function NumberPortabilityPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="numberPortability" />;
}
