import React from "react";
import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "subscriberTypes",
  "/dich-vu-di-dong/loai-thue-bao"
);
interface PageProps {
  params: Promise<{ locale: string }>;
}

const TypeBagPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="subscriberTypes" />;
};

export default TypeBagPage;
