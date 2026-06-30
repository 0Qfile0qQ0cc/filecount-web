import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { GlossaryPageTemplate } from "@/components/knowledge/templates/GlossaryPageTemplate";
import {
  buildKnowledgeEntryMetadata,
  getKnowledgeEntryOrNotFound,
} from "@/lib/knowledge/metadata";
import { getAllKnowledgeSlugs, isGlossaryEntry } from "@/lib/knowledge/registry";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllKnowledgeSlugs()
    .filter((item) => item.type === "glossary")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return buildKnowledgeEntryMetadata("glossary", slug, locale as Locale);
}

export default async function GlossaryPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = getKnowledgeEntryOrNotFound("glossary", slug);
  if (!entry || !isGlossaryEntry(entry)) notFound();

  return <GlossaryPageTemplate locale={locale as Locale} entry={entry} />;
}
