import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import { ABOUT_TOKENS, getAboutContent } from "./constants";

export async function AboutStory() {
  const locale = (await getLocale()) as Locale;
  const content = getAboutContent(locale).story;

  return (
    <section
      aria-labelledby="about-story-heading"
      className="about-section about-section--muted bg-[var(--site-background)] py-10 lg:py-14"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ABOUT_TOKENS.containerMaxWidth }}
      >
        <h2
          id="about-story-heading"
          className="about-section-title text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <div
          className="about-prose mx-auto mt-6 flex flex-col gap-5 text-[var(--nav-color)] opacity-90"
          style={{
            maxWidth: ABOUT_TOKENS.proseMaxWidth,
            fontSize: 16,
            lineHeight: 1.65,
          }}
        >
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
