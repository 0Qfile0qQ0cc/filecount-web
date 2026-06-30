import { getLocale, getTranslations } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { SECTORS_WE_EMPOWER_TOKENS } from "@/components/sections/sectors-we-empower/constants";
import { SectorsMarquee } from "@/components/sections/sectors-we-empower/SectorsMarquee";
import type { Locale } from "@/types/locale";

import { getTechnologyConsultingContent } from "./constants";

export async function TechnologyConsultingIndustries() {
  const locale = (await getLocale()) as Locale;
  const content = getTechnologyConsultingContent(locale).industries;
  const t = await getTranslations("sectorsWeEmpower");
  const sectors = t.raw("sectors") as string[];

  return (
    <section
      aria-labelledby="technology-consulting-industries-heading"
      className="bg-[var(--site-background)] pb-12 pt-14 lg:pb-16 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: SECTORS_WE_EMPOWER_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="technology-consulting-industries-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.badge}</HeroEyebrowBadge>
          </div>
          <p
            className="text-[var(--nav-color)] opacity-90"
            style={{
              marginTop: SECTORS_WE_EMPOWER_TOKENS.titleToDescriptionGap,
              maxWidth: SECTORS_WE_EMPOWER_TOKENS.descriptionMaxWidth,
              fontSize: 18,
              lineHeight: 1.65,
            }}
          >
            {content.description}
          </p>
        </header>
      </div>

      <div
        className="w-full"
        style={{ marginTop: SECTORS_WE_EMPOWER_TOKENS.descriptionToMarqueeGap }}
      >
        <SectorsMarquee sectors={sectors} />
      </div>
    </section>
  );
}
