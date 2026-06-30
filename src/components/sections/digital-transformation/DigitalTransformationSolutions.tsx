import {
  BookOpen,
  FileSignature,
  Files,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { WHY_FILECOUNT_TOKENS } from "@/components/sections/why-filecount/constants";
import type { Locale } from "@/types/locale";

import {
  DIGITAL_TRANSFORMATION_TOKENS,
  getDigitalTransformationContent,
  SOLUTION_KEYS,
  type SolutionKey,
} from "./constants";
import { DtFeatureCard } from "./DtFeatureCard";

const SOLUTION_ICONS: Record<SolutionKey, LucideIcon> = {
  documentManagement: Files,
  workflowAutomation: Workflow,
  digitalSignature: FileSignature,
  knowledgeManagement: BookOpen,
};

export async function DigitalTransformationSolutions() {
  const locale = (await getLocale()) as Locale;
  const content = getDigitalTransformationContent(locale).solutions;

  return (
    <section
      aria-labelledby="digital-transformation-solutions-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="digital-transformation-solutions-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 items-stretch md:grid-cols-2"
          style={{
            marginTop: WHY_FILECOUNT_TOKENS.descriptionToCardsGap,
            gap: DIGITAL_TRANSFORMATION_TOKENS.cardGap,
            maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth,
          }}
        >
          {SOLUTION_KEYS.map((key) => {
            const card = content.cards[key];
            return (
              <li key={key} className="flex min-h-0">
                <DtFeatureCard
                  icon={SOLUTION_ICONS[key]}
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
