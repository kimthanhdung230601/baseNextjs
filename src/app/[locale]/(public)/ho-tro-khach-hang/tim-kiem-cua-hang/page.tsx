import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "searchStore",
  "/ho-tro-khach-hang/tim-kiem-cua-hang"
);

export default function SearchStorePage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="searchStore" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.searchStore" },
    ]} />
  )
}
