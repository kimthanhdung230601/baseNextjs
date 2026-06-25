import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import { ROUTES } from "@/constants/route";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "registerInfo",
  ROUTES.PERSONAL.MY_MOBIFONE.ACCOUNT_INFORMATION.REGISTER_INFO
);

export default function RegisterInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerInfo" />;
}
