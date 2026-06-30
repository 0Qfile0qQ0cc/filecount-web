import type { ElementType } from "react";

import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";
import { cn } from "@/lib/utils";

import { ABOUT_CARD_TOKENS } from "./constants";

type AboutReasonCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

export function AboutReasonCard({
  icon: Icon,
  title,
  description,
}: AboutReasonCardProps) {
  return (
    <article
      className={cn(
        "why-filecount-card group relative flex h-full w-full flex-col overflow-hidden border bg-[var(--header-background)]",
      )}
      style={{
        minHeight: ABOUT_CARD_TOKENS.minHeight,
        paddingInline: ABOUT_CARD_TOKENS.paddingInline,
        paddingBlock: ABOUT_CARD_TOKENS.paddingBlock,
        borderColor: HOME_CARD_TOKENS.border,
        borderRadius: HOME_CARD_TOKENS.radius,
        gap: ABOUT_CARD_TOKENS.contentGap,
      }}
    >
      <span className="glass-sweep-overlay pointer-events-none" aria-hidden="true" />

      <span
        className="about-icon-badge relative z-[1] inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <Icon
          size={ABOUT_CARD_TOKENS.iconGlyphSize}
          strokeWidth={ABOUT_CARD_TOKENS.iconStrokeWidth}
        />
      </span>

      <h3
        className="relative z-[1] text-[length:var(--nav-font-size)] leading-snug text-[var(--nav-color)]"
        style={{ fontWeight: HOME_CARD_TOKENS.titleFontWeight }}
      >
        {title}
      </h3>

      <p
        className="relative z-[1] text-[13px] leading-[1.5] text-[var(--nav-color)] opacity-90"
        style={{
          marginTop: ABOUT_CARD_TOKENS.titleDescriptionGap,
          fontWeight: HOME_CARD_TOKENS.descriptionFontWeight,
        }}
      >
        {description}
      </p>
    </article>
  );
}
