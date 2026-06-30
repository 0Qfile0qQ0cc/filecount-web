import type { Locale } from "@/types/locale";

export const ENTERPRISE_PLATFORMS_PATH = "/solutions/platform-development";

export const ENTERPRISE_PLATFORMS_TOKENS = {
  containerMaxWidth: 1280,
  contentMaxWidth: 800,
  descriptionMaxWidth: 760,
  titleToContentGap: 48,
  sectionGap: 20,
  cardGap: 20,
} as const;

export const BENEFIT_CARD_TOKENS = {
  paddingInline: 14,
  paddingBlock: 10,
  iconSize: 22,
  iconGap: 10,
  titleFontWeight: 800,
} as const;

export const WHY_PLATFORM_CARD_KEYS = [
  "fitsBusiness",
  "scalable",
  "integration",
  "permissions",
  "modernUx",
  "futureReady",
] as const;

export type WhyPlatformCardKey = (typeof WHY_PLATFORM_CARD_KEYS)[number];

export const PROCESS_STEP_KEYS = [
  "analyze",
  "design",
  "develop",
  "test",
  "launch",
] as const;

export type ProcessStepKey = (typeof PROCESS_STEP_KEYS)[number];

export const BENEFIT_KEYS = [
  "efficiency",
  "automation",
  "unify",
  "decisions",
  "scale",
  "experience",
] as const;

export type BenefitKey = (typeof BENEFIT_KEYS)[number];

export const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export type FaqKey = (typeof FAQ_KEYS)[number];

type CardItem = { title: string; description: string };

type ProcessStep = { number: string; title: string; description: string };

type FaqItem = { question: string; answer: string };

type EnterprisePlatformsContent = {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  why: {
    badge: string;
    cards: Record<WhyPlatformCardKey, CardItem>;
  };
  whatWeBuild: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    steps: Record<ProcessStepKey, ProcessStep>;
  };
  benefits: {
    title: string;
    items: Record<BenefitKey, string>;
  };
  faq: {
    title: string;
    items: Record<FaqKey, FaqItem>;
  };
  cta: {
    title: string;
    primaryCta: string;
    secondaryCta: string;
  };
  schema: {
    serviceName: string;
    serviceDescription: string;
    breadcrumbHome: string;
    breadcrumbSolutions: string;
    breadcrumbCurrent: string;
  };
};

