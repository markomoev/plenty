import type { Metadata } from "next";
import { VisitPage } from "@/components/pages/visit";

export const metadata: Metadata = {
  title: "Посети Ни — PLENTY Ловеч",
  description:
    "Намерете магазин PLENTY в центъра на Ловеч — адрес, работно време и как да стигнете до нас.",
};

export default function Page() {
  return <VisitPage />;
}
