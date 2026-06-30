import { BookOpen, Compass, Scale } from "lucide-react";

import { Link } from "@/lib/i18n/navigation";
import {
  knowledgeCategoryPath,
  knowledgeDecisionAssistantPath,
} from "@/lib/knowledge/paths";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeUserJourneyProps = {
  locale: Locale;
};

const LAYER_ICONS = [BookOpen, Compass, Scale] as const;
const LAYER_HREFS = [
  knowledgeCategoryPath("enterprise-platforms"),
  knowledgeCategoryPath("buying-guides"),
  knowledgeDecisionAssistantPath(),
] as const;

export function KnowledgeUserJourney({ locale }: KnowledgeUserJourneyProps) {
  const ui = getKnowledgeUiContent(locale).landing;
  const layers = [ui.layers.learn, ui.layers.solve, ui.layers.decide];

  return (
    <section
      aria-labelledby="knowledge-journey-heading"
      className="knowledge-section--muted pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div className="knowledge-container">
        <h2 id="knowledge-journey-heading" className="knowledge-section-title text-center">
          {ui.userJourneyTitle}
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {layers.map((layer, index) => {
            const Icon = LAYER_ICONS[index] ?? BookOpen;
            const href = LAYER_HREFS[index] ?? "#";

            return (
              <li key={layer.title}>
                <article className="knowledge-journey-card">
                  <span className="knowledge-icon-badge" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--nav-color)]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--nav-color)] opacity-80">
                    {layer.description}
                  </p>
                  <Link href={href} className="knowledge-inline-link mt-5 inline-flex">
                    {layer.cta}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
