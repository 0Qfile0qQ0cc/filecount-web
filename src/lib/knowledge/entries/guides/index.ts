import type { GuideEntry } from "../../types";

export const documentManagementGuide: GuideEntry = {
  type: "guide",
  slug: "document-management",
  categoryId: "buying-guides",
  searchTerms: ["document management", "I want document management", "DMS guide", "ECM guide"],
  content: {
    en: {
      title: "I Want Document Management",
      seo: {
        title: "Document Management Buying Guide | FileCount Knowledge",
        description:
          "From business problem to technology direction — how to approach document management, DMS and ECM decisions.",
      },
      problemStatement: "I need to organize, secure and retrieve business documents efficiently.",
      introduction:
        "Document management starts with understanding what you store, who needs access, retention rules and how documents flow through approvals. Technology direction typically leads to DMS or broader ECM.",
      steps: [
        {
          title: "Inventory document types",
          description: "List contracts, invoices, HR files, project documents and regulatory records.",
        },
        {
          title: "Define governance",
          description: "Set retention, access and approval policies before selecting software.",
        },
        {
          title: "Assess volume and format",
          description: "Paper archives, email attachments and born-digital files each need a plan.",
        },
        {
          title: "Map integrations",
          description: "Identify ERP, HR and workflow systems that must connect to documents.",
        },
      ],
      recommendedTechnologies: [
        { slug: "dms", label: "DMS", reason: "Core document storage, search and access control" },
        { slug: "ecm", label: "ECM", reason: "When records management and broader governance are required" },
        { slug: "workflow", label: "Workflow", reason: "When approvals and routing are central to the problem" },
      ],
      decisionFactors: [
        "Regulatory retention requirements",
        "Arabic OCR and search needs",
        "Branch and role-based access",
        "Integration with existing ERP or HR",
      ],
      faqs: [
        {
          question: "DMS or shared drive?",
          answer: "Shared drives lack retention, audit and workflow. DMS is the direction when governance and scale matter.",
        },
      ],
      aeo: {
        alternatives: "Lightweight file sharing or SharePoint may suffice for simple needs.",
        howToChoose: "Start from governance requirements, not vendor demos.",
        commonMistakes: ["Scanning everything without taxonomy", "Skipping user adoption planning"],
        implementationChecklist: ["Taxonomy approved", "Pilot department selected", "Integration scope defined"],
      },
    },
    ar: {
      title: "أريد إدارة المستندات",
      seo: {
        title: "دليل شراء إدارة المستندات | FileCount Knowledge",
        description:
          "من مشكلة الأعمال إلى التوجه التقني — كيف تتعامل مع قرارات إدارة المستندات وDMS وECM.",
      },
      problemStatement: "أحتاج لتنظيم مستندات الأعمال وتأمينها واسترجاعها بكفاءة.",
      introduction:
        "إدارة المستندات تبدأ بفهم ما تخزّنه ومن يحتاج الوصول وقواعد الاحتفاظ وكيف تمر المستندات عبر الموافقات. التوجه التقني يقود عادة إلى DMS أو ECM أوسع.",
      steps: [
        { title: "جرد أنواع المستندات", description: "عقود وفواتير وملفات HR ومستندات مشاريع وسجلات تنظيمية." },
        { title: "حدد الحوكمة", description: "ضع سياسات retention وaccess وapproval قبل اختيار البرمجيات." },
        { title: "قيّم الحجم والصيغة", description: "أرشives ورقية ومرفقات email وملفات digital لكل منها خطة." },
        { title: "ارسم التكاملات", description: "حدد ERP وHR وworkflow التي يجب أن تتصل بالمستندات." },
      ],
      recommendedTechnologies: [
        { slug: "dms", label: "DMS", reason: "تخزين مستندات أساسي وبحث وتحكم بالوصول" },
        { slug: "ecm", label: "ECM", reason: "عند الحاجة لrecords management وحوكمة أوسع" },
        { slug: "workflow", label: "Workflow", reason: "عندما الموافقات والتوجيه محور المشكلة" },
      ],
      decisionFactors: [
        "متطلبات retention تنظيمية",
        "حاجات OCR وبحث عربي",
        "وصول حسب الفرع والدور",
        "تكامل مع ERP أو HR الحالي",
      ],
      faqs: [
        {
          question: "DMS أم shared drive؟",
          answer: "Shared drives تفتقر retention وaudit وworkflow. DMS التوجه عندما الحوكمة والحجم matter.",
        },
      ],
      aeo: {
        alternatives: "مشاركة ملفات خفيفة أو SharePoint قد تكفي لاحتياجات بسيطة.",
        howToChoose: "ابدأ من متطلبات الحوكمة وليس عروض المزودين.",
        commonMistakes: ["مسح كل شيء دون taxonomy", "تخطي تخطيط اعتماد المستخدمين"],
        implementationChecklist: ["taxonomy معتمد", "إدارة pilot محددة", "نطاق تكامل محدد"],
      },
    },
  },
};

