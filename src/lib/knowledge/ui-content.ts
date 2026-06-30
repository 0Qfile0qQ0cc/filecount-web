import type { Locale } from "@/types/locale";

type UiContent = {
  brand: {
    title: string;
    tagline: string;
  };
  search: {
    placeholder: string;
    button: string;
    noResults: string;
    resultsFor: string;
    popularLabel: string;
    suggestedLabel: string;
    relatedLabel: string;
    filters: {
      all: string;
      technology: string;
      vendor: string;
      comparison: string;
      guide: string;
      glossary: string;
    };
  };
  landing: {
    userJourneyTitle: string;
    layers: {
      learn: { title: string; description: string; cta: string };
      solve: { title: string; description: string; cta: string };
      decide: { title: string; description: string; cta: string };
    };
    categoriesTitle: string;
  };
  templates: {
    whatIsIt: string;
    businessPurpose: string;
    benefits: string;
    challenges: string;
    whenToUse: string;
    whenNotToUse: string;
    implementationOverview: string;
    faqs: string;
    relatedTechnologies: string;
    relatedVendors: string;
    comparisons: string;
    decisionChecklist: string;
    overview: string;
    focusAreas: string;
    typicalCustomers: string;
    deploymentOptions: string;
    strengths: string;
    considerations: string;
    neutralComparisonNote: string;
    comparisonDimensions: string;
    typicalUseCases: string;
    recommendedTechnologies: string;
    decisionFactors: string;
    definition: string;
    relatedTerms: string;
    aeo: {
      alternatives: string;
      howToChoose: string;
      commonMistakes: string;
      implementationChecklist: string;
    };
    talkToConsultant: string;
    talkToConsultantDescription: string;
    contactCta: string;
  };
  breadcrumb: {
    home: string;
    knowledge: string;
  };
  decisionAssistant: {
    title: string;
    description: string;
    submit: string;
    reset: string;
    resultsTitle: string;
    industry: string;
    employees: string;
    branches: string;
    currentSystems: string;
    currentChallenges: string;
    growthPlans: string;
    cloudPreference: string;
    needsTitle: string;
    needs: {
      erp: string;
      crm: string;
      dms: string;
      workflow: string;
      cybersecurity: string;
    };
    cloudOptions: {
      cloud: string;
      hybrid: string;
      onPremises: string;
      undecided: string;
    };
    disclaimer: string;
    nextSteps: string;
    noVendorRecommendation: string;
  };
  category: {
    entriesTitle: string;
    empty: string;
  };
};

