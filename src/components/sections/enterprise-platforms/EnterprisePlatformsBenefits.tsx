import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import { BenefitCard } from "./BenefitCard";
import {
  BENEFIT_KEYS,
  ENTERPRISE_PLATFORMS_TOKENS,
  getEnterprisePlatformsContent,
} from "./constants";

export async function EnterprisePlatformsBenefits() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).benefits;

  return (
    <section
      aria-labelledby="enterprise-platforms-benefits-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ENTERPRISE_PLATFORMS_TOKENS.containerMaxWidth }}
      >
        <h2
          id="enterprise-platforms-benefits-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <ul
          className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginTop: ENTERPRISE_PLATFORMS_TOKENS.titleToContentGap,
            gap: ENTERPRISE_PLATFORMS_TOKENS.cardGap,
            maxWidth: ENTERPRISE_PLATFORMS_TOKENS.containerMaxWidth,
          }}
        >
          {BENEFIT_KEYS.map((key) => (
            <li key={key} className="min-h-0">
              <BenefitCard title={content.items[key]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
