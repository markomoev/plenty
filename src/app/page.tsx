import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";
import { getPageSections } from "@/lib/sections/client";
import { SectionsProvider } from "@/components/sections/SectionsProvider";
import { isPreviewEnabled } from "@/lib/preview/config";

export const metadata: Metadata = {
  title: "PLENTY — Магазин за Дрехи в Ловеч",
  description:
    "Дрехи за жени и мъже в Ловеч с подбрани модели, спокойно пробване и честна помощ при избора. Заповядайте в PLENTY на пазара.",
};

type Props = {
  searchParams: Promise<{ preview?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const preview = sp.preview === "1" && isPreviewEnabled();
  const sections = await getPageSections("home");
  return (
    <SectionsProvider page="home" initial={sections} preview={preview}>
      <HomePage />
    </SectionsProvider>
  );
}
