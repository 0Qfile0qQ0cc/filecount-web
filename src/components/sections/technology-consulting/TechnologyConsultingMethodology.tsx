import { getLocale } from "next-intl/server";

import { DtJourneyTimeline } from "@/components/sections/digital-transformation/DtJourneyTimeline";
import { JOURNEY_TOKENS } from "@/components/sections/digital-transformation-journey/constants";
import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import {
  getTechnologyConsultingContent,
  TC_JOURNEY_STEP_KEYS,
} from "./constants";

export async function TechnologyConsultingMethodology() {
  const locale = (await getLocale()) as Locale;
  const content = getTechnologyConsultingContent(locale).journey;

  const steps = TC_JOURNEY_STEP_KEYS.map((key) => content.steps[key]);

  return (
    <section
      aria-labelledby="technology-consulting-methodology-heading"
      className="bg-[var(--site-background)] pb-8 pt-14 lg:pb-10 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: JOURNEY_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="technology-consulting-methodology-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <div style={{ marginTop: JOURNEY_TOKENS.titleToTimelineGap }}>
          <DtJourneyTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
