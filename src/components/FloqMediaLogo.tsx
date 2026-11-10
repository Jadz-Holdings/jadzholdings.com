import Image from "next/image";

type FloqMediaLogoProps = {
  className?: string;
  /** Visual height in pixels for the approved FloqMedia wordmark. */
  height?: number;
  priority?: boolean;
  variant?: "logo" | "icon";
};

/**
 * Official FloqMedia brand mark from floqmedia.com.
 */
export function FloqMediaLogo({
  className = "",
  height = 48,
  priority = false,
  variant = "logo",
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
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/floqmedia/floqmedia-logo-transparent.png"
        alt="FloqMedia"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-w-full select-none"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
