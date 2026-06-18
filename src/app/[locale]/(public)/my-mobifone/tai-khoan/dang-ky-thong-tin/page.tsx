import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "registerInfo",
  "/tai-khoan/dang-ky-thong-tin"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function RegisterInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerInfo" />;
}
