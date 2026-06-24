import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createSegmentMetadata(
  "accountInfo",
  "/tai-khoan/thong-tin-tai-khoan"
);

export default function AccountInfoPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="accountInfo" />;
}
