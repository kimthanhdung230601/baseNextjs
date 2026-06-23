import { SegmentPage } from "@/shared/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "transmissionBroadband",
  `/${configs.BUSINESS_PATH_SEGMENT}/truyen-dan-bang-thong`
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function TransmissionBroadbandPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="transmissionBroadband" />;
}
