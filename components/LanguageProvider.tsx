'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, translations, getTranslation } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('lt');

useEffect(() => {
  // Check for saved preference only
  const saved = localStorage.getItem('apex-locale') as Locale;
  if (saved && (saved === 'lt' || saved === 'en')) {
    setLocaleState(saved);
  }
  // If no saved preference, keeps default Lithuanian
}, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('apex-locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
