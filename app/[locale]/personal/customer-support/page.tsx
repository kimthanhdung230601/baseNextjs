import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "customerSupport",
  "/personal/customer-support",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function CustomerSupportPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="customerSupport" />;
}
