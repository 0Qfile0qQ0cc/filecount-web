import {
  Award,
  Handshake,
  Lightbulb,
  Scale,
  Target,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import { CareersFeatureCard } from "./CareersFeatureCard";
import {
  CAREERS_TOKENS,
  getCareersContent,
  VALUE_KEYS,
  type ValueKey,
} from "./constants";

const VALUE_ICONS: Record<ValueKey, LucideIcon> = {
  innovation: Lightbulb,
  excellence: Award,
  integrity: Scale,
  partnership: Handshake,
  commitment: Target,
};

export async function CareersValues() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).values;

  return (
    <section
      aria-labelledby="careers-values-heading"
      className={`careers-section careers-section--muted bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="careers-values-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="careers-card-grid careers-card-grid--2 careers-card-grid--5 mx-auto mt-8"
          style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
        >
          {VALUE_KEYS.map((key) => {
            const item = content.items[key];
            return (
              <li key={key} className="flex min-h-0">
                <CareersFeatureCard icon={VALUE_ICONS[key]} title={item.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
