import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "informationTechnology",
  ROUTES.BUSINESS.INFORMATION_TECHNOLOGY
);

export default function InformationTechnologyPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="informationTechnology" />;
}
