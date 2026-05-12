import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = {
  title: "За Нас — PLENTY Ловеч",
  description:
    "Семейният магазин PLENTY в Ловеч — история, ценности и хората зад него.",
};

export default function Page() {
  return <AboutPage />;
}
