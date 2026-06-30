import { getLocale } from "next-intl/server";

import { TalkToExpertButton } from "@/components/layout/header/TalkToExpertButton";
import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import type { Locale } from "@/types/locale";

import { CtaFeatureCard } from "./CtaFeatureCard";
import {
  getHomeCtaContent,
  HOME_CTA_FEATURE_KEYS,
  HOME_CTA_TOKENS,
} from "./constants";

export async function HomeCta() {
  const locale = (await getLocale()) as Locale;
  const content = getHomeCtaContent(locale);

  return (
    <section
      aria-labelledby="home-cta-heading"
      className="home-cta-section pb-12 pt-10 lg:pb-14 lg:pt-14"
    >
      <div
        className="mx-auto flex flex-col items-center px-5 text-center lg:px-8"
        style={{ maxWidth: HOME_CTA_TOKENS.containerMaxWidth }}
      >
        <h2
          id="home-cta-heading"
          className="text-2xl font-bold tracking-tight text-[var(--nav-color)] sm:text-3xl lg:text-[2rem] lg:leading-tight"
          style={{ fontWeight: 800 }}
        >
          {content.title}
        </h2>

        <p
          className="mt-5 text-[var(--nav-color)] opacity-90"
          style={{
            maxWidth: HOME_CTA_TOKENS.contentMaxWidth,
            fontSize: 18,
            lineHeight: 1.65,
          }}
        >
          {content.description}
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <TalkToExpertButton label={content.primaryCta} />
          <HeroSecondaryButton label={content.secondaryCta} />
        </div>

        <ul
          className="mt-8 grid w-full grid-cols-1 sm:grid-cols-3"
          style={{ gap: HOME_CTA_TOKENS.featureCardGap }}
        >
          {HOME_CTA_FEATURE_KEYS.map((key) => {
            const feature = content.features[key];
            return (
              <li key={key} className="flex h-full min-h-0">
                <CtaFeatureCard
                  title={feature.title}
                  description={feature.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
