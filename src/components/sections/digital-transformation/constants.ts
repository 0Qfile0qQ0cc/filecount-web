import type { Locale } from "@/types/locale";

export const DIGITAL_TRANSFORMATION_PATH = "/solutions/digital-transformation";

export const DIGITAL_TRANSFORMATION_TOKENS = {
  containerMaxWidth: 1280,
  contentMaxWidth: 800,
  descriptionMaxWidth: 760,
  titleToContentGap: 48,
  cardGap: 20,
} as const;

export const DT_FEATURE_CARD_TOKENS = {
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

export const WHY_DT_CARD_KEYS = [
  "operationalEfficiency",
  "manualReduction",
  "workflowAutomation",
  "userExperience",
  "decisionSupport",
  "scalability",
] as const;

export type WhyDtCardKey = (typeof WHY_DT_CARD_KEYS)[number];

export const SOLUTION_KEYS = [
  "documentManagement",
  "workflowAutomation",
  "digitalSignature",
  "knowledgeManagement",
] as const;

export type SolutionKey = (typeof SOLUTION_KEYS)[number];

export const DT_SERVICE_KEYS = [
  "businessAnalysis",
  "solutionSelection",
  "implementation",
  "customization",
  "integration",
  "training",
  "support",
] as const;

export type DtServiceKey = (typeof DT_SERVICE_KEYS)[number];

export const DT_JOURNEY_STEP_KEYS = [
  "needsAnalysis",
  "solutionSelection",
  "implementationCustomization",
  "testingTraining",
  "operationsSupport",
] as const;

export type DtJourneyStepKey = (typeof DT_JOURNEY_STEP_KEYS)[number];

export const DT_BENEFIT_KEYS = [
  "productivity",
  "costReduction",
  "dataQuality",
  "fasterProcesses",
  "customerExperience",
  "compliance",
] as const;

export type DtBenefitKey = (typeof DT_BENEFIT_KEYS)[number];

export const DT_FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export type DtFaqKey = (typeof DT_FAQ_KEYS)[number];

type CardItem = { title: string; description: string };

type JourneyStep = { number: string; title: string; description: string };

type FaqItem = { question: string; answer: string };

type DigitalTransformationContent = {
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
    cards: Record<WhyDtCardKey, CardItem>;
  };
  solutions: {
    badge: string;
    cards: Record<SolutionKey, CardItem>;
  };
  services: {
    badge: string;
    items: Record<DtServiceKey, CardItem>;
  };
  journey: {
    title: string;
    steps: Record<DtJourneyStepKey, JourneyStep>;
  };
  benefits: {
    title: string;
    items: Record<DtBenefitKey, string>;
  };
  faq: {
    title: string;
    items: Record<DtFaqKey, FaqItem>;
  };
  cta: {
    badge: string;
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

const CONTENT: Record<Locale, DigitalTransformationContent> = {
  en: {
    seo: {
      title: "Digital Transformation Solutions Built for Operational Efficiency",
      description:
        "FileCount helps organizations accelerate digital transformation through needs assessment, solution selection, customization, integration and ongoing support—improving efficiency, user experience and business continuity.",
    },
    hero: {
      badge: "Digital Transformation",
      title: "Digital Transformation Solutions Built for Operational Efficiency",
      description:
        "We help organizations accelerate digital transformation through needs assessment, selecting the right solutions, customizing them and connecting them with existing systems—improving operational efficiency, user experience and business continuity.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Request a Consultation",
      secondaryHref: "/contact",
    },
    why: {
      badge: "Why Digital Transformation?",
      cards: {
        operationalEfficiency: {
          title: "Improve Operational Efficiency",
          description:
            "Streamline how work gets done with structured digital processes that reduce delays and wasted effort.",
        },
        manualReduction: {
          title: "Reduce Manual Work",
          description:
            "Replace repetitive tasks with automated steps so teams focus on value-added activities.",
        },
        workflowAutomation: {
          title: "Automate Workflows",
          description:
            "Route requests, documents and approvals automatically with clear accountability at every stage.",
        },
        userExperience: {
          title: "Enhance User Experience",
          description:
            "Deliver intuitive digital experiences that make everyday tasks faster for employees and customers.",
        },
        decisionSupport: {
          title: "Support Better Decisions",
          description:
            "Provide timely, reliable information and visibility to help leaders act with confidence.",
        },
        scalability: {
          title: "Future Scalability",
          description:
            "Build a digital foundation that grows with your organization without constant rework.",
        },
      },
    },
    solutions: {
      badge: "Our Solutions",
      cards: {
        documentManagement: {
          title: "Enterprise Document & Content Management",
          description:
            "Manage documents and files in a central platform with smart search, version control, permissions and secure, organized information storage.",
        },
        workflowAutomation: {
          title: "Process & Workflow Automation",
          description:
            "Transform paper-based and manual processes into automated digital workflows—speeding approvals, reducing errors and improving execution efficiency.",
        },
        digitalSignature: {
          title: "Digital Signature",
          description:
            "Apply compliant digital signature solutions connected to business processes, contracts and electronic approvals—accelerating cycles and reducing paper dependency.",
        },
        knowledgeManagement: {
          title: "Enterprise Knowledge & Information Management",
          description:
            "Organize institutional knowledge and link information to projects and processes—with smart classification and access to content when it matters.",
        },
      },
    },
    services: {
      badge: "FileCount Services",
      items: {
        businessAnalysis: {
          title: "Business Analysis",
          description:
            "Assess current processes, requirements and constraints before defining the right path forward.",
        },
        solutionSelection: {
          title: "Solution Selection",
          description:
            "Recommend the approach and technology that best fit your operational and technical needs.",
        },
        implementation: {
          title: "Implementation",
          description:
            "Deploy solutions according to agreed scope, timelines and quality standards.",
        },
        customization: {
          title: "Customization",
          description:
            "Tailor workflows, interfaces and rules to match how your organization actually works.",
        },
        integration: {
          title: "System Integration",
          description:
            "Connect new solutions with ERP, CRM and existing line-of-business systems.",
        },
        training: {
          title: "Training",
          description:
            "Enable teams with practical training for adoption and confident daily use.",
        },
        support: {
          title: "Technical Support",
          description:
            "Provide ongoing support, optimization and enhancement after go-live.",
        },
      },
    },
    journey: {
      title: "Implementation Journey",
      steps: {
        needsAnalysis: {
          number: "01",
          title: "Needs Analysis",
          description:
            "We study your goals, current processes and integration requirements.",
        },
        solutionSelection: {
          number: "02",
          title: "Solution Selection",
          description:
            "We define the right solution architecture and delivery approach.",
        },
        implementationCustomization: {
          number: "03",
          title: "Implementation & Customization",
          description:
            "We build, configure and tailor the solution to your organization.",
        },
        testingTraining: {
          number: "04",
          title: "Testing & Training",
          description:
            "We validate performance and prepare users for a smooth transition.",
        },
        operationsSupport: {
          number: "05",
          title: "Operations & Ongoing Support",
          description:
            "We launch, monitor and support continuous improvement over time.",
        },
      },
    },
    benefits: {
      title: "What Do Digital Transformation Solutions Deliver?",
      items: {
        productivity: "Higher productivity",
        costReduction: "Lower operational costs",
        dataQuality: "Improved data quality",
        fasterProcesses: "Faster process execution",
        customerExperience: "Better customer experience",
        compliance: "Stronger compliance and governance",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: {
        q1: {
          question: "What digital transformation services does FileCount provide?",
          answer:
            "FileCount provides consulting and implementation services—including business analysis, solution selection, customization, integration, training and technical support—to help organizations adopt the right digital solutions.",
        },
        q2: {
          question: "How do you approach digital transformation projects?",
          answer:
            "We start with needs analysis, then recommend suitable solutions, implement and customize them, integrate with existing systems, train users and provide ongoing support.",
        },
        q3: {
          question: "Can you integrate with our existing systems?",
          answer:
            "Yes. System integration is a core part of our delivery approach—we connect new solutions with ERP, CRM, email and other business systems.",
        },
        q4: {
          question: "How long does a typical project take?",
          answer:
            "Timelines depend on scope, customization depth and integration complexity. After needs analysis, we provide a phased plan with clear milestones.",
        },
        q5: {
          question: "Do you support organizations after go-live?",
          answer:
            "Yes. We offer training, technical support and continuous improvement to keep solutions aligned with evolving business needs.",
        },
        q6: {
          question: "Who is FileCount best suited for?",
          answer:
            "We work with organizations that want a trusted technology partner to assess, implement and operate digital solutions—without building everything from scratch internally.",
        },
      },
    },
    cta: {
      badge: "Start Your Digital Journey",
      title: "Ready to Accelerate Your Digital Transformation?",
      description:
        "Let the FileCount team help you select and implement the right solutions for your organization—aligned with how your business actually operates.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Contact Us",
    },
    schema: {
      serviceName: "Digital Transformation Consulting & Implementation",
      serviceDescription:
        "Consulting and implementation services for document management, workflow automation, digital signature and knowledge management solutions.",
      breadcrumbHome: "Home",
      breadcrumbSolutions: "Solutions",
      breadcrumbCurrent: "Digital Transformation",
    },
  },
  ar: {
    seo: {
      title: "حلول التحول الرقمي المصممة لرفع كفاءة منشأتك",
      description:
        "نساعد المنشآت على تسريع رحلة التحول الرقمي من خلال دراسة الاحتياج واختيار الحلول المناسبة وتخصيصها وربطها مع الأنظمة الحالية، بما يرفع الكفاءة التشغيلية ويحسن تجربة المستخدم.",
    },
    hero: {
      badge: "التحول الرقمي",
      title: "حلول التحول الرقمي المصممة لرفع كفاءة منشأتك",
      description:
        "نساعد المنشآت على تسريع رحلة التحول الرقمي من خلال دراسة الاحتياج، واختيار الحلول المناسبة، وتخصيصها، وربطها مع الأنظمة الحالية، بما يرفع الكفاءة التشغيلية ويحسن تجربة المستخدم ويعزز استمرارية الأعمال.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "اطلب استشارة",
      secondaryHref: "/contact",
    },
    why: {
      badge: "لماذا التحول الرقمي؟",
      cards: {
        operationalEfficiency: {
          title: "رفع الكفاءة التشغيلية",
          description:
            "تنظيم تنفيذ الأعمال بعمليات رقمية تقلل التأخير وتسرّع إنجاز المهام.",
        },
        manualReduction: {
          title: "تقليل الإجراءات اليدوية",
          description:
            "استبدال المهام المتكررة بخطوات مؤتمتة ليركز الفريق على العمل ذي القيمة.",
        },
        workflowAutomation: {
          title: "أتمتة سير العمل",
          description:
            "توجيه الطلبات والمستندات والموافقات تلقائياً مع وضوح المسؤوليات في كل مرحلة.",
        },
        userExperience: {
          title: "تحسين تجربة المستخدم",
          description:
            "تقديم تجربة رقمية سهلة تجعل المهام اليومية أسرع للموظفين والعملاء.",
        },
        decisionSupport: {
          title: "دعم اتخاذ القرار",
          description:
            "توفير معلومات واضحة في الوقت المناسب لدعم قرارات أكثر دقة وثقة.",
        },
        scalability: {
          title: "قابلية التوسع مستقبلاً",
          description:
            "بناء أساس رقمي ينمو مع المنشأة دون الحاجة لإعادة البناء المتكررة.",
        },
      },
    },
    solutions: {
      badge: "حلولنا",
      cards: {
        documentManagement: {
          title: "إدارة المستندات والمحتوى المؤسسي",
          description:
            "إدارة المستندات والملفات في منصة مركزية مع البحث الذكي، وإدارة الإصدارات، والصلاحيات، وحفظ المعلومات بطريقة منظمة وآمنة.",
        },
        workflowAutomation: {
          title: "أتمتة الإجراءات وسير العمل",
          description:
            "تحويل الإجراءات الورقية واليدوية إلى عمليات رقمية مؤتمتة، مع تسريع الموافقات، وتقليل الأخطاء، وتحسين كفاءة تنفيذ الأعمال.",
        },
        digitalSignature: {
          title: "التوقيع الرقمي",
          description:
            "تطبيق حلول توقيع رقمي متوافقة مع الأنظمة السعودية، وربطها مع إجراءات العمل والعقود والموافقات الإلكترونية لتسريع دورة الأعمال وتقليل الاعتماد على الورق.",
        },
        knowledgeManagement: {
          title: "إدارة المعرفة والمعلومات المؤسسية",
          description:
            "تنظيم المعرفة المؤسسية وربط المعلومات بالمشاريع والإجراءات، مع تصنيف ذكي وسهولة الوصول للمحتوى في الوقت المناسب.",
        },
      },
    },
    services: {
      badge: "خدمات فايل كاونت",
      items: {
        businessAnalysis: {
          title: "تحليل احتياجات الأعمال",
          description:
            "تقييم العمليات الحالية والمتطلبات والقيود قبل تحديد المسار المناسب.",
        },
        solutionSelection: {
          title: "اختيار الحل المناسب",
          description:
            "توصية بالنهج والتقنية الأنسب لاحتياجاتك التشغيلية والتقنية.",
        },
        implementation: {
          title: "التنفيذ",
          description:
            "إطلاق الحلول وفق النطاق والجدول الزمني ومعايير الجودة المتفق عليها.",
        },
        customization: {
          title: "التخصيص",
          description:
            "تخصيص سير العمل والواجهات والقواعد بما يتوافق مع واقع عمل منشأتك.",
        },
        integration: {
          title: "ربط الأنظمة",
          description:
            "ربط الحلول الجديدة مع ERP و CRM والأنظمة التشغيلية الحالية.",
        },
        training: {
          title: "التدريب",
          description:
            "تمكين الفرق بتدريب عملي للاعتماد والاستخدام اليومي بثقة.",
        },
        support: {
          title: "الدعم الفني",
          description:
            "تقديم دعم مستمر وتحسينات وتطويرات بعد الإطلاق.",
        },
      },
    },
    journey: {
      title: "رحلة التنفيذ",
      steps: {
        needsAnalysis: {
          number: "01",
          title: "تحليل الاحتياج",
          description:
            "ندرس أهداف منشأتك وعملياتها الحالية ومتطلبات التكامل.",
        },
        solutionSelection: {
          number: "02",
          title: "اختيار الحل",
          description:
            "نحدد الحل والنهج التقني الأنسب لاحتياجاتك.",
        },
        implementationCustomization: {
          number: "03",
          title: "التنفيذ والتخصيص",
          description:
            "نبني ونُعدّ ونخصص الحل بما يناسب منشأتك.",
        },
        testingTraining: {
          number: "04",
          title: "الاختبارات والتدريب",
          description:
            "نتحقق من الأداء ونجهّز المستخدمين لانتقال سلس.",
        },
        operationsSupport: {
          number: "05",
          title: "التشغيل والدعم المستمر",
          description:
            "نطلق الحل وندعم التحسين المستمر على المدى الطويل.",
        },
      },
    },
    benefits: {
      title: "ماذا تحقق حلول التحول الرقمي؟",
      items: {
        productivity: "رفع الإنتاجية",
        costReduction: "تقليل التكاليف التشغيلية",
        dataQuality: "تحسين جودة البيانات",
        fasterProcesses: "تسريع الإجراءات",
        customerExperience: "تحسين تجربة العملاء",
        compliance: "تعزيز الامتثال والحوكمة",
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: {
        q1: {
          question: "ما خدمات التحول الرقمي التي يقدمها فايل كاونت؟",
          answer:
            "يقدم فايل كاونت خدمات استشارات وتنفيذ تشمل تحليل الأعمال واختيار الحلول والتخصيص والتكامل والتدريب والدعم الفني—لمساعدة المنشآت على تبني الحلول الرقمية المناسبة.",
        },
        q2: {
          question: "كيف تتم إدارة مشاريع التحول الرقمي؟",
          answer:
            "نبدأ بتحليل الاحتياج، ثم نوصي بالحلول المناسبة، وننفّذها ونخصصها، ونربطها مع الأنظمة الحالية، وندرب المستخدمين ونوفر الدعم المستمر.",
        },
        q3: {
          question: "هل يمكن ربط الحلول مع أنظمتنا الحالية؟",
          answer:
            "نعم. ربط الأنظمة جزء أساسي من منهجية التنفيذ—نربط الحلول مع ERP و CRM والبريد والأنظمة التشغيلية الأخرى.",
        },
        q4: {
          question: "كم تستغرق مدة المشروع عادةً؟",
          answer:
            "تعتمد المدة على نطاق المشروع وعمق التخصيص والتكامل. بعد تحليل الاحتياج، نقدم خطة مرحلية بمعالم واضحة.",
        },
        q5: {
          question: "هل توفرون الدعم بعد الإطلاق؟",
          answer:
            "نعم. نقدم التدريب والدعم الفني والتحسين المستمر لضمان توافق الحلول مع تطور احتياجات الأعمال.",
        },
        q6: {
          question: "لمن تناسب خدمات فايل كاونت؟",
          answer:
            "نعمل مع المنشآت التي تبحث عن شريك تقني موثوق لتقييم وتنفيذ وتشغيل الحلول الرقمية—دون الحاجة لبناء كل شيء داخلياً من الصفر.",
        },
      },
    },
    cta: {
      badge: "ابدأ رحلتك الرقمية",
      title: "جاهز لتسريع رحلة التحول الرقمي؟",
      description:
        "دع فريق فايل كاونت يساعدك في اختيار الحلول المناسبة لمنشأتك وتنفيذها بما يتوافق مع احتياجات أعمالك.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "تواصل معنا",
    },
    schema: {
      serviceName: "استشارات وتنفيذ التحول الرقمي",
      serviceDescription:
        "خدمات استشارات وتنفيذ لإدارة المستندات وأتمتة سير العمل والتوقيع الرقمي وإدارة المعرفة المؤسسية.",
      breadcrumbHome: "الرئيسية",
      breadcrumbSolutions: "الحلول",
      breadcrumbCurrent: "التحول الرقمي",
    },
  },
};

export function getDigitalTransformationContent(
  locale: Locale,
): DigitalTransformationContent {
  return CONTENT[locale];
}
