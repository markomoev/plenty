import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";
import { getPageSections } from "@/lib/sections/client";
import { SectionsProvider } from "@/components/sections/SectionsProvider";
import { isPreviewEnabled } from "@/lib/preview/config";

export const metadata: Metadata = {
  title: "За Нас — PLENTY Ловеч",
  description:
    "Семейният магазин PLENTY в Ловеч — история, ценности и хората зад него.",
};

type Props = {
  searchParams: Promise<{ preview?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const preview = sp.preview === "1" && isPreviewEnabled();
  const sections = await getPageSections("about");
  return (
    <SectionsProvider page="about" initial={sections} preview={preview}>
      <AboutPage />
    </SectionsProvider>
  );
}
