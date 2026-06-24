import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billInquiry",
  "/cuoc/tra-cuoc"
);

export default function CheckPricePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInquiry" />;
}
