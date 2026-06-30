import { setRequestLocale } from "next-intl/server";

import { CareersPage } from "@/components/pages/careers";
import { CAREERS_PATH, getCareersContent } from "@/components/sections/careers/constants";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getCareersContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: CAREERS_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function CareersRoutePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CareersPage locale={locale as Locale} />;
}
