import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "eSim",
  "/dich-vu-di-dong/eSim"
);

const EsimPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="eSim" />;
};

export default EsimPage;
