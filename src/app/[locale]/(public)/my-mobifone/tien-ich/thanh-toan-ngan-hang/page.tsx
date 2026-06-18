import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "bankPayment",
  "/tai-khoan/thanh-toan-ngan-hang"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function BankTransferPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="bankPayment" />;
}
