import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "PLENTY — Мъжки Магазин в Ловеч",
  description:
    "Мъжко облекло в Ловеч с подбрани модели, спокойно пробване и честна помощ при избора. Заповядайте в PLENTY на пазара.",
};

export default function Page() {
  return <HomePage />;
}
