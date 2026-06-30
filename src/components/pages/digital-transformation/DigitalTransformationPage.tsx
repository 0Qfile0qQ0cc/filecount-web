import { DigitalTransformationBenefits } from "@/components/sections/digital-transformation/DigitalTransformationBenefits";
import { DigitalTransformationCta } from "@/components/sections/digital-transformation/DigitalTransformationCta";
import { DigitalTransformationFaq } from "@/components/sections/digital-transformation/DigitalTransformationFaq";
import { DigitalTransformationHero } from "@/components/sections/digital-transformation/DigitalTransformationHero";
import { DigitalTransformationJourneySection } from "@/components/sections/digital-transformation/DigitalTransformationJourneySection";
import { DigitalTransformationServices } from "@/components/sections/digital-transformation/DigitalTransformationServices";
import { DigitalTransformationSolutions } from "@/components/sections/digital-transformation/DigitalTransformationSolutions";
import { DigitalTransformationStructuredData } from "@/components/sections/digital-transformation/DigitalTransformationStructuredData";
import { WhyDigitalTransformation } from "@/components/sections/digital-transformation/WhyDigitalTransformation";
import { Footer } from "@/components/sections/footer";
import type { Locale } from "@/types/locale";

type DigitalTransformationPageProps = {
  locale: Locale;
};

export function DigitalTransformationPage({ locale }: DigitalTransformationPageProps) {
  return (
    <>
      <DigitalTransformationStructuredData locale={locale} />
      <main id="main-content">
        <DigitalTransformationHero />
        <WhyDigitalTransformation />
        <DigitalTransformationSolutions />
        <DigitalTransformationServices />
        <DigitalTransformationJourneySection />
        <DigitalTransformationBenefits />
        <DigitalTransformationFaq />
        <DigitalTransformationCta />
        <Footer />
      </main>
    </>
  );
}
