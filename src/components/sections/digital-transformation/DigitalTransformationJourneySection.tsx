import { getLocale } from "next-intl/server";

import { JOURNEY_TOKENS } from "@/components/sections/digital-transformation-journey/constants";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  DT_JOURNEY_STEP_KEYS,
  getDigitalTransformationContent,
} from "./constants";
import { DtJourneyTimeline } from "./DtJourneyTimeline";

export async function DigitalTransformationJourneySection() {
  const locale = (await getLocale()) as Locale;
  const content = getDigitalTransformationContent(locale).journey;

  const steps = DT_JOURNEY_STEP_KEYS.map((key) => content.steps[key]);

  return (
    <section
      aria-labelledby="digital-transformation-journey-heading"
      className="bg-[var(--site-background)] pb-8 pt-14 lg:pb-10 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: JOURNEY_TOKENS.containerMaxWidth }}
      >
        <h2
          id="digital-transformation-journey-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <div style={{ marginTop: JOURNEY_TOKENS.titleToTimelineGap }}>
          <DtJourneyTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
