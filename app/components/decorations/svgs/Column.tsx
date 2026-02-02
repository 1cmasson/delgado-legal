interface ColumnProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Column({ className, color = "currentColor", size = 200 }: ColumnProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 80 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Capital (top) */}
      <rect x="5" y="10" width="70" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="10" y="18" width="60" height="5" stroke={color} strokeWidth="1" fill="none" />
      
      {/* Volutes */}
      <path d="M10 23 Q5 28 10 33" stroke={color} strokeWidth="1" fill="none" />
      <path d="M70 23 Q75 28 70 33" stroke={color} strokeWidth="1" fill="none" />
      
      {/* Shaft */}
      <rect x="15" y="30" width="50" height="140" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Fluting (vertical lines) */}
      <line x1="25" y1="35" x2="25" y2="165" stroke={color} strokeWidth="0.5" />
      <line x1="35" y1="35" x2="35" y2="165" stroke={color} strokeWidth="0.5" />
      <line x1="45" y1="35" x2="45" y2="165" stroke={color} strokeWidth="0.5" />
      <line x1="55" y1="35" x2="55" y2="165" stroke={color} strokeWidth="0.5" />
      
      {/* Base */}
      <rect x="10" y="170" width="60" height="5" stroke={color} strokeWidth="1" fill="none" />
      <rect x="5" y="175" width="70" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="0" y="183" width="80" height="7" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
