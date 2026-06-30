import { createTechnologyEntry } from "../shared/create-technology-entry";

const defaultAeoEn = {
  alternatives: "Point solutions or lighter platforms may cover part of the need.",
  howToChoose: "Map processes, integration needs and growth plans before shortlisting.",
  commonMistakes: ["Buying before defining requirements", "Ignoring change management"],
  implementationChecklist: ["Sponsor assigned", "Requirements documented", "Pilot planned"],
};

const defaultAeoAr = {
  alternatives: "حلول نقطية أو منصات أخف قد تغطي جزءاً من الاحتياج.",
  howToChoose: "ارسم العمليات واحتياجات التكامل وخطط النمو قبل التقييم.",
  commonMistakes: ["الشراء قبل تحديد المتطلبات", "تجاهل إدارة التغيير"],
  implementationChecklist: ["تعيين راعٍ", "توثيق المتطلبات", "تخطيط pilot"],
};

export const crmEntry = createTechnologyEntry({
  slug: "crm",
  categoryId: "enterprise-platforms",
  searchTerms: ["CRM", "customer relationship", "sales", "Microsoft Dynamics"],
  comparisonSlugs: ["erp-vs-crm"],
  en: {
    title: "CRM (Customer Relationship Management)",
    seo: {
      title: "What is CRM? Customer Relationship Management Guide | FileCount Knowledge",
      description:
        "Learn what CRM is, when organizations need it, benefits, challenges and how to evaluate CRM for Saudi businesses.",
    },
    whatIsIt:
      "CRM is software that manages customer and prospect interactions across sales, marketing and service — providing a unified view of relationships and pipeline.",
    businessPurpose:
      "Organizations use CRM to improve sales visibility, standardize customer engagement and deliver consistent service across teams and branches.",
    benefits: [
      "Centralized customer and opportunity data",
      "Pipeline and forecast visibility",
      "Consistent follow-up and service history",
      "Marketing and sales alignment",
      "Mobile access for field teams",
    ],
    challenges: [
      "Data quality and duplicate records",
      "User adoption across sales and service",
      "Integration with ERP and marketing tools",
      "Over-configuration of pipelines and fields",
    ],
    whenToUse: [
      "Sales team lacks visibility into pipeline and activities",
      "Customer data scattered across email and spreadsheets",
      "Service teams need case history and SLAs",
      "Multiple branches need unified customer view",
    ],
    whenNotToUse: [
      "No structured sales or service process yet",
      "Immediate need is billing-only without customer lifecycle",
      "Organization cannot commit to data hygiene practices",
    ],
    implementationOverview:
      "CRM rollouts typically include data model design, migration from spreadsheets or legacy tools, integration planning, role-based training and phased adoption by team.",
    faqs: [
      {
        question: "Do I need CRM if I already have ERP?",
        answer:
          "Often yes — ERP handles orders and finance while CRM focuses on pre-sales, relationships and service. Many organizations run both with integration.",
      },
      {
        question: "Can CRM work for B2B and B2C?",
        answer:
          "Yes, but requirements differ. B2B often needs complex pipelines; B2C may emphasize campaigns and high-volume service.",
      },
    ],
    relatedTechnologies: [
      { slug: "erp", label: "ERP" },
      { slug: "workflow", label: "Workflow" },
    ],
    relatedVendors: [{ slug: "microsoft", label: "Microsoft" }],
    decisionChecklist: [
      "Define sales and service processes first",
      "Identify integration with ERP and email",
      "Plan data migration and deduplication",
      "Assign CRM champion per department",
    ],
    aeo: defaultAeoEn,
  },
  ar: {
    title: "CRM (إدارة علاقات العملاء)",
    seo: {
      title: "ما هو CRM؟ دليل إدارة علاقات العملاء | FileCount Knowledge",
      description:
        "تعرّف على CRM ومتى تحتاجه المنشآت وفوائده وتحدياته وكيف تقيّمه للأعمال السعودية.",
    },
    whatIsIt:
      "CRM برمجيات تدير تفاعلات العملاء وال prospects عبر المبيعات والتسويق والخدمة — مع رؤية موحدة للعلاقات و pipeline.",
    businessPurpose:
      "تستخدم المنشآت CRM لتحسين رؤية المبيعات وتوحيد التعامل مع العملاء وتقديم خدمة متسقة عبر الفرق والفروع.",
    benefits: [
      "بيانات عملاء وفرص مركزية",
      "رؤية pipeline والتوقعات",
      "متابعة متسقة وسجل خدمة",
      "مواءمة التسويق والمبيعات",
      "وصول mobile للفرق الميدانية",
    ],
    challenges: [
      "جودة البيانات والسجلات المكررة",
      "اعتماد المستخدمين في المبيعات والخدمة",
      "التكامل مع ERP وأدوات التسويق",
      "over-configuration لل pipelines والحقول",
    ],
    whenToUse: [
      "فريق المبيعات يفتقر لرؤية pipeline والأنشطة",
      "بيانات العملاء scattered عبر email وجداول",
      "فرق الخدمة تحتاج سجل cases وSLAs",
      "فروع متعددة تحتاج رؤية موحدة للعملاء",
    ],
    whenNotToUse: [
      "لا عملية مبيعات أو خدمة structured بعد",
      "الحاجة الفورية billing-only دون customer lifecycle",
      "المنشأة لا تلتزم بممارسات data hygiene",
    ],
    implementationOverview:
      "تتضمن CRM عادة تصميم data model وترحيل من جداول أو أدوات قديمة وتخطيط تكامل وتدريب حسب الدور واعتماد مرحلي.",
    faqs: [
      {
        question: "هل أحتاج CRM إذا لدي ERP؟",
        answer:
          "غالباً نعم — ERP يدير الطلبات والمالية بينما CRM يركز على pre-sales والعلاقات والخدمة. كثير من المنشآت تشغّل كليهما مع تكامل.",
      },
      {
        question: "هل CRM يناسب B2B وB2C؟",
        answer: "نعم، لكن المتطلبات تختلف. B2B يحتاج pipelines معقدة؛ B2C يركز على campaigns وخدمة high-volume.",
      },
    ],
    relatedTechnologies: [
      { slug: "erp", label: "ERP" },
      { slug: "workflow", label: "Workflow" },
    ],
    relatedVendors: [{ slug: "microsoft", label: "Microsoft" }],
    decisionChecklist: [
      "حدد عمليات المبيعات والخدمة أولاً",
      "حدد التكامل مع ERP والبريد",
      "خطط لترحيل البيانات وdeduplication",
      "عيّن champion CRM لكل إدارة",
    ],
    aeo: defaultAeoAr,
  },
});

