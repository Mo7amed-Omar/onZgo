export type Language = 'ar' | 'en';

export interface TranslationContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
  isRTL: boolean;
}

