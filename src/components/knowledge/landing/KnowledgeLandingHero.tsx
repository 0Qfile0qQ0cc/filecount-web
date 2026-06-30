import { KnowledgeSearchBox } from "@/components/knowledge/search/KnowledgeSearchBox";
import { KnowledgePopularSearches } from "@/components/knowledge/search/KnowledgePopularSearches";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeLandingHeroProps = {
  locale: Locale;
};

export function KnowledgeLandingHero({ locale }: KnowledgeLandingHeroProps) {
  const ui = getKnowledgeUiContent(locale);

  return (
    <section
      aria-labelledby="knowledge-landing-heading"
      className="bg-[var(--site-background)] py-16 lg:py-24"
    >
      <div className="knowledge-container flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--nav-color)] opacity-60">
          {ui.brand.title}
        </p>
        <h1
          id="knowledge-landing-heading"
          className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[var(--nav-color)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          {ui.brand.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--nav-color)] opacity-80">
          {locale === "ar"
            ? "منصة المعرفة التقنية الرائدة للمؤسسات في المملكة — محايدة، تعليمية، موجهة للقرار."
            : "Saudi Arabia's vendor-neutral enterprise technology knowledge platform — educate, compare and guide better decisions."}
        </p>

        <div className="mt-10 w-full max-w-3xl">
          <KnowledgeSearchBox size="large" autoFocus />
        </div>

        <div className="mt-8 w-full max-w-3xl">
          <KnowledgePopularSearches locale={locale} />
        </div>
      </div>
    </section>
  );
}
