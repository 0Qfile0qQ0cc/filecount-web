"use client";



import { memo, useCallback, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";



import { useEscapeKey } from "@/hooks/use-escape-key";

import { useOutsideClick } from "@/hooks/use-outside-click";

import { usePathname, useRouter } from "@/lib/i18n/navigation";

import { cn } from "@/lib/utils";

import { locales } from "@/types/locale";

import type { Locale } from "@/types/locale";



const LOCALE_LABEL_KEYS = {

  en: "english",

  ar: "arabic",

} as const satisfies Record<Locale, "english" | "arabic">;



export const LanguageSwitcher = memo(function LanguageSwitcher() {

  const t = useTranslations("header.languageSwitcher");

  const currentLocale = useLocale() as Locale;

  const router = useRouter();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);



  const close = useCallback(() => setIsOpen(false), []);



  useOutsideClick(containerRef, close, isOpen);

  useEscapeKey(close, isOpen);



  const getLocaleLabel = (locale: Locale) =>

    t(LOCALE_LABEL_KEYS[locale]);



  const currentLabel = getLocaleLabel(currentLocale);



  const handleSelect = (locale: Locale) => {

    router.replace(pathname, { locale });

    close();

  };



  const handleToggle = () => {

    setIsOpen((previous) => !previous);

  };



  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {

    if (event.key === "ArrowDown" && !isOpen) {

      event.preventDefault();

      setIsOpen(true);

    }

  };



  return (

    <div ref={containerRef} className="relative">

      <button

        type="button"

        onClick={handleToggle}

        onKeyDown={handleKeyDown}

        aria-label={`${t("label")}: ${currentLabel}`}

        aria-expanded={isOpen}

        aria-haspopup="listbox"

        aria-controls="language-menu"

        className={cn(

          "inline-flex h-10 items-center gap-1.5 rounded-md px-2.5",

          "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",

          "transition-colors duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",

          "hover:text-[var(--nav-hover-color)]",

          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",

        )}

        style={{ fontWeight: 500 }}

      >

        <span aria-hidden="true" className="text-base leading-none">

          🌐

        </span>

        <span>{currentLabel}</span>

      </button>



      {isOpen && (

        <ul

          id="language-menu"

          role="listbox"

          aria-label={t("label")}

          className={cn(

            "dropdown-fade-in absolute top-full z-50 mt-2 min-w-[10rem] rounded-md",

            "border border-[var(--header-border)] bg-[var(--header-background)] py-1 shadow-sm",

            "end-0",

          )}

        >

          {locales.map((locale) => (

            <li key={locale} role="option" aria-selected={locale === currentLocale}>

              <button

                type="button"

                onClick={() => handleSelect(locale)}

                className={cn(

                  "block w-full px-4 py-2.5 text-start",

                  "text-[length:var(--nav-font-size)] font-medium",

                  "transition-colors duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",

                  "hover:bg-[var(--site-background)] hover:text-[var(--nav-hover-color)]",

                  "focus-visible:outline-none focus-visible:bg-[var(--site-background)]",

                  locale === currentLocale

                    ? "text-[var(--nav-hover-color)]"

                    : "text-[var(--nav-color)]",

                )}

                style={{ fontWeight: 500 }}

              >

                {getLocaleLabel(locale)}

              </button>

            </li>

          ))}

        </ul>

      )}

    </div>

  );

});


