import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "telecommunications",
  "/doanh-nghiep/vien-thong"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function TelecommunicationsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="telecommunications" />;
}
