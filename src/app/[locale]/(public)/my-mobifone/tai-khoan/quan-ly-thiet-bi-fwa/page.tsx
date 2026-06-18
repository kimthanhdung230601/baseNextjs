import { SegmentPage } from "@/shared/layout/segment-page";

import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createSegmentMetadata(
  "fwaManagement",
  "/tai-khoan/quan-ly-thiet-bi-fwa"
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function FwaManagementPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="fwaManagement" />;
}
