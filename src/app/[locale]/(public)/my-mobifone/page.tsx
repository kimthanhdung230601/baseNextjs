import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "myMobifone",
  "/my-mobifone"
);

export default function MyMobifonePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="myMobifone" />;
}
