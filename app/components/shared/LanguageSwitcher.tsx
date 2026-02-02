'use client';

import { useState, useEffect } from 'react';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('preferred-language');
    if (stored && languages.some((l) => l.code === stored)) {
      setCurrentLang(stored);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (languages.some((l) => l.code === browserLang)) {
        setCurrentLang(browserLang);
      }
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferred-language', langCode);
    setIsOpen(false);
    // In a real app, this would trigger i18n context update
    document.documentElement.lang = langCode;
  };

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className={cn('fixed bottom-6 right-6 z-50', className)}>
      <div className="relative">
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute bottom-full right-0 mb-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[140px]"
            role="menu"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                  'hover:bg-muted focus:bg-muted focus:outline-none',
                  currentLang === lang.code && 'bg-muted font-medium'
                )}
                role="menuitem"
                aria-current={currentLang === lang.code ? 'true' : undefined}
              >
                <span className="text-lg" aria-hidden="true">
                  {lang.flag}
                </span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-12 w-12 p-0 shadow-lg bg-background hover:bg-muted"
          aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <span className="text-xl">{currentLanguage.flag}</span>
        </Button>
      </div>
    </div>
  );
}
