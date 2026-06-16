"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { Lang } from "@/src/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to "en" synchronously so server and the client's first render match.
  // Detect stored/browser language only after mount to avoid hydration mismatches.
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("romance-lang", l);
    } catch (e) {
      // ignore (e.g., in private mode)
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "pl" : "en"));
  }, [setLang]);

  // On mount, read stored preference or browser language and apply it.
  // Doing this in an effect ensures the server-rendered HTML (which uses "en")
  // matches the client's first render, preventing hydration mismatch.
  useEffect(() => {
    try {
      const stored = localStorage.getItem("romance-lang") as Lang | null;
      if (stored === "en" || stored === "pl") {
        if (stored !== lang) setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
    } catch (e) {
      // ignore localStorage access errors
    }
    const browser = typeof navigator !== "undefined" ? navigator.language?.slice(0, 2) : undefined;
    const initial = browser === "pl" ? "pl" : "en";
    if (initial !== lang) setLangState(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
