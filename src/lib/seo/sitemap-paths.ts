import { getKnowledgeSitemapPaths } from "@/lib/knowledge/registry";

/** Static public localized routes included in sitemap.xml */
const STATIC_SITEMAP_PATHS = [
  "",
  "/about",
  "/careers",
  "/contact",
  "/knowledge-center",
  "/solutions/platform-development",
  "/solutions/digital-transformation",
  "/solutions/technology-consulting",
] as const;

/** All public routes — static pages plus knowledge registry entries */
export const SITEMAP_PATHS: readonly string[] = [
  ...STATIC_SITEMAP_PATHS,
  ...getKnowledgeSitemapPaths(),
];

export type SitemapPath = (typeof STATIC_SITEMAP_PATHS)[number] | string;
