'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { useHolidayTheme } from '~/hooks/useHolidayTheme';
import type { HolidayConfig } from '~/lib/holidays';

interface ThemeContextValue {
  holiday: HolidayConfig | null;
  isHoliday: boolean;
  holidayName: string | null;
  effect: string | null;
  accentColor: string | undefined;
  logoVariant: string | undefined;
  prefersReducedMotion: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const holidayTheme = useHolidayTheme();

  return (
    <ThemeContext.Provider value={holidayTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
