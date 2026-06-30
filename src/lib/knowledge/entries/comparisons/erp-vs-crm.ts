import type { ComparisonEntry } from "../../types";

const sharedDimensions = (locale: "en" | "ar") => {
  const labels =
    locale === "en"
      ? {
          businessSize: "Business Size",
          industry: "Industry",
          deployment: "Deployment",
          cloud: "Cloud",
          hybrid: "Hybrid",
          onPrem: "On-Premises",
          customization: "Customization",
          integration: "Integration",
          security: "Security",
          analytics: "Analytics",
          ai: "AI Capabilities",
          scalability: "Scalability",
        }
      : {
          businessSize: "حجم المنشأة",
          industry: "القطاع",
          deployment: "النشر",
          cloud: "سحابي",
          hybrid: "هجين",
          onPrem: "محلي",
          customization: "التخصيص",
          integration: "التكامل",
          security: "الأمن",
          analytics: "التحليلات",
          ai: "قدرات الذكاء الاصطناعي",
          scalability: "قابلية التوسع",
        };

  return labels;
};

function buildComparisonContent(locale: "en" | "ar") {
  const l = sharedDimensions(locale);

  return {
    title: locale === "en" ? "ERP vs CRM" : "ERP مقابل CRM",
    seo: {
      title:
        locale === "en"
          ? "ERP vs CRM Comparison | FileCount Knowledge"
          : "مقارنة ERP وCRM | FileCount Knowledge",
      description:
        locale === "en"
          ? "Neutral comparison of ERP and CRM — purpose, use cases, strengths and when each technology direction applies."
          : "مقارنة محايدة بين ERP وCRM — الغرض وحالات الاستخدام ونقاط القوة ومتى ينطبق كل توجه.",
    },
    introduction:
      locale === "en"
        ? "ERP and CRM serve different core purposes. ERP manages internal operations and finance; CRM manages customer relationships and revenue pipeline. Many organizations need both — integrated, not interchangeable."
        : "ERP وCRM يخدمان أغراضاً أساسية مختلفة. ERP يدير العمليات الداخلية والمالية؛ CRM يدير علاقات العملاء و pipeline الإيرادات. كثير من المنشآت تحتاج كليهما — متكاملين وليس interchangeable.",
    entityALabel: "ERP",
    entityBLabel: "CRM",
    dimensions: [
      {
        label: l.businessSize,
        entityA: locale === "en" ? "Mid-size to enterprise" : "medium إلى enterprise",
        entityB: locale === "en" ? "Small to enterprise" : "small إلى enterprise",
      },
      {
        label: l.industry,
        entityA: locale === "en" ? "Manufacturing, distribution, services with complex operations" : "تصنيع وتوزيع وخدمات بعمليات معقدة",
        entityB: locale === "en" ? "Sales-driven, service-heavy, B2B/B2C" : "مدفوع بالمبيعات وheavy service وB2B/B2C",
      },
      {
        label: l.deployment,
        entityA: locale === "en" ? "Cloud, hybrid or on-premises" : "سحابي أو هجين أو محلي",
        entityB: locale === "en" ? "Primarily cloud; on-prem options exist" : "أساساً سحابي؛ خيارات on-prem موجودة",
      },
      {
        label: l.customization,
        entityA: locale === "en" ? "High — processes and modules" : "عالي — عمليات وmodules",
        entityB: locale === "en" ? "Moderate — pipelines and fields" : "متوسط — pipelines وحقول",
      },
      {
        label: l.integration,
        entityA: locale === "en" ? "Core system; integrates with CRM, HR, WMS" : "نظام أساسي؛ يتكامل مع CRM وHR وWMS",
        entityB: locale === "en" ? "Integrates with ERP for orders and billing" : "يتكامل مع ERP للطلبات والفوترة",
      },
      {
        label: l.security,
        entityA: locale === "en" ? "Role-based; financial data controls" : "حسب الدور؛ ضوابط بيانات مالية",
        entityB: locale === "en" ? "Role-based; customer data privacy" : "حسب الدور؛ خصوصية بيانات العملاء",
      },
      {
        label: l.analytics,
        entityA: locale === "en" ? "Financial and operational reporting" : "تقارير مالية وتشغيلية",
        entityB: locale === "en" ? "Pipeline, campaign and service analytics" : "analytics pipeline وحملات وخدمة",
      },
      {
        label: l.ai,
        entityA: locale === "en" ? "Forecasting, anomaly detection in operations" : "توقعات وكشف anomalies في العمليات",
        entityB: locale === "en" ? "Lead scoring, next-best-action in sales" : "lead scoring وnext-best-action في المبيعات",
      },
      {
        label: l.scalability,
        entityA: locale === "en" ? "Scales with entities, branches, modules" : "يتوسع مع الكيانات والفروع والmodules",
        entityB: locale === "en" ? "Scales with users, accounts and channels" : "يتوسع مع المستخدمين والحسابات والقنوات",
      },
    ],
    typicalUseCases: {
      label: locale === "en" ? "Typical Use Cases" : "حالات الاستخدام النموذجية",
      entityA:
        locale === "en"
          ? "Financial consolidation, inventory, procurement, manufacturing, project costing"
          : "consolidation مالي ومخزون ومشتريات وتصنيع وتكلفة مشاريع",
      entityB:
        locale === "en"
          ? "Lead management, opportunity tracking, customer service cases, marketing campaigns"
          : "إدارة leads وتتبع فرص وحالات خدمة وحملات تسويق",
    },
    strengths: {
      label: locale === "en" ? "Strengths" : "نقاط القوة",
      entityA:
        locale === "en"
          ? "Single operational truth, compliance, process standardization"
          : "حقيقة تشغيلية واحدة وامتثال وتوحيد عمليات",
      entityB:
        locale === "en"
          ? "Revenue visibility, customer history, sales and service alignment"
          : "رؤية إيرادات وسجل عملاء ومواءمة مبيعات وخدمة",
    },
    challenges: {
      label: locale === "en" ? "Challenges" : "التحديات",
      entityA:
        locale === "en"
          ? "Complex implementation, change management, customization risk"
          : "تنفيذ معقد وإدارة تغيير ومخاطر تخصيص",
      entityB:
        locale === "en"
          ? "Data quality, adoption, integration with back-office"
          : "جودة بيانات واعتماد وتكامل مع back-office",
    },
    neutralSummary:
      locale === "en"
        ? "Neither ERP nor CRM replaces the other in most mid-size and enterprise contexts. Evaluate both based on operational vs. customer-facing priorities, then plan integration."
        : "لا ERP ولا CRM يReplace الآخر في معظم سياقات medium وenterprise. قيّم كليهما حسب أولويات تشغيلية مقابل customer-facing ثم خطط للتكامل.",
    relatedComparisons: [],
    faqs: [
      {
        question: locale === "en" ? "Can one system do both?" : "هل نظام واحد يفعل كليهما؟",
        answer:
          locale === "en"
            ? "Some platforms offer combined modules, but depth in both areas varies. Assess fit against your primary pain points."
            : "بعض المنصات ت offer modules مجتمعة، لكن العمق يختلف. قيّم الملاءمة حسب pain points الأساسية.",
      },
    ],
  };
}

export const erpVsCrmEntry: ComparisonEntry = {
  type: "comparison",
  slug: "erp-vs-crm",
  categoryId: "technology-comparisons",
  comparisonKind: "technology",
  entityASlug: "erp",
  entityBSlug: "crm",
  searchTerms: ["ERP vs CRM", "ERP CRM comparison", "difference ERP CRM"],
  content: {
    en: buildComparisonContent("en"),
    ar: buildComparisonContent("ar"),
  },
};

export const comparisonEntries = [erpVsCrmEntry];
