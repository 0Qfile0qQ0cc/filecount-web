import type { Locale } from "@/types/locale";

/** SEO brand titles — not visible page copy; used in metadata and structured data. */
export const BRAND_TITLE: Record<Locale, string> = {
  en: "FileCount | Enterprise Technology Consulting",
  ar: "فايل كاونت | للاستشارات التقنية",
};

export const BRAND_KNOWLEDGE: Record<Locale, string> = {
  en: "FileCount Knowledge",
  ar: "معرفة فايل كاونت",
};

/** Entity descriptions for Organization / LocalBusiness schema (AEO / GEO). */
export const ENTITY_DESCRIPTION: Record<Locale, string> = {
  en: "FileCount is a Saudi enterprise technology consulting company specializing in technology advisory, digital transformation, enterprise platforms, vendor selection, system integration and implementation oversight. We are not a software reseller, marketplace or hosting provider.",
  ar: "فايل كاونت شركة استشارات تقنية مؤسسية سعودية متخصصة في الاستشارات التقنية، والتحول الرقمي، والمنصات المؤسسية، واختيار المزودين، وربط الأنظمة، والإشراف على التنفيذ. لسنا موزّع برمجيات ولا marketplace ولا مزود استضافة.",
};

/** Topical authority terms — used in schema.org knowsAbout. */
export const KNOWS_ABOUT = [
  "Technology Consulting",
  "Enterprise Technology",
  "Digital Transformation",
  "Enterprise Platforms",
  "ERP Consulting",
  "CRM Consulting",
  "DMS Consulting",
  "Workflow Automation",
  "System Integration",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Vendor Selection",
  "Technology Assessment",
  "Project Management",
  "Implementation Oversight",
] as const;

export const NAP = {
  phone: "+966559625553",
  phoneDisplay: "+966 55 962 5553",
  email: "info@filecount.com",
  locality: { en: "Riyadh", ar: "الرياض" },
  country: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
} as const;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/filecount/",
  "https://x.com/FilecountSA",
] as const;

export const LOGO_URL_PATH = "/logos/filecount-logo.svg";