export const dmsEntry = createTechnologyEntry({
  slug: "dms",
  categoryId: "business-applications",
  searchTerms: ["DMS", "document management", "ECM", "Laserfiche", "DocuWare", "M-Files"],
  en: {
    title: "DMS (Document Management System)",
    seo: {
      title: "What is DMS? Document Management Guide | FileCount Knowledge",
      description:
        "Learn what DMS is, business benefits, implementation considerations and when document management is the right direction.",
    },
    whatIsIt:
      "A Document Management System (DMS) captures, stores, indexes and retrieves electronic documents with version control, access permissions and audit trails.",
    businessPurpose:
      "Organizations adopt DMS to reduce paper, enforce retention policies, speed up retrieval and support compliance and collaboration.",
    benefits: [
      "Centralized document repository",
      "Version control and audit history",
      "Faster search and retrieval",
      "Access control by role or department",
      "Supports compliance and retention policies",
    ],
    challenges: [
      "Scanning and indexing legacy archives",
      "User habits and folder structures",
      "Integration with ERP and workflow",
      "OCR quality for Arabic documents",
    ],
    whenToUse: [
      "Critical documents stored in email or shared drives",
      "Audit or regulatory retention requirements",
      "Multiple branches need controlled access",
      "Approval workflows depend on documents",
    ],
    whenNotToUse: [
      "Need is simple file sharing only",
      "No document governance policy in place",
      "Volume is low and search is not a pain point",
    ],
    implementationOverview:
      "DMS projects typically include taxonomy design, scanning backlogs, metadata standards, integration with line-of-business systems and phased department rollout.",
    faqs: [
      {
        question: "What is the difference between DMS and ECM?",
        answer:
          "DMS focuses on document storage and retrieval. ECM extends to records management, workflow, capture and broader information governance.",
      },
    ],
    relatedTechnologies: [
      { slug: "workflow", label: "Workflow" },
      { slug: "ecm", label: "ECM" },
    ],
    relatedVendors: [],
    decisionChecklist: [
      "Define document types and retention rules",
      "Plan scanning and metadata standards",
      "Identify integrations (ERP, HR, contracts)",
      "Pilot with one department first",
    ],
    aeo: defaultAeoEn,
  },
  ar: {
    title: "DMS (نظام إدارة المستندات)",
    seo: {
      title: "ما هو DMS؟ دليل إدارة المستندات | FileCount Knowledge",
      description:
        "تعرّف على DMS وفوائده التجارية واعتبارات التنفيذ ومتى تكون إدارة المستندات التوجه المناسب.",
    },
    whatIsIt:
      "نظام إدارة المستندات (DMS) يلتقط ويخزّن ويفهرس ويسترجع المستندات الإلكترونية مع version control وصلاحيات وصول ومسارات تدقيق.",
    businessPurpose:
      "تتبنى المنشآت DMS لتقليل الورق وتطبيق سياسات الاحتفاظ وتسريع الاسترجاع ودعم الامتثال والتCollaboration.",
    benefits: [
      "مستودع مستندات مركزي",
      "version control وسجل تدقيق",
      "بحث واسترجاع أسرع",
      "تحكم بالوصول حسب الدور أو الإدارة",
      "يدعم الامتثال وسياسات الاحتفاظ",
    ],
    challenges: [
      "مسح وفهرسة الأرشives القديمة",
      "عادات المستخدمين وهياكل المجلدات",
      "التكامل مع ERP وworkflow",
      "جودة OCR للمستندات العربية",
    ],
    whenToUse: [
      "مستندات حرجة في email أو shared drives",
      "متطلبات retention تنظيمية أو تدقيق",
      "فروع متعددة تحتاج وصول controlled",
      "approval workflows تعتمد على مستندات",
    ],
    whenNotToUse: [
      "الحاجة مشاركة ملفات بسيطة فقط",
      "لا سياسة document governance",
      "حجم منخفض والبحث ليس pain point",
    ],
    implementationOverview:
      "تشمل مشاريع DMS تصميم taxonomy وbacklog مسح ومعايير metadata وتكامل مع أنظمة الأعمال وإ rollout مرحلي.",
    faqs: [
      {
        question: "ما الفرق بين DMS وECM؟",
        answer:
          "DMS يركز على تخزين واسترجاع المستندات. ECM يمتد إلى records management وworkflow وcapture وحوكمة معلومات أوسع.",
      },
    ],
    relatedTechnologies: [
      { slug: "workflow", label: "Workflow" },
      { slug: "ecm", label: "ECM" },
    ],
    relatedVendors: [],
    decisionChecklist: [
      "حدد أنواع المستندات وقواعد الاحتفاظ",
      "خطط للمسح ومعايير metadata",
      "حدد التكاملات (ERP، HR، عقود)",
      "جرب مع إدارة واحدة أولاً",
    ],
    aeo: defaultAeoAr,
  },
});

