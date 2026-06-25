import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "searchStore",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.SEARCH_STORE
);

export default function SearchStorePage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="searchStore" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.searchStore" },
    ]} />
  )
}
