import {
  GitMerge,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { WHY_FILECOUNT_TOKENS } from "@/components/sections/why-filecount/constants";
import { WhyFileCountCard } from "@/components/sections/why-filecount/WhyFileCountCard";
import type { Locale } from "@/types/locale";

import {
  getEnterprisePlatformsContent,
  WHY_PLATFORM_CARD_KEYS,
  type WhyPlatformCardKey,
} from "./constants";

const CARD_ICONS: Record<WhyPlatformCardKey, LucideIcon> = {
  fitsBusiness: Layers,
  scalable: TrendingUp,
  integration: GitMerge,
  permissions: ShieldCheck,
  modernUx: Smartphone,
  futureReady: Rocket,
};

export async function WhyCustomPlatform() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).why;

  return (
    <section
      aria-labelledby="why-custom-platform-heading"
      className="bg-[var(--site-background)] pb-14 pt-20 lg:pb-20 lg:pt-24"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="why-custom-platform-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginTop: WHY_FILECOUNT_TOKENS.descriptionToCardsGap,
            gap: WHY_FILECOUNT_TOKENS.cardGap,
            maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth,
          }}
        >
          {WHY_PLATFORM_CARD_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="w-full max-w-[350px]">
                <WhyFileCountCard
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
