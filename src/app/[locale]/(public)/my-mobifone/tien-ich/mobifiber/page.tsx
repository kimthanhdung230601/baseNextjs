import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "mobifiber",
  "/tai-khoan/mobifiber"
);

export default function MobifiberPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="mobifiber" />;
}
