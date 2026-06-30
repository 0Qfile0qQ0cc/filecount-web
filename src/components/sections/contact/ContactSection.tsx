import { getLocale } from "next-intl/server";

import { HeroEyebrowBadge } from "@/components/sections/hero/HeroEyebrowBadge";
import { getFooterContent } from "@/components/sections/footer/constants";
import type { Locale } from "@/types/locale";

import { getContactContent } from "./constants";

export async function ContactSection() {
  const locale = (await getLocale()) as Locale;
  const content = getContactContent(locale);
  const contact = getFooterContent(locale).contact;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-[var(--site-background)] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-xl px-5 text-center lg:px-8">
        <div id="contact-heading" className="inline-flex">
          <HeroEyebrowBadge>{content.title}</HeroEyebrowBadge>
        </div>

        <p
          className="mt-5 text-[var(--nav-color)] opacity-90"
          style={{ fontSize: 16, lineHeight: 1.65 }}
        >
          {content.description}
        </p>

        <address className="mt-8 space-y-4 not-italic text-start text-sm text-[var(--nav-color)]">
          <p>
            <span className="font-semibold">{contact.phoneLabel}</span>
            <br />
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="opacity-80 transition-opacity hover:opacity-100"
              dir="ltr"
              style={{ direction: "ltr", unicodeBidi: "isolate" }}
            >
              {contact.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold">{contact.emailLabel}</span>
            <br />
            <a
              href={`mailto:${contact.email}`}
              className="opacity-80 transition-opacity hover:opacity-100"
              dir="ltr"
              style={{ direction: "ltr", unicodeBidi: "isolate" }}
            >
              {contact.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">{contact.locationLabel}</span>
            <br />
            <span className="opacity-80">{contact.location}</span>
          </p>
        </address>
      </div>
    </section>
  );
}
