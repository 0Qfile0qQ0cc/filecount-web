"use client";



import { memo } from "react";

import { useTranslations } from "next-intl";



import { TalkToExpertButton } from "@/components/layout/header/TalkToExpertButton";

import { cn } from "@/lib/utils";



import { HERO_TOKENS } from "./constants";

import { HeroEyebrowBadge } from "./HeroEyebrowBadge";

import { HeroSecondaryButton } from "./HeroSecondaryButton";



export const Hero = memo(function Hero() {

  const t = useTranslations("hero");



  return (

    <section

      aria-labelledby="hero-heading"

      className="bg-[var(--site-background)] py-16 lg:py-24"

    >

      <div

        className="mx-auto flex justify-center px-5 lg:px-8"

        style={{ maxWidth: HERO_TOKENS.containerMaxWidth }}

      >

        <div

          className="hero-content-enter flex w-full flex-col items-center text-center"

          style={{

            gap: HERO_TOKENS.contentGap,

            maxWidth: HERO_TOKENS.contentMaxWidth,

          }}

        >

          <HeroEyebrowBadge>{t("eyebrow")}</HeroEyebrowBadge>



          <h1

            id="hero-heading"

            className="w-full text-3xl font-bold leading-tight tracking-tight text-[var(--nav-color)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"

          >

            {t("headline")}

          </h1>



          <p

            className="w-full text-[var(--nav-color)] opacity-90"

            style={{

              fontSize: HERO_TOKENS.descriptionFontSize,

              lineHeight: HERO_TOKENS.descriptionLineHeight,

            }}

          >

            {t("description")}

          </p>



          <div

            className={cn(

              "flex w-full flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4",

            )}

          >

            <TalkToExpertButton label={t("primaryCta")} />

            <HeroSecondaryButton label={t("secondaryCta")} />

          </div>

        </div>

      </div>

    </section>

  );

});


