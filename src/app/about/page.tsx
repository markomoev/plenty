import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";
import { getPageSections } from "@/lib/sections/client";

export const metadata: Metadata = {
  title: "За Нас — PLENTY Ловеч",
  description:
    "Семейният магазин PLENTY в Ловеч — история, ценности и хората зад него.",
};

export default async function Page() {
  const sections = await getPageSections("about");
  return <AboutPage sections={sections} />;
}
