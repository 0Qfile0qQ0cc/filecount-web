import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { KnowledgeCenterPage } from "@/components/pages/knowledge-center";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const ui = getKnowledgeUiContent(locale as Locale);

  return buildMetadata({
    locale: locale as Locale,
    pathname: "/knowledge-center",
    title: `${ui.brand.title} | ${ui.brand.tagline}`,
    description:
      locale === "ar"
        ? "منصة المعرفة التقنية للمؤسسات في السعودية — ابحث عن التقنيات والمزودين وقارن واتخذ قرارات أفضل."
        : "Enterprise technology knowledge for Saudi organizations. Search technologies, compare options and make better decisions — vendor-neutral.",
  });
}

export default async function KnowledgeCenterRoutePage({ params }: PageProps) {
  const { locale } = await params;
  if (!locale) notFound();
  setRequestLocale(locale);

  return <KnowledgeCenterPage locale={locale as Locale} />;
}
