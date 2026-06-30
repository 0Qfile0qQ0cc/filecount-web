import type { Locale } from "@/types/locale";

export const TECHNOLOGY_CONSULTING_PATH = "/solutions/technology-consulting";

export const TECHNOLOGY_CONSULTING_TOKENS = {
  containerMaxWidth: 1280,
  contentMaxWidth: 800,
  descriptionMaxWidth: 760,
  titleToContentGap: 48,
  cardGap: 20,
} as const;

export const TC_FEATURE_CARD_TOKENS = {
  minHeight: 128,
  paddingInline: 14,
  paddingBlock: 12,
  iconSize: 26,
  contentGap: 8,
  titleDescriptionGap: 6,
} as const;

export const BENEFIT_CARD_TOKENS = {
  paddingInline: 14,
  paddingBlock: 10,
  iconSize: 22,
  iconGap: 10,
  titleFontWeight: 800,
} as const;

export const WHY_TC_CARD_KEYS = [
  "investmentEfficiency",
  "riskReduction",
  "rightSolution",
  "fasterImplementation",
  "betterIntegration",
  "sustainableValue",
] as const;

export type WhyTcCardKey = (typeof WHY_TC_CARD_KEYS)[number];

export const DOMAIN_KEYS = [
  "digitalTransformationStrategy",
  "enterprisePlatforms",
  "systemIntegrationWorkflow",
  "dataGovernance",
  "enterpriseAi",
  "solutionArchitecture",
] as const;

export type DomainKey = (typeof DOMAIN_KEYS)[number];

export const TC_JOURNEY_STEP_KEYS = [
  "understandGoals",
  "analyzeCurrentState",
  "evaluateOptions",
  "recommendSolution",
  "supportImplementation",
] as const;

export type TcJourneyStepKey = (typeof TC_JOURNEY_STEP_KEYS)[number];

export const WHY_FC_CARD_KEYS = [
  "independentAdvice",
  "enterprisePlatformSelection",
  "projectManagement",
  "implementationOversight",
  "qualityAssurance",
  "longTermPartnership",
] as const;

export type WhyFcCardKey = (typeof WHY_FC_CARD_KEYS)[number];

export const TC_FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export type TcFaqKey = (typeof TC_FAQ_KEYS)[number];

type CardItem = { title: string; description: string };

type JourneyStep = { number: string; title: string; description: string };

type FaqItem = { question: string; answer: string };

