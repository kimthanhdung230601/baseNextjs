import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "services",
  "/dich-vu-di-dong/dich-vu"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ServicesPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="services" />;
}
