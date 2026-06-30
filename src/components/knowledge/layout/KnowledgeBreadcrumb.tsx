import { Link } from "@/lib/i18n/navigation";
import { KNOWLEDGE_BASE_PATH } from "@/lib/knowledge/paths";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type KnowledgeBreadcrumbProps = {
  locale: Locale;
  items: BreadcrumbItem[];
};

export function KnowledgeBreadcrumb({ locale, items }: KnowledgeBreadcrumbProps) {
  const ui = getKnowledgeUiContent(locale).breadcrumb;

  const allItems: BreadcrumbItem[] = [
    { label: ui.home, href: "/" },
    { label: ui.knowledge, href: KNOWLEDGE_BASE_PATH },
    ...items,
  ];

  return (
    <nav aria-label="Breadcrumb" className="knowledge-breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--nav-color)] opacity-80">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="opacity-50">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--nav-hover-color)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
