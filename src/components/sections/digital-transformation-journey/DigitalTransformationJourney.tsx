import { getLocale } from "next-intl/server";

import type { Locale } from "@/types/locale";

import {
  getJourneyContent,
  JOURNEY_STEP_KEYS,
  JOURNEY_TOKENS,
} from "./constants";
import { JourneyStepCard } from "./JourneyStepCard";

export async function DigitalTransformationJourney() {
  const locale = (await getLocale()) as Locale;
  const content = getJourneyContent(locale);

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
          style={{ fontWeight: 800 }}
        >
          {content.title}
        </h2>

        <ul
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:flex lg:gap-0"
          style={{ marginTop: JOURNEY_TOKENS.titleToTimelineGap }}
        >
          {JOURNEY_STEP_KEYS.map((key, index) => {
            const step = content.steps[key];
            return (
              <li key={key} className="min-w-0 lg:flex lg:flex-1 lg:items-stretch">
                <JourneyStepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  showConnector={index > 0}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
