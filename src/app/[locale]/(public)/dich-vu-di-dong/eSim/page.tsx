import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "eSim",
  ROUTES.PERSONAL.MOBILE_SERVICES.ESIM
);

const EsimPage = ({ params }: PageProps) => {
  return <SegmentPage params={params} translationKey="eSim" />;
};

export default EsimPage;
