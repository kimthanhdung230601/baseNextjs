import SegmentPage from "@/shared/layout/segment-page";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";

export const generateMetadata = createSegmentMetadata(
  "registerNetwork",
  "/dich-vu-di-dong/dang-ky-hoa-mang"
);

export default function RegisterNetworkPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerNetwork" />;
}
