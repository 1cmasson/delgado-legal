import { cn } from '~/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
  size?: 'sm' | 'md' | 'lg';
  background?: 'default' | 'muted' | 'primary' | 'accent';
}

const sizeClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
};

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  primary: 'bg-primary text-primary-foreground',
  accent: 'bg-accent text-accent-foreground',
};

export function Section({
  children,
  className,
  containerClassName,
  as: Component = 'section',
  size = 'md',
  background = 'default',
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(sizeClasses[size], backgroundClasses[background], className)}
      {...props}
    >
      <div className={cn('container mx-auto px-6 lg:px-8 max-w-7xl', containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
