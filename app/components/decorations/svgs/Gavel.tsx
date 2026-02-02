interface GavelProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Gavel({ className, color = "currentColor", size = 200 }: GavelProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gavel head */}
      <rect
        x="40"
        y="30"
        width="80"
        height="35"
        rx="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
        transform="rotate(-30 80 47.5)"
      />
      
      {/* Handle */}
      <line
        x1="95"
        y1="75"
        x2="150"
        y2="140"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Sound block base */}
      <ellipse
        cx="100"
        cy="170"
        rx="50"
        ry="12"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="100"
        cy="165"
        rx="45"
        ry="10"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Decorative bands on gavel head */}
      <line
        x1="52"
        y1="42"
        x2="62"
        y2="60"
        stroke={color}
        strokeWidth="1"
      />
      <line
        x1="98"
        y1="25"
        x2="108"
        y2="43"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
}
