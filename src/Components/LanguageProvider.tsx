"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language } from "~/translations";

type LanguageContextType = {
  language: Language;
  t: (typeof translations)[Language];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(document.documentElement.lang === "pt" ? "pt" : "en");
  }, []);

  // The page is prerendered in English, the head script hides it until the saved language has rendered
  useEffect(() => {
    if (document.documentElement.lang === language) {
      document.documentElement.removeAttribute("data-lang-pending");
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    document.documentElement.lang = newLanguage;
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
