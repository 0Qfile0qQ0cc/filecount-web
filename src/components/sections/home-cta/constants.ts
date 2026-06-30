import type { Locale } from "@/types/locale";

export const HOME_CTA_TOKENS = {
  containerMaxWidth: 960,
  contentMaxWidth: 720,
  featureCardGap: 16,
} as const;

export const HOME_CTA_FEATURE_KEYS = [
  "enterprisePlatforms",
  "digitalTransformation",
  "technicalConsulting",
] as const;

export type HomeCtaFeatureKey = (typeof HOME_CTA_FEATURE_KEYS)[number];

type CtaFeature = {
  title: string;
  description: string;
};

type HomeCtaContent = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  features: Record<HomeCtaFeatureKey, CtaFeature>;
};

const CONTENT: Record<Locale, HomeCtaContent> = {
  en: {
    title: "Ready to Transform Your Organization?",
    description:
      "Whether you're modernizing operations, implementing enterprise platforms, integrating existing systems, or accelerating digital transformation, FileCount helps you choose, customize and deliver the right technology solution for your organization.",
    primaryCta: "Talk to an Expert",
    secondaryCta: "Explore Solutions",
    features: {
      enterprisePlatforms: {
        title: "Enterprise Platforms",
        description:
          "Secure, scalable platforms tailored to your organization's operational needs.",
      },
      digitalTransformation: {
        title: "Digital Transformation",
        description:
          "Modernize operations with digital solutions that improve efficiency, productivity and sustainable growth.",
      },
      technicalConsulting: {
        title: "Technical Consulting",
        description:
          "Technology consulting that helps organizations choose the right solutions and make informed decisions that support growth and sustainability.",
      },
    },
  },
  ar: {
    title: "جاهز لتطوير أعمال منشأتك؟",
    description:
      "سواء كنت تطوّر العمليات، أو تنفّذ منصات مؤسسية، أو تربط أنظمتك الحالية، أو تسرّع التحول الرقمي، تساعدك فايل كاونت على اختيار المنصة المناسبة وتخصيصها وتسليم الحل التقني الأنسب لمنشأتك.",
    primaryCta: "تحدث مع خبير",
    secondaryCta: "استكشف الحلول",
    features: {
      enterprisePlatforms: {
        title: "منصات مؤسسية",
        description:
          "منصات آمنة وقابلة للتوسع مصممة وفق احتياجات عمليات منشأتك.",
      },
      digitalTransformation: {
        title: "التحول الرقمي",
        description:
          "تحديث العمليات بحلول رقمية تعزز الكفاءة وترفع الإنتاجية وتدعم النمو المستدام.",
      },
      technicalConsulting: {
        title: "الاستشارات التقنية",
        description:
          "استشارات تقنية تساعد الجهات والمنشآت على اختيار الحلول المناسبة، واتخاذ قرارات تقنية مدروسة تدعم النمو والاستدامة.",
      },
    },
  },
};

export function getHomeCtaContent(locale: Locale): HomeCtaContent {
  return CONTENT[locale];
}
