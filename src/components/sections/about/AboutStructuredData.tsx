import {
  buildLocaleUrl,
  createAboutPageSchema,
  createBreadcrumbSchema,
  createOrganizationSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import { ABOUT_PATH, getAboutContent } from "./constants";

type AboutStructuredDataProps = {
  locale: Locale;
};

export function AboutStructuredData({ locale }: AboutStructuredDataProps) {
  const content = getAboutContent(locale);
  const pageUrl = buildLocaleUrl(locale, ABOUT_PATH);

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
    createAboutPageSchema({
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
