import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";

import { DT_FEATURE_CARD_TOKENS } from "./constants";

type DtJourneyStepCardProps = {
  title: string;
  description: string;
};

export function DtJourneyStepCard({ title, description }: DtJourneyStepCardProps) {
  return (
    <article
      className="why-filecount-card dt-journey-timeline__card group relative flex w-full flex-col overflow-hidden border bg-[var(--header-background)]"
      style={{
        minHeight: DT_FEATURE_CARD_TOKENS.minHeight,
        paddingInline: DT_FEATURE_CARD_TOKENS.paddingInline,
        paddingBlock: DT_FEATURE_CARD_TOKENS.paddingBlock,
        borderColor: HOME_CARD_TOKENS.border,
        borderRadius: HOME_CARD_TOKENS.radius,
        gap: DT_FEATURE_CARD_TOKENS.contentGap,
      }}
    >
      <span className="glass-sweep-overlay pointer-events-none" aria-hidden="true" />

      <h3
        className="relative z-[1] text-[length:var(--nav-font-size)] leading-snug text-[var(--nav-color)]"
        style={{ fontWeight: HOME_CARD_TOKENS.titleFontWeight }}
      >
        {title}
      </h3>

      <p
        className="relative z-[1] text-[13px] leading-[1.5] text-[var(--nav-color)] opacity-90"
        style={{
          marginTop: DT_FEATURE_CARD_TOKENS.titleDescriptionGap,
          fontWeight: HOME_CARD_TOKENS.descriptionFontWeight,
        }}
      >
        {description}
      </p>
    </article>
  );
}

type DtJourneyTimelineProps = {
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
};

export function DtJourneyTimeline({ steps }: DtJourneyTimelineProps) {
  return (
    <ol className="dt-journey-timeline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li
          key={step.number}
          className="dt-journey-timeline__step flex min-h-0 flex-col items-center"
        >
          <div className="dt-journey-timeline__node" aria-hidden="true">
            {step.number}
          </div>
          <DtJourneyStepCard title={step.title} description={step.description} />
        </li>
      ))}
    </ol>
  );
}
