import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billWebApp",
  ROUTES.PERSONAL.MY_MOBIFONE.BILLS.BILL_WEB_APP
);

export default function BillWebAppPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billWebApp" />;
}
