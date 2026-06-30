import type { Locale } from "@/types/locale";

import { knowledgeCategoryPath, knowledgeDecisionAssistantPath } from "./paths";

export type KnowledgeCategoryId =
  | "enterprise-platforms"
  | "infrastructure"
  | "networking"
  | "cybersecurity"
  | "cloud"
  | "artificial-intelligence"
  | "business-applications"
  | "enterprise-vendors"
  | "technology-comparisons"
  | "buying-guides"
  | "technology-glossary";

export type KnowledgeCategory = {
  id: KnowledgeCategoryId | "decision-assistant";
  slug: string;
  entryTypes: Array<"technology" | "vendor" | "comparison" | "guide" | "glossary">;
  content: Record<
    Locale,
    {
      title: string;
      description: string;
    }
  >;
  href: string;
};

const CATEGORY_CONTENT: Record<
  KnowledgeCategoryId,
  KnowledgeCategory["content"]
> = {
  "enterprise-platforms": {
    en: {
      title: "Enterprise Platforms",
      description:
        "ERP, CRM, HRMS, DMS and core systems that run your organization.",
    },
    ar: {
      title: "المنصات المؤسسية",
      description: "أنظمة ERP وCRM وHRMS وDMS والأنظمة الأساسية التي تدير منشأتك.",
    },
  },
  infrastructure: {
    en: {
      title: "Infrastructure",
      description: "Servers, storage, virtualization and data center foundations.",
    },
    ar: {
      title: "البنية التحتية",
      description: "الخوادم والتخزين والمحاكاة الافتراضية وأساسات مراكز البيانات.",
    },
  },
  networking: {
    en: {
      title: "Networking",
      description: "Enterprise networking, connectivity and network security.",
    },
    ar: {
      title: "الشبكات",
      description: "شبكات المؤسسات والاتصال وأمن الشبكات.",
    },
  },
  cybersecurity: {
    en: {
      title: "Cybersecurity",
      description: "Protect systems, data and users across your organization.",
    },
    ar: {
      title: "الأمن السيبراني",
      description: "حماية الأنظمة والبيانات والمستخدمين في منشأتك.",
    },
  },
  cloud: {
    en: {
      title: "Cloud",
      description: "Azure, AWS, hybrid cloud and cloud migration strategies.",
    },
    ar: {
      title: "الحوسبة السحابية",
      description: "Azure وAWS والسحابة الهجينة واستراتيجيات الترحيل السحابي.",
    },
  },
  "artificial-intelligence": {
    en: {
      title: "Artificial Intelligence",
      description: "AI use cases, readiness and enterprise adoption guidance.",
    },
    ar: {
      title: "الذكاء الاصطناعي",
      description: "حالات استخدام الذكاء الاصطناعي والجاهزية وإرشادات التبني المؤسسي.",
    },
  },
  "business-applications": {
    en: {
      title: "Business Applications",
      description: "Workflow, ECM, digital signature and line-of-business tools.",
    },
    ar: {
      title: "تطبيقات الأعمال",
      description: "سير العمل وECM والتوقيع الرقمي وأدوات خطوط الأعمال.",
    },
  },
  "enterprise-vendors": {
    en: {
      title: "Enterprise Vendors",
      description: "Oracle, SAP, Microsoft, Cisco, Fortinet and leading vendors.",
    },
    ar: {
      title: "مزودو المؤسسات",
      description: "Oracle وSAP وMicrosoft وCisco وFortinet والمزودون الرائدون.",
    },
  },
  "technology-comparisons": {
    en: {
      title: "Technology Comparisons",
      description: "Neutral side-by-side comparisons to support informed decisions.",
    },
    ar: {
      title: "مقارنات التقنيات",
      description: "مقارنات محايدة جنباً إلى جنب لدعم قرارات مستنيرة.",
    },
  },
  "buying-guides": {
    en: {
      title: "Buying Guides",
      description: "From business problem to the right technology direction.",
    },
    ar: {
      title: "أدلة الشراء",
      description: "من مشكلة الأعمال إلى التوجه التقني المناسب.",
    },
  },
  "technology-glossary": {
    en: {
      title: "Technology Glossary",
      description: "Clear definitions of enterprise technology terms.",
    },
    ar: {
      title: "مسرد التقنية",
      description: "تعريفات واضحة لمصطلحات التقنية المؤسسية.",
    },
  },
};

function buildCategory(
  id: KnowledgeCategoryId,
  entryTypes: KnowledgeCategory["entryTypes"],
): KnowledgeCategory {
  return {
    id,
    slug: id,
    entryTypes,
    content: CATEGORY_CONTENT[id],
    href: knowledgeCategoryPath(id),
  };
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  buildCategory("enterprise-platforms", ["technology", "guide"]),
  buildCategory("infrastructure", ["technology", "guide"]),
  buildCategory("networking", ["technology", "guide"]),
  buildCategory("cybersecurity", ["technology", "guide"]),
  buildCategory("cloud", ["technology", "guide"]),
  buildCategory("artificial-intelligence", ["technology", "guide"]),
  buildCategory("business-applications", ["technology", "guide"]),
  buildCategory("enterprise-vendors", ["vendor"]),
  buildCategory("technology-comparisons", ["comparison"]),
  buildCategory("buying-guides", ["guide"]),
  buildCategory("technology-glossary", ["glossary"]),
  {
    id: "decision-assistant",
    slug: "decision-assistant",
    entryTypes: [],
    content: {
      en: {
        title: "Decision Assistant",
        description:
          "Assess your organization and get vendor-neutral technology direction.",
      },
      ar: {
        title: "مساعد القرار",
        description: "قيّم منشأتك واحصل على توجه تقني محايد دون توصية بمزود محدد.",
      },
    },
    href: knowledgeDecisionAssistantPath(),
  },
];

export function getCategoryBySlug(slug: string): KnowledgeCategory | undefined {
  return KNOWLEDGE_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryLabel(
  categoryId: string,
  locale: Locale,
): string {
  const category = KNOWLEDGE_CATEGORIES.find((item) => item.id === categoryId);
  return category?.content[locale].title ?? categoryId;
}
