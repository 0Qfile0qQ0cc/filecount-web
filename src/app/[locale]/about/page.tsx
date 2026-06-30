import { setRequestLocale } from "next-intl/server";

import { AboutPage } from "@/components/pages/about";
import { ABOUT_PATH, getAboutContent } from "@/components/sections/about/constants";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getAboutContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: ABOUT_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function AboutRoutePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPage locale={locale as Locale} />;
}
