import { getLocale } from "next-intl/server";

import { TalkToExpertButton } from "@/components/layout/header/TalkToExpertButton";
import { HERO_TOKENS } from "@/components/sections/hero/constants";
import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import type { Locale } from "@/types/locale";

import {
  ENTERPRISE_PLATFORMS_TOKENS,
  getEnterprisePlatformsContent,
} from "./constants";

export async function EnterprisePlatformsHero() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).hero;

  return (
    <section
      aria-labelledby="enterprise-platforms-hero-heading"
      className="bg-[var(--site-background)] py-16 lg:py-24"
    >
      <div
        className="mx-auto flex justify-center px-5 lg:px-8"
        style={{ maxWidth: HERO_TOKENS.containerMaxWidth }}
      >
        <div
          className="hero-content-enter flex w-full flex-col items-center text-center"
          style={{
            gap: HERO_TOKENS.contentGap,
            maxWidth: ENTERPRISE_PLATFORMS_TOKENS.contentMaxWidth,
          }}
        >
          <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>

          <h1
            id="enterprise-platforms-hero-heading"
            className="w-full text-3xl font-bold leading-tight tracking-tight text-[var(--nav-color)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            {content.title}
          </h1>

          <p
            className="w-full text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: ENTERPRISE_PLATFORMS_TOKENS.descriptionMaxWidth,
              fontSize: HERO_TOKENS.descriptionFontSize,
              lineHeight: HERO_TOKENS.descriptionLineHeight,
            }}
          >
            {content.description}
          </p>

          <div className="flex w-full flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4">
            <TalkToExpertButton label={content.primaryCta} />
            <HeroSecondaryButton
              label={content.secondaryCta}
              href={content.secondaryHref}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
