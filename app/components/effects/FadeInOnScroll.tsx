import { cn } from "~/lib/utils";
import { useInView } from "~/hooks/useInView";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  duration = 600,
}: FadeInOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all motion-reduce:transition-none",
        isInView ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
