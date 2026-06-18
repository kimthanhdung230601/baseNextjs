import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "billHistory",
  "/cuoc/lich-su-nap-tien"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function BillHistoryPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billHistory" />;
}
