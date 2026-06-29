import { ROUTES } from "@/constants/route";
import SegmentPage from "@/shared/layout/segment-page";

import type { PageProps } from "@/types/interfaces/common";
import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";

import TelecommunicationsSearchDemo from "./telecommunications-search-demo";

export const generateMetadata = createSegmentMetadata(
  "telecommunications",
  ROUTES.BUSINESS.TELECOMMUNICATIONS
);

export default function TelecommunicationsPage({ params }: PageProps) {
  return (
    <SegmentPage params={params} translationKey="telecommunications">
      <TelecommunicationsSearchDemo />
    </SegmentPage>
  );
}
