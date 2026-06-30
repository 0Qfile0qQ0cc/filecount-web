import { Footer } from "@/components/sections/footer";
import { TechnologyConsultingCta } from "@/components/sections/technology-consulting/TechnologyConsultingCta";
import { TechnologyConsultingDomains } from "@/components/sections/technology-consulting/TechnologyConsultingDomains";
import { TechnologyConsultingFaq } from "@/components/sections/technology-consulting/TechnologyConsultingFaq";
import { TechnologyConsultingHero } from "@/components/sections/technology-consulting/TechnologyConsultingHero";
import { TechnologyConsultingIndustries } from "@/components/sections/technology-consulting/TechnologyConsultingIndustries";
import { TechnologyConsultingMethodology } from "@/components/sections/technology-consulting/TechnologyConsultingMethodology";
import { TechnologyConsultingStructuredData } from "@/components/sections/technology-consulting/TechnologyConsultingStructuredData";
import { WhyFileCountConsulting } from "@/components/sections/technology-consulting/WhyFileCountConsulting";
import { WhyTechnologyConsulting } from "@/components/sections/technology-consulting/WhyTechnologyConsulting";
import type { Locale } from "@/types/locale";

type TechnologyConsultingPageProps = {
  locale: Locale;
};

export function TechnologyConsultingPage({ locale }: TechnologyConsultingPageProps) {
  return (
    <>
      <TechnologyConsultingStructuredData locale={locale} />
      <main id="main-content">
        <TechnologyConsultingHero />
        <WhyTechnologyConsulting />
        <TechnologyConsultingDomains />
        <TechnologyConsultingMethodology />
        <TechnologyConsultingIndustries />
        <WhyFileCountConsulting />
        <TechnologyConsultingFaq />
        <TechnologyConsultingCta />
        <Footer />
      </main>
    </>
  );
}
