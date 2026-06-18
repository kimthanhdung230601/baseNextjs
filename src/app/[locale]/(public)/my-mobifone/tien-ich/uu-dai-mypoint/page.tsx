import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "myPoint",
  "/tai-khoan/uu-dai-mypoint"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function MyPointPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="myPoint" />;
}
