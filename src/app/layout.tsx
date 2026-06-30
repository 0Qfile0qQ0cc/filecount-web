import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout required by Next.js App Router.
 * Locale-specific html/body attributes are set in [locale]/layout.tsx.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
