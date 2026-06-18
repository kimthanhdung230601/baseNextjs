import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "registerNetwork",
  "/dich-vu-di-dong/dang-ky-hoa-mang"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function RegisterNetworkPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerNetwork" />;
}
