import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createFaqPageSchema,
  createOrganizationSchema,
  createServiceSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import {
  getTechnologyConsultingContent,
  TC_FAQ_KEYS,
  TECHNOLOGY_CONSULTING_PATH,
} from "./constants";

type TechnologyConsultingStructuredDataProps = {
  locale: Locale;
};

export function TechnologyConsultingStructuredData({
  locale,
}: TechnologyConsultingStructuredDataProps) {
  const content = getTechnologyConsultingContent(locale);
  const pageUrl = buildLocaleUrl(locale, TECHNOLOGY_CONSULTING_PATH);

  const schema = [
    createOrganizationSchema(locale),
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
      TC_FAQ_KEYS.map((key) => ({
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
