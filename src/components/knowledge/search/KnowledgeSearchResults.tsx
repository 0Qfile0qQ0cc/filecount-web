import { Link } from "@/lib/i18n/navigation";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { SearchResult } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type KnowledgeSearchResultsProps = {
  locale: Locale;
  query: string;
  results: SearchResult[];
};

export function KnowledgeSearchResults({
  locale,
  query,
  results,
}: KnowledgeSearchResultsProps) {
  const ui = getKnowledgeUiContent(locale).search;

  return (
    <div className="knowledge-content-width py-8">
      <h1 className="knowledge-page-title">
        {query ? `${ui.resultsFor} "${query}"` : ui.button}
      </h1>

      {results.length === 0 ? (
        <p className="mt-6 text-[var(--nav-color)] opacity-80">{ui.noResults}</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {results.map((result) => (
            <li key={`${result.type}-${result.slug}`}>
              <Link
                href={result.href}
                className="block rounded-xl border border-[var(--header-border)] bg-[var(--header-background)] p-5 transition-colors hover:border-[var(--cta-hover-border)]"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--nav-color)] opacity-50">
                  {ui.filters[result.type as keyof typeof ui.filters] ?? result.type}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-[var(--nav-color)]">
                  {result.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--nav-color)] opacity-75 line-clamp-2">
                  {result.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
