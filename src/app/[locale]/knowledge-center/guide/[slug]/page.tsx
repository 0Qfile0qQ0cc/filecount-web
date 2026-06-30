import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { GuidePageTemplate } from "@/components/knowledge/templates/GuidePageTemplate";
import {
  buildKnowledgeEntryMetadata,
  getKnowledgeEntryOrNotFound,
} from "@/lib/knowledge/metadata";
import { getAllKnowledgeSlugs, isGuideEntry } from "@/lib/knowledge/registry";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllKnowledgeSlugs()
    .filter((item) => item.type === "guide")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return buildKnowledgeEntryMetadata("guide", slug, locale as Locale);
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = getKnowledgeEntryOrNotFound("guide", slug);
  if (!entry || !isGuideEntry(entry)) notFound();

  return <GuidePageTemplate locale={locale as Locale} entry={entry} />;
}
