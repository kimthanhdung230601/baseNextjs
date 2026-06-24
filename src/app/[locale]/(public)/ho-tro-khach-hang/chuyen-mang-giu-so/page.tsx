import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "numberPortability",
  "/ho-tro-khach-hang/chuyen-mang-giu-so"
);

export default function NumberPortabilityPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="numberPortability" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.numberPortability" },
    ]} />
  )
}
