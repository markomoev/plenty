import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";
import { getPageSections } from "@/lib/sections/client";

export const metadata: Metadata = {
  title: "Контакти — PLENTY Ловеч",
  description:
    "Заповядайте в PLENTY на пазара в Ловеч. Вижте адрес, работно време, телефон и карта до магазина.",
};

export default async function Page() {
  const sections = await getPageSections("contact");
  return <ContactPage sections={sections} />;
}
