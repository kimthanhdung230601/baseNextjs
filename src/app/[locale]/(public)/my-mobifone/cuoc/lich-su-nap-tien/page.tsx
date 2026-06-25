import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billHistory",
  ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_HISTORY
);

export default function BillHistoryPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billHistory" />;
}
