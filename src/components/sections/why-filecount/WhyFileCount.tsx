import {
  GitMerge,
  LayoutGrid,
  ScanSearch,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";

import {
  WHY_FILECOUNT_CARD_KEYS,
  WHY_FILECOUNT_TOKENS,
  type WhyFileCountCardKey,
} from "./constants";
import { WhyFileCountCard } from "./WhyFileCountCard";

const CARD_ICONS: Record<WhyFileCountCardKey, LucideIcon> = {
  understand: ScanSearch,
  select: LayoutGrid,
  customize: GitMerge,
  grow: TrendingUp,
};

export async function WhyFileCount() {
  const t = await getTranslations("whyFileCount");

  return (
    <section
      aria-labelledby="why-filecount-heading"
      className="bg-[var(--site-background)] pb-14 pt-20 lg:pb-20 lg:pt-24"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="why-filecount-heading" className="inline-flex">
            <HeroEyebrowBadge>{t("title")}</HeroEyebrowBadge>
          </div>
          <p
            className="text-[var(--nav-color)] opacity-90"
            style={{
              marginTop: WHY_FILECOUNT_TOKENS.titleToDescriptionGap,
              maxWidth: WHY_FILECOUNT_TOKENS.descriptionMaxWidth,
              fontSize: 18,
              lineHeight: 1.65,
            }}
          >
            {t("description")}
          </p>
        </header>

        <ul
          className="mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4"
          style={{
            marginTop: WHY_FILECOUNT_TOKENS.descriptionToCardsGap,
            gap: WHY_FILECOUNT_TOKENS.cardGap,
            maxWidth: WHY_FILECOUNT_TOKENS.containerMaxWidth,
          }}
        >
          {WHY_FILECOUNT_CARD_KEYS.map((key) => (
            <li key={key} className="w-full max-w-[350px]">
              <WhyFileCountCard
                icon={CARD_ICONS[key]}
                title={t(`cards.${key}.title`)}
                description={t(`cards.${key}.description`)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
