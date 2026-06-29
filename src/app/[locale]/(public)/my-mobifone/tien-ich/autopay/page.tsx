import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "autopay",
  ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.AUTOPAY
);

export default function AutoPayPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="autopay" />;
}
