import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "myMobifone",
  "/my-mobifone"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function MyMobifonePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="myMobifone" />;
}
