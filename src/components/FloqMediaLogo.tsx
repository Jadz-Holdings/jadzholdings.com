import Image from "next/image";

type FloqMediaLogoProps = {
  className?: string;
  /** Visual height in pixels when not filling a shared venture logo slot. */
  height?: number;
  priority?: boolean;
  variant?: "logo" | "icon";
  /** Stretch to the shared venture logo slot width (matches SPAAVS footprint). */
  fillSlot?: boolean;
};

/**
 * Official FloqMedia brand mark from floqmedia.com.
 */
export function FloqMediaLogo({
  className = "",
  height = 48,
  priority = false,
  variant = "logo",
  fillSlot = false,
}: FloqMediaLogoProps) {
  if (variant === "icon") {
    const size = height;
    return (
      <span className={`inline-flex items-center ${className}`}>
        <Image
          src="/brand/floqmedia/floqmedia-icon-transparent.png"
          alt="FloqMedia"
          width={size}
          height={size}
          priority={priority}
          className="h-auto w-auto max-w-full select-none"
          style={{ height: size, width: "auto" }}
        />
      </span>
    );
  }

  const aspect = 2124 / 724;
  const width = Math.round(height * aspect);

  return (
    <span className={`inline-flex items-center ${className}`} style={fillSlot ? { width: "100%" } : undefined}>
      <Image
        src="/brand/floqmedia/floqmedia-logo-transparent.png"
        alt="FloqMedia"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-w-full select-none"
        style={fillSlot ? { width: "100%", height: "auto" } : { height, width: "auto" }}
      />
    </span>
  );
}
