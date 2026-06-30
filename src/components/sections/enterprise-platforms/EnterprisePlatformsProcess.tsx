import { getLocale } from "next-intl/server";

import { JourneyStepCard } from "@/components/sections/digital-transformation-journey/JourneyStepCard";
import { JOURNEY_TOKENS } from "@/components/sections/digital-transformation-journey/constants";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  getEnterprisePlatformsContent,
  PROCESS_STEP_KEYS,
} from "./constants";

export async function EnterprisePlatformsProcess() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).process;

  return (
    <section
      aria-labelledby="enterprise-platforms-process-heading"
      className="bg-[var(--site-background)] pb-8 pt-14 lg:pb-10 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: JOURNEY_TOKENS.containerMaxWidth }}
      >
        <h2
          id="enterprise-platforms-process-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <ol
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:flex lg:gap-0"
          style={{ marginTop: JOURNEY_TOKENS.titleToTimelineGap }}
        >
          {PROCESS_STEP_KEYS.map((key, index) => {
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
        </ol>
      </div>
    </section>
  );
}
