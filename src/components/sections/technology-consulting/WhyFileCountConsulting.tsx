import {
  BadgeCheck,
  ClipboardList,
  Eye,
  Handshake,
  Layers,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import {
  getTechnologyConsultingContent,
  TECHNOLOGY_CONSULTING_TOKENS,
  WHY_FC_CARD_KEYS,
  type WhyFcCardKey,
} from "./constants";
import { TcFeatureCard } from "./TcFeatureCard";

const CARD_ICONS: Record<WhyFcCardKey, LucideIcon> = {
  independentAdvice: Scale,
  enterprisePlatformSelection: Layers,
  projectManagement: ClipboardList,
  implementationOversight: Eye,
  qualityAssurance: BadgeCheck,
  longTermPartnership: Handshake,
};

export async function WhyFileCountConsulting() {
  const locale = (await getLocale()) as Locale;
  const content = getTechnologyConsultingContent(locale).whyFc;

  return (
    <section
      aria-labelledby="why-filecount-consulting-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: TECHNOLOGY_CONSULTING_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <h2
            id="why-filecount-consulting-heading"
            className="text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          >
            {content.title}
          </h2>

          <p
            className="mt-5 text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: TECHNOLOGY_CONSULTING_TOKENS.descriptionMaxWidth,
              fontSize: 17,
              lineHeight: 1.65,
            }}
          >
            {content.intro}
          </p>

          <div className="mt-8 inline-flex">
            <HeroEyebrowBadge>{content.saudiBadge}</HeroEyebrowBadge>
          </div>

          <p
            className="mt-3 text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: TECHNOLOGY_CONSULTING_TOKENS.contentMaxWidth,
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {content.saudiSubtitle}
          </p>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 items-stretch md:grid-cols-2"
          style={{
            marginTop: 40,
            gap: TECHNOLOGY_CONSULTING_TOKENS.cardGap,
            maxWidth: TECHNOLOGY_CONSULTING_TOKENS.containerMaxWidth,
          }}
        >
          {WHY_FC_CARD_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="flex min-h-0">
                <TcFeatureCard
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
