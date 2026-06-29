import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "longTermConnection",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.LONG_TERM_CONNECTION
);

export default function LongTermConnectionPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="longTermConnection" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.longTermConnection" },
    ]} />
  );
}
