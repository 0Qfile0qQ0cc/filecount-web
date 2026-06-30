import { getLocale } from "next-intl/server";

import { SECTION_HEADING_STYLE } from "@/components/sections/shared/home-card-tokens";
import type { Locale } from "@/types/locale";

import {
  ENTERPRISE_PLATFORMS_TOKENS,
  FAQ_KEYS,
  getEnterprisePlatformsContent,
} from "./constants";

export async function EnterprisePlatformsFaq() {
  const locale = (await getLocale()) as Locale;
  const content = getEnterprisePlatformsContent(locale).faq;

  return (
    <section
      aria-labelledby="enterprise-platforms-faq-heading"
      className="bg-[var(--site-background)] pb-14 pt-14 lg:pb-20 lg:pt-20"
    >
      <div
        className="mx-auto px-5 lg:px-8"
        style={{ maxWidth: ENTERPRISE_PLATFORMS_TOKENS.contentMaxWidth }}
      >
        <h2
          id="enterprise-platforms-faq-heading"
          className="text-center text-xl font-bold tracking-tight text-[var(--nav-color)] sm:text-2xl"
          style={{ fontWeight: SECTION_HEADING_STYLE.fontWeight }}
        >
          {content.title}
        </h2>

        <div
          className="faq-accordion"
          style={{ marginTop: ENTERPRISE_PLATFORMS_TOKENS.titleToContentGap }}
        >
          {FAQ_KEYS.map((key) => {
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
