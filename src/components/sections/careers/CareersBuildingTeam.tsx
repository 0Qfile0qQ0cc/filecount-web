import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import { CAREERS_TOKENS, getCareersContent } from "./constants";

export async function CareersBuildingTeam() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).buildingTeam;

  return (
    <section
      aria-labelledby="careers-building-team-heading"
      className={`careers-section bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 text-center lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.proseMaxWidth }}
      >
        <div id="careers-building-team-heading" className="inline-flex">
          <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
        </div>

        <h2
          className="mt-6 text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <p
          className="mt-5 text-[var(--nav-color)] opacity-90"
          style={{ fontSize: 16, lineHeight: 1.65 }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}
