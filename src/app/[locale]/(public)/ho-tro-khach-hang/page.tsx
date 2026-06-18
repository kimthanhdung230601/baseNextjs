import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "customerSupport",
  "/ho-tro-khach-hang"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function CustomerSupportPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="customerSupport" />;
}
