"use client";



import { memo } from "react";

import { ChevronDown } from "lucide-react";

import { useTranslations } from "next-intl";



import { cn } from "@/lib/utils";



import { MEGA_MENU_TOKENS } from "./constants";

import { ServiceCard } from "./ServiceCard";

import { SOLUTION_ITEMS } from "./types";

import type { SolutionItemKey } from "./types";



type MegaMenuProps = {

  isOpen: boolean;

  menuLabel: string;

  onClose: () => void;

};



export const MegaMenu = memo(function MegaMenu({

  isOpen,

  menuLabel,

  onClose,

}: MegaMenuProps) {

  const t = useTranslations("header");



  const getServiceTitle = (key: SolutionItemKey) =>

    t(`solutions.${key}.title`);



  const getServiceDescription = (key: SolutionItemKey) =>

    t(`solutions.${key}.description`);



  if (!isOpen) {

    return null;

  }



  return (

    <div

      id="solutions-mega-menu"

      role="region"

      aria-label={menuLabel}

      className={cn(

        "panel-fade-slide-in absolute top-full z-50 mt-3 hidden lg:block",

        "border bg-[var(--header-background)] shadow-[0_4px_24px_rgba(47,79,104,0.08)]",

        "start-0 w-[590px] min-w-[560px] max-w-[min(620px,calc(100vw-2.5rem))]",

      )}

      style={{

        borderColor: MEGA_MENU_TOKENS.cardBorder,

        borderRadius: MEGA_MENU_TOKENS.panelRadius,

      }}

    >

      <div className="p-5">

        <div className="mb-4 border-b border-[var(--header-border)] pb-4">

          <p

            className="text-[length:var(--nav-font-size)] font-medium leading-snug text-[var(--nav-color)]"

            style={{ fontWeight: 500 }}

          >

            {t("nav.solutions")}

          </p>

          <p className="mt-1 text-[13px] leading-snug text-[var(--nav-color)] opacity-75">

            {t("solutions.menuDescription")}

          </p>

        </div>



        <ul

          className="flex flex-col"

          style={{ gap: MEGA_MENU_TOKENS.cardGap }}

        >

          {SOLUTION_ITEMS.map((item) => (

            <li key={item.key}>

              <ServiceCard

                icon={item.icon}

                title={getServiceTitle(item.key)}

                description={getServiceDescription(item.key)}

                href={item.href}

                onNavigate={onClose}

              />

            </li>

          ))}

        </ul>

      </div>

    </div>

  );

});



type SolutionsTriggerProps = {

  label: string;

  isOpen: boolean;

  onToggle: () => void;

  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;

};



export const SolutionsTrigger = memo(function SolutionsTrigger({

  label,

  isOpen,

  onToggle,

  onKeyDown,

}: SolutionsTriggerProps) {

  return (

    <button

      type="button"

      onClick={onToggle}

      onKeyDown={onKeyDown}

      aria-expanded={isOpen}

      aria-haspopup="true"

      aria-controls="solutions-mega-menu"

      className={cn(

        "inline-flex items-center gap-1.5 whitespace-nowrap",

        "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",

        "transition-colors duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",

        "hover:text-[var(--nav-hover-color)]",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",

      )}

      style={{ fontWeight: 500 }}

    >

      {label}

      <span

        className={cn("chevron-rotate inline-flex", isOpen && "chevron-rotate-open")}

      >

        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />

      </span>

    </button>

  );

});


