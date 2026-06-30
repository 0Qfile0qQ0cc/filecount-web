/**
 * Hero section design tokens — FC-007.
 */

export const HERO_TOKENS = {
  contentMaxWidth: 800,
  headlineMaxWidth: 650,
  descriptionFontSize: 18,
  descriptionLineHeight: 1.65,
  sectionPaddingY: {
    mobile: 64,
    desktop: 96,
  },
  contentGap: 24,
  columnGap: 64,
  animationDurationMs: 180,
  animationOffsetY: 16,
  containerMaxWidth: 1280,
} as const;

export const HERO_ROUTES = {
  primary: "/contact",
  secondary: "/solutions/technology-consulting",
} as const;
