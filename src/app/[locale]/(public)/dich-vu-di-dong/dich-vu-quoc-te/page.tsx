import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "internationalServices",
  "/dich-vu-di-dong/dich-vu-quoc-te"
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