export const workflowEntry = createTechnologyEntry({
  slug: "workflow",
  categoryId: "business-applications",
  searchTerms: ["workflow", "automation", "BPM", "approval"],
  en: {
    title: "Workflow Automation",
    seo: {
      title: "Workflow Automation Guide | FileCount Knowledge",
      description:
        "Understand workflow automation — purpose, benefits, when to adopt it and implementation overview for enterprises.",
    },
    whatIsIt:
      "Workflow automation software routes tasks, approvals and notifications through defined business processes — replacing manual handoffs and email chains.",
    businessPurpose:
      "Organizations automate workflows to reduce cycle times, enforce policy, improve accountability and gain process visibility.",
    benefits: [
      "Faster approval cycles",
      "Clear ownership and SLAs",
      "Audit trail of decisions",
      "Reduced manual errors",
      "Integration with DMS and ERP",
    ],
    challenges: [
      "Processes must be defined before automation",
      "Exception handling complexity",
      "Change resistance from teams",
    ],
    whenToUse: [
      "Repeated approval chains across departments",
      "Compliance requires documented sign-offs",
      "Bottlenecks in manual email-based processes",
    ],
    whenNotToUse: [
      "Process is undefined or changes daily",
      "Volume is too low to justify platform cost",
    ],
    implementationOverview:
      "Start with high-volume, stable processes. Model workflows, integrate forms and documents, pilot with one department, then expand.",
    faqs: [
      {
        question: "Is workflow the same as RPA?",
        answer:
          "No. Workflow orchestrates human tasks and approvals. RPA automates repetitive UI actions. They can complement each other.",
      },
    ],
    relatedTechnologies: [
      { slug: "dms", label: "DMS" },
      { slug: "erp", label: "ERP" },
    ],
    relatedVendors: [],
    decisionChecklist: [
      "Prioritize processes by volume and pain",
      "Define roles and escalation rules",
      "Plan integration with documents and ERP",
    ],
    aeo: defaultAeoEn,
  },
  ar: {
    title: "أتمتة سير العمل",
    seo: {
      title: "دليل أتمتة سير العمل | FileCount Knowledge",
      description:
        "افهم أتمتة سير العمل — الغرض والفوائد ومتى تتبناها ونظرة عامة على التنفيذ للمؤسسات.",
    },
    whatIsIt:
      "برمجيات أتمتة سير العمل توجّه المهام والموافقات والإشعارات عبر عمليات محددة — بديلاً للتسليم اليدوي وسلاسل البريد.",
    businessPurpose:
      "تAutomate المنشآت سير العمل لتقليل دورات العمل وفرض السياسات وتحسين المساءلة ورؤية العمليات.",
    benefits: [
      "دورات موافقة أسرع",
      "ملكية وSLAs واضحة",
      "مسار تدقيق للقرارات",
      "أخطاء يدوية أقل",
      "تكامل مع DMS وERP",
    ],
    challenges: [
      "يجب تعريف العمليات قبل الأتمتة",
      "تعقيد معالجة الاستثناءات",
      "مقاومة التغيير من الفرق",
    ],
    whenToUse: [
      "سلاسل موافقة متكررة عبر الإدارات",
      "الامتثال يتطلب sign-offs موثقة",
      "اختناقات في عمليات email يدوية",
    ],
    whenNotToUse: [
      "العملية غير معرّفة أو تتغير يومياً",
      "حجم منخفض لا يبرر تكلفة المنصة",
    ],
    implementationOverview:
      "ابدأ بعمليات stable عالية الحجم. نمذج workflows وادمج النماذج والمستندات وجرب مع إدارة واحدة ثم وسّع.",
    faqs: [
      {
        question: "هل workflow نفس RPA؟",
        answer:
          "لا. Workflow ينسّق مهام وموافقات بشرية. RPA يAutomate إجراءات UI متكررة. يمكن أن يكملا بعضهما.",
      },
    ],
    relatedTechnologies: [
      { slug: "dms", label: "DMS" },
      { slug: "erp", label: "ERP" },
    ],
    relatedVendors: [],
    decisionChecklist: [
      "رتّب العمليات حسب الحجم والألم",
      "حدد الأدوار وقواعد escalation",
      "خطط للتكامل مع المستندات وERP",
    ],
    aeo: defaultAeoAr,
  },
});

