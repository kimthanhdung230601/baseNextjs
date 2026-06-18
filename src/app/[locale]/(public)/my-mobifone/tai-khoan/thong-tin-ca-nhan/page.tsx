import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "accountDetails",
  "/tai-khoan/thong-tin-ca-nhan"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function AccountDetailsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountDetails" />;
}
