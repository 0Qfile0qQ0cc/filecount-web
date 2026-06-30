import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ComparisonPageTemplate } from "@/components/knowledge/templates/ComparisonPageTemplate";
import {
  buildKnowledgeEntryMetadata,
  getKnowledgeEntryOrNotFound,
} from "@/lib/knowledge/metadata";
import { getAllKnowledgeSlugs, isComparisonEntry } from "@/lib/knowledge/registry";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllKnowledgeSlugs()
    .filter((item) => item.type === "comparison")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return buildKnowledgeEntryMetadata("comparison", slug, locale as Locale);
}

export default async function ComparisonPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = getKnowledgeEntryOrNotFound("comparison", slug);
  if (!entry || !isComparisonEntry(entry)) notFound();

  return <ComparisonPageTemplate locale={locale as Locale} entry={entry} />;
}
