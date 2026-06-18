import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "promotions",
  "/personal/promotions"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function PromotionsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="promotions" />;
}
