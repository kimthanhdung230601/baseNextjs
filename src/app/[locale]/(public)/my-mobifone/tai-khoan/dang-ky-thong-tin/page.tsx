import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "registerInfo",
  "/tai-khoan/dang-ky-thong-tin"
);

export default function RegisterInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerInfo" />;
}
