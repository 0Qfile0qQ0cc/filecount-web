import type { KnowledgeEntryType } from "./types";

export const KNOWLEDGE_BASE_PATH = "/knowledge-center";

const TYPE_SEGMENTS: Record<KnowledgeEntryType, string> = {
  technology: "technology",
  vendor: "vendor",
  comparison: "compare",
  guide: "guide",
  glossary: "glossary",
};

export function knowledgeEntryPath(
  type: KnowledgeEntryType,
  slug: string,
): string {
  return `${KNOWLEDGE_BASE_PATH}/${TYPE_SEGMENTS[type]}/${slug}`;
}

export function knowledgeCategoryPath(categorySlug: string): string {
  return `${KNOWLEDGE_BASE_PATH}/category/${categorySlug}`;
}

export function knowledgeSearchPath(query?: string): string {
  if (!query?.trim()) {
    return `${KNOWLEDGE_BASE_PATH}/search`;
  }
  return `${KNOWLEDGE_BASE_PATH}/search?q=${encodeURIComponent(query.trim())}`;
}

export function knowledgeDecisionAssistantPath(): string {
  return `${KNOWLEDGE_BASE_PATH}/decision-assistant`;
}
