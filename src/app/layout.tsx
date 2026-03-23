import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLENTY — Модерният Патриарх",
  description:
    "Мъжки магазин за облекло в Ловеч. Лично стилово консултиране, качествени колекции и редакционен поглед върху мъжката мода.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
