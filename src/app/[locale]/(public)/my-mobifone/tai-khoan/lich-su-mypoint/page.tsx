import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "myPoint",
  ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION.MYPOINT_USAGE
);

export default function MyPointPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="myPoint" />;
}
