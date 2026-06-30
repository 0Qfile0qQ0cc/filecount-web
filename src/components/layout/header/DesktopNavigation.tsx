"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";

import { NAV_TOKENS } from "./constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MegaMenu, SolutionsTrigger } from "./MegaMenu";
import { NavigationItem } from "./NavigationItem";
import { TalkToExpertButton } from "./TalkToExpertButton";
import { PRIMARY_NAV_ITEMS } from "./types";
import type { NavItemKey } from "./types";

type DesktopNavigationProps = {
  isMegaMenuOpen: boolean;
  onToggleMegaMenu: () => void;
  onCloseMegaMenu: () => void;
};

export const DesktopNavigation = memo(function DesktopNavigation({
  isMegaMenuOpen,
  onToggleMegaMenu,
  onCloseMegaMenu,
}: DesktopNavigationProps) {
  const t = useTranslations("header");

  const getNavLabel = (key: NavItemKey) => t(`nav.${key}`);

  const handleSolutionsKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggleMegaMenu();
    }

    if (event.key === "Escape") {
      onCloseMegaMenu();
    }
  };

  return (
    <nav
      aria-label={t("primaryNavLabel")}
      className="relative hidden flex-1 items-center justify-center lg:flex"
      style={{ gap: NAV_TOKENS.itemGap }}
    >
      <ul className="flex items-center" style={{ gap: NAV_TOKENS.itemGap }}>
        {PRIMARY_NAV_ITEMS.map((item) => (
          <li key={item.key} className={item.hasMegaMenu ? "relative" : undefined}>
            {item.hasMegaMenu ? (
              <>
                <SolutionsTrigger
                  label={getNavLabel(item.key)}
                  isOpen={isMegaMenuOpen}
                  onToggle={onToggleMegaMenu}
                  onKeyDown={handleSolutionsKeyDown}
                />
                <MegaMenu
                  isOpen={isMegaMenuOpen}
                  menuLabel={t("solutionsMenuLabel")}
                  onClose={onCloseMegaMenu}
                />
              </>
            ) : (
              <NavigationItem
                href={item.href}
                label={getNavLabel(item.key)}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export const DesktopActions = memo(function DesktopActions() {
  const t = useTranslations("header");

  return (
    <div
      className="hidden shrink-0 items-center lg:flex"
      style={{ gap: NAV_TOKENS.itemGap / 2 }}
    >
      <LanguageSwitcher />
      <TalkToExpertButton label={t("cta")} />
    </div>
  );
});
