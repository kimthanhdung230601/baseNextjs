import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "fwaManagement",
  ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION.FWA_MANAGEMENT
);

export default function FwaManagementPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="fwaManagement" />;
}
