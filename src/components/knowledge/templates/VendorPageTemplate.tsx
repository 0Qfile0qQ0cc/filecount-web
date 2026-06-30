import { KnowledgeConsultantCta } from "@/components/knowledge/shared/KnowledgeConsultantCta";
import { KnowledgeFaqSection } from "@/components/knowledge/shared/KnowledgeFaqSection";
import { KnowledgePageLayout } from "@/components/knowledge/layout/KnowledgePageLayout";
import { KnowledgeRelatedLinks } from "@/components/knowledge/shared/KnowledgeRelatedLinks";
import { KnowledgeSection } from "@/components/knowledge/shared/KnowledgeSection";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { VendorEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type VendorPageTemplateProps = {
  locale: Locale;
  entry: VendorEntry;
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

export function VendorPageTemplate({ locale, entry }: VendorPageTemplateProps) {
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
          {content.overview}
        </p>
      </header>

      <KnowledgeSection title={ui.focusAreas}>
        <BulletList items={content.focusAreas} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.typicalCustomers} muted>
        <BulletList items={content.typicalCustomers} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.deploymentOptions}>
        <BulletList items={content.deploymentOptions} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.strengths} muted>
        <BulletList items={content.strengths} />
      </KnowledgeSection>

      <KnowledgeSection title={ui.considerations}>
        <BulletList items={content.considerations} />
      </KnowledgeSection>

      <KnowledgeRelatedLinks
        title={ui.relatedTechnologies}
        items={content.relatedTechnologies}
        defaultType="technology"
      />

      <KnowledgeRelatedLinks
        title={ui.comparisons}
        items={content.relatedComparisons}
        defaultType="comparison"
      />

      <KnowledgeFaqSection title={ui.faqs} items={content.faqs} />
      <KnowledgeConsultantCta locale={locale} />
    </KnowledgePageLayout>
  );
}
