import type { Locale } from "@/types/locale";

export const FOOTER_TOKENS = {
  containerMaxWidth: 1280,
} as const;

type FooterLink = {
  label: string;
  href: string;
};

type FooterContent = {
  companyDescription: string;
  contact: {
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    phone: string;
    email: string;
    location: string;
  };
  columns: {
    company: { title: string; links: FooterLink[] };
    solutions: { title: string; links: FooterLink[] };
  };
  copyright: string;
  rightsReserved: string;
  social: {
    linkedinLabel: string;
    xLabel: string;
    emailLabel: string;
  };
};

const CONTENT: Record<Locale, FooterContent> = {
  en: {
    companyDescription:
      "FileCount delivers enterprise platform development, digital transformation and technical consulting tailored to organizations across Saudi Arabia and the region.",
    contact: {
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      phone: "+966 55 962 5553",
      email: "info@filecount.com",
      location: "Riyadh, Saudi Arabia",
    },
    columns: {
      company: {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "FileCount Knowledge", href: "/knowledge-center" },
          { label: "Careers", href: "/careers" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      solutions: {
        title: "Solutions",
        links: [
          { label: "Enterprise Platforms", href: "/solutions/platform-development" },
          { label: "Digital Transformation", href: "/solutions/digital-transformation" },
          { label: "Technical Consulting", href: "/solutions/technology-consulting" },
        ],
      },
    },
    copyright: "FileCount © 2026",
    rightsReserved: "All Rights Reserved.",
    social: {
      linkedinLabel: "LinkedIn",
      xLabel: "X",
      emailLabel: "Email",
    },
  },
  ar: {
    companyDescription:
      "تقدّم فايل كاونت حلول تطوير المنصات المؤسسية، والتحول الرقمي، والاستشارات التقنية بما يناسب احتياجات المنشآت في المملكة العربية السعودية والمنطقة.",
    contact: {
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      locationLabel: "الموقع",
      phone: "+966 55 962 5553",
      email: "info@filecount.com",
      location: "الرياض، المملكة العربية السعودية",
    },
    columns: {
      company: {
        title: "الشركة",
        links: [
          { label: "من نحن", href: "/about" },
          { label: "معرفة فايل كاونت", href: "/knowledge-center" },
          { label: "الوظائف", href: "/careers" },
          { label: "تواصل معنا", href: "/contact" },
        ],
      },
      solutions: {
        title: "الحلول",
        links: [
          { label: "منصات مؤسسية", href: "/solutions/platform-development" },
          { label: "التحول الرقمي", href: "/solutions/digital-transformation" },
          { label: "الاستشارات التقنية", href: "/solutions/technology-consulting" },
        ],
      },
    },
    copyright: "FileCount © 2026",
    rightsReserved: "جميع الحقوق محفوظة.",
    social: {
      linkedinLabel: "LinkedIn",
      xLabel: "X",
      emailLabel: "البريد الإلكتروني",
    },
  },
};

export function getFooterContent(locale: Locale): FooterContent {
  return CONTENT[locale];
}

export const FOOTER_SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/filecount/",
  x: "https://x.com/FilecountSA",
  email: "mailto:info@filecount.com",
} as const;
