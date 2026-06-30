import {
  ClipboardList,
  Eye,
  Handshake,
  Layers,
  Route,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import { AboutReasonCard } from "./AboutReasonCard";
import {
  ABOUT_TOKENS,
  getAboutContent,
  WHY_ABOUT_KEYS,
  type WhyAboutKey,
} from "./constants";

const CARD_ICONS: Record<WhyAboutKey, LucideIcon> = {
  independentConsulting: Scale,
  enterprisePlatformSelection: Layers,
  digitalTransformationAdvisory: Route,
  projectManagement: ClipboardList,
  implementationSupervision: Eye,
  longTermPartnership: Handshake,
};

export async function AboutWhyFileCount() {
  const locale = (await getLocale()) as Locale;
  const content = getAboutContent(locale).why;

  return (
    <section
      aria-labelledby="about-why-heading"
      className="about-section bg-[var(--site-background)] py-10 lg:py-14"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ABOUT_TOKENS.wideMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <h2
            id="about-why-heading"
            className="text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
            style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
          >
            {content.title}
          </h2>

          <p
            className="about-prose mt-5 text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: ABOUT_TOKENS.proseMaxWidth,
              fontSize: 16,
              lineHeight: 1.65,
            }}
          >
            {content.intro}
          </p>

          <div className="mt-6 inline-flex">
            <HeroEyebrowBadge>{content.saudiBadge}</HeroEyebrowBadge>
          </div>

          <p
            className="about-prose mt-3 text-[var(--nav-color)] opacity-90"
            style={{
              maxWidth: ABOUT_TOKENS.proseMaxWidth,
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {content.saudiSubtitle}
          </p>
        </header>

        <ul
          className="about-why-grid mx-auto mt-8"
          style={{ maxWidth: ABOUT_TOKENS.wideMaxWidth }}
        >
          {WHY_ABOUT_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="flex min-h-0">
                <AboutReasonCard
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
