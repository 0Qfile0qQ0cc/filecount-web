"use client";

import { memo } from "react";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";

import { useIsRtl } from "@/hooks/use-locale";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

import { MEGA_MENU_TOKENS } from "./constants";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  onNavigate?: () => void;
};

export const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  onNavigate,
}: ServiceCardProps) {
  const isRtl = useIsRtl();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-label={`${title}. ${description}`}
      className={cn(
        "group flex items-center gap-3.5 border bg-[var(--header-background)] p-4",
        "transition-[background-color,border-color] duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
        "hover:border-[var(--mega-menu-card-hover-border)] hover:bg-[var(--mega-menu-card-hover-background)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
      )}
      style={{
        borderColor: MEGA_MENU_TOKENS.cardBorder,
        borderRadius: MEGA_MENU_TOKENS.cardRadius,
      }}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center text-[var(--nav-color)]"
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>

      <span className="min-w-0 flex-1 text-start">
        <span
          className="block text-[length:var(--nav-font-size)] font-medium leading-snug text-[var(--nav-color)]"
          style={{ fontWeight: 500 }}
        >
          {title}
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-[var(--nav-color)] opacity-75">
          {description}
        </span>
      </span>

      <span
        className={cn(
          "inline-flex shrink-0 text-[var(--nav-color)]",
          "transition-transform duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
          isRtl
            ? "group-hover:-translate-x-1"
            : "group-hover:translate-x-1",
        )}
        aria-hidden="true"
      >
        <ArrowIcon size={16} strokeWidth={2} />
      </span>
    </Link>
  );
});
