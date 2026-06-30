"use client";



import { memo, useCallback, useEffect, useState } from "react";

import { ChevronDown, X } from "lucide-react";

import { useTranslations } from "next-intl";



import { useEscapeKey } from "@/hooks/use-escape-key";

import { Link } from "@/lib/i18n/navigation";

import { cn } from "@/lib/utils";



import { HEADER_TOKENS } from "./constants";

import { LanguageSwitcher } from "./LanguageSwitcher";

import { TalkToExpertButton } from "./TalkToExpertButton";

import { PRIMARY_NAV_ITEMS, SOLUTION_ITEMS } from "./types";

import type { NavItemKey, SolutionItemKey } from "./types";



const HamburgerIcon = memo(function HamburgerIcon() {

  return (

    <span className="relative block h-4 w-5" aria-hidden="true">

      <span className="absolute start-0 top-0 block h-0.5 w-5 rounded-full bg-[var(--nav-color)]" />

      <span className="absolute start-0 top-[7px] block h-0.5 w-5 rounded-full bg-[var(--nav-color)]" />

      <span className="absolute start-0 top-[14px] block h-0.5 w-5 rounded-full bg-[var(--nav-color)]" />

    </span>

  );

});



export const MobileNavigation = memo(function MobileNavigation() {

  const t = useTranslations("header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);



  const closeMenu = useCallback(() => {

    setIsMenuOpen(false);

    setIsSolutionsOpen(false);

  }, []);



  useEscapeKey(closeMenu, isMenuOpen);



  useEffect(() => {

    if (!isMenuOpen) {

      return undefined;

    }



    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";



    return () => {

      document.body.style.overflow = previousOverflow;

    };

  }, [isMenuOpen]);



  const getNavLabel = (key: NavItemKey) => t(`nav.${key}`);

  const getServiceTitle = (key: SolutionItemKey) =>

    t(`solutions.${key}.title`);

  const getServiceDescription = (key: SolutionItemKey) =>

    t(`solutions.${key}.description`);



  const toggleMenu = () => {

    setIsMenuOpen((previous) => {

      if (previous) {

        setIsSolutionsOpen(false);

      }

      return !previous;

    });

  };



  return (

    <div className="flex shrink-0 items-center gap-3 lg:hidden">

      <LanguageSwitcher />

      <TalkToExpertButton

        label={t("cta")}

        className="hidden min-[480px]:inline-flex"

      />



      <button

        type="button"

        onClick={toggleMenu}

        aria-label={isMenuOpen ? t("mobileMenu.close") : t("mobileMenu.open")}

        aria-expanded={isMenuOpen}

        aria-controls="mobile-navigation-panel"

        className={cn(

          "inline-flex h-10 w-10 items-center justify-center rounded-md",

          "text-[var(--nav-color)] transition-colors duration-[var(--header-transition-duration)]",

          "hover:text-[var(--nav-hover-color)]",

          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",

        )}

      >

        {isMenuOpen ? (

          <X size={20} strokeWidth={2} aria-hidden="true" />

        ) : (

          <HamburgerIcon />

        )}

      </button>



      {isMenuOpen && (

        <div

          id="mobile-navigation-panel"

          role="dialog"

          aria-modal="true"

          aria-label={t("mobileMenu.label")}

          className="mobile-nav-panel-in absolute inset-x-0 top-[var(--header-height)] overflow-hidden border-b border-[var(--header-border)] bg-[var(--header-background)]"

        >

          <nav

            className="mx-auto flex flex-col px-5 py-4"

            style={{ maxWidth: HEADER_TOKENS.maxWidth }}

          >

            <ul className="flex flex-col gap-1">

              {PRIMARY_NAV_ITEMS.map((item) => {

                if (item.hasMegaMenu) {

                  return (

                    <li key={item.key}>

                      <button

                        type="button"

                        onClick={() =>

                          setIsSolutionsOpen((previous) => !previous)

                        }

                        aria-expanded={isSolutionsOpen}

                        className={cn(

                          "flex w-full items-center justify-between rounded-md px-3 py-3",

                          "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",

                          "hover:text-[var(--nav-hover-color)]",

                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)]",

                        )}

                        style={{ fontWeight: 500 }}

                      >

                        {getNavLabel(item.key)}

                        <span

                          className={cn(

                            "chevron-rotate inline-flex",

                            isSolutionsOpen && "chevron-rotate-open",

                          )}

                        >

                          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />

                        </span>

                      </button>



                      {isSolutionsOpen && (

                        <ul className="dropdown-fade-in flex flex-col gap-1 overflow-hidden ps-3">

                          {SOLUTION_ITEMS.map((solution) => (

                            <li key={solution.key}>

                              <Link

                                href={solution.href}

                                onClick={closeMenu}

                                className={cn(

                                  "block rounded-md px-3 py-2.5",

                                  "hover:bg-[var(--site-background)]",

                                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)]",

                                )}

                              >

                                <span

                                  className="block text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]"

                                  style={{ fontWeight: 500 }}

                                >

                                  {getServiceTitle(solution.key)}

                                </span>

                                <span className="mt-0.5 block text-[13px] leading-snug text-[var(--nav-color)] opacity-75">

                                  {getServiceDescription(solution.key)}

                                </span>

                              </Link>

                            </li>

                          ))}

                        </ul>

                      )}

                    </li>

                  );

                }



                return (

                  <li key={item.key}>

                    <Link

                      href={item.href}

                      onClick={closeMenu}

                      className={cn(

                        "block rounded-md px-3 py-3",

                        "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",

                        "hover:bg-[var(--site-background)] hover:text-[var(--nav-hover-color)]",

                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)]",

                      )}

                      style={{ fontWeight: 500 }}

                    >

                      {getNavLabel(item.key)}

                    </Link>

                  </li>

                );

              })}

            </ul>



            <div className="mt-4 min-[480px]:hidden">

              <TalkToExpertButton

                label={t("cta")}

                onClick={closeMenu}

                className="w-full justify-center"

              />

            </div>

          </nav>

        </div>

      )}

    </div>

  );

});


