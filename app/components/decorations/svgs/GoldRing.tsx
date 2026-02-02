interface GoldRingProps {
  className?: string;
  size?: number;
}

export function GoldRing({ className, size = 256 }: GoldRingProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="128"
        cy="128"
        r="120"
        stroke="var(--brand-gold)"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
