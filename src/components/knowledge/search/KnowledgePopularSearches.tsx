import { Link } from "@/lib/i18n/navigation";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import { POPULAR_SEARCHES } from "@/lib/knowledge/ui-content";
import { knowledgeSearchPath } from "@/lib/knowledge/paths";
import type { Locale } from "@/types/locale";

type KnowledgePopularSearchesProps = {
  locale: Locale;
};

export function KnowledgePopularSearches({ locale }: KnowledgePopularSearchesProps) {
  const ui = getKnowledgeUiContent(locale).search;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="text-sm font-medium text-[var(--nav-color)] opacity-70">
        {ui.popularLabel}:
      </span>
      {POPULAR_SEARCHES.map((term) => (
        <Link
          key={term}
          href={knowledgeSearchPath(term)}
          className="knowledge-chip"
        >
          {term}
        </Link>
      ))}
    </div>
  );
}
