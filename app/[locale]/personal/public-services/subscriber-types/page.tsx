import { SegmentPage } from "@/components/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "subscriberTypes",
  "/personal/public-services/subscriber-types",
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function SubscriberTypesPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="subscriberTypes" />;
}
