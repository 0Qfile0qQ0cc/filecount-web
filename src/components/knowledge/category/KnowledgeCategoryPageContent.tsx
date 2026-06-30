import { Link } from "@/lib/i18n/navigation";
import {
  getEntriesByCategory,
  getEntryDescription,
  getEntryHref,
  getEntryTitle,
} from "@/lib/knowledge/registry";
import { getCategoryBySlug } from "@/lib/knowledge/categories";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeCategoryPageProps = {
  locale: Locale;
  categorySlug: string;
};

export function KnowledgeCategoryPageContent({
  locale,
  categorySlug,
}: KnowledgeCategoryPageProps) {
  const category = getCategoryBySlug(categorySlug);
  const ui = getKnowledgeUiContent(locale).category;

  if (!category) {
    return <p>{ui.empty}</p>;
  }

  if (category.id === "decision-assistant") {
    return null;
  }

  const entries = getEntriesByCategory(category.id);

  return (
    <div className="knowledge-content-width py-8">
      <h1 className="knowledge-page-title">{category.content[locale].title}</h1>
      <p className="mt-4 text-lg text-[var(--nav-color)] opacity-85">
        {category.content[locale].description}
      </p>

      <h2 className="mt-10 text-lg font-semibold text-[var(--nav-color)]">
        {ui.entriesTitle}
      </h2>

      {entries.length === 0 ? (
        <p className="mt-4 opacity-75">{ui.empty}</p>
      ) : (
        <ul className="mt-6 space-y-3">
          {entries.map((entry) => (
            <li key={`${entry.type}-${entry.slug}`}>
              <Link
                href={getEntryHref(entry)}
                className="block rounded-lg border border-[var(--header-border)] bg-[var(--header-background)] p-4 transition-colors hover:border-[var(--cta-hover-border)]"
              >
                <h3 className="font-medium text-[var(--nav-color)]">
                  {getEntryTitle(entry, locale)}
                </h3>
                <p className="mt-1 text-sm opacity-75 line-clamp-2">
                  {getEntryDescription(entry, locale)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
