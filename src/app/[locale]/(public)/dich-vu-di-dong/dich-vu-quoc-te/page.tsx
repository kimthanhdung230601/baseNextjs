import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "internationalServices",
  ROUTES.PERSONAL.MOBILE_SERVICES.INTERNATIONAL_SERVICES
);

const InternationalServicesPage = ({ params }: PageProps) => {
  return (
    <SegmentPage params={params} translationKey="internationalServices" breadcrumbSegments={[
      { labelSource: "subHeader.publicServices" },
      { labelSource: "subHeader.internationalServices" },
    ]} />
  );
};

export default InternationalServicesPage;
