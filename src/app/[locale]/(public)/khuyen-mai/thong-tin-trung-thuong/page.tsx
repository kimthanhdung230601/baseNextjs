import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "prizeInformation",
  "/khuyen-mai/thong-tin-trung-thuong"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function PrizeInformationPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="prizeInformation" />;
}
