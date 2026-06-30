import { SectorBadge } from "./SectorBadge";
import { SECTORS_WE_EMPOWER_TOKENS } from "./constants";

const MIN_BADGES_PER_GROUP = 18;

function expandSectorsForMarquee(sectors: string[]): string[] {
  if (sectors.length === 0) {
    return sectors;
  }

  const expanded: string[] = [];
  while (expanded.length < MIN_BADGES_PER_GROUP) {
    expanded.push(...sectors);
  }

  return expanded;
}

type MarqueeGroupProps = {
  sectors: string[];
  ariaHidden?: boolean;
};

function MarqueeGroup({ sectors, ariaHidden }: MarqueeGroupProps) {
  return (
    <ul
      className="flex shrink-0 list-none items-center"
      style={{ gap: SECTORS_WE_EMPOWER_TOKENS.badgeGap }}
      aria-hidden={ariaHidden || undefined}
    >
      {sectors.map((label, index) => (
        <SectorBadge key={`${label}-${index}`} label={label} />
      ))}
    </ul>
  );
}

type MarqueeRowProps = {
  sectors: string[];
  row: "row01" | "row02";
  labelledBy?: string;
};

function MarqueeRow({ sectors, row, labelledBy }: MarqueeRowProps) {
  const marqueeSectors = expandSectorsForMarquee(sectors);

  return (
    <div
      className={`sectors-marquee sectors-marquee--${row} relative w-full shrink-0 overflow-x-hidden py-0.5`}
      style={
        {
          "--sectors-marquee-duration": SECTORS_WE_EMPOWER_TOKENS.marqueeDuration,
          minHeight: SECTORS_WE_EMPOWER_TOKENS.rowMinHeight,
        } as React.CSSProperties
      }
      aria-hidden={labelledBy ? undefined : true}
    >
      <div
        className="sectors-marquee__track flex w-max items-center"
        style={{ gap: SECTORS_WE_EMPOWER_TOKENS.badgeGap }}
        aria-labelledby={labelledBy}
      >
        <MarqueeGroup sectors={marqueeSectors} />
        <MarqueeGroup sectors={marqueeSectors} ariaHidden />
      </div>
    </div>
  );
}

type SectorsMarqueeProps = {
  sectors: string[];
};

export function SectorsMarquee({ sectors }: SectorsMarqueeProps) {
  return (
    <div
      className="flex w-full flex-col"
      style={{ gap: SECTORS_WE_EMPOWER_TOKENS.rowGap }}
    >
      <MarqueeRow
        sectors={sectors}
        row="row01"
        labelledBy="sectors-we-empower-heading"
      />
      <MarqueeRow sectors={sectors} row="row02" />
    </div>
  );
}
