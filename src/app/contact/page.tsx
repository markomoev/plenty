import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";

export const metadata: Metadata = {
  title: "Контакти — PLENTY Ловеч",
  description:
    "Заповядайте в PLENTY на пазара в Ловеч. Вижте адрес, работно време, телефон и карта до магазина.",
};

export default function Page() {
  return <ContactPage />;
}
