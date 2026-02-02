import { cn } from '~/lib/utils';
import type { ReactNode, ElementType } from 'react';

// Heading Component
interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'hero' | 'xl' | 'lg' | 'md' | 'sm';
  className?: string;
}

const headingSizes = {
  hero: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  xl: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
  lg: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
  md: 'text-xl md:text-2xl lg:text-3xl font-semibold',
  sm: 'text-lg md:text-xl font-medium',
};

export function Heading({
  children,
  as: Component = 'h2',
  size = 'lg',
  className,
}: HeadingProps) {
  return (
    <Component className={cn(headingSizes[size], className)}>
      {children}
    </Component>
  );
}

// Text Component
interface TextProps {
  children: ReactNode;
  as?: ElementType;
  size?: 'lg' | 'base' | 'sm' | 'xs';
  muted?: boolean;
  className?: string;
}

const textSizes = {
  lg: 'text-lg md:text-xl',
  base: 'text-base md:text-lg',
  sm: 'text-sm',
  xs: 'text-xs',
};

export function Text({
  children,
  as: Component = 'p',
  size = 'base',
  muted = false,
  className,
}: TextProps) {
  return (
    <Component
      className={cn(
        textSizes[size],
        muted && 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}
