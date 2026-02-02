'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '~/providers/TranslationProvider';

const STORAGE_KEY = 'delgado-widget-dismissed';

const FLAGS = {
  en: '/images/flags/us.webp',
  es: '/images/flags/es.webp',
};

const LANG_LABELS = {
  en: 'EN',
  es: 'ES',
};

type Language = 'en' | 'es';

export function TranslateWidget() {
  const { locale, setLocale } = useTranslation();
  const [isDismissed, setIsDismissed] = useState(true); // Start hidden to avoid flash
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Initialize dismissed state from localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsDismissed(dismissed);
  }, []);

  // Close confirmation when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        showConfirm &&
        confirmRef.current &&
        closeRef.current &&
        !confirmRef.current.contains(e.target as Node) &&
        !closeRef.current.contains(e.target as Node)
      ) {
        setShowConfirm(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showConfirm]);

  const targetLang: Language = locale === 'en' ? 'es' : 'en';

  const handleToggle = () => {
    setLocale(targetLang);
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsDismissed(true);
    setShowConfirm(false);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className="translate-widget">
      {/* Widget container */}
      <div className="translate-widget__container">
        {/* Main toggle button */}
        <button
          className="translate-widget__button"
          onClick={handleToggle}
          aria-label={
            targetLang === 'en' ? 'Switch to English' : 'Cambiar a Español'
          }
        >
          <img
            src={FLAGS[targetLang]}
            alt=""
            className="translate-widget__flag"
          />
          <span className="translate-widget__lang">{LANG_LABELS[targetLang]}</span>
        </button>

        {/* Close button */}
        <button
          ref={closeRef}
          className="translate-widget__close"
          onClick={(e) => {
            e.stopPropagation();
            setShowConfirm(true);
          }}
          aria-label={locale === 'en' ? 'Dismiss widget' : 'Cerrar widget'}
        >
          ×
        </button>
      </div>

      {/* Confirmation popup - below widget */}
      <div
        ref={confirmRef}
        className="translate-widget__confirm"
        data-visible={showConfirm}
      >
        <p className="translate-widget__confirm-text">
          {locale === 'en' ? 'Hide this button?' : '¿Ocultar este botón?'}
        </p>
        <div className="translate-widget__confirm-actions">
          <button
            className="translate-widget__confirm-btn translate-widget__confirm-btn--yes"
            onClick={handleDismiss}
          >
            {locale === 'en' ? 'Yes' : 'Sí'}
          </button>
          <button
            className="translate-widget__confirm-btn translate-widget__confirm-btn--no"
            onClick={() => setShowConfirm(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Reset the widget dismissed state (for testing/admin purposes)
 * Usage in console: window.resetTranslateWidget()
 */
if (typeof window !== 'undefined') {
  (window as Window & { resetTranslateWidget?: () => void }).resetTranslateWidget = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };
}
