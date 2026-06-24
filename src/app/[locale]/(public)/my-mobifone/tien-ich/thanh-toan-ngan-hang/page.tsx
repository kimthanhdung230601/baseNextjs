import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "bankPayment",
  "/tai-khoan/thanh-toan-ngan-hang"
);

export default function BankTransferPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="bankPayment" />;
}
