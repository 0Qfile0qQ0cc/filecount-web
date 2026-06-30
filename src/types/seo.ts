import type { Locale } from "./locale";

export type MetadataParams = {
  locale: Locale;
  pathname?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
};
