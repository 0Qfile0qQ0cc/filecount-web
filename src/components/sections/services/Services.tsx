import {
  BriefcaseBusiness,
  PanelsTopLeft,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  getServicesContent,
  SERVICE_KEYS,
  SERVICES_TOKENS,
  type ServiceKey,
} from "./constants";
import { ServiceCard } from "./ServiceCard";

const SERVICE_ICONS: Record<ServiceKey, LucideIcon> = {
  enterprisePlatforms: PanelsTopLeft,
  digitalTransformation: Workflow,
  technicalConsulting: BriefcaseBusiness,
};

export async function Services() {
  const locale = (await getLocale()) as Locale;
  const content = getServicesContent(locale);

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: SERVICES_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <h2
            id="services-heading"
            className="text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
            style={SECTION_HEADING_STYLE}
          >
            {content.title}
          </h2>
          <p
            className="text-[var(--nav-color)] opacity-90"
            style={{
              marginTop: 20,
              maxWidth: SERVICES_TOKENS.descriptionMaxWidth,
              fontSize: 18,
              lineHeight: 1.65,
            }}
          >
            {content.description}
          </p>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3"
          style={{
            marginTop: SERVICES_TOKENS.titleToCardsGap,
            maxWidth: SERVICES_TOKENS.containerMaxWidth,
            gap: SERVICES_TOKENS.cardGap,
          }}
        >
          {SERVICE_KEYS.map((key) => {
            const service = content.services[key];
            return (
              <li key={key} className="w-full max-w-[350px]">
                <ServiceCard
                  icon={SERVICE_ICONS[key]}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
