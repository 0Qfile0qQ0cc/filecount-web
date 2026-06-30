import { KnowledgeLandingHero } from "@/components/knowledge/landing/KnowledgeLandingHero";
import { KnowledgeCategoryGrid } from "@/components/knowledge/landing/KnowledgeCategoryGrid";
import { KnowledgeUserJourney } from "@/components/knowledge/landing/KnowledgeUserJourney";
import { KnowledgeStructuredData } from "@/components/knowledge/layout/KnowledgeStructuredData";
import { Footer } from "@/components/sections/footer";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeCenterPageProps = {
  locale: Locale;
};

export function KnowledgeCenterPage({ locale }: KnowledgeCenterPageProps) {
  const ui = getKnowledgeUiContent(locale);

  return (
    <>
      <KnowledgeStructuredData
        locale={locale}
        pageName={`${ui.brand.title} | ${ui.brand.tagline}`}
        pageDescription={
          locale === "ar"
            ? "منصة المعرفة التقنية للمؤسسات في السعودية — ابحث، قارن، واتخذ القرار الصحيح."
            : "Saudi Arabia's enterprise technology knowledge platform. Search. Compare. Decide."
        }
        pathname="/knowledge-center"
        breadcrumbs={[]}
      />
      <main id="main-content">
        <KnowledgeLandingHero locale={locale} />
        <KnowledgeUserJourney locale={locale} />
        <KnowledgeCategoryGrid locale={locale} />
        <Footer />
      </main>
    </>
  );
}
