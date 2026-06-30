"use client";

import { useLocale } from "next-intl";

import { localeConfigs } from "@/types/locale";
import type { Locale } from "@/types/locale";

export function useAppLocale(): Locale {
  return useLocale() as Locale;
}

export function useDirection(): "ltr" | "rtl" {
  const locale = useAppLocale();
  return localeConfigs[locale].direction;
}

export function useIsRtl(): boolean {
  return useDirection() === "rtl";
}
