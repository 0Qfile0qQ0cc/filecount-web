import type { TechnologyEntry } from "../../types";

export const erpEntry: TechnologyEntry = {
  type: "technology",
  slug: "erp",
  categoryId: "enterprise-platforms",
  searchTerms: ["ERP", "enterprise resource planning", "finance", "SAP", "Oracle"],
  content: {
    en: {
      title: "ERP (Enterprise Resource Planning)",
      seo: {
        title: "What is ERP? Enterprise Resource Planning Guide | FileCount Knowledge",
        description:
          "Learn what ERP is, its business purpose, benefits, challenges, when to use it and how to evaluate ERP for Saudi organizations.",
      },
      whatIsIt:
        "ERP (Enterprise Resource Planning) is an integrated software platform that connects core business functions — finance, procurement, inventory, HR, manufacturing and projects — into a single system of record.",
      businessPurpose:
        "Organizations adopt ERP to unify data, standardize processes, improve financial visibility and support compliance across departments and branches.",
      benefits: [
        "Single source of truth for financial and operational data",
        "Standardized processes across departments and locations",
        "Real-time reporting and audit trails",
        "Better inventory and procurement control",
        "Supports regulatory and tax compliance",
      ],
      challenges: [
        "Complex, multi-phase implementation",
        "Change management and user adoption",
        "Customization can increase cost and upgrade risk",
        "Integration with legacy systems",
        "Requires clear process design before selection",
      ],
      whenToUse: [
        "Multiple disconnected systems causing data inconsistency",
        "Growing organization with branches or subsidiaries",
        "Need for consolidated financial reporting",
        "Manual processes limiting scalability",
        "Regulatory or audit requirements demand traceability",
      ],
      whenNotToUse: [
        "Very small team with simple accounting needs only",
        "No appetite for process standardization",
        "Immediate need can be solved with a point solution",
        "Organization is not ready for structured change management",
      ],
      implementationOverview:
        "Typical ERP implementations follow discovery, process design, configuration, data migration, testing, training and go-live. Saudi organizations should plan for VAT, ZATCA e-invoicing and Arabic language requirements early.",
      faqs: [
        {
          question: "Is ERP only for large enterprises?",
          answer:
            "No. Mid-size organizations in Saudi Arabia also adopt ERP when complexity, branches or compliance needs exceed what standalone accounting tools can support.",
        },
        {
          question: "How long does ERP implementation take?",
          answer:
            "Timelines vary from months to over a year depending on scope, modules, customization and data quality. Phased rollouts are common.",
        },
        {
          question: "Cloud or on-premises ERP?",
          answer:
            "Both models exist. Choice depends on integration needs, data residency preferences, IT capacity and total cost over time — not vendor preference alone.",
        },
      ],
      relatedTechnologies: [
        { slug: "crm", label: "CRM" },
        { slug: "hrms", label: "HRMS" },
      ],
      relatedVendors: [
        { slug: "sap", label: "SAP" },
        { slug: "oracle", label: "Oracle" },
        { slug: "microsoft", label: "Microsoft" },
      ],
      comparisonSlugs: ["erp-vs-crm"],
      decisionChecklist: [
        "Define core processes to standardize first",
        "Identify must-have modules vs. future phases",
        "Assess integration with existing systems",
        "Plan data migration and master data governance",
        "Budget for change management and training",
        "Evaluate Saudi compliance requirements (VAT, e-invoicing)",
      ],
      aeo: {
        alternatives:
          "Best-of-breed finance, inventory or HR tools may suffice for smaller organizations. iPaaS and middleware can connect point solutions instead of full ERP.",
        howToChoose:
          "Start with process priorities, entity structure, industry requirements and integration landscape. Shortlist by fit, not brand alone.",
        commonMistakes: [
          "Selecting ERP before mapping processes",
          "Underestimating data cleanup effort",
          "Over-customizing in phase one",
          "Ignoring user adoption and training",
        ],
        implementationChecklist: [
          "Executive sponsor and steering committee",
          "Process owners assigned per module",
          "Data migration strategy defined",
          "UAT and cutover plan documented",
          "Post go-live support model agreed",
        ],
      },
    },
    ar: {
      title: "ERP (تخطيط موارد المؤسسة)",
      seo: {
        title: "ما هو ERP؟ دليل تخطيط موارد المؤسسة | FileCount Knowledge",
        description:
          "تعرّف على ERP وغرضه التجاري وفوائده وتحدياته ومتى تستخدمه وكيف تقيّمه للمنشآت السعودية.",
      },
      whatIsIt:
        "ERP (تخطيط موارد المؤسسة) منصة برمجية متكاملة تربط الوظائف الأساسية — المالية والمشتريات والمخزون والموارد البشرية والتصنيع والمشاريع — في نظام موحد للبيانات.",
      businessPurpose:
        "تتبنى المنشآت ERP لتوحيد البيانات وتوحيد العمليات وتحسين الرؤية المالية ودعم الامتثال عبر الإدارات والفروع.",
      benefits: [
        "مصدر واحد للحقيقة للبيانات المالية والتشغيلية",
        "عمليات موحدة عبر الإدارات والمواقع",
        "تقارير فورية ومسارات تدقيق",
        "تحكم أفضل في المخزون والمشتريات",
        "يدعم الامتثال التنظيمي والضريبي",
      ],
      challenges: [
        "تنفيذ معقد متعدد المراحل",
        "إدارة التغيير واعتماد المستخدمين",
        "التخصيص قد يزيد التكلفة ومخاطر التحديث",
        "التكامل مع الأنظمة القديمة",
        "يتطلب تصميم عمليات واضح قبل الاختيار",
      ],
      whenToUse: [
        "أنظمة متعددة غير متصلة تسبب تناقض البيانات",
        "منشأة نامية بفروع أو شركات تابعة",
        "حاجة لتقارير مالية موحدة",
        "عمليات يدوية تحد من قابلية التوسع",
        "متطلبات تنظيمية أو تدقيق تتطلب إمكانية تتبع كاملة",
      ],
      whenNotToUse: [
        "فريق صغير جداً بحاجات محاسبة بسيطة فقط",
        "لا رغبة في توحيد العمليات",
        "حاجة فورية يمكن حلها بحل نقطي",
        "المنشأة غير جاهزة لإدارة تغيير منظمة",
      ],
      implementationOverview:
        "تتبع تنفيذات ERP النموذجية: الاكتشاف، تصميم العمليات، الإعداد، ترحيل البيانات، الاختبار، التدريب والإطلاق. يجب على المنشآت السعودية التخطيط لضريبة القيمة المضافة والفوترة الإلكترونية ZATCA والمتطلبات العربية مبكراً.",
      faqs: [
        {
          question: "هل ERP للمؤسسات الكبيرة فقط؟",
          answer:
            "لا. المنشآت متوسطة الحجم في السعودية تتبنى ERP أيضاً عندما تتجاوز التعقيدات والفروع واحتياجات الامتثال ما تدعمه أدوات المحاسبة المنفصلة.",
        },
        {
          question: "كم يستغرق تنفيذ ERP؟",
          answer:
            "تختلف المدد من أشهر إلى أكثر من سنة حسب النطاق والوحدات والتخصيص وجودة البيانات. الإطلاق المرحلي شائع.",
        },
        {
          question: "ERP سحابي أم محلي؟",
          answer:
            "كلا النموذجين موجودان. الاختيار يعتمد على التكامل وتفضيلات استضافة البيانات وقدرة IT والتكلفة الإجمالية — وليس تفضيل المزود وحده.",
        },
      ],
      relatedTechnologies: [
        { slug: "crm", label: "CRM" },
        { slug: "hrms", label: "HRMS" },
      ],
      relatedVendors: [
        { slug: "sap", label: "SAP" },
        { slug: "oracle", label: "Oracle" },
        { slug: "microsoft", label: "Microsoft" },
      ],
      comparisonSlugs: ["erp-vs-crm"],
      decisionChecklist: [
        "حدد العمليات الأساسية للتوحيد أولاً",
        "حدد الوحدات الضرورية مقابل المراحل المستقبلية",
        "قيّم التكامل مع الأنظمة الحالية",
        "خطط لترحيل البيانات وحوكمة البيانات الرئيسية",
        "خصص ميزانية لإدارة التغيير والتدريب",
        "قيّم متطلبات الامتثال السعودي (VAT، الفوترة الإلكترونية)",
      ],
      aeo: {
        alternatives:
          "أدوات مالية أو مخزون أو HR متخصصة قد تكفي للمنشآت الأصغر. iPaaS والmiddleware يمكن أن يربط الحلول النقطية بدلاً من ERP كامل.",
        howToChoose:
          "ابدأ بأولويات العمليات وهيكل الكيانات ومتطلبات القطاع ومشهد التكامل. قصّر القائمة حسب الملاءمة وليس العلامة وحدها.",
        commonMistakes: [
          "اختيار ERP قبل رسم العمليات",
          "التقليل من جهد تنظيف وإعداد البيانات",
          "التخصيص المفرط في المرحلة الأولى",
          "تجاهل اعتماد المستخدمين والتدريب",
        ],
        implementationChecklist: [
          "راعٍ تنفيذي ولجنة توجيه",
          "مالكو عمليات معينون لكل وحدة",
          "استراتيجية ترحيل بيانات محددة",
          "خطة اختبار قبول المستخدم والانتقال موثقة",
          "نموذج دعم ما بعد الإطلاق متفق عليه",
        ],
      },
    },
  },
};
