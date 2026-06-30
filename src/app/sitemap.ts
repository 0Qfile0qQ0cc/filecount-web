import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { SITEMAP_PATHS } from "@/lib/seo/sitemap-paths";
import { localeConfigs, locales } from "@/types/locale";

function buildLocalizedUrl(locale: string, pathname: string): string {
  if (pathname === "") {
    return `${siteConfig.url}/${locale}`;
  }

  return `${siteConfig.url}/${locale}${pathname}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PATHS.flatMap((pathname) =>
    locales.map((locale) => ({
      url: buildLocalizedUrl(locale, pathname),
      lastModified,
      changeFrequency: pathname === "" ? ("weekly" as const) : ("monthly" as const),
      priority: pathname === "" ? (locale === siteConfig.defaultLocale ? 1 : 0.9) : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [
            localeConfigs[item].htmlLang,
            buildLocalizedUrl(item, pathname),
          ]),
        ),
      },
    })),
  );
}
