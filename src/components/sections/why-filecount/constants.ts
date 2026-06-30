/**
 * Why FileCount section design tokens.
 */

export const WHY_FILECOUNT_TOKENS = {
  containerMaxWidth: 1280,
  descriptionMaxWidth: 760,
  cardWidth: 350,
  cardGap: 20,
  titleToDescriptionGap: 20,
  descriptionToCardsGap: 48,
} as const;

export const WHY_FILECOUNT_CARD_KEYS = [
  "understand",
  "select",
  "customize",
  "grow",
] as const;

export type WhyFileCountCardKey = (typeof WHY_FILECOUNT_CARD_KEYS)[number];
