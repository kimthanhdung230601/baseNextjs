import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "topUp",
  "/tai-khoan/nap-tien"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function TopUpPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="topUp" />;
}
