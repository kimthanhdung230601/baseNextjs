import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "customerSupport",
  "/ho-tro-khach-hang"
);

export default function CustomerSupportPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="customerSupport" />;
}
