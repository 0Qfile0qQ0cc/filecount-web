import type { Locale } from "@/types/locale";

import type {
  KnowledgeAeoContent,
  KnowledgeFaqItem,
  KnowledgeLinkRef,
  TechnologyContent,
  TechnologyEntry,
} from "../../types";

type TechnologySeed = {
  slug: string;
  categoryId: string;
  searchTerms: string[];
  comparisonSlugs?: string[];
  en: Omit<
    TechnologyContent,
    "relatedTechnologies" | "relatedVendors" | "comparisonSlugs"
  > & {
    relatedTechnologies: KnowledgeLinkRef[];
    relatedVendors: KnowledgeLinkRef[];
  };
  ar: Omit<
    TechnologyContent,
    "relatedTechnologies" | "relatedVendors" | "comparisonSlugs"
  > & {
    relatedTechnologies: KnowledgeLinkRef[];
    relatedVendors: KnowledgeLinkRef[];
  };
};

export function createTechnologyEntry(seed: TechnologySeed): TechnologyEntry {
  const build = (_locale: Locale, data: TechnologySeed["en"]): TechnologyContent => ({
    ...data,
    comparisonSlugs: seed.comparisonSlugs ?? [],
  });

  return {
    type: "technology",
    slug: seed.slug,
    categoryId: seed.categoryId,
    searchTerms: seed.searchTerms,
    content: {
      en: build("en", seed.en),
      ar: build("ar", seed.ar),
    },
  };
}

export type { KnowledgeAeoContent, KnowledgeFaqItem, KnowledgeLinkRef };
