import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "@locales";

/** Cookie used by next-intl middleware and the language switcher. */
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

/** One year — persisted manual language preference. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
  localeCookie: {
    name: LOCALE_COOKIE_NAME,
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax",
  },
});

export type AppLocale = (typeof routing.locales)[number];
