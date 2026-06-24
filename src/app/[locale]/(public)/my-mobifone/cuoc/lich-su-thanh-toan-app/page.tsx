import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "billWebApp",
  "/cuoc/lich-su-thanh-toan-app"
);

export default function BillWebAppPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="billWebApp" />;
}
