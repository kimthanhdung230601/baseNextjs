import { SegmentPage } from "@/shared/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "telecommunications",
  `/${configs.BUSINESS_PATH_SEGMENT}/vien-thong`
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function TelecommunicationsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="telecommunications" />;
}
