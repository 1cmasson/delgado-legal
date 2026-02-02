import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { useTranslation } from '~/providers/TranslationProvider';

const footerLinks = {
  services: [
    { nameKey: 'practices.areas.realEstate.title', href: '/practices#real-estate' },
    { nameKey: 'practices.areas.foreclosure.title', href: '/practices#foreclosure' },
    { nameKey: 'practices.areas.commercial.title', href: '/practices#commercial' },
    { nameKey: 'practices.areas.estate.title', href: '/practices#estate' },
  ],
  company: [
    { nameKey: 'nav.about', href: '/about' },
    { nameKey: 'nav.attorneys', href: '/attorneys' },
    { nameKey: 'nav.testimonials', href: '/testimonials' },
    { nameKey: 'nav.faq', href: '/faq' },
  ],
  contact: [
    { name: '(786) 762-2389', href: 'tel:+17867622389' },
    { name: 'michael@delgadolegalpa.com', href: 'mailto:michael@delgadolegalpa.com' },
    { name: '6500 Cow Pen Rd STE 304,\nMiami Lakes, FL\n33014', href: '/contact#location' },
  ],
};

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn('bg-primary text-primary-foreground', className)}
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" aria-label="Delgado Legal - Home">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/logos/footer-logo-desktop.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/logos/footer-logo-tablet.webp"
                  type="image/webp"
                />
                <img
                  src="/images/logos/footer-logo-mobile.webp"
                  alt="Delgado Legal"
                  className="h-16 w-auto"
                />
              </picture>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.nameKey}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors whitespace-pre-line"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              {t('footer.copyright').replace('{year}', String(currentYear))}
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
