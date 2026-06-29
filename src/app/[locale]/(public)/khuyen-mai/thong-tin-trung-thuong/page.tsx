import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "prizeInformation",
  ROUTES.PERSONAL.PROMOTIONS.PRIZE_INFORMATION
);

export default function PrizeInformationPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="prizeInformation" />;
}
