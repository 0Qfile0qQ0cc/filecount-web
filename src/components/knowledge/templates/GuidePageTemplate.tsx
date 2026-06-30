import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { KnowledgeFaqSection } from "@/components/knowledge/shared/KnowledgeFaqSection";
import { KnowledgePageLayout } from "@/components/knowledge/layout/KnowledgePageLayout";
import { KnowledgeRelatedLinks } from "@/components/knowledge/shared/KnowledgeRelatedLinks";
import { KnowledgeSection } from "@/components/knowledge/shared/KnowledgeSection";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { GuideEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type GuidePageTemplateProps = {
  locale: Locale;
  entry: GuideEntry;
};

export function GuidePageTemplate({ locale, entry }: GuidePageTemplateProps) {
  const content = entry.content[locale];
  const ui = getKnowledgeUiContent(locale).templates;

  return (
    <KnowledgePageLayout
      locale={locale}
      entry={entry}
      pageTitle={content.seo.title}
      pageDescription={content.seo.description}
      breadcrumbLabel={content.title}
      faqs={content.faqs}
    >
      <header className="knowledge-content-width pb-10 pt-4">
        <h1 className="knowledge-page-title">{content.title}</h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[var(--nav-color)] opacity-60">
          {content.problemStatement}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--nav-color)] opacity-85">
          {content.introduction}
        </p>
      </header>

      <KnowledgeSection title={ui.implementationOverview}>
        <ol className="list-decimal space-y-4 ps-5">
          {content.steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p className="mt-1 opacity-85">{step.description}</p>
            </li>
          ))}
        </ol>
      </KnowledgeSection>

      {content.recommendedTechnologies.length > 0 && (
        <KnowledgeSection title={ui.recommendedTechnologies} muted>
          <ul className="space-y-4">
            {content.recommendedTechnologies.map((tech) => (
              <li
                key={tech.slug}
                className="rounded-lg border border-[var(--header-border)] bg-[var(--header-background)] p-4"
              >
                <strong>{tech.label}</strong>
                <p className="mt-1 text-sm opacity-85">{tech.reason}</p>
              </li>
            ))}
          </ul>
        </KnowledgeSection>
      )}

      <KnowledgeSection title={ui.decisionFactors}>
        <ul className="list-disc space-y-2 ps-5">
          {content.decisionFactors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </KnowledgeSection>

      <KnowledgeRelatedLinks
        title={ui.recommendedTechnologies}
        items={content.recommendedTechnologies.map((t) => ({
          slug: t.slug,
          label: t.label,
        }))}
      />

      <KnowledgeFaqSection title={ui.faqs} items={content.faqs} />
      <KnowledgeConsultantCta locale={locale} />
    </KnowledgePageLayout>
  );
}
