import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createOrganizationSchema,
  createWebPageSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import { CONTACT_PATH, getContactContent } from "./constants";

type ContactStructuredDataProps = {
  locale: Locale;
};

export function ContactStructuredData({ locale }: ContactStructuredDataProps) {
  const content = getContactContent(locale);
  const pageUrl = buildLocaleUrl(locale, CONTACT_PATH);

  const schema = [
    createOrganizationSchema(locale),
    createBreadcrumbSchema([
      {
        name: content.schema.breadcrumbHome,
        url: buildLocaleUrl(locale, "/"),
      },
      {
        name: content.schema.breadcrumbCurrent,
        url: pageUrl,
      },
    ]),
    createWebPageSchema({
      name: content.schema.pageName,
      description: content.schema.pageDescription,
      url: pageUrl,
      locale,
    }),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }}
    />
  );
}
