import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "promotionNews",
  "/khuyen-mai/tin-khuyen-mai"
);

export default function InformationNewsPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="promotionNews" />;
}
