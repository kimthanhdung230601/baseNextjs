import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "publicServices",
  "/personal/public-services",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function PublicServicesPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="publicServices" />;
}
