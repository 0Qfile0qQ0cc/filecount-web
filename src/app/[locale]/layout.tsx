import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { Header } from "@/components/layout/header";
import { StructuredData } from "@/components/seo/structured-data";
import { fontVariables } from "@/lib/fonts";
import { routing } from "@/lib/i18n/routing";
import { createMetadata as buildMetadata } from "@/lib/seo";
import { localeConfigs } from "@/types/locale";
import type { Locale } from "@/types/locale";
import "@/styles/globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const locale = (
    hasLocale(routing.locales, localeParam)
      ? localeParam
      : routing.defaultLocale
  ) as Locale;

  // Locale validation is handled by next-intl middleware before this layout runs.
  setRequestLocale(locale);
  const messages = await getMessages();
  const { direction, htmlLang } = localeConfigs[locale];

  return (
    <html lang={htmlLang} dir={direction} suppressHydrationWarning>
      <body className={fontVariables}>
        <NextIntlClientProvider messages={messages}>
          <StructuredData locale={locale} />
          <AnalyticsScripts locale={locale} />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
