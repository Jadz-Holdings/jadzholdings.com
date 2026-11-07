import Image from "next/image";

type SpaavsLogoProps = {
  className?: string;
  /** Visual height in pixels for the approved raster wordmark. */
  height?: number;
  priority?: boolean;
};

/**
 * Official SPAAVS wordmark from spaavs.com brand assets.
 * Black geometric mark with Tiffany dots in the A counters — not a text stand-in.
 */
export function SpaavsLogo({
  className = "",
  height = 44,
  priority = false,
}: SpaavsLogoProps) {
  const aspect = 1903 / 258;
  const width = Math.round(height * aspect);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/spaavs/spaavs-wordmark-clean.png"
        alt="SPAAVS"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-w-full select-none"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
