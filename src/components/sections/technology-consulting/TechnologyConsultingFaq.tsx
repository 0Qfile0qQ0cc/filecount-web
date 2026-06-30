import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import type { Locale } from "@/types/locale";

import {
  getTechnologyConsultingContent,
  TC_FAQ_KEYS,
  TECHNOLOGY_CONSULTING_TOKENS,
} from "./constants";

export async function TechnologyConsultingFaq() {
  const locale = (await getLocale()) as Locale;
  const content = getTechnologyConsultingContent(locale).faq;

  return (
    <section
      aria-labelledby="technology-consulting-faq-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: TECHNOLOGY_CONSULTING_TOKENS.contentMaxWidth }}
      >
        <header className="mx-auto flex flex-col items-center text-center">
          <div id="technology-consulting-faq-heading" className="inline-flex">
            <HeroEyebrowBadge>{content.title}</HeroEyebrowBadge>
          </div>
        </header>

        <div
          className="faq-accordion"
          style={{ marginTop: TECHNOLOGY_CONSULTING_TOKENS.titleToContentGap }}
        >
          {TC_FAQ_KEYS.map((key) => {
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
