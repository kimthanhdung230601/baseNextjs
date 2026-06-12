import { SITE_NAME, SITE_URL } from "@/constants/seo";

interface JsonLdProps {
  locale: string;
  description: string;
}

export function JsonLd({ locale, description }: JsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "1800-1090",
      contactType: "customer service",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
