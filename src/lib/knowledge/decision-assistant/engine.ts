import type { Locale } from "@/types/locale";

import { getEntryTitle, KNOWLEDGE_ENTRIES } from "../registry";
import type {
  DecisionAssistantInput,
  DecisionAssistantResult,
  DecisionRecommendation,
} from "../types";
import { getKnowledgeUiContent } from "../ui-content";

type RecommendationSeed = {
  technologySlug: string;
  priority: DecisionRecommendation["priority"];
  reasonEn: string;
  reasonAr: string;
};

function addRecommendation(
  list: RecommendationSeed[],
  seed: RecommendationSeed,
): void {
  if (list.some((item) => item.technologySlug === seed.technologySlug)) return;
  list.push(seed);
}

export function evaluateDecision(
  input: DecisionAssistantInput,
  locale: Locale,
): DecisionAssistantResult {
  const ui = getKnowledgeUiContent(locale).decisionAssistant;
  const seeds: RecommendationSeed[] = [];

  if (input.needs.erp) {
    addRecommendation(seeds, {
      technologySlug: "erp",
      priority: "high",
      reasonEn:
        "You indicated finance and operations unification needs — ERP is the primary technology direction to evaluate.",
      reasonAr: "أشرت إلى حاجة توحيد المالية والعمليات — ERP التوجه التقني الأساسي للتقييم.",
    });
  }

  if (input.needs.crm) {
    addRecommendation(seeds, {
      technologySlug: "crm",
      priority: "high",
      reasonEn:
        "Customer and pipeline management needs point to CRM as a technology area to assess.",
      reasonAr: "احتياجات إدارة العملاء و pipeline تشير إلى CRM كمجال تقني للتقييم.",
    });
  }

  if (input.needs.dms) {
    addRecommendation(seeds, {
      technologySlug: "dms",
      priority: "high",
      reasonEn:
        "Document management requirements suggest evaluating DMS — and ECM if governance scope is broader.",
      reasonAr: "متطلبات إدارة المستندات تقترح تقييم DMS — وECM إذا نطاق الحوكمة أوسع.",
    });
  }

  if (input.needs.workflow) {
    addRecommendation(seeds, {
      technologySlug: "workflow",
      priority: "medium",
      reasonEn:
        "Workflow automation can reduce manual approvals and integrate with documents and ERP.",
      reasonAr: "أتمتة سير العمل تقلل الموافقات اليدوية وتتكامل مع المستندات وERP.",
    });
  }

  if (input.needs.cybersecurity) {
    addRecommendation(seeds, {
      technologySlug: "cybersecurity",
      priority: "high",
      reasonEn:
        "Cybersecurity is a layered program — identity, network, endpoint and monitoring should be assessed together.",
      reasonAr: "الأمن السيبراني برنامج layered — identity وnetwork وendpoint وmonitoring يُقيَّمون معاً.",
    });
  }

  if (
    input.currentChallenges.some((c) =>
      c.toLowerCase().includes("document") || c.toLowerCase().includes("مستند"),
    ) &&
    !input.needs.dms
  ) {
    addRecommendation(seeds, {
      technologySlug: "dms",
      priority: "medium",
      reasonEn: "Document-related challenges often benefit from a structured DMS direction.",
      reasonAr: "تحديات المستندات غالباً تستفيد من توجه DMS structured.",
    });
  }

  if (input.cloudPreference === "cloud" || input.cloudPreference === "hybrid") {
    addRecommendation(seeds, {
      technologySlug: "cloud-computing",
      priority: "low",
      reasonEn:
        "Your cloud preference suggests reviewing cloud architecture and SaaS deployment models alongside application choices.",
      reasonAr: "تفضيلك للسحابة يقترح مراجعة architecture سحابية ونماذج SaaS مع اختيارات التطبيقات.",
    });
  }

  const employeeCount = parseInt(input.employees, 10);
  if (!Number.isNaN(employeeCount) && employeeCount > 200 && !input.needs.erp) {
    addRecommendation(seeds, {
      technologySlug: "erp",
      priority: "medium",
      reasonEn:
        "Organizations at your scale often benefit from evaluating integrated ERP for reporting and process standardization.",
      reasonAr: "منشآت بحجمك غالباً تستفيد من تقييم ERP متكامل للتقارير وتوحيد العمليات.",
    });
  }

  const recommendations: DecisionRecommendation[] = seeds.map((seed) => {
    const techEntry = KNOWLEDGE_ENTRIES.find(
      (e) => e.slug === seed.technologySlug && e.type === "technology",
    );
    const glossaryEntry = KNOWLEDGE_ENTRIES.find(
      (e) => e.slug === seed.technologySlug && e.type === "glossary",
    );
    const entry = techEntry ?? glossaryEntry;

    return {
      technologySlug: seed.technologySlug,
      technologyLabel: entry
        ? getEntryTitle(entry, locale)
        : seed.technologySlug,
      reason: locale === "ar" ? seed.reasonAr : seed.reasonEn,
      priority: seed.priority,
    };
  });

  const summary =
    recommendations.length > 0
      ? locale === "ar"
        ? `بناءً على تقييمك، ${recommendations.length} ${recommendations.length === 1 ? "مجال تقني" : "مجالات تقنية"} للاستكشاف. ${ui.noVendorRecommendation}`
        : `Based on your assessment, ${recommendations.length} technology ${recommendations.length === 1 ? "area" : "areas"} to explore. ${ui.noVendorRecommendation}`
      : locale === "ar"
        ? "أكمل الاحتياجات أعلاه للحصول على توجه تقني. " + ui.noVendorRecommendation
        : "Complete the needs above to receive technology direction. " + ui.noVendorRecommendation;

  const nextSteps =
    locale === "ar"
      ? [
          "راجع صفحات التقنيات الموصى بها في FileCount Knowledge",
          "استخدم أدلة الشراء ذات الصلة",
          "ناقش النتائج مع مستشار FileCount التقني",
        ]
      : [
          "Review recommended technology pages in FileCount Knowledge",
          "Use related buying guides",
          "Discuss results with a FileCount Technology Consultant",
        ];

  return { recommendations, summary, nextSteps };
}
