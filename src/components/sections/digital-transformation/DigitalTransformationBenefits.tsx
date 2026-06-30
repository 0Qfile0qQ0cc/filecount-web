import { getLocale } from "next-intl/server";

import { WHY_FILECOUNT_TOKENS } from "@/components/sections/why-filecount/constants";
import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  DIGITAL_TRANSFORMATION_TOKENS,
  DT_BENEFIT_KEYS,
  getDigitalTransformationContent,
} from "./constants";
import { DtBenefitCard } from "./DtBenefitCard";

export async function DigitalTransformationBenefits() {
  const locale = (await getLocale()) as Locale;
  const content = getDigitalTransformationContent(locale).benefits;

  return (
    <section
      aria-labelledby="digital-transformation-benefits-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: DIGITAL_TRANSFORMATION_TOKENS.containerMaxWidth }}
      >
        <h2
          id="digital-transformation-benefits-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <ul
          className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginTop: DIGITAL_TRANSFORMATION_TOKENS.titleToContentGap,
            gap: WHY_FILECOUNT_TOKENS.cardGap,
            maxWidth: DIGITAL_TRANSFORMATION_TOKENS.containerMaxWidth,
          }}
        >
          {DT_BENEFIT_KEYS.map((key) => (
            <li key={key} className="min-h-0">
              <DtBenefitCard title={content.items[key]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
