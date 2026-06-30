import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  DIGITAL_TRANSFORMATION_TOKENS,
  DT_FAQ_KEYS,
  getDigitalTransformationContent,
} from "./constants";

export async function DigitalTransformationFaq() {
  const locale = (await getLocale()) as Locale;
  const content = getDigitalTransformationContent(locale).faq;

  return (
    <section
      aria-labelledby="digital-transformation-faq-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: DIGITAL_TRANSFORMATION_TOKENS.contentMaxWidth }}
      >
        <h2
          id="digital-transformation-faq-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <div
          className="faq-accordion"
          style={{ marginTop: DIGITAL_TRANSFORMATION_TOKENS.titleToContentGap }}
        >
          {DT_FAQ_KEYS.map((key) => {
            const item = content.items[key];
            return (
              <details key={key} className="faq-accordion__item">
                <summary className="faq-accordion__summary">
                  {item.question}
                </summary>
                <p className="faq-accordion__answer">{item.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
