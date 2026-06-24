import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "fwaManagement",
  "/tai-khoan/quan-ly-thiet-bi-fwa"
);

export default function FwaManagementPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="fwaManagement" />;
}
