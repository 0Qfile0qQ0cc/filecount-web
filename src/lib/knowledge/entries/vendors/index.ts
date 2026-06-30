import type { VendorEntry } from "../../types";

const vendorDefaults = {
  en: {
    deploymentOptions: ["Cloud", "Hybrid", "On-premises"],
    aeo: {
      alternatives: "Evaluate multiple vendors against your requirements — no single vendor fits every organization.",
      howToChoose: "Match vendor strengths to your industry, size, integration needs and compliance requirements.",
      commonMistakes: ["Selecting by brand recognition alone", "Skipping proof of concept"],
      implementationChecklist: ["Requirements matrix completed", "Reference customers interviewed", "TCO model built"],
    },
  },
  ar: {
    deploymentOptions: ["سحابي", "هجين", "محلي"],
    aeo: {
      alternatives: "قيّم عدة مزودين مقابل متطلباتك — لا مزود واحد يناسب كل منشأة.",
      howToChoose: "طابق نقاط قوة المزود مع قطاعك وحجمك واحتياجات التكامل والامتثال.",
      commonMistakes: ["الاختيار بالعلامة فقط", "تخطي proof of concept"],
      implementationChecklist: ["مصفوفة متطلبات مكتملة", "مقابلة عملاء مرجعيين", "نموذج TCO"],
    },
  },
};

export const oracleEntry: VendorEntry = {
  type: "vendor",
  slug: "oracle",
  categoryId: "enterprise-vendors",
  searchTerms: ["Oracle", "Oracle ERP", "Oracle Cloud", "Database"],
  content: {
    en: {
      title: "Oracle",
      seo: {
        title: "Oracle Enterprise Technology Overview | FileCount Knowledge",
        description: "Vendor-neutral overview of Oracle — focus areas, deployment options and typical use cases.",
      },
      overview:
        "Oracle is a global enterprise technology vendor offering databases, ERP, HCM, CX and cloud infrastructure. Organizations in Saudi Arabia evaluate Oracle for large-scale, integrated enterprise platforms.",
      focusAreas: ["ERP & Finance", "Database", "HCM", "Cloud Infrastructure", "CX"],
      typicalCustomers: ["Large enterprises", "Government and regulated sectors", "Multi-entity organizations"],
      deploymentOptions: vendorDefaults.en.deploymentOptions,
      strengths: ["Broad enterprise portfolio", "Strong database heritage", "Global support ecosystem"],
      considerations: ["Implementation complexity", "Licensing and TCO modeling required", "Integration planning essential"],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }, { slug: "hrms", label: "HRMS" }],
      relatedComparisons: [{ slug: "erp-vs-crm", label: "ERP vs CRM" }],
      faqs: [
        {
          question: "Is Oracle only for large enterprises?",
          answer: "Oracle serves mid-size to large organizations. Fit depends on complexity, not size alone.",
        },
      ],
      aeo: vendorDefaults.en.aeo,
    },
    ar: {
      title: "Oracle",
      seo: {
        title: "نظرة عامة على Oracle للمؤسسات | FileCount Knowledge",
        description: "نظرة محايدة على Oracle — مجالات التركيز وخيارات النشر وحالات الاستخدام.",
      },
      overview:
        "Oracle مزود تقنية مؤسسية عالمي يقدم databases وERP وHCM وCX وبنية سحابية. المنشآت السعودية تقيّمه لمنصات مؤسسية متكاملة واسعة النطاق.",
      focusAreas: ["ERP والمالية", "Database", "HCM", "Cloud Infrastructure", "CX"],
      typicalCustomers: ["مؤسسات كبيرة", "حكومة وقطاعات منظمة", "منشآت multi-entity"],
      deploymentOptions: vendorDefaults.ar.deploymentOptions,
      strengths: ["محفظة مؤسسية واسعة", "تراث database قوي", "ecosystem دعم عالمي"],
      considerations: ["تعقيد التنفيذ", "يتطلب نمذجة licensing وTCO", "تخطيط تكامل ضروري"],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }, { slug: "hrms", label: "HRMS" }],
      relatedComparisons: [{ slug: "erp-vs-crm", label: "ERP vs CRM" }],
      faqs: [
        {
          question: "هل Oracle للمؤسسات الكبيرة فقط؟",
          answer: "Oracle يخدم من medium إلى large. الملاءمة تعتمد على التعقيد وليس الحجم وحده.",
        },
      ],
      aeo: vendorDefaults.ar.aeo,
    },
  },
};

