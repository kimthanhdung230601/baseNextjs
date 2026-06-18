import React from "react";
import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "internationalServices",
  "/dich-vu-di-dong/dich-vu-quoc-te"
);
interface PageProps {
  params: Promise<{ locale: string }>;
}

const InternationalServicesPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="internationalServices" />;
};

export default InternationalServicesPage;
