import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billInvoice",
  ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_INVOICE
);

export default function BillInvoicePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInvoice" />;
}
