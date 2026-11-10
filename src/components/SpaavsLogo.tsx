import Image from "next/image";

type SpaavsLogoProps = {
  className?: string;
  /** Visual height in pixels when not filling a shared venture logo slot. */
  height?: number;
  priority?: boolean;
  /** Stretch to the shared venture logo slot width (matches FloqMedia footprint). */
  fillSlot?: boolean;
};

/**
 * Official SPAAVS wordmark from spaavs.com brand assets.
 * Black geometric mark with Tiffany dots in the A counters — not a text stand-in.
 */
export function SpaavsLogo({
  className = "",
  height = 44,
  priority = false,
  fillSlot = false,
}: SpaavsLogoProps) {
  const aspect = 1903 / 258;
  const width = Math.round(height * aspect);

  return (
    <span className={`inline-flex items-center ${className}`} style={fillSlot ? { width: "100%" } : undefined}>
      <Image
        src="/brand/spaavs/spaavs-wordmark-clean.png"
        alt="SPAAVS"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-w-full select-none"
        style={fillSlot ? { width: "100%", height: "auto" } : { height, width: "auto" }}
      />
    </span>
  );
}
