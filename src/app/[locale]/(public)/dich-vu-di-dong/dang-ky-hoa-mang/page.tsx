import SegmentPage from "@/shared/layout/segment-page";
import { ROUTES } from "@/constants/route";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";

export const generateMetadata = createSegmentMetadata(
  "registerNetwork",
  ROUTES.PERSONAL.MOBILE_SERVICES.REGISTER_NETWORK
);

export default function RegisterNetworkPage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="registerNetwork" />;
}
