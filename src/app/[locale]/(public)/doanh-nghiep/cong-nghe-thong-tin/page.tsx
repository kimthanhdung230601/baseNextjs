import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "informationTechnology",
  `/${configs.BUSINESS_PATH_SEGMENT}/cong-nghe-thong-tin`
);

export default function InformationTechnologyPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="informationTechnology" />;
}
