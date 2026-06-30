import type { Locale } from "@/types/locale";

export const ABOUT_PATH = "/about";

export const ABOUT_TOKENS = {
  containerMaxWidth: 960,
  wideMaxWidth: 1040,
  proseMaxWidth: 680,
  cardGap: 16,
} as const;

export const ABOUT_CARD_TOKENS = {
  minHeight: 120,
  paddingInline: 14,
  paddingBlock: 12,
  iconSize: 26,
  iconGlyphSize: 16,
  iconStrokeWidth: 1.75,
  contentGap: 8,
  titleDescriptionGap: 6,
} as const;

export const HOW_WE_WORK_STEP_KEYS = [
  "understand",
  "analyze",
  "select",
  "manage",
  "ensure",
] as const;

export type HowWeWorkStepKey = (typeof HOW_WE_WORK_STEP_KEYS)[number];

export const WHY_ABOUT_KEYS = [
  "independentConsulting",
  "enterprisePlatformSelection",
  "digitalTransformationAdvisory",
  "projectManagement",
  "implementationSupervision",
  "longTermPartnership",
] as const;

export type WhyAboutKey = (typeof WHY_ABOUT_KEYS)[number];

type CardItem = { title: string; description: string };

type ProcessStep = { number: string; title: string };

type AboutContent = {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  howWeWork: {
    title: string;
    description: string;
    steps: Record<HowWeWorkStepKey, ProcessStep>;
  };
  why: {
    title: string;
    intro: string;
    saudiBadge: string;
    saudiSubtitle: string;
    cards: Record<WhyAboutKey, CardItem>;
  };
  team: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  schema: {
    pageName: string;
    pageDescription: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
};

const CONTENT: Record<Locale, AboutContent> = {
  en: {
    seo: {
      title: "About FileCount | Technology Consulting Partner in Saudi Arabia",
      description:
        "FileCount is a Saudi technology consulting firm helping government entities and enterprises analyze needs, select the right platforms and manage technology projects from start to operation.",
    },
    hero: {
      badge: "About Us",
      title: "The Technology Partner That Helps You Make the Right Decision",
      description:
        "FileCount is a Saudi technology consulting company—not a software vendor. We help government entities and enterprises analyze needs, select enterprise platforms, and manage technology projects from strategy through successful delivery.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Contact Us",
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "FileCount was established to simplify complex technology decisions. We help organizations avoid investing in platforms and programs that do not fit how they actually operate.",
        "Every engagement begins with business context—not product catalogs. Technology should serve the business, and that principle guides our work across Saudi Arabia.",
      ],
    },
    howWeWork: {
      title: "How We Work",
      description:
        "You work directly with FileCount. We manage every technical detail—from assessment and platform selection through implementation oversight—so your team stays focused on business outcomes.",
      steps: {
        understand: { number: "01", title: "Understand Your Business" },
        analyze: { number: "02", title: "Analyze Requirements" },
        select: { number: "03", title: "Select the Best Fit" },
        manage: { number: "04", title: "Manage Delivery" },
        ensure: { number: "05", title: "Ensure Project Success" },
      },
    },
    why: {
      title: "Why FileCount?",
      intro:
        "FileCount is a Saudi technology consulting company—not a software vendor. We help organizations make the right technology decisions, select enterprise platforms, manage implementation projects, and take full responsibility for successful delivery.",
      saudiBadge: "🇸🇦 Saudi Team",
      saudiSubtitle:
        "Our consultants understand Saudi regulations, enterprise environments, and digital transformation requirements across both public and private sectors.",
      cards: {
        independentConsulting: {
          title: "Independent Technology Consulting",
          description:
            "Vendor-neutral recommendations based on your business objectives—not software sales agendas.",
        },
        enterprisePlatformSelection: {
          title: "Enterprise Platform Selection",
          description:
            "Structured evaluation of ERP, CRM, DMS, ECM and workflow platforms to identify the best long-term fit.",
        },
        digitalTransformationAdvisory: {
          title: "Digital Transformation Advisory",
          description:
            "Practical guidance to modernize operations, integrate systems and plan sustainable digital programs.",
        },
        projectManagement: {
          title: "Technology Project Management",
          description:
            "End-to-end management from requirements and planning through implementation, testing and delivery.",
        },
        implementationSupervision: {
          title: "Implementation Supervision",
          description:
            "Coordination with implementation partners, quality assurance and hands-on oversight to ensure timelines and business objectives.",
        },
        longTermPartnership: {
          title: "Long-Term Partnership",
          description:
            "Continuous advisory, optimization and technology planning after go-live.",
        },
      },
    },
    team: {
      title: "Saudi Expertise",
      description:
        "Our team understands Saudi regulations, enterprise environments, digital transformation programs and local business requirements, enabling us to deliver recommendations that fit organizations operating in the Kingdom.",
    },
    cta: {
      title: "Start Your Project with Confidence",
      description:
        "Whether you are evaluating your first platform or planning a major technology program, FileCount helps you choose the right path from the first step.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Contact Us",
    },
    schema: {
      pageName: "About FileCount",
      pageDescription:
        "Saudi technology consulting firm helping organizations make informed technology decisions and manage delivery.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "About Us",
    },
  },
  ar: {
    seo: {
      title: "من نحن | فايل كاونت — شريك استشارات تقنية في السعودية",
      description:
        "فايل كاونت شركة سعودية متخصصة في الاستشارات التقنية، تساعد الجهات الحكومية والشركات على تحليل الاحتياجات واختيار المنصات المناسبة وإدارة المشاريع التقنية.",
    },
    hero: {
      badge: "من نحن",
      title: "الشريك التقني الذي يساعدك على اتخاذ القرار الصحيح",
      description:
        "فايل كاونت شركة استشارات تقنية سعودية—وليست مورّد برمجيات. نساعد الجهات الحكومية والمنشآت على تحليل الاحتياجات واختيار المنصات المؤسسية وإدارة المشاريع التقنية من الاستراتيجية حتى التسليم الناجح.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "تواصل معنا",
    },
    story: {
      title: "قصتنا",
      paragraphs: [
        "تأسست فايل كاونت لتبسيط القرارات التقنية المعقدة. نساعد المنشآت على تجنب الاستثمار في منصات وبرامج لا تتوافق مع واقع عملها.",
        "كل مشروع يبدأ من سياق الأعمال—لا من قوائم المنتجات. التقنية يجب أن تخدم الأعمال، وهذا المبدأ يوجّه عملنا في المملكة.",
      ],
    },
    howWeWork: {
      title: "كيف نعمل؟",
      description:
        "تتعامل مع فايل كاونت مباشرة. نتولى كل التفاصيل التقنية—من التقييم واختيار المنصات حتى الإشراف على التنفيذ—ليظل فريقك مركزاً على نتائج الأعمال.",
      steps: {
        understand: { number: "01", title: "نفهم أعمالك" },
        analyze: { number: "02", title: "نحلل الاحتياج" },
        select: { number: "03", title: "نختار الحل الأنسب" },
        manage: { number: "04", title: "ندير التنفيذ" },
        ensure: { number: "05", title: "نضمن نجاح المشروع" },
      },
    },
    why: {
      title: "لماذا فايل كاونت؟",
      intro:
        "فايل كاونت شركة استشارات تقنية سعودية—وليست مورّد برمجيات. نساعد المنشآت على اتخاذ قرارات تقنية صحيحة واختيار المنصات المؤسسية وإدارة مشاريع التنفيذ مع تحمل المسؤولية الكاملة عن نجاح التسليم.",
      saudiBadge: "🇸🇦 فريق سعودي",
      saudiSubtitle:
        "يفهم مستشارونا الأنظمة واللوائح السعودية، وبيئات المؤسسات، ومتطلبات التحول الرقمي في القطاعين العام والخاص.",
      cards: {
        independentConsulting: {
          title: "استشارات تقنية مستقلة",
          description:
            "توصيات محايدة تجاه الموردين مبنية على أهداف أعمالكم—لا على أجندات مبيعات البرمجيات.",
        },
        enterprisePlatformSelection: {
          title: "اختيار المنصات المؤسسية",
          description:
            "تقييم منظم لـ ERP و CRM و DMS و ECM ومنصات سير العمل لتحديد الأنسب على المدى الطويل.",
        },
        digitalTransformationAdvisory: {
          title: "استشارات التحول الرقمي",
          description:
            "توجيه عملي لتحديث العمليات وربط الأنظمة والتخطيط لبرامج رقمية مستدامة.",
        },
        projectManagement: {
          title: "إدارة المشاريع التقنية",
          description:
            "إدارة شاملة من المتطلبات والتخطيط حتى التنفيذ والاختبار والتسليم.",
        },
        implementationSupervision: {
          title: "الإشراف على التنفيذ",
          description:
            "التنسيق مع شركاء التنفيذ وضمان الجودة والإشراف المباشر لضمان الجداول الزمنية وأهداف الأعمال.",
        },
        longTermPartnership: {
          title: "شراكة طويلة المدى",
          description:
            "استشارات مستمرة وتحسين وتخطيط تقني بعد الإطلاق.",
        },
      },
    },
    team: {
      title: "خبرة سعودية",
      description:
        "يفهم فريقنا الأنظمة واللوائح السعودية، وبيئات المؤسسات، وبرامج التحول الرقمي، ومتطلبات الأعمال المحلية—ما يمكّننا من تقديم توصيات تناسب المنشآت العاملة في المملكة.",
    },
    cta: {
      title: "ابدأ مشروعك بثقة",
      description:
        "سواء كنت تقيّم منصتك الأولى أو تخطط لبرنامج تقني كبير، يساعدك فايل كاونت على اختيار الطريق الصحيح من أول خطوة.",
      primaryCta: "تحدث مع خبير",
      secondaryCta: "تواصل معنا",
    },
    schema: {
      pageName: "من نحن | فايل كاونت",
      pageDescription:
        "شركة سعودية للاستشارات التقنية تساعد المنشآت على اتخاذ قرارات تقنية مدروسة وإدارة التنفيذ.",
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "من نحن",
    },
  },
};

export function getAboutContent(locale: Locale): AboutContent {
  return CONTENT[locale];
}
