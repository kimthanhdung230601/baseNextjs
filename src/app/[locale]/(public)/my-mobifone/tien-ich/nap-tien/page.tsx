import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "topUp",
  ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.TOPUP
);

export default function TopUpPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="topUp" />;
}
