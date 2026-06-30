import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createFaqPageSchema,
  createServiceSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import {
  ENTERPRISE_PLATFORMS_PATH,
  FAQ_KEYS,
  getEnterprisePlatformsContent,
} from "./constants";

type EnterprisePlatformsStructuredDataProps = {
  locale: Locale;
};

export function EnterprisePlatformsStructuredData({
  locale,
}: EnterprisePlatformsStructuredDataProps) {
  const content = getEnterprisePlatformsContent(locale);
  const pageUrl = buildLocaleUrl(locale, ENTERPRISE_PLATFORMS_PATH);

  const schema = [
    createBreadcrumbSchema([
      {
        name: content.schema.breadcrumbHome,
        url: buildLocaleUrl(locale, "/"),
      },
      {
        name: content.schema.breadcrumbSolutions,
        url: buildLocaleUrl(locale, "/solutions/platform-development"),
      },
      {
        name: content.schema.breadcrumbCurrent,
        url: pageUrl,
      },
    ]),
    createServiceSchema({
      name: content.schema.serviceName,
      description: content.schema.serviceDescription,
      url: pageUrl,
      locale,
    }),
    createFaqPageSchema(
      FAQ_KEYS.map((key) => ({
        question: content.faq.items[key].question,
        answer: content.faq.items[key].answer,
      })),
    ),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }}
    />
  );
}
