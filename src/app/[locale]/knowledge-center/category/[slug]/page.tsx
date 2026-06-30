import { setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";

import { KnowledgeCategoryPageContent } from "@/components/knowledge/category/KnowledgeCategoryPageContent";
import { KnowledgeBreadcrumb } from "@/components/knowledge/layout/KnowledgeBreadcrumb";
import { Footer } from "@/components/sections/footer";
import { KNOWLEDGE_CATEGORIES, getCategoryBySlug } from "@/lib/knowledge/categories";
import { knowledgeDecisionAssistantPath } from "@/lib/knowledge/paths";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return KNOWLEDGE_CATEGORIES.filter((c) => c.id !== "decision-assistant").map(
    (category) => ({ slug: category.slug }),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMetadata({
    locale: locale as Locale,
    pathname: `/knowledge-center/category/${slug}`,
    title: `${category.content[locale as Locale].title} | FileCount Knowledge`,
    description: category.content[locale as Locale].description,
  });
}

export default async function KnowledgeCategoryPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (slug === "decision-assistant") {
    redirect(knowledgeDecisionAssistantPath());
  }

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const typedLocale = locale as Locale;

  return (
    <main id="main-content" className="bg-[var(--site-background)]">
      <div className="knowledge-container py-8">
        <KnowledgeBreadcrumb
          locale={typedLocale}
          items={[{ label: category.content[typedLocale].title }]}
        />
        <KnowledgeCategoryPageContent locale={typedLocale} categorySlug={slug} />
      </div>
      <Footer />
    </main>
  );
}
