import {
  BriefcaseBusiness,
  PanelsTopLeft,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type NavItemKey =
  | "home"
  | "solutions"
  | "about"
  | "knowledgeCenter"
  | "careers";

export type SolutionItemKey =
  | "platformDevelopment"
  | "digitalTransformation"
  | "itConsulting";

export type NavItem = {
  key: NavItemKey;
  href: string;
  hasMegaMenu?: boolean;
};

export type SolutionItem = {
  key: SolutionItemKey;
  href: string;
  icon: LucideIcon;
};

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  { key: "solutions", href: "/solutions", hasMegaMenu: true },
  { key: "about", href: "/about" },
  { key: "knowledgeCenter", href: "/knowledge-center" },
  { key: "careers", href: "/careers" },
];

export const SOLUTION_ITEMS: SolutionItem[] = [
  {
    key: "platformDevelopment",
    href: "/solutions/platform-development",
    icon: PanelsTopLeft,
  },
  {
    key: "digitalTransformation",
    href: "/solutions/digital-transformation",
    icon: Workflow,
  },
  {
    key: "itConsulting",
    href: "/solutions/technology-consulting",
    icon: BriefcaseBusiness,
  },
];

export const CTA_HREF = "/contact";
