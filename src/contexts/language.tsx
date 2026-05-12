"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

type BgTranslations = (typeof translations)["bg"];

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: BgTranslations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "bg",
  setLang: () => {},
  t: translations["bg"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("bg");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as BgTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
