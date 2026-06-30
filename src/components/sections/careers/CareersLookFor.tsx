import {
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Puzzle,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import { CareersFeatureCard } from "./CareersFeatureCard";
import {
  CAREERS_TOKENS,
  getCareersContent,
  LOOK_FOR_KEYS,
  type LookForKey,
} from "./constants";

const LOOK_FOR_ICONS: Record<LookForKey, LucideIcon> = {
  problemSolvers: Puzzle,
  technologyEnthusiasts: Sparkles,
  continuousLearners: Lightbulb,
  teamPlayers: Users,
  customerFocused: HeartHandshake,
  strongCommunication: MessageSquare,
};

export async function CareersLookFor() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).lookFor;

  return (
    <section
      aria-labelledby="careers-look-for-heading"
      className={`careers-section bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="careers-look-for-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="careers-card-grid careers-card-grid--2 careers-card-grid--3 mx-auto mt-8"
          style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
        >
          {LOOK_FOR_KEYS.map((key) => {
            const item = content.items[key];
            return (
              <li key={key} className="flex min-h-0">
                <CareersFeatureCard icon={LOOK_FOR_ICONS[key]} title={item.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
