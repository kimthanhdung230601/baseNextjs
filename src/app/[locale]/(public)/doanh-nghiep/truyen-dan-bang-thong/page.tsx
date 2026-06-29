import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "transmissionBroadband",
  ROUTES.BUSINESS.TRANSMISSION_BROADBAND
);

export default function TransmissionBroadbandPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="transmissionBroadband" />;
}
