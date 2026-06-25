import SegmentPage from "@/shared/layout/segment-page";
import { ROUTES } from "@/constants/route";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";

export const generateMetadata = createSegmentMetadata(
  "services",
  ROUTES.PERSONAL.MOBILE_SERVICES.SERVICES
);

export default function ServicesPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="services" breadcrumbSegments={[
      { labelSource: "subHeader.publicServices" },
      { labelSource: "subHeader.services" },
    ]} />
  );
}
