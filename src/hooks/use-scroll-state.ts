"use client";

import { useEffect, useState } from "react";

type UseScrollStateOptions = {
  threshold?: number;
};

export function useScrollState(
  options: UseScrollStateOptions = {},
): boolean {
  const { threshold = 0 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
