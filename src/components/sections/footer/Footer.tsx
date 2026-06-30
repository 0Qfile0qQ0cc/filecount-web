import { Linkedin, Mail } from "lucide-react";
import { getLocale } from "next-intl/server";

import { LOGO_TOKENS } from "@/components/layout/header/constants";
import { Link } from "@/lib/i18n/navigation";
import type { Locale } from "@/types/locale";

import {
  FOOTER_SOCIAL_LINKS,
  FOOTER_TOKENS,
  getFooterContent,
} from "./constants";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const content = getFooterContent(locale);

  return (
    <footer className="border-t border-[var(--header-border)] bg-[var(--header-background)]">
      <div
        className="mx-auto px-5 pt-8 pb-8 lg:px-8 lg:pt-9 lg:pb-9"
        style={{ maxWidth: FOOTER_TOKENS.containerMaxWidth }}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex shrink-0 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_TOKENS.source}
                alt=""
                width={LOGO_TOKENS.intrinsicSize}
                height={LOGO_TOKENS.intrinsicSize}
                className="block h-8 w-auto object-contain"
                decoding="async"
                aria-hidden="true"
              />
              <span className="sr-only">FileCount</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--nav-color)] opacity-75">
              {content.companyDescription}
            </p>
            <address className="mt-3 space-y-1.5 not-italic text-sm text-[var(--nav-color)]">
              <p>
                <span className="font-medium opacity-90">{content.contact.phoneLabel}</span>
                <br />
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="opacity-75 transition-opacity hover:opacity-100"
                  dir="ltr"
                  style={{ direction: "ltr", unicodeBidi: "isolate" }}
                >
                  {content.contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium opacity-90">{content.contact.emailLabel}</span>
                <br />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="opacity-75 transition-opacity hover:opacity-100"
                  dir="ltr"
                  style={{ direction: "ltr", unicodeBidi: "isolate" }}
                >
                  {content.contact.email}
                </a>
              </p>
              <p>
                <span className="font-medium opacity-90">{content.contact.locationLabel}</span>
                <br />
                <span className="opacity-75">{content.contact.location}</span>
              </p>
            </address>
          </div>

          <div>
            <h3
              className="text-sm font-semibold text-[var(--nav-color)]"
              style={{ fontWeight: 600 }}
            >
              {content.columns.company.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {content.columns.company.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--nav-color)] opacity-75 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-sm font-semibold text-[var(--nav-color)]"
              style={{ fontWeight: 600 }}
            >
              {content.columns.solutions.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {content.columns.solutions.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--nav-color)] opacity-75 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-[var(--header-border)] pt-4 sm:flex-row sm:items-center">
          <p className="text-center text-sm text-[var(--nav-color)] opacity-75 sm:text-start">
            {content.copyright}
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            {content.rightsReserved}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={FOOTER_SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.social.linkedinLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--header-border)] text-[var(--nav-color)] transition-colors hover:border-[var(--mega-menu-card-hover-border)] hover:bg-[var(--site-background)]"
            >
              <Linkedin size={18} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a
              href={FOOTER_SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.social.xLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--header-border)] text-[var(--nav-color)] transition-colors hover:border-[var(--mega-menu-card-hover-border)] hover:bg-[var(--site-background)]"
            >
              <XIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={FOOTER_SOCIAL_LINKS.email}
              aria-label={content.social.emailLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--header-border)] text-[var(--nav-color)] transition-colors hover:border-[var(--mega-menu-card-hover-border)] hover:bg-[var(--site-background)]"
            >
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
