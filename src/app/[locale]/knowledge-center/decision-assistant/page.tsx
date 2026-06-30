import { setRequestLocale } from "next-intl/server";

import { DecisionAssistantForm } from "@/components/knowledge/decision-assistant/DecisionAssistantForm";
import { KnowledgeBreadcrumb } from "@/components/knowledge/layout/KnowledgeBreadcrumb";
import { KnowledgeStructuredData } from "@/components/knowledge/layout/KnowledgeStructuredData";
import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { Footer } from "@/components/sections/footer";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import { createMetadata as buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ui = getKnowledgeUiContent(locale as Locale).decisionAssistant;

  return buildMetadata({
    locale: locale as Locale,
    pathname: "/knowledge-center/decision-assistant",
    title: `${ui.title} | FileCount Knowledge`,
    description: ui.description,
  });
}

export default async function DecisionAssistantPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const ui = getKnowledgeUiContent(typedLocale).decisionAssistant;

  return (
    <>
      <KnowledgeStructuredData
        locale={typedLocale}
        pageName={ui.title}
        pageDescription={ui.description}
        pathname="/knowledge-center/decision-assistant"
        breadcrumbs={[{ label: ui.title }]}
      />
      <main id="main-content" className="bg-[var(--site-background)]">
        <div className="knowledge-container py-8 lg:py-12">
          <KnowledgeBreadcrumb locale={typedLocale} items={[{ label: ui.title }]} />
          <header className="knowledge-content-width mt-6">
            <h1 className="knowledge-page-title">{ui.title}</h1>
          </header>
          <DecisionAssistantForm locale={typedLocale} />
        </div>
        <KnowledgeConsultantCta locale={typedLocale} />
        <Footer />
      </main>
    </>
  );
}
