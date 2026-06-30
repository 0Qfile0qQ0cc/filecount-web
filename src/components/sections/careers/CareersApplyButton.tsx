import { memo } from "react";

import { CTA_TOKENS } from "@/components/layout/header/constants";
import { cn } from "@/lib/utils";

type CareersApplyButtonProps = {
  label: string;
  className?: string;
};

export const CareersApplyButton = memo(function CareersApplyButton({
  label,
  className,
}: CareersApplyButtonProps) {
  return (
    <a
      href="#apply"
      aria-label={label}
      className={cn(
        "cta-shimmer-button group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap",
        "border bg-[var(--cta-background)] px-5 py-2.5",
        "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",
        "transition-[border-color,box-shadow] duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
        "hover:border-[var(--cta-hover-border)] hover:bg-[var(--cta-hover-background)] hover:shadow-[var(--cta-hover-shadow)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
        className,
      )}
      style={{
        borderColor: CTA_TOKENS.borderColor,
        borderRadius: CTA_TOKENS.borderRadius,
        fontWeight: 500,
      }}
    >
      <span
        aria-hidden="true"
        className="cta-shimmer-overlay pointer-events-none absolute inset-y-0 start-0 w-2/5 bg-white"
      />
      <span className="relative z-10">{label}</span>
    </a>
  );
});
