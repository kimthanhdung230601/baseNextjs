import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "longTermConnection",
  "/ho-tro-khach-hang/ket-noi-dai-lau"
);

export default function LongTermConnectionPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="longTermConnection" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.longTermConnection" },
    ]} />
  );
}
