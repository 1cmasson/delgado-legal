import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Translate with a fallback. Dictionaries are fetched on the client, so during
 * SSR and first paint `t()` returns the key path itself; this swaps in readable
 * English until the locale file lands.
 */
export function tf(
  t: (key: string) => string,
  key: string,
  fallback: string
): string {
  const value = t(key)
  return value === key ? fallback : value
}
