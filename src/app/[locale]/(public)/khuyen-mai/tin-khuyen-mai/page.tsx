import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "promotionNews",
  "/khuyen-mai/tin-khuyen-mai"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function InformationNewsPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="promotionNews" />;
}
