import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { TechnologyPageTemplate } from "@/components/knowledge/templates/TechnologyPageTemplate";
import {
  buildKnowledgeEntryMetadata,
  getKnowledgeEntryOrNotFound,
} from "@/lib/knowledge/metadata";
import { getAllKnowledgeSlugs, isTechnologyEntry } from "@/lib/knowledge/registry";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllKnowledgeSlugs()
    .filter((item) => item.type === "technology")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return buildKnowledgeEntryMetadata("technology", slug, locale as Locale);
}

export default async function TechnologyPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = getKnowledgeEntryOrNotFound("technology", slug);
  if (!entry || !isTechnologyEntry(entry)) notFound();

  return <TechnologyPageTemplate locale={locale as Locale} entry={entry} />;
}
