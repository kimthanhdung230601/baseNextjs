import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "longTermConnection",
  "/ho-tro-khach-hang/ket-noi-dai-lau"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function LongTermConnectionPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="longTermConnection" />;
}
