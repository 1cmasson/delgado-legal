// Delgado Legal Design Tokens
export const theme = {
  colors: {
    brand: {
      navy: '#033A5B',
      gold: '#E4BE72',
      gray: '#8B8B8B',
    },
    primary: 'var(--primary)',
    accent: 'var(--accent)',
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    muted: 'var(--muted)',
    mutedForeground: 'var(--muted-foreground)',
  },
  spacing: {
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '7rem',
    },
    container: {
      padding: '1.5rem',
      maxWidth: '1280px',
    },
  },
  typography: {
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      heading: '"Inter", ui-sans-serif, system-ui, sans-serif',
    },
    fontSize: {
      hero: 'clamp(2.5rem, 5vw, 4rem)',
      h1: 'clamp(2rem, 4vw, 3rem)',
      h2: 'clamp(1.5rem, 3vw, 2.25rem)',
      h3: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      body: '1rem',
      small: '0.875rem',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

export type Theme = typeof theme;
