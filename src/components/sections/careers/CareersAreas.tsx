import {
  BriefcaseBusiness,
  Cloud,
  Headphones,
  Layers,
  Lightbulb,
  Network,
  Route,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import { CareersFeatureCard } from "./CareersFeatureCard";
import {
  AREA_KEYS,
  CAREERS_TOKENS,
  getCareersContent,
  type AreaKey,
} from "./constants";

const AREA_ICONS: Record<AreaKey, LucideIcon> = {
  enterprisePlatforms: Layers,
  technologyConsulting: Lightbulb,
  digitalTransformation: Route,
  cybersecurity: ShieldCheck,
  cloudInfrastructure: Cloud,
  infrastructureNetworking: Network,
  projectManagement: BriefcaseBusiness,
  businessDevelopment: Users,
  technicalSupport: Headphones,
};

export async function CareersAreas() {
  const locale = (await getLocale()) as Locale;
  const content = getCareersContent(locale).areas;

  return (
    <section
      aria-labelledby="careers-areas-heading"
      className={`careers-section careers-section--muted bg-[var(--site-background)] ${CAREERS_TOKENS.sectionPadding}`}
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="careers-areas-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="careers-card-grid careers-card-grid--2 careers-card-grid--3 mx-auto mt-8"
          style={{ maxWidth: CAREERS_TOKENS.containerMaxWidth }}
        >
          {AREA_KEYS.map((key) => {
            const item = content.items[key];
            return (
              <li key={key} className="flex min-h-0">
                <CareersFeatureCard icon={AREA_ICONS[key]} title={item.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
