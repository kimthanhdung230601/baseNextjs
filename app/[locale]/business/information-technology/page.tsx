import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "informationTechnology",
  "/business/information-technology",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function InformationTechnologyPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="informationTechnology" />
  );
}
