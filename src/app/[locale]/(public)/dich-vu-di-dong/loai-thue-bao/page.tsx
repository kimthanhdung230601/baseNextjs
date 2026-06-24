import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "subscriberTypes",
  "/dich-vu-di-dong/loai-thue-bao"
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
