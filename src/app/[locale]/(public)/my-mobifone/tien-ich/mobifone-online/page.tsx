import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "mobifoneOnline",
  "/tai-khoan/mobifone-online"
);

export default function MobifoneOnlinePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="mobifoneOnline" />;
}
