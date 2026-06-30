import {
  BrainCircuit,
  GitMerge,
  Layers,
  Map,
  Network,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { WHY_FILECOUNT_TOKENS } from "@/components/sections/why-filecount/constants";
import type { Locale } from "@/types/locale";

import {
  DOMAIN_KEYS,
  getTechnologyConsultingContent,
  TECHNOLOGY_CONSULTING_TOKENS,
  type DomainKey,
} from "./constants";
import { TcFeatureCard } from "./TcFeatureCard";

const DOMAIN_ICONS: Record<DomainKey, LucideIcon> = {
  digitalTransformationStrategy: Map,
  enterprisePlatforms: Layers,
  systemIntegrationWorkflow: GitMerge,
  dataGovernance: Shield,
  enterpriseAi: BrainCircuit,
  solutionArchitecture: Network,
};

export async function TechnologyConsultingDomains() {
  const locale = (await getLocale()) as Locale;
  const content = getTechnologyConsultingContent(locale).domains;

  return (
    <section
      aria-labelledby="technology-consulting-domains-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: TECHNOLOGY_CONSULTING_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="technology-consulting-domains-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginTop: WHY_FILECOUNT_TOKENS.descriptionToCardsGap,
            gap: TECHNOLOGY_CONSULTING_TOKENS.cardGap,
            maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth,
          }}
        >
          {DOMAIN_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="flex min-h-0">
                <TcFeatureCard
                  icon={DOMAIN_ICONS[key]}
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
