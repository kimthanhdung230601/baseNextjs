import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "searchPrize",
  ROUTES.PERSONAL.PROMOTIONS.SEARCH_PRIZE
);

export default function SearchPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="searchPrize" />;
}
