import {
  buildLocaleUrl,
  createBreadcrumbSchema,
  createFaqPageSchema,
  createWebPageSchema,
  serializeStructuredData,
} from "@/lib/seo";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

import type { BreadcrumbItem } from "./KnowledgeBreadcrumb";

type KnowledgeStructuredDataProps = {
  locale: Locale;
  pageName: string;
  pageDescription: string;
  pathname: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: Array<{ question: string; answer: string }>;
};

export function KnowledgeStructuredData({
  locale,
  pageName,
  pageDescription,
  pathname,
  breadcrumbs,
  faqs,
}: KnowledgeStructuredDataProps) {
  const ui = getKnowledgeUiContent(locale).breadcrumb;
  const pageUrl = buildLocaleUrl(locale, pathname);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: ui.home, url: buildLocaleUrl(locale, "/") },
    { name: ui.knowledge, url: buildLocaleUrl(locale, "/knowledge-center") },
    ...breadcrumbs.map((item) => ({
      name: item.label,
      url: item.href ? buildLocaleUrl(locale, item.href) : pageUrl,
    })),
  ]);

  const schemas: Array<
    ReturnType<typeof createBreadcrumbSchema> | ReturnType<typeof createWebPageSchema> | ReturnType<typeof createFaqPageSchema>
  > = [
    breadcrumbSchema,
    createWebPageSchema({
      name: pageName,
      description: pageDescription,
      url: pageUrl,
      locale,
    }),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(createFaqPageSchema(faqs));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(schemas) }}
    />
  );
}
