import { setRequestLocale } from "next-intl/server";

import { EnterprisePlatformsPage } from "@/components/pages/enterprise-platforms";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

import {
  ENTERPRISE_PLATFORMS_PATH,
  getEnterprisePlatformsContent,
} from "@/components/sections/enterprise-platforms/constants";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getEnterprisePlatformsContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: ENTERPRISE_PLATFORMS_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function PlatformDevelopmentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <EnterprisePlatformsPage locale={locale as Locale} />;
}
