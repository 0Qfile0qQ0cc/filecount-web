import { comparisonEntries } from "./entries/comparisons/erp-vs-crm";
import { erpEntry } from "./entries/technologies/erp";
import {
  crmEntry,
  dmsEntry,
  ecmEntry,
  hrmsEntry,
  workflowEntry,
} from "./entries/technologies";
import { glossaryEntries } from "./entries/glossary";
import { guideEntries } from "./entries/guides";
import { vendorEntries } from "./entries/vendors";
import type {
  KnowledgeEntry,
  KnowledgeEntryType,
  TechnologyEntry,
  VendorEntry,
  ComparisonEntry,
  GuideEntry,
  GlossaryEntry,
} from "./types";
import { knowledgeEntryPath } from "./paths";
import type { Locale } from "@/types/locale";

export const KNOWLEDGE_ENTRIES: KnowledgeEntry[] = [
  erpEntry,
  crmEntry,
  dmsEntry,
  ecmEntry,
  hrmsEntry,
  workflowEntry,
  ...vendorEntries,
  ...comparisonEntries,
  ...guideEntries,
  ...glossaryEntries,
];

const entryByKey = new Map<string, KnowledgeEntry>(
  KNOWLEDGE_ENTRIES.map((entry) => [`${entry.type}:${entry.slug}`, entry]),
);

export function getKnowledgeEntry(
  type: KnowledgeEntryType,
  slug: string,
): KnowledgeEntry | undefined {
  return entryByKey.get(`${type}:${slug}`);
}

export function getAllKnowledgeSlugs(): Array<{ type: KnowledgeEntryType; slug: string }> {
  return KNOWLEDGE_ENTRIES.map((entry) => ({ type: entry.type, slug: entry.slug }));
}

export function getEntriesByCategory(categoryId: string): KnowledgeEntry[] {
  return KNOWLEDGE_ENTRIES.filter((entry) => entry.categoryId === categoryId);
}

export function getEntriesByType(type: KnowledgeEntryType): KnowledgeEntry[] {
  return KNOWLEDGE_ENTRIES.filter((entry) => entry.type === type);
}

export function getEntryTitle(entry: KnowledgeEntry, locale: Locale): string {
  switch (entry.type) {
    case "technology":
      return entry.content[locale].title;
    case "vendor":
      return entry.content[locale].title;
    case "comparison":
      return entry.content[locale].title;
    case "guide":
      return entry.content[locale].title;
    case "glossary":
      return entry.content[locale].term;
    default: {
      const _exhaustive: never = entry;
      return _exhaustive;
    }
  }
}

export function getEntryDescription(entry: KnowledgeEntry, locale: Locale): string {
  switch (entry.type) {
    case "technology":
      return entry.content[locale].seo.description;
    case "vendor":
      return entry.content[locale].seo.description;
    case "comparison":
      return entry.content[locale].seo.description;
    case "guide":
      return entry.content[locale].seo.description;
    case "glossary":
      return entry.content[locale].seo.description;
    default: {
      const _exhaustive: never = entry;
      return _exhaustive;
    }
  }
}

export function getEntrySeo(entry: KnowledgeEntry, locale: Locale) {
  switch (entry.type) {
    case "glossary":
      return entry.content[locale].seo;
    default:
      return entry.content[locale].seo;
  }
}

export function getEntryHref(entry: KnowledgeEntry): string {
  return knowledgeEntryPath(entry.type, entry.slug);
}

export function isTechnologyEntry(entry: KnowledgeEntry): entry is TechnologyEntry {
  return entry.type === "technology";
}

export function isVendorEntry(entry: KnowledgeEntry): entry is VendorEntry {
  return entry.type === "vendor";
}

export function isComparisonEntry(entry: KnowledgeEntry): entry is ComparisonEntry {
  return entry.type === "comparison";
}

export function isGuideEntry(entry: KnowledgeEntry): entry is GuideEntry {
  return entry.type === "guide";
}

export function isGlossaryEntry(entry: KnowledgeEntry): entry is GlossaryEntry {
  return entry.type === "glossary";
}

export function getKnowledgeSitemapPaths(): string[] {
  const entryPaths = KNOWLEDGE_ENTRIES.map((entry) => getEntryHref(entry));
  const categoryPaths = [
    "/knowledge-center/search",
    "/knowledge-center/decision-assistant",
    ...new Set(KNOWLEDGE_ENTRIES.map((e) => `/knowledge-center/category/${e.categoryId}`)),
  ];
  return [...categoryPaths, ...entryPaths];
}
