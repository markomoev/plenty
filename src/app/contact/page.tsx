import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";

export const metadata: Metadata = {
  title: "Контакти — PLENTY Ловеч",
  description:
    "Адрес, работно време и телефон на магазин PLENTY — на пазара в Ловеч, Търговска 60.",
};

export default function Page() {
  return <ContactPage />;
}
