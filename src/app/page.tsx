import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "PLENTY — Магазин за Дрехи в Ловеч",
  description:
    "Дрехи за жени и мъже в Ловеч с подбрани модели, спокойно пробване и честна помощ при избора. Заповядайте в PLENTY на пазара.",
};

export default function Page() {
  return <HomePage />;
}
