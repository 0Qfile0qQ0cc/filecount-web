import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createFaqPageSchema,
  createServiceSchema,
  serializeStructuredData,
} from "@/lib/seo";
import type { Locale } from "@/types/locale";

import {
  DIGITAL_TRANSFORMATION_PATH,
  DT_FAQ_KEYS,
  getDigitalTransformationContent,
} from "./constants";

type DigitalTransformationStructuredDataProps = {
  locale: Locale;
};

export function DigitalTransformationStructuredData({
  locale,
}: DigitalTransformationStructuredDataProps) {
  const content = getDigitalTransformationContent(locale);
  const pageUrl = buildLocaleUrl(locale, DIGITAL_TRANSFORMATION_PATH);

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
      DT_FAQ_KEYS.map((key) => ({
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
