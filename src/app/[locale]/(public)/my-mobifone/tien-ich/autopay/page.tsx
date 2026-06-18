import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "autopay",
  "/tai-khoan/autopay"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function AutoPayPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="autopay" />;
}
