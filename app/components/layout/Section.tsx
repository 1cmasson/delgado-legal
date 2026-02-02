import { cn } from "~/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary" | "accent" | "accent-solid";
  id?: string;
  size?: "default" | "compact" | "hero";
}

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent/10",
  "accent-solid": "bg-accent text-accent-foreground",
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
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}
