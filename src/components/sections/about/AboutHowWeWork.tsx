import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  ABOUT_TOKENS,
  getAboutContent,
  HOW_WE_WORK_STEP_KEYS,
} from "./constants";

export async function AboutHowWeWork() {
  const locale = (await getLocale()) as Locale;
  const content = getAboutContent(locale).howWeWork;

  return (
    <section
      aria-labelledby="about-how-we-work-heading"
      className="about-section about-section--muted bg-[var(--site-background)] py-10 lg:py-14"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ABOUT_TOKENS.wideMaxWidth }}
      >
        <h2
          id="about-how-we-work-heading"
          className="about-section-title text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <ol className="about-process mt-8">
          {HOW_WE_WORK_STEP_KEYS.map((key) => {
            const step = content.steps[key];
            return (
              <li key={key} className="about-process__step">
                <span className="about-process__node" aria-hidden="true">
                  {step.number}
                </span>
                <span className="about-process__label">{step.title}</span>
              </li>
            );
          })}
        </ol>

        <p
          className="about-prose mx-auto mt-8 text-center text-[var(--nav-color)] opacity-90"
          style={{
            maxWidth: ABOUT_TOKENS.proseMaxWidth,
            fontSize: 16,
            lineHeight: 1.65,
          }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}
