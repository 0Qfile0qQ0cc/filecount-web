import type { Locale } from "@/types/locale";

export const KNOWLEDGE_ENTRY_TYPES = [
  "technology",
  "vendor",
  "comparison",
  "guide",
  "glossary",
] as const;

export type KnowledgeEntryType = (typeof KNOWLEDGE_ENTRY_TYPES)[number];

export type ComparisonKind = "technology" | "vendor" | "product";

export type KnowledgeSeo = {
  title: string;
  description: string;
};

export type KnowledgeFaqItem = {
  question: string;
  answer: string;
};

export type KnowledgeLinkRef = {
  slug: string;
  label: string;
};

export type KnowledgeAeoContent = {
  alternatives: string;
  howToChoose: string;
  commonMistakes: string[];
  implementationChecklist: string[];
};

export type TechnologyContent = {
  title: string;
  seo: KnowledgeSeo;
  whatIsIt: string;
  businessPurpose: string;
  benefits: string[];
  challenges: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  implementationOverview: string;
  faqs: KnowledgeFaqItem[];
  relatedTechnologies: KnowledgeLinkRef[];
  relatedVendors: KnowledgeLinkRef[];
  comparisonSlugs: string[];
  decisionChecklist: string[];
  aeo: KnowledgeAeoContent;
};

export type TechnologyEntry = {
  type: "technology";
  slug: string;
  categoryId: string;
  searchTerms: string[];
  content: Record<Locale, TechnologyContent>;
};

export type VendorContent = {
  title: string;
  seo: KnowledgeSeo;
  overview: string;
  focusAreas: string[];
  typicalCustomers: string[];
  deploymentOptions: string[];
  strengths: string[];
  considerations: string[];
  relatedTechnologies: KnowledgeLinkRef[];
  relatedComparisons: KnowledgeLinkRef[];
  faqs: KnowledgeFaqItem[];
  aeo: KnowledgeAeoContent;
};

export type VendorEntry = {
  type: "vendor";
  slug: string;
  categoryId: string;
  searchTerms: string[];
  content: Record<Locale, VendorContent>;
};

export type ComparisonDimensionValue = {
  label: string;
  entityA: string;
  entityB: string;
};

export type ComparisonContent = {
  title: string;
  seo: KnowledgeSeo;
  introduction: string;
  entityALabel: string;
  entityBLabel: string;
  dimensions: ComparisonDimensionValue[];
  typicalUseCases: ComparisonDimensionValue;
  strengths: ComparisonDimensionValue;
  challenges: ComparisonDimensionValue;
  neutralSummary: string;
  relatedComparisons: KnowledgeLinkRef[];
  faqs: KnowledgeFaqItem[];
};

export type ComparisonEntry = {
  type: "comparison";
  slug: string;
  categoryId: string;
  comparisonKind: ComparisonKind;
  entityASlug: string;
  entityBSlug: string;
  searchTerms: string[];
  content: Record<Locale, ComparisonContent>;
};

export type GuideStep = {
  title: string;
  description: string;
};

export type GuideTechnologyRef = {
  slug: string;
  label: string;
  reason: string;
};

export type GuideContent = {
  title: string;
  seo: KnowledgeSeo;
  problemStatement: string;
  introduction: string;
  steps: GuideStep[];
  recommendedTechnologies: GuideTechnologyRef[];
  decisionFactors: string[];
  faqs: KnowledgeFaqItem[];
  aeo: KnowledgeAeoContent;
};

export type GuideEntry = {
  type: "guide";
  slug: string;
  categoryId: string;
  searchTerms: string[];
  content: Record<Locale, GuideContent>;
};

export type GlossaryContent = {
  term: string;
  seo: KnowledgeSeo;
  definition: string;
  extendedExplanation: string;
  relatedTerms: KnowledgeLinkRef[];
  relatedTechnologies: KnowledgeLinkRef[];
  faqs: KnowledgeFaqItem[];
};

export type GlossaryEntry = {
  type: "glossary";
  slug: string;
  categoryId: string;
  searchTerms: string[];
  content: Record<Locale, GlossaryContent>;
};

export type KnowledgeEntry =
  | TechnologyEntry
  | VendorEntry
  | ComparisonEntry
  | GuideEntry
  | GlossaryEntry;

export type SearchResultType =
  | KnowledgeEntryType
  | "question"
  | "faq";

export type SearchResult = {
  slug: string;
  type: SearchResultType;
  title: string;
  description: string;
  href: string;
  categoryId?: string;
};

export type DecisionAssistantInput = {
  industry: string;
  employees: string;
  branches: string;
  currentSystems: string[];
  currentChallenges: string[];
  growthPlans: string;
  cloudPreference: "cloud" | "hybrid" | "on-premises" | "undecided";
  needs: {
    erp: boolean;
    crm: boolean;
    dms: boolean;
    workflow: boolean;
    cybersecurity: boolean;
  };
};

export type DecisionRecommendation = {
  technologySlug: string;
  technologyLabel: string;
  reason: string;
  priority: "high" | "medium" | "low";
};

export type DecisionAssistantResult = {
  recommendations: DecisionRecommendation[];
  summary: string;
  nextSteps: string[];
};
