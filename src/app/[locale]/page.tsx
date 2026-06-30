import { setRequestLocale } from "next-intl/server";

import { DigitalTransformationJourney } from "@/components/sections/digital-transformation-journey";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HomeCta } from "@/components/sections/home-cta";
import { SectorsWeEmpower } from "@/components/sections/sectors-we-empower";
import { Services } from "@/components/sections/services";
import { WhyFileCount } from "@/components/sections/why-filecount";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content">
      <Hero />
      <WhyFileCount />
      <Services />
      <SectorsWeEmpower />
      <DigitalTransformationJourney />
      <HomeCta />
      <Footer />
    </main>
  );
}
