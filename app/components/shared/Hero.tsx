import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Heading, Text } from './Typography';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'py-16 md:py-20',
  md: 'py-24 md:py-32',
  lg: 'py-32 md:py-44',
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className,
  align = 'center',
  size = 'lg',
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative bg-primary text-primary-foreground overflow-hidden',
        sizeClasses[size],
        className
      )}
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          'relative container mx-auto px-6 lg:px-8',
          align === 'center' && 'text-center',
          align === 'left' && 'text-left max-w-3xl'
        )}
      >
        {subtitle && (
          <Text
            as="span"
            size="sm"
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 text-accent font-medium uppercase tracking-wider"
          >
            {subtitle}
          </Text>
        )}

        <Heading
          as="h1"
          size="hero"
          id="hero-title"
          className={cn('mb-6', align === 'center' && 'mx-auto max-w-4xl')}
        >
          {title}
        </Heading>

        {description && (
          <Text
            size="lg"
            className={cn(
              'mb-8 text-primary-foreground/80',
              align === 'center' && 'mx-auto max-w-2xl'
            )}
          >
            {description}
          </Text>
        )}

        {(primaryCta || secondaryCta) && (
          <div
            className={cn(
              'flex flex-col sm:flex-row gap-4',
              align === 'center' && 'justify-center'
            )}
          >
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[200px]"
              >
                <Link to={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
