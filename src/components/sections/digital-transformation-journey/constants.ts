import type { Locale } from "@/types/locale";

export const JOURNEY_TOKENS = {
  containerMaxWidth: 1280,
  titleToTimelineGap: 48,
  cardGap: 20,
} as const;

export const JOURNEY_STEP_KEYS = [
  "understand",
  "select",
  "customize",
  "deploy",
  "support",
] as const;

export type JourneyStepKey = (typeof JOURNEY_STEP_KEYS)[number];

type JourneyStep = {
  number: string;
  title: string;
  description: string;
};

type JourneyContent = {
  title: string;
  steps: Record<JourneyStepKey, JourneyStep>;
};

const CONTENT: Record<Locale, JourneyContent> = {
  en: {
    title: "Digital Transformation Journey",
    steps: {
      understand: {
        number: "01",
        title: "Understand Business Needs",
        description:
          "Understand business objectives, current systems and operational challenges before selecting any platform.",
      },
      select: {
        number: "02",
        title: "Select The Right Platform",
        description:
          "Choose the most suitable enterprise platform based on organizational requirements.",
      },
      customize: {
        number: "03",
        title: "Customize & Integrate",
        description:
          "Customize the selected platform and integrate it with existing systems and workflows.",
      },
      deploy: {
        number: "04",
        title: "Deploy & Enable",
        description:
          "Deploy the solution, train users and ensure a smooth transition.",
      },
      support: {
        number: "05",
        title: "Support & Continuous Improvement",
        description:
          "Provide ongoing support, optimization and future enhancements as business needs evolve.",
      },
    },
  },
  ar: {
    title: "رحلة التحول الرقمي",
    steps: {
      understand: {
        number: "01",
        title: "فهم احتياجات الأعمال",
        description:
          "نفهم أهداف المنشأة وأنظمتها الحالية والتحديات التشغيلية قبل اختيار أي منصة.",
      },
      select: {
        number: "02",
        title: "اختيار المنصة المناسبة",
        description:
          "نختار المنصة المؤسسية الأنسب بناءً على متطلبات المنشأة.",
      },
      customize: {
        number: "03",
        title: "التخصيص والتكامل",
        description:
          "نخصص المنصة المختارة ونربطها مع الأنظمة وسير العمل الحالي.",
      },
      deploy: {
        number: "04",
        title: "الإطلاق والتمكين",
        description:
          "نطلق الحل وندرب المستخدمين ونضمن انتقالًا سلسًا.",
      },
      support: {
        number: "05",
        title: "الدعم والتطوير المستمر",
        description:
          "نوفر دعمًا مستمرًا وتحسينات مستقبلية مع تطور احتياجات الأعمال.",
      },
    },
  },
};

export function getJourneyContent(locale: Locale): JourneyContent {
  return CONTENT[locale];
}
