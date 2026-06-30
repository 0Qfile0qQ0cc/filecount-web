type SectorBadgeProps = {
  label: string;
  ariaHidden?: boolean;
};

export function SectorBadge({ label, ariaHidden }: SectorBadgeProps) {
  return (
    <li
      className="sector-badge shrink-0 list-none"
      aria-hidden={ariaHidden || undefined}
    >
      <span className="glass-sweep-overlay" aria-hidden="true" />
      <span className="sector-badge__label">{label}</span>
    </li>
  );
}
