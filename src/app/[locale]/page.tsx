import { createPageMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import SegmentPage from "@/shared/layout/segment-page";

export const generateMetadata = createPageMetadata({
  path: "",
  namespace: "pages.home",
});

export default async function HomePage({ params }: PageProps) {
  return <SegmentPage params={params} translationKey="home" />
}
