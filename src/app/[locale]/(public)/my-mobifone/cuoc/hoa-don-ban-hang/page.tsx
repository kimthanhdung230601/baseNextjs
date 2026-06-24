import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billInvoice",
  "/cuoc/hoa-don-ban-hang"
);

export default function BillInvoicePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInvoice" />;
}
