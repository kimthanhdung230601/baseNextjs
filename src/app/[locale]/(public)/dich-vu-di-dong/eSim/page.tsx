import React from "react";
import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "eSim",
  "/dich-vu-di-dong/eSim"
);
interface PageProps {
  params: Promise<{ locale: string }>;
}

const EsimPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="eSim" />;
};

export default EsimPage;
