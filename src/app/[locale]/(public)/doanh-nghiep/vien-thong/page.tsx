import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "telecommunications",
  `/${configs.BUSINESS_PATH_SEGMENT}/vien-thong`
);

export default function TelecommunicationsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="telecommunications" />;
}