export const erpSelectionGuide: GuideEntry = {
  type: "guide",
  slug: "erp-selection",
  categoryId: "buying-guides",
  searchTerms: ["I want ERP", "ERP selection", "ERP buying guide"],
  content: {
    en: {
      title: "I Want ERP",
      seo: {
        title: "ERP Selection Guide | FileCount Knowledge",
        description: "Guide from business need to ERP technology direction — vendor-neutral.",
      },
      problemStatement: "I need to unify finance, operations and reporting across my organization.",
      introduction:
        "ERP selection should follow process discovery, not vendor demos. Define scope, entities, compliance and integration before evaluating platforms.",
      steps: [
        { title: "Map current processes", description: "Finance, procurement, inventory and HR touchpoints." },
        { title: "Define scope and phases", description: "Must-have modules vs. future phases." },
        { title: "Document integration needs", description: "CRM, WMS, banking, e-invoicing (ZATCA)." },
        { title: "Build requirements matrix", description: "Score by fit — remain vendor-neutral." },
      ],
      recommendedTechnologies: [{ slug: "erp", label: "ERP", reason: "Integrated finance and operations platform" }],
      decisionFactors: ["Multi-branch structure", "Industry compliance", "Arabic and local tax rules", "IT capacity"],
      faqs: [{ question: "When is ERP premature?", answer: "When processes are undefined or a point solution solves 80% of pain at lower risk." }],
      aeo: {
        alternatives: "Best-of-breed finance plus integration middleware.",
        howToChoose: "Process first, platform second.",
        commonMistakes: ["Demo-driven selection", "Ignoring data migration"],
        implementationChecklist: ["Steering committee", "Requirements signed off", "Phased roadmap"],
      },
    },
    ar: {
      title: "أريد ERP",
      seo: {
        title: "دليل اختيار ERP | FileCount Knowledge",
        description: "من حاجة الأعمال إلى توجه ERP — محايد دون توصية بمزود.",
      },
      problemStatement: "أحتاج لتوحيد المالية والعمليات والتقارير عبر منشأتي.",
      introduction: "اختيار ERP يتبع اكتشاف العمليات وليس عروض المزودين. حدد النطاق والكيانات والامتثال والتكامل قبل التقييم.",
      steps: [
        { title: "ارسم العمليات الحالية", description: "finance ومشتريات ومخزون وHR touchpoints." },
        { title: "حدد النطاق والمراحل", description: "modules ضرورية مقابل مراحل مستقبلية." },
        { title: "وثّق احتياجات التكامل", description: "CRM وWMS وbanking وفوترة e-invoicing (ZATCA)." },
        { title: "ابنِ مصفوفة متطلبات", description: "قيّم بالملاءمة — محايد دون مزود." },
      ],
      recommendedTechnologies: [{ slug: "erp", label: "ERP", reason: "منصة مالية وتشغيلية متكاملة" }],
      decisionFactors: ["هيكل multi-branch", "امتثال القطاع", "قواعد عربية وضريبية محلية", "قدرة IT"],
      faqs: [{ question: "متى ERP مبكر؟", answer: "عندما العمليات غير معرّفة أو حل نقطي يحل 80% بمخاطر أقل." }],
      aeo: {
        alternatives: "finance best-of-breed مع middleware تكامل.",
        howToChoose: "العمليات أولاً، المنصة ثانياً.",
        commonMistakes: ["اختيار driven بالdemo", "تجاهل ترحيل البيانات"],
        implementationChecklist: ["لجنة توجيه", "متطلبات معتمدة", "roadmap مرحلي"],
      },
    },
  },
};

