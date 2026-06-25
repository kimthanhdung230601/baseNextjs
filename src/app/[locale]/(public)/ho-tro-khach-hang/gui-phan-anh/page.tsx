import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "sendFeedback",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.SEND_FEEDBACK
);

export default function SendFeedbackPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="sendFeedback" />;
}
