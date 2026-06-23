import { SegmentPage } from "@/shared/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "informationTechnology",
  `/${configs.BUSINESS_PATH_SEGMENT}/cong-nghe-thong-tin`
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function InformationTechnologyPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="informationTechnology" />;
}
