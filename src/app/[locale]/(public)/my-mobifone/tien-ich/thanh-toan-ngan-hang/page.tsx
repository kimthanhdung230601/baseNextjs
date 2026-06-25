import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "bankPayment",
  ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.BANK_TRANSFER
);

export default function BankTransferPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="bankPayment" />;
}
