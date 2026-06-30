import { Link } from "@/lib/i18n/navigation";
import { knowledgeEntryPath } from "@/lib/knowledge/paths";
import type { KnowledgeEntryType } from "@/lib/knowledge/types";

type LinkItem = {
  slug: string;
  label: string;
  type?: KnowledgeEntryType;
  href?: string;
};

type KnowledgeRelatedLinksProps = {
  title: string;
  items: LinkItem[];
  defaultType?: KnowledgeEntryType;
};

export function KnowledgeRelatedLinks({
  title,
  items,
  defaultType = "technology",
}: KnowledgeRelatedLinksProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="knowledge-related-heading" className="py-10 lg:py-14">
      <div className="knowledge-content-width">
        <h2 id="knowledge-related-heading" className="knowledge-section-title">
          {title}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {items.map((item) => (
            <li key={`${item.slug}-${item.label}`}>
              <Link
                href={item.href ?? knowledgeEntryPath(item.type ?? defaultType, item.slug)}
                className="knowledge-chip"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
