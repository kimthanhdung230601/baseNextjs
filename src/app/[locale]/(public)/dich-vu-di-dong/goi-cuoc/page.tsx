import React from "react";
import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "packages",
  "/dich-vu-di-dong/goi-cuoc"
);
interface PageProps {
  params: Promise<{ locale: string }>;
}

const PackagesPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="packages" />;
};

export default PackagesPage;