const CONTENT: Record<Locale, UiContent> = {
  en: {
    brand: {
      title: "FileCount Knowledge",
      tagline: "Search. Compare. Decide.",
    },
    search: {
      placeholder:
        "Search technologies, vendors, products or ask a technology question…",
      button: "Search",
      noResults: "No results found. Try a different term or browse categories.",
      resultsFor: "Results for",
      popularLabel: "Popular",
      suggestedLabel: "Suggested",
      relatedLabel: "Related",
      filters: {
        all: "All",
        technology: "Technology",
        vendor: "Vendor",
        comparison: "Comparison",
        guide: "Guide",
        glossary: "Glossary",
      },
    },
    landing: {
      userJourneyTitle: "How FileCount Knowledge Helps",
      layers: {
        learn: {
          title: "Learn a Technology",
          description:
            "Understand ERP, CRM, DMS, cloud, cybersecurity and enterprise platforms — what they are, when to use them and when not to.",
          cta: "Explore Technologies",
        },
        solve: {
          title: "Solve a Business Problem",
          description:
            "Start from your goal — document management, ERP, CRM, workflow or digital transformation — and find the right technology direction.",
          cta: "Browse Buying Guides",
        },
        decide: {
          title: "Make a Technology Decision",
          description:
            "Use our vendor-neutral assessment to map your industry, size and needs to technology areas — never a specific vendor.",
          cta: "Start Assessment",
        },
      },
      categoriesTitle: "Browse by Category",
    },
    templates: {
      whatIsIt: "What is it?",
      businessPurpose: "Business Purpose",
      benefits: "Benefits",
      challenges: "Challenges",
      whenToUse: "When to Use It",
      whenNotToUse: "When Not to Use It",
      implementationOverview: "Implementation Overview",
      faqs: "Frequently Asked Questions",
      relatedTechnologies: "Related Technologies",
      relatedVendors: "Related Vendors",
      comparisons: "Comparisons",
      decisionChecklist: "Decision Checklist",
      overview: "Overview",
      focusAreas: "Focus Areas",
      typicalCustomers: "Typical Customers",
      deploymentOptions: "Deployment Options",
      strengths: "Strengths",
      considerations: "Considerations",
      neutralComparisonNote:
        "This comparison is vendor-neutral. Neither option is declared a winner — evaluate based on your organization's context.",
      comparisonDimensions: "Comparison",
      typicalUseCases: "Typical Use Cases",
      recommendedTechnologies: "Recommended Technologies",
      decisionFactors: "Key Decision Factors",
      definition: "Definition",
      relatedTerms: "Related Terms",
      aeo: {
        alternatives: "Alternatives",
        howToChoose: "How to Choose",
        commonMistakes: "Common Mistakes",
        implementationChecklist: "Implementation Checklist",
      },
      talkToConsultant: "Talk to a FileCount Technology Consultant",
      talkToConsultantDescription:
        "Get vendor-neutral guidance tailored to your organization in Saudi Arabia.",
      contactCta: "Contact Us",
    },
    breadcrumb: {
      home: "Home",
      knowledge: "FileCount Knowledge",
    },
    decisionAssistant: {
      title: "Technology Decision Assistant",
      description:
        "Answer a few questions about your organization. We will suggest technology directions only — never a specific vendor.",
      submit: "Get Technology Direction",
      reset: "Start Over",
      resultsTitle: "Your Technology Direction",
      industry: "Industry",
      employees: "Number of Employees",
      branches: "Number of Branches",
      currentSystems: "Current Systems",
      currentChallenges: "Current Challenges",
      growthPlans: "Growth Plans",
      cloudPreference: "Cloud Preference",
      needsTitle: "Technology Needs",
      needs: {
        erp: "ERP / Finance & Operations",
        crm: "CRM / Customer Management",
        dms: "DMS / Document Management",
        workflow: "Workflow Automation",
        cybersecurity: "Cybersecurity",
      },
      cloudOptions: {
        cloud: "Cloud-first",
        hybrid: "Hybrid",
        onPremises: "On-Premises",
        undecided: "Not decided yet",
      },
      disclaimer:
        "This assessment provides technology direction only. It does not recommend specific vendors or products.",
      nextSteps: "Recommended Next Steps",
      noVendorRecommendation:
        "No specific vendor is recommended. Evaluate options based on your requirements, compliance needs and integration landscape.",
    },
    category: {
      entriesTitle: "In this category",
      empty: "No entries yet. Check back soon or use search.",
    },
  },
  ar: {
    brand: {
      title: "معرفة فايل كاونت",
      tagline: "ابحث، قارن، واتخذ القرار الصحيح.",
    },
    search: {
      placeholder:
        "ابحث عن تقنية أو شركة أو نظام أو أي سؤال تقني…",
      button: "بحث",
      noResults: "لم يتم العثور على نتائج. جرّب مصطلحاً آخر أو تصفّح التصنيفات.",
      resultsFor: "نتائج البحث عن",
      popularLabel: "الأكثر بحثاً",
      suggestedLabel: "اقتراحات",
      relatedLabel: "ذات صلة",
      filters: {
        all: "الكل",
        technology: "تقنية",
        vendor: "مزود",
        comparison: "مقارنة",
        guide: "دليل",
        glossary: "مسرد",
      },
    },
    landing: {
      userJourneyTitle: "كيف يساعدك FileCount Knowledge",
      layers: {
        learn: {
          title: "تعرّف على التقنية",
          description:
            "افهم ERP وCRM وDMS والسحابة والأمن السيبراني والمنصات المؤسسية — ما هي، متى تستخدمها ومتى لا تستخدمها.",
          cta: "استكشف التقنيات",
        },
        solve: {
          title: "حل مشكلة أعمال",
          description:
            "ابدأ من هدفك — إدارة المستندات أو ERP أو CRM أو سير العمل أو التحول الرقمي — واعثر على التوجه التقني المناسب.",
          cta: "تصفّح أدلة الشراء",
        },
        decide: {
          title: "اتخاذ قرار تقني",
          description:
            "استخدم تقييمنا المحايد لربط قطاعك وحجمك واحتياجاتك بمجالات تقنية — دون توصية بمزود محدد.",
          cta: "ابدأ التقييم",
        },
      },
      categoriesTitle: "تصفّح حسب التصنيف",
    },
    templates: {
      whatIsIt: "ما هي؟",
      businessPurpose: "الغرض من الأعمال",
      benefits: "الفوائد",
      challenges: "التحديات",
      whenToUse: "متى تستخدمها",
      whenNotToUse: "متى لا تستخدمها",
      implementationOverview: "نظرة عامة على التنفيذ",
      faqs: "الأسئلة الشائعة",
      relatedTechnologies: "تقنيات ذات صلة",
      relatedVendors: "مزودون ذوو صلة",
      comparisons: "المقارنات",
      decisionChecklist: "قائمة التحقق للقرار",
      overview: "نظرة عامة",
      focusAreas: "مجالات التركيز",
      typicalCustomers: "العملاء النموذجيون",
      deploymentOptions: "خيارات النشر",
      strengths: "نقاط القوة",
      considerations: "اعتبارات",
      neutralComparisonNote:
        "هذه المقارنة محايدة. لا يُعلن فائز — قيّم الخيارات بناءً على سياق منشأتك.",
      comparisonDimensions: "المقارنة",
      typicalUseCases: "حالات الاستخدام النموذجية",
      recommendedTechnologies: "التقنيات الموصى بها",
      decisionFactors: "عوامل القرار الرئيسية",
      definition: "التعريف",
      relatedTerms: "مصطلحات ذات صلة",
      aeo: {
        alternatives: "البدائل",
        howToChoose: "كيف تختار",
        commonMistakes: "أخطاء شائعة",
        implementationChecklist: "قائمة التحقق للتنفيذ",
      },
      talkToConsultant: "تحدث مع مستشار FileCount التقني",
      talkToConsultantDescription:
        "احصل على إرشاد محايد مخصص لمنشأتك في المملكة العربية السعودية.",
      contactCta: "تواصل معنا",
    },
    breadcrumb: {
      home: "الرئيسية",
      knowledge: "FileCount Knowledge",
    },
    decisionAssistant: {
      title: "مساعد قرار التقنية",
      description:
        "أجب عن بعض الأسئلة عن منشأتك. سنقترح توجهات تقنية فقط — دون توصية بمزود محدد.",
      submit: "احصل على التوجه التقني",
      reset: "ابدأ من جديد",
      resultsTitle: "توجهك التقني",
      industry: "القطاع",
      employees: "عدد الموظفين",
      branches: "عدد الفروع",
      currentSystems: "الأنظمة الحالية",
      currentChallenges: "التحديات الحالية",
      growthPlans: "خطط النمو",
      cloudPreference: "تفضيل السحابة",
      needsTitle: "الاحتياجات التقنية",
      needs: {
        erp: "ERP / المالية والعمليات",
        crm: "CRM / إدارة العملاء",
        dms: "DMS / إدارة المستندات",
        workflow: "أتمتة سير العمل",
        cybersecurity: "الأمن السيبراني",
      },
      cloudOptions: {
        cloud: "السحابة أولاً",
        hybrid: "هجين",
        onPremises: "محلي",
        undecided: "لم أقرر بعد",
      },
      disclaimer:
        "يوفر هذا التقييم توجهاً تقنياً فقط. لا يوصي بمزودين أو منتجات محددة.",
      nextSteps: "الخطوات التالية الموصى بها",
      noVendorRecommendation:
        "لا يُوصى بمزود محدد. قيّم الخيارات بناءً على متطلباتك والامتثال وتكامل الأنظمة.",
    },
    category: {
      entriesTitle: "في هذا التصنيف",
      empty: "لا توجد محتويات بعد. عد لاحقاً أو استخدم البحث.",
    },
  },
};

export function getKnowledgeUiContent(locale: Locale): UiContent {
  return CONTENT[locale];
}

export const POPULAR_SEARCHES = [
  "ERP",
  "CRM",
  "DMS",
  "ECM",
  "Oracle",
  "SAP",
  "Microsoft",
  "Cloud",
  "Cybersecurity",
  "Networking",
  "Servers",
  "Storage",
  "OCR",
  "Digital Signature",
] as const;
