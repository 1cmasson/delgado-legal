import { cn } from "~/lib/utils";
import { useInView } from "~/hooks/useInView";

interface SlideUpOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideUpOnScroll({
  children,
  className,
  delay = 0,
  duration = 600,
  distance = 30,
}: SlideUpOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all motion-reduce:transition-none",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${distance}px)`,
      }}
    >
      {children}
    </div>
  );
}
