import type { Metadata } from "next";
import { CollectionsPage } from "@/components/pages/collections";

export const metadata: Metadata = {
  title: "Стил & Вдъхновение — PLENTY Ловеч",
  description:
    "Вдъхновение за стил от магазин PLENTY в Ловеч. Визии, подбрани от нашия екип.",
};

export default function Page() {
  return <CollectionsPage />;
}
