import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "topUp",
  "/tai-khoan/nap-tien"
);

export default function TopUpPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="topUp" />;
}
