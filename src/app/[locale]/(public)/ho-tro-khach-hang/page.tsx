import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "customerSupport",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.ROOT
);

export default function CustomerSupportPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="customerSupport" />;
}
