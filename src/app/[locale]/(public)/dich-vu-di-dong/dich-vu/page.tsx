import SegmentPage from "@/shared/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";

export const generateMetadata = createSegmentMetadata(
  "services",
  "/dich-vu-di-dong/dich-vu"
);

export default function ServicesPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="services" breadcrumbSegments={[
      { labelSource: "subHeader.publicServices" },
      { labelSource: "subHeader.services" },
    ]} />
  );
}
