import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "packages",
  "/personal/public-services/packages",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function PackagesPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="packages" />;
}
