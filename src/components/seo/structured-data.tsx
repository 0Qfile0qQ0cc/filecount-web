import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebSiteSchema,
  serializeStructuredData,
} from "@/lib/seo";
import { locales } from "@/types/locale";
import type { Locale } from "@/types/locale";

type StructuredDataProps = {
  locale: Locale;
};

export function StructuredData({ locale }: StructuredDataProps) {
  const schema = [
    createOrganizationSchema(locale),
    createLocalBusinessSchema(locale),
    createWebSiteSchema(locale, locales),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }}
    />
  );
}
