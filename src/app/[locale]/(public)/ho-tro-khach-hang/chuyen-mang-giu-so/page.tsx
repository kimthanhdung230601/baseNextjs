import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "numberPortability",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.NUMBER_PORTABILITY
);

export default function NumberPortabilityPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="numberPortability" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.numberPortability" },
    ]} />
  )
}
