import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { VendorPageTemplate } from "@/components/knowledge/templates/VendorPageTemplate";
import {
  buildKnowledgeEntryMetadata,
  getKnowledgeEntryOrNotFound,
} from "@/lib/knowledge/metadata";
import { getAllKnowledgeSlugs, isVendorEntry } from "@/lib/knowledge/registry";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllKnowledgeSlugs()
    .filter((item) => item.type === "vendor")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return buildKnowledgeEntryMetadata("vendor", slug, locale as Locale);
}

export default async function VendorPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = getKnowledgeEntryOrNotFound("vendor", slug);
  if (!entry || !isVendorEntry(entry)) notFound();

  return <VendorPageTemplate locale={locale as Locale} entry={entry} />;
}
