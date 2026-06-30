import type { Locale } from "@/types/locale";

export const SERVICES_TOKENS = {
  containerMaxWidth: 1280,
  descriptionMaxWidth: 760,
  cardGap: 20,
  titleToCardsGap: 48,
} as const;

export const SERVICE_KEYS = [
  "enterprisePlatforms",
  "digitalTransformation",
  "technicalConsulting",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

type ServiceItem = {
  title: string;
  description: string;
  href: string;
};

type ServicesContent = {
  title: string;
  description: string;
  services: Record<ServiceKey, ServiceItem>;
};

const CONTENT: Record<Locale, ServicesContent> = {
  en: {
    title: "Our Services",
    description:
      "Enterprise solutions designed to help organizations select, implement and integrate the right technology platforms.",
    services: {
      enterprisePlatforms: {
        title: "Enterprise Platforms",
        description:
          "Secure, scalable platforms tailored to your organization's operational needs.",
        href: "/solutions/platform-development",
      },
      digitalTransformation: {
        title: "Digital Transformation",
        description:
          "Modernize operations with digital solutions that improve efficiency, productivity and sustainable growth.",
        href: "/solutions/digital-transformation",
      },
      technicalConsulting: {
        title: "Technical Consulting",
        description:
          "Technology consulting that helps organizations choose the right solutions and make informed decisions that support growth and sustainability.",
        href: "/solutions/technology-consulting",
      },
    },
  },
  ar: {
    title: "خدماتنا",
    description:
      "حلول مؤسسية مصممة لمساعدة المنشآت على اختيار المنصات المناسبة وتنفيذها وربطها مع أنظمتها.",
    services: {
      enterprisePlatforms: {
        title: "منصات مؤسسية",
        description:
          "منصات آمنة وقابلة للتوسع مصممة وفق احتياجات عمليات منشأتك.",
        href: "/solutions/platform-development",
      },
      digitalTransformation: {
        title: "التحول الرقمي",
        description:
          "تحديث العمليات بحلول رقمية تعزز الكفاءة وترفع الإنتاجية وتدعم النمو المستدام.",
        href: "/solutions/digital-transformation",
      },
      technicalConsulting: {
        title: "الاستشارات التقنية",
        description:
          "استشارات تقنية تساعد الجهات والمنشآت على اختيار الحلول المناسبة، واتخاذ قرارات تقنية مدروسة تدعم النمو والاستدامة.",
        href: "/solutions/technology-consulting",
      },
    },
  },
};

export function getServicesContent(locale: Locale): ServicesContent {
  return CONTENT[locale];
}
