import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "autopay",
  "/tai-khoan/autopay"
);

export default function AutoPayPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="autopay" />;
}
