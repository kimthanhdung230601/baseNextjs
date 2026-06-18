import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "faq",
  "/ho-tro-khach-hang/cau-hoi-thuong-gap"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function FaqPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="faq" />;
}
