import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "sendFeedback",
  "/ho-tro-khach-hang/gui-phan-anh"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function SendFeedbackPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="sendFeedback" />;
}
