import { getLocale } from "next-intl/server";

import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import { HOME_CTA_TOKENS } from "@/components/sections/home-cta/constants";
import type { Locale } from "@/types/locale";

import { CareersApplyButton } from "./CareersApplyButton";
import { getCareersContent } from "./constants";

export async function CareersCta() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).cta;

  return (
    <section
      aria-labelledby="careers-cta-heading"
      className="home-cta-section pb-12 pt-8 lg:pb-14 lg:pt-10"
    >
      <div
        className="mx-auto flex flex-col items-center px-5 text-center lg:px-8"
        style={{ maxWidth: HOME_CTA_TOKENS.containerMaxWidth }}
      >
        <h2
          id="careers-cta-heading"
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
          <CareersApplyButton label={content.primaryCta} />
          <HeroSecondaryButton label={content.secondaryCta} href="/contact" />
        </div>
      </div>
    </section>
  );
}
