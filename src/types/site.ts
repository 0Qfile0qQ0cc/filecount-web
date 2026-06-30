import type { Locale } from "./locale";

export type SiteConfig = {
  name: string;
  legalName: string;
  url: string;
  defaultLocale: Locale;
  locales: readonly Locale[];
  twitterHandle?: string;
};
