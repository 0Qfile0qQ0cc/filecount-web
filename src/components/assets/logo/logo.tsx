import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  "aria-label"?: string;
};

/**
 * Placeholder logo — replace with the official FileCount logo asset.
 */
export function Logo({ className, "aria-label": ariaLabel }: LogoProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? "FileCount logo placeholder"}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted",
        className,
      )}
    />
  );
}