export const sapEntry: VendorEntry = {
  type: "vendor",
  slug: "sap",
  categoryId: "enterprise-vendors",
  searchTerms: ["SAP", "S/4HANA", "SAP ERP", "SAP Business One"],
  content: {
    en: {
      title: "SAP",
      seo: {
        title: "SAP Enterprise Technology Overview | FileCount Knowledge",
        description: "Vendor-neutral overview of SAP — ERP, analytics and enterprise platform capabilities.",
      },
      overview:
        "SAP is a leading enterprise application vendor known for ERP (including S/4HANA), analytics and industry-specific solutions used by organizations worldwide.",
      focusAreas: ["ERP / S/4HANA", "Analytics", "Supply Chain", "HR", "Industry Solutions"],
      typicalCustomers: ["Manufacturing and distribution", "Large multi-country enterprises", "Public sector"],
      deploymentOptions: vendorDefaults.en.deploymentOptions,
      strengths: ["Deep ERP functionality", "Industry templates", "Large partner ecosystem"],
      considerations: ["Significant change management", "Upgrade and migration planning", "Total cost evaluation"],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }],
      relatedComparisons: [{ slug: "erp-vs-crm", label: "ERP vs CRM" }],
      faqs: [
        {
          question: "What is S/4HANA?",
          answer: "S/4HANA is SAP's modern ERP suite built on the SAP HANA database platform.",
        },
      ],
      aeo: vendorDefaults.en.aeo,
    },
    ar: {
      title: "SAP",
      seo: {
        title: "نظرة عامة على SAP للمؤسسات | FileCount Knowledge",
        description: "نظرة محايدة على SAP — ERP وanalytics وقدرات المنصة المؤسسية.",
      },
      overview:
        "SAP مزود تطبيقات مؤسسية رائد معروف بـ ERP (بما فيها S/4HANA) وanalytics وحلول صناعية.",
      focusAreas: ["ERP / S/4HANA", "Analytics", "Supply Chain", "HR", "Industry Solutions"],
      typicalCustomers: ["تصنيع وتوزيع", "مؤسسات multi-country كبيرة", "قطاع عام"],
      deploymentOptions: vendorDefaults.ar.deploymentOptions,
      strengths: ["وظائف ERP عميقة", "قوالب صناعية", "ecosystem شركاء كبير"],
      considerations: ["إدارة تغيير significant", "تخطيط upgrade وmigration", "تقييم التكلفة الإجمالية"],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }],
      relatedComparisons: [{ slug: "erp-vs-crm", label: "ERP vs CRM" }],
      faqs: [
        {
          question: "ما هو S/4HANA؟",
          answer: "S/4HANA suite ERP حديثة من SAP على منصة SAP HANA database.",
        },
      ],
      aeo: vendorDefaults.ar.aeo,
    },
  },
};

export const microsoftEntry: VendorEntry = {
  type: "vendor",
  slug: "microsoft",
  categoryId: "enterprise-vendors",
  searchTerms: ["Microsoft", "Dynamics 365", "Azure", "Microsoft 365"],
  content: {
    en: {
      title: "Microsoft",
      seo: {
        title: "Microsoft Enterprise Technology Overview | FileCount Knowledge",
        description: "Vendor-neutral overview of Microsoft — Dynamics, Azure, productivity and platform ecosystem.",
      },
      overview:
        "Microsoft provides cloud platforms (Azure), business applications (Dynamics 365), productivity (Microsoft 365) and enterprise infrastructure widely adopted in Saudi organizations.",
      focusAreas: ["Azure Cloud", "Dynamics 365 ERP/CRM", "Microsoft 365", "Power Platform", "Security"],
      typicalCustomers: ["Organizations on Microsoft ecosystem", "Mid-size to enterprise", "Hybrid cloud adopters"],
      deploymentOptions: vendorDefaults.en.deploymentOptions,
      strengths: ["Integrated productivity and cloud stack", "Familiar user experience", "Strong partner network in KSA"],
      considerations: ["License model complexity", "Integration across Dynamics modules", "Identity and security alignment"],
      relatedTechnologies: [{ slug: "crm", label: "CRM" }, { slug: "erp", label: "ERP" }],
      relatedComparisons: [],
      faqs: [
        {
          question: "Dynamics 365 vs standalone CRM/ERP?",
          answer: "Dynamics 365 offers modular ERP and CRM on a shared platform. Fit depends on module needs and existing Microsoft investment.",
        },
      ],
      aeo: vendorDefaults.en.aeo,
    },
    ar: {
      title: "Microsoft",
      seo: {
        title: "نظرة عامة على Microsoft للمؤسسات | FileCount Knowledge",
        description: "نظرة محايدة على Microsoft — Dynamics وAzure وproductivity وecosystem.",
      },
      overview:
        "Microsoft تقدم منصات سحابية (Azure) وتطبيقات أعمال (Dynamics 365) وproductivity (Microsoft 365) وبنية تحتية مؤسسية.",
      focusAreas: ["Azure Cloud", "Dynamics 365 ERP/CRM", "Microsoft 365", "Power Platform", "Security"],
      typicalCustomers: ["منشآت على ecosystem Microsoft", "medium إلى enterprise", "متبنّو hybrid cloud"],
      deploymentOptions: vendorDefaults.ar.deploymentOptions,
      strengths: ["stack productivity وسحابة متكامل", "تجربة مستخدم familiar", "شبكة شركاء قوية في KSA"],
      considerations: ["تعقيد نموذج الترخيص", "تكامل عبر modules Dynamics", "مواءمة identity وأمن"],
      relatedTechnologies: [{ slug: "crm", label: "CRM" }, { slug: "erp", label: "ERP" }],
      relatedComparisons: [],
      faqs: [
        {
          question: "Dynamics 365 vs CRM/ERP منفصل؟",
          answer: "Dynamics 365 يقدم ERP وCRM modular على منصة مشتركة. الملاءمة تعتمد على الوحدات والاستثمار الحالي في Microsoft.",
        },
      ],
      aeo: vendorDefaults.ar.aeo,
    },
  },
};

export const vendorEntries = [oracleEntry, sapEntry, microsoftEntry];
