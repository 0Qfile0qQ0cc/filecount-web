import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { Locale } from "@/types/locale";

type KnowledgeConsultantCtaProps = {
  locale: Locale;
};

export function KnowledgeConsultantCta({ locale }: KnowledgeConsultantCtaProps) {
  const ui = getKnowledgeUiContent(locale).templates;

  return (
    <section
      aria-labelledby="knowledge-consultant-cta-heading"
      className="knowledge-section--muted py-14 lg:py-20"
    >
      <div className="knowledge-container text-center">
        <h2
          id="knowledge-consultant-cta-heading"
          className="text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
        >
          {ui.talkToConsultant}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--nav-color)] opacity-80">
          {ui.talkToConsultantDescription}
        </p>
        <div className="mt-8 flex justify-center">
          <HeroSecondaryButton label={ui.contactCta} href="/contact" />
        </div>
      </div>
    </section>
  );
}
