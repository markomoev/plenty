import type { Metadata } from "next";
import { CollectionsPage } from "@/components/pages/collections";

export const metadata: Metadata = {
  title: "Стил & Вдъхновение — PLENTY Ловеч",
  description:
    "Вдъхновение за мъжки стил от магазин PLENTY в Ловеч. Ансамбли, подбрани от нашия екип.",
};

export default function Page() {
  return <CollectionsPage />;
}