type TechnologyConsultingContent = {
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
    cards: Record<WhyTcCardKey, CardItem>;
  };
  domains: {
    badge: string;
    cards: Record<DomainKey, CardItem>;
  };
  journey: {
    badge: string;
    steps: Record<TcJourneyStepKey, JourneyStep>;
  };
  whyFc: {
    title: string;
    intro: string;
    saudiBadge: string;
    saudiSubtitle: string;
    cards: Record<WhyFcCardKey, CardItem>;
  };
  industries: {
    badge: string;
    description: string;
  };
  faq: {
    title: string;
    items: Record<TcFaqKey, FaqItem>;
  };
  cta: {
    title: string;
    description: string;
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

const CONTENT: Record<Locale, TechnologyConsultingContent> = {
  en: {
    seo: {
      title:
        "Technology Consulting Saudi Arabia | Independent Technology Advisory",
      description:
        "FileCount is a technology consulting partner in Saudi Arabia—helping government entities and enterprises assess needs, evaluate options and build roadmaps for digital transformation, enterprise platforms, system integration, data governance and enterprise AI.",
    },
    hero: {
      badge: "Technology Consulting",
      title: "Technology Consulting That Helps You Make the Right Decision",
      description:
        "We help government entities and companies assess their technology needs, analyze their current environment, select the right solutions and define a technology roadmap that supports growth, digital transformation and business continuity.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Book a Consultation",
      secondaryHref: "/contact",
    },
    why: {
      badge: "Why Start with Consulting?",
      cards: {
        investmentEfficiency: {
          title: "Maximize Technology Investment ROI",
          description:
            "Direct spending toward initiatives with clear business value and avoid unnecessary purchases before you commit.",
        },
        riskReduction: {
          title: "Reduce Risk",
          description:
            "Surface gaps, dependencies and compliance requirements early—before costly platform or project decisions.",
        },
        rightSolution: {
          title: "Choose the Right Solution",
          description:
            "Select approaches and platforms that fit how your organization operates—not trends or overselling.",
        },
        fasterImplementation: {
          title: "Accelerate Implementation",
          description:
            "Enter projects with a clear scope, roadmap and readiness plan to shorten time to value.",
        },
        betterIntegration: {
          title: "Improve Integration",
          description:
            "Design how new solutions connect with ERP, CRM and existing systems from the start.",
        },
        sustainableValue: {
          title: "Achieve Sustainable Value",
          description:
            "Build a technology roadmap that supports growth, digital transformation and long-term business continuity.",
        },
      },
    },
    domains: {
      badge: "Technology Consulting Domains",
      cards: {
        digitalTransformationStrategy: {
          title: "Digital Transformation Strategy",
          description:
            "Define a practical digital transformation roadmap aligned with your organization's goals and priorities.",
        },
        enterprisePlatforms: {
          title: "Enterprise Platforms",
          description:
            "Evaluate and select enterprise platforms that match business needs and scalability requirements.",
        },
        systemIntegrationWorkflow: {
          title: "System Integration & Workflow",
          description:
            "Design integration solutions that connect disparate systems and simplify data and process flows.",
        },
        dataGovernance: {
          title: "Information & Data Governance",
          description:
            "Improve how data and information are managed—strengthening compliance and data quality across the organization.",
        },
        enterpriseAi: {
          title: "Enterprise AI Consulting",
          description:
            "Identify where artificial intelligence can improve operations, productivity and decision-making.",
        },
        solutionArchitecture: {
          title: "Solution Architecture",
          description:
            "Design flexible technical architecture that supports scale, integration and sustainable operations.",
        },
      },
    },
    journey: {
      badge: "Our Methodology",
      steps: {
        understandGoals: {
          number: "01",
          title: "Understand Organizational Goals",
          description:
            "We align with leadership on business priorities, success criteria and constraints before any technology decisions.",
        },
        analyzeCurrentState: {
          number: "02",
          title: "Analyze Current State",
          description:
            "We assess your existing systems, processes, data landscape and integration points.",
        },
        evaluateOptions: {
          number: "03",
          title: "Evaluate Options",
          description:
            "We compare viable approaches against fit, cost, risk and scalability criteria.",
        },
        recommendSolution: {
          number: "04",
          title: "Recommend the Solution",
          description:
            "We deliver clear, independent recommendations with a practical implementation roadmap.",
        },
        supportImplementation: {
          number: "05",
          title: "Support Implementation",
          description:
            "We stay engaged through planning and execution so recommendations translate into measurable results.",
        },
      },
    },
    whyFc: {
      title: "Why FileCount?",
      intro:
        "FileCount is a Saudi technology consulting company specializing in helping organizations make the right technology decisions, select the most suitable enterprise platforms, manage technology implementation projects, drive digital transformation initiatives, and take full responsibility for successful project delivery.",
      saudiBadge: "🇸🇦 Saudi Team",
      saudiSubtitle:
        "Our consultants understand Saudi regulations, enterprise environments, and digital transformation requirements across both public and private sectors.",
      cards: {
        independentAdvice: {
          title: "Independent Technology Advice",
          description:
            "We recommend the right technology based on your business objectives, not based on software vendors.",
        },
        enterprisePlatformSelection: {
          title: "Enterprise Platform Selection",
          description:
            "We evaluate ERP, CRM, DMS, ECM, workflow and enterprise platforms to identify the best long-term solution for your organization.",
        },
        projectManagement: {
          title: "Project Management",
          description:
            "We manage the entire project lifecycle, from business requirements and planning through implementation, testing and successful delivery.",
        },
        implementationOversight: {
          title: "Implementation Oversight",
          description:
            "We coordinate with implementation partners and supervise execution to ensure quality, timelines and business objectives are achieved.",
        },
        qualityAssurance: {
          title: "Quality Assurance",
          description:
            "Every solution is reviewed, validated and tested before final delivery to ensure it meets agreed business requirements.",
        },
        longTermPartnership: {
          title: "Long-Term Partnership",
          description:
            "Our relationship continues after go-live through continuous advisory, optimization and future technology planning.",
        },
      },
    },
    industries: {
      badge: "Industries We Serve",
      description:
        "We support organizations across sectors that depend on reliable technology, integrated systems and sustainable digital programs.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: {
        q1: {
          question:
            "What does technology consulting include for organizations in Saudi Arabia?",
          answer:
            "Technology consulting covers assessing your current environment, defining requirements, evaluating solution options and building a roadmap—for digital transformation, enterprise platforms, system integration, data governance and enterprise AI—before major investments.",
        },
        q2: {
          question: "When should we engage a technology consulting firm?",
          answer:
            "Engage consulting before selecting a platform, starting a transformation program or committing to large integration projects—when you need an independent view of fit, risk and return on investment.",
        },
        q3: {
          question: "How is FileCount different from software vendors?",
          answer:
            "We focus on your business needs first. Our recommendations are independent—we help you evaluate and choose the right path rather than selling a single product.",
        },
        q4: {
          question: "Can you help with digital transformation strategy?",
          answer:
            "Yes. We work with leadership teams to define digital transformation priorities, phased roadmaps and success measures aligned with Saudi market requirements and organizational goals.",
        },
        q5: {
          question: "Do you support implementation after the consulting phase?",
          answer:
            "Yes. We can support implementation planning, solution architecture, system integration and ongoing advisory so recommendations move from paper to production.",
        },
        q6: {
          question: "Who is technology consulting best suited for?",
          answer:
            "Government entities and enterprises that need a trusted partner to assess technology options, reduce project risk and make informed decisions—without building internal expertise from scratch.",
        },
      },
    },
    cta: {
      title: "Need Technology Consulting Before You Decide?",
      description:
        "The FileCount team helps you choose the right solutions before investing in any platform or technology project.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Contact Us",
    },
    schema: {
      serviceName: "Technology Consulting & Advisory",
      serviceDescription:
        "Independent technology consulting for digital transformation strategy, enterprise platforms, system integration, data governance, enterprise AI and solution architecture.",
      breadcrumbHome: "Home",
      breadcrumbSolutions: "Solutions",
      breadcrumbCurrent: "Technology Consulting",
    },
  },
  ar: {
    seo: {
      title:
        "شركة استشارات تقنية | استشارات تقنية مستقلة في المملكة العربية السعودية",
      description:
        "فايل كاونت شركة استشارات تقنية تساعد الجهات الحكومية والمنشآت على تقييم الاحتياجات واختيار الحلول ووضع خارطة طريق للتحول الرقمي والمنصات المؤسسية وربط الأنظمة وحوكمة البيانات والذكاء الاصطناعي للمؤسسات.",
    },
    hero: {
      badge: "الاستشارات التقنية",
      title: "استشارات تقنية تساعدك على اتخاذ القرار الصحيح",
      description:
        "نساعد الجهات الحكومية والشركات على تقييم احتياجاتها التقنية، وتحليل بيئتها الحالية، واختيار الحلول المناسبة، ووضع خارطة طريق تقنية تدعم النمو والتحول الرقمي واستمرارية الأعمال.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "احجز استشارة",
      secondaryHref: "/contact",
    },
    why: {
      badge: "لماذا تبدأ بالاستشارة؟",
      cards: {
        investmentEfficiency: {
          title: "رفع كفاءة الاستثمار التقني",
          description:
            "توجيه الاستثمار نحو المبادرات ذات العائد الواضح وتجنب الشراء دون احتياج حقيقي.",
        },
        riskReduction: {
          title: "تقليل المخاطر",
          description:
            "كشف الفجوات والتبعيات ومتطلبات الامتثال مبكراً—قبل الالتزام بتكاليف باهظة.",
        },
        rightSolution: {
          title: "اختيار الحل المناسب",
          description:
            "اختيار نهج ومنصات تناسب عملياتك—لا الموضة أو المبالغة في التسويق.",
        },
        fasterImplementation: {
          title: "تسريع التنفيذ",
          description:
            "الدخول للمشاريع بنطاق واضح وخارطة طريق وجاهزية تُسرّع تحقيق القيمة.",
        },
        betterIntegration: {
          title: "تحسين التكامل",
          description:
            "تصميم ربط الحلول الجديدة مع ERP و CRM والأنظمة الحالية منذ البداية.",
        },
        sustainableValue: {
          title: "تحقيق قيمة مستدامة",
          description:
            "بناء خارطة طريق تقنية تدعم النمو والتحول الرقمي واستمرارية الأعمال.",
        },
      },
    },
    domains: {
      badge: "مجالات الاستشارات التقنية",
      cards: {
        digitalTransformationStrategy: {
          title: "استراتيجية التحول الرقمي",
          description:
            "وضع خارطة طريق عملية للتحول الرقمي تتوافق مع أهداف المنشأة وأولوياتها.",
        },
        enterprisePlatforms: {
          title: "المنصات المؤسسية",
          description:
            "تقييم واختيار المنصات المؤسسية المناسبة وفق احتياجات الأعمال وقابلية التوسع.",
        },
        systemIntegrationWorkflow: {
          title: "ربط الأنظمة وسير العمل",
          description:
            "تصميم حلول تكامل تربط الأنظمة المختلفة وتبسط تدفق البيانات والإجراءات.",
        },
        dataGovernance: {
          title: "حوكمة المعلومات والبيانات",
          description:
            "تحسين إدارة البيانات والمعلومات وتعزيز الامتثال وجودة البيانات داخل المنشأة.",
        },
        enterpriseAi: {
          title: "استشارات الذكاء الاصطناعي للمؤسسات",
          description:
            "تحديد فرص الاستفادة من الذكاء الاصطناعي في تحسين العمليات ورفع الإنتاجية.",
        },
        solutionArchitecture: {
          title: "هندسة الحلول التقنية",
          description:
            "تصميم بنية تقنية مرنة تدعم التوسع والتكامل واستدامة الأعمال.",
        },
      },
    },
    journey: {
      badge: "منهجية العمل",
      steps: {
        understandGoals: {
          number: "01",
          title: "فهم أهداف المنشأة",
          description:
            "ننسجم مع الإدارة على أولويات الأعمال ومعايير النجاح والقيود قبل أي قرار تقني.",
        },
        analyzeCurrentState: {
          number: "02",
          title: "تحليل الوضع الحالي",
          description:
            "نقيّم أنظمتك الحالية وعملياتك ومشهد البيانات ونقاط التكامل.",
        },
        evaluateOptions: {
          number: "03",
          title: "تقييم الخيارات",
          description:
            "نقارن البدائل المتاحة وفق الملاءمة والتكلفة والمخاطر وقابلية التوسع.",
        },
        recommendSolution: {
          number: "04",
          title: "التوصية بالحل",
          description:
            "نقدّم توصيات واضحة ومستقلة مع خارطة طريق عملية للتنفيذ.",
        },
        supportImplementation: {
          number: "05",
          title: "دعم التنفيذ",
          description:
            "نبقى معك في مرحلة التخطيط والتنفيذ لضمان تحويل التوصيات إلى نتائج ملموسة.",
        },
      },
    },
    whyFc: {
      title: "لماذا فايل كاونت؟",
      intro:
        "فايل كاونت شركة استشارات تقنية سعودية متخصصة في مساعدة المنشآت على اتخاذ قرارات تقنية صحيحة، واختيار المنصات المؤسسية الأنسب، وإدارة مشاريع تنفيذ التقنية، وقيادة مبادرات التحول الرقمي، مع تحمل المسؤولية الكاملة عن نجاح تسليم المشاريع.",
      saudiBadge: "🇸🇦 فريق سعودي",
      saudiSubtitle:
        "يفهم مستشارونا الأنظمة واللوائح السعودية، وبيئات المؤسسات، ومتطلبات التحول الرقمي في القطاعين العام والخاص.",
      cards: {
        independentAdvice: {
          title: "استشارات تقنية مستقلة",
          description:
            "نوصي بالتقنية المناسبة بناءً على أهداف أعمالك—لا بناءً على موردي البرمجيات.",
        },
        enterprisePlatformSelection: {
          title: "اختيار المنصات المؤسسية",
          description:
            "نقيّم ERP و CRM و DMS و ECM وسير العمل والمنصات المؤسسية لتحديد الحل الأمثل على المدى الطويل لمنشأتك.",
        },
        projectManagement: {
          title: "إدارة المشاريع",
          description:
            "ندير دورة حياة المشروع بالكامل—من متطلبات الأعمال والتخطيط حتى التنفيذ والاختبار والتسليم الناجح.",
        },
        implementationOversight: {
          title: "الإشراف على التنفيذ",
          description:
            "ننسّق مع شركاء التنفيذ ونشرف على العمل لضمان الجودة والجداول الزمنية وتحقيق أهداف الأعمال.",
        },
        qualityAssurance: {
          title: "ضمان الجودة",
          description:
            "نراجع كل حل ونتحقق منه ونختبره قبل التسليم النهائي لضمان مطابقته لمتطلبات الأعمال المتفق عليها.",
        },
        longTermPartnership: {
          title: "شراكة طويلة المدى",
          description:
            "تستمر علاقتنا بعد الإطلاق من خلال الاستشارات المستمرة والتحسين والتخطيط التقني المستقبلي.",
        },
      },
    },
    industries: {
      badge: "القطاعات التي نخدمها",
      description:
        "ندعم منشآت في قطاعات متعددة تعتمد على تقنية موثوقة وأنظمة متكاملة وبرامج رقمية مستدامة.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: {
        q1: {
          question: "ما الذي تشمله الاستشارات التقنية للمنشآت في السعودية؟",
          answer:
            "تشمل الاستشارات تقييم البيئة الحالية وتحديد المتطلبات وتقييم خيارات الحلول ووضع خارطة طريق للتحول الرقمي والمنصات المؤسسية وربط الأنظمة وحوكمة البيانات والذكاء الاصطناعي للمؤسسات—قبل الاستثمارات الكبيرة.",
        },
        q2: {
          question: "متى يُفضّل الاستعانة بشركة استشارات تقنية؟",
          answer:
            "قبل اختيار منصة أو بدء برنامج تحول أو الالتزام بمشاريع تكامل كبيرة—عندما تحتاج رؤية مستقلة للملاءمة والمخاطر والعائد على الاستثمار.",
        },
        q3: {
          question: "كيف تختلف فايل كاونت عن مزودي البرمجيات؟",
          answer:
            "نبدأ باحتياجات أعمالك. توصياتنا مستقلة—نساعدك على تقييم واختيار المسار المناسب دون بيع منتج واحد محدد.",
        },
        q4: {
          question: "هل تساعدون في استراتيجية التحول الرقمي؟",
          answer:
            "نعم. نعمل مع فرق القيادة لتحديد أولويات التحول الرقمي وخارطة الطريق المرحلية ومؤشرات النجاح بما يتوافق مع متطلبات السوق السعودي وأهداف المنشأة.",
        },
        q5: {
          question: "هل تقدمون الدعم بعد مرحلة الاستشارة؟",
          answer:
            "نعم. يمكننا دعم تخطيط التنفيذ وهندسة الحلول وربط الأنظمة والاستشارات المستمرة لتحويل التوصيات إلى واقع تشغيلي.",
        },
        q6: {
          question: "لمن تناسب الاستشارات التقنية؟",
          answer:
            "الجهات الحكومية والمنشآت التي تحتاج شريكاً موثوقاً لتقييم الخيارات التقنية وتقليل مخاطر المشاريع واتخاذ قرارات مدروسة—دون بناء خبرة داخلية من الصفر.",
        },
      },
    },
    cta: {
      title: "هل تحتاج إلى استشارة تقنية قبل اتخاذ قرارك؟",
      description:
        "يساعدك فريق فايل كاونت على اختيار الحلول المناسبة قبل الاستثمار في أي منصة أو مشروع تقني.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "تواصل معنا",
    },
    schema: {
      serviceName: "الاستشارات التقنية والإرشاد التقني",
      serviceDescription:
        "استشارات تقنية مستقلة لاستراتيجية التحول الرقمي والمنصات المؤسسية وربط الأنظمة وحوكمة البيانات والذكاء الاصطناعي للمؤسسات وهندسة الحلول التقنية.",
      breadcrumbHome: "الرئيسية",
      breadcrumbSolutions: "الحلول",
      breadcrumbCurrent: "الاستشارات التقنية",
    },
  },
};

export function getTechnologyConsultingContent(
  locale: Locale,
): TechnologyConsultingContent {
  return CONTENT[locale];
}
