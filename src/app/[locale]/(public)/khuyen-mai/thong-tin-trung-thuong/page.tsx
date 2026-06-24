import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "prizeInformation",
  "/khuyen-mai/thong-tin-trung-thuong"
);

export default function PrizeInformationPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="prizeInformation" />;
}
