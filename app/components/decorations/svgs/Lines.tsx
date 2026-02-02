interface LinesProps {
  className?: string;
  color?: string;
  size?: number;
  variant?: "diagonal" | "horizontal" | "grid";
}

export function Lines({ className, color = "currentColor", size = 200, variant = "diagonal" }: LinesProps) {
  if (variant === "horizontal") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(10)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 18}
            x2="200"
            y2={20 + i * 18}
            stroke={color}
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(5)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={40 * (i + 1)}
            x2="200"
            y2={40 * (i + 1)}
            stroke={color}
            strokeWidth="0.5"
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 * (i + 1)}
            y1="0"
            x2={40 * (i + 1)}
            y2="200"
            stroke={color}
            strokeWidth="0.5"
          />
        ))}
      </svg>
    );
  }

  // Diagonal (default)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1={i * 30}
          y1="0"
          x2={i * 30 + 200}
          y2="200"
          stroke={color}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
