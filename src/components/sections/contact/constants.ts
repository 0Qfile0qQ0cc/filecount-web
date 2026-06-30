import type { Locale } from "@/types/locale";

export const CONTACT_PATH = "/contact";

type ContactContent = {
  seo: { title: string; description: string };
  title: string;
  description: string;
  schema: {
    pageName: string;
    pageDescription: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
};

const CONTENT: Record<Locale, ContactContent> = {
  en: {
    seo: {
      title: "Contact FileCount | Enterprise Technology Consulting in Saudi Arabia",
      description:
        "Contact FileCount for enterprise technology consulting, digital transformation and platform advisory services in Saudi Arabia.",
    },
    title: "Contact Us",
    description:
      "Reach our team to discuss your technology requirements, consulting engagements or partnership opportunities.",
    schema: {
      pageName: "Contact FileCount",
      pageDescription:
        "Contact FileCount for enterprise technology consulting in Saudi Arabia.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Contact Us",
    },
  },
  ar: {
    seo: {
      title: "تواصل معنا | فايل كاونت — استشارات تقنية مؤسسية في السعودية",
      description:
        "تواصل مع فايل كاونت للاستشارات التقنية المؤسسية وخدمات التحول الرقمي واختيار المنصات في المملكة العربية السعودية.",
    },
    title: "تواصل معنا",
    description:
      "تواصل مع فريقنا لمناقشة متطلباتك التقنية أو فرص الاستشارات والشراكة.",
    schema: {
      pageName: "تواصل معنا | فايل كاونت",
      pageDescription:
        "تواصل مع فايل كاونت للاستشارات التقنية المؤسسية في المملكة.",
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "تواصل معنا",
    },
  },
};

export function getContactContent(locale: Locale): ContactContent {
  return CONTENT[locale];
}
