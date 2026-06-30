import { setRequestLocale } from "next-intl/server";

import { redirect } from "@/lib/i18n/navigation";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ItConsultingRedirectPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  redirect({
    href: "/solutions/technology-consulting",
    locale: locale as Locale,
  });
}
