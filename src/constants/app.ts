/**
 * Application-wide constants.
 * Keep runtime values out of components; reference from here.
 */

export const APP_NAME = "FileCount" as const;

export const APP_DESCRIPTION = {
  en: "Enterprise technology consulting, digital transformation advisory and platform strategy for organizations in Saudi Arabia.",
  ar: "استشارات تقنية مؤسسية، واستشارات التحول الرقمي، واستراتيجية المنصات للمنشآت في المملكة العربية السعودية.",
} as const;

export const COMPANY = {
  name: APP_NAME,
  legalName: "FileCount",
  country: "SA",
  industry: "Technology Consulting",
} as const;
