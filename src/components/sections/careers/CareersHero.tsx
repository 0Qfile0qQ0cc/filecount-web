import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import { HERO_TOKENS } from "@/components/sections/hero/constants";
import type { Locale } from "@/types/locale";

import { CareersApplyButton } from "./CareersApplyButton";
import { CAREERS_TOKENS, getCareersContent } from "./constants";

export async function CareersHero() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).hero;

  return (
    <section
      aria-labelledby="careers-hero-heading"
      className={`careers-section bg-[var(--site-background)] py-12 lg:py-16`}
    >
      <div
        className="mx-auto flex justify-center px-5 lg:px-8"
        style={{ maxWidth: HERO_TOKENS.containerMaxWidth }}
      >
        <div
          className="hero-content-enter flex w-full flex-col items-center text-center"
          style={{ gap: HERO_TOKENS.contentGap, maxWidth: CAREERS_TOKENS.contentMaxWidth }}
        >
          <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>

          <h1
            id="careers-hero-heading"
            className="w-full text-3xl font-bold leading-tight tracking-tight text-[var(--nav-color)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            {content.title}
          </h1>

          <p
            className="w-full text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: CAREERS_TOKENS.proseMaxWidth,
              fontSize: HERO_TOKENS.descriptionFontSize,
              lineHeight: HERO_TOKENS.descriptionLineHeight,
            }}
          >
            {content.description}
          </p>

          <div className="flex w-full flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4">
            <CareersApplyButton label={content.primaryCta} />
            <HeroSecondaryButton label={content.secondaryCta} href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
