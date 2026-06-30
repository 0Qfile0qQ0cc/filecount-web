import { Footer } from "@/components/sections/footer";
import { KnowledgeBreadcrumb } from "@/components/knowledge/layout/KnowledgeBreadcrumb";
import { KnowledgeStructuredData } from "@/components/knowledge/layout/KnowledgeStructuredData";
import { getEntryHref } from "@/lib/knowledge/registry";
import type { KnowledgeEntry } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type KnowledgePageLayoutProps = {
  locale: Locale;
  entry: KnowledgeEntry;
  pageTitle: string;
  pageDescription: string;
  breadcrumbLabel: string;
  faqs?: Array<{ question: string; answer: string }>;
  children: React.ReactNode;
};

export function KnowledgePageLayout({
  locale,
  entry,
  pageTitle,
  pageDescription,
  breadcrumbLabel,
  faqs,
  children,
}: KnowledgePageLayoutProps) {
  const pathname = getEntryHref(entry);

  return (
    <>
      <KnowledgeStructuredData
        locale={locale}
        pageName={pageTitle}
        pageDescription={pageDescription}
        pathname={pathname}
        breadcrumbs={[{ label: breadcrumbLabel, href: pathname }]}
        faqs={faqs}
      />
      <main id="main-content" className="bg-[var(--site-background)]">
        <div className="knowledge-container py-8 lg:py-10">
          <KnowledgeBreadcrumb
            locale={locale}
            items={[{ label: breadcrumbLabel }]}
          />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
