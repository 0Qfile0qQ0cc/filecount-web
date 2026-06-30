import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

import {
  getEntryHref,
  getEntrySeo,
  getKnowledgeEntry,
} from "./registry";
import type { KnowledgeEntryType } from "./types";

export function buildKnowledgeEntryMetadata(
  type: KnowledgeEntryType,
  slug: string,
  locale: Locale,
) {
  const entry = getKnowledgeEntry(type, slug);
  if (!entry) return {};

  const seo = getEntrySeo(entry, locale);
  return buildMetadata({
    locale,
    pathname: getEntryHref(entry),
    title: seo.title,
    description: seo.description,
  });
}

export function getKnowledgeEntryOrNotFound(
  type: KnowledgeEntryType,
  slug: string,
) {
  return getKnowledgeEntry(type, slug) ?? null;
}
