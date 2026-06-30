import type { Locale } from "@/types/locale";

export const CAREERS_PATH = "/careers";

export const CAREERS_TOKENS = {
  containerMaxWidth: 1040,
  contentMaxWidth: 800,
  proseMaxWidth: 680,
  cardGap: 16,
  sectionPadding: "py-10 lg:py-14",
} as const;

export const CAREERS_CARD_TOKENS = {
  minHeightWithDescription: 120,
  minHeightTitleOnly: 88,
  paddingInline: 14,
  paddingBlock: 12,
  iconGlyphSize: 16,
  iconStrokeWidth: 1.75,
  contentGap: 8,
  titleDescriptionGap: 6,
} as const;

export const WHY_JOIN_KEYS = [
  "meaningfulWork",
  "professionalGrowth",
  "collaborativeEnvironment",
  "longTermOpportunities",
] as const;

export type WhyJoinKey = (typeof WHY_JOIN_KEYS)[number];

export const AREA_KEYS = [
  "enterprisePlatforms",
  "technologyConsulting",
  "digitalTransformation",
  "cybersecurity",
  "cloudInfrastructure",
  "infrastructureNetworking",
  "projectManagement",
  "businessDevelopment",
  "technicalSupport",
] as const;

export type AreaKey = (typeof AREA_KEYS)[number];

export const LOOK_FOR_KEYS = [
  "problemSolvers",
  "technologyEnthusiasts",
  "continuousLearners",
  "teamPlayers",
  "customerFocused",
  "strongCommunication",
] as const;

export type LookForKey = (typeof LOOK_FOR_KEYS)[number];

export const VALUE_KEYS = [
  "innovation",
  "excellence",
  "integrity",
  "partnership",
  "commitment",
] as const;

export type ValueKey = (typeof VALUE_KEYS)[number];

type CardItem = { title: string; description: string };

type TitleItem = { title: string };

export type CareersApplicationContent = {
  title: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  successFollowUp: string;
  fields: {
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    expertise: string;
    expertisePlaceholder: string;
    experience: string;
    experiencePlaceholder: string;
    message: string;
    cv: string;
    cvHint: string;
    cvDropHint: string;
  };
  errors: {
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    expertise: string;
    experience: string;
    messageMin: string;
    messageMax: string;
    cv: string;
    cvType: string;
    cvSize: string;
  };
  uploadProgressLabel: string;
  expertiseOptions: string[];
  experienceOptions: { value: string; label: string }[];
};

