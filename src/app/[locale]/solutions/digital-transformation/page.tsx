import { setRequestLocale } from "next-intl/server";

import { DigitalTransformationPage } from "@/components/pages/digital-transformation";
import {
  DIGITAL_TRANSFORMATION_PATH,
  getDigitalTransformationContent,
} from "@/components/sections/digital-transformation/constants";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getDigitalTransformationContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: DIGITAL_TRANSFORMATION_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function DigitalTransformationRoutePage({
  params,
}: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DigitalTransformationPage locale={locale as Locale} />;
}
