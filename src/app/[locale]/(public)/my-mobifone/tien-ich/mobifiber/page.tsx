import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "mobifiber",
  "/tai-khoan/mobifiber"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function MobifiberPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="mobifiber" />;
}
