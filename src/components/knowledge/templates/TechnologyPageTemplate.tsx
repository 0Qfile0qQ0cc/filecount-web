import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { KnowledgeFaqSection } from "@/components/knowledge/shared/KnowledgeFaqSection";
import { KnowledgePageLayout } from "@/components/knowledge/layout/KnowledgePageLayout";
import { KnowledgeRelatedLinks } from "@/components/knowledge/shared/KnowledgeRelatedLinks";
import { KnowledgeSection } from "@/components/knowledge/shared/KnowledgeSection";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { TechnologyEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type TechnologyPageTemplateProps = {
  locale: Locale;
  entry: TechnologyEntry;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 ps-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function TechnologyPageTemplate({ locale, entry }: TechnologyPageTemplateProps) {
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
          {content.whatIsIt}
        </p>
      </header>

      <KnowledgeSection title={ui.businessPurpose}>
        <p>{content.businessPurpose}</p>
      </KnowledgeSection>

      <KnowledgeSection title={ui.benefits} muted>
        <BulletList items={content.benefits} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.challenges}>
        <BulletList items={content.challenges} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.whenToUse} muted>
        <BulletList items={content.whenToUse} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.whenNotToUse}>
        <BulletList items={content.whenNotToUse} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.implementationOverview} muted>
        <p>{content.implementationOverview}</p>
      </KnowledgeSection>

      <KnowledgeSection title={ui.aeo.alternatives}>
        <p>{content.aeo.alternatives}</p>
      </KnowledgeSection>

      <KnowledgeSection title={ui.aeo.howToChoose} muted>
        <p>{content.aeo.howToChoose}</p>
      </KnowledgeSection>

      <KnowledgeSection title={ui.aeo.commonMistakes}>
        <BulletList items={content.aeo.commonMistakes} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.decisionChecklist} muted>
        <BulletList items={content.decisionChecklist} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.aeo.implementationChecklist}>
        <BulletList items={content.aeo.implementationChecklist} />
      </KnowledgeSection>

      <KnowledgeFaqSection title={ui.faqs} items={content.faqs} />

      <KnowledgeRelatedLinks
        title={ui.relatedTechnologies}
        items={content.relatedTechnologies}
        defaultType="technology"
      />

      <KnowledgeRelatedLinks
        title={ui.relatedVendors}
        items={content.relatedVendors}
        defaultType="vendor"
      />

      {content.comparisonSlugs.length > 0 && (
        <KnowledgeRelatedLinks
          title={ui.comparisons}
          items={content.comparisonSlugs.map((slug) => ({
            slug,
            label: slug.replace(/-/g, " ").toUpperCase(),
            type: "comparison" as const,
          }))}
          defaultType="comparison"
        />
      )}

      <KnowledgeConsultantCta locale={locale} />
    </KnowledgePageLayout>
  );
}
