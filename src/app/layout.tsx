import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/language";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLENTY — Магазин за Дрехи в Ловеч",
  description:
    "Семеен магазин за дрехи за жени и мъже в центъра на Ловеч. Подбрани модели, честен съвет и обслужване, което помни кои сте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" data-theme="dark">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <Nav />
          <div className="pt-20">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
