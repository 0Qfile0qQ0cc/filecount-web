import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { KnowledgeFaqSection } from "@/components/knowledge/shared/KnowledgeFaqSection";
import { KnowledgePageLayout } from "@/components/knowledge/layout/KnowledgePageLayout";
import { KnowledgeRelatedLinks } from "@/components/knowledge/shared/KnowledgeRelatedLinks";
import { KnowledgeSection } from "@/components/knowledge/shared/KnowledgeSection";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { GlossaryEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type GlossaryPageTemplateProps = {
  locale: Locale;
  entry: GlossaryEntry;
};

export function GlossaryPageTemplate({ locale, entry }: GlossaryPageTemplateProps) {
  const content = entry.content[locale];
  const ui = getKnowledgeUiContent(locale).templates;

  return (
    <KnowledgePageLayout
      locale={locale}
      entry={entry}
      pageTitle={content.seo.title}
      pageDescription={content.seo.description}
      breadcrumbLabel={content.term}
      faqs={content.faqs}
    >
      <header className="knowledge-content-width pb-10 pt-4">
        <h1 className="knowledge-page-title">{content.term}</h1>
        <p className="mt-4 text-xl leading-relaxed text-[var(--nav-color)] opacity-90">
          {content.definition}
        </p>
      </header>

      <KnowledgeSection title={ui.definition}>
        <p>{content.extendedExplanation}</p>
      </KnowledgeSection>

      <KnowledgeRelatedLinks
        title={ui.relatedTerms}
        items={content.relatedTerms}
        defaultType="glossary"
      />

      <KnowledgeRelatedLinks
        title={ui.relatedTechnologies}
        items={content.relatedTechnologies}
        defaultType="technology"
      />

      <KnowledgeFaqSection title={ui.faqs} items={content.faqs} />
      <KnowledgeConsultantCta locale={locale} />
    </KnowledgePageLayout>
  );
}
