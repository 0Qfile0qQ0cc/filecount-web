import { memo } from "react";

import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

import { NAV_TOKENS } from "./constants";

type NavigationItemProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export const NavigationItem = memo(function NavigationItem({
  href,
  label,
  className,
  onClick,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center whitespace-nowrap transition-colors",
        "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",
        "hover:text-[var(--nav-hover-color)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
        className,
      )}
      style={{ fontWeight: NAV_TOKENS.fontWeight }}
    >
      {label}
    </Link>
  );
});
