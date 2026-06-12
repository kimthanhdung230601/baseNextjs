import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "faq",
  "/personal/customer-support/faq",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function FaqPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="faq" />;
}