export const ecmEntry = createTechnologyEntry({
  slug: "ecm",
  categoryId: "business-applications",
  searchTerms: ["ECM", "enterprise content management", "records"],
  en: {
    title: "ECM (Enterprise Content Management)",
    seo: {
      title: "What is ECM? Enterprise Content Management | FileCount Knowledge",
      description: "Learn ECM scope beyond DMS — records, workflow, capture and information governance.",
    },
    whatIsIt:
      "ECM is a broader discipline and platform category covering document management, records retention, capture, workflow and information governance.",
    businessPurpose: "Unify content lifecycle management across the enterprise with policy-driven control.",
    benefits: ["End-to-end content lifecycle", "Records and retention compliance", "Integrated capture and workflow"],
    challenges: ["Wide scope requires phased roadmap", "Cross-department governance alignment"],
    whenToUse: ["DMS alone cannot meet records or governance needs", "Multiple content types and systems to unify"],
    whenNotToUse: ["Simple document storage is sufficient", "No governance framework established"],
    implementationOverview: "Define governance council, content types, retention schedules and phased module adoption.",
    faqs: [{ question: "ECM vs DMS?", answer: "DMS is a subset. ECM adds records, capture, workflow and broader governance." }],
    relatedTechnologies: [{ slug: "dms", label: "DMS" }, { slug: "workflow", label: "Workflow" }],
    relatedVendors: [],
    decisionChecklist: ["Establish information governance policy", "Inventory content sources", "Phase by department"],
    aeo: defaultAeoEn,
  },
  ar: {
    title: "ECM (إدارة المحتوى المؤسسي)",
    seo: {
      title: "ما هو ECM؟ إدارة المحتوى المؤسسي | FileCount Knowledge",
      description: "تعرّف على ECM أوسع من DMS — السجلات وworkflow والcapture وحوكمة المعلومات.",
    },
    whatIsIt: "ECM من discipline ومنصة أوسع تشمل إدارة المستندات والسجلات والcapture وworkflow وحوكمة المعلومات.",
    businessPurpose: "توحيد إدارة دورة حياة المحتوى عبر المؤسسة بتحكم policy-driven.",
    benefits: ["دورة حياة محتوى end-to-end", "امتثال records والاحتفاظ", "capture وworkflow متكامل"],
    challenges: ["نطاق واسع يتطلب roadmap مرحلي", "مواءمة حوكمة cross-department"],
    whenToUse: ["DMS وحده لا يلبي records أو governance", "أنواع محتوى وأنظمة متعددة للتوحيد"],
    whenNotToUse: ["تخزين مستندات بسيط يكفي", "لا إطار governance"],
    implementationOverview: "حدد مجلس governance وأنواع المحتوى وجداول retention واعتماد modules مرحلي.",
    faqs: [{ question: "ECM vs DMS?", answer: "DMS subset. ECM يضيف records وcapture وworkflow وحوكمة أوسع." }],
    relatedTechnologies: [{ slug: "dms", label: "DMS" }, { slug: "workflow", label: "Workflow" }],
    relatedVendors: [],
    decisionChecklist: ["سياسة information governance", "جرد مصادر المحتوى", "مراحل حسب الإدارة"],
    aeo: defaultAeoAr,
  },
});

