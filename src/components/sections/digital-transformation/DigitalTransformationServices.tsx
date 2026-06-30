import {
  FolderKanban,
  GitMerge,
  GraduationCap,
  Headphones,
  Layers,
  Lightbulb,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { WHY_FILECOUNT_TOKENS } from "@/components/sections/why-filecount/constants";
import type { Locale } from "@/types/locale";

import {
  DT_SERVICE_KEYS,
  DIGITAL_TRANSFORMATION_TOKENS,
  getDigitalTransformationContent,
  type DtServiceKey,
} from "./constants";
import { DtFeatureCard } from "./DtFeatureCard";

const SERVICE_ICONS: Record<DtServiceKey, LucideIcon> = {
  businessAnalysis: Lightbulb,
  solutionSelection: Layers,
  implementation: Settings,
  customization: GitMerge,
  integration: FolderKanban,
  training: GraduationCap,
  support: Headphones,
};

export async function DigitalTransformationServices() {
  const locale = (await getLocale()) as Locale;
  const content = getDigitalTransformationContent(locale).services;

  return (
    <section
      aria-labelledby="digital-transformation-services-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: DIGITAL_TRANSFORMATION_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="digital-transformation-services-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginTop: WHY_FILECOUNT_TOKENS.descriptionToCardsGap,
            gap: DIGITAL_TRANSFORMATION_TOKENS.cardGap,
            maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth,
          }}
        >
          {DT_SERVICE_KEYS.map((key) => {
            const service = content.items[key];
            return (
              <li key={key} className="flex min-h-0">
                <DtFeatureCard
                  icon={SERVICE_ICONS[key]}
                  title={service.title}
                  description={service.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
