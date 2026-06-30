import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutHowWeWork } from "@/components/sections/about/AboutHowWeWork";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutStructuredData } from "@/components/sections/about/AboutStructuredData";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutWhyFileCount } from "@/components/sections/about/AboutWhyFileCount";
import { Footer } from "@/components/sections/footer";
import type { Locale } from "@/types/locale";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  return (
    <>
      <AboutStructuredData locale={locale} />
      <main id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutHowWeWork />
        <AboutWhyFileCount />
        <AboutTeam />
        <AboutCta />
        <Footer />
      </main>
    </>
  );
}
