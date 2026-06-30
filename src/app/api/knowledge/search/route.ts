import { NextResponse } from "next/server";

import { getAutocompleteSuggestions } from "@/lib/knowledge/search";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { locales } from "@/types/locale";
import type { Locale } from "@/types/locale";

const SEARCH_RATE_LIMIT = 60;
const SEARCH_RATE_WINDOW_MS = 60_000;

export async function GET(request: Request) {
  const clientIp = getClientIp(request);
  const limit = rateLimit(`knowledge-search:${clientIp}`, SEARCH_RATE_LIMIT, SEARCH_RATE_WINDOW_MS);

  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
        },
      },
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const localeParam = searchParams.get("locale") ?? "en";
  const locale = (locales.includes(localeParam as Locale)
    ? localeParam
    : "en") as Locale;

  const results = getAutocompleteSuggestions(query, locale, 8);

  return NextResponse.json({ results });
}
