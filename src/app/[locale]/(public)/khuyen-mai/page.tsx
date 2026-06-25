import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "promotions",
  ROUTES.PERSONAL.PROMOTIONS.ROOT
);

export default function PromotionsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="promotions" />;
}
