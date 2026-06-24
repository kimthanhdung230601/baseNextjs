import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";
import configs from "@/constants/config";

export const generateMetadata = createSegmentMetadata(
  "transmissionBroadband",
  `/${configs.BUSINESS_PATH_SEGMENT}/truyen-dan-bang-thong`
);

export default function TransmissionBroadbandPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="transmissionBroadband" />;
}
