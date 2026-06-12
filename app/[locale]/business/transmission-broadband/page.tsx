import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "transmissionBroadband",
  "/business/transmission-broadband",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function TransmissionBroadbandPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="transmissionBroadband" />
  );
}
