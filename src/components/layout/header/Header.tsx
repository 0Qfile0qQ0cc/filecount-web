"use client";

import { memo, useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { useEscapeKey } from "@/hooks/use-escape-key";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useScrollState } from "@/hooks/use-scroll-state";
import { cn } from "@/lib/utils";

import { HEADER_TOKENS } from "./constants";
import {
  DesktopActions,
  DesktopNavigation,
} from "./DesktopNavigation";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

export const Header = memo(function Header() {
  const t = useTranslations("header");
  const isScrolled = useScrollState({ threshold: 0 });
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMegaMenu = useCallback(() => setIsMegaMenuOpen(false), []);
  const toggleMegaMenu = useCallback(
    () => setIsMegaMenuOpen((previous) => !previous),
    [],
  );

  useOutsideClick(headerRef, closeMegaMenu, isMegaMenuOpen);
  useEscapeKey(closeMegaMenu, isMegaMenuOpen);

  return (
    <header
      ref={headerRef}
      className={cn(
        "relative sticky top-0 w-full border-b border-[var(--header-border)]",
        "transition-[background-color,box-shadow,backdrop-filter] duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
        isScrolled
          ? "bg-[var(--header-background-scrolled)] shadow-[0_1px_3px_rgba(47,79,104,0.06)] backdrop-blur-[var(--header-backdrop-blur)]"
          : "bg-[var(--header-background)]",
      )}
      style={{ zIndex: HEADER_TOKENS.zIndex }}
    >
      <div
        className="relative mx-auto flex items-center justify-between px-5 lg:px-8"
        style={{
          height: HEADER_TOKENS.height,
          maxWidth: HEADER_TOKENS.maxWidth,
        }}
      >
        <Logo label={t("logoLabel")} />

        <DesktopNavigation
          isMegaMenuOpen={isMegaMenuOpen}
          onToggleMegaMenu={toggleMegaMenu}
          onCloseMegaMenu={closeMegaMenu}
        />

        <DesktopActions />

        <MobileNavigation />
      </div>
    </header>
  );
});
