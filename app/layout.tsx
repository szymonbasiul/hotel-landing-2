import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romantic Escape for Two | Boutique Hotel",
  description:
    "A romantic stay designed for anniversaries, quiet celebrations and weekends made only for the two of you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scrollbar-thin`}
    >
      <body className="min-h-dvh bg-beige-light text-black-soft font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
