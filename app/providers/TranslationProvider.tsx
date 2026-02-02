'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Locale = 'en' | 'es';

type TranslationContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tRaw: <T = unknown>(key: string) => T | undefined;
  isLoading: boolean;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

const STORAGE_KEY = 'preferred-language';

// Helper to get nested value from object using dot notation
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let value: unknown = obj;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path; // Return key if not found
    }
  }
  
  return typeof value === 'string' ? value : path;
}

// Helper to get raw nested value (for arrays/objects)
function getNestedRawValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let value: unknown = obj;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return value;
}

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Record<string, unknown>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for a given locale
  const loadTranslations = useCallback(async (lang: Locale) => {
    try {
      const response = await fetch(`/locales/${lang}/common.json`);
      if (response.ok) {
        const data = await response.json();
        setTranslations(data);
      }
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize locale from storage or browser
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let initialLocale: Locale = 'en';
    
    if (stored === 'en' || stored === 'es') {
      initialLocale = stored;
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        initialLocale = 'es';
      }
    }
    
    setLocaleState(initialLocale);
    document.documentElement.lang = initialLocale;
    loadTranslations(initialLocale);
  }, [loadTranslations]);

  // Listen for language change events from TranslateWidget
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<{ lang: Locale }>) => {
      const newLocale = event.detail.lang;
      setLocaleState(newLocale);
      loadTranslations(newLocale);
    };

    window.addEventListener('languagechange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange as EventListener);
    };
  }, [loadTranslations]);

  // Set locale and persist
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    loadTranslations(newLocale);
    
    // Dispatch event for other components
    window.dispatchEvent(
      new CustomEvent('languagechange', { detail: { lang: newLocale } })
    );
  }, [loadTranslations]);

  // Translation function
  const t = useCallback((key: string): string => {
    return getNestedValue(translations, key);
  }, [translations]);

  // Raw translation function for arrays/objects
  const tRaw = useCallback(<T = unknown>(key: string): T | undefined => {
    return getNestedRawValue(translations, key) as T | undefined;
  }, [translations]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t, tRaw, isLoading }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
