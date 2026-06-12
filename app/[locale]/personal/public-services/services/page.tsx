import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "services",
  "/personal/public-services/services",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ServicesPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="services" />;
}
