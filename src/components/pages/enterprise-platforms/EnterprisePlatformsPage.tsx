import { EnterprisePlatformsBenefits } from "@/components/sections/enterprise-platforms/EnterprisePlatformsBenefits";
import { EnterprisePlatformsCta } from "@/components/sections/enterprise-platforms/EnterprisePlatformsCta";
import { EnterprisePlatformsFaq } from "@/components/sections/enterprise-platforms/EnterprisePlatformsFaq";
import { EnterprisePlatformsHero } from "@/components/sections/enterprise-platforms/EnterprisePlatformsHero";
import { EnterprisePlatformsProcess } from "@/components/sections/enterprise-platforms/EnterprisePlatformsProcess";
import { EnterprisePlatformsStructuredData } from "@/components/sections/enterprise-platforms/EnterprisePlatformsStructuredData";
import { WhyCustomPlatform } from "@/components/sections/enterprise-platforms/WhyCustomPlatform";
import { WhatWeBuild } from "@/components/sections/enterprise-platforms/WhatWeBuild";
import { Footer } from "@/components/sections/footer";
import type { Locale } from "@/types/locale";

type EnterprisePlatformsPageProps = {
  locale: Locale;
};

export function EnterprisePlatformsPage({ locale }: EnterprisePlatformsPageProps) {
  return (
    <>
      <EnterprisePlatformsStructuredData locale={locale} />
      <main id="main-content">
        <EnterprisePlatformsHero />
        <WhyCustomPlatform />
        <WhatWeBuild />
        <EnterprisePlatformsProcess />
        <EnterprisePlatformsBenefits />
        <EnterprisePlatformsFaq />
        <EnterprisePlatformsCta />
        <Footer />
      </main>
    </>
  );
}
