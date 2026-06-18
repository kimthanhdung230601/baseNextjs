import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "billWebApp",
  "/cuoc/lich-su-thanh-toan-app"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function BillWebAppPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billWebApp" />;
}
