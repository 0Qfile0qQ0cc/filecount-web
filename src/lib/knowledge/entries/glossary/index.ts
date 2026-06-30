import type { GlossaryEntry } from "../../types";

export const cloudComputingTerm: GlossaryEntry = {
  type: "glossary",
  slug: "cloud-computing",
  categoryId: "technology-glossary",
  searchTerms: ["cloud computing", "cloud", "IaaS", "PaaS", "SaaS"],
  content: {
    en: {
      term: "Cloud Computing",
      seo: {
        title: "Cloud Computing Definition | FileCount Knowledge Glossary",
        description: "Clear definition of cloud computing — IaaS, PaaS, SaaS and enterprise adoption context.",
      },
      definition:
        "Cloud computing delivers IT resources — servers, storage, databases, networking and software — over the internet on a pay-as-you-go model instead of owning physical infrastructure.",
      extendedExplanation:
        "Enterprise cloud models include public cloud (shared provider infrastructure), private cloud (dedicated environment), and hybrid (combination). Service models: IaaS (infrastructure), PaaS (platform for developers), SaaS (applications). Saudi organizations evaluate cloud for scalability, disaster recovery and capital expense reduction while considering data residency and compliance.",
      relatedTerms: [
        { slug: "hybrid-cloud", label: "Hybrid Cloud" },
        { slug: "saas", label: "SaaS" },
      ],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }],
      faqs: [
        {
          question: "Is cloud always cheaper?",
          answer: "Not necessarily. Total cost depends on usage patterns, migration, operations and compliance — model TCO over time.",
        },
      ],
    },
    ar: {
      term: "الحوسبة السحابية",
      seo: {
        title: "تعريف الحوسبة السحابية | مسرد FileCount Knowledge",
        description: "تعريف واضح للحوسبة السحابية — IaaS وPaaS وSaaS وسياق التبني المؤسسي.",
      },
      definition:
        "الحوسبة السحابية تقدم موارد IT — خوادم وتخزين وdatabases وشبكات وبرمجيات — عبر الإنترنت بنموذج pay-as-you-go بدلاً من proudly infrastructure فيزيائية.",
      extendedExplanation:
        "نماذج cloud مؤسسية: public cloud وprivate cloud وhybrid. نماذج الخدمة: IaaS وPaaS وSaaS. المنشآت السعودية تقيّم السحابة للتوسع و disaster recovery وتقليل capex مع مراعاة data residency والامتثال.",
      relatedTerms: [
        { slug: "hybrid-cloud", label: "Hybrid Cloud" },
        { slug: "saas", label: "SaaS" },
      ],
      relatedTechnologies: [{ slug: "erp", label: "ERP" }],
      faqs: [
        {
          question: "هل السحابة دائماً أرخص؟",
          answer: "ليس بالضرورة. التكلفة تعتمد على usage وmigration وoperations والامتثال — model TCO over time.",
        },
      ],
    },
  },
};

export const glossaryEntries = [cloudComputingTerm];
