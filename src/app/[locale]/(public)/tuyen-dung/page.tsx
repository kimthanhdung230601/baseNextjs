import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "recruitment",
  "/tuyen-dung"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function RecruitmentPrizePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="recruitment" />;
}
