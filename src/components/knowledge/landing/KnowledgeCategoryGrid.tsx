import { Link } from "@/lib/i18n/navigation";
import { KNOWLEDGE_CATEGORIES } from "@/lib/knowledge/categories";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeCategoryGridProps = {
  locale: Locale;
};

export function KnowledgeCategoryGrid({ locale }: KnowledgeCategoryGridProps) {
  const ui = getKnowledgeUiContent(locale).landing;

  return (
    <section
      aria-labelledby="knowledge-categories-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div className="knowledge-container">
        <h2
          id="knowledge-categories-heading"
          className="knowledge-section-title text-center"
        >
          {ui.categoriesTitle}
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {KNOWLEDGE_CATEGORIES.map((category) => (
            <li key={category.id}>
              <Link href={category.href} className="knowledge-category-card group">
                <h3 className="text-base font-semibold text-[var(--nav-color)] group-hover:text-[var(--nav-hover-color)]">
                  {category.content[locale].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--nav-color)] opacity-75">
                  {category.content[locale].description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