type CareersContent = {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whyJoin: {
    badge: string;
    cards: Record<WhyJoinKey, CardItem>;
  };
  areas: {
    badge: string;
    items: Record<AreaKey, TitleItem>;
  };
  lookFor: {
    badge: string;
    items: Record<LookForKey, TitleItem>;
  };
  values: {
    badge: string;
    items: Record<ValueKey, TitleItem>;
  };
  buildingTeam: {
    badge: string;
    title: string;
    description: string;
  };
  application: CareersApplicationContent;
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

const EXPERIENCE_OPTIONS_EN = [
  { value: "0-2", label: "0–2 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "6-10", label: "6–10 years" },
  { value: "10+", label: "10+ years" },
];

const EXPERIENCE_OPTIONS_AR = [
  { value: "0-2", label: "0–2 سنة" },
  { value: "3-5", label: "3–5 سنوات" },
  { value: "6-10", label: "6–10 سنوات" },
  { value: "10+", label: "أكثر من 10 سنوات" },
];

const CONTENT: Record<Locale, CareersContent> = {
  en: {
    seo: {
      title: "Careers at FileCount | Enterprise Technology Consulting in Saudi Arabia",
      description:
        "Join FileCount and help organizations make better technology decisions, deliver digital transformation projects and implement enterprise solutions across Saudi Arabia.",
    },
    hero: {
      badge: "Careers",
      title: "Build the Future of Enterprise Technology",
      description:
        "At FileCount, we help organizations make better technology decisions, deliver successful digital transformation projects, and implement enterprise solutions that create long-term business value. We are always interested in meeting talented professionals who are passionate about technology, consulting and enterprise transformation.",
      primaryCta: "Submit Your CV",
      secondaryCta: "Contact Us",
    },
    whyJoin: {
      badge: "Why Join FileCount",
      cards: {
        meaningfulWork: {
          title: "Meaningful Work",
          description:
            "Contribute to strategic projects that help organizations modernize and grow.",
        },
        professionalGrowth: {
          title: "Professional Growth",
          description:
            "Expand your knowledge across enterprise platforms, consulting and digital transformation.",
        },
        collaborativeEnvironment: {
          title: "Collaborative Environment",
          description:
            "Work with experienced professionals and trusted technology partners.",
        },
        longTermOpportunities: {
          title: "Long-Term Opportunities",
          description:
            "Grow with a company focused on quality, innovation and lasting client relationships.",
        },
      },
    },
    areas: {
      badge: "Areas of Opportunity",
      items: {
        enterprisePlatforms: { title: "Enterprise Platforms" },
        technologyConsulting: { title: "Technology Consulting" },
        digitalTransformation: { title: "Digital Transformation" },
        cybersecurity: { title: "Cybersecurity" },
        cloudInfrastructure: { title: "Cloud Infrastructure" },
        infrastructureNetworking: { title: "Infrastructure & Networking" },
        projectManagement: { title: "Project Management" },
        businessDevelopment: { title: "Business Development" },
        technicalSupport: { title: "Technical Support" },
      },
    },
    lookFor: {
      badge: "What We Look For",
      items: {
        problemSolvers: { title: "Problem Solvers" },
        technologyEnthusiasts: { title: "Technology Enthusiasts" },
        continuousLearners: { title: "Continuous Learners" },
        teamPlayers: { title: "Team Players" },
        customerFocused: { title: "Customer-Focused Professionals" },
        strongCommunication: { title: "Strong Communication Skills" },
      },
    },
    values: {
      badge: "Our Values",
      items: {
        innovation: { title: "Innovation" },
        excellence: { title: "Excellence" },
        integrity: { title: "Integrity" },
        partnership: { title: "Partnership" },
        commitment: { title: "Commitment" },
      },
    },
    buildingTeam: {
      badge: "Building Our Team",
      title: "We're Building Our Team",
      description:
        "FileCount is continuously building relationships with talented professionals, consultants, implementation partners and technology specialists. Even if there isn't an immediate opening, we welcome exceptional people who want to contribute to enterprise technology projects across Saudi Arabia.",
    },
    application: {
      title: "Submit Your Application",
      submitLabel: "Submit Application",
      submittingLabel: "Submitting…",
      successTitle: "Thank you for your application.",
      successMessage: "Our team has received your profile successfully.",
      successFollowUp:
        "We will contact you if your experience matches future opportunities.",
      fields: {
        fullName: "Full Name",
        email: "Email Address",
        phone: "Mobile Number",
        linkedin: "LinkedIn Profile",
        expertise: "Area of Expertise",
        expertisePlaceholder: "Select an area",
        experience: "Years of Experience",
        experiencePlaceholder: "Select experience",
        message: "Message",
        cv: "Upload CV",
        cvHint: "PDF, DOC or DOCX — maximum 10 MB",
        cvDropHint: "Drag and drop your CV here, or click to browse",
      },
      errors: {
        fullName: "Please enter your full name.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid mobile number.",
        linkedin: "Please provide a valid LinkedIn profile.",
        expertise: "Please select your area of expertise.",
        experience: "Please select your years of experience.",
        messageMin: "Please enter at least 20 characters.",
        messageMax: "Message must not exceed 1000 characters.",
        cv: "Please upload your CV.",
        cvType: "Please upload a PDF, DOC or DOCX file.",
        cvSize: "File size must not exceed 10 MB.",
      },
      uploadProgressLabel: "Uploading",
      expertiseOptions: [
        "Enterprise Platforms",
        "Technology Consulting",
        "Digital Transformation",
        "Cybersecurity",
        "Cloud Infrastructure",
        "Infrastructure & Networking",
        "Project Management",
        "Business Development",
        "Technical Support",
        "Other",
      ],
      experienceOptions: EXPERIENCE_OPTIONS_EN,
    },
    cta: {
      title: "Ready to Build the Future With FileCount?",
      description:
        "Whether you're an experienced consultant, engineer, project manager or technology specialist, we'd love to hear from you.",
      primaryCta: "Submit Your CV",
      secondaryCta: "Contact Us",
    },
    schema: {
      pageName: "Careers at FileCount",
      pageDescription:
        "Career opportunities at FileCount, a Saudi enterprise technology consulting company.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Careers",
    },
  },
  ar: {
    seo: {
      title: "الوظائف | فايل كاونت — فرص العمل في الاستشارات التقنية بالمملكة",
      description:
        "انضم إلى فايل كاونت وساهم في تمكين المنشآت من اتخاذ قرارات تقنية مدروسة، وتنفيذ مشاريع التحول الرقمي، وبناء حلول مؤسسية مستدامة في المملكة العربية السعودية.",
    },
    hero: {
      badge: "الوظائف",
      title: "شاركنا في بناء مستقبل التقنية المؤسسية",
      description:
        "في فايل كاونت، نساند المنشآت في اتخاذ قرارات تقنية أفضل، وتنفيذ مشاريع تحول رقمي ناجحة، وإطلاق حلول مؤسسية تحقق قيمة أعمال مستدامة. نرحّب بالتواصل مع الكفاءات المتميزة في مجالات الاستشارات التقنية والتحول المؤسسي.",
      primaryCta: "قدّم سيرتك الذاتية",
      secondaryCta: "تواصل معنا",
    },
    whyJoin: {
      badge: "لماذا تنضم إلى فايل كاونت؟",
      cards: {
        meaningfulWork: {
          title: "عمل ذو أثر استراتيجي",
          description:
            "ساهم في مشاريع تساعد المنشآت على التحديث والنمو وفق أولويات أعمال واضحة.",
        },
        professionalGrowth: {
          title: "مسار نمو مهني",
          description:
            "طوّر خبرتك في المنصات المؤسسية والاستشارات التقنية وبرامج التحول الرقمي.",
        },
        collaborativeEnvironment: {
          title: "بيئة عمل تعاونية",
          description:
            "تعاون مع نخبة من المختصين وشركاء التقنية في بيئة مهنية محفّزة.",
        },
        longTermOpportunities: {
          title: "فرص نمو مستدامة",
          description:
            "انضم إلى منظومة تركز على الجودة والابتكار وبناء علاقات طويلة الأمد مع العملاء.",
        },
      },
    },
    areas: {
      badge: "مجالات العمل والتخصص",
      items: {
        enterprisePlatforms: { title: "المنصات المؤسسية" },
        technologyConsulting: { title: "الاستشارات التقنية" },
        digitalTransformation: { title: "التحول الرقمي" },
        cybersecurity: { title: "الأمن السيبراني" },
        cloudInfrastructure: { title: "البنية السحابية" },
        infrastructureNetworking: { title: "البنية التحتية والشبكات" },
        projectManagement: { title: "إدارة المشاريع" },
        businessDevelopment: { title: "تطوير الأعمال" },
        technicalSupport: { title: "الدعم التقني" },
      },
    },
    lookFor: {
      badge: "الكفاءات التي نبحث عنها",
      items: {
        problemSolvers: { title: "القدرة على حل المشكلات" },
        technologyEnthusiasts: { title: "الشغف بالتقنية" },
        continuousLearners: { title: "التطوير والتعلم المستمر" },
        teamPlayers: { title: "العمل بروح الفريق" },
        customerFocused: { title: "التركيز على نجاح العميل" },
        strongCommunication: { title: "مهارات تواصل فعّالة" },
      },
    },
    values: {
      badge: "قيمنا المؤسسية",
      items: {
        innovation: { title: "التفكير الابتكاري" },
        excellence: { title: "التميّز" },
        integrity: { title: "النزاهة" },
        partnership: { title: "الشراكة" },
        commitment: { title: "الالتزام" },
      },
    },
    buildingTeam: {
      badge: "بناء فريقنا",
      title: "نبني فريقنا",
      description:
        "تواصل فايل كاونت باستمرار مع الكفاءات والمستشارين وشركاء التنفيذ والمتخصصين التقنيين. حتى في غياب شاغر فوري، نرحّب بالمواهب الاستثنائية الراغبة في المساهمة في مشاريع التقنية المؤسسية في المملكة.",
    },
    application: {
      title: "قدّم طلبك",
      submitLabel: "إرسال الطلب",
      submittingLabel: "جاري الإرسال…",
      successTitle: "شكراً لتقديم طلبك.",
      successMessage: "استلم فريقنا ملفك بنجاح.",
      successFollowUp:
        "سنتواصل معك في حال توافقت خبراتك مع فرص مستقبلية.",
      fields: {
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        linkedin: "حساب LinkedIn",
        expertise: "مجال التخصص",
        expertisePlaceholder: "اختر مجال التخصص",
        experience: "سنوات الخبرة",
        experiencePlaceholder: "اختر سنوات الخبرة",
        message: "رسالة التقديم",
        cv: "رفع السيرة الذاتية",
        cvHint: "PDF أو DOC أو DOCX — بحد أقصى 10 ميجابايت",
        cvDropHint: "اسحب ملف السيرة الذاتية وأفلته هنا، أو انقر للاختيار",
      },
      errors: {
        fullName: "يرجى إدخال الاسم الكامل.",
        email: "يرجى إدخال بريد إلكتروني صحيح.",
        phone: "يرجى إدخال رقم جوال صحيح.",
        linkedin: "يرجى إدخال رابط LinkedIn صحيح.",
        expertise: "يرجى اختيار مجال التخصص.",
        experience: "يرجى اختيار سنوات الخبرة.",
        messageMin: "يرجى كتابة رسالة لا تقل عن 20 حرفاً.",
        messageMax: "يجب ألا تتجاوز الرسالة 1000 حرف.",
        cv: "يرجى رفع السيرة الذاتية.",
        cvType: "يرجى رفع ملف بصيغة PDF أو DOC أو DOCX.",
        cvSize: "يجب ألا يتجاوز حجم الملف 10 ميجابايت.",
      },
      uploadProgressLabel: "جاري الرفع",
      expertiseOptions: [
        "المنصات المؤسسية",
        "الاستشارات التقنية",
        "التحول الرقمي",
        "الأمن السيبراني",
        "البنية السحابية",
        "البنية التحتية والشبكات",
        "إدارة المشاريع",
        "تطوير الأعمال",
        "الدعم التقني",
        "أخرى",
      ],
      experienceOptions: EXPERIENCE_OPTIONS_AR,
    },
    cta: {
      title: "هل أنت مستعد لبناء المستقبل مع فايل كاونت؟",
      description:
        "سواء كنت مستشاراً أو مهندساً أو مدير مشروع أو متخصصاً تقنياً، يسعدنا التعرّف على خبراتك.",
      primaryCta: "قدّم سيرتك الذاتية",
      secondaryCta: "تواصل معنا",
    },
    schema: {
      pageName: "الوظائف | فايل كاونت",
      pageDescription:
        "فرص العمل في فايل كاونت، شركة استشارات تقنية مؤسسية سعودية.",
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "الوظائف",
    },
  },
};

export function getCareersContent(locale: Locale): CareersContent {
  return CONTENT[locale];
}
