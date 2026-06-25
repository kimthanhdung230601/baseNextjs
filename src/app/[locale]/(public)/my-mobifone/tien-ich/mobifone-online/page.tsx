import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "mobifoneOnline",
  ROUTES.PERSONAL.MY_MOBIFONE.BENEFITS.MOBIFONE_ONLINE
);

export default function MobifoneOnlinePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="mobifoneOnline" />;
}
