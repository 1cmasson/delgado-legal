import { cn } from "~/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?:
    | "default"
    | "muted"
    | "primary"
    | "accent"
    | "accent-solid"
    | "navy-gradient";
  id?: string;
  size?: "default" | "compact" | "hero";
  /**
   * Ornaments (orbs, sheen rules, decorative SVGs) rendered *behind* the
   * content container so they sit at z-0 rather than inside the z-10 wrapper.
   */
  overlay?: React.ReactNode;
}

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-mist",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-mist",
  // The old gold band — now the silver gradient band from the design.
  "accent-solid": "bg-[image:var(--grad-cta-band)] text-navy-900",
  "navy-gradient": "bg-[image:var(--grad-practices)] text-white",
};

const sizeClasses = {
  default: "py-16 md:py-24",
  compact: "py-12 md:py-16",
  hero: "py-12 md:py-16",
};

export function Section({
  children,
  className,
  background = "default",
  id,
  size = "default",
  overlay,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        sizeClasses[size],
        backgroundClasses[background],
        className
      )}
    >
      {overlay}
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}
