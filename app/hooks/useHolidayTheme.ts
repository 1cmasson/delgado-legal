import { useState, useEffect } from 'react';
import { getCurrentHoliday, type HolidayConfig } from '~/lib/holidays';

export function useHolidayTheme() {
  const [holiday, setHoliday] = useState<HolidayConfig | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setHoliday(getCurrentHoliday());
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return {
    holiday,
    isHoliday: holiday !== null,
    holidayName: holiday?.name ?? null,
    effect: prefersReducedMotion ? null : holiday?.effect ?? null,
    accentColor: holiday?.accentColor,
    logoVariant: holiday?.logoVariant,
    prefersReducedMotion,
  };
}
