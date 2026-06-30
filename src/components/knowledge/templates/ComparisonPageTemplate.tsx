import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { KnowledgeFaqSection } from "@/components/knowledge/shared/KnowledgeFaqSection";
import { KnowledgePageLayout } from "@/components/knowledge/layout/KnowledgePageLayout";
import { KnowledgeSection } from "@/components/knowledge/shared/KnowledgeSection";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { ComparisonEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type ComparisonPageTemplateProps = {
  locale: Locale;
  entry: ComparisonEntry;
};

export function ComparisonPageTemplate({ locale, entry }: ComparisonPageTemplateProps) {
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
        <p className="mt-4 text-lg leading-relaxed text-[var(--nav-color)] opacity-85">
          {content.introduction}
        </p>
        <p className="mt-4 rounded-lg border border-[var(--header-border)] bg-[var(--header-background)] p-4 text-sm text-[var(--nav-color)] opacity-90">
          {ui.neutralComparisonNote}
        </p>
      </header>

      <KnowledgeSection title={ui.comparisonDimensions}>
        <div className="knowledge-comparison-table overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col">{ui.comparisonDimensions}</th>
                <th scope="col">{content.entityALabel}</th>
                <th scope="col">{content.entityBLabel}</th>
              </tr>
            </thead>
            <tbody>
              {content.dimensions.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.entityA}</td>
                  <td>{row.entityB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </KnowledgeSection>

      <KnowledgeSection title={ui.typicalUseCases} muted>
        <div className="knowledge-comparison-table overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">{content.entityALabel}</th>
                <th scope="col">{content.entityBLabel}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{content.typicalUseCases.label}</th>
                <td>{content.typicalUseCases.entityA}</td>
                <td>{content.typicalUseCases.entityB}</td>
              </tr>
              <tr>
                <th scope="row">{content.strengths.label}</th>
                <td>{content.strengths.entityA}</td>
                <td>{content.strengths.entityB}</td>
              </tr>
              <tr>
                <th scope="row">{content.challenges.label}</th>
                <td>{content.challenges.entityA}</td>
                <td>{content.challenges.entityB}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </KnowledgeSection>

      <KnowledgeSection title={ui.comparisonDimensions}>
        <p>{content.neutralSummary}</p>
      </KnowledgeSection>

      <KnowledgeFaqSection title={ui.faqs} items={content.faqs} />
      <KnowledgeConsultantCta locale={locale} />
    </KnowledgePageLayout>
  );
}
