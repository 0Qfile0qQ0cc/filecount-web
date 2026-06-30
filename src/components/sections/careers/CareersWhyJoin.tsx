import {
  Handshake,
  Rocket,
  TrendingUp,
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
  WHY_JOIN_KEYS,
  type WhyJoinKey,
} from "./constants";

const CARD_ICONS: Record<WhyJoinKey, LucideIcon> = {
  meaningfulWork: Rocket,
  professionalGrowth: TrendingUp,
  collaborativeEnvironment: Users,
  longTermOpportunities: Handshake,
};

export async function CareersWhyJoin() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).whyJoin;

  return (
    <section
      aria-labelledby="careers-why-join-heading"
      className={`careers-section bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="careers-why-join-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="careers-card-grid careers-card-grid--2 mx-auto mt-8"
          style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
        >
          {WHY_JOIN_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="flex min-h-0">
                <CareersFeatureCard
                  icon={CARD_ICONS[key]}
                  title={card.title}
                  description={card.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
