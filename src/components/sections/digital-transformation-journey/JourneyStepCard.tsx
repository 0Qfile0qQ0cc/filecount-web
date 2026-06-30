import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";

type JourneyStepCardProps = {
  number: string;
  title: string;
  description: string;
  showConnector?: boolean;
};

export function JourneyStepCard({
  number,
  title,
  description,
  showConnector = false,
}: JourneyStepCardProps) {
  return (
    <div className="flex min-w-0 flex-1 items-stretch gap-3">
      {showConnector && (
        <div
          className="hidden shrink-0 self-start lg:block"
          style={{ width: 20, paddingTop: 14 }}
          aria-hidden="true"
        >
          <div className="h-px w-full bg-[var(--header-border)]" />
        </div>
      )}
      <article
        className="why-filecount-card group relative flex min-h-0 w-full min-w-0 flex-col justify-center overflow-hidden border bg-[var(--header-background)]"
        style={{
          height: HOME_CARD_TOKENS.height,
          paddingInline: HOME_CARD_TOKENS.paddingInline,
          paddingBlock: HOME_CARD_TOKENS.paddingBlock,
          borderColor: HOME_CARD_TOKENS.border,
          borderRadius: HOME_CARD_TOKENS.radius,
        }}
      >
        <span className="glass-sweep-overlay" aria-hidden="true" />

        <span
          className="relative z-[1] inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--header-border)] bg-[var(--site-background)] px-2 text-xs tracking-wide text-[var(--nav-color)]"
          style={{
            height: HOME_CARD_TOKENS.iconSize,
            minWidth: HOME_CARD_TOKENS.iconSize,
            marginBottom: HOME_CARD_TOKENS.iconMarginBottom,
            fontWeight: HOME_CARD_TOKENS.titleFontWeight,
          }}
          aria-hidden="true"
        >
          {number}
        </span>

        <h3
          className="relative z-[1] text-[length:var(--nav-font-size)] leading-snug text-[var(--nav-color)]"
          style={{ fontWeight: HOME_CARD_TOKENS.titleFontWeight }}
        >
          {title}
        </h3>

        <p
          className="relative z-[1] text-[13px] leading-[1.4] text-[var(--nav-color)] opacity-90"
          style={{
            marginTop: HOME_CARD_TOKENS.titleDescriptionGap,
            fontWeight: HOME_CARD_TOKENS.descriptionFontWeight,
          }}
        >
          {description}
        </p>
      </article>
    </div>
  );
}
