import { createSegmentMetadata } from "@/lib/seo/create-page-metadata";
import type { PageProps } from "@/types/interfaces/common";
import MbfAccordion from "@/shared/components/accordion";
import SegmentPage from "@/shared/layout/segment-page";
import { ROUTES } from "@/constants/route";

export const generateMetadata = createSegmentMetadata(
  "faq",
  ROUTES.PERSONAL.CUSTOMER_SUPPORT.FAQ
);

export default function FaqPage({ params }: PageProps) {
  return (
    <SegmentPage
      params={params}
      translationKey="faq"
      breadcrumbSegments={[
        { labelSource: "subHeader.customerSupport" },
        { labelSource: "subHeader.faq" },
      ]}
    >
      <MbfAccordion
        className="max-w-lg"
        accordionItems={[
          { 
            value: "shipping",
            trigger: "What are your shipping options?",
            content: "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders."
          },
          { 
            value: "returns",
            trigger: "What is your return policy?",
            content: "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days."
          },
          { 
            value: "support",
            trigger: "How can I contact customer support?",
            content: " Reach us via email, live chat, or phone. We respond within 24 hours during business days."
          }
        ]}
      />
    </SegmentPage>
  );
}
