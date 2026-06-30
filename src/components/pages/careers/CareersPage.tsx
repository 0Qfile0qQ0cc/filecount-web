import { CareersCta } from "@/components/sections/careers/CareersCta";
import { CareersApplication } from "@/components/sections/careers/CareersApplication";
import { CareersAreas } from "@/components/sections/careers/CareersAreas";
import { CareersBuildingTeam } from "@/components/sections/careers/CareersBuildingTeam";
import { CareersHero } from "@/components/sections/careers/CareersHero";
import { CareersLookFor } from "@/components/sections/careers/CareersLookFor";
import { CareersStructuredData } from "@/components/sections/careers/CareersStructuredData";
import { CareersValues } from "@/components/sections/careers/CareersValues";
import { CareersWhyJoin } from "@/components/sections/careers/CareersWhyJoin";
import { Footer } from "@/components/sections/footer";
import type { Locale } from "@/types/locale";

type CareersPageProps = {
  locale: Locale;
};

export function CareersPage({ locale }: CareersPageProps) {
  return (
    <>
      <CareersStructuredData locale={locale} />
      <main id="main-content">
        <CareersHero />
        <CareersWhyJoin />
        <CareersAreas />
        <CareersLookFor />
        <CareersValues />
        <CareersBuildingTeam />
        <CareersApplication />
        <CareersCta />
        <Footer />
      </main>
    </>
  );
}
