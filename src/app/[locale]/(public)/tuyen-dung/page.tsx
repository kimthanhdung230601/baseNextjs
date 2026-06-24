import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "recruitment",
  "/tuyen-dung"
);

export default function RecruitmentPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="recruitment" />;
}
