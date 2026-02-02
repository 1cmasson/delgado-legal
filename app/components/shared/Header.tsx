'use client';

import { useState } from 'react';
import { Link } from 'react-router';
import { Spin as Hamburger } from 'hamburger-react';
import { cn } from '~/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { useIsMobile } from '~/hooks/useMediaQuery';
import { useTranslation } from '~/providers/TranslationProvider';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const navigation = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/attorneys', labelKey: 'nav.attorneys' },
    { href: '/practices', labelKey: 'nav.practices' },
    { href: '/testimonials', labelKey: 'nav.testimonials' },
    { href: '/faq', labelKey: 'nav.faq' },
    { href: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] w-full border-b border-border/40 bg-background shadow-md',
        className
      )}
    >
      <nav
        className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Delgado Legal - Home"
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/logos/logo-desktop.webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/logos/logo-tablet.webp"
            />
            <img
              src="/images/logos/logo-mobile.webp"
              alt="Delgado Legal"
              className="h-14 w-auto"
            />
          </picture>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8 lg:ml-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent hover:underline focus:outline-none focus:underline px-2 py-1 whitespace-nowrap"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative z-[110] -mr-2 text-foreground/80 hover:text-foreground transition-colors">
          <Hamburger
            toggled={mobileMenuOpen}
            toggle={setMobileMenuOpen}
            size={24}
            direction="left"
            rounded
            label={mobileMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
          />
        </div>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} modal={false}>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] border-l-4 border-l-[#E4BE72]" 
            showCloseButton={false}
            onInteractOutside={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <nav className="flex flex-col gap-4 mt-20" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:shadow-lg"
      >
        {t('common.skipToContent')}
      </a>
    </header>
  );
}
