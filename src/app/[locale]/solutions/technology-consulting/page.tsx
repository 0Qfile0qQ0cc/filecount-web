import { setRequestLocale } from "next-intl/server";

import { TechnologyConsultingPage } from "@/components/pages/technology-consulting";
import {
  getTechnologyConsultingContent,
  TECHNOLOGY_CONSULTING_PATH,
} from "@/components/sections/technology-consulting/constants";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getTechnologyConsultingContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: TECHNOLOGY_CONSULTING_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function TechnologyConsultingRoutePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TechnologyConsultingPage locale={locale as Locale} />;
}
