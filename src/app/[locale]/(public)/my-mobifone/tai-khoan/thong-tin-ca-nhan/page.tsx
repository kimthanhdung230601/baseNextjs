import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "accountDetails",
  ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION.ACCOUNT_DETAILS
);

export default function AccountDetailsPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountDetails" />;
}
