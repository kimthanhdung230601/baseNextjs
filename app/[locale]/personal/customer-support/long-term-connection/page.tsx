import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "longTermConnection",
  "/personal/customer-support/long-term-connection",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function LongTermConnectionPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="longTermConnection" />;
}
