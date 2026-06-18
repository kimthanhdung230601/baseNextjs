import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "mobifoneOnline",
  "/tai-khoan/mobifone-online"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function MobifoneOnlinePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="mobifoneOnline" />;
}
