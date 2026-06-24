import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "myPoint",
  "/tai-khoan/lich-su-mypoint"
);

export default function MyPointPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="myPoint" />;
}
