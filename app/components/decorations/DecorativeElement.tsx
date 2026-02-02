import { cn } from "~/lib/utils";

interface DecorativeElementProps {
  children: React.ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  className?: string;
  opacity?: number;
}

const positionClasses = {
  "top-left": "top-0 left-[2px] md:left-0",
  "top-right": "top-0 right-[2px] md:right-0",
  "bottom-left": "bottom-0 left-[2px] md:left-0",
  "bottom-right": "bottom-0 right-[2px] md:right-0",
  "center-left": "top-1/2 left-[2px] md:left-0 -translate-y-1/2",
  "center-right": "top-1/2 right-[2px] md:right-0 -translate-y-1/2",
};

export function DecorativeElement({
  children,
  position = "top-right",
  className,
  opacity = 0.1,
}: DecorativeElementProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none select-none z-0",
        positionClasses[position],
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
