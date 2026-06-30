import { setRequestLocale } from "next-intl/server";

import { ContactPage } from "@/components/pages/contact";
import {
  CONTACT_PATH,
  getContactContent,
} from "@/components/sections/contact/constants";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getContactContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: CONTACT_PATH,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function ContactRoutePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPage locale={locale as Locale} />;
}
