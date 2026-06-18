import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "billInvoice",
  "/cuoc/hoa-don-ban-hang"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function BillInvoicePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billInvoice" />;
}
