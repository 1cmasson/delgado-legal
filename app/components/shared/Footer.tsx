import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { Orb, SheenRule } from '~/components/decorations';
import { SiteLogo } from '~/components/shared/SiteLogo';
import { useTranslation } from '~/providers/TranslationProvider';

const HEADING_CLASS =
  'font-serif text-sm font-semibold uppercase tracking-[0.14em] text-silver mb-4';
const LINK_CLASS =
  'text-sm text-primary-foreground/70 hover:text-silver transition-colors';

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
  cards: [
    { nameKey: 'site.cards.michael', href: '/card/michael' },
    { nameKey: 'site.cards.vanessa', href: '/card/vanessa' },
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
      className={cn(
        'relative overflow-hidden bg-[image:var(--grad-footer)] text-primary-foreground shadow-[inset_0_1px_0_rgba(196,211,227,0.3)]',
        className
      )}
      aria-label="Site footer"
    >
      <SheenRule className="z-[2]" />
      <Orb className="-top-[200px] -left-[140px] h-[520px] w-[520px]" />

      <div className="container relative z-[1] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              to="/"
              aria-label="Delgado Legal - Home"
              className="block w-[164px] max-w-full"
            >
              <SiteLogo theme="dark" />
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className={HEADING_CLASS}>{t('footer.services')}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className={LINK_CLASS}>
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className={HEADING_CLASS}>{t('footer.company')}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className={LINK_CLASS}>
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className={HEADING_CLASS}>{t('footer.contact')}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(LINK_CLASS, 'whitespace-pre-line')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {footerLinks.cards.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-semibold text-silver hover:text-white transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
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
                className="text-sm text-primary-foreground/60 hover:text-silver transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/60 hover:text-silver transition-colors"
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
