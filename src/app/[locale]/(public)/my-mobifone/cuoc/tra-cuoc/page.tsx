import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billInquiry",
  ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_INQUIRY
);

export default function CheckPricePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInquiry" />;
}
