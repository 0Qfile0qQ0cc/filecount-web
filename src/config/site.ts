import { defaultLocale, locales } from "@locales";
import { APP_NAME } from "@/constants";
import type { SiteConfig } from "@/types/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.filecount.sa";

export const siteConfig: SiteConfig = {
  name: APP_NAME,
  legalName: APP_NAME,
  url: siteUrl.replace(/\/$/, ""),
  defaultLocale,
  locales,
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
};

export const isProduction = process.env.NODE_ENV === "production";

/** When false, robots.txt blocks crawlers even in production builds (e.g. preview). */
export const isIndexable =
  process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" ||
  (isProduction && process.env.VERCEL_ENV === "production");
