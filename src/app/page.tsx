import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "PLENTY — Мъжки Магазин в Ловеч",
  description:
    "Семеен магазин за мъжко облекло в центъра на Ловеч. Внимателно подбрани марки, честен стилов съвет и обслужване, което помни кои сте.",
};

export default function Page() {
  return <HomePage />;
}
