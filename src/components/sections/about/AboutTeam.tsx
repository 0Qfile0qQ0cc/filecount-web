import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import { ABOUT_TOKENS, getAboutContent } from "./constants";

export async function AboutTeam() {
  const locale = (await getLocale()) as Locale;
  const content = getAboutContent(locale).team;

  return (
    <section
      aria-labelledby="about-team-heading"
      className="about-section about-section--muted bg-[var(--site-background)] pb-8 pt-10 lg:pb-10 lg:pt-12"
    >
      <div
        className="mx-auto px-5 text-center lg:px-8"
        style={{ maxWidth: ABOUT_TOKENS.proseMaxWidth }}
      >
        <h2
          id="about-team-heading"
          className="text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <p
          className="about-prose mt-5 text-[var(--nav-color)] opacity-90"
          style={{ fontSize: 16, lineHeight: 1.65 }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}
