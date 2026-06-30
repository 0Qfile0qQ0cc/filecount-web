import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import { CareersApplicationForm } from "./CareersApplicationForm";
import { CAREERS_TOKENS, getCareersContent } from "./constants";

export async function CareersApplication() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).application;

  return (
    <section
      id="apply"
      aria-labelledby="careers-application-heading"
      className={`careers-section careers-section--muted bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="careers-application-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.title}</HeroEyebrowBadge>
          </div>
        </header>

        <div className="mt-8">
          <CareersApplicationForm content={content} />
        </div>
      </div>
    </section>
  );
}
