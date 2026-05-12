import type { Metadata } from "next";
import { NewsPage } from "@/components/pages/news";

export const metadata: Metadata = {
  title: "Новини & Статии — PLENTY Ловеч",
  description:
    "Стилови насоки, нови пристигания и съвети от PLENTY — мъжки магазин в Ловеч.",
};

export default function Page() {
  return <NewsPage />;
}
