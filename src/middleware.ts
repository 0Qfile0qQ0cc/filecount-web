import createMiddleware from "next-intl/middleware";

import { routing } from "@/lib/i18n/routing";

/**
 * Locale resolution (next-intl middleware):
 * 1. Locale prefix in URL (e.g. /en, /ar)
 * 2. NEXT_LOCALE cookie (set when the user switches language)
 * 3. Accept-Language header
 * 4. defaultLocale (Arabic)
 */
export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(ar|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
