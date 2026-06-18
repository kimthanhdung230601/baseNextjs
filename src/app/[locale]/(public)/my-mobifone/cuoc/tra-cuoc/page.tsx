import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "billInquiry",
  "/cuoc/tra-cuoc"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function CheckPricePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInquiry" />;
}