const CONTENT: Record<Locale, EnterprisePlatformsContent> = {
  en: {
    seo: {
      title: "Enterprise Platforms Built for Your Organization",
      description:
        "FileCount designs and develops flexible, scalable enterprise platforms aligned with your current and future business needs, with modern UX and seamless system integration.",
    },
    hero: {
      badge: "Enterprise Platforms",
      title: "Enterprise Platforms Built for Your Organization",
      description:
        "We help organizations design and develop flexible, scalable enterprise platforms aligned with current and future business needs—with modern user experiences and seamless integration with existing systems.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Explore Our Work",
      secondaryHref: "/",
    },
    why: {
      badge: "Why Enterprise Platforms?",
      cards: {
        fitsBusiness: {
          title: "Built for Your Business",
          description:
            "We design the platform around your organization's needs—not a generic template.",
        },
        scalable: {
          title: "Scalable by Design",
          description:
            "The platform grows with your business without requiring a full rebuild.",
        },
        integration: {
          title: "System Integration",
          description:
            "Integrate with ERP, CRM, government systems and API interfaces.",
        },
        permissions: {
          title: "Advanced Permissions",
          description:
            "Manage users, roles, permissions and workflows professionally.",
        },
        modernUx: {
          title: "Modern User Experience",
          description:
            "Fast, intuitive interfaces that work across all devices.",
        },
        futureReady: {
          title: "Future-Ready",
          description:
            "A platform designed for continuous enhancement and new services.",
        },
      },
    },
    whatWeBuild: {
      title: "What Do We Build?",
      items: [
        "Customer Portals",
        "Employee Portals",
        "Internal Systems",
        "E-Service Platforms",
        "Request Management Systems",
        "Workflow Systems",
        "Executive Dashboards",
        "Custom Systems",
      ],
    },
    process: {
      title: "Our Process",
      steps: {
        analyze: {
          number: "01",
          title: "Requirements Analysis",
          description:
            "We assess your goals, operational needs and technical landscape.",
        },
        design: {
          number: "02",
          title: "Solution Design",
          description:
            "We define architecture, user journeys and integration points.",
        },
        develop: {
          number: "03",
          title: "Platform Development",
          description:
            "We build the platform with quality, security and scalability in mind.",
        },
        test: {
          number: "04",
          title: "Testing & Integration",
          description:
            "We validate performance and connect the platform to your systems.",
        },
        launch: {
          number: "05",
          title: "Launch & Support",
          description:
            "We deploy, enable users and provide ongoing support and improvement.",
        },
      },
    },
    benefits: {
      title: "What Does the Platform Deliver?",
      items: {
        efficiency: "Improved operational efficiency",
        automation: "Reduced manual processes",
        unify: "Unified operations",
        decisions: "Faster decision-making",
        scale: "Scalability for growth",
        experience: "Enhanced user experience",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: {
        q1: {
          question: "What is an enterprise platform?",
          answer:
            "An enterprise platform is a unified digital system that supports core business operations, user management, workflows and integrations—designed to scale with your organization.",
        },
        q2: {
          question: "How long does platform development take?",
          answer:
            "Timelines depend on scope and complexity. After requirements analysis, we provide a clear roadmap with phased delivery milestones.",
        },
        q3: {
          question: "Can you integrate with our existing systems?",
          answer:
            "Yes. We integrate with ERP, CRM, government platforms, databases and APIs to ensure a connected technology environment.",
        },
        q4: {
          question: "Is the platform secure and compliant?",
          answer:
            "Security and access control are built into every layer—from authentication and permissions to audit trails and data protection.",
        },
        q5: {
          question: "Do you support the platform after launch?",
          answer:
            "Yes. We provide launch support, user enablement and ongoing maintenance, optimization and feature enhancements.",
        },
        q6: {
          question: "Can the platform scale as we grow?",
          answer:
            "Absolutely. We architect platforms for scalability so you can add users, services and integrations without starting over.",
        },
      },
    },
    cta: {
      title: "Ready to Build an Enterprise Platform for Your Business?",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Contact Us",
    },
    schema: {
      serviceName: "Enterprise Platform Development",
      serviceDescription:
        "Design and development of flexible, scalable enterprise platforms with modern UX and system integration.",
      breadcrumbHome: "Home",
      breadcrumbSolutions: "Solutions",
      breadcrumbCurrent: "Enterprise Platforms",
    },
  },
  ar: {
    seo: {
      title: "منصات مؤسسية مصممة حسب احتياجات منشأتك",
      description:
        "نساعد المنشآت على تصميم وتطوير منصات مؤسسية مرنة وقابلة للتوسع، تتوافق مع احتياجات العمل الحالية والمستقبلية، مع تجربة استخدام حديثة وقابلة للتكامل مع الأنظمة الحالية.",
    },
    hero: {
      badge: "المنصات المؤسسية",
      title: "منصات مؤسسية مصممة حسب احتياجات منشأتك",
      description:
        "نساعد المنشآت على تصميم وتطوير منصات مؤسسية مرنة وقابلة للتوسع، تتوافق مع احتياجات العمل الحالية والمستقبلية، مع تجربة استخدام حديثة وقابلة للتكامل مع الأنظمة الحالية.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "استكشف أعمالنا",
      secondaryHref: "/",
    },
    why: {
      badge: "لماذا المنصات المؤسسية؟",
      cards: {
        fitsBusiness: {
          title: "منصة تناسب أعمالك",
          description:
            "نقوم بتصميم المنصة وفق احتياجات منشأتك وليس وفق قالب جاهز.",
        },
        scalable: {
          title: "قابلة للتوسع",
          description:
            "تنمو المنصة مع نمو أعمالك دون الحاجة لإعادة البناء.",
        },
        integration: {
          title: "تكامل الأنظمة",
          description:
            "تكامل مع ERP و CRM والأنظمة الحكومية وواجهات API.",
        },
        permissions: {
          title: "صلاحيات متقدمة",
          description:
            "إدارة المستخدمين والصلاحيات وسير العمل بشكل احترافي.",
        },
        modernUx: {
          title: "تجربة استخدام حديثة",
          description:
            "واجهات سهلة وسريعة تعمل على جميع الأجهزة.",
        },
        futureReady: {
          title: "جاهزة للمستقبل",
          description:
            "منصة قابلة للتطوير وإضافة الخدمات مستقبلاً.",
        },
      },
    },
    whatWeBuild: {
      title: "ما الذي نقوم بتطويره؟",
      items: [
        "بوابات العملاء",
        "بوابات الموظفين",
        "الأنظمة الداخلية",
        "منصات الخدمات الإلكترونية",
        "أنظمة إدارة الطلبات",
        "أنظمة سير العمل",
        "لوحات المعلومات التنفيذية",
        "الأنظمة المخصصة",
      ],
    },
    process: {
      title: "منهجيتنا",
      steps: {
        analyze: {
          number: "01",
          title: "تحليل الاحتياجات",
          description:
            "ندرس أهداف منشأتك ومتطلباتها التشغيلية والتقنية.",
        },
        design: {
          number: "02",
          title: "تصميم الحل",
          description:
            "نحدد الهيكلة التقنية ومسارات المستخدم ونقاط التكامل.",
        },
        develop: {
          number: "03",
          title: "تطوير المنصة",
          description:
            "نبني المنصة وفق معايير الجودة والأمان وقابلية التوسع.",
        },
        test: {
          number: "04",
          title: "الاختبارات والتكامل",
          description:
            "نتحقق من الأداء ونربط المنصة بأنظمتك الحالية.",
        },
        launch: {
          number: "05",
          title: "الإطلاق والدعم",
          description:
            "نطلق المنصة وندرب المستخدمين ونوفر الدعم والتطوير المستمر.",
        },
      },
    },
    benefits: {
      title: "ماذا تحقق المنصة لمنشأتك؟",
      items: {
        efficiency: "تحسين الكفاءة التشغيلية",
        automation: "تقليل الإجراءات اليدوية",
        unify: "توحيد العمليات",
        decisions: "سرعة اتخاذ القرار",
        scale: "قابلية التوسع",
        experience: "رفع تجربة المستخدم",
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: {
        q1: {
          question: "ما المقصود بالمنصة المؤسسية؟",
          answer:
            "المنصة المؤسسية هي نظام رقمي موحد يدعم العمليات الأساسية للمنشأة، وإدارة المستخدمين، وسير العمل، والتكامل مع الأنظمة—مصممة للتوسع مع نمو المنشأة.",
        },
        q2: {
          question: "كم تستغرق مدة تطوير المنصة؟",
          answer:
            "تعتمد المدة على نطاق المشروع وتعقيده. بعد تحليل الاحتياجات، نقدم خطة واضحة بمراحل تسليم محددة.",
        },
        q3: {
          question: "هل يمكن التكامل مع أنظمتنا الحالية؟",
          answer:
            "نعم. نربط المنصة مع ERP و CRM والأنظمة الحكومية وقواعد البيانات وواجهات API لضمان بيئة تقنية متصلة.",
        },
        q4: {
          question: "هل المنصة آمنة ومتوافقة مع المتطلبات؟",
          answer:
            "الأمان والتحكم في الوصول جزء أساسي في كل طبقة—من المصادقة والصلاحيات إلى سجلات التدقيق وحماية البيانات.",
        },
        q5: {
          question: "هل توفرون الدعم بعد الإطلاق؟",
          answer:
            "نعم. نوفر دعم الإطلاق وتمكين المستخدمين والصيانة المستمرة والتحسينات والتطويرات المستقبلية.",
        },
        q6: {
          question: "هل يمكن للمنصة التوسع مع نمو أعمالنا؟",
          answer:
            "بالتأكيد. نصمم المنصات لتكون قابلة للتوسع بحيث يمكن إضافة مستخدمين وخدمات وتكاملات دون البدء من الصفر.",
        },
      },
    },
    cta: {
      title: "هل أنت مستعد لبناء منصة مؤسسية تناسب أعمالك؟",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "تواصل معنا",
    },
    schema: {
      serviceName: "تطوير المنصات المؤسسية",
      serviceDescription:
        "تصميم وتطوير منصات مؤسسية مرنة وقابلة للتوسع مع تجربة استخدام حديثة وتكامل الأنظمة.",
      breadcrumbHome: "الرئيسية",
      breadcrumbSolutions: "الحلول",
      breadcrumbCurrent: "المنصات المؤسسية",
    },
  },
};

export function getEnterprisePlatformsContent(
  locale: Locale,
): EnterprisePlatformsContent {
  return CONTENT[locale];
}
