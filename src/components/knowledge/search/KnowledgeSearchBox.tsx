"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useLocale } from "next-intl";

import { useRouter } from "@/lib/i18n/navigation";
import {
  knowledgeSearchPath,
} from "@/lib/knowledge/paths";
import type { SearchResult } from "@/lib/knowledge/types";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

type KnowledgeSearchBoxProps = {
  defaultQuery?: string;
  size?: "default" | "large";
  autoFocus?: boolean;
  className?: string;
};

export const KnowledgeSearchBox = memo(function KnowledgeSearchBox({
  defaultQuery = "",
  size = "large",
  autoFocus = false,
  className,
}: KnowledgeSearchBoxProps) {
  const locale = useLocale() as Locale;
  const ui = getKnowledgeUiContent(locale).search;
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchSuggestions = useCallback(
    async (value: string) => {
      if (value.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      const params = new URLSearchParams({ q: value, locale });
      const response = await fetch(`/api/knowledge/search?${params.toString()}`);
      if (!response.ok) return;
      const data = (await response.json()) as { results: SearchResult[] };
      setSuggestions(data.results);
    },
    [locale],
  );

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      void fetchSuggestions(query);
    }, 200);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, fetchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateToSearch = (value: string) => {
    router.push(knowledgeSearchPath(value));
    setIsOpen(false);
  };

  const navigateToResult = (result: SearchResult) => {
    router.push(result.href);
    setIsOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      navigateToResult(suggestions[activeIndex]);
      return;
    }
    navigateToSearch(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      const selected = suggestions[activeIndex];
      if (selected) navigateToResult(selected);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const isLarge = size === "large";

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form onSubmit={handleSubmit} role="search">
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border bg-[var(--header-background)]",
            "border-[var(--header-border)] shadow-sm transition-shadow focus-within:shadow-md",
            isLarge ? "px-4 py-3" : "px-3 py-2",
          )}
        >
          <Search
            size={isLarge ? 22 : 18}
            className="shrink-0 text-[var(--nav-color)] opacity-60"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
              setActiveIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={ui.placeholder}
            autoFocus={autoFocus}
            aria-label={ui.placeholder}
            aria-autocomplete="list"
            aria-controls="knowledge-search-suggestions"
            className={cn(
              "min-w-0 flex-1 bg-transparent text-[var(--nav-color)] outline-none",
              "placeholder:text-[var(--nav-color)] placeholder:opacity-50",
              isLarge ? "text-base" : "text-sm",
            )}
          />
          <button
            type="submit"
            className={cn(
              "shrink-0 rounded-lg border border-[var(--header-border)] bg-[var(--site-background)]",
              "px-4 py-2 text-sm font-medium text-[var(--nav-color)]",
              "transition-colors hover:border-[var(--cta-hover-border)] hover:text-[var(--nav-hover-color)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
            )}
          >
            {ui.button}
          </button>
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <ul
          id="knowledge-search-suggestions"
          role="listbox"
          className="dropdown-fade-in absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-[var(--header-border)] bg-[var(--header-background)] py-1 shadow-lg"
        >
          {suggestions.map((result, index) => (
            <li key={`${result.type}-${result.slug}`} role="option" aria-selected={index === activeIndex}>
              <button
                type="button"
                onClick={() => navigateToResult(result)}
                className={cn(
                  "block w-full px-4 py-3 text-start transition-colors",
                  index === activeIndex
                    ? "bg-[var(--site-background)]"
                    : "hover:bg-[var(--site-background)]",
                )}
              >
                <span className="block text-sm font-medium text-[var(--nav-color)]">
                  {result.title}
                </span>
                <span className="mt-0.5 block text-xs text-[var(--nav-color)] opacity-70 line-clamp-1">
                  {result.description}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
