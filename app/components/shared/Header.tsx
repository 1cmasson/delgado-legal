'use client';

import { useState } from 'react';
import { Link } from 'react-router';
import { Spin as Hamburger } from 'hamburger-react';
import { cn } from '~/lib/utils';
import { Sheet, SheetContent } from '~/components/ui/sheet';
import { SheenRule } from '~/components/decorations';
import { SiteLogo } from '~/components/shared/SiteLogo';
import { Button } from '~/components/ui/button';
import { useTranslation } from '~/providers/TranslationProvider';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        'sticky top-0 z-[100] w-full border-b border-silver/60 bg-[image:var(--grad-surface)] shadow-[0_12px_32px_-20px_rgba(10,27,46,0.5)]',
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
          className="flex w-[143px] shrink-0 items-center"
          aria-label="Delgado Legal - Home"
        >
          <SiteLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1.5 lg:ml-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-serif text-xs font-semibold uppercase tracking-[0.06em] text-foreground/85 whitespace-nowrap rounded-[9px] px-1.5 py-1.5 transition-[color,background,box-shadow] hover:text-navy-900 hover:bg-linear-[135deg,#F7FAFD,#DFE9F3] hover:shadow-[inset_0_0_0_1px_rgba(196,211,227,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative z-[110] -mr-2 text-navy-700 transition-colors hover:text-navy-900">
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
            className="w-[300px] sm:w-[400px] border-l-4 border-l-silver bg-[image:var(--grad-surface)]"
            showCloseButton={false}
            onInteractOutside={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <nav className="flex flex-col mt-20 px-4" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-[15px] font-semibold uppercase tracking-[0.12em] leading-tight text-navy-700 border-b border-silver/60 rounded-[10px] px-2.5 py-[15px] transition-[background,color] hover:bg-linear-[135deg,#F7FAFD,#DFE9F3] hover:text-navy-900"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-3.5 mb-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t('home.hero.ctaPrimary')}
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      <SheenRule className="top-[72px]" />

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
