import { siteConfig } from "@/config/site";
import {
  ENTITY_DESCRIPTION,
  KNOWS_ABOUT,
  LOGO_URL_PATH,
  NAP,
  SOCIAL_PROFILES,
} from "@/config/brand";
import type { Locale } from "@/types/locale";

type OrganizationSchema = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  legalName: string;
  url: string;
  logo: string;
  image: string;
  description: string;
  email: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressCountry: string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  };
  knowsAbout: readonly string[];
  sameAs: readonly string[];
};

type LocalBusinessSchema = {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  url: string;
  description: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressCountry: string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  };
  priceRange: string;
};

type WebSiteSchema = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  inLanguage: string[];
  description: string;
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  potentialAction?: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
};

type WebPageSchema = {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
};

type AboutPageSchema = {
  "@context": "https://schema.org";
  "@type": "AboutPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  mainEntity: OrganizationSchema;
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function createOrganizationSchema(locale: Locale): OrganizationSchema {
  const logoUrl = `${siteConfig.url}${LOGO_URL_PATH}`;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: logoUrl,
    image: logoUrl,
    description: ENTITY_DESCRIPTION[locale],
    email: NAP.email,
    telephone: NAP.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.locality[locale],
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? NAP.country.ar : NAP.country.en,
    },
    knowsAbout: KNOWS_ABOUT,
    sameAs: SOCIAL_PROFILES,
  };
}

export function createLocalBusinessSchema(locale: Locale): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: ENTITY_DESCRIPTION[locale],
    image: `${siteConfig.url}${LOGO_URL_PATH}`,
    telephone: NAP.phone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.locality[locale],
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? NAP.country.ar : NAP.country.en,
    },
    priceRange: "$$$$",
  };
}

export function createWebSiteSchema(locale: Locale, locales: readonly Locale[]): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: ENTITY_DESCRIPTION[locale],
    inLanguage: locales.map((item) => (item === "ar" ? "ar-SA" : "en-US")),
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/en/knowledge-center/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function createWebPageSchema({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function createAboutPageSchema({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}): AboutPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    description,
    url,
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    mainEntity: createOrganizationSchema(locale),
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
    },
  };
}

export function createFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLocaleUrl(locale: Locale, pathname: string): string {
  return `${siteConfig.url}/${locale}${pathname}`;
}

export type StructuredDataSchema =
  | OrganizationSchema
  | LocalBusinessSchema
  | WebSiteSchema
  | WebPageSchema
  | AboutPageSchema
  | ReturnType<typeof createBreadcrumbSchema>
  | ReturnType<typeof createServiceSchema>
  | ReturnType<typeof createFaqPageSchema>;

export function serializeStructuredData(
  schema: StructuredDataSchema | StructuredDataSchema[],
): string {
  return JSON.stringify(schema);
}
