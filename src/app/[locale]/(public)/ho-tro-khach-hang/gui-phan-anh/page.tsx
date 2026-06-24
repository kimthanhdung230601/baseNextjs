import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "sendFeedback",
  "/ho-tro-khach-hang/gui-phan-anh"
);

export default function SendFeedbackPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="sendFeedback" />;
}
