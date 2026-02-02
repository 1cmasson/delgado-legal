# Delgado Legal - React Router (Remix) Scaffold

A modern, accessible, and internationalized legal services website scaffold built with React Router (Remix), shadcn/ui, and Tailwind CSS.

## Features

- 🎨 **Centralized Design System** - Consistent theming with CSS custom properties
- 🌐 **Internationalization (i18n)** - English/Spanish support with language switcher
- ❄️ **Holiday Theme Provider** - Automatic seasonal effects (snow in December, etc.)
- ♿ **Accessible** - ARIA-compliant components, skip links, keyboard navigation
- 📱 **Responsive** - Mobile-first design with touch-friendly interactions
- ⚡ **Modern Stack** - React Router v7, TypeScript, Vite, Tailwind v4

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
app/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── shared/          # Custom shared components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── Typography.tsx
│   │   └── LanguageSwitcher.tsx
│   └── effects/         # Visual effects
│       └── SnowParticles.tsx
├── hooks/
│   ├── useHolidayTheme.ts
│   └── useMediaQuery.ts
├── lib/
│   ├── theme.ts         # Design tokens
│   ├── holidays.ts      # Holiday configurations
│   └── utils.ts         # Utility functions
├── providers/
│   └── ThemeProvider.tsx
├── routes/
│   ├── home.tsx         # / - Homepage
│   ├── about.tsx        # /about - About page
│   ├── practices.tsx    # /practices - Practice areas
│   ├── testimonials.tsx # /testimonials - Client testimonials
│   ├── faq.tsx          # /faq - FAQ page
│   └── contact.tsx      # /contact - Contact form
├── app.css              # Global styles & theme variables
├── root.tsx             # Root layout
└── routes.ts            # Route configuration
```

## Theming

### Brand Colors

The theme uses CSS custom properties for easy customization:

```css
:root {
  --brand-navy: #033A5B;    /* Primary background */
  --brand-gold: #E4BE72;    /* Accent/hover color */
  --brand-gray: #8B8B8B;    /* Text secondary */
}
```

### Modifying Theme

1. Edit CSS variables in `app/app.css`
2. For semantic tokens, modify the `:root` section
3. Design tokens are also available in `app/lib/theme.ts`

## Components

### Section Component

Wrapper for page sections with consistent padding:

```tsx
<Section size="lg" background="muted">
  {/* content */}
</Section>
```

### Hero Component

Full-width hero section:

```tsx
<Hero
  title="Your Title"
  subtitle="Subtitle"
  description="Description text"
  primaryCta={{ label: "CTA", href: "/contact" }}
/>
```

### Typography Components

```tsx
<Heading as="h1" size="hero">Main Title</Heading>
<Text size="lg" muted>Paragraph text</Text>
```

## Internationalization

### Translation Files

Located in `public/locales/{lang}/common.json`:

- `public/locales/en/common.json` - English
- `public/locales/es/common.json` - Spanish

### Language Switcher

The floating language switcher (bottom-right) persists selection in localStorage.

### Adding Languages

1. Create new folder in `public/locales/{lang}/`
2. Copy and translate `common.json`
3. Add language to `LanguageSwitcher.tsx` languages array

## Holiday Theme

### Configuration

Edit `app/lib/holidays.ts` to add/modify holidays:

```typescript
{
  name: 'christmas',
  startDate: { month: 12, day: 1 },
  endDate: { month: 12, day: 31 },
  effect: 'snow',
  accentColor: '#c41e3a',
}
```

### Supported Effects

- `snow` - Falling snowflakes (December)
- `hearts` - Floating hearts (Valentine's)
- `fireworks` - Firework bursts (4th of July)
- `confetti` - Confetti shower (New Year)

### Respecting User Preferences

Effects automatically respect `prefers-reduced-motion` media query.

## Adding shadcn Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## Accessibility

### Features Included

- Skip-to-content link
- ARIA labels on navigation
- Semantic HTML structure
- Keyboard-navigable components
- Focus indicators
- Color contrast compliance

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm typecheck` | Run TypeScript checks |

## Deployment

### Docker Deployment

```bash
docker build -t delgado-legal .
docker run -p 3000:3000 delgado-legal
```

### DIY Deployment

Deploy the output of `pnpm build`:

```
├── package.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Customization Checklist

- [ ] Replace placeholder logo images in `public/images/logos/`
- [ ] Update contact information in Footer and Contact page
- [ ] Customize practice areas content
- [ ] Add team member photos and bios
- [ ] Update testimonials with real client quotes
- [ ] Configure Google Maps embed on Contact page
- [ ] Set up form submission handling
- [ ] Update meta descriptions for SEO

## Tech Stack

- **Framework**: React Router v7 (Remix)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Build Tool**: Vite
- **Runtime**: Node.js

---

Built with ❤️ for Delgado Legal.
