import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "accountDetails",
  "/tai-khoan/thong-tin-ca-nhan"
);

export default function AccountDetailsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountDetails" />;
}
