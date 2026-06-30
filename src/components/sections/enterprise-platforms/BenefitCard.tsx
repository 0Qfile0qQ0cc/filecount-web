import { Check } from "lucide-react";

import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";
import { cn } from "@/lib/utils";

import { BENEFIT_CARD_TOKENS } from "./constants";

type BenefitCardProps = {
  title: string;
};

export function BenefitCard({ title }: BenefitCardProps) {
  return (
    <article
      className={cn(
        "why-filecount-card group relative flex h-full w-full items-center overflow-hidden border bg-[var(--header-background)]",
      )}
      style={{
        paddingInline: BENEFIT_CARD_TOKENS.paddingInline,
        paddingBlock: BENEFIT_CARD_TOKENS.paddingBlock,
        borderColor: HOME_CARD_TOKENS.border,
        borderRadius: HOME_CARD_TOKENS.radius,
      }}
    >
      <span className="glass-sweep-overlay" aria-hidden="true" />

      <div
        className="relative z-[1] flex min-w-0 items-center"
        style={{ gap: BENEFIT_CARD_TOKENS.iconGap }}
      >
        <span
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--header-border)] bg-[var(--site-background)] text-[var(--nav-color)]"
          style={{
            width: BENEFIT_CARD_TOKENS.iconSize,
            height: BENEFIT_CARD_TOKENS.iconSize,
          }}
          aria-hidden="true"
        >
          <Check size={13} strokeWidth={2.5} />
        </span>
        <h3
          className="text-[length:var(--nav-font-size)] leading-snug text-[var(--nav-color)]"
          style={{ fontWeight: BENEFIT_CARD_TOKENS.titleFontWeight }}
        >
          {title}
        </h3>
      </div>
    </article>
  );
}
