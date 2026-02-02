import { useMediaQuery } from "~/hooks/useMediaQuery";

interface DocumentProps {
  className?: string;
  color?: string;
  size?: number;
  animated?: boolean;
}

export function Document({ className, color = "currentColor", size = 200, animated = false }: DocumentProps) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const shouldAnimate = animated && !prefersReducedMotion;

  return (
    <svg
      width={size * 0.7}
      height={size}
      viewBox="0 0 140 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shouldAnimate && (
        <style>
          {`
            @keyframes document-float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes document-fade-pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
            .document-animated {
              animation: document-float 4s ease-in-out infinite;
            }
            .seal-pulse {
              animation: document-fade-pulse 3s ease-in-out infinite;
            }
          `}
        </style>
      )}
      
      <g className={shouldAnimate ? "document-animated" : undefined}>
        {/* Main document */}
        <path
          d="M20 10 L100 10 L120 30 L120 190 L20 190 Z"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Folded corner */}
        <path
          d="M100 10 L100 30 L120 30"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Text lines */}
        <line x1="35" y1="50" x2="105" y2="50" stroke={color} strokeWidth="1" />
        <line x1="35" y1="65" x2="105" y2="65" stroke={color} strokeWidth="1" />
        <line x1="35" y1="80" x2="85" y2="80" stroke={color} strokeWidth="1" />
        
        <line x1="35" y1="100" x2="105" y2="100" stroke={color} strokeWidth="1" />
        <line x1="35" y1="115" x2="105" y2="115" stroke={color} strokeWidth="1" />
        <line x1="35" y1="130" x2="75" y2="130" stroke={color} strokeWidth="1" />
        
        {/* Seal/stamp circle */}
        <g className={shouldAnimate ? "seal-pulse" : undefined}>
          <circle cx="90" cy="160" r="15" stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="90" cy="160" r="10" stroke={color} strokeWidth="0.5" fill="none" />
        </g>
        
        {/* Signature line */}
        <line x1="35" y1="165" x2="65" y2="165" stroke={color} strokeWidth="1" />
        <path
          d="M38 162 Q45 155 52 162 Q55 165 60 160"
          stroke={color}
          strokeWidth="0.75"
          fill="none"
        />
      </g>
    </svg>
  );
}
