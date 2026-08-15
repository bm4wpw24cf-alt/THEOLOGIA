import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "THEOLOGIA",
  description: "Personlig nettside om bibelteologi, apologetikk og bibelstudier.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
