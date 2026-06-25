import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "accountInfo",
  ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION.ACCOUNT_INFO
);

export default function AccountInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountInfo" />;
}
