import { getLocale } from "next-intl/server";

import { SectorBadge } from "@/components/sections/sectors-we-empower/SectorBadge";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  ENTERPRISE_PLATFORMS_TOKENS,
  getEnterprisePlatformsContent,
} from "./constants";

export async function WhatWeBuild() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).whatWeBuild;

  return (
    <section
      aria-labelledby="what-we-build-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ENTERPRISE_PLATFORMS_TOKENS.containerMaxWidth }}
      >
        <h2
          id="what-we-build-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <ul
          className="mx-auto flex flex-wrap justify-center"
          style={{
            marginTop: ENTERPRISE_PLATFORMS_TOKENS.titleToContentGap,
            gap: ENTERPRISE_PLATFORMS_TOKENS.cardGap,
            maxWidth: ENTERPRISE_PLATFORMS_TOKENS.containerMaxWidth,
          }}
        >
          {content.items.map((item) => (
            <SectorBadge key={item} label={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
