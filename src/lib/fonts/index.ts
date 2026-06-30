import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";

export const fontSansLatin = Inter({
  subsets: ["latin"],
  variable: "--font-sans-latin",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const fontSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const fontVariables = `${fontSansLatin.variable} ${fontSansArabic.variable}`;
