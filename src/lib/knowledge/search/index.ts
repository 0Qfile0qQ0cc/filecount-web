import type { Locale } from "@/types/locale";

import {
  getAllKnowledgeSlugs,
  getEntryDescription,
  getEntryHref,
  getEntryTitle,
  KNOWLEDGE_ENTRIES,
} from "../registry";
import type { KnowledgeEntryType, SearchResult, SearchResultType } from "../types";

type SearchIndexItem = {
  slug: string;
  type: KnowledgeEntryType;
  title: string;
  description: string;
  href: string;
  categoryId: string;
  searchText: string;
};

function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

function buildSearchText(
  title: string,
  description: string,
  searchTerms: string[],
): string {
  return [title, description, ...searchTerms].join(" ").toLowerCase();
}

function buildIndex(locale: Locale): SearchIndexItem[] {
  return KNOWLEDGE_ENTRIES.map((entry) => {
    const title = getEntryTitle(entry, locale);
    const description = getEntryDescription(entry, locale);
    return {
      slug: entry.slug,
      type: entry.type,
      title,
      description,
      href: getEntryHref(entry),
      categoryId: entry.categoryId,
      searchText: buildSearchText(title, description, entry.searchTerms),
    };
  });
}

function toSearchResult(item: SearchIndexItem): SearchResult {
  return {
    slug: item.slug,
    type: item.type as SearchResultType,
    title: item.title,
    description: item.description,
    href: item.href,
    categoryId: item.categoryId,
  };
}

function scoreItem(item: SearchIndexItem, query: string): number {
  const normalized = normalizeQuery(query);
  if (!normalized) return 0;

  let score = 0;
  const titleLower = item.title.toLowerCase();

  if (titleLower === normalized) score += 100;
  if (titleLower.startsWith(normalized)) score += 50;
  if (item.searchText.includes(normalized)) score += 20;

  const tokens = normalized.split(/\s+/).filter(Boolean);
  for (const token of tokens) {
    if (titleLower.includes(token)) score += 10;
    if (item.searchText.includes(token)) score += 5;
  }

  return score;
}

export type SearchOptions = {
  type?: KnowledgeEntryType | "all";
  limit?: number;
};

export function searchKnowledge(
  query: string,
  locale: Locale,
  options: SearchOptions = {},
): SearchResult[] {
  const { type = "all", limit = 20 } = options;
  const normalized = normalizeQuery(query);

  if (!normalized) return [];

  const index = buildIndex(locale);

  return index
    .filter((item) => type === "all" || item.type === type)
    .map((item) => ({ item, score: scoreItem(item, normalized) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => toSearchResult(item));
}

export function getAutocompleteSuggestions(
  query: string,
  locale: Locale,
  limit = 8,
): SearchResult[] {
  return searchKnowledge(query, locale, { limit });
}

export function getSuggestedSearches(
  query: string,
  locale: Locale,
  limit = 5,
): SearchResult[] {
  const results = searchKnowledge(query, locale, { limit });
  if (results.length >= limit) return results;

  const index = buildIndex(locale);
  const normalized = normalizeQuery(query);
  const prefixMatches = index
    .filter(
      (item) =>
        item.title.toLowerCase().startsWith(normalized) &&
        !results.some((r) => r.slug === item.slug && r.type === item.type),
    )
    .slice(0, limit - results.length)
    .map(toSearchResult);

  return [...results, ...prefixMatches];
}

export function getRelatedSearches(
  entrySlug: string,
  entryType: KnowledgeEntryType,
  locale: Locale,
  limit = 6,
): SearchResult[] {
  const entry = KNOWLEDGE_ENTRIES.find(
    (item) => item.slug === entrySlug && item.type === entryType,
  );
  if (!entry) return [];

  const categoryMatches = KNOWLEDGE_ENTRIES.filter(
    (item) =>
      item.categoryId === entry.categoryId &&
      !(item.slug === entrySlug && item.type === entryType),
  )
    .slice(0, limit)
    .map((item) =>
      toSearchResult({
        slug: item.slug,
        type: item.type,
        title: getEntryTitle(item, locale),
        description: getEntryDescription(item, locale),
        href: getEntryHref(item),
        categoryId: item.categoryId,
        searchText: "",
      }),
    );

  return categoryMatches;
}

export function getAllSearchableEntries(locale: Locale): SearchResult[] {
  return buildIndex(locale).map(toSearchResult);
}

export { getAllKnowledgeSlugs };
