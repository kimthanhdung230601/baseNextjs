import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "packages",
  ROUTES.PERSONAL.MOBILE_SERVICES.PACKAGES
);

const PackagesPage = ({ params }: PageProps) => {
  return (
    <SegmentPage params={params} translationKey="packages" breadcrumbSegments={[
      { labelSource: "subHeader.publicServices" },
      { labelSource: "subHeader.packages" },
    ]} />
  );
};

export default PackagesPage;
