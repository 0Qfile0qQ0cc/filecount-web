import type { Metadata } from "next";

import { LOGO_URL_PATH } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { localeConfigs, locales } from "@/types/locale";
import type { MetadataParams } from "@/types/seo";

function buildCanonicalUrl(locale: MetadataParams["locale"], pathname = ""): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const localePath =
    normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;

  return `${siteConfig.url}${localePath}`;
}

function buildAlternateLanguages(pathname = ""): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [localeConfigs[locale].htmlLang, buildCanonicalUrl(locale, pathname)]),
  );
}

export function createMetadata({
  locale,
  pathname = "",
  title,
  description,
  noIndex = false,
}: MetadataParams): Metadata {
  const localeConfig = localeConfigs[locale];
  const canonical = buildCanonicalUrl(locale, pathname);
  const pageTitle = title ?? siteConfig.name;
  const pageDescription = description ?? siteConfig.name;
  const ogImage = `${siteConfig.url}${LOGO_URL_PATH}`;

  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: pageTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    alternates: {
      canonical,
      languages: buildAlternateLanguages(pathname),
    },
    openGraph: {
      type: "website",
      locale: localeConfig.openGraphLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeConfigs[item].openGraphLocale),
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: ogImage, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      ...(siteConfig.twitterHandle
        ? { site: siteConfig.twitterHandle, creator: siteConfig.twitterHandle }
        : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    ...(googleVerification || bingVerification
      ? {
          verification: {
            ...(googleVerification ? { google: googleVerification } : {}),
            ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
          },
        }
      : {}),
  };
}
