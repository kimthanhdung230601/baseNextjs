import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "searchPrize",
  "/khuyen-mai/tra-cuu-ma-giai-thuong"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function SearchPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="searchPrize" />;
}
