import { cn } from "~/lib/utils";

/**
 * A 2px silver rule that sweeps across the edge of a navy surface.
 * Absolutely positioned; pass `className` to pin it (default: top edge).
 */
export function SheenRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("dl-sheen absolute inset-x-0 top-0 h-0.5 z-[1]", className)}
    />
  );
}

interface OrbProps {
  className?: string;
  /** Peak alpha of the silver glow. */
  strength?: number;
  /** Drift in the opposite direction, on a slower cycle. */
  reverse?: boolean;
}

/** A soft silver glow that drifts. Size and position it via `className`. */
export function Orb({ className, strength = 0.16, reverse = false }: OrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("dl-orb absolute z-0", reverse && "dl-orb--reverse", className)}
      style={{ "--dl-orb-strength": strength } as React.CSSProperties}
    />
  );
}
