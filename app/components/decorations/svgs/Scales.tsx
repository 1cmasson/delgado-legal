interface ScalesProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Scales({ className, color = "currentColor", size = 200 }: ScalesProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center pillar */}
      <line x1="100" y1="30" x2="100" y2="170" stroke={color} strokeWidth="3" />
      
      {/* Top beam */}
      <line x1="30" y1="50" x2="170" y2="50" stroke={color} strokeWidth="2" />
      
      {/* Left scale chain */}
      <line x1="40" y1="50" x2="40" y2="90" stroke={color} strokeWidth="1.5" />
      
      {/* Right scale chain */}
      <line x1="160" y1="50" x2="160" y2="80" stroke={color} strokeWidth="1.5" />
      
      {/* Left scale pan */}
      <path
        d="M15 90 Q40 100 65 90 Q60 110 40 115 Q20 110 15 90"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Right scale pan */}
      <path
        d="M135 80 Q160 90 185 80 Q180 100 160 105 Q140 100 135 80"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Base */}
      <path
        d="M70 170 L100 155 L130 170 L70 170"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      
      {/* Base platform */}
      <line x1="60" y1="175" x2="140" y2="175" stroke={color} strokeWidth="2" />
      
      {/* Decorative circle at top */}
      <circle cx="100" cy="30" r="6" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
