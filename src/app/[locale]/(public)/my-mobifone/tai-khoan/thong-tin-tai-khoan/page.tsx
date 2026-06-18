import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "accountInfo",
  "/tai-khoan/thong-tin-tai-khoan"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function AccountInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountInfo" />;
}
