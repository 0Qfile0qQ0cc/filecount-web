import type { ElementType } from "react";

import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";
import { cn } from "@/lib/utils";

import { TC_FEATURE_CARD_TOKENS } from "./constants";

type TcFeatureCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

export function TcFeatureCard({
  icon: Icon,
  title,
  description,
}: TcFeatureCardProps) {
  return (
    <article
      className={cn(
        "why-filecount-card group relative flex h-full w-full flex-col overflow-hidden border bg-[var(--header-background)]",
      )}
      style={{
        minHeight: TC_FEATURE_CARD_TOKENS.minHeight,
        paddingInline: TC_FEATURE_CARD_TOKENS.paddingInline,
        paddingBlock: TC_FEATURE_CARD_TOKENS.paddingBlock,
        borderColor: HOME_CARD_TOKENS.border,
        borderRadius: HOME_CARD_TOKENS.radius,
        gap: TC_FEATURE_CARD_TOKENS.contentGap,
      }}
    >
      <span className="glass-sweep-overlay pointer-events-none" aria-hidden="true" />

      <span
        className="relative z-[1] inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--header-border)] bg-[var(--site-background)] text-[var(--nav-color)]"
        style={{
          width: TC_FEATURE_CARD_TOKENS.iconSize,
          height: TC_FEATURE_CARD_TOKENS.iconSize,
        }}
        aria-hidden="true"
      >
        <Icon size={16} strokeWidth={1.75} />
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
          marginTop: TC_FEATURE_CARD_TOKENS.titleDescriptionGap,
          fontWeight: HOME_CARD_TOKENS.descriptionFontWeight,
        }}
      >
        {description}
      </p>
    </article>
  );
}
