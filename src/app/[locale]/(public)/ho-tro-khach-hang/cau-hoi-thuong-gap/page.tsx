import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "faq",
  "/ho-tro-khach-hang/cau-hoi-thuong-gap"
);

export default function FaqPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="faq" breadcrumbSegments={[
      { labelSource: "subHeader.customerSupport" },
      { labelSource: "subHeader.faq" },
    ]} />
  );
}
