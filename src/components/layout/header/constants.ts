/**
 * Header design tokens — single source of truth.
 * Values match FILECOUNT Header Specification v1.0.
 */

export const HEADER_TOKENS = {
  height: 72,
  zIndex: 1000,
  background: "#FFFFFF",
  backgroundScrolled: "rgba(255, 255, 255, 0.90)",
  borderColor: "#E8ECF1",
  backdropBlur: 12,
  transitionDurationMs: 180,
  transitionEasing: "ease-out",
  maxWidth: 1280,
  horizontalPadding: 32,
  horizontalPaddingMobile: 20,
} as const;

export const SITE_TOKENS = {
  background: "#FCFCFC",
} as const;

export const NAV_TOKENS = {
  fontSize: 15,
  fontWeight: 500,
  color: "#2F4F68",
  hoverColor: "#1E3A4F",
  itemGap: 32,
} as const;

export const LOGO_TOKENS = {
  source: "/assets/FileCount%20Logo.svg",
  intrinsicSize: 38,
} as const;

export const CTA_TOKENS = {
  background: "#FFFFFF",
  borderColor: "#E8ECF1",
  borderRadius: 12,
  hoverBackground: "#FFFFFF",
  hoverBorderColor: "#DDE3EA",
  hoverShadow: "0 2px 10px rgba(47, 79, 104, 0.08)",
  shimmerDurationMs: 800,
} as const;

export const LANGUAGE_SWITCHER_TOKENS = {
  dropdownDurationMs: 150,
} as const;

export const ANIMATION_TOKENS = {
  durationMs: 180,
  durationMsMax: 220,
  cssEasing: "ease-out" as const,
} as const;

export const BREAKPOINTS = {
  desktop: 1024,
} as const;

export const MEGA_MENU_TOKENS = {
  width: 590,
  minWidth: 560,
  maxWidth: 620,
  cardGap: 16,
  cardRadius: 14,
  cardBorder: "#E8ECF1",
  cardHoverBackground: "#F8F9FB",
  cardHoverBorder: "#DDE3EA",
  panelRadius: 14,
  arrowSlidePx: 4,
} as const;
