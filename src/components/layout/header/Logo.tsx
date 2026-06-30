import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

import { LOGO_TOKENS } from "./constants";

type LogoProps = {
  className?: string;
  label: string;
};

export function Logo({ className, label }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={label}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_TOKENS.source}
        alt=""
        width={LOGO_TOKENS.intrinsicSize}
        height={LOGO_TOKENS.intrinsicSize}
        className="block h-7 w-auto object-contain md:h-8 lg:h-9"
        decoding="async"
        aria-hidden="true"
      />
    </Link>
  );
}
