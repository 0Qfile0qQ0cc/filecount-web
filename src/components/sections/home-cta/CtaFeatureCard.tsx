import { HOME_CARD_TOKENS } from "@/components/sections/shared/home-card-tokens";
import { cn } from "@/lib/utils";

type CtaFeatureCardProps = {
  title: string;
  description: string;
};

export function CtaFeatureCard({ title, description }: CtaFeatureCardProps) {
  return (
    <article
      className={cn(
        "why-filecount-card group relative flex h-full w-full flex-col justify-center overflow-hidden border bg-[var(--header-background)] text-start",
      )}
      style={{
        minHeight: HOME_CARD_TOKENS.height,
        paddingInline: HOME_CARD_TOKENS.paddingInline,
        paddingBlock: HOME_CARD_TOKENS.paddingBlock,
        borderColor: HOME_CARD_TOKENS.border,
        borderRadius: HOME_CARD_TOKENS.radius,
      }}
    >
      <span className="glass-sweep-overlay" aria-hidden="true" />

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
  );
}
