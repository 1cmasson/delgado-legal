import { cn } from "~/lib/utils";

interface SiteLogoProps {
  /** `light` for navy ink on light surfaces, `dark` for silver ink on navy. */
  theme?: "light" | "dark";
  className?: string;
  /** Hide the two rules that flank the P.A. */
  showRules?: boolean;
}

const INK = { light: "#033A5B", dark: "#E6EEF7" } as const;
const RULE = { light: "#033A5B", dark: "#8FA6BE" } as const;

/** One mask layer of the lockup, recolored by `background-color`. */
function MaskLayer({
  src,
  color,
  style,
}: {
  src: string;
  color: string;
  style: React.CSSProperties;
}) {
  const mask = `url(${src}) no-repeat center/100% 100%`;
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: color,
        WebkitMask: mask,
        mask,
        ...style,
      }}
    />
  );
}

/**
 * The Delgado Legal lockup: monogram over wordmark over "P.A.", flanked by two
 * rules. Each glyph is an SVG used as a CSS mask so the whole mark recolors
 * from a single ink value. Percentages are the design's measured positions
 * against an 870 x 340 artboard.
 */
export function SiteLogo({
  theme = "light",
  className,
  showRules = true,
}: SiteLogoProps) {
  const ink = INK[theme];
  const rule = showRules ? RULE[theme] : "transparent";

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full" style={{ aspectRatio: "870 / 340" }}>
        <MaskLayer
          src="/images/logos/dl-monogram.svg"
          color={ink}
          style={{ left: "36.55%", top: 0, width: "24.885%", height: "52.79%" }}
        />
        <MaskLayer
          src="/images/logos/dl-wordmark.svg"
          color={ink}
          style={{ left: 0, top: "62.65%", width: "100%", height: "19.12%" }}
        />
        <MaskLayer
          src="/images/logos/dl-pa.svg"
          color={ink}
          style={{ left: "42.47%", top: "88.82%", width: "14.66%", height: "11.18%" }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "9.02%",
            top: "94.27%",
            width: "29.885%",
            height: "1.47%",
            minHeight: 1,
            background: rule,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "62.13%",
            top: "94.27%",
            width: "29.885%",
            height: "1.47%",
            minHeight: 1,
            background: rule,
          }}
        />
      </div>
    </div>
  );
}
