import { setRequestLocale } from "next-intl/server";

import { KnowledgeBreadcrumb } from "@/components/knowledge/layout/KnowledgeBreadcrumb";
import { KnowledgeSearchBox } from "@/components/knowledge/search/KnowledgeSearchBox";
import { KnowledgeSearchResults } from "@/components/knowledge/search/KnowledgeSearchResults";
import { Footer } from "@/components/sections/footer";
import { searchKnowledge } from "@/lib/knowledge/search";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { q } = await searchParams;
  setRequestLocale(locale);
  const ui = getKnowledgeUiContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: "/knowledge-center/search",
    title: q ? `${ui.search.resultsFor} ${q} | ${ui.brand.title}` : ui.search.button,
    description: ui.search.placeholder,
  });
}

export default async function KnowledgeSearchPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { q = "" } = await searchParams;
  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const results = q ? searchKnowledge(q, typedLocale) : [];

  return (
    <main id="main-content" className="bg-[var(--site-background)]">
      <div className="knowledge-container py-8">
        <KnowledgeBreadcrumb
          locale={typedLocale}
          items={[{ label: getKnowledgeUiContent(typedLocale).search.button }]}
        />
        <div className="mt-6 max-w-3xl">
          <KnowledgeSearchBox defaultQuery={q} autoFocus />
        </div>
        <KnowledgeSearchResults locale={typedLocale} query={q} results={results} />
      </div>
      <Footer />
    </main>
  );
}
