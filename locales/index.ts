export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  ar: "ar",
};

export const localeOpenGraphLocale: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_SA",
};

export type LocaleConfig = {
  code: Locale;
  label: string;
  direction: "ltr" | "rtl";
  htmlLang: string;
  openGraphLocale: string;
};

export const localeConfigs: Record<Locale, LocaleConfig> = Object.fromEntries(
  locales.map((code) => [
    code,
    {
      code,
      label: localeLabels[code],
      direction: localeDirections[code],
      htmlLang: localeHtmlLang[code],
      openGraphLocale: localeOpenGraphLocale[code],
    },
  ]),
) as Record<Locale, LocaleConfig>;
