import { memo } from "react";

import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

import { CTA_TOKENS } from "@/components/layout/header/constants";

import { HERO_ROUTES } from "./constants";

type HeroSecondaryButtonProps = {
  label: string;
  className?: string;
  href?: string;
};

export const HeroSecondaryButton = memo(function HeroSecondaryButton({
  label,
  className,
  href = HERO_ROUTES.secondary,
}: HeroSecondaryButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap bg-transparent px-5 py-2.5",
        "border text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",
        "transition-[border-color,color] duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
        "hover:border-[var(--cta-hover-border)] hover:text-[var(--nav-hover-color)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
        className,
      )}
      style={{
        borderColor: CTA_TOKENS.borderColor,
        borderRadius: CTA_TOKENS.borderRadius,
        fontWeight: 500,
      }}
    >
      {label}
    </Link>
  );
});
