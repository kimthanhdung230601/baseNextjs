import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billHistory",
  "/cuoc/lich-su-nap-tien"
);

export default function BillHistoryPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billHistory" />;
}