export const cybersecurityGuide: GuideEntry = {
  type: "guide",
  slug: "cybersecurity",
  categoryId: "buying-guides",
  searchTerms: ["I want cybersecurity", "cybersecurity guide", "security strategy"],
  content: {
    en: {
      title: "I Want Cybersecurity",
      seo: {
        title: "Cybersecurity Technology Direction Guide | FileCount Knowledge",
        description: "From business risk to cybersecurity technology areas — vendor-neutral guidance.",
      },
      problemStatement: "I need to protect systems, data and users from cyber threats.",
      introduction:
        "Cybersecurity is a program, not a single product. Technology direction spans identity, network, endpoint, email, cloud and security operations.",
      steps: [
        { title: "Assess risk and assets", description: "Identify critical systems, data and attack surfaces." },
        { title: "Align with frameworks", description: "NCA ECC, ISO 27001 or industry requirements in KSA." },
        { title: "Prioritize controls", description: "Identity, MFA, backup, monitoring and incident response." },
        { title: "Plan phased investment", description: "Quick wins vs. strategic platform decisions." },
      ],
      recommendedTechnologies: [],
      decisionFactors: ["Regulatory obligations", "Cloud vs on-prem mix", "Remote workforce", "Third-party access"],
      faqs: [{ question: "One tool or layered approach?", answer: "Defense in depth — multiple complementary controls, not one silver bullet." }],
      aeo: {
        alternatives: "Managed security services vs. in-house SOC.",
        howToChoose: "Risk-based prioritization over tool shopping.",
        commonMistakes: ["Buying tools without process", "Ignoring user training"],
        implementationChecklist: ["Risk register", "MFA rollout", "Incident response plan"],
      },
    },
    ar: {
      title: "أريد الأمن السيبراني",
      seo: {
        title: "دليل توجه تقنية الأمن السيبراني | FileCount Knowledge",
        description: "من مخاطر الأعمال إلى مجالات تقنية الأمن — إرشاد محايد.",
      },
      problemStatement: "أحتاج لحماية الأنظمة والبيانات والمستخدمين من التهديدات.",
      introduction: "الأمن السيبراني برنامج وليس منتجاً واحداً. التوجه يشمل identity وnetwork وendpoint وemail وسحابة وoperations أمنية.",
      steps: [
        { title: "قيّم المخاطر والأصول", description: "حدد الأنظمة الحرجة والبيانات وattack surfaces." },
        { title: "مواءمة مع frameworks", description: "NCA ECC أو ISO 27001 أو متطلبات القطاع في KSA." },
        { title: "رتّب الضوابط", description: "identity وMFA وbackup وmonitoring وincident response." },
        { title: "خطط استثمار مرحلي", description: "quick wins مقابل قرارات منصة strategic." },
      ],
      recommendedTechnologies: [],
      decisionFactors: ["التزامات تنظيمية", "مزيج cloud vs on-prem", "workforce عن بُعد", "وصول third-party"],
      faqs: [{ question: "أداة واحدة أم layered؟", answer: "defense in depth — ضوابط complementary متعددة." }],
      aeo: {
        alternatives: "managed security services vs SOC داخلي.",
        howToChoose: "أولوية risk-based وليس tool shopping.",
        commonMistakes: ["شراء أدوات دون عمليات", "تجاهل تدريب المستخدمين"],
        implementationChecklist: ["سجل مخاطر", "إ rollout MFA", "خطة incident response"],
      },
    },
  },
};

export const guideEntries = [
  documentManagementGuide,
  erpSelectionGuide,
  cybersecurityGuide,
];
