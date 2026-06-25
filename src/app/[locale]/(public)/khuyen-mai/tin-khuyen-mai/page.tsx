import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "promotionNews",
  ROUTES.PERSONAL.PROMOTIONS.PROMOTION_NEWS
);

export default function InformationNewsPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="promotionNews" />;
}
