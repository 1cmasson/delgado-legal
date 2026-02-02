interface ArtDecoCornerProps {
  className?: string;
  color?: string;
  size?: number;
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function ArtDecoCorner({
  className,
  color = "currentColor",
  size = 120,
  corner = "top-left",
}: ArtDecoCornerProps) {
  // Rotation based on corner position
  const rotations = {
    "top-left": 0,
    "top-right": 90,
    "bottom-right": 180,
    "bottom-left": 270,
  };

  const rotation = rotations[corner];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Outer L-bracket (filled, thin) */}
      <path
        d="M6 6 L6 60 L9 60 L9 9 L60 9 L60 6 Z"
        fill={color}
      />
      
      {/* Inner L-bracket (filled, thin) */}
      <path
        d="M18 18 L18 42 L21 42 L21 21 L42 21 L42 18 Z"
        fill={color}
      />
    </svg>
  );
}
