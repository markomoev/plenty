import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";
import { getPageSections } from "@/lib/sections/client";
import { SectionsProvider } from "@/components/sections/SectionsProvider";
import { isPreviewEnabled } from "@/lib/preview/config";

export const metadata: Metadata = {
  title: "Контакти — PLENTY Ловеч",
  description:
    "Заповядайте в PLENTY на пазара в Ловеч. Вижте адрес, работно време, телефон и карта до магазина.",
};

type Props = {
  searchParams: Promise<{ preview?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const preview = sp.preview === "1" && isPreviewEnabled();
  const sections = await getPageSections("contact");
  return (
    <SectionsProvider page="contact" initial={sections} preview={preview}>
      <ContactPage />
    </SectionsProvider>
  );
}