export const hrmsEntry = createTechnologyEntry({
  slug: "hrms",
  categoryId: "enterprise-platforms",
  searchTerms: ["HRMS", "HCM", "human resources", "payroll"],
  en: {
    title: "HRMS (Human Resource Management System)",
    seo: {
      title: "What is HRMS? Human Resource Management Guide | FileCount Knowledge",
      description: "Learn HRMS purpose, modules, benefits and when to integrate with ERP.",
    },
    whatIsIt: "HRMS manages employee records, payroll, attendance, leave, recruitment and performance in one system.",
    businessPurpose: "Standardize HR operations, support Saudization reporting and reduce manual HR administration.",
    benefits: ["Central employee database", "Payroll and attendance automation", "Self-service for employees", "Compliance reporting"],
    challenges: ["Localization for Saudi labor law", "Integration with ERP finance", "Change management for HR teams"],
    whenToUse: ["Growing workforce across branches", "Manual payroll and leave processes", "Need for HR analytics"],
    whenNotToUse: ["Very small team with outsourced payroll only", "HRMS module in ERP already sufficient"],
    implementationOverview: "Configure org structure, policies, payroll rules, employee self-service and ERP integration.",
    faqs: [{ question: "HRMS inside ERP or standalone?", answer: "Both models exist. Depends on HR complexity and ERP fit." }],
    relatedTechnologies: [{ slug: "erp", label: "ERP" }],
    relatedVendors: [{ slug: "oracle", label: "Oracle" }, { slug: "sap", label: "SAP" }],
    decisionChecklist: ["Map HR processes and policies", "Confirm Saudization reporting needs", "Plan ERP integration"],
    aeo: defaultAeoEn,
  },
  ar: {
    title: "HRMS (نظام إدارة الموارد البشرية)",
    seo: {
      title: "ما هو HRMS؟ دليل إدارة الموارد البشرية | FileCount Knowledge",
      description: "تعرّف على غرض HRMS والوحدات والفوائد ومتى تتكامل مع ERP.",
    },
    whatIsIt: "HRMS يدير سجلات الموظفين والرواتب والحضور والإجازات والتوظيف والأداء في نظام واحد.",
    businessPurpose: "توحيد عمليات HR ودعم تقارير الس Saudization وتقليل الإدارة اليدوية.",
    benefits: ["قاعدة موظفين مركزية", "أتمتة رواتب وحضور", "self-service للموظفين", "تقارير امتثال"],
    challenges: ["Localization لنظام العمل السعودي", "تكامل مع مالية ERP", "إدارة تغيير لفرق HR"],
    whenToUse: ["workforce نامٍ عبر فروع", "رواتب وإجازات يدوية", "حاجة لanalytics HR"],
    whenNotToUse: ["فريق صغير ورواتب outsourced فقط", "وحدة HRMS في ERP كافية"],
    implementationOverview: "إعداد الهيكل والسياسات وقواعد الرواتب وself-service وتكامل ERP.",
    faqs: [{ question: "HRMS داخل ERP أم منفصل؟", answer: "كلا النموذجين موجودان. يعتمد على تعقيد HR وملاءمة ERP." }],
    relatedTechnologies: [{ slug: "erp", label: "ERP" }],
    relatedVendors: [{ slug: "oracle", label: "Oracle" }, { slug: "sap", label: "SAP" }],
    decisionChecklist: ["ارسم عمليات HR والسياسات", "تأكد من تقارير Saudization", "خطط تكامل ERP"],
    aeo: defaultAeoAr,
  },
});
