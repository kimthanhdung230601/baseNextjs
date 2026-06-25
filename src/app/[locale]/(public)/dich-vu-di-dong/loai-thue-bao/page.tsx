import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "subscriberTypes",
  ROUTES.PERSONAL.MOBILE_SERVICES.SUBSCRIBER_TYPES
);

const TypeBagPage = ({ params }: PageProps) => {
  return (
    <SegmentPage params={params} translationKey="subscriberTypes" breadcrumbSegments={[
      { labelSource: "subHeader.publicServices" },
      { labelSource: "subHeader.subscriberTypes" },
    ]} />
  );
};

export default TypeBagPage;
