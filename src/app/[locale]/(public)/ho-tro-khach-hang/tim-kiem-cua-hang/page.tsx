import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "searchStore",
  "/ho-tro-khach-hang/tim-kiem-cua-hang"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function SearchStorePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="searchStore" />;
}
