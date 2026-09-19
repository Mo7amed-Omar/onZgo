import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationContextType } from '../types/i18n';
import { translations } from '../data/translations';

const LanguageContext = createContext<TranslationContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Arabic ('ar') as requested by Egyptian client
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('onzgo_lang') as Language;
      return saved === 'en' ? 'en' : 'ar';
    }
    return 'ar';
  });

  const isRTL = lang === 'ar';

  useEffect(() => {
    localStorage.setItem('onzgo_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [lang, isRTL]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let current: any = translations[lang];

    for (const k of keys) {
      if (current === undefined || current === null) return key;
      current = current[k];
    }

    return current !== undefined ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

