import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createOrganizationSchema,
  createWebPageSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import { CAREERS_PATH, getCareersContent } from "./constants";

type CareersStructuredDataProps = {
  locale: Locale;
};

export function CareersStructuredData({ locale }: CareersStructuredDataProps) {
  const content = getCareersContent(locale);
  const pageUrl = buildLocaleUrl(locale, CAREERS_PATH);

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
