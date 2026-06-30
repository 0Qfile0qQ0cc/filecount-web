import { memo, type ReactNode } from "react";

type HeroEyebrowBadgeProps = {
  children: ReactNode;
};

function EyebrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[var(--nav-color)]"
    >
      <path
        d="M7 1.75 11.25 4.25v5.5L7 12.25 2.75 9.75v-5.5z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="7" cy="7" r="1.25" fill="currentColor" />
    </svg>
  );
}

/**
 * Premium glass pill badge for the hero eyebrow.
 * Icon precedes text in DOM order — correct for both LTR and RTL.
 */
export const HeroEyebrowBadge = memo(function HeroEyebrowBadge({
  children,
}: HeroEyebrowBadgeProps) {
  return (
    <span
      className="inline-flex w-fit items-center gap-2 rounded-full border border-white/55 bg-white/30 px-[18px] py-2 text-sm font-bold text-[var(--nav-color)] shadow-[0_1px_3px_rgba(47,79,104,0.06),0_2px_6px_rgba(47,79,104,0.04)] backdrop-blur-[8px] transition-[border-color,background-color,box-shadow] duration-[180ms] ease-out hover:border-white/70 hover:bg-white/40 hover:shadow-[0_2px_8px_rgba(47,79,104,0.07)]"
      style={{ fontWeight: 700 }}
    >
      <EyebrowIcon />
      {children}
    </span>
  );
});
